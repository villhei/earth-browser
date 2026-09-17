import { describe, expect, it } from "vitest"
import { Mesh, MeshBasicMaterial, PerspectiveCamera, Raycaster, SphereGeometry, Vector3 } from "three"
import { applyCoverageAlpha, createSurfaceOverlayGeometry } from "./surfaceOverlay"

describe("surface overlay separation", () => {
  it("stays above the base and below territories with distinct depth values across orbit distances and rotations", () => {
    const material = new MeshBasicMaterial()
    const base = new Mesh(new SphereGeometry(100, 90, 45), material)
    const ice = new Mesh(createSurfaceOverlayGeometry(100, 4), material)
    const territory = new Mesh(new SphereGeometry(100.1, 90, 45), material)
    const surfaces = [base, ice, territory]
    for (const mesh of surfaces) {
      mesh.rotation.y = -Math.PI / 2
      mesh.updateMatrixWorld(true)
    }
    const camera = new PerspectiveCamera(45, 1, 1, 2000)
    const ray = new Raycaster()
    for (const distance of [140, 320, 700]) {
      for (const [latitude, longitude] of [[0, 0], [0.4, 1.1], [-0.8, -2.4], [1.3, 3]]) {
        const direction = new Vector3(
          Math.cos(latitude) * Math.sin(longitude),
          Math.sin(latitude),
          Math.cos(latitude) * Math.cos(longitude),
        )
        camera.position.copy(direction).multiplyScalar(distance)
        camera.lookAt(0, 0, 0)
        camera.updateMatrixWorld(true)
        ray.set(camera.position, direction.clone().negate())
        const hits = surfaces.map(mesh => ray.intersectObject(mesh)[0])
        expect(hits.every(Boolean)).toBe(true)
        const [groundHit, iceHit, territoryHit] = hits
        expect(groundHit.distance - iceHit.distance).toBeGreaterThan(0.04)
        expect(iceHit.distance - territoryHit.distance).toBeGreaterThan(0.04)
        // Window depth is NDC depth / 2 + 0.5. Keep more than two 24-bit
        // depth steps even at maximum zoom-out, where the old gap collapsed.
        const depthGap = (groundHit.point.clone().project(camera).z - iceHit.point.clone().project(camera).z) / 2
        expect(depthGap).toBeGreaterThan(2 / (2 ** 24 - 1))
      }
    }
    surfaces.forEach(mesh => mesh.geometry.dispose())
    material.dispose()
  })
})

describe("surface overlay coverage", () => {
  it("preserves every fractional source alpha while leaving decorative RGB unchanged", () => {
    const color = new Uint8ClampedArray(256 * 4)
    const coverage = new Uint8ClampedArray(256 * 4)
    for (let alpha = 0; alpha < 256; alpha++) {
      color.set([210, 230, 250, 255 - alpha], alpha * 4)
      coverage.set([255, 255, 255, alpha], alpha * 4)
    }
    const originalCoverage = coverage.slice()
    applyCoverageAlpha(color, coverage)
    for (let alpha = 0; alpha < 256; alpha++) {
      expect(Array.from(color.slice(alpha * 4, alpha * 4 + 4))).toEqual([210, 230, 250, alpha])
    }
    expect(coverage).toEqual(originalCoverage)
  })

  it("removes invented ice and restores source ice even where generated artwork is transparent", () => {
    const color = new Uint8ClampedArray([240, 245, 255, 255, 255, 255, 255, 0])
    applyCoverageAlpha(color, new Uint8ClampedArray([255, 255, 255, 0, 255, 255, 255, 255]))
    expect(Array.from(color)).toEqual([240, 245, 255, 0, 255, 255, 255, 255])
  })

  it("rejects unequal buffers and incomplete pixels", () => {
    expect(() => applyCoverageAlpha(new Uint8ClampedArray(4), new Uint8ClampedArray(8))).toThrow()
    expect(() => applyCoverageAlpha(new Uint8ClampedArray(3), new Uint8ClampedArray(3))).toThrow()
  })
})
