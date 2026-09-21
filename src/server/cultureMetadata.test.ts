import { describe, it, expect } from "vitest"
import fs from "fs"
import path from "path"
import { BC500_CULTURES } from "../../scripts/seed_culture_metadata_bc500"

describe("Culture Metadata Prototype (world-bc500)", () => {
  it("contains valid metadata for all seeded cultures", () => {
    expect(BC500_CULTURES.length).toBeGreaterThanOrEqual(25)

    for (const culture of BC500_CULTURES) {
      expect(culture.slug).toMatch(/^[a-z0-9-]+$/)
      expect(culture.name.length).toBeGreaterThan(0)
      expect(culture.name_fi.length).toBeGreaterThan(0)
      expect(culture.culture_group.length).toBeGreaterThan(0)
      expect(culture.historical_period.length).toBeGreaterThan(0)
      expect(culture.year_start).toBeLessThanOrEqual(culture.year_end)
      expect(culture.period_label.length).toBeGreaterThan(0)
      expect(culture.period_label_fi.length).toBeGreaterThan(0)

      // Wikipedia URLs
      expect(culture.wikipedia_url_en).toMatch(/^https:\/\/en\.wikipedia\.org\/wiki\//)
      expect(culture.wikipedia_url_fi).toMatch(/^https:\/\/fi\.wikipedia\.org\/wiki\//)

      // Text summaries
      expect(culture.summary_en.length).toBeGreaterThan(30)
      expect(culture.summary_fi.length).toBeGreaterThan(30)

      // Match targets
      expect(culture.feature_name_matches.length).toBeGreaterThan(0)
    }
  })

  it("includes representative entities across all major world regions", () => {
    const groups = new Set(BC500_CULTURES.map((c) => c.culture_group))
    expect(groups.has("Iranian")).toBe(true)
    expect(groups.has("Greco-Roman")).toBe(true)
    expect(groups.has("East Asia")).toBe(true)
    expect(groups.has("South Asia")).toBe(true)
    expect(groups.has("East Africa")).toBe(true)
    expect(groups.has("Mesoamerican")).toBe(true)
    expect(groups.has("Andean")).toBe(true)
    expect(groups.has("North American Indigenous")).toBe(true)
    expect(groups.has("Baltic")).toBe(true)
    expect(groups.has("Finno-Ugric")).toBe(true)
  })
})

describe("Culture Metadata Batches", () => {
  const validateBatch = (filePath: string, expectedGroup: string, minCount: number) => {
    const raw = fs.readFileSync(filePath, "utf-8")
    const entries = JSON.parse(raw)
    expect(entries.length).toBeGreaterThanOrEqual(minCount)

    const slugs = new Set<string>()
    for (const entry of entries) {
      expect(entry.slug).toMatch(/^[a-z0-9-]+$/)
      expect(slugs.has(entry.slug)).toBe(false)
      slugs.add(entry.slug)

      expect(entry.name.length).toBeGreaterThan(0)
      expect(entry.name_fi.length).toBeGreaterThan(0)
      expect(entry.culture_group).toBe(expectedGroup)
      expect(entry.historical_period.length).toBeGreaterThan(0)
      expect(entry.year_start).toBeLessThanOrEqual(entry.year_end)
      expect(entry.period_label.length).toBeGreaterThan(0)
      expect(entry.period_label_fi.length).toBeGreaterThan(0)

      expect(entry.wikipedia_url_en).toMatch(/^https:\/\/en\.wikipedia\.org\/wiki\//)
      expect(entry.wikipedia_url_fi).toMatch(/^https:\/\/fi\.wikipedia\.org\/wiki\//)

      expect(entry.summary_en.length).toBeGreaterThan(40)
      expect(entry.summary_fi.length).toBeGreaterThan(40)
      expect(entry.feature_name_matches.length).toBeGreaterThan(0)
    }
  }

  it("validates the Greco-Roman batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/greco-roman.json")
    validateBatch(batchPath, "Greco-Roman", 14)
  })

  it("validates the Ancient Near East batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/ancient-near-east.json")
    validateBatch(batchPath, "Ancient Near East", 20)
  })

  it("validates the Islamic Caliphates batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/islamic-caliphates.json")
    validateBatch(batchPath, "Islamic Caliphates", 15)
  })

  it("validates the Iranian batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/iranian.json")
    validateBatch(batchPath, "Iranian", 14)
  })

  it("validates the Mesoamerican batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/mesoamerican.json")
    validateBatch(batchPath, "Mesoamerican", 30)
  })

  it("validates the Andean batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/andean.json")
    validateBatch(batchPath, "Andean", 30)
  })

  it("validates the Central Asia batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/central-asia.json")
    validateBatch(batchPath, "Central Asia", 50)
  })

  it("validates the East Asia batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/east-asia.json")
    validateBatch(batchPath, "East Asia", 45)
  })

  it("validates the South Asia batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/south-asia.json")
    validateBatch(batchPath, "South Asia", 40)
  })

  it("validates the Southeast Asia batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/southeast-asia.json")
    validateBatch(batchPath, "Southeast Asia", 25)
  })

  it("validates the West Africa batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/west-africa.json")
    validateBatch(batchPath, "West Africa", 20)
  })

  it("validates the Central Africa batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/central-africa.json")
    validateBatch(batchPath, "Central Africa", 10)
  })

  it("validates the East Africa batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/east-africa.json")
    validateBatch(batchPath, "East Africa", 20)
  })

  it("validates the Southern Africa batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/southern-africa.json")
    validateBatch(batchPath, "Southern Africa", 15)
  })

  it("validates the Western Europe batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/western-europe.json")
    validateBatch(batchPath, "Western Europe", 25)
  })

  it("validates the Central Europe batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/central-europe.json")
    validateBatch(batchPath, "Central Europe", 14)
  })

  it("validates the Nordic batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/nordic.json")
    validateBatch(batchPath, "Nordic", 8)
  })

  it("validates the Slavic batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/slavic.json")
    validateBatch(batchPath, "Slavic", 10)
  })

  it("validates the Baltic batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/baltic.json")
    validateBatch(batchPath, "Baltic", 8)
  })
})

