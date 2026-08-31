import { describe, it, expect } from "vitest"
import {
  getCountryColor,
  getEntityMetadata,
  isNeutralOrUnclaimed,
  NEUTRAL_TERRITORY_COLOR,
  getSubjugationInfo,
  getBorderPrecision,
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

    // Archaeological & Ancient Cultures in 700 BCE and other ancient datasets
    const karasuk = getEntityMetadata("Karasuk culture")
    expect(karasuk.cultureGroup).toBe("Central Asia")
    expect(karasuk.color).toBe("#06b6d4") // Vivid cyan / turquoise

    const chernoles = getEntityMetadata("Chernoles culture")
    expect(chernoles.cultureGroup).toBe("Eastern Europe")
    expect(chernoles.color).toBe("#10b981") // Vivid emerald green

    const lusatian = getEntityMetadata("Lusatian culture")
    expect(lusatian.cultureGroup).toBe("Central Europe")
    expect(lusatian.color).toBe("#f59e0b") // Vivid amber gold

    const milograd = getEntityMetadata("Milograd culture")
    expect(milograd.cultureGroup).toBe("Eastern Europe")
    expect(milograd.color).toBe("#8b5cf6") // Vivid violet / purple

    const latene = getEntityMetadata("La Tène culture")
    expect(latene.cultureGroup).toBe("Western Europe")
    expect(latene.color).toBe("#15803d") // Vivid Celtic green

    const jomon = getEntityMetadata("Late Jomon culture")
    expect(jomon.cultureGroup).toBe("East Asia")
    expect(jomon.color).toBe("#e11d48") // Vivid Japanese crimson

    const austroAsiatic = getEntityMetadata("Austro-Asiatic rice farmers")
    expect(austroAsiatic.cultureGroup).toBe("Southeast Asia")
    expect(austroAsiatic.color).toBe("#059669") // Vivid jade green

    const papuan = getEntityMetadata("Papuan neolithic farmers")
    expect(papuan.cultureGroup).toBe("Oceania")
    expect(papuan.color).toBe("#047857") // Vivid highland green

    const shellfish = getEntityMetadata("Shellfish gatherers")
    expect(shellfish.cultureGroup).toBe("Prehistoric & Archaeological")
    expect(shellfish.color).toBe("#0891b2") // Vivid coastal cyan

    // 10000 / 8000 BCE Mesolithic & Neolithic Farmers
    const steppeMesolithic = getEntityMetadata("Steppe Mesolithic Hunter-Foragers")
    expect(steppeMesolithic.color).toBe("#0284c7") // Vivid azure
    expect(steppeMesolithic.lineageId).toBe("steppe-mesolithic")

    const alluvialMesolithic = getEntityMetadata("Alluvial Lowland Mesolithic Hunter-Foragers")
    expect(alluvialMesolithic.color).toBe("#d97706") // Vivid alluvial gold
    expect(alluvialMesolithic.lineageId).toBe("alluvial-mesolithic")

    const highlandMesolithic = getEntityMetadata("Highland Mesolithic Hunter-Foragers")
    expect(highlandMesolithic.color).toBe("#7c3aed") // Vivid violet
    expect(highlandMesolithic.lineageId).toBe("highland-mesolithic")

    const coastalWoodland = getEntityMetadata("Coastal and Woodland Mesolithic Hunter-Foragers")
    expect(coastalWoodland.color).toBe("#16a34a") // Vivid spring green
    expect(coastalWoodland.lineageId).toBe("coastal-woodland-mesolithic")

    const levantineNeolithic = getEntityMetadata("Levantine Corridor (Neolithic Farmers)")
    expect(levantineNeolithic.color).toBe("#ea580c") // Vivid terracotta orange
    expect(levantineNeolithic.lineageId).toBe("levantine-corridor-neolithic")

    const neolithicFarmers = getEntityMetadata("Neolithic Farmers")
    expect(neolithicFarmers.color).toBe("#eab308") // Vivid harvest gold
    expect(neolithicFarmers.lineageId).toBe("neolithic-farmers")

    // Early Hominins
    const neanderthal = getEntityMetadata("Neanderthal")
    expect(neanderthal.color).toBe("#2563eb")

    const erectus = getEntityMetadata("Homo erectus")
    expect(erectus.color).toBe("#dc2626")

    // Verify visual distinguishability among 10000/8000 BCE groups
    const distinctMesolithicNeolithicColors = new Set([
      steppeMesolithic.color,
      alluvialMesolithic.color,
      highlandMesolithic.color,
      coastalWoodland.color,
      levantineNeolithic.color,
      neolithicFarmers.color,
    ])
    expect(distinctMesolithicNeolithicColors.size).toBe(6)

    // Verify visual distinguishability among ancient cultures
    const distinctColors = new Set([
      karasuk.color,
      chernoles.color,
      lusatian.color,
      milograd.color,
      latene.color,
      jomon.color,
      austroAsiatic.color,
      papuan.color,
      steppeMesolithic.color,
      alluvialMesolithic.color,
      highlandMesolithic.color,
      coastalWoodland.color,
      levantineNeolithic.color,
      neolithicFarmers.color,
    ])
    expect(distinctColors.size).toBe(14)
  })

  it("returns deterministic golden-ratio HSL color for uncataloged ancient cultures", () => {
    const color1 = getCountryColor("Lapita Culture")
    const color2 = getCountryColor("Lapita Culture")
    const colorDiff = getCountryColor("Proto-Aurignacian Tribe")

    expect(color1).toBe(color2)
    expect(color1).toMatch(/^hsl\(\d+,\s*82%,\s*50%\)$/)
    expect(color1).not.toBe(colorDiff)
  })

  it("inherits parent entity color when PARTOF is defined", () => {
    // Pomeranian culture with PARTOF: 'Baltic archeological cultures'
    const pomeranianParentColor = getCountryColor("Pomeranian culture", {
      PARTOF: "Baltic archeological cultures",
    })
    const balticCultureColor = getCountryColor("Baltic archeological cultures")
    expect(pomeranianParentColor).toBe(balticCultureColor)

    // Duchy of Swabia with PARTOF: 'Holy Roman Empire'
    const swabiaColor = getCountryColor("Duchy of Swabia", {
      PARTOF: "Holy Roman Empire",
    })
    const hreColor = getCountryColor("Holy Roman Empire")
    expect(swabiaColor).toBe(hreColor)

    // Without PARTOF, Swabia gets its own or regional color
    const standaloneSwabia = getCountryColor("Duchy of Swabia")
    expect(standaloneSwabia).toBeDefined()
  })

  it("identifies subjugation relationships via SUBJECTO", () => {
    // Bosporian Kingdom subject to Roman Empire
    const bosporusSubjugation = getSubjugationInfo("Bosporian Kingdom", {
      NAME: "Bosporian Kingdom",
      PARTOF: "Bosporian Kingdom",
      SUBJECTO: "Roman Empire",
    })
    expect(bosporusSubjugation.isSubjugated).toBe(true)
    expect(bosporusSubjugation.suzerainName).toBe("Roman Empire")
    expect(bosporusSubjugation.suzerainColor).toBe(getCountryColor("Roman Empire"))

    // Autonomous country where SUBJECTO matches its own identity
    const franceSubjugation = getSubjugationInfo("Kingdom of France", {
      NAME: "Kingdom of France",
      SUBJECTO: "Kingdom of France",
    })
    expect(franceSubjugation.isSubjugated).toBe(false)
  })

  it("resolves border precision levels correctly", () => {
    expect(getBorderPrecision({ BORDERPRECISION: 3 })).toBe(3)
    expect(getBorderPrecision({ border_precision: 2 })).toBe(2)
    expect(getBorderPrecision({ BORDERPRECISION: 1 })).toBe(1)
    expect(getBorderPrecision({ BORDERPRECISION: 0 })).toBe(1)
    expect(getBorderPrecision({})).toBe(1)
  })
})
