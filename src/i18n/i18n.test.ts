import { describe, it, expect } from "vitest"
import {
  t,
  getLocalizedCultureSphere,
  getLocalizedTerritoryName,
  getLocalizedFeatureName,
  CULTURE_SPHERE_TRANSLATIONS,
  TERRITORY_NAME_TRANSLATIONS,
} from "./translations"
import { getLocalizedEra, ERA_TRANSLATIONS } from "./eras"
import { ERA_CATALOG } from "../server/eraMetadata"
import { ERA_EPOCHS, getLocalizedEpoch } from "../components/eraGrouping"
import { getTerrainHighlightColors } from "../features/globe/terrainHighlightShader"
import { Era } from "../types"

describe("i18n UI Translation Dictionary", () => {
  it("translates primary UI keys in English and Finnish", () => {
    expect(t("app_title", "en")).toBe("Earth Browser")
    expect(t("app_title", "fi")).toBe("Earth Browser")

    expect(t("visuals", "en")).toBe("Visuals")
    expect(t("visuals", "fi")).toBe("Näkymä")

    expect(t("globe_settings", "en")).toBe("Globe Settings")
    expect(t("globe_settings", "fi")).toBe("Maapallon asetukset")

    expect(t("territories", "en")).toBe("territories")
    expect(t("territories", "fi")).toBe("aluetta")

    expect(t("language", "en")).toBe("Language")
    expect(t("language", "fi")).toBe("Kieli")

    expect(t("close", "en")).toBe("Close")
    expect(t("close", "fi")).toBe("Sulje")
  })

  it("falls back gracefully for unknown keys", () => {
    expect(t("non_existent_key_xyz", "en")).toBe("non_existent_key_xyz")
    expect(t("non_existent_key_xyz", "fi")).toBe("non_existent_key_xyz")
  })
})

describe("i18n Culture Spheres Localization", () => {
  it("translates culture spheres into Finnish", () => {
    expect(getLocalizedCultureSphere("Andean", "fi")).toBe("Andien sivilisaatiot")
    expect(getLocalizedCultureSphere("Nordic", "fi")).toBe("Pohjoismainen")
    expect(getLocalizedCultureSphere("Ancient Near East", "fi")).toBe("Muinainen Lähi-itä")
    expect(getLocalizedCultureSphere("Greco-Roman", "fi")).toBe("Greikkalais-roomalainen")
    expect(getLocalizedCultureSphere("East Asia", "fi")).toBe("Itä-Aasia")
  })

  it("preserves English culture spheres in English mode", () => {
    expect(getLocalizedCultureSphere("Andean", "en")).toBe("Andean")
    expect(getLocalizedCultureSphere("Nordic", "en")).toBe("Nordic")
  })

  it("handles unknown culture spheres gracefully", () => {
    expect(getLocalizedCultureSphere("Unknown Sphere", "fi")).toBe("Unknown Sphere")
  })

  it("covers all registered culture groups", () => {
    const keys = Object.keys(CULTURE_SPHERE_TRANSLATIONS)
    expect(keys.length).toBeGreaterThanOrEqual(30)
    for (const key of keys) {
      expect(CULTURE_SPHERE_TRANSLATIONS[key]).toBeTruthy()
    }
  })
})

describe("i18n Territory & Feature Names Localization", () => {
  it("translates major historical empires into Finnish", () => {
    expect(getLocalizedTerritoryName("Roman Empire", "fi")).toBe("Rooman valtakunta")
    expect(getLocalizedTerritoryName("Byzantine Empire", "fi")).toBe("Bysantin valtakunta")
    expect(getLocalizedTerritoryName("Ottoman Empire", "fi")).toBe("Osmanien valtakunta")
    expect(getLocalizedTerritoryName("Mongol Empire", "fi")).toBe("Mongolivaltakunta")
    expect(getLocalizedTerritoryName("Sweden", "fi")).toBe("Ruotsi")
    expect(getLocalizedTerritoryName("Finland", "fi")).toBe("Suomi")
  })

  it("preserves English names in English mode", () => {
    expect(getLocalizedTerritoryName("Roman Empire", "en")).toBe("Roman Empire")
    expect(getLocalizedTerritoryName("Sweden", "en")).toBe("Sweden")
  })

  it("resolves feature names using culture_metadata.name_fi when available", () => {
    const featureWithCultureFi = {
      name: "Tiwanaku Empire",
      culture_metadata: {
        name: "Tiwanaku Empire",
        name_fi: "Tiwanakun valtakunta",
      },
    }

    expect(getLocalizedFeatureName(featureWithCultureFi, "fi")).toBe("Tiwanakun valtakunta")
    expect(getLocalizedFeatureName(featureWithCultureFi, "en")).toBe("Tiwanaku Empire")
  })

  it("resolves feature names via dictionary when culture_metadata is absent", () => {
    const featureWithoutCulture = {
      name: "Roman Empire",
    }

    expect(getLocalizedFeatureName(featureWithoutCulture, "fi")).toBe("Rooman valtakunta")
    expect(getLocalizedFeatureName(featureWithoutCulture, "en")).toBe("Roman Empire")
  })

  it("falls back to raw name when no translation exists", () => {
    const obscureFeature = {
      name: "Obscure Chiefdom 123",
    }

    expect(getLocalizedFeatureName(obscureFeature, "fi")).toBe("Obscure Chiefdom 123")
    expect(getLocalizedFeatureName(obscureFeature, "en")).toBe("Obscure Chiefdom 123")
  })
})

describe("i18n Historical Eras Bilingual Catalog", () => {
  it("has translations for all 54 eras in ERA_CATALOG", () => {
    expect(ERA_CATALOG.length).toBe(54)
    for (const era of ERA_CATALOG) {
      const trans = ERA_TRANSLATIONS[era.slug]
      expect(trans, `Missing translation for ${era.slug}`).toBeDefined()
      expect(trans.name.en).toBeTruthy()
      expect(trans.name.fi).toBeTruthy()
      expect(trans.year_label.en).toBeTruthy()
      expect(trans.year_label.fi).toBeTruthy()
      expect(trans.description.en).toBeTruthy()
      expect(trans.description.fi).toBeTruthy()
    }
  })

  it("localizes era object properties correctly in Finnish", () => {
    const sampleEra: Era = {
      id: "world-bc10000",
      slug: "world-bc10000",
      name: "10,000 BCE - Dawn of the Holocene",
      year_start: -10000,
      year_label: "10,000 BCE",
      description: "End of the Last Glacial Period...",
      feature_count: 5,
    }

    const localizedFi = getLocalizedEra(sampleEra, "fi")
    expect(localizedFi.name).toBe("10 000 eaa. - Holoseenin sarastus")
    expect(localizedFi.year_label).toBe("10 000 eaa.")
    expect(localizedFi.description).toContain("Hedelmällisen puolikuun")

    const localizedEn = getLocalizedEra(sampleEra, "en")
    expect(localizedEn.name).toBe(sampleEra.name)
    expect(localizedEn.year_label).toBe(sampleEra.year_label)
    expect(localizedEn.description).toBe(sampleEra.description)
  })
})

describe("i18n Epoch Grouping Localization", () => {
  it("localizes all 7 epoch names and date ranges in Finnish", () => {
    for (const epoch of ERA_EPOCHS) {
      const fiEpoch = getLocalizedEpoch(epoch, "fi")
      expect(fiEpoch.name).toBeTruthy()
      expect(fiEpoch.dateRangeLabel).toBeTruthy()
      expect(fiEpoch.dateRangeLabel.includes("eaa.") || fiEpoch.dateRangeLabel.includes("jaa.")).toBe(true)
    }

    const prehistory = getLocalizedEpoch(ERA_EPOCHS[0], "fi")
    expect(prehistory.name).toBe("Esihistoria ja holoseeni")
    expect(prehistory.dateRangeLabel).toBe("123k – 5000 eaa.")
  })
})

describe("i18n Prehistoric Terrain Highlight Labels", () => {
  it("localizes prehistoric sea level labels in Finnish and English", () => {
    const eemianFi = getTerrainHighlightColors("world-bc123000", "fi")
    expect(eemianFi.label).toContain("Meren alle jääneet")
    expect(eemianFi.label).toContain("+7m")

    const eemianEn = getTerrainHighlightColors("world-bc123000", "en")
    expect(eemianEn.label).toContain("Submerged Coastal Lowlands")
    expect(eemianEn.label).toContain("+7m")

    const holoceneFi = getTerrainHighlightColors("world-bc10000", "fi")
    expect(holoceneFi.label).toContain("-120m")
    expect(holoceneFi.label).toContain("mannerjalustat ja maasillat")
  })
})
