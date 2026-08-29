import fs from "fs"
import path from "path"
import { pool, closePool } from "./db"
import { ERA_CATALOG, getEraByFilename } from "./eraMetadata"
import { resolveEntityMetadata } from "../features/globe/historicalLineage"

async function ensureGlobalLand(client: any, seedDir: string) {
  await client.query(`
    CREATE TABLE IF NOT EXISTS global_land (
      id SERIAL PRIMARY KEY,
      geom GEOMETRY(MultiPolygon, 4326) NOT NULL
    );
    CREATE INDEX IF NOT EXISTS idx_global_land_geom ON global_land USING GIST(geom);
  `)

  const countRes = await client.query("SELECT COUNT(*) FROM global_land")
  const count = parseInt(countRes.rows[0].count, 10)

  if (count === 0) {
    const landFile = path.join(seedDir, "land_50m.geojson")
    if (fs.existsSync(landFile)) {
      console.log("🌊 Ingesting global land boundaries (land_50m.geojson) for ocean clipping...")
      const rawLand = fs.readFileSync(landFile, "utf-8")
      const landGeoJson = JSON.parse(rawLand)
      const features = landGeoJson.features || []

      for (const feat of features) {
        if (!feat.geometry) continue
        await client.query(
          `
          INSERT INTO global_land (geom)
          SELECT ST_Multi(ST_CollectionExtract(ST_MakeValid(ST_SetSRID(ST_GeomFromGeoJSON($1), 4326)), 3))
        `,
          [JSON.stringify(feat.geometry)]
        )
      }
      console.log(`  ✓ Successfully loaded ${features.length} land reference polygons into global_land`)
    } else {
      console.warn("  ⚠️ land_50m.geojson not found in seed dir. Ocean clipping will fallback to raw bounds.")
    }
  }
}

async function ingest() {
  console.log("🌍 Starting Historical Earth GeoJSON Ingestion...")
  const seedDir = path.resolve(__dirname, "../../migrations/seed")

  if (!fs.existsSync(seedDir)) {
    console.error(`Seed directory not found at: ${seedDir}`)
    process.exit(1)
  }

  const client = await pool.connect()
  try {
    // 0. Ensure global land table exists and is populated for coastline clipping
    await ensureGlobalLand(client, seedDir)
  } finally {
    client.release()
  }

  const files = fs
    .readdirSync(seedDir)
    .filter(
      (f) =>
        f.endsWith(".geojson") &&
        f !== "places.geojson" &&
        !f.startsWith("land_")
    )
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

        const entityMeta = resolveEntityMetadata(featureName, props)
        const enrichedProps = {
          ...props,
          color: entityMeta.color,
          lineage_id: entityMeta.lineageId,
          canonical_name: entityMeta.canonicalName,
          cultureGroup: entityMeta.cultureGroup,
          is_unclaimed: entityMeta.isUnclaimed,
        }

        const insertRes = await eraClient.query(
          `
          WITH raw_geom AS (
            SELECT ST_Multi(ST_CollectionExtract(ST_MakeValid(ST_SetSRID(ST_GeomFromGeoJSON($4), 4326)), 3)) AS g
          ),
          clipped_pieces AS (
            SELECT (ST_Dump(ST_CollectionExtract(ST_Intersection(r.g, l.geom), 3))).geom AS piece
            FROM raw_geom r
            JOIN global_land l ON ST_Intersects(r.g, l.geom)
          ),
          filtered_pieces AS (
            SELECT piece FROM clipped_pieces WHERE ST_Area(piece) > 0.0001
          ),
          union_geom AS (
            SELECT COALESCE(
              NULLIF((SELECT ST_Multi(ST_Union(piece)) FROM filtered_pieces), ST_GeomFromText('MULTIPOLYGON EMPTY', 4326)),
              (SELECT g FROM raw_geom)
            ) AS g
          ),
          surface_pt AS (
            SELECT ST_PointOnSurface(g) AS pt FROM union_geom
          )
          INSERT INTO era_features (
            era_id, name, formal_name, iso_a3, properties, geom, geom_simplified, label_lng, label_lat
          )
          SELECT
            $1,
            $2,
            $3,
            $5,
            $6::jsonb,
            ST_ForcePolygonCW(g),
            COALESCE(
              NULLIF(ST_ForcePolygonCW(ST_Multi(ST_CollectionExtract(ST_SimplifyPreserveTopology(g, 0.02), 3))), ST_GeomFromText('MULTIPOLYGON EMPTY', 4326)),
              ST_ForcePolygonCW(g)
            ),
            ST_X(pt),
            ST_Y(pt)
          FROM union_geom, surface_pt
          WHERE NOT ST_IsEmpty(g) AND ST_Area(g) > 0.0001
          RETURNING id;
        `,
          [eraId, featureName, formalName, geomJson, isoA3, JSON.stringify(enrichedProps)]
        )

        if (insertRes.rowCount && insertRes.rowCount > 0) {
          validFeatures++
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
    `\n🎉 Ingestion complete! Total features ingested: ${totalFeaturesIngested}`
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
