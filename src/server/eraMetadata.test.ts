import { describe, it, expect } from "vitest"
import { ERA_CATALOG, getEraByFilename, getEraBySlug } from "./eraMetadata"

describe("Era Metadata Catalog", () => {
  it("contains all 24 historical eras", () => {
    expect(ERA_CATALOG.length).toBe(24)
  })

  it("is strictly ordered chronologically by year_start", () => {
    for (let i = 1; i < ERA_CATALOG.length; i++) {
      expect(ERA_CATALOG[i].year_start).toBeGreaterThanOrEqual(
        ERA_CATALOG[i - 1].year_start
      )
    }
  })

  it("resolves era by filename correctly", () => {
    const era1492 = getEraByFilename("world_1492.geojson")
    expect(era1492).toBeDefined()
    expect(era1492?.year_start).toBe(1492)
    expect(era1492?.slug).toBe("world-1492")
  })

  it("resolves era by slug correctly", () => {
    const era2000bc = getEraBySlug("world-bc2000")
    expect(era2000bc).toBeDefined()
    expect(era2000bc?.year_start).toBe(-2000)
    expect(era2000bc?.year_label).toBe("2000 BCE")
  })
})
