import React, { useState } from "react"
import Globe from "~/src/globe"
import RiseLoader from "react-spinners/RiseLoader"
import { Controls, Config, DEFAULT_CONFIG } from "~/src/controls"

import "./MainScreen.css"
import { useGetGeoJsonDescriptionsQuery } from "../datasets/datasets.generated"
import { config } from "node:process"

const CONTENT_STYLE = { flex: 1, display: "flex" }
const MainScreen = () => {
  const result = useGetGeoJsonDescriptionsQuery()

  const [configMaybe, setConfig] = useState<Config | null>(null)

  if (result.loading || !result.data) {
    return (
      <>
        <div className="header">
          <h1>Earth browser</h1>
        </div>
        <div style={CONTENT_STYLE}>
          <RiseLoader />
        </div>
      </>
    )
  }

  const { nodes: datasets } = result.data?.geojsonDatasets

  const [{ id: firstDatasetID }] = datasets
  const config = configMaybe
    ? configMaybe
    : {
        ...DEFAULT_CONFIG,
        dataset: firstDatasetID,
      }

  return (
    <>
      <div className="header">
        <h1>Earth browser</h1>
      </div>
      <div style={CONTENT_STYLE}>
        <Controls
          title="Controls"
          config={config}
          onChange={setConfig}
          datasets={datasets}
        />
        {config.dataset && <Globe config={config} datasetId={config.dataset} />}
      </div>
    </>
  )
}

export default MainScreen
