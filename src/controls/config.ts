import { Texture } from "../earthTextures"
import { CountryDataset, worldMap } from "../worldmap"
import { GeoJSON } from "../worldmap/geojson"

export type Config = {
  layerAltitude: number
  countries: GeoJSON
  texture: Texture
  dataset: CountryDataset
  sideColor: string
  strokeColor: string
  opacity: number
}

const WHITE = "#FFFFFF"
const BLACK = "#000000"

export const DEFAULT_CONFIG: Config = {
  layerAltitude: 0.005,
  countries: worldMap,
  texture: Texture.EARTH_DAY,
  sideColor: WHITE,
  strokeColor: BLACK,
  opacity: 0.4,
  dataset: CountryDataset.PRESENT_DAY,
}
