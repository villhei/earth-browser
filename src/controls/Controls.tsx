import * as React from "react"
import ControlPanel, {
  ControlPanelProps,
  Color,
  Range,
  Select,
} from "react-control-panel"
import "./Controls.css"
import { Config } from "./config"
import { Texture } from "../earthTextures"
import { GeoJsonDatasetDescriptionFragment } from "../datasets/datasets.generated"

type Props = {
  title: string
  config: Config
  datasets: Array<GeoJsonDatasetDescriptionFragment>
  onChange: (config: Config) => void
}

export default function Controls({ title, config, datasets, onChange }: Props) {
  const handleOnChange: ControlPanelProps<Config>["onChange"] = (
    updated,
    value
  ) => {
    if (updated === "dataset") {
      const dataset = datasets.find((dataset) => dataset.name === value)!
      onChange({
        ...config,
        dataset: dataset.id,
      })
    } else {
      onChange({
        ...config,
        [updated]: value,
      })
    }
  }

  const datasetNames = datasets.map((value) => value.name)

  return (
    <ControlPanel
      style={{
        minWidth: "200px",
      }}
      theme="dark"
      title={title}
      initialState={config}
      onChange={handleOnChange}
    >
      <Range label="layerAltitude" min={0.004} max={1} />
      <Range label="opacity" min={0} max={1} />
      <Select label="texture" options={Texture} />
      <Select label="dataset" options={datasetNames} />
      <Color label="sideColor" format="hex" />
      <Color label="strokeColor" format="hex" />
    </ControlPanel>
  )
}
