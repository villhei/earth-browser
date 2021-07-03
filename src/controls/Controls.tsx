import * as React from "react"
import ControlPanel, { ControlPanelProps, Range } from "react-control-panel"
import "./Controls.css"
import { Config } from "./config"

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
      <Range label="layerAltitude" min={0.001} max={1} />
    </ControlPanel>
  )
}
