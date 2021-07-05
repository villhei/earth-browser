import { Texture } from "../earthTextures"
import { CountryDataset } from "../worldmap"

export type Config = {
  layerAltitude: number
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
  sideColor: WHITE,
  strokeColor: BLACK,
  texture: Texture.EARTH_BLUE_MARBLE,
  opacity: 0.4,
  dataset: CountryDataset.PRESENT_DAY,
}
