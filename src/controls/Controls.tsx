import React, { useMemo } from "react"
import { useControls, Leva } from "leva"
import "./Controls.css"
import { Config, DEFAULT_CONFIG } from "./config"
import { Texture } from "../earthTextures"
import { GeoJsonDatasetDescriptionFragment } from "../datasets/datasets.generated"

export function useGlobeControls(
  datasets: Array<GeoJsonDatasetDescriptionFragment>,
  initialConfig?: Partial<Config>
): Config {
  const datasetOptions = useMemo(() => {
    const opts: Record<string, string> = {}
    for (const d of datasets) {
      if (d?.name && d?.id) {
        opts[d.name] = d.id
      }
    }
    return opts
  }, [datasets])

  const defaultDataset = datasets[0]?.id || ""

  const values = useControls(
    "Controls",
    {
      layerAltitude: {
        value: initialConfig?.layerAltitude ?? DEFAULT_CONFIG.layerAltitude,
        min: 0.004,
        max: 1,
        step: 0.001,
        label: "Layer Altitude",
      },
      opacity: {
        value: initialConfig?.opacity ?? DEFAULT_CONFIG.opacity,
        min: 0,
        max: 1,
        step: 0.01,
        label: "Opacity",
      },
      texture: {
        value: initialConfig?.texture ?? DEFAULT_CONFIG.texture,
        options: {
          "Blue Marble": Texture.EARTH_BLUE_MARBLE,
          Dark: Texture.EARTH_DARK,
          Day: Texture.EARTH_DAY,
          Night: Texture.EARTH_NIGHT,
        },
        label: "Texture",
      },
      dataset: {
        value: initialConfig?.dataset ?? defaultDataset,
        options: datasetOptions,
        label: "Dataset (Era)",
      },
      sideColor: {
        value: initialConfig?.sideColor ?? DEFAULT_CONFIG.sideColor,
        label: "Side Color",
      },
      strokeColor: {
        value: initialConfig?.strokeColor ?? DEFAULT_CONFIG.strokeColor,
        label: "Stroke Color",
      },
    },
    [datasetOptions]
  )

  return values as Config
}

export default function Controls() {
  return (
    <div className="controlPanel">
      <Leva titleBar={{ title: "Controls", drag: true }} />
    </div>
  )
}

