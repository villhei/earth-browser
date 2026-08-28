import fs from "fs"
import path from "path"
import { pool, closePool } from "./db"
import { ERA_CATALOG, getEraByFilename } from "./eraMetadata"

async function ingest() {
  console.log("🌍 Starting Historical Earth GeoJSON Ingestion...")
  const seedDir = path.resolve(__dirname, "../../migrations/seed")

  if (!fs.existsSync(seedDir)) {
    console.error(`Seed directory not found at: ${seedDir}`)
    process.exit(1)
  }

  const files = fs
    .readdirSync(seedDir)
    .filter((f) => f.endsWith(".geojson"))
    .sort()

  console.log(`Found ${files.length} GeoJSON files in ${seedDir}`)

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

    const client = await pool.connect()
    try {
      await client.query("BEGIN")

      // 1. Upsert Era record
      const eraRes = await client.query(
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
      await client.query("DELETE FROM era_features WHERE era_id = $1", [eraId])

      // 3. Ingest Features
      const features = geojson.features || []
      let validFeatures = 0

      for (const feature of features) {
        if (!feature.geometry) continue

        const props = feature.properties || {}
        const featureName =
          props.NAME ||
          props.name ||
          props.NAME_LONG ||
          props.SOVEREIGNT ||
          props.ADMIN ||
          "Unknown"
        const formalName = props.FORMAL_EN || props.FORMAL_FR || null
        const isoA3 = props.ISO_A3 || props.ADM0_A3 || null
        const geomJson = JSON.stringify(feature.geometry)

        await client.query(
          `
          WITH raw_geom AS (
            SELECT ST_MakeValid(ST_SetSRID(ST_GeomFromGeoJSON($4), 4326)) AS g
          ),
          surface_pt AS (
            SELECT ST_PointOnSurface(g) AS pt FROM raw_geom
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
            g,
            ST_SimplifyPreserveTopology(g, 0.02),
            ST_X(pt),
            ST_Y(pt)
          FROM raw_geom, surface_pt
        `,
          [eraId, featureName, formalName, geomJson, isoA3, JSON.stringify(props)]
        )

        validFeatures++
      }

      // Update actual count
      await client.query(
        "UPDATE eras SET feature_count = $1 WHERE id = $2",
        [validFeatures, eraId]
      )

      await client.query("COMMIT")
      totalFeaturesIngested += validFeatures
      console.log(`  ✓ ${slug} (${name}): ${validFeatures} features ingested`)
    } catch (err: any) {
      await client.query("ROLLBACK")
      console.error(`  ✗ Error ingesting ${file}:`, err.message)
    } finally {
      client.release()
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
