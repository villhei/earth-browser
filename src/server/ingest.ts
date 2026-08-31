/**
 * PostGIS Ingestion Pipeline for Historical Datasets
 *
 * Source datasets: https://github.com/aourednik/historical-basemaps/tree/master/geojson
 * Author: André Ourednik (https://ourednik.info/historicalmaps/)
 * License: GNU General Public License v3.0 (GPL-3.0)
 */

import fs from "fs"
import path from "path"
import { pool, closePool } from "./db"
import { ERA_CATALOG, getEraByFilename } from "./eraMetadata"
import { resolveEntityMetadata } from "../features/globe/historicalLineage"


async function ingest() {
  console.log("Starting Historical Earth GeoJSON Ingestion (Raw Geometry Mode)...")
  const seedDir = path.resolve(__dirname, "../../migrations/seed")


  if (!fs.existsSync(seedDir)) {
    console.error(`Seed directory not found at: ${seedDir}`)
    process.exit(1)
  }

  const files = fs
    .readdirSync(seedDir)
    .filter((f) => f.endsWith(".geojson") && f !== "places.geojson")
    .sort((a, b) => {
      const eraA = getEraByFilename(a)
      const eraB = getEraByFilename(b)
      const yearA = eraA ? eraA.year_start : 0
      const yearB = eraB ? eraB.year_start : 0
      return yearA - yearB
    })

  console.log(`Found ${files.length} Era GeoJSON files in ${seedDir}`)

  let totalFeaturesIngested = 0

  for (const file of files) {
    const meta = getEraByFilename(file)
    const filePath = path.join(seedDir, file)
    const rawData = fs.readFileSync(filePath, "utf-8")
    const geojson = JSON.parse(rawData)

    const slug = meta ? meta.slug : file.replace(".geojson", "")
    const name = meta ? meta.name : geojson.name || file.replace(".geojson", "")
    const year_start = meta ? meta.year_start : 0
    const year_end = meta ? meta.year_end : undefined
    const year_label = meta ? meta.year_label : `${year_start}`
    const description = meta ? meta.description : ""

    const eraClient = await pool.connect()
    try {
      await eraClient.query("BEGIN")

      // 1. Upsert Era record
      const eraRes = await eraClient.query(
        `
        INSERT INTO eras (slug, name, year_start, year_end, year_label, description, feature_count)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        ON CONFLICT (slug) DO UPDATE
        SET name = EXCLUDED.name,
            year_start = EXCLUDED.year_start,
            year_end = EXCLUDED.year_end,
            year_label = EXCLUDED.year_label,
            description = EXCLUDED.description
        RETURNING id
      `,
        [
          slug,
          name,
          year_start,
          year_end,
          year_label,
          description,
          geojson.features?.length || 0,
        ]
      )

      const eraId = eraRes.rows[0].id

      // 2. Clear old features for idempotency
      await eraClient.query("DELETE FROM era_features WHERE era_id = $1", [eraId])

      // 3. Ingest Features with Land-Clipping to prevent ocean overlap
      const features = geojson.features || []
      let validFeatures = 0

      for (const feature of features) {
        if (!feature.geometry) continue

        const props = feature.properties || {}
        const rawName = (
          props.NAME ||
          props.name ||
          props.NAME_LONG ||
          props.SOVEREIGNT ||
          props.ADMIN ||
          props.ABBREVNAME ||
          ""
        ).trim()
        const featureName = rawName || "Unclaimed"
        const formalName = props.FORMAL_EN || props.FORMAL_FR || null
        const isoA3 = props.ISO_A3 || props.ADM0_A3 || null
        const geomJson = JSON.stringify(feature.geometry)

        const rawPrecision = props.BORDERPRECISION ?? props.border_precision ?? props.BORDERI ?? null
        const borderPrecision =
          rawPrecision !== null && rawPrecision !== undefined && !isNaN(Number(rawPrecision))
            ? Number(rawPrecision)
            : null
        const partOf = (props.PARTOF || props.part_of || "").trim() || null
        const subjectTo =
          (props.SUBJECTO || props.subject_to || props.SUBCTO || "").trim() || null

        const entityMeta = resolveEntityMetadata(featureName, props)
        const enrichedProps = {
          ...props,
          color: entityMeta.color,
          lineage_id: entityMeta.lineageId,
          canonical_name: entityMeta.canonicalName,
          cultureGroup: entityMeta.cultureGroup,
          is_unclaimed: entityMeta.isUnclaimed,
          border_precision: borderPrecision,
          BORDERPRECISION: borderPrecision,
          part_of: partOf,
          PARTOF: partOf,
          subject_to: subjectTo,
          SUBJECTO: subjectTo,
        }

        const insertRes = await eraClient.query(
          `
          WITH raw_geom AS (
            SELECT ST_Multi(ST_CollectionExtract(ST_MakeValid(ST_SetSRID(ST_GeomFromGeoJSON($4), 4326)), 3)) AS g
          ),
          surface_pt AS (
            SELECT ST_PointOnSurface(g) AS pt FROM raw_geom
          )
          INSERT INTO era_features (
            era_id, name, formal_name, iso_a3, properties, geom, geom_simplified, label_lng, label_lat,
            border_precision, part_of, subject_to
          )
          SELECT
            $1,
            $2,
            $3,
            $5,
            $6::jsonb,
            g,
            g,
            ST_X(pt),
            ST_Y(pt),
            $7,
            $8,
            $9
          FROM raw_geom, surface_pt
          WHERE NOT ST_IsEmpty(g)
          RETURNING id;
        `,
          [
            eraId,
            featureName,
            formalName,
            geomJson,
            isoA3,
            JSON.stringify(enrichedProps),
            borderPrecision,
            partOf,
            subjectTo,
          ]
        )

        if (insertRes.rowCount && insertRes.rowCount > 0) {
          validFeatures++
        }
      }

      // 4. Precalculate topological DAG elevation tiers for overlapping / nested polygons in this era
      const featsRes = await eraClient.query(
        `
        SELECT id, ST_Area(geom) AS area
        FROM era_features
        WHERE era_id = $1
          AND name NOT ILIKE '%unclaimed%'
          AND COALESCE((properties->>'is_unclaimed')::boolean, false) IS FALSE
        ORDER BY ST_Area(geom) DESC, id ASC;
      `,
        [eraId]
      )

      const feats = featsRes.rows || []
      if (feats.length > 0) {
        const overlapsRes = await eraClient.query(
          `
          SELECT 
            f1.id AS larger_id, 
            f2.id AS smaller_id
          FROM era_features f1
          JOIN era_features f2 ON 
            f1.era_id = f2.era_id 
            AND f1.id != f2.id
            AND (
              ST_Area(f1.geom) > ST_Area(f2.geom) 
              OR (ST_Area(f1.geom) = ST_Area(f2.geom) AND f1.id < f2.id)
            )
            AND f1.name NOT ILIKE '%unclaimed%'
            AND f2.name NOT ILIKE '%unclaimed%'
            AND COALESCE((f1.properties->>'is_unclaimed')::boolean, false) IS FALSE
            AND COALESCE((f2.properties->>'is_unclaimed')::boolean, false) IS FALSE
            AND f1.geom && f2.geom
            AND ST_Intersects(f1.geom, f2.geom)
            AND ST_Area(ST_Intersection(f1.geom, f2.geom)) / NULLIF(LEAST(ST_Area(f1.geom), ST_Area(f2.geom)), 0) > 0.05
          WHERE f1.era_id = $1;
        `,
          [eraId]
        )

        const overlaps = overlapsRes.rows || []
        const parentMap = new Map<string, Set<string>>()
        for (const row of overlaps) {
          if (!parentMap.has(row.smaller_id)) parentMap.set(row.smaller_id, new Set())
          parentMap.get(row.smaller_id)!.add(row.larger_id)
        }

        const tierMap = new Map<string, number>()
        const updates: Array<{ id: string; tier: number }> = []

        for (const feat of feats) {
          const parents = parentMap.get(feat.id)
          let assignedTier = 0
          if (parents && parents.size > 0) {
            for (const parentId of parents) {
              const parentTier = tierMap.get(parentId) ?? 0
              if (parentTier + 1 > assignedTier) {
                assignedTier = parentTier + 1
              }
            }
          }
          tierMap.set(feat.id, assignedTier)
          updates.push({ id: feat.id, tier: assignedTier })
        }

        if (updates.length > 0) {
          const valuesSql = updates.map((u) => `('${u.id}'::uuid, ${u.tier})`).join(", ")
          await eraClient.query(`
            UPDATE era_features AS f
            SET 
              elevation_tier = v.tier,
              properties = jsonb_set(
                jsonb_set(f.properties, '{elevation_tier}', to_jsonb(v.tier)),
                '{elevationTier}', to_jsonb(v.tier)
              )
            FROM (VALUES ${valuesSql}) AS v(id, tier)
            WHERE f.id = v.id;
          `)
        }
      }

      // Update actual count
      await eraClient.query(
        "UPDATE eras SET feature_count = $1 WHERE id = $2",
        [validFeatures, eraId]
      )

      await eraClient.query("COMMIT")
      totalFeaturesIngested += validFeatures
      console.log(`  ✓ ${slug} (${name}): ${validFeatures} features ingested`)
    } catch (err: any) {
      await eraClient.query("ROLLBACK")
      console.error(`  ✗ Error ingesting ${file}:`, err.message)
    } finally {
      eraClient.release()
    }
  }

  console.log(
    `\nIngestion complete! Total features ingested: ${totalFeaturesIngested}`
  )

  await closePool()
}

if (require.main === module) {
  ingest().catch((err) => {
    console.error("Fatal ingestion error:", err)
    process.exit(1)
  })
}

export default ingest
