import { worldMap } from "../worldmap"
import { GeoJSON } from "../worldmap/geojson"

export type Config = {
  layerAltitude: number
  countries: GeoJSON
}

export const DEFAULT_CONFIG: Config = {
  layerAltitude: 0.005,
  countries: worldMap,
}
