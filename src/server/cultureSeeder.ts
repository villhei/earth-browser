import { pool, closePool } from "./db"
import fs from "fs"
import path from "path"

export interface CultureBatchEntry {
  slug: string
  name: string
  name_fi: string
  native_name?: string
  alternate_names?: string[]
  culture_group: string
  lineage_id?: string
  historical_period: string
  year_start: number
  year_end: number
  period_label: string
  period_label_fi: string
  wikipedia_url_en: string
  wikipedia_url_fi: string
  wikidata_id?: string
  summary_en: string
  summary_fi: string
  capital?: string
  feature_name_matches: string[]
}

export async function seedBatch(jsonFilePath: string, shouldClosePool = true) {
  const absolutePath = path.isAbsolute(jsonFilePath)
    ? jsonFilePath
    : path.resolve(process.cwd(), jsonFilePath)

  if (!fs.existsSync(absolutePath)) {
    console.error(`Error: File not found at ${absolutePath}`)
    process.exit(1)
  }

  const rawData = fs.readFileSync(absolutePath, "utf-8")
  const entries: CultureBatchEntry[] = JSON.parse(rawData)

  console.log(`Loading batch of ${entries.length} culture entries from ${path.basename(absolutePath)}...`)

  const client = await pool.connect()
  try {
    await client.query("BEGIN")

    let insertedCount = 0
    let linkedFeaturesCount = 0

    for (const culture of entries) {
      if (!culture.slug || !culture.name || !culture.culture_group) {
        throw new Error(`Invalid entry missing required fields (slug, name, or culture_group): ${JSON.stringify(culture)}`)
      }

      // 1. Upsert culture_metadata record
      const res = await client.query(
        `
        INSERT INTO culture_metadata (
          slug, name, name_fi, native_name, alternate_names, culture_group, lineage_id,
          historical_period, year_start, year_end, period_label, period_label_fi,
          wikipedia_url_en, wikipedia_url_fi, wikidata_id, summary_en, summary_fi, capital
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)
        ON CONFLICT (slug) DO UPDATE
        SET name = EXCLUDED.name,
            name_fi = EXCLUDED.name_fi,
            native_name = EXCLUDED.native_name,
            alternate_names = EXCLUDED.alternate_names,
            culture_group = EXCLUDED.culture_group,
            lineage_id = EXCLUDED.lineage_id,
            historical_period = EXCLUDED.historical_period,
            year_start = EXCLUDED.year_start,
            year_end = EXCLUDED.year_end,
            period_label = EXCLUDED.period_label,
            period_label_fi = EXCLUDED.period_label_fi,
            wikipedia_url_en = EXCLUDED.wikipedia_url_en,
            wikipedia_url_fi = EXCLUDED.wikipedia_url_fi,
            wikidata_id = EXCLUDED.wikidata_id,
            summary_en = EXCLUDED.summary_en,
            summary_fi = EXCLUDED.summary_fi,
            capital = EXCLUDED.capital,
            updated_at = NOW()
        RETURNING id;
      `,
        [
          culture.slug,
          culture.name,
          culture.name_fi || null,
          culture.native_name || null,
          culture.alternate_names || [],
          culture.culture_group,
          culture.lineage_id || null,
          culture.historical_period || null,
          culture.year_start ?? null,
          culture.year_end ?? null,
          culture.period_label || null,
          culture.period_label_fi || null,
          culture.wikipedia_url_en || null,
          culture.wikipedia_url_fi || null,
          culture.wikidata_id || null,
          culture.summary_en || null,
          culture.summary_fi || null,
          culture.capital || null,
        ]
      )

      const cultureId = res.rows[0].id
      insertedCount++

      // 2. Link matching features in era_features
      const cultureJson = JSON.stringify({
        id: cultureId,
        slug: culture.slug,
        name: culture.name,
        name_fi: culture.name_fi,
        historical_period: culture.historical_period,
        year_start: culture.year_start,
        year_end: culture.year_end,
        period_label: culture.period_label,
        period_label_fi: culture.period_label_fi,
        wikipedia_url_en: culture.wikipedia_url_en,
        wikipedia_url_fi: culture.wikipedia_url_fi,
        summary_en: culture.summary_en,
        summary_fi: culture.summary_fi,
        capital: culture.capital,
      })

      const targetMatches = Array.from(new Set([culture.name, ...(culture.feature_name_matches || [])]))

      const updateRes = await client.query(
        `
        UPDATE era_features
        SET 
          culture_id = $1,
          properties = jsonb_set(properties, '{culture_metadata}', $2::jsonb)
        WHERE name = ANY($3::text[])
           OR properties->>'canonical_name' = ANY($3::text[]);
      `,
        [cultureId, cultureJson, targetMatches]
      )

      linkedFeaturesCount += updateRes.rowCount || 0
      console.log(`  ✓ [${culture.slug}] -> linked ${updateRes.rowCount || 0} features`)
    }

    await client.query("COMMIT")
    console.log(`\n✓ Successfully processed batch: ${insertedCount} cultures upserted, ${linkedFeaturesCount} features linked across eras.`)
  } catch (err: any) {
    await client.query("ROLLBACK")
    console.error("Batch seed error:", err)
    throw err
  } finally {
    client.release()
    if (shouldClosePool) {
      await closePool()
    }
  }
}

export async function seedAllBatches(batchDir?: string, shouldClosePool = true) {
  const dir = batchDir || path.resolve(__dirname, "../../data-sources/batches")
  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .sort()

  console.log(`Seeding all ${files.length} culture metadata batches from ${dir}...`)
  for (const f of files) {
    await seedBatch(path.join(dir, f), false)
  }
  if (shouldClosePool) {
    await closePool()
  }
}
