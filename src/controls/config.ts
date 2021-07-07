import { Texture } from "../earthTextures"

export type Config = {
  layerAltitude: number
  texture: Texture
  dataset: string
  sideColor: string
  strokeColor: string
  opacity: number
}

const WHITE = "#FFFFFF"
const BLACK = "#000000"

export const DEFAULT_CONFIG: Omit<Config, "dataset"> = {
  layerAltitude: 0.005,
  sideColor: WHITE,
  strokeColor: BLACK,
  texture: Texture.EARTH_BLUE_MARBLE,
  opacity: 0.4,
}
