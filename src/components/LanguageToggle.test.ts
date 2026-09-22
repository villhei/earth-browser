import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { describe, it, expect } from "vitest"
import { LanguageToggle } from "./LanguageToggle"
import { CountryDrawer } from "./CountryDrawer"
import { GeoJSONFeature, Era } from "../types"

describe("LanguageToggle component", () => {
  it("renders both EN and FI toggle buttons", () => {
    const html = renderToStaticMarkup(
      React.createElement(LanguageToggle, {
        language: "en",
        onSelectLanguage: () => {},
      })
    )
    expect(html).toContain("EN")
    expect(html).toContain("FI")
    expect(html).toContain('aria-label="Language selection"')
  })

  it("marks the active language with active class and aria-pressed", () => {
    const htmlEn = renderToStaticMarkup(
      React.createElement(LanguageToggle, {
        language: "en",
        onSelectLanguage: () => {},
      })
    )
    expect(htmlEn).toMatch(/class="language-btn active"[^>]*>EN/)

    const htmlFi = renderToStaticMarkup(
      React.createElement(LanguageToggle, {
        language: "fi",
        onSelectLanguage: () => {},
      })
    )
    expect(htmlFi).toMatch(/class="language-btn active"[^>]*>FI/)
  })
})

describe("CountryDrawer bilingual rendering", () => {
  const sampleFeature: GeoJSONFeature = {
    type: "Feature",
    id: "tiwanaku-1",
    geometry: { type: "Point", coordinates: [0, 0] },
    properties: {
      name: "Tiwanaku Empire",
      culture_metadata: {
        slug: "tiwanaku",
        name: "Tiwanaku Empire",
        name_fi: "Tiwanakun valtakunta",
        culture_group: "Andean",
        period_label: "c. 110 CE – 1000 CE",
        period_label_fi: "n. 110 jaa. – 1000 jaa.",
        summary_en: "A monumental pre-Columbian civilization centered near Lake Titicaca.",
        summary_fi: "Merkittävä korkeakulttuuri Titicacajärven etelärannalla Bolivian ylängöllä.",
        wikipedia_url_en: "https://en.wikipedia.org/wiki/Tiwanaku_Empire",
        wikipedia_url_fi: "https://fi.wikipedia.org/wiki/Tiwanaku",
      },
    },
  }

  const sampleEra: Era = {
    id: "world-1000",
    slug: "world-1000",
    name: "1000 CE - High Middle Ages",
    year_start: 1000,
    year_label: "1000 CE",
    description: "High Middle Ages...",
    feature_count: 50,
  }

  it("renders Finnish culture metadata when language is fi", () => {
    const htmlFi = renderToStaticMarkup(
      React.createElement(CountryDrawer, {
        feature: sampleFeature,
        currentEra: sampleEra,
        onClose: () => {},
        language: "fi",
      })
    )
    expect(htmlFi).toContain("Tiwanakun valtakunta")
    expect(htmlFi).toContain("Andien sivilisaatiot")
    expect(htmlFi).toContain("Kulttuuripiiri:")
    expect(htmlFi).toContain("n. 110 jaa. – 1000 jaa.")
    expect(htmlFi).toContain("Merkittävä korkeakulttuuri Titicacajärven")
    expect(htmlFi).toContain("https://fi.wikipedia.org/wiki/Tiwanaku")
    expect(htmlFi).toContain("Tietoja")
  })

  it("renders English culture metadata when language is en", () => {
    const htmlEn = renderToStaticMarkup(
      React.createElement(CountryDrawer, {
        feature: sampleFeature,
        currentEra: sampleEra,
        onClose: () => {},
        language: "en",
      })
    )
    expect(htmlEn).toContain("Tiwanaku Empire")
    expect(htmlEn).toContain("Culture Sphere:")
    expect(htmlEn).toContain("Andean")
    expect(htmlEn).toContain("c. 110 CE – 1000 CE")
    expect(htmlEn).toContain("A monumental pre-Columbian civilization")
    expect(htmlEn).toContain("https://en.wikipedia.org/wiki/Tiwanaku_Empire")
    expect(htmlEn).toContain("About")
  })
})
