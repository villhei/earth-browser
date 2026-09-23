import {
  CultureBatchEntry,
  seedBatch,
  seedAllBatches,
} from "../src/server/cultureSeeder"

export { CultureBatchEntry, seedBatch, seedAllBatches }

if (require.main === module) {
  const targetFile = process.argv[2]
  if (!targetFile || targetFile === "all") {
    seedAllBatches().catch((err) => {
      console.error("Fatal error:", err)
      process.exit(1)
    })
  } else {
    seedBatch(targetFile).catch((err) => {
      console.error("Fatal error:", err)
      process.exit(1)
    })
  }
}
