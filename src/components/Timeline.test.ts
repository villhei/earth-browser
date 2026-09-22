import { describe, it, expect } from "vitest"
import { formatEraLabel } from "./Timeline"
import { groupErasByEpoch } from "./eraGrouping"

describe("Timeline helpers", () => {
  it("extracts era label without leading year prefix", () => {
    expect(formatEraLabel("1492 CE - Age of Discovery")).toBe("Age of Discovery")
    expect(
      formatEraLabel("123,000 BCE - Eemian Interglacial & Early Humans")
    ).toBe("Eemian Interglacial & Early Humans")
  })

  it("handles labels without separator gracefully", () => {
    expect(formatEraLabel("Classical Antiquity")).toBe("Classical Antiquity")
    expect(formatEraLabel("")).toBe("")
  })

  it("handles multi-part labels correctly", () => {
    expect(
      formatEraLabel("500 CE - Post-Roman Kingdoms & Northern/Southern Dynasties")
    ).toBe("Post-Roman Kingdoms & Northern/Southern Dynasties")
  })

  it("integrates with eraGrouping to partition eras into epochs", () => {
    const testEras = [
      {
        id: "era-1",
        slug: "world-bc10000",
        name: "10,000 BCE - Dawn of the Holocene",
        year_start: -10000,
        year_label: "10,000 BCE",
        description: "Test description",
        feature_count: 5,
      },
      {
        id: "era-2",
        slug: "world-bc3000",
        name: "3000 BCE - Sumerian Cities",
        year_start: -3000,
        year_label: "3000 BCE",
        description: "Test description",
        feature_count: 8,
      },
    ]

    const groups = groupErasByEpoch(testEras)
    expect(groups).toHaveLength(2)
    expect(groups[0].epoch.name).toBe("Prehistory & Holocene")
    expect(groups[1].epoch.name).toBe("Bronze Age")
  })
})

describe("Timeline mobile drawer component", () => {
  const sampleEras = [
    {
      id: "world-1492",
      slug: "world-1492",
      name: "1492 CE - Age of Discovery",
      year_start: 1492,
      year_end: 1500,
      year_label: "1492 CE",
      description: "Sample",
      feature_count: 536,
    },
  ]

  it("renders mobile drawer and backdrop when isMobile and isOpen are true", async () => {
    const React = await import("react")
    const { renderToStaticMarkup } = await import("react-dom/server")
    const { Timeline } = await import("./Timeline")

    const html = renderToStaticMarkup(
      React.createElement(Timeline, {
        eras: sampleEras,
        currentEra: sampleEras[0],
        onSelectEra: () => {},
        isMobile: true,
        isOpen: true,
        onClose: () => {},
      })
    )
    expect(html).toContain("timeline-backdrop")
    expect(html).toContain("mobile-drawer")
    expect(html).toContain("drawer-open")
    expect(html).toContain("timeline-drawer-close-btn")
  })

  it("omits backdrop and open class when isOpen is false on mobile", async () => {
    const React = await import("react")
    const { renderToStaticMarkup } = await import("react-dom/server")
    const { Timeline } = await import("./Timeline")

    const html = renderToStaticMarkup(
      React.createElement(Timeline, {
        eras: sampleEras,
        currentEra: sampleEras[0],
        onSelectEra: () => {},
        isMobile: true,
        isOpen: false,
        onClose: () => {},
      })
    )
    expect(html).not.toContain("timeline-backdrop")
    expect(html).toContain("mobile-drawer")
    expect(html).not.toContain("drawer-open")
  })
})

