import { gql } from "@apollo/client"
import { useGetGeoJsonDatasetQuery } from "./datasets.generated"
export * from "./geojson"

export function getCountryNameKeys(): Array<string> {
  return ["NAME_LONG", "SOVEREIGNT", "ABBREVNAME"]
}

export function useGetCountryData(id: string) {
  return useGetGeoJsonDatasetQuery({
    variables: {
      id,
    },
  })
}
