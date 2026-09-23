import { pool } from "../src/server/db"
import fs from "fs"
import path from "path"

function formatYear(year: number): string {
  if (year < 0) return `${Math.abs(year).toLocaleString()} BCE`
  if (year === 0) return `1 BCE`
  return `${year} CE`
}

function formatYearRange(minYear: number, maxYear: number): string {
  if (minYear === maxYear) {
    return formatYear(minYear)
  }
  return `${formatYear(minYear)} – ${formatYear(maxYear)}`
}

interface CultureRecord {
  cultureGroup: string
  name: string
  canonicalName: string
  lineageId: string
  appearances: number
  minYear: number
  maxYear: number
  yearRange: string
  eras: string[]
}

async function exportCultures() {
  console.log("Exporting cultures list from database...")

  const query = `
    SELECT 
      COALESCE(ef.properties->>'cultureGroup', 'Unassigned') AS culture_group,
      ef.name,
      COALESCE(ef.properties->>'canonical_name', ef.name) AS canonical_name,
      COALESCE(ef.properties->>'lineage_id', 'unknown') AS lineage_id,
      count(*)::int AS appearances,
      min(e.year_start)::int AS min_year,
      max(e.year_start)::int AS max_year,
      array_agg(DISTINCT e.year_label ORDER BY e.year_label) AS era_labels,
      array_agg(DISTINCT e.slug ORDER BY e.slug) AS era_slugs
    FROM era_features ef
    JOIN eras e ON ef.era_id = e.id
    WHERE ef.name NOT ILIKE '%unclaimed%'
    GROUP BY 1, 2, 3, 4
    ORDER BY culture_group ASC, ef.name ASC;
  `

  const res = await pool.query(query)
  const records: CultureRecord[] = res.rows.map((row) => ({
    cultureGroup: row.culture_group,
    name: row.name,
    canonicalName: row.canonical_name,
    lineageId: row.lineage_id,
    appearances: row.appearances,
    minYear: row.min_year,
    maxYear: row.max_year,
    yearRange: formatYearRange(row.min_year, row.max_year),
    eras: row.era_slugs || [],
  }))

  console.log(`Retrieved ${records.length} distinct culture entities.`)

  // 1. Write JSON file
  const jsonPath = path.resolve(__dirname, "../data-sources/cultures.json")
  fs.writeFileSync(jsonPath, JSON.stringify(records, null, 2), "utf-8")
  console.log(`Wrote JSON to ${jsonPath}`)

  // 2. Build Markdown catalog
  // Group records by cultureGroup
  const groups = new Map<string, CultureRecord[]>()
  for (const r of records) {
    if (!groups.has(r.cultureGroup)) {
      groups.set(r.cultureGroup, [])
    }
    groups.get(r.cultureGroup)!.push(r)
  }

  // Calculate summary stats
  const groupStats: Array<{
    group: string
    count: number
    earliest: number
    latest: number
    totalRecords: number
  }> = []

  for (const [group, items] of groups.entries()) {
    const earliest = Math.min(...items.map((i) => i.minYear))
    const latest = Math.max(...items.map((i) => i.maxYear))
    const totalRecords = items.reduce((acc, i) => acc + i.appearances, 0)
    groupStats.push({
      group,
      count: items.length,
      earliest,
      latest,
      totalRecords,
    })
  }

  groupStats.sort((a, b) => b.totalRecords - a.totalRecords)

  let md = `# Catalog of Cultures, Civilizations & Polities\n\n`
  md += `This catalog compiles all **${records.length}** distinct historical, archaeological, and indigenous cultural entities extracted directly from the **Earth Browser** PostGIS database (\`world\` database, \`era_features\` table).\n\n`
  md += `Across all **54 historical eras** (123,000 BCE – 2010 CE), the database contains **17,563 total feature entries** categorized into **${groups.size} cultural groups**.\n\n`
  md += `A complete machine-readable dataset is also available in [\`data-sources/cultures.json\`](data-sources/cultures.json).\n\n`

  md += `## Table of Contents\n\n`
  md += `1. [Summary by Cultural Group](#summary-by-cultural-group)\n`
  for (const stat of groupStats) {
    const slug = stat.group.toLowerCase().replace(/[^a-z0-9]+/g, "-")
    md += `- [${stat.group} (${stat.count} entities)](#${slug})\n`
  }
  md += `\n---\n\n`

  md += `## Summary by Cultural Group\n\n`
  md += `| Cultural Group | Unique Entities | Total Era Records | Date Span |\n`
  md += `| :--- | :---: | :---: | :--- |\n`
  for (const stat of groupStats) {
    const slug = stat.group.toLowerCase().replace(/[^a-z0-9]+/g, "-")
    md += `| [**${stat.group}**](#${slug}) | ${stat.count} | ${stat.totalRecords} | ${formatYearRange(stat.earliest, stat.latest)} |\n`
  }
  md += `\n---\n\n`

  // Detailed tables for each group
  for (const stat of groupStats) {
    const groupName = stat.group
    const items = groups.get(groupName)!
    const slug = groupName.toLowerCase().replace(/[^a-z0-9]+/g, "-")

    md += `## <a id="${slug}"></a>${groupName}\n\n`
    md += `* **Unique Entities**: ${items.length}\n`
    md += `* **Total Appearances**: ${stat.totalRecords}\n`
    md += `* **Historical Span**: ${formatYearRange(stat.earliest, stat.latest)}\n\n`

    md += `| Entity / Culture Name | Canonical Historical Lineage | Active Era Range | Eras (Count) |\n`
    md += `| :--- | :--- | :--- | :---: |\n`

    for (const item of items) {
      // Escape pipe characters in names
      const safeName = item.name.replace(/\|/g, "\\|")
      const safeCanon = item.canonicalName.replace(/\|/g, "\\|")
      md += `| **${safeName}** | ${safeCanon} | ${item.yearRange} | ${item.appearances} |\n`
    }

    md += `\n[↑ Back to top](#table-of-contents)\n\n---\n\n`
  }

  const mdPath = path.resolve(__dirname, "../CULTURES.md")
  fs.writeFileSync(mdPath, md, "utf-8")
  console.log(`Wrote Markdown catalog to ${mdPath}`)

  await pool.end()
}

exportCultures().catch((err) => {
  console.error("Export error:", err)
  process.exit(1)
})
