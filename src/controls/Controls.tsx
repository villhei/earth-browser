import * as React from "react"
import ControlPanel, { Range } from "react-control-panel"

import { Config } from "./config"

type Props = {
  title: string
  config: Config
  onChange: (config: Config) => void
}

export default function Controls({ title, config, onChange }: Props) {
  const handleOnChange = (updated: keyof Config, value: unknown) => {
    onChange({
      ...config,
      [updated]: value,
    })
  }

  return (
    <ControlPanel
      theme="dark"
      title={title}
      initialState={config}
      onChange={handleOnChange}
    >
      <Range label="layerAltitude" min={0.001} max={1} />
    </ControlPanel>
  )
}
