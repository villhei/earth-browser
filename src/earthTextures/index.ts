import earthBlueMarble from "url:./earth-blue-marble.jpg"
import earthDark from "url:./earth-dark.jpg"
import earthDay from "url:./earth-day.jpg"
import earthNight from "url:./earth-night.jpg"

export enum Texture {
  EARTH_BLUE_MARBLE = "EARTH_BLUE_MARBLE",
  EARTH_DARK = "EARTH_DARK",
  EARTH_DAY = "EARTH_DAY",
  EARTH_NIGHT = "EARTH_NIGHT",
}

export function getTexturePath(texture: Texture): string {
  switch (texture) {
    case Texture.EARTH_BLUE_MARBLE: {
      return earthBlueMarble
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
  }
}
