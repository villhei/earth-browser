import type { OrbitControls } from "three/addons/controls/OrbitControls.js"
import type { GlobeView } from "./types"

export const MIN_VIEW_DISTANCE = 140
export const MAX_VIEW_DISTANCE = 700
export const DEFAULT_GLOBE_VIEW: GlobeView = {
  position: [0, 80, 320],
  target: [0, 0, 0],
}

export function captureGlobeView(controls: OrbitControls): GlobeView {
  return {
    position: controls.object.position.toArray(),
    target: controls.target.toArray(),
  }
}

export function restoreGlobeView(controls: OrbitControls, view: GlobeView) {
  // Drain any in-flight damping before applying a link or browser navigation.
  const damping = controls.enableDamping
  controls.enableDamping = false
  controls.update()
  controls.object.position.fromArray(view.position)
  controls.target.fromArray(view.target)
  controls.update()
  controls.enableDamping = damping
}
