import type { SurfaceOverlay } from "../../features/globe/types"
import color10000 from "./world-bc10000-color.png"
import coverage10000 from "./world-bc10000-coverage.png"
import color8000 from "./world-bc8000-color.png"
import coverage8000 from "./world-bc8000-coverage.png"
import color5000 from "./world-bc5000-color.png"
import coverage5000 from "./world-bc5000-coverage.png"
import color4000 from "./world-bc4000-color.png"
import coverage4000 from "./world-bc4000-coverage.png"
import color3000 from "./world-bc3000-color.png"
import coverage3000 from "./world-bc3000-coverage.png"

const overlays: Record<string, SurfaceOverlay> = {
  "world-bc10000": { colorUrl: color10000, coverageUrl: coverage10000 },
  "world-bc8000": { colorUrl: color8000, coverageUrl: coverage8000 },
  "world-bc5000": { colorUrl: color5000, coverageUrl: coverage5000 },
  "world-bc4000": { colorUrl: color4000, coverageUrl: coverage4000 },
  "world-bc3000": { colorUrl: color3000, coverageUrl: coverage3000 },
}

/** Exact era matches only: never extend a reconstruction to another date. */
export function getIceOverlay(eraSlug?: string): SurfaceOverlay | undefined {
  return eraSlug && Object.hasOwn(overlays, eraSlug) ? overlays[eraSlug] : undefined
}
