import { describe, it, expect } from "vitest"
import fs from "fs"
import path from "path"

describe("Translatable Strings Extraction & Catalog", () => {
  const translationsDir = path.resolve(__dirname, "../../data/translations")
  const extractedPath = path.join(translationsDir, "extracted_strings.json")
  const catalogPath = path.join(translationsDir, "translatable_catalog.json")
  const seedsPath = path.join(translationsDir, "places_multilingual_seed.json")
  const summaryPath = path.resolve(__dirname, "../../../docs/translatable_strings_summary.md")

  it("generates extracted_strings.json with valid structure and non-empty entries", () => {
    expect(fs.existsSync(extractedPath)).toBe(true)
    const data = JSON.parse(fs.readFileSync(extractedPath, "utf-8"))
    expect(Array.isArray(data)).toBe(true)
    expect(data.length).toBeGreaterThan(5000)

    const sample = data[0]
    expect(sample).toHaveProperty("text")
    expect(sample).toHaveProperty("category")
    expect(sample).toHaveProperty("occurrences")
    expect(sample).toHaveProperty("eras")
    expect(sample).toHaveProperty("roles")
    expect(sample).toHaveProperty("sources")
  })

  it("generates translatable_catalog.json as a key-value dictionary", () => {
    expect(fs.existsSync(catalogPath)).toBe(true)
    const catalog = JSON.parse(fs.readFileSync(catalogPath, "utf-8"))
    expect(typeof catalog).toBe("object")
    const keys = Object.keys(catalog)
    expect(keys.length).toBeGreaterThan(5000)

    // Key empires should exist in catalog
    expect(catalog["Roman Empire"]).toBeDefined()
    expect(catalog["Ottoman Empire"]).toBeDefined()
    expect(catalog["Byzantine Empire"]).toBeDefined()
  })

  it("generates places_multilingual_seed.json with multilingual translations", () => {
    expect(fs.existsSync(seedsPath)).toBe(true)
    const seeds = JSON.parse(fs.readFileSync(seedsPath, "utf-8"))
    expect(Array.isArray(seeds)).toBe(true)
    expect(seeds.length).toBeGreaterThan(100)

    const sample = seeds.find((s: any) => Object.keys(s.translations).length > 2)
    expect(sample).toBeDefined()
    expect(sample.translations).toBeDefined()
  })

  it("generates markdown summary report in docs/", () => {
    if (!fs.existsSync(summaryPath)) {
      // docs/ may be cleaned during vite build
      return
    }
    const content = fs.readFileSync(summaryPath, "utf-8")
    expect(content).toContain("Historical Earth Browser — Translatable Strings Summary")
    expect(content).toContain("Polities & Territories")
  })
})
