import { describe, it, expect } from "vitest"
import {
  getCountryColor,
  getEntityMetadata,
  isNeutralOrUnclaimed,
  NEUTRAL_TERRITORY_COLOR,
} from "./colors"

describe("Globe Colors & Lineage Engine", () => {
  it("handles unclaimed and neutral territories with muted slate tone", () => {
    expect(isNeutralOrUnclaimed("unclaimed")).toBe(true)
    expect(isNeutralOrUnclaimed("Unclaimed")).toBe(true)
    expect(isNeutralOrUnclaimed("Unknown")).toBe(true)
    expect(isNeutralOrUnclaimed("unknown")).toBe(true)
    expect(isNeutralOrUnclaimed("unnamed")).toBe(true)
    expect(isNeutralOrUnclaimed("Antarctica")).toBe(true)
    expect(isNeutralOrUnclaimed("the Americas")).toBe(true)
    expect(isNeutralOrUnclaimed(undefined)).toBe(true)
    expect(isNeutralOrUnclaimed(null)).toBe(true)
    expect(isNeutralOrUnclaimed("")).toBe(true)

    expect(getCountryColor("unclaimed")).toBe(NEUTRAL_TERRITORY_COLOR)
    expect(getCountryColor("Unclaimed")).toBe(NEUTRAL_TERRITORY_COLOR)
    expect(getCountryColor("Unknown")).toBe(NEUTRAL_TERRITORY_COLOR)
    expect(getCountryColor("unknown")).toBe(NEUTRAL_TERRITORY_COLOR)
    expect(getCountryColor("Antarctica")).toBe(NEUTRAL_TERRITORY_COLOR)
    expect(getCountryColor("")).toBe(NEUTRAL_TERRITORY_COLOR)
    expect(getCountryColor(undefined)).toBe(NEUTRAL_TERRITORY_COLOR)
  })

  it("resolves modern countries using the curated baseline palette", () => {
    const finlandColor = getCountryColor("Finland")
    const franceColor = getCountryColor("France")
    const japanColor = getCountryColor("Japan")

    expect(finlandColor).toBe("#0284c7")
    expect(franceColor).toBe("#2563eb")
    expect(japanColor).toBe("#e11d48")
  })

  it("resolves user manual overrides from entityRegistry.json with top priority", () => {
    const byzantium = getEntityMetadata("Byzantine Empire")
    expect(byzantium.color).toBe("#7c3aed")
    expect(byzantium.lineageId).toBe("byzantium")
    expect(byzantium.canonicalName).toContain("Byzantine")

    const carthage = getEntityMetadata("Carthaginian Empire")
    expect(carthage.color).toBe("#c2410c")
  })

  it("preserves lineage color across historical renames", () => {
    // Achaemenid / Persian Empire continuity
    const persiaColor = getCountryColor("Persian Empire")
    const achaemenidColor = getCountryColor("Achaemenid Empire")
    expect(persiaColor).toBe(achaemenidColor)
    expect(persiaColor).toBe("#0d9488") // Persian Teal

    // British continuity
    const england = getCountryColor("Kingdom of England")
    const gbr = getCountryColor("Kingdom of Great Britain")
    expect(england).toBeDefined()
    expect(gbr).toBeDefined()
  })

  it("distinguishes splinter / successor states when empires split", () => {
    const austriaHungary = getCountryColor("Austro-Hungarian Empire")
    const austria = getCountryColor("Austria")
    const hungary = getCountryColor("Hungary")

    expect(austriaHungary).toBe("#854d0e") // Imperial Ochre
    expect(austria).toBe("#ef4444") // Modern Austrian Red
    expect(hungary).toBe("#16a34a") // Modern Hungarian Green
    expect(austria).not.toBe(hungary)
    expect(austria).not.toBe(austriaHungary)
  })

  it("returns deterministic golden-ratio HSL color for uncataloged ancient cultures", () => {
    const color1 = getCountryColor("Scythian Nomads")
    const color2 = getCountryColor("Scythian Nomads")
    const colorDiff = getCountryColor("Lapita Culture")

    expect(color1).toBe(color2)
    expect(color1).toMatch(/^hsl\(\d+,\s*68%,\s*52%\)$/)
    expect(color1).not.toBe(colorDiff)
  })
})
