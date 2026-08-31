/**
 * Static Data Exporter for Earth Browser
 *
 * Extracts enriched historical era catalog and PostGIS GeoJSON datasets
 * into static JSON files under public/data/ for serverless & static site deployment.
 */

import fs from "fs"
import path from "path"
import { pool, closePool } from "./db"

async function exportStaticData() {
  console.log("Starting static data export from PostGIS database...")
  const dataDir = path.resolve(__dirname, "../../public/data")
  const erasDir = path.join(dataDir, "eras")
  const erasFilePath = path.join(dataDir, "eras.json")

  if (!fs.existsSync(erasDir)) {
    fs.mkdirSync(erasDir, { recursive: true })
  }

  try {
    // Check DB connectivity
    try {
      await pool.query("SELECT 1")
    } catch (dbErr: any) {
      if (fs.existsSync(erasFilePath) && fs.readdirSync(erasDir).length > 0) {
        console.log("ℹ Database not reachable; using existing static datasets in public/data/")
        return
      }
      throw dbErr
    }

    // 1. Export Eras catalog (matches GET /api/eras)
    console.log("Fetching historical eras catalog...")
    const erasRes = await pool.query(`
      SELECT 
        id,
        slug,
        name,
        year_start,
        year_end,
        year_label,
        description,
        feature_count,
        created_at
      FROM eras
      ORDER BY year_start ASC
    `)

    const eras = erasRes.rows
    fs.writeFileSync(erasFilePath, JSON.stringify(eras, null, 2), "utf-8")
    console.log(`✓ Exported ${eras.length} eras metadata to ${erasFilePath}`)

    // 2. Export GeoJSON FeatureCollection for each era (matches GET /api/eras/:slug/geojson)
    console.log("Exporting individual era GeoJSON datasets...")
    let totalFeatures = 0
    let totalBytes = 0

    for (let i = 0; i < eras.length; i++) {
      const era = eras[i]
      const query = `
        SELECT json_build_object(
          'type', 'FeatureCollection',
          'name', e.name,
          'era', json_build_object(
            'id', e.id,
            'slug', e.slug,
            'name', e.name,
            'year_start', e.year_start,
            'year_end', e.year_end,
            'year_label', e.year_label,
            'description', e.description
          ),
          'features', COALESCE(
            json_agg(
              json_build_object(
                'type', 'Feature',
                'id', f.id,
                'geometry', ST_AsGeoJSON(f.geom, 4)::json,
                'properties', f.properties || jsonb_build_object(
                  'name', f.name,
                  'formal_name', f.formal_name,
                  'iso_a3', f.iso_a3,
                  'border_precision', f.border_precision,
                  'BORDERPRECISION', f.border_precision,
                  'part_of', f.part_of,
                  'PARTOF', f.part_of,
                  'subject_to', f.subject_to,
                  'SUBJECTO', f.subject_to,
                  'elevation_tier', f.elevation_tier,
                  'elevationTier', f.elevation_tier,
                  'labelLng', ROUND(f.label_lng::numeric, 4),
                  'labelLat', ROUND(f.label_lat::numeric, 4)
                )
              )
            ),
            '[]'::json
          )
        ) AS geojson
        FROM eras e
        LEFT JOIN era_features f ON f.era_id = e.id
        WHERE e.id = $1
        GROUP BY e.id, e.name, e.slug, e.year_start, e.year_end, e.year_label, e.description;
      `

      const geoRes = await pool.query(query, [era.id])
      if (geoRes.rows.length === 0) {
        console.warn(`  ⚠ No GeoJSON found for era ${era.slug}`)
        continue
      }

      const geojson = geoRes.rows[0].geojson
      const featureCount = geojson.features?.length || 0
      totalFeatures += featureCount

      const jsonStr = JSON.stringify(geojson)
      totalBytes += jsonStr.length

      const slugPath = path.join(erasDir, `${era.slug}.json`)
      fs.writeFileSync(slugPath, jsonStr, "utf-8")

      // Also write by ID for compatibility
      const idPath = path.join(erasDir, `${era.id}.json`)
      fs.writeFileSync(idPath, jsonStr, "utf-8")

      console.log(
        `  [${i + 1}/${eras.length}] ✓ ${era.slug} (${(jsonStr.length / 1024).toFixed(1)} KB, ${featureCount} features)`
      )
    }

    console.log("\n==========================================")
    console.log(`Static Export Complete!`)
    console.log(`Total Eras: ${eras.length}`)
    console.log(`Total Features: ${totalFeatures}`)
    console.log(`Total Uncompressed Data: ${(totalBytes / 1024 / 1024).toFixed(2)} MB`)
    console.log(`Location: ${dataDir}`)
    console.log("==========================================\n")
  } catch (err: any) {
    console.error("Export failed:", err)
    process.exit(1)
  } finally {
    await closePool()
  }
}

if (require.main === module) {
  exportStaticData().catch((err) => {
    console.error("Fatal export error:", err)
    process.exit(1)
  })
}

export default exportStaticData
