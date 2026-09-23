/**
 * Comprehensive GeoJSON & Application Translatable String Extraction Script
 *
 * Extracts all sovereign polities, cultures, parent empires, suzerain powers,
 * archaeological site names, classifications, era metadata, and UI strings across
 * all 53 historical GeoJSON datasets, places.geojson, and application metadata.
 *
 * Outputs:
 * - data-sources/translations/extracted_strings.json (comprehensive categorized registry with stats and contexts)
 * - data-sources/translations/translatable_catalog.json (clean key-value catalog ready for i18n tooling)
 * - data-sources/translations/places_multilingual_seed.json (seed dictionary using multi-language place names in places.geojson)
 * - docs/translatable_strings_summary.md (markdown report of extraction statistics and findings)
 */

import fs from "fs"
import path from "path"
import { ERA_CATALOG } from "../src/server/eraMetadata"
import { HISTORICAL_LINEAGE_RULES } from "../src/features/globe/historicalLineage"
import entityRegistryData from "../src/features/globe/entityRegistry.json"

const ROOT_DIR = path.resolve(__dirname, "..")
const SEED_DIR = path.join(ROOT_DIR, "migrations/seed")
const OUTPUT_DIR = path.join(ROOT_DIR, "data-sources/translations")
const DOCS_DIR = path.join(ROOT_DIR, "docs")

// Ensure directories exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
}
if (!fs.existsSync(DOCS_DIR)) {
  fs.mkdirSync(DOCS_DIR, { recursive: true })
}

export interface StringEntry {
  text: string
  category: string
  occurrences: number
  eras: string[]
  roles: string[]
  sources: string[]
  translations?: Record<string, string>
}

// Clean and filter noise strings (numbers only, empty, null, URLs, etc.)
function isValidTranslatableString(str?: any): boolean {
  if (typeof str !== "string") return false
  const trimmed = str.trim()
  if (!trimmed) return false
  if (trimmed.length === 0) return false
  if (/^[-+]?\d+([.,]\d+)?$/.test(trimmed)) return false // Pure numbers
  if (["null", "undefined", "n/a", "none", "0", "unknown", "?"].includes(trimmed.toLowerCase())) {
    return false
  }
  if (/^https?:\/\//i.test(trimmed)) return false // URLs
  return true
}

function cleanString(str: string): string {
  return str.trim().replace(/\s+/g, " ")
}

export async function runExtraction() {
  console.log("==================================================")
  console.log("Historical Earth Browser — Translatable Strings Extractor")
  console.log("==================================================\n")

  const stringMap = new Map<
    string,
    {
      text: string
      category: string
      occurrences: number
      eras: Set<string>
      roles: Set<string>
      sources: Set<string>
      translations?: Record<string, string>
    }
  >()

  function addString(
    rawText: any,
    category: string,
    eraSlug: string,
    role: string,
    sourceFile: string,
    translations?: Record<string, string>
  ) {
    if (!isValidTranslatableString(rawText)) return
    const text = cleanString(String(rawText))
    if (!text) return

    if (!stringMap.has(text)) {
      stringMap.set(text, {
        text,
        category,
        occurrences: 0,
        eras: new Set<string>(),
        roles: new Set<string>(),
        sources: new Set<string>(),
        translations: translations ? { ...translations } : undefined,
      })
    }

    const item = stringMap.get(text)!
    item.occurrences++
    if (eraSlug) item.eras.add(eraSlug)
    if (role) item.roles.add(role)
    if (sourceFile) item.sources.add(sourceFile)

    if (translations) {
      if (!item.translations) item.translations = {}
      for (const [lang, val] of Object.entries(translations)) {
        if (isValidTranslatableString(val) && !item.translations[lang]) {
          item.translations[lang] = cleanString(val)
        }
      }
    }
  }

  // 1. Process 53 Historical Era Datasets (world_*.geojson)
  const files = fs
    .readdirSync(SEED_DIR)
    .filter((f) => f.startsWith("world_") && f.endsWith(".geojson"))
    .sort()

  console.log(`Processing ${files.length} historical era GeoJSON files...`)

  let totalWorldFeatures = 0
  for (const file of files) {
    const eraSlug = file.replace(".geojson", "")
    const filePath = path.join(SEED_DIR, file)
    const content = JSON.parse(fs.readFileSync(filePath, "utf-8"))
    const features = content.features || []
    totalWorldFeatures += features.length

    for (const f of features) {
      const p = f.properties || {}

      // Territory / Country / Polity name
      const name = p.NAME || p.name || p.NAME_LONG || p.SOVEREIGNT || p.ADMIN
      if (name) {
        addString(name, "Polities & Territories", eraSlug, "territory_name", file)
      }

      // Formal name in French / English if present
      if (p.FORMAL_EN && p.FORMAL_EN !== name) {
        addString(p.FORMAL_EN, "Polities & Territories", eraSlug, "formal_name_en", file)
      }
      if (p.FORMAL_FR && p.FORMAL_FR !== name) {
        addString(p.FORMAL_FR, "Polities & Territories", eraSlug, "formal_name_fr", file)
      }

      // Parent empire / sovereignty
      if (p.PARTOF || p.part_of) {
        addString(p.PARTOF || p.part_of, "Parent Empires & Suzerainties", eraSlug, "parent_empire", file)
      }

      // Subjugation overlord
      if (p.SUBJECTO || p.subject_to || p.SUBCTO) {
        addString(p.SUBJECTO || p.subject_to || p.SUBCTO, "Parent Empires & Suzerainties", eraSlug, "suzerain_power", file)
      }

      // Abbreviated label
      if (p.ABBREVN || p.ABBREVNAME) {
        addString(p.ABBREVN || p.ABBREVNAME, "Abbreviated Names", eraSlug, "abbreviated_label", file)
      }

      // Societal / Cultural classification type
      if (p.type || p.TYPE) {
        addString(p.type || p.TYPE, "Societal Classifications", eraSlug, "society_type", file)
      }

      // Administrative control
      if (p.CONTROL || p.CONTROLLIN) {
        addString(p.CONTROL || p.CONTROLLIN, "Administrative Powers", eraSlug, "control_power", file)
      }

      // Bordering countries list
      if (p.BORDERI && typeof p.BORDERI === "string") {
        const neighbors = p.BORDERI.split(",")
        for (const neighbor of neighbors) {
          addString(neighbor, "Neighboring Countries", eraSlug, "neighbor_border", file)
        }
      }
    }
  }

  // 2. Process Places & Archaeological Sites Dataset (places.geojson)
  const placesPath = path.join(SEED_DIR, "places.geojson")
  const multilingualPlacesSeeds: Array<{
    en: string
    category: string
    civilization?: string
    translations: Record<string, string>
  }> = []

  if (fs.existsSync(placesPath)) {
    console.log("Processing places.geojson (Archaeological Sites & Multi-Language Variants)...")
    const placesContent = JSON.parse(fs.readFileSync(placesPath, "utf-8"))
    const features = placesContent.features || []

    for (const f of features) {
      const p = f.properties || {}

      // Extract all dynamic multilingual name variants
      const translations: Record<string, string> = {}

      for (const [k, v] of Object.entries(p)) {
        if (!isValidTranslatableString(v)) continue
        const strVal = cleanString(String(v))

        // Match name.XX or alt_name.XX or old_name.XX
        const match = k.match(/^(?:name|alt_name|old_name|short_name)\.([a-z]{2,3}(?:\d+)?)$/i)
        if (match) {
          const rawLang = match[1].toLowerCase()
          const lang = rawLang.replace(/\d+$/, "") // Normalize ar1 -> ar, he2 -> he
          if (!translations[lang]) {
            translations[lang] = strVal
          }
        }
      }

      // Determine best English primary name
      const englishName = p["name.en"] || p["name.en1"] || p["name:en"] || (p.name && !/[^\u0000-\u007F]/.test(p.name) ? p.name : null) || p.name || p.alt_name

      if (englishName) {
        addString(englishName, "Archaeological Sites & Places", "places", "site_name", "places.geojson", translations)

        if (Object.keys(translations).length > 0) {
          multilingualPlacesSeeds.push({
            en: cleanString(englishName),
            category: p.site_type || "Archaeological Site",
            civilization: p["historic.civilization"] || undefined,
            translations,
          })
        }
      }

      // Also record local/original script name if distinct
      if (p.name && p.name !== englishName) {
        addString(p.name, "Archaeological Sites & Places", "places", "site_original_name", "places.geojson", translations)
      }

      // Alternative names
      if (p.alt_name && p.alt_name !== englishName && p.alt_name !== p.name) {
        const alts = p.alt_name.split(",")
        for (const alt of alts) {
          addString(alt, "Archaeological Sites & Places", "places", "site_alt_name", "places.geojson")
        }
      }

      // Site classification type
      if (p.site_type) {
        addString(p.site_type, "Site Types & Topography", "places", "site_type", "places.geojson")
      }

      // Historic civilization
      if (p["historic.civilization"]) {
        addString(p["historic.civilization"], "Civilizations & Cultures", "places", "civilization", "places.geojson")
      }

      // Natural geographic features
      if (p.natural) {
        addString(p.natural, "Natural Features", "places", "natural_feature", "places.geojson")
      }

      // Location / is_in
      if (p.is_in) {
        addString(p.is_in, "Locations & Regions", "places", "is_in", "places.geojson")
      }

      // Waypoint description
      if (p.wpt_description) {
        addString(p.wpt_description, "Site Descriptions", "places", "wpt_description", "places.geojson")
      }

      // Multilingual descriptions
      if (p.description) {
        addString(p.description, "Site Descriptions", "places", "description", "places.geojson")
      }
      if (p["description.en"]) {
        addString(p["description.en"], "Site Descriptions", "places", "description_en", "places.geojson")
      }
      if (p["description.de"]) {
        addString(p["description.de"], "Site Descriptions", "places", "description_de", "places.geojson")
      }
      if (p["description.hu"]) {
        addString(p["description.hu"], "Site Descriptions", "places", "description_hu", "places.geojson")
      }
      if (p["description.he"]) {
        addString(p["description.he"], "Site Descriptions", "places", "description_he", "places.geojson")
      }
    }
  }

  // 3. Process Historical Era Metadata (from ERA_CATALOG)
  console.log("Processing Era Catalog Metadata (Names, Year Labels, Descriptions)...")
  for (const era of ERA_CATALOG) {
    addString(era.name, "Historical Eras & Periods", era.slug, "era_title", "eraMetadata.ts")
    addString(era.year_label, "Historical Eras & Periods", era.slug, "era_year_label", "eraMetadata.ts")
    if (era.description) {
      addString(era.description, "Historical Eras & Periods", era.slug, "era_description", "eraMetadata.ts")
    }
  }

  // 4. Process Historical Lineage & Entity Registry Rules
  console.log("Processing Historical Lineage & Entity Registry Display Names & Culture Groups...")
  for (const rule of HISTORICAL_LINEAGE_RULES) {
    if (rule.canonicalName) {
      addString(rule.canonicalName, "Canonical Civilization Names", "lineage", "canonical_name", "historicalLineage.ts")
    }
    if (rule.cultureGroup) {
      addString(rule.cultureGroup, "Culture Spheres & Groups", "lineage", "culture_group", "historicalLineage.ts")
    }
  }

  const overrides = (entityRegistryData as any).manualOverrides || {}
  for (const [key, val] of Object.entries(overrides)) {
    addString(key, "Entity Registry Overrides", "registry", "registry_key", "entityRegistry.json")
    if ((val as any).displayName) {
      addString((val as any).displayName, "Entity Registry Overrides", "registry", "display_name", "entityRegistry.json")
    }
    if ((val as any).cultureGroup) {
      addString((val as any).cultureGroup, "Culture Spheres & Groups", "registry", "culture_group", "entityRegistry.json")
    }
  }

  // 5. Application UI Strings
  console.log("Processing Application UI Strings...")
  const uiStrings = [
    "Polygon Altitude",
    "Overlap Elevation",
    "Fill Opacity",
    "Country Labels",
    "Label Size",
    "Appearance Tolerance",
    "Culture Sphere",
    "Part of (Parent)",
    "Subjugated by",
    "Autonomous / Independent",
    "Border Precision",
    "Exact / High Confidence",
    "Approximate",
    "Frontier / Low Confidence",
    "Estimated Area",
    "Population",
    "ISO Code",
    "Historical Era",
    "Attribution & License",
    "Source GeoJSON Dataset",
    "Territories & Polities",
    "Next Era",
    "Previous Era",
    "Search eras or empires",
    "Loading historical atlas...",
  ]
  for (const uiStr of uiStrings) {
    addString(uiStr, "UI & Application Interface", "ui", "ui_label", "App.tsx")
  }

  // 6. Categorize and Organize Strings
  const allEntries: StringEntry[] = []
  const categoryCounts: Record<string, number> = {}
  const roleCounts: Record<string, number> = {}

  for (const item of stringMap.values()) {
    const entry: StringEntry = {
      text: item.text,
      category: item.category,
      occurrences: item.occurrences,
      eras: Array.from(item.eras).sort(),
      roles: Array.from(item.roles).sort(),
      sources: Array.from(item.sources).sort(),
      translations: item.translations && Object.keys(item.translations).length > 0 ? item.translations : undefined,
    }
    allEntries.push(entry)
    categoryCounts[item.category] = (categoryCounts[item.category] || 0) + 1
    for (const r of item.roles) {
      roleCounts[r] = (roleCounts[r] || 0) + 1
    }
  }

  // Sort entries: primary sort by category, secondary sort by occurrences descending, then alphabetically
  allEntries.sort((a, b) => {
    if (a.category !== b.category) {
      return a.category.localeCompare(b.category)
    }
    if (b.occurrences !== a.occurrences) {
      return b.occurrences - a.occurrences
    }
    return a.text.localeCompare(b.text)
  })

  // 7. Build Clean i18n Translation Catalog
  const translationCatalog: Record<
    string,
    {
      category: string
      roles: string[]
      occurrences: number
      erasCount: number
      sampleEras: string[]
      existingTranslations?: Record<string, string>
    }
  > = {}

  for (const item of allEntries) {
    translationCatalog[item.text] = {
      category: item.category,
      roles: item.roles,
      occurrences: item.occurrences,
      erasCount: item.eras.length,
      sampleEras: item.eras.slice(0, 5),
      existingTranslations: item.translations,
    }
  }

  // 8. Write Output Files
  const extractedPath = path.join(OUTPUT_DIR, "extracted_strings.json")
  fs.writeFileSync(extractedPath, JSON.stringify(allEntries, null, 2), "utf-8")
  console.log(`✓ Saved full extraction registry to: ${path.relative(ROOT_DIR, extractedPath)}`)

  const catalogPath = path.join(OUTPUT_DIR, "translatable_catalog.json")
  fs.writeFileSync(catalogPath, JSON.stringify(translationCatalog, null, 2), "utf-8")
  console.log(`✓ Saved translatable catalog to: ${path.relative(ROOT_DIR, catalogPath)}`)

  const seedsPath = path.join(OUTPUT_DIR, "places_multilingual_seed.json")
  fs.writeFileSync(seedsPath, JSON.stringify(multilingualPlacesSeeds, null, 2), "utf-8")
  console.log(`✓ Saved multilingual seed dictionary to: ${path.relative(ROOT_DIR, seedsPath)}`)

  // 9. Generate Comprehensive Markdown Summary Report
  const summaryMdPath = path.join(DOCS_DIR, "translatable_strings_summary.md")
  let md = `# Historical Earth Browser — Translatable Strings Summary

This document summarizes all extracted translatable names, sovereign polities, parent empires, archaeological sites, societal classifications, era metadata, and UI labels across the 53 historical GeoJSON datasets, places catalog, and application code.

---

## 📊 Summary Statistics

- **Total Unique Translatable Strings Extracted**: **${allEntries.length.toLocaleString()}**
- **Total Historical Era Boundary Datasets Scanned**: **${files.length} eras** (${totalWorldFeatures.toLocaleString()} total polygon features)
- **Archaeological & City Places Scanned**: **${multilingualPlacesSeeds.length.toLocaleString()} locations** with multi-lingual seed names
- **Generated Catalog Files**:
  - [\`data-sources/translations/extracted_strings.json\`](file://${extractedPath}): Complete array with occurrence frequencies, roles, era references, and seed translations.
  - [\`data-sources/translations/translatable_catalog.json\`](file://${catalogPath}): Key-value map suitable for direct integration into i18n localization engines (e.g. i18next, react-intl).
  - [\`data-sources/translations/places_multilingual_seed.json\`](file://${seedsPath}): Seed translations across 20+ languages (Arabic, Hebrew, Greek, Russian, French, German, Spanish, Portuguese, Italian, Hindi, etc.).

---

## 📂 Breakdown by Category

| Category | Unique Strings | Description |
| :--- | :--- | :--- |
`

  for (const [cat, count] of Object.entries(categoryCounts).sort((a, b) => b[1] - a[1])) {
    md += `| **${cat}** | **${count.toLocaleString()}** | `
    if (cat === "Polities & Territories")
      md += "Sovereign empires, kingdoms, tribes, archaeological horizons, and modern countries."
    else if (cat === "Parent Empires & Suzerainties")
      md += "Overarching suzerain empires and sovereign states referenced in \`PARTOF\` and \`SUBJECTO\`."
    else if (cat === "Abbreviated Names")
      md += "Shortened territorial labels in \`ABBREVN\` for small polygon label rendering."
    else if (cat === "Archaeological Sites & Places")
      md += "Cities, ancient monuments, necropolises, tell mounds, and points of interest."
    else if (cat === "Historical Eras & Periods")
      md += "Era catalog titles, chronological year labels, and historical narrative summaries."
    else if (cat === "Canonical Civilization Names")
      md += "Normalized historical lineage identities (e.g. Achaemenid Persian Empire, Byzantine Empire)."
    else if (cat === "Culture Spheres & Groups")
      md += "Macro-regional cultural spheres (e.g. Greco-Roman, Middle East, East Asia, Andean)."
    else if (cat === "Societal Classifications")
      md += "Anthropological and societal types (e.g. hunter-gatherers, kingdom, pastoral nomads)."
    else if (cat === "Civilizations & Cultures")
      md += "Ancient civilization descriptors associated with archaeological sites (e.g. phoenician, nabatean)."
    else if (cat === "Site Types & Topography")
      md += "Typology of ancient settlements and sites (e.g. city, necropolis, megalith, tumulus)."
    else if (cat === "Entity Registry Overrides")
      md += "Manually curated historical empire display names and overrides."
    else if (cat === "UI & Application Interface")
      md += "Application controls, filters, metadata drawer labels, and buttons."
    else if (cat === "Site Descriptions")
      md += "Archaeological site descriptions and historical notes."
    else md += "Additional contextual regional or boundary labels."
    md += " |\n"
  }

  md += `\n---

## 🏛️ Top Recurring Polities & Sovereign Entities (Spanning Multiple Eras)

These high-frequency historical entities appear consistently across multiple eras and represent prime candidates for prioritized translation:

| Entity Name | Era Count | Total Feature Mentions | Category | Key Roles |
| :--- | :--- | :--- | :--- | :--- |
`

  const topRecurring = allEntries
    .filter(
      (e) => e.category === "Polities & Territories" || e.category === "Parent Empires & Suzerainties"
    )
    .sort((a, b) => b.eras.length - a.eras.length || b.occurrences - a.occurrences)
    .slice(0, 35)

  for (const item of topRecurring) {
    md += `| **${item.text}** | ${item.eras.length} eras | ${item.occurrences} | ${item.category} | \`${item.roles.join(", ")}\` |\n`
  }

  md += `\n---

## 🌍 Multilingual Place Name Seeds in \`places.geojson\`

The dataset includes multilingual name variants across more than 20 world languages. Below is a sample of archaeological sites with pre-existing multi-language translations in the dataset:

| English Name | Site Type | Available Language Variants | Sample Translations |
| :--- | :--- | :--- | :--- |
`

  for (const site of multilingualPlacesSeeds.slice(0, 15)) {
    const langs = Object.keys(site.translations).join(", ")
    const sample = Object.entries(site.translations)
      .slice(0, 3)
      .map(([l, v]) => `**${l}**: ${v}`)
      .join("; ")
    md += `| **${site.en}** | ${site.category} | \`${langs}\` | ${sample} |\n`
  }

  md += `\n---

## 🚀 How to Use These Extracted Strings for Localization

1. **Direct Integration with i18n Frameworks**:
   - The JSON dictionary in [\`data-sources/translations/translatable_catalog.json\`](file://${catalogPath}) can be loaded directly into \`i18next\` or \`react-intl\`.
2. **Translation Guessing & Fallback Pipeline**:
   - Historical entities can inherit translations from canonical lineages (e.g. "Western Roman Empire" inheriting the base translation for "Rome" + "Western").
   - Machine translation APIs or LLM batch translators can translate [\`translatable_catalog.json\`](file://${catalogPath}) in prioritized tiers:
     - **Tier 1 (Core UI & Eras)**: Historical Eras & Descriptions (53 items), Culture Spheres (20 items), Societal Classifications (20 items), UI interface strings (24 items).
     - **Tier 2 (High-Frequency Empires)**: Top 200 sovereign empires and polities.
     - **Tier 3 (Comprehensive World Atlas)**: Remaining historical tribes, polities, and archaeological sites.
`

  fs.writeFileSync(summaryMdPath, md, "utf-8")
  console.log(`✓ Saved markdown summary report to: ${path.relative(ROOT_DIR, summaryMdPath)}`)

  console.log("\n==================================================")
  console.log(`Extraction complete! Processed ${allEntries.length.toLocaleString()} unique translatable strings.`)
  console.log("==================================================")
}

if (require.main === module) {
  runExtraction().catch((err) => {
    console.error("Extraction failed:", err)
    process.exit(1)
  })
}
