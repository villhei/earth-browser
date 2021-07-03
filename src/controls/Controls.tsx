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
import { CountryDataset } from "../worldmap"

type Props = {
  title: string
  config: Config
  onChange: (config: Config) => void
}

export default function Controls({ title, config, onChange }: Props) {
  const handleOnChange: ControlPanelProps<Config>["onChange"] = (
    updated,
    value
  ) => {
    onChange({
      ...config,
      [updated]: value,
    })
  }

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
      <Select label="dataset" options={CountryDataset} />
      <Color label="sideColor" format="hex" />
      <Color label="strokeColor" format="hex" />
    </ControlPanel>
  )
}
