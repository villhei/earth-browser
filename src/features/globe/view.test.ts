import { describe, expect, it } from "vitest"
import { PerspectiveCamera, Spherical, Vector3 } from "three"
import { OrbitControls } from "three/addons/controls/OrbitControls.js"
import { captureGlobeView, restoreGlobeView, MIN_VIEW_DISTANCE, MAX_VIEW_DISTANCE } from "./view"

describe("globe camera restoration", () => {
  it("restores rotation, zoom, pan and camera orientation without residual damping", () => {
    const camera = new PerspectiveCamera()
    camera.position.set(0, 80, 320)
    const controls = new OrbitControls(camera)
    controls.minDistance = MIN_VIEW_DISTANCE
    controls.maxDistance = MAX_VIEW_DISTANCE
    controls.enableDamping = true
    // Model a link being restored while rotation and pan still have momentum.
    const momentum = controls as unknown as { _sphericalDelta: Spherical; _panOffset: Vector3 }
    momentum._sphericalDelta.set(0, 0.2, 0.4)
    momentum._panOffset.set(10, 20, 30)
    const view = { position: [-220, 100, -180], target: [20, -10, 5] } as const
    restoreGlobeView(controls, { position: [...view.position], target: [...view.target] })
    for (let i = 0; i < 120; i++) controls.update()
    const restored = captureGlobeView(controls)
    restored.position.forEach((value, i) => expect(value).toBeCloseTo(view.position[i], 8))
    expect(restored.target).toEqual(view.target)
    const direction = camera.getWorldDirection(new Vector3())
    const expected = controls.target.clone().sub(camera.position).normalize()
    expect(direction.distanceTo(expected)).toBeLessThan(1e-10)
    expect(controls.enableDamping).toBe(true)
  })
})
