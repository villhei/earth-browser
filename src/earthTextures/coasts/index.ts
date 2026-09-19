import prototype from "./world-bc10000-prototype.jpg"
import { GlobeTexture } from "../../types"

/** This illustrative scenario is offered only in its explicit preview era. */
export function getCoastlinePrototype(eraSlug?: string): string | undefined {
  return eraSlug === "world-bc10000" ? prototype : undefined
}

export function getCoastlineTextureOverride(
  eraSlug: string | undefined,
  texture: GlobeTexture,
  enabled = false,
): string | undefined {
  return enabled && texture === GlobeTexture.EARTH_BLUE_MARBLE
    ? getCoastlinePrototype(eraSlug)
    : undefined
}
