import fs from "fs"
import path from "path"
import { seedBatch, CultureBatchEntry } from "../src/server/cultureSeeder"

const BATCH_FILE = path.resolve(__dirname, "../data-sources/batches/bc500.json")

export const BC500_CULTURES: CultureBatchEntry[] = JSON.parse(
  fs.readFileSync(BATCH_FILE, "utf-8")
)

export async function seed(shouldClosePool = true) {
  return seedBatch(BATCH_FILE, shouldClosePool)
}

if (require.main === module) {
  seed().catch((err) => {
    console.error("Fatal seed error:", err)
    process.exit(1)
  })
}

export default seed
