import { gql, useQuery } from "@apollo/client"
export * from "./geojson"

export enum CountryDataset {
  PRESENT_DAY = "PRESENT_DAY",
  WORLD_400 = "WORLD_400",
  WORLD_600 = "WORLD_600",
  WORLD_800 = "WORLD_800",
  WORLD_1000 = "WORLD_1000",
  WORLD_1279 = "WORLD_1279",
}

export function getCountryNameKeys(): Array<string> {
  return ["NAME_LONG", "SOVEREIGNT", "ABBREVNAME"]
}

const COUNTRY_DATA_QUERY = gql`
  query GetCountryData {
    geojsonDataset(id: "75dc0416-fd97-437c-bc4f-766f8ee689f6") {
      id
      value
    }
  }
`

export function useGetCountryData() {
  return useQuery(COUNTRY_DATA_QUERY)
}
