import { pool, closePool } from "../src/server/db"
import fs from "fs"
import path from "path"

interface CultureGroupStatus {
  cultureGroup: string
  totalEntities: number
  completedEntities: number
  missingEntitiesCount: number
  pctComplete: number
  missingEntities: string[]
}

interface EraStatus {
  slug: string
  yearLabel: string
  yearStart: number
  totalFeatures: number
  linkedFeatures: number
  unlinkedFeatures: number
  pctLinked: number
}

async function reportStatus() {
  console.log("Analyzing Culture Metadata completion status in database...\n")

  // 1. Overall stats
  const overallRes = await pool.query(`
    SELECT 
      count(DISTINCT ef.name) AS total_entities,
      count(DISTINCT ef.name) FILTER (WHERE ef.culture_id IS NOT NULL) AS completed_entities,
      count(DISTINCT ef.name) FILTER (WHERE ef.culture_id IS NULL) AS missing_entities,
      count(ef.id) AS total_features,
      count(ef.culture_id) AS linked_features,
      count(ef.id) - count(ef.culture_id) AS unlinked_features
    FROM era_features ef
    WHERE ef.name NOT ILIKE '%unclaimed%'
      AND COALESCE((ef.properties->>'is_unclaimed')::boolean, false) IS FALSE;
  `)

  const row = overallRes.rows[0]
  const totalEntities = parseInt(row.total_entities, 10)
  const completedEntities = parseInt(row.completed_entities, 10)
  const missingEntities = parseInt(row.missing_entities, 10)
  const totalFeatures = parseInt(row.total_features, 10)
  const linkedFeatures = parseInt(row.linked_features, 10)
  const unlinkedFeatures = parseInt(row.unlinked_features, 10)

  const pctEntities = (100 * completedEntities / totalEntities).toFixed(1)
  const pctFeatures = (100 * linkedFeatures / totalFeatures).toFixed(1)

  console.log(`=== OVERALL COMPLETION STATUS ===`)
  console.log(`Unique Entities Completed: ${completedEntities} / ${totalEntities} (${pctEntities}%)`)
  console.log(`Feature Records Linked:     ${linkedFeatures} / ${totalFeatures} (${pctFeatures}%)`)
  console.log(`Unlinked Features:          ${unlinkedFeatures}`)
  console.log(`Missing Entities:           ${missingEntities}\n`)

  // 2. Progress by Culture Group
  const groupsRes = await pool.query(`
    SELECT 
      properties->>'cultureGroup' AS culture_group,
      count(DISTINCT ef.name)::int AS total_entities,
      count(DISTINCT ef.name) FILTER (WHERE ef.culture_id IS NOT NULL)::int AS completed_entities,
      count(DISTINCT ef.name) FILTER (WHERE ef.culture_id IS NULL)::int AS missing_entities,
      ROUND(100.0 * count(DISTINCT ef.name) FILTER (WHERE ef.culture_id IS NOT NULL) / NULLIF(count(DISTINCT ef.name), 0), 1)::float AS pct_complete,
      array_agg(DISTINCT ef.name) FILTER (WHERE ef.culture_id IS NULL) AS missing_list
    FROM era_features ef
    WHERE ef.name NOT ILIKE '%unclaimed%'
      AND COALESCE((ef.properties->>'is_unclaimed')::boolean, false) IS FALSE
    GROUP BY properties->>'cultureGroup'
    ORDER BY total_entities ASC, pct_complete DESC;
  `)

  const groups: CultureGroupStatus[] = groupsRes.rows.map((r) => {
    const list = (r.missing_list || []).filter(Boolean)
    list.sort((a: string, b: string) => a.localeCompare(b))
    return {
      cultureGroup: r.culture_group || "Unassigned",
      totalEntities: r.total_entities,
      completedEntities: r.completed_entities,
      missingEntitiesCount: r.missing_entities,
      pctComplete: r.pct_complete || 0,
      missingEntities: list,
    }
  })

  // 3. Progress by Era
  const erasRes = await pool.query(`
    SELECT 
      e.slug,
      e.year_label,
      e.year_start::int AS year_start,
      count(ef.id)::int AS total_features,
      count(ef.culture_id)::int AS linked_features,
      (count(ef.id) - count(ef.culture_id))::int AS unlinked_features,
      ROUND(100.0 * count(ef.culture_id) / NULLIF(count(ef.id), 0), 1)::float AS pct_linked
    FROM eras e
    JOIN era_features ef ON ef.era_id = e.id
    WHERE ef.name NOT ILIKE '%unclaimed%'
      AND COALESCE((ef.properties->>'is_unclaimed')::boolean, false) IS FALSE
    GROUP BY e.slug, e.year_label, e.year_start
    ORDER BY e.year_start ASC;
  `)

  const eras: EraStatus[] = erasRes.rows

  // 4. Write tracking JSON
  const outputData = {
    timestamp: new Date().toISOString(),
    overall: {
      totalEntities,
      completedEntities,
      missingEntities,
      pctEntitiesComplete: parseFloat(pctEntities),
      totalFeatures,
      linkedFeatures,
      unlinkedFeatures,
      pctFeaturesLinked: parseFloat(pctFeatures),
    },
    cultureGroups: groups,
    eras,
  }

  const outJsonPath = path.resolve(__dirname, "../data-sources/culture_metadata_status.json")
  fs.writeFileSync(outJsonPath, JSON.stringify(outputData, null, 2), "utf-8")
  console.log(`✓ Updated status tracking log at ${outJsonPath}`)

  await closePool()
}

if (require.main === module) {
  reportStatus().catch((err) => {
    console.error("Error generating status report:", err)
    process.exit(1)
  })
}

export default reportStatus
