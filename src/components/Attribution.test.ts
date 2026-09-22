import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { describe, it, expect } from "vitest"
import { Attribution, AttributionModal, CREATOR_INFO, DATA_SOURCE_INFO } from "./Attribution"

describe("Attribution metadata", () => {
  it("contains complete and accurate creator information", () => {
    expect(CREATOR_INFO.name).toBe("Ville Heikkinen")
    expect(CREATOR_INFO.githubUrl).toBe("https://github.com/villhei/")
    expect(CREATOR_INFO.linkedinUrl).toBe("https://www.linkedin.com/in/ville-heikkinen-40363847/")
  })

  it("contains complete and accurate data source references", () => {
    expect(DATA_SOURCE_INFO.author).toBe("André Ourednik")
    expect(DATA_SOURCE_INFO.name).toBe("historical-basemaps")
    expect(DATA_SOURCE_INFO.repoUrl).toContain("github.com/aourednik/historical-basemaps")
    expect(DATA_SOURCE_INFO.license).toBe("GPL-3.0")
    expect(DATA_SOURCE_INFO.licenseUrl).toContain("LICENSE")
  })
})

describe("Attribution button and modal rendering", () => {
  it("renders the map data attribution button displaying just 'Attributions'", () => {
    const html = renderToStaticMarkup(React.createElement(Attribution))
    expect(html).toContain("Attributions")
    expect(html).toContain("app-attribution-btn")
    // Should not contain inline author or long license text in the button itself
    expect(html).not.toContain("Map data:")
    expect(html).not.toContain("André Ourednik")
  })

  it("renders creator details and links in AttributionModal when open", () => {
    const html = renderToStaticMarkup(
      React.createElement(AttributionModal, {
        isOpen: true,
        onClose: () => {},
      })
    )
    expect(html).toContain("Attributions")
    expect(html).toContain("Application &amp; Creator")
    expect(html).toContain("Ville Heikkinen")
    expect(html).toContain("https://github.com/villhei/")
    expect(html).toContain("https://www.linkedin.com/in/ville-heikkinen-40363847/")
    expect(html).toContain("André Ourednik")
  })

  it("does not render modal content when isOpen is false", () => {
    const html = renderToStaticMarkup(
      React.createElement(AttributionModal, {
        isOpen: false,
        onClose: () => {},
      })
    )
    expect(html).toBe("")
  })
})

