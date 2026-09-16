import earthBlueMarble from "../../earthTextures/earth-blue-marble.jpg"
import earthBlueMarble123kbc from "../../earthTextures/earth-blue-marble-123000bc.jpg"
import earthBlueMarble10kbc from "../../earthTextures/earth-blue-marble-10000bc.jpg"
import earthBlueMarble8kbc from "../../earthTextures/earth-blue-marble-8000bc.jpg"
import earthBlueMarble5kbc from "../../earthTextures/earth-blue-marble-5000bc.jpg"
import earthDark from "../../earthTextures/earth-dark.jpg"
import earthDay from "../../earthTextures/earth-day.jpg"
import earthNight from "../../earthTextures/earth-night.jpg"
import { GlobeTexture } from "../../types"

export function getGlobeTextureUrl(texture: GlobeTexture = GlobeTexture.EARTH_BLUE_MARBLE): string {
  switch (texture) {
    case GlobeTexture.EARTH_BLUE_MARBLE:
      return earthBlueMarble
    case GlobeTexture.EARTH_BLUE_MARBLE_123K_BC:
      return earthBlueMarble123kbc
    case GlobeTexture.EARTH_BLUE_MARBLE_10K_BC:
      return earthBlueMarble10kbc
    case GlobeTexture.EARTH_BLUE_MARBLE_8K_BC:
      return earthBlueMarble8kbc
    case GlobeTexture.EARTH_BLUE_MARBLE_5K_BC:
      return earthBlueMarble5kbc
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

