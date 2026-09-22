import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { describe, it, expect } from "vitest"
import { EraDetailsModal } from "./EraDetailsModal"
import { Era } from "../types"

describe("EraDetailsModal", () => {
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

  it("returns null when isOpen is false", () => {
    const html = renderToStaticMarkup(
      React.createElement(EraDetailsModal, {
        isOpen: false,
        currentEra: sampleEra,
        onClose: () => {},
      })
    )
    expect(html).toBe("")
  })

  it("returns null when currentEra is null", () => {
    const html = renderToStaticMarkup(
      React.createElement(EraDetailsModal, {
        isOpen: true,
        currentEra: null,
        onClose: () => {},
      })
    )
    expect(html).toBe("")
  })

  it("renders backdrop, year, title, feature count, and full description when open", () => {
    const html = renderToStaticMarkup(
      React.createElement(EraDetailsModal, {
        isOpen: true,
        currentEra: sampleEra,
        onClose: () => {},
      })
    )
    expect(html).toContain("era-details-backdrop")
    expect(html).toContain("era-details-modal")
    expect(html).toContain("1492 CE")
    expect(html).toContain("Age of Discovery")
    expect(html).toContain("536 regions")
    expect(html).toContain("Columbus reaches the Americas")
    expect(html).toContain("Got it")
  })

  it("supports Finnish localization", () => {
    const html = renderToStaticMarkup(
      React.createElement(EraDetailsModal, {
        isOpen: true,
        currentEra: sampleEra,
        onClose: () => {},
        language: "fi",
      })
    )
    expect(html).toContain("536 aluetta")
    expect(html).toContain("Selvä")
  })
})
