import React, { useEffect, useState } from "react"
import {
  Era,
  GeoJSONFeature,
  GeoJSONFeatureCollection,
  GlobeConfig,
  GlobeTexture,
} from "../types"
import { fetchEras, fetchEraGeoJson } from "../services/api"
import { HistoricalGlobe } from "../features/globe"
import { Timeline } from "../components/Timeline"
import { CountryDrawer } from "../components/CountryDrawer"
import { ControlsOverlay } from "../components/ControlsOverlay"
import { PuffLoader } from "react-spinners"
import "./App.css"

export const App: React.FC = () => {
  const [eras, setEras] = useState<Era[]>([])
  const [currentEra, setCurrentEra] = useState<Era | null>(null)
  const [geoJsonData, setGeoJsonData] =
    useState<GeoJSONFeatureCollection | null>(null)
  const [isLoadingEras, setIsLoadingEras] = useState(true)
  const [isLoadingGeoJson, setIsLoadingGeoJson] = useState(false)
  const [selectedFeature, setSelectedFeature] = useState<GeoJSONFeature | null>(
    null,
  )

  const [globeConfig, setGlobeConfig] = useState<GlobeConfig>({
    texture: GlobeTexture.EARTH_BLUE_MARBLE,
    layerAltitude: 0.001,
    opacity: 0.55,
    sideColor: "#ffffff",
    strokeColor: "#000000",
  })

  // 1. Fetch available eras on mount
  useEffect(() => {
    let isMounted = true
    setIsLoadingEras(true)
    fetchEras()
      .then((data) => {
        if (!isMounted) return
        setEras(data)
        // Default to 1492 CE or first era
        const defaultEra =
          data.find((e) => e.slug === "world-1492") || data[0] || null
        setCurrentEra(defaultEra)
      })
      .catch((err) => console.error("Error fetching eras:", err))
      .finally(() => {
        if (isMounted) setIsLoadingEras(false)
      })
    return () => {
      isMounted = false
    }
  }, [])

  // 2. Fetch GeoJSON whenever currentEra changes
  useEffect(() => {
    if (!currentEra) return
    let isMounted = true
    setIsLoadingGeoJson(true)
    setSelectedFeature(null) // Reset selection on era change

    fetchEraGeoJson(currentEra.slug)
      .then((data) => {
        if (isMounted) setGeoJsonData(data)
      })
      .catch((err) => console.error("Error fetching era geojson:", err))
      .finally(() => {
        if (isMounted) setIsLoadingGeoJson(false)
      })

    return () => {
      isMounted = false
    }
  }, [currentEra])

  if (isLoadingEras && !eras.length) {
    return (
      <div className="app-loading-screen">
        <PuffLoader color="#38bdf8" size={80} />
        <h2 className="app-loading-text">
          Loading Historical Earth Datasets...
        </h2>
      </div>
    )
  }

  return (
    <div className="app-layout">
      {/* Top Navigation Bar */}
      <header className="app-header">
        <div className="app-brand">
          <span className="app-icon">🌍</span>
          <h1 className="app-title">Earth Browser</h1>
          <span className="app-subtitle">Historical Atlas</span>
        </div>

        <div className="app-header-controls">
          <select
            className="era-dropdown"
            value={currentEra?.slug || ""}
            onChange={(e) => {
              const selected = eras.find((era) => era.slug === e.target.value)
              if (selected) setCurrentEra(selected)
            }}
          >
            {eras.map((era) => (
              <option key={era.id} value={era.slug}>
                {era.year_label} — {era.name}
              </option>
            ))}
          </select>
        </div>
      </header>

      {/* Main 3D Globe Visualizer */}
      <main className="app-main">
        <HistoricalGlobe
          data={geoJsonData}
          isLoading={isLoadingGeoJson}
          texture={globeConfig.texture}
          layerAltitude={globeConfig.layerAltitude}
          opacity={globeConfig.opacity}
          sideColor={globeConfig.sideColor}
          strokeColor={globeConfig.strokeColor}
          selectedFeatureId={
            selectedFeature?.id || selectedFeature?.properties?.name || null
          }
          showLabels={globeConfig.showLabels !== false}
          onFeatureClick={(feature) => setSelectedFeature(feature)}
        />

        {/* Visual Settings Controls */}
        <ControlsOverlay config={globeConfig} onChangeConfig={setGlobeConfig} />

        {/* Country / Culture Inspector Drawer */}
        <CountryDrawer
          feature={selectedFeature}
          currentEra={currentEra}
          onClose={() => setSelectedFeature(null)}
        />

        {/* Interactive Timeline Scrubber */}
        <Timeline
          eras={eras}
          currentEra={currentEra}
          onSelectEra={setCurrentEra}
          isLoading={isLoadingGeoJson}
        />
      </main>
    </div>
  )
}

export default App
