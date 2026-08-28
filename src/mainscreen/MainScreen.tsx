import React from "react"
import Globe from "~/src/globe"
import RiseLoader from "react-spinners/RiseLoader"
import { Controls, useGlobeControls } from "~/src/controls"

import "./MainScreen.css"
import {
  useGetGeoJsonDescriptionsQuery,
  GeoJsonDatasetDescriptionFragment,
} from "../datasets/datasets.generated"

const CONTENT_STYLE = {
  flex: 1,
  display: "flex",
  position: "relative" as const,
}

interface MainScreenContentProps {
  datasets: Array<GeoJsonDatasetDescriptionFragment>
}

const MainScreenContent: React.FC<MainScreenContentProps> = ({ datasets }) => {
  const config = useGlobeControls(datasets)

  return (
    <div style={CONTENT_STYLE}>
      <Controls />
      {config.dataset && <Globe config={config} datasetId={config.dataset} />}
    </div>
  )
}

const MainScreen = () => {
  const result = useGetGeoJsonDescriptionsQuery()

  if (result.loading || !result.data) {
    return (
      <>
        <div className="header">
          <h1>Earth browser</h1>
        </div>
        <div style={CONTENT_STYLE}>
          <div className="spinner-wrapper">
            <RiseLoader size={50} color="gray" />
          </div>
        </div>
      </>
    )
  }

  const datasets = (result.data?.geojsonDatasets?.nodes || []).filter(
    (dataset): dataset is NonNullable<typeof dataset> => Boolean(dataset)
  )

  return (
    <>
      <div className="header">
        <h1>Earth browser</h1>
      </div>
      <MainScreenContent datasets={datasets} />
    </>
  )
}

export default MainScreen

