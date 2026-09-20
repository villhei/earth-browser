import terrain123000 from "./earth-blue-marble-terrain-mask-bc123000.png"
import terrain10000 from "./earth-blue-marble-terrain-mask-bc10000.png"
import terrain8000 from "./earth-blue-marble-terrain-mask-bc8000.png"
import terrain5000 from "./earth-blue-marble-terrain-mask-bc5000.png"
import dayTerrain10000 from "./earth-daymap-may-terrain-mask-bc10000.png"
import dayTerrain8000 from "./earth-daymap-may-terrain-mask-bc8000.png"
import dayTerrain5000 from "./earth-daymap-may-terrain-mask-bc5000.png"
import { GlobeTexture } from "../../types"

const terrainOverlays: Partial<Record<GlobeTexture, Record<string, string>>> = {
  [GlobeTexture.EARTH_BLUE_MARBLE]: {
    "world-bc123000": terrain123000,
    "world-bc10000": terrain10000,
    "world-bc8000": terrain8000,
    "world-bc5000": terrain5000,
  },
  [GlobeTexture.EARTH_DAY]: {
    "world-bc10000": dayTerrain10000,
    "world-bc8000": dayTerrain8000,
    "world-bc5000": dayTerrain5000,
  },
}

/** The supplied terrain artwork applies only to its matching texture and era. */
export function getTerrainOverlayUrl(
  eraSlug: string | undefined,
  texture: GlobeTexture,
  enabled = true,
): string | undefined {
  const overlays = terrainOverlays[texture]
  return enabled && overlays && eraSlug && Object.hasOwn(overlays, eraSlug)
    ? overlays[eraSlug]
    : undefined
}
