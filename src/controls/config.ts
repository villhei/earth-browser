import { Texture } from "../earthTextures"
import { worldMap } from "../worldmap"
import { GeoJSON } from "../worldmap/geojson"

export type Config = {
  layerAltitude: number
  countries: GeoJSON
  texture: Texture
  sideColor: string
  strokeColor: string
}

const WHITE = "#FFFFFF"
const BLACK = "#000000"

export const DEFAULT_CONFIG: Config = {
  layerAltitude: 0.005,
  countries: worldMap,
  texture: Texture.EARTH_DAY,
  sideColor: WHITE,
  strokeColor: BLACK,
}
