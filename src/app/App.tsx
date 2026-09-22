import React, { useCallback, useEffect, useRef, useState } from "react"
import {
  Era,
  GeoJSONFeature,
  GeoJSONFeatureCollection,
  GlobeConfig,
  GlobeTexture,
} from "../types"
import { fetchEras, fetchEraGeoJson } from "../services/api"
import { HistoricalGlobe } from "../features/globe"
import type { GlobeView } from "../features/globe"
import { readViewUrl, replaceViewUrl, resolveEra } from "./viewUrl"
import { Timeline } from "../components/Timeline"
import { CountryDrawer } from "../components/CountryDrawer"
import { ControlsOverlay } from "../components/ControlsOverlay"
import { Attribution } from "../components/Attribution"
import { ActiveEraBanner } from "../components/ActiveEraBanner"
import { getIceOverlay } from "../earthTextures/ice"
import { getTerrainOverlayUrl } from "../earthTextures/coasts"
import { PuffLoader } from "react-spinners"
import {
  ColorSchemeId,
  ThemePreference,
  getThemePreference,
  resolveTheme,
  applyTheme,
  subscribeToSystemThemeChanges,
} from "../styles/theme"
import "./App.css"


export const App: React.FC = () => {
  const [themePreference, setThemePreference] = useState<ThemePreference>(() => getThemePreference())
  const [colorScheme, setColorScheme] = useState<ColorSchemeId>(() => resolveTheme(themePreference))
  const [eras, setEras] = useState<Era[]>([])
  const [currentEra, setCurrentEra] = useState<Era | null>(null)
  const [cameraView, setCameraView] = useState(() => readViewUrl(window.location.search).view)
  const latestViewRef = useRef(cameraView)

  const handleViewChange = useCallback((view: GlobeView) => {
    latestViewRef.current = view
    replaceViewUrl(null, view)
  }, [])

  const handleColorSchemeChange = useCallback((preference: ThemePreference) => {
    setThemePreference(preference)
    const resolved = resolveTheme(preference)
    setColorScheme(resolved)
    applyTheme(preference)
  }, [])

  useEffect(() => {
    applyTheme(themePreference)
  }, [themePreference])

  useEffect(() => {
    if (themePreference !== "auto") return

    const unsubscribe = subscribeToSystemThemeChanges((systemTheme) => {
      setColorScheme(systemTheme)
      applyTheme(systemTheme, "auto")
    })

    return unsubscribe
  }, [themePreference])
  const [geoJsonData, setGeoJsonData] =
    useState<GeoJSONFeatureCollection | null>(null)
  const [isLoadingEras, setIsLoadingEras] = useState(true)
  const [isLoadingGeoJson, setIsLoadingGeoJson] = useState(false)
  const [selectedFeature, setSelectedFeature] = useState<GeoJSONFeature | null>(
    null,
  )
  const [isAttributionOpen, setIsAttributionOpen] = useState(false)

  const [globeConfig, setGlobeConfig] = useState<GlobeConfig>({

    texture: GlobeTexture.EARTH_DAY,
    showIceOverlay: true,
    showTerrainOverlay: true,
    layerAltitude: 0.002,
    elevationScale: 0.3,
    opacity: 0.55,
    sideColor: "#ffffff",
    strokeColor: "#000000",
    showLabels: true,
    labelSize: 14,
    labelTolerance: 10,
  })

  // 1. Fetch available eras on mount
  useEffect(() => {
    let isMounted = true
    setIsLoadingEras(true)
    fetchEras()
      .then((data) => {
        if (!isMounted) return
        setEras(data)
        setCurrentEra(resolveEra(data, readViewUrl(window.location.search).eraSlug))
      })
      .catch((err) => console.error("Error fetching eras:", err))
      .finally(() => {
        if (isMounted) setIsLoadingEras(false)
      })
    return () => {
      isMounted = false
    }
  }, [])

  useEffect(() => {
    if (currentEra) replaceViewUrl(currentEra.slug, latestViewRef.current)
  }, [currentEra])

  useEffect(() => {
    const restoreUrl = () => {
      const { eraSlug, view } = readViewUrl(window.location.search)
      latestViewRef.current = view
      setCameraView({ ...view })
      setCurrentEra(resolveEra(eras, eraSlug))
    }
    window.addEventListener("popstate", restoreUrl)
    return () => window.removeEventListener("popstate", restoreUrl)
  }, [eras])

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

  const iceOverlay = getIceOverlay(currentEra?.slug)

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
          <h1 className="app-title">Earth Browser</h1>
        </div>

      </header>

      {/* Main 3D Globe Visualizer */}
      <main className="app-main">
        <div className="globe-viewport">
          <HistoricalGlobe
            view={cameraView}
            onViewChange={handleViewChange}
            data={geoJsonData}
            isLoading={isLoadingGeoJson}
            texture={globeConfig.texture}
            surfaceUnderlayUrl={getTerrainOverlayUrl(currentEra?.slug, globeConfig.texture, globeConfig.showTerrainOverlay)}
            surfaceOverlay={globeConfig.showIceOverlay && (globeConfig.texture === GlobeTexture.EARTH_BLUE_MARBLE || globeConfig.texture === GlobeTexture.EARTH_DAY) ? iceOverlay : undefined}
            layerAltitude={globeConfig.layerAltitude}
            elevationScale={globeConfig.elevationScale}
            opacity={globeConfig.opacity}
            sideColor={globeConfig.sideColor}
            strokeColor={globeConfig.strokeColor}
            selectedFeatureId={
              selectedFeature?.id || selectedFeature?.properties?.name || null
            }
            showLabels={globeConfig.showLabels !== false}
            labelSize={globeConfig.labelSize}
            labelTolerance={globeConfig.labelTolerance}
            onFeatureClick={(feature) => setSelectedFeature(feature)}
          />
        </div>

        {/* Selected Era Banner — Floats on top of the Globe */}
        <ActiveEraBanner currentEra={currentEra} />

        {/* Visual Settings Controls */}

        <ControlsOverlay
          config={globeConfig}
          iceOverlayAvailable={!!iceOverlay}
          terrainOverlayAvailable={!!getTerrainOverlayUrl(currentEra?.slug, globeConfig.texture)}
          onChangeConfig={setGlobeConfig}
          onOpenAttribution={() => setIsAttributionOpen(true)}
          colorScheme={themePreference}
          onChangeColorScheme={handleColorSchemeChange}
        />

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

        {/* Data Source & Map Attribution */}
        <Attribution
          isModalOpen={isAttributionOpen}
          onOpenModal={() => setIsAttributionOpen(true)}
          onCloseModal={() => setIsAttributionOpen(false)}
        />
      </main>
    </div>
  )
}


export default App
