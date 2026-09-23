/**
 * Shared PostGIS SQL Queries for Era Feature Collections and Metadata
 */

/**
 * Builds the SQL query for extracting an era FeatureCollection with simplified geometries,
 * interior surface label centroids, elevation tiers, and embedded culture metadata.
 *
 * @param whereCondition - SQL WHERE condition, e.g. "e.id = $1" or "e.slug = $1"
 */
export function getEraGeoJsonQuery(whereCondition: string): string {
  return `
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
            ) || (
              CASE WHEN cm.id IS NOT NULL THEN jsonb_build_object(
                'culture_metadata', jsonb_build_object(
                  'id', cm.id,
                  'slug', cm.slug,
                  'name', cm.name,
                  'name_fi', cm.name_fi,
                  'native_name', cm.native_name,
                  'culture_group', cm.culture_group,
                  'historical_period', cm.historical_period,
                  'year_start', cm.year_start,
                  'year_end', cm.year_end,
                  'period_label', cm.period_label,
                  'period_label_fi', cm.period_label_fi,
                  'wikipedia_url_en', cm.wikipedia_url_en,
                  'wikipedia_url_fi', cm.wikipedia_url_fi,
                  'summary_en', cm.summary_en,
                  'summary_fi', cm.summary_fi,
                  'capital', cm.capital
                )
              ) ELSE '{}'::jsonb END
            )
          )
        ),
        '[]'::json
      )
    ) AS geojson
    FROM eras e
    LEFT JOIN era_features f ON f.era_id = e.id
    LEFT JOIN culture_metadata cm ON f.culture_id = cm.id
    WHERE ${whereCondition}
    GROUP BY e.id, e.name, e.slug, e.year_start, e.year_end, e.year_label, e.description;
  `
}
