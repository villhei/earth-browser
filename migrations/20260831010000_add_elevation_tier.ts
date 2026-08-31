import { Knex } from "knex"

export async function up(knex: Knex): Promise<void> {
  // 1. Add elevation_tier column and index
  await knex.raw(`
    ALTER TABLE era_features
      ADD COLUMN IF NOT EXISTS elevation_tier SMALLINT NOT NULL DEFAULT 0;

    CREATE INDEX IF NOT EXISTS idx_era_features_elevation_tier ON era_features(elevation_tier);
  `)

  // 2. Precalculate topological DAG elevation tiers across all existing historical eras
  const erasRes = await knex.raw("SELECT id FROM eras ORDER BY year_start")
  const eras = erasRes.rows || []

  for (const era of eras) {
    const featsRes = await knex.raw(`
      SELECT id, ST_Area(geom) AS area
      FROM era_features
      WHERE era_id = ?
        AND name NOT ILIKE '%unclaimed%' 
        AND COALESCE((properties->>'is_unclaimed')::boolean, false) IS FALSE
      ORDER BY ST_Area(geom) DESC, id ASC;
    `, [era.id])

    const feats = featsRes.rows || []
    if (feats.length === 0) continue

    const overlapsRes = await knex.raw(`
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
      WHERE f1.era_id = ?;
    `, [era.id])

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
      await knex.raw(`
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
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw(`
    DROP INDEX IF EXISTS idx_era_features_elevation_tier;

    ALTER TABLE era_features
      DROP COLUMN IF EXISTS elevation_tier;
  `)
}
