import React from "react"
import { PuffLoader } from "react-spinners"

import { Config } from "../controls"
import Globe from "./GlobeComponent"
import { useGetCountryData } from "../datasets"

type Props = {
  datasetId: string
  config: Config
}

export default function ConnectedGlobe(props: Props) {
  const result = useGetCountryData(props.datasetId)

  if (result.data?.geojsonDataset && !result.loading) {
    const value = result.data.geojsonDataset.value as any
    return <Globe config={props.config} dataset={value} />
  }
  return (
    <div className="spinner-wrapper">
      <PuffLoader color="gray" size={200} />
    </div>
  )
}
