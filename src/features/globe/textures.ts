import earthBlueMarble from "../../earthTextures/earth-blue-marble.jpg"
import earthDark from "../../earthTextures/earth-dark.jpg"
import earthDay from "../../earthTextures/earth-day.jpg"
import earthNight from "../../earthTextures/earth-night.jpg"
import { GlobeTexture } from "../../types"

export function getGlobeTextureUrl(texture: GlobeTexture = GlobeTexture.EARTH_BLUE_MARBLE): string {
  switch (texture) {
    case GlobeTexture.EARTH_BLUE_MARBLE:
      return earthBlueMarble
    case GlobeTexture.EARTH_DARK:
      return earthDark
    case GlobeTexture.EARTH_DAY:
      return earthDay
    case GlobeTexture.EARTH_NIGHT:
      return earthNight
    default:
      return earthBlueMarble
  }
}

