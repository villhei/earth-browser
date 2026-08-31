import { describe, it, expect } from "vitest"
import { DATA_SOURCE_INFO } from "./Attribution"

describe("Attribution metadata", () => {
  it("contains complete and accurate data source references", () => {
    expect(DATA_SOURCE_INFO.author).toBe("André Ourednik")
    expect(DATA_SOURCE_INFO.name).toBe("historical-basemaps")
    expect(DATA_SOURCE_INFO.repoUrl).toContain("github.com/aourednik/historical-basemaps")
    expect(DATA_SOURCE_INFO.license).toBe("GPL-3.0")
    expect(DATA_SOURCE_INFO.licenseUrl).toContain("LICENSE")
  })
})
