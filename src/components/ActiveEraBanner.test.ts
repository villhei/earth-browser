import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { describe, it, expect } from "vitest"
import { formatEraLabel } from "./Timeline"
import { ActiveEraBanner } from "./ActiveEraBanner"
import { Era } from "../types"

describe("ActiveEraBanner logic", () => {
  const sampleEra: Era = {
    id: "world-1492",
    slug: "world-1492",
    name: "1492 CE - Age of Discovery",
    year_start: 1492,
    year_end: 1500,
    year_label: "1492 CE",
    description: "Columbus reaches the Americas; Spanish Reconquista completed.",
    feature_count: 536,
  }

  it("extracts clean title for active era banner", () => {
    expect(formatEraLabel(sampleEra.name)).toBe("Age of Discovery")
  })

  it("has valid era properties for banner display", () => {
    expect(sampleEra.year_label).toBe("1492 CE")
    expect(sampleEra.feature_count).toBe(536)
    expect(sampleEra.description).toContain("Columbus")
  })

  it("renders highlight button when highlight props are supplied", () => {
    const html = renderToStaticMarkup(
      React.createElement(ActiveEraBanner, {
        currentEra: sampleEra,
        onPulseHighlight: () => {},
        highlightLabel: "Exposed Continental Shelves (-120m)",
        isHighlighting: false,
      })
    )
    expect(html).toContain("active-era-highlight-btn")
    expect(html).toContain("Highlight Coastlines")
    expect(html).toContain("Exposed Continental Shelves (-120m)")
  })

  it("shows active highlighting state on the button", () => {
    const html = renderToStaticMarkup(
      React.createElement(ActiveEraBanner, {
        currentEra: sampleEra,
        onPulseHighlight: () => {},
        highlightLabel: "Exposed Continental Shelves (-120m)",
        isHighlighting: true,
      })
    )
    expect(html).toContain("active-era-highlight-btn active")
    expect(html).toContain("Highlighting Coastlines…")
  })
})
