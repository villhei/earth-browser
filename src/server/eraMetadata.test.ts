import { describe, it, expect } from "vitest"
import fs from "fs"
import path from "path"
import { ERA_CATALOG, getEraByFilename, getEraBySlug } from "./eraMetadata"

describe("Era Metadata Catalog", () => {
  it("contains all 54 historical and modern eras", () => {
    expect(ERA_CATALOG.length).toBe(54)
  })

  it("is strictly ordered chronologically by year_start", () => {
    for (let i = 1; i < ERA_CATALOG.length; i++) {
      expect(ERA_CATALOG[i].year_start).toBeGreaterThanOrEqual(
        ERA_CATALOG[i - 1].year_start
      )
    }
  })

  it("has unique slugs and filenames across all catalog entries", () => {
    const slugs = new Set<string>()
    const filenames = new Set<string>()

    for (const era of ERA_CATALOG) {
      expect(slugs.has(era.slug)).toBe(false)
      expect(filenames.has(era.filename)).toBe(false)
      slugs.add(era.slug)
      filenames.add(era.filename)
    }
  })

  it("ensures every catalog file exists in migrations/seed", () => {
    const seedDir = path.resolve(__dirname, "../../migrations/seed")
    for (const era of ERA_CATALOG) {
      const filePath = path.join(seedDir, era.filename)
      expect(fs.existsSync(filePath)).toBe(true)
    }
  })

  it("resolves era by filename correctly", () => {
    const era1492 = getEraByFilename("world_1492.geojson")
    expect(era1492).toBeDefined()
    expect(era1492?.year_start).toBe(1492)
    expect(era1492?.slug).toBe("world-1492")

    const eraBc1 = getEraByFilename("world_bc1.geojson")
    expect(eraBc1).toBeDefined()
    expect(eraBc1?.year_start).toBe(-1)
    expect(eraBc1?.slug).toBe("world-bc1")
    const era1878 = getEraByFilename("world_1878.geojson")
    expect(era1878).toBeDefined()
    expect(era1878?.year_start).toBe(1878)
    expect(era1878?.slug).toBe("world-1878")
  })

  it("resolves era by slug correctly", () => {
    const era1878 = getEraBySlug("world-1878")
    expect(era1878).toBeDefined()
    expect(era1878?.year_start).toBe(1878)
    expect(era1878?.year_label).toBe("1878 CE")

    const era2000bc = getEraBySlug("world-bc2000")
    expect(era2000bc).toBeDefined()
    expect(era2000bc?.year_start).toBe(-2000)
    expect(era2000bc?.year_label).toBe("2000 BCE")

    const era123kbc = getEraBySlug("world-bc123000")
    expect(era123kbc).toBeDefined()
    expect(era123kbc?.year_start).toBe(-123000)
  })
})
