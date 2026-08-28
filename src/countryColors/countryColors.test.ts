import { describe, it, expect } from "vitest"
import { findCountryColor, DEFAULT_COLOR } from "./index"

describe("countryColors", () => {
  it("returns default color constant", () => {
    expect(DEFAULT_COLOR).toBe("#FFFFFF")
  })

  it("returns color for known country", () => {
    const color = findCountryColor("Finland")
    expect(color).toBeDefined()
    expect(typeof color).toBe("string")
  })

  it("returns undefined for unknown country", () => {
    const color = findCountryColor("NonExistentCountry12345")
    expect(color).toBeUndefined()
  })
})
