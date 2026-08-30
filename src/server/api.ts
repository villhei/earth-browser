import { Router, Request, Response } from "express"
import { pool } from "./db"

export const apiRouter = Router()

// Health check
apiRouter.get("/health", async (_req: Request, res: Response) => {
  try {
    const dbRes = await pool.query("SELECT 1 as healthy")
    res.json({ status: "ok", db: dbRes.rows[0].healthy === 1 })
  } catch (err: any) {
    res.status(500).json({ status: "error", message: err.message })
  }
})

// 1. Get all historical eras in chronological order
apiRouter.get("/eras", async (_req: Request, res: Response) => {
  try {
    const result = await pool.query(`
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
    res.json(result.rows)
  } catch (err: any) {
    res.status(500).json({ error: "Failed to fetch eras", message: err.message })
  }
})

// 2. Get specific era GeoJSON FeatureCollection
apiRouter.get("/eras/:idOrSlug/geojson", async (req: Request, res: Response) => {
  const { idOrSlug } = req.params
  const isUuid =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
      idOrSlug
    )

  try {
    const whereClause = isUuid ? "e.id = $1" : "e.slug = $1"
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
              'geometry', ST_AsGeoJSON(f.geom)::json,
              'properties', f.properties || jsonb_build_object(
                'name', f.name,
                'formal_name', f.formal_name,
                'iso_a3', f.iso_a3,
                'labelLng', f.label_lng,
                'labelLat', f.label_lat
              )
            )
          ),
          '[]'::json
        )
      ) AS geojson
      FROM eras e
      LEFT JOIN era_features f ON f.era_id = e.id
      WHERE ${whereClause}
      GROUP BY e.id, e.name, e.slug, e.year_start, e.year_end, e.year_label, e.description;
    `

    const result = await pool.query(query, [idOrSlug])

    if (result.rows.length === 0) {
      res.status(404).json({ error: `Era not found: ${idOrSlug}` })
      return
    }

    // Set cache-control headers for dynamic freshness
    res.setHeader("Cache-Control", "no-cache, must-revalidate")
    res.json(result.rows[0].geojson)
  } catch (err: any) {
    res.status(500).json({ error: "Failed to fetch era geojson", message: err.message })
  }
})
