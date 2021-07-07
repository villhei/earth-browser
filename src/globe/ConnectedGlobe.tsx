import React from "react"
import { Config } from "../controls"
import Globe from "./GlobeComponent"
import { useGetCountryData } from "../datasets"

type Props = {
  datasetId: string
  config: Config
}

export default function ConnectedGlobe(props: Props) {
  console.log("fetch", props.datasetId)
  const result = useGetCountryData(props.datasetId)

  if (result.data && !result.loading) {
    const { data } = result
    const {
      geojsonDataset: { value },
    } = data
    return <Globe config={props.config} dataset={value} />
  }
  return null
}
