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

  it("renders era title and year, omitting the count of regions from the banner", () => {
    const html = renderToStaticMarkup(
      React.createElement(ActiveEraBanner, {
        currentEra: sampleEra,
      })
    )
    expect(html).toContain("1492 CE")
    expect(html).toContain("Age of Discovery")
    expect(html).not.toContain("536")
    expect(html).not.toContain("territories")
    expect(html).not.toContain("aluetta")
    expect(html).not.toContain("regions")
    expect(html).not.toContain("active-era-stats")
    expect(html).not.toContain("Columbus")
  })

  it("returns null when currentEra is null", () => {
    const html = renderToStaticMarkup(
      React.createElement(ActiveEraBanner, {
        currentEra: null,
      })
    )
    expect(html).toBe("")
  })

  it("renders navigation buttons and timeline drawer toggle when provided", () => {
    const html = renderToStaticMarkup(
      React.createElement(ActiveEraBanner, {
        currentEra: sampleEra,
        onPrevEra: () => {},
        onNextEra: () => {},
        hasPrevEra: true,
        hasNextEra: false,
        onToggleTimeline: () => {},
        isTimelineOpen: false,
      })
    )
    expect(html).toContain("active-era-menu-btn")
    expect(html).toContain("active-era-nav-btn prev")
    expect(html).toContain("active-era-nav-btn next")
    // Previous should not be disabled, next should be disabled
    expect(html).not.toMatch(/active-era-nav-btn prev[^>]*disabled/)
    expect(html).toMatch(/active-era-nav-btn next[^>]*disabled/)
  })

  it("marks era info as clickable when onOpenDetails is provided", () => {
    const html = renderToStaticMarkup(
      React.createElement(ActiveEraBanner, {
        currentEra: sampleEra,
        onOpenDetails: () => {},
      })
    )
    expect(html).toContain("active-era-info-wrapper clickable")
    expect(html).toContain('role="button"')
  })
})
