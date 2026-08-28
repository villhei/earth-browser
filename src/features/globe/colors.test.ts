import { describe, it, expect } from "vitest"
import { getCountryColor, DEFAULT_COUNTRY_COLOR } from "./colors"

describe("Globe Colors", () => {
  it("returns default country color when name is empty or undefined", () => {
    expect(getCountryColor(undefined)).toBe(DEFAULT_COUNTRY_COLOR)
    expect(getCountryColor("")).toBe(DEFAULT_COUNTRY_COLOR)
  })

  it("returns flag color for known country", () => {
    const finlandColor = getCountryColor("Finland")
    expect(finlandColor).toBeDefined()
    expect(typeof finlandColor).toBe("string")
  })

  it("returns deterministic HSL color for historical cultures / unrecognized entities", () => {
    const color1 = getCountryColor("Scythian Empire")
    const color2 = getCountryColor("Scythian Empire")
    const colorDiff = getCountryColor("Achaemenid Empire")

    expect(color1).toBe(color2)
    expect(color1).toMatch(/^hsl\(\d+,\s*65%,\s*55%\)$/)
    expect(color1).not.toBe(colorDiff)
  })
})
