import { describe, it, expect } from "vitest"
import * as THREE from "three"
import {
  getTerrainHighlightColors,
  hasTerrainHighlight,
  calculateHighlightEnvelope,
  createTerrainHighlightMaterial,
  updateTerrainHighlightMaterial,
  DEFAULT_TERRAIN_HIGHLIGHT_DURATION,
  TERRAIN_HIGHLIGHT_VERTEX_SHADER,
  TERRAIN_HIGHLIGHT_FRAGMENT_SHADER,
} from "./terrainHighlightShader"

describe("terrainHighlightShader", () => {
  it("provides era-specific color palettes for flooded and exposed coastlines", () => {
    // 123,000 BCE: Eemian Interglacial (+7m sea level, flooded coasts)
    const eemian = getTerrainHighlightColors("world-bc123000")
    expect(eemian.label).toContain("+7m")
    expect(eemian.primary.getHexString()).toBe("00d2ff")
    expect(eemian.secondary.getHexString()).toBe("7df9ff")

    // 10,000 BCE: Late Paleolithic / LGM (-120m sea level, exposed land bridges)
    const lateGlacial = getTerrainHighlightColors("world-bc10000")
    expect(lateGlacial.label).toContain("-120m")
    expect(lateGlacial.primary.getHexString()).toBe("fbbf24")

    // 8,000 BCE: Early Holocene (-50m sea level)
    const bc8000 = getTerrainHighlightColors("world-bc8000")
    expect(bc8000.label).toContain("-50m")
    expect(bc8000.primary.getHexString()).toBe("f59e0b")

    // 5,000 BCE: Mid Holocene (-15m sea level)
    const bc5000 = getTerrainHighlightColors("world-bc5000")
    expect(bc5000.label).toContain("-15m")
    expect(bc5000.primary.getHexString()).toBe("f97316")

    // Fallback for unknown / modern eras
    const fallback = getTerrainHighlightColors(undefined)
    expect(fallback.label).toContain("Altered Prehistoric Coastlines")
    expect(fallback.primary).toBeDefined()
    expect(fallback.secondary).toBeDefined()
  })

  it("calculates smooth animation envelope over the normalized progress range", () => {
    // At start (0.0), envelope should be 0.0
    expect(calculateHighlightEnvelope(0.0)).toBeCloseTo(0.0)

    // During rise (e.g. at 0.06), envelope should be between 0 and 1
    const midRise = calculateHighlightEnvelope(0.06)
    expect(midRise).toBeGreaterThan(0.2)
    expect(midRise).toBeLessThan(0.8)

    // At full rise threshold (0.12), envelope should be 1.0
    expect(calculateHighlightEnvelope(0.12)).toBeCloseTo(1.0)

    // During active sustain (0.12 to 0.70), envelope should be 1.0
    expect(calculateHighlightEnvelope(0.25)).toBe(1.0)
    expect(calculateHighlightEnvelope(0.50)).toBe(1.0)
    expect(calculateHighlightEnvelope(0.70)).toBe(1.0)

    // During decay (e.g. at 0.85), envelope should be between 0 and 1
    const midDecay = calculateHighlightEnvelope(0.85)
    expect(midDecay).toBeGreaterThan(0.2)
    expect(midDecay).toBeLessThan(0.8)

    // At end (1.0 or beyond), envelope should be 0.0
    expect(calculateHighlightEnvelope(1.0)).toBe(0.0)
    expect(calculateHighlightEnvelope(1.2)).toBe(0.0)
  })

  it("creates a properly configured ShaderMaterial with required uniforms and state", () => {
    const mockTexture = new THREE.Texture()
    const material = createTerrainHighlightMaterial(mockTexture, "world-bc10000")

    expect(material).toBeInstanceOf(THREE.ShaderMaterial)
    expect(material.transparent).toBe(true)
    expect(material.depthWrite).toBe(false)
    expect(material.side).toBe(THREE.FrontSide)
    expect(material.blending).toBe(THREE.NormalBlending)

    // Uniforms verification
    expect(material.uniforms.uMaskTexture.value).toBe(mockTexture)
    expect(material.uniforms.uProgress.value).toBe(1.0) // initial dormant state
    expect(material.uniforms.uTime.value).toBe(0.0)
    expect(material.uniforms.uHighlightColor.value).toBeInstanceOf(THREE.Color)
    expect(material.uniforms.uSecondaryColor.value).toBeInstanceOf(THREE.Color)
    expect(material.uniforms.uResolution.value).toBeInstanceOf(THREE.Vector2)
    expect(material.uniforms.uResolution.value.x).toBe(4096)
    expect(material.uniforms.uResolution.value.y).toBe(2048)

    // Shader code presence
    expect(material.vertexShader).toBe(TERRAIN_HIGHLIGHT_VERTEX_SHADER)
    expect(material.fragmentShader).toBe(TERRAIN_HIGHLIGHT_FRAGMENT_SHADER)
    expect(material.fragmentShader).toContain("uMaskTexture")
    expect(material.fragmentShader).toContain("uProgress")
    expect(material.fragmentShader).toContain("uTime")
  })

  it("exports a sensible default duration", () => {
    expect(DEFAULT_TERRAIN_HIGHLIGHT_DURATION).toBeGreaterThanOrEqual(2.5)
    expect(DEFAULT_TERRAIN_HIGHLIGHT_DURATION).toBeLessThanOrEqual(5.0)
  })

  it("identifies prehistoric eras eligible for terrain highlights", () => {
    expect(hasTerrainHighlight("world-bc123000")).toBe(true)
    expect(hasTerrainHighlight("world-bc10000")).toBe(true)
    expect(hasTerrainHighlight("world-bc8000")).toBe(true)
    expect(hasTerrainHighlight("world-bc5000")).toBe(true)
    expect(hasTerrainHighlight("world-bc3000")).toBe(false)
    expect(hasTerrainHighlight("world-ad1914")).toBe(false)
    expect(hasTerrainHighlight(undefined)).toBe(false)
  })

  it("supports persistent sustain envelope when progress is negative", () => {
    expect(calculateHighlightEnvelope(-1.0)).toBe(1.0)
    expect(calculateHighlightEnvelope(-0.1)).toBe(1.0)
  })

  it("updates existing highlight material uniforms cleanly", () => {
    const material = createTerrainHighlightMaterial(null, "world-bc10000")
    expect(material.uniforms.uHighlightColor.value.getHexString()).toBe("fbbf24")

    updateTerrainHighlightMaterial(material, {
      eraSlug: "world-bc123000",
      intensity: 1.5,
    })
    expect(material.uniforms.uHighlightColor.value.getHexString()).toBe("00d2ff")
    expect(material.uniforms.uIntensity.value).toBe(1.5)
  })

  it("includes antimeridian fract wrapping in fragment shader", () => {
    expect(TERRAIN_HIGHLIGHT_FRAGMENT_SHADER).toContain("fract(vUv.x)")
    expect(TERRAIN_HIGHLIGHT_FRAGMENT_SHADER).toContain("clamp(vUv.y")
  })

  it("supports contents and outline highlight styles", () => {
    // Defaults to contents style (0.0)
    const contentsMaterial = createTerrainHighlightMaterial(null, "world-bc10000")
    expect(contentsMaterial.uniforms.uHighlightStyle.value).toBe(0.0)

    // Explicit outline style (1.0)
    const outlineMaterial = createTerrainHighlightMaterial(null, "world-bc10000", {
      style: "outline",
    })
    expect(outlineMaterial.uniforms.uHighlightStyle.value).toBe(1.0)

    // Dynamic style update
    updateTerrainHighlightMaterial(contentsMaterial, { style: "outline" })
    expect(contentsMaterial.uniforms.uHighlightStyle.value).toBe(1.0)
    updateTerrainHighlightMaterial(contentsMaterial, { style: "contents" })
    expect(contentsMaterial.uniforms.uHighlightStyle.value).toBe(0.0)

    // Fragment shader includes texture content sampling and feathering
    expect(TERRAIN_HIGHLIGHT_FRAGMENT_SHADER).toContain("maskSample.rgb")
    expect(TERRAIN_HIGHLIGHT_FRAGMENT_SHADER).toContain("uHighlightStyle")
    expect(TERRAIN_HIGHLIGHT_FRAGMENT_SHADER).toContain("boostedTerrain")
  })
})

