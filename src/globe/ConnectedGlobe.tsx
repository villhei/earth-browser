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
    const { geojsonDataset } = data
    console.log("mapData", data)
    return <Globe config={props.config} />
  }
  return null
}
