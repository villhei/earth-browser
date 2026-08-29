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

  it("resolves newly added cultural regions with designated cohesive palettes", () => {
    // Australian Aboriginal & Tasmanian
    const aboriginal = getEntityMetadata("Australian aboriginal hunter-gatherers")
    expect(aboriginal.cultureGroup).toBe("Oceania")
    expect(aboriginal.color).toBe("#c2410c")

    const arrernte = getEntityMetadata("Arrernte")
    expect(arrernte.cultureGroup).toBe("Oceania")
    expect(arrernte.color).toBe("#c2410c")

    // Arctic & Subarctic
    const inuit = getEntityMetadata("Arctic marine mammal hunters")
    expect(inuit.cultureGroup).toBe("Arctic & Subarctic")
    expect(inuit.color).toBe("#0284c7")

    const athabaskan = getEntityMetadata("Athabaskan")
    expect(athabaskan.cultureGroup).toBe("Arctic & Subarctic")
    expect(athabaskan.color).toBe("#0f766e")

    // North American Indigenous
    const cherokee = getEntityMetadata("Cherokee (Oklahoma)")
    expect(cherokee.cultureGroup).toBe("North American Indigenous")
    expect(cherokee.color).toBe("#15803d")

    const plains = getEntityMetadata("Plain bison hunters")
    expect(plains.cultureGroup).toBe("North American Indigenous")
    expect(plains.color).toBe("#d97706")

    // South American Indigenous & Andean
    const pampas = getEntityMetadata("Pampas cultures")
    expect(pampas.cultureGroup).toBe("South American Indigenous")
    expect(pampas.color).toBe("#a16207")

    const amazon = getEntityMetadata("Amazon hunter-gatherers")
    expect(amazon.cultureGroup).toBe("South American Indigenous")
    expect(amazon.color).toBe("#059669")

    // African Kingdoms
    const songhai = getEntityMetadata("Songhai")
    expect(songhai.cultureGroup).toBe("West Africa")
    expect(songhai.color).toBe("#ca8a04")

    const merina = getEntityMetadata("Expansionist Kingdom of Merina")
    expect(merina.cultureGroup).toBe("East Africa")
    expect(merina.color).toBe("#dc2626")

    // Steppe Nomads
    const scythian = getEntityMetadata("Scythian Nomads")
    expect(scythian.cultureGroup).toBe("Central Asia")
    expect(scythian.color).toBe("#0369a1")

    // Southeast Asian Dynasties
    const daiViet = getEntityMetadata("Đại Việt")
    expect(daiViet.cultureGroup).toBe("Southeast Asia")
    expect(daiViet.color).toBe("#dc2626")

    const ayutthaya = getEntityMetadata("Ayutthaya")
    expect(ayutthaya.cultureGroup).toBe("Southeast Asia")
    expect(ayutthaya.color).toBe("#2563eb")
  })

  it("returns deterministic golden-ratio HSL color for uncataloged ancient cultures", () => {
    const color1 = getCountryColor("Lapita Culture")
    const color2 = getCountryColor("Lapita Culture")
    const colorDiff = getCountryColor("Proto-Aurignacian Tribe")

    expect(color1).toBe(color2)
    expect(color1).toMatch(/^hsl\(\d+,\s*68%,\s*52%\)$/)
    expect(color1).not.toBe(colorDiff)
  })
})
