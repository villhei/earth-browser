import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { describe, it, expect } from "vitest"
import { ControlsOverlay } from "./ControlsOverlay"
import { GlobeConfig, GlobeTexture } from "../types"

describe("ControlsOverlay terrain highlight", () => {
  const baseConfig: GlobeConfig = {
    texture: GlobeTexture.EARTH_DAY,
    showIceOverlay: true,
    showTerrainOverlay: true,
    layerAltitude: 0.002,
    elevationScale: 0.3,
    opacity: 0.55,
    sideColor: "#ffffff",
    strokeColor: "#000000",
    showLabels: true,
    labelSize: 14,
    labelTolerance: 10,
  }

  it("renders toggle button in closed panel state by default", () => {
    const html = renderToStaticMarkup(
      React.createElement(ControlsOverlay, {
        config: baseConfig,
        onChangeConfig: () => {},
      })
    )
    expect(html).toContain("Visuals")
    expect(html).toContain("controls-toggle-btn")
  })
})
