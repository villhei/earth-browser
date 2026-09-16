import earthBlueMarble from "./earth-blue-marble.jpg"
import earthBlueMarble123kbc from "./earth-blue-marble-123000bc.jpg"
import earthBlueMarble10kbc from "./earth-blue-marble-10000bc.jpg"
import earthBlueMarble8kbc from "./earth-blue-marble-8000bc.jpg"
import earthBlueMarble5kbc from "./earth-blue-marble-5000bc.jpg"
import earthDark from "./earth-dark.jpg"
import earthDay from "./earth-day.jpg"
import earthNight from "./earth-night.jpg"

export enum Texture {
  EARTH_BLUE_MARBLE = "EARTH_BLUE_MARBLE",
  EARTH_BLUE_MARBLE_123K_BC = "EARTH_BLUE_MARBLE_123K_BC",
  EARTH_BLUE_MARBLE_10K_BC = "EARTH_BLUE_MARBLE_10K_BC",
  EARTH_BLUE_MARBLE_8K_BC = "EARTH_BLUE_MARBLE_8K_BC",
  EARTH_BLUE_MARBLE_5K_BC = "EARTH_BLUE_MARBLE_5K_BC",
  EARTH_DARK = "EARTH_DARK",
  EARTH_DAY = "EARTH_DAY",
  EARTH_NIGHT = "EARTH_NIGHT",
}

export function getTexturePath(texture: Texture): string {
  switch (texture) {
    case Texture.EARTH_BLUE_MARBLE: {
      return earthBlueMarble
    }
    case Texture.EARTH_BLUE_MARBLE_123K_BC: {
      return earthBlueMarble123kbc
    }
    case Texture.EARTH_BLUE_MARBLE_10K_BC: {
      return earthBlueMarble10kbc
    }
    case Texture.EARTH_BLUE_MARBLE_8K_BC: {
      return earthBlueMarble8kbc
    }
    case Texture.EARTH_BLUE_MARBLE_5K_BC: {
      return earthBlueMarble5kbc
    }
    case Texture.EARTH_DARK: {
      return earthDark
    }
    case Texture.EARTH_DAY: {
      return earthDay
    }
    case Texture.EARTH_NIGHT: {
      return earthNight
    }
    default: {
      return earthBlueMarble
    }
  }
}

