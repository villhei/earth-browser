import { describe, it, expect } from "vitest"
import fs from "fs"
import path from "path"
import { BC500_CULTURES } from "../../scripts/seed_culture_metadata_bc500"

describe("Culture Metadata Prototype (world-bc500)", () => {
  it("contains valid metadata for all seeded cultures", () => {
    expect(BC500_CULTURES.length).toBeGreaterThanOrEqual(25)

    for (const culture of BC500_CULTURES) {
      expect(culture.slug).toMatch(/^[a-z0-9-]+$/)
      expect(culture.name.length).toBeGreaterThan(0)
      expect(culture.name_fi.length).toBeGreaterThan(0)
      expect(culture.culture_group.length).toBeGreaterThan(0)
      expect(culture.historical_period.length).toBeGreaterThan(0)
      expect(culture.year_start).toBeLessThanOrEqual(culture.year_end)
      expect(culture.period_label.length).toBeGreaterThan(0)
      expect(culture.period_label_fi.length).toBeGreaterThan(0)

      // Wikipedia URLs
      expect(culture.wikipedia_url_en).toMatch(/^https:\/\/en\.wikipedia\.org\/wiki\//)
      expect(culture.wikipedia_url_fi).toMatch(/^https:\/\/fi\.wikipedia\.org\/wiki\//)

      // Text summaries
      expect(culture.summary_en.length).toBeGreaterThan(30)
      expect(culture.summary_fi.length).toBeGreaterThan(30)

      // Match targets
      expect(culture.feature_name_matches.length).toBeGreaterThan(0)
    }
  })

  it("includes representative entities across all major world regions", () => {
    const groups = new Set(BC500_CULTURES.map((c) => c.culture_group))
    expect(groups.has("Iranian")).toBe(true)
    expect(groups.has("Greco-Roman")).toBe(true)
    expect(groups.has("East Asia")).toBe(true)
    expect(groups.has("South Asia")).toBe(true)
    expect(groups.has("East Africa")).toBe(true)
    expect(groups.has("Mesoamerican")).toBe(true)
    expect(groups.has("Andean")).toBe(true)
    expect(groups.has("North American Indigenous")).toBe(true)
    expect(groups.has("Baltic")).toBe(true)
    expect(groups.has("Finno-Ugric")).toBe(true)
  })
})

describe("Culture Metadata Batches", () => {
  const validateBatch = (filePath: string, expectedGroup: string | string[], minCount: number) => {
    const raw = fs.readFileSync(filePath, "utf-8")
    const entries = JSON.parse(raw)
    expect(entries.length).toBeGreaterThanOrEqual(minCount)

    const slugs = new Set<string>()
    for (const entry of entries) {
      expect(entry.slug).toMatch(/^[a-z0-9-]+$/)
      expect(slugs.has(entry.slug)).toBe(false)
      slugs.add(entry.slug)

      expect(entry.name.length).toBeGreaterThan(0)
      expect(entry.name_fi.length).toBeGreaterThan(0)
      if (Array.isArray(expectedGroup)) {
        expect(expectedGroup).toContain(entry.culture_group)
      } else {
        expect(entry.culture_group).toBe(expectedGroup)
      }
      expect(entry.historical_period.length).toBeGreaterThan(0)
      expect(entry.year_start).toBeLessThanOrEqual(entry.year_end)
      expect(entry.period_label.length).toBeGreaterThan(0)
      expect(entry.period_label_fi.length).toBeGreaterThan(0)

      expect(entry.wikipedia_url_en).toMatch(/^https:\/\/en\.wikipedia\.org\/wiki\//)
      expect(entry.wikipedia_url_fi).toMatch(/^https:\/\/fi\.wikipedia\.org\/wiki\//)

      expect(entry.summary_en.length).toBeGreaterThan(40)
      expect(entry.summary_fi.length).toBeGreaterThan(40)
      expect(entry.feature_name_matches.length).toBeGreaterThan(0)
    }
  }

  it("validates the Greco-Roman batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/greco-roman.json")
    validateBatch(batchPath, "Greco-Roman", 14)
  })

  it("validates the Ancient Near East batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/ancient-near-east.json")
    validateBatch(batchPath, "Ancient Near East", 20)
  })

  it("validates the Islamic Caliphates batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/islamic-caliphates.json")
    validateBatch(batchPath, "Islamic Caliphates", 15)
  })

  it("validates the Iranian batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/iranian.json")
    validateBatch(batchPath, "Iranian", 14)
  })

  it("validates the Mesoamerican batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/mesoamerican.json")
    validateBatch(batchPath, "Mesoamerican", 30)
  })

  it("validates the Andean batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/andean.json")
    validateBatch(batchPath, "Andean", 30)
  })

  it("validates the Central Asia batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/central-asia.json")
    validateBatch(batchPath, "Central Asia", 50)
  })

  it("validates the East Asia batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/east-asia.json")
    validateBatch(batchPath, "East Asia", 45)
  })

  it("validates the South Asia batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/south-asia.json")
    validateBatch(batchPath, "South Asia", 40)
  })

  it("validates the Southeast Asia batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/southeast-asia.json")
    validateBatch(batchPath, "Southeast Asia", 25)
  })

  it("validates the West Africa batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/west-africa.json")
    validateBatch(batchPath, "West Africa", 20)
  })

  it("validates the Central Africa batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/central-africa.json")
    validateBatch(batchPath, "Central Africa", 10)
  })

  it("validates the East Africa batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/east-africa.json")
    validateBatch(batchPath, "East Africa", 20)
  })

  it("validates the Southern Africa batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/southern-africa.json")
    validateBatch(batchPath, "Southern Africa", 15)
  })

  it("validates the Western Europe batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/western-europe.json")
    validateBatch(batchPath, "Western Europe", 25)
  })

  it("validates the Central Europe batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/central-europe.json")
    validateBatch(batchPath, "Central Europe", 14)
  })

  it("validates the Nordic batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/nordic.json")
    validateBatch(batchPath, "Nordic", 8)
  })

  it("validates the Slavic batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/slavic.json")
    validateBatch(batchPath, "Slavic", 10)
  })

  it("validates the Baltic batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/baltic.json")
    validateBatch(batchPath, "Baltic", 8)
  })

  it("validates the North Africa batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/north-africa.json")
    validateBatch(batchPath, ["North Africa", "Mediterranean"], 16)
  })

  it("validates the Middle East batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/middle-east.json")
    validateBatch(batchPath, ["Middle East", "Ancient Near East"], 26)
  })

  it("validates the Southern Europe batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/southern-europe.json")
    validateBatch(batchPath, "Southern Europe", 21)
  })

  it("validates the Balkans & Eastern Europe batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/balkans-eastern-europe.json")
    validateBatch(batchPath, ["Balkans", "Eastern Europe", "Caucasus", "Finno-Ugric"], 21)
  })

  it("validates the Americas States batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/americas-states.json")
    validateBatch(batchPath, ["Latin America", "Central America", "North America"], 23)
  })

  it("validates the Caribbean batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/caribbean.json")
    validateBatch(batchPath, "Caribbean", 27)
  })

  it("validates the Prehistoric & Archaeological batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/prehistoric-archaeological.json")
    validateBatch(batchPath, ["Prehistoric & Archaeological", "Western & Central Europe"], 21)
  })

  it("validates the Oceania batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/oceania.json")
    validateBatch(batchPath, "Oceania", 50)
  })

  it("validates the Arctic & Subarctic batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/arctic-subarctic.json")
    validateBatch(batchPath, "Arctic & Subarctic", 25)
  })

  it("validates the South American Indigenous batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/south-american-indigenous.json")
    validateBatch(batchPath, "South American Indigenous", 25)
  })

  it("validates the North America East & Plains batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/north-america-east-plains.json")
    validateBatch(batchPath, "North American Indigenous", 65)
  })

  it("validates the North America West batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/north-america-west.json")
    validateBatch(batchPath, "North American Indigenous", 45)
  })

  it("validates the North America Residue batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/residue-north-america.json")
    validateBatch(
      batchPath,
      [
        "North American Indigenous",
        "Prehistoric & Archaeological",
        "Mesoamerican",
        "Caribbean",
        "Arctic & Subarctic",
        "North America Post-Colonial",
      ],
      90
    )
  })

  it("validates the Africa Residue batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/residue-africa.json")
    validateBatch(
      batchPath,
      ["Southern Africa", "Central Africa", "East Africa", "North Africa", "West Africa"],
      75
    )
  })

  it("validates the Europe Residue batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/residue-europe.json")
    validateBatch(
      batchPath,
      [
        "Central Europe",
        "Southern Europe",
        "Western Europe",
        "Nordic",
        "Finno-Ugric",
        "Baltic",
        "Eastern Europe",
        "Slavic",
        "Balkans",
        "Central Asia",
        "Caucasus",
        "Greco-Roman",
        "Prehistoric & Archaeological",
      ],
      115
    )
  })

  it("validates the Asia Residue batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/residue-asia.json")
    validateBatch(
      batchPath,
      [
        "South Asia",
        "Prehistoric & Archaeological",
        "East Asia",
        "Southeast Asia",
        "Central Asia",
        "Arctic & Subarctic",
        "Finno-Ugric",
        "Eastern Europe",
        "Middle East",
        "Ancient Near East",
        "Iranian",
        "Greco-Roman",
      ],
      110
    )
  })

  it("validates the Oceania Residue batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/residue-oceania.json")
    validateBatch(batchPath, "Oceania", 335)
  })

  it("validates the South America Residue batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/residue-south-america.json")
    validateBatch(batchPath, ["South American Indigenous", "Latin America", "Andean"], 360)
  })

  it("validates the North America Residue Set 2 batch file", () => {
    const batchPath = path.resolve(__dirname, "../../data-sources/batches/residue-north-america-2.json")
    validateBatch(
      batchPath,
      [
        "North American Indigenous",
        "Mesoamerican",
        "Arctic & Subarctic",
        "Caribbean",
        "North America Post-Colonial",
        "Prehistoric & Archaeological",
      ],
      500
    )
  })
})

describe("Continental Residue Partitions", () => {
  const residueDir = path.resolve(__dirname, "../../data-sources/residue")

  it("contains summary.json accounting for all residue entities and features", () => {
    const summaryPath = path.join(residueDir, "summary.json")
    expect(fs.existsSync(summaryPath)).toBe(true)

    const summary = JSON.parse(fs.readFileSync(summaryPath, "utf-8"))
    expect(summary.totalEntities).toBe(1545)
    expect(summary.totalFeatures).toBe(3774)

    const continents = Object.keys(summary.continents)
    expect(continents).toEqual(
      expect.arrayContaining(["North America", "South America", "Oceania", "Asia", "Europe", "Africa"])
    )
  })

  it("contains valid partition inventory files for each continent", () => {
    const expectedContinents = [
      { slug: "north-america", minEntities: 500, minFeatures: 500 },
      { slug: "south-america", minEntities: 350, minFeatures: 380 },
      { slug: "oceania", minEntities: 330, minFeatures: 2000 },
      { slug: "asia", minEntities: 120, minFeatures: 250 },
      { slug: "europe", minEntities: 120, minFeatures: 250 },
      { slug: "africa", minEntities: 80, minFeatures: 200 },
    ]

    let entitySum = 0
    let featureSum = 0

    for (const c of expectedContinents) {
      const filePath = path.join(residueDir, `${c.slug}.json`)
      expect(fs.existsSync(filePath)).toBe(true)

      const part = JSON.parse(fs.readFileSync(filePath, "utf-8"))
      expect(part.entityCount).toBeGreaterThanOrEqual(c.minEntities)
      expect(part.featureCount).toBeGreaterThanOrEqual(c.minFeatures)
      expect(part.entities.length).toBe(part.entityCount)

      // Validate entity structure
      for (const entity of part.entities.slice(0, 10)) {
        expect(entity.name.length).toBeGreaterThan(0)
        expect(entity.occurrences).toBeGreaterThanOrEqual(1)
        expect(typeof entity.avg_lng).toBe("number")
        expect(typeof entity.avg_lat).toBe("number")
        expect(entity.eras.length).toBeGreaterThanOrEqual(1)
        expect(entity.suggested_slug).toMatch(/^[a-z0-9-]+$/)
      }

      entitySum += part.entityCount
      featureSum += part.featureCount
    }

    expect(entitySum).toBe(1545)
    expect(featureSum).toBe(3774)
  })
})

