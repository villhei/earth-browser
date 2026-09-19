import terrain10000 from "./earth-blue-marble-terrain-mask-bc10000.png"
import terrain8000 from "./earth-blue-marble-terrain-mask-bc8000.png"
import terrain5000 from "./earth-blue-marble-terrain-mask-bc5000.png"
import { GlobeTexture } from "../../types"

const terrainOverlays: Record<string, string> = {
  "world-bc10000": terrain10000,
  "world-bc8000": terrain8000,
  "world-bc5000": terrain5000,
}

/** The supplied terrain artwork applies only to the matching Blue Marble era. */
export function getTerrainOverlayUrl(
  eraSlug: string | undefined,
  texture: GlobeTexture,
  enabled = true,
): string | undefined {
  return enabled && texture === GlobeTexture.EARTH_BLUE_MARBLE && eraSlug && Object.hasOwn(terrainOverlays, eraSlug)
    ? terrainOverlays[eraSlug]
    : undefined
}
