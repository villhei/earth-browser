/**
 * Historical Earth Browser — GeoJSON Dataset Update Script
 *
 * Sourced from: https://github.com/aourednik/historical-basemaps
 * Author & Cartographer: André Ourednik (https://ourednik.info/historicalmaps/)
 * License: GNU General Public License v3.0 (GPL-3.0)
 *
 * Usage:
 *   npx tsx scripts/update_geojson_datasets.ts
 *   npx tsx scripts/update_geojson_datasets.ts --source-dir /path/to/historical-basemaps
 *   npm run data:update
 */

import fs from "fs"
import path from "path"
import { execSync } from "child_process"
import { ERA_CATALOG, getEraByFilename } from "../src/server/eraMetadata"

const UPSTREAM_REPO_URL = "https://github.com/aourednik/historical-basemaps.git"
const SEED_DIR = path.resolve(__dirname, "../migrations/seed")

interface UpdateOptions {
  sourceDir?: string
  skipClone?: boolean
}

function parseArgs(): UpdateOptions {
  const args = process.argv.slice(2)
  const options: UpdateOptions = {}

  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--source-dir" && args[i + 1]) {
      options.sourceDir = path.resolve(args[++i])
    } else if (args[i] === "--skip-clone") {
      options.skipClone = true
    }
  }

  return options
}

export async function updateDatasets(options: UpdateOptions = {}) {
  console.log("==================================================================")
  console.log(" Earth Browser — Historical GeoJSON Dataset Synchronization")
  console.log(" Source: https://github.com/aourednik/historical-basemaps")
  console.log("==================================================================\n")

  let repoDir = options.sourceDir

  if (!repoDir) {
    const defaultTmpDir = "/tmp/historical-basemaps"
    if (fs.existsSync(defaultTmpDir) && fs.existsSync(path.join(defaultTmpDir, ".git"))) {
      repoDir = defaultTmpDir
      console.log(`Using existing clone at ${repoDir}...`)
      try {
        console.log("Fetching latest changes from remote master...")
        execSync("git fetch origin master && git reset --hard origin/master", {
          cwd: repoDir,
          stdio: "inherit",
        })
      } catch (fetchErr: any) {
        console.warn(`Warning: failed to fetch remote, continuing with existing clone: ${fetchErr.message}`)
      }
    } else {
      repoDir = defaultTmpDir
      console.log(`Cloning ${UPSTREAM_REPO_URL} into ${repoDir}...`)
      execSync(`git clone --depth 1 ${UPSTREAM_REPO_URL} ${repoDir}`, {
        stdio: "inherit",
      })
    }
  }

  const geojsonSrcDir = path.join(repoDir, "geojson")
  if (!fs.existsSync(geojsonSrcDir)) {
    console.error(`Error: geojson directory not found at ${geojsonSrcDir}`)
    process.exit(1)
  }

  if (!fs.existsSync(SEED_DIR)) {
    fs.mkdirSync(SEED_DIR, { recursive: true })
  }

  // Get commit information from the source repository
  let commitInfo = "Unknown"
  try {
    commitInfo = execSync("git log -1 --format='%h - %s (%ci)'", {
      cwd: repoDir,
      encoding: "utf-8",
    }).trim()
  } catch {
    // Ignore if not a git directory
  }
  console.log(`Upstream commit: ${commitInfo}\n`)

  const sourceFiles = fs
    .readdirSync(geojsonSrcDir)
    .filter((f) => f.endsWith(".geojson"))

  console.log(`Found ${sourceFiles.length} GeoJSON files in upstream repository.`)

  let addedCount = 0
  let modifiedCount = 0
  let unchangedCount = 0

  const modifiedDetails: string[] = []
  const addedDetails: string[] = []

  for (const file of sourceFiles) {
    const srcFilePath = path.join(geojsonSrcDir, file)
    const destFilePath = path.join(SEED_DIR, file)

    const srcContent = fs.readFileSync(srcFilePath)

    // Validate JSON structure
    try {
      const parsed = JSON.parse(srcContent.toString("utf-8"))
      if (parsed.type !== "FeatureCollection" || !Array.isArray(parsed.features)) {
        console.warn(`  ⚠ Warning: ${file} is not a valid GeoJSON FeatureCollection, skipping`)
        continue
      }
    } catch (parseErr: any) {
      console.error(`  ✗ Error: ${file} contains invalid JSON: ${parseErr.message}`)
      continue
    }

    if (!fs.existsSync(destFilePath)) {
      fs.writeFileSync(destFilePath, srcContent)
      addedCount++
      addedDetails.push(file)
      console.log(`  + ADDED: ${file} (${(srcContent.length / 1024).toFixed(1)} KB)`)
    } else {
      const existingContent = fs.readFileSync(destFilePath)
      if (!existingContent.equals(srcContent)) {
        fs.writeFileSync(destFilePath, srcContent)
        modifiedCount++
        modifiedDetails.push(file)
        console.log(
          `  ~ MODIFIED: ${file} (${(existingContent.length / 1024).toFixed(1)} KB -> ${(srcContent.length / 1024).toFixed(1)} KB)`
        )
      } else {
        unchangedCount++
      }
    }
  }

  console.log("\n------------------------------------------------------------------")
  console.log(" Synchronization Summary:")
  console.log(`   Added:     ${addedCount} files`)
  console.log(`   Modified:  ${modifiedCount} files`)
  console.log(`   Unchanged: ${unchangedCount} files`)
  console.log(`   Total:     ${sourceFiles.length} files in ${SEED_DIR}`)
  console.log("------------------------------------------------------------------\n")

  // Verify catalog coverage in ERA_CATALOG
  console.log("Verifying ERA_CATALOG coverage in src/server/eraMetadata.ts...")
  const seedEraFiles = fs
    .readdirSync(SEED_DIR)
    .filter((f) => f.startsWith("world_") && f.endsWith(".geojson"))

  const missingFromCatalog: string[] = []
  for (const file of seedEraFiles) {
    const meta = getEraByFilename(file)
    if (!meta) {
      missingFromCatalog.push(file)
    }
  }

  const missingSeedFiles: string[] = []
  for (const era of ERA_CATALOG) {
    if (!fs.existsSync(path.join(SEED_DIR, era.filename))) {
      missingSeedFiles.push(era.filename)
    }
  }

  if (missingFromCatalog.length > 0) {
    console.warn(
      `⚠ WARNING: The following ${missingFromCatalog.length} seed file(s) are NOT defined in ERA_CATALOG:`
    )
    for (const f of missingFromCatalog) {
      console.warn(`   - ${f}`)
    }
    console.warn("Please add them to src/server/eraMetadata.ts before database ingestion.\n")
  } else {
    console.log(`✓ All ${seedEraFiles.length} world GeoJSON files are registered in ERA_CATALOG.`)
  }

  if (missingSeedFiles.length > 0) {
    console.error(
      `✗ ERROR: The following ${missingSeedFiles.length} files in ERA_CATALOG are missing from seed directory:`
    )
    for (const f of missingSeedFiles) {
      console.error(`   - ${f}`)
    }
    process.exit(1)
  }

  console.log(`✓ ERA_CATALOG contains ${ERA_CATALOG.length} eras, all verified present on disk.\n`)
  console.log("Next steps:")
  console.log("  1. Ingest into PostGIS:   npm run db:ingest")
  console.log("  2. Export static bundles: npm run db:export")
  console.log("  3. Run test suite:        npm test\n")
}

if (require.main === module) {
  const options = parseArgs()
  updateDatasets(options).catch((err) => {
    console.error("Fatal update error:", err)
    process.exit(1)
  })
}
