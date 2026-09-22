import { pool, closePool } from "../src/server/db"
import fs from "fs"
import path from "path"

export interface ResidueEntity {
  name: string
  occurrences: number
  avg_lng: number
  avg_lat: number
  eras: string[]
  suggested_slug: string
}

export interface ContinentalPartition {
  continent: string
  slug: string
  batchFileName: string
  entityCount: number
  featureCount: number
  entities: ResidueEntity[]
}

export function classifyContinent(lng: number, lat: number, name: string): string {
  const n = name.trim()

  // 1. Specific entity overrides for historical / geopolitical precision
  if (n.startsWith("Nyvukagmit")) return "Asia" // Naukan Siberian Yupik (Chukotka)
  if (n === "Granada") return "Europe"
  if (n === "Crete") return "Europe"
  if (n.includes("Dodecanese")) return "Europe"
  if (n === "Beylik of Aydin") return "Asia"
  if (n.includes("Cypriot")) return "Asia"
  if (n === "Atropatene") return "Asia"
  if (n === "Kwarezm" || n === "Peshemegs" || n === "Namazga" || n === "Turan") return "Asia"

  // 2. Oceania (Australia, New Zealand, Melanesia, Polynesia, Micronesia)
  if (lat <= -10 && lng >= 110 && lng <= 180) return "Oceania"
  if (lat <= 0 && lng >= 130 && lng <= 180) return "Oceania"
  if (lat > 0 && lat <= 28 && lng >= 130 && lng <= 180) return "Oceania"
  if (lat <= -30 && lng >= 165 && lng <= 180) return "Oceania"
  if (lng < -130 && lat >= -30 && lat <= 30) return "Oceania"

  // 3. Central America & Caribbean vs South America
  // Central America west of Panama-Colombia border (lng < -77.5)
  if (lng >= -120 && lng < -77.5 && lat >= 7.0 && lat <= 30.0) return "North America"
  // Caribbean islands (Antilles, Bahamas, Turks & Caicos)
  if (lng >= -90 && lng <= -59 && lat >= 10.0 && lat <= 28.0 && lat > 11.5) return "North America"

  // 4. South America (South of Panama, -85 to -30 W, -60 to 13 N)
  if (lat <= 13.0 && lat >= -60.0 && lng >= -85.0 && lng <= -30.0) {
    return "South America"
  }

  // 5. North America (Rest of continent: USA, Canada, Mexico, Greenland)
  if (lng >= -175 && lng <= -50 && lat >= 7 && lat <= 85) return "North America"

  // 6. Africa vs Asia / Middle East
  const isArabiaOrNearEast =
    (lat >= 12 && lat < 16 && lng > 43.2) ||
    (lat >= 16 && lat < 20 && lng > 40.0) ||
    (lat >= 20 && lat < 28 && lng > 36.5) ||
    (lat >= 28 && lat <= 33 && lng > 34.0) ||
    (lat > 33 && lng > 35.0)

  if (!isArabiaOrNearEast && lat >= -35 && lat <= 37.5 && lng >= -25 && lng <= 52) {
    return "Africa"
  }

  // 7. Europe vs Asia
  // Anatolia & Asia Minor
  if (lat >= 34.5 && lat <= 42.0 && lng >= 26.5 && lng <= 45.0 && lat < 41.5) {
    return "Asia"
  }
  // Central Asian Steppe / east of Caspian (lng > 50 at lat <= 52)
  if (lat >= 35.0 && lat <= 52.0 && lng > 50.0) {
    return "Asia"
  }
  // European continent up to Urals (~60 E)
  if (lat >= 35 && lat <= 75 && lng >= -25 && lng <= 60) {
    if (lat < 38.5 && lng > 44) return "Asia" // Iranian plateau
    return "Europe"
  }

  // 8. Asia (Default for remaining Eurasia)
  return "Asia"
}

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export async function partitionResidue(): Promise<Record<string, ContinentalPartition>> {
  const query = `
    SELECT 
      ef.name,
      count(ef.id)::int as occurrences,
      ROUND(AVG(ef.label_lng)::numeric, 4) as avg_lng,
      ROUND(AVG(ef.label_lat)::numeric, 4) as avg_lat,
      array_agg(DISTINCT e.slug ORDER BY e.slug) as eras
    FROM era_features ef
    JOIN eras e ON ef.era_id = e.id
    WHERE ef.culture_id IS NULL
      AND ef.name NOT ILIKE '%unclaimed%'
      AND COALESCE((ef.properties->>'is_unclaimed')::boolean, false) IS FALSE
    GROUP BY ef.name
    ORDER BY count(ef.id) DESC, ef.name ASC;
  `

  const res = await pool.query(query)

  const partitions: Record<string, ContinentalPartition> = {
    "North America": {
      continent: "North America",
      slug: "north-america",
      batchFileName: "residue-north-america.json",
      entityCount: 0,
      featureCount: 0,
      entities: [],
    },
    "South America": {
      continent: "South America",
      slug: "south-america",
      batchFileName: "residue-south-america.json",
      entityCount: 0,
      featureCount: 0,
      entities: [],
    },
    Oceania: {
      continent: "Oceania",
      slug: "oceania",
      batchFileName: "residue-oceania.json",
      entityCount: 0,
      featureCount: 0,
      entities: [],
    },
    Asia: {
      continent: "Asia",
      slug: "asia",
      batchFileName: "residue-asia.json",
      entityCount: 0,
      featureCount: 0,
      entities: [],
    },
    Europe: {
      continent: "Europe",
      slug: "europe",
      batchFileName: "residue-europe.json",
      entityCount: 0,
      featureCount: 0,
      entities: [],
    },
    Africa: {
      continent: "Africa",
      slug: "africa",
      batchFileName: "residue-africa.json",
      entityCount: 0,
      featureCount: 0,
      entities: [],
    },
  }

  for (const row of res.rows) {
    const lng = parseFloat(row.avg_lng)
    const lat = parseFloat(row.avg_lat)
    const continent = classifyContinent(lng, lat, row.name)

    const part = partitions[continent]
    if (!part) {
      throw new Error(`Unknown continent ${continent} for entity ${row.name}`)
    }

    const entity: ResidueEntity = {
      name: row.name,
      occurrences: row.occurrences,
      avg_lng: lng,
      avg_lat: lat,
      eras: row.eras || [],
      suggested_slug: generateSlug(row.name),
    }

    part.entities.push(entity)
    part.entityCount += 1
    part.featureCount += row.occurrences
  }

  return partitions
}

async function main() {
  console.log("Dividing historical culture residue into continental sets...\n")

  const partitions = await partitionResidue()

  const outDir = path.resolve(__dirname, "../data-sources/residue")
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true })
  }

  const summary = {
    timestamp: new Date().toISOString(),
    totalEntities: 0,
    totalFeatures: 0,
    continents: {} as Record<string, any>,
  }

  console.log("=== CONTINENTAL RESIDUE SETS ===")
  for (const [contName, part] of Object.entries(partitions)) {
    summary.totalEntities += part.entityCount
    summary.totalFeatures += part.featureCount

    summary.continents[contName] = {
      continent: part.continent,
      slug: part.slug,
      batchFileName: part.batchFileName,
      entityCount: part.entityCount,
      featureCount: part.featureCount,
      inventoryFile: `data-sources/residue/${part.slug}.json`,
      targetBatchFile: `data-sources/batches/${part.batchFileName}`,
    }

    const contFilePath = path.join(outDir, `${part.slug}.json`)
    fs.writeFileSync(contFilePath, JSON.stringify(part, null, 2), "utf-8")
    console.log(
      `✓ ${part.continent.padEnd(14)}: ${part.entityCount.toString().padStart(4)} entities, ${part.featureCount
        .toString()
        .padStart(5)} features -> data-sources/residue/${part.slug}.json`
    )
  }

  const summaryPath = path.join(outDir, "summary.json")
  fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2), "utf-8")
  console.log(`\n✓ Summary catalog written to data-sources/residue/summary.json`)
  console.log(
    `\nTotal Partitioned: ${summary.totalEntities} entities across ${summary.totalFeatures} feature instances (100% accounted for).\n`
  )

  await closePool()
}

if (require.main === module) {
  main().catch((err) => {
    console.error("Residue partition error:", err)
    process.exit(1)
  })
}
