import countryJSON from "./json/ne_110m_admin_0_countries.json"
import world400 from "./json/world_400.json"
import world600 from "./json/world_600.json"
import world800 from "./json/world_800.json"
import world1000 from "./json/world_1000.json"
import world1279 from "./json/world_1279.json"

import { GeoJSON } from "./geojson"
export * from "./geojson"

export enum CountryDataset {
  PRESENT_DAY = "PRESENT_DAY",
  WORLD_400 = "WORLD_400",
  WORLD_600 = "WORLD_600",
  WORLD_800 = "WORLD_800",
  WORLD_1000 = "WORLD_1000",
  WORLD_1279 = "WORLD_1279",
}

export function getCountryNameKeys(dataset: CountryDataset): Array<string> {
  switch (dataset) {
    case CountryDataset.PRESENT_DAY: {
      return ["NAME_LONG", "SOVEREIGNT"]
    }
    case CountryDataset.WORLD_400:
    case CountryDataset.WORLD_600:
    case CountryDataset.WORLD_800:
    case CountryDataset.WORLD_1000:
    case CountryDataset.WORLD_1279: {
      return ["ABBREVNAME"]
    }
  }
}

export function getCountryData(dataset: CountryDataset): GeoJSON {
  switch (dataset) {
    case CountryDataset.PRESENT_DAY: {
      return countryJSON as GeoJSON
    }
    case CountryDataset.WORLD_400: {
      return world400 as GeoJSON
    }
    case CountryDataset.WORLD_600: {
      return world600 as GeoJSON
    }
    case CountryDataset.WORLD_800: {
      return world800 as GeoJSON
    }
    case CountryDataset.WORLD_1000: {
      return world1000 as GeoJSON
    }
    case CountryDataset.WORLD_1279: {
      return world1279 as GeoJSON
    }
  }
}
