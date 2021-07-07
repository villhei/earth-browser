import React from "react"
import { Config } from "../controls"
import Globe from "./GlobeComponent"
import { useGetCountryData } from "../worldmap"

type Props = {
  config: Config
}

export default function ConnectedGlobe(props: Props) {
  const result = useGetCountryData()

  if (result.data && !result.loading) {
    const { data } = result
    const {
      geojsonDataset: { value },
    } = data
    console.log("value", value)
    return <Globe config={props.config} dataset={value} />
  }
  return null
}
