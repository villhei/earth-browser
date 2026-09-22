import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import {
  Era,
  GeoJSONFeature,
  GeoJSONFeatureCollection,
  GlobeConfig,
  GlobeTexture,
} from "../types"
import { fetchEras, fetchEraGeoJson } from "../services/api"
import {
  HistoricalGlobe,
  hasTerrainHighlight,
  getTerrainHighlightColors,
} from "../features/globe"
import type { GlobeView } from "../features/globe"
import { readViewUrl, replaceViewUrl, resolveEra } from "./viewUrl"
import { Timeline } from "../components/Timeline"
import { CountryDrawer } from "../components/CountryDrawer"
import { ControlsOverlay } from "../components/ControlsOverlay"
import { Attribution } from "../components/Attribution"
import { ActiveEraBanner } from "../components/ActiveEraBanner"
import { LanguageToggle } from "../components/LanguageToggle"
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
import {
  Language,
  getInitialLanguage,
  LANGUAGE_STORAGE_KEY,
  getLocalizedEra,
  t,
} from "../i18n"
import "./App.css"

export const App: React.FC = () => {
  const [language, setLanguageState] = useState<Language>(() => getInitialLanguage())
  const [themePreference, setThemePreference] = useState<ThemePreference>(() => getThemePreference())
  const [colorScheme, setColorScheme] = useState<ColorSchemeId>(() => resolveTheme(themePreference))
  const [eras, setEras] = useState<Era[]>([])
  const [currentEra, setCurrentEra] = useState<Era | null>(null)
  const [cameraView, setCameraView] = useState(() => readViewUrl(window.location.search).view)
  const latestViewRef = useRef(cameraView)

  const handleLanguageChange = useCallback((newLang: Language) => {
    setLanguageState(newLang)
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, newLang)
    } catch {
      // ignore
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = newLang
    }
  }, [])

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language
    }
  }, [language])

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

  // Prehistoric terrain highlight state & triggers
  const [terrainHighlightTrigger, setTerrainHighlightTrigger] = useState(0)
  const [isHighlightingTerrain, setIsHighlightingTerrain] = useState(false)

  const isTerrainMaskEligible = hasTerrainHighlight(currentEra?.slug)
  const terrainOverlayUrl = getTerrainOverlayUrl(
    currentEra?.slug,
    globeConfig.texture,
    globeConfig.showTerrainOverlay,
  )
  const isTerrainMaskActive =
    isTerrainMaskEligible &&
    globeConfig.showTerrainOverlay !== false &&
    !!terrainOverlayUrl
  const terrainHighlightLabel = isTerrainMaskEligible
    ? getTerrainHighlightColors(currentEra?.slug, language).label
    : undefined

  const handlePulseTerrainHighlight = useCallback(() => {
    setIsHighlightingTerrain(true)
    setTerrainHighlightTrigger((prev) => prev + 1)
  }, [])

  const handleTerrainHighlightEnd = useCallback(() => {
    setIsHighlightingTerrain(false)
  }, [])

  // Auto-pulse highlight when selecting an era with altered coastlines
  useEffect(() => {
    if (isTerrainMaskActive) {
      setIsHighlightingTerrain(true)
      setTerrainHighlightTrigger((prev) => prev + 1)
    } else {
      setIsHighlightingTerrain(false)
    }
  }, [currentEra?.slug, isTerrainMaskActive])

  // Initial load of historical eras
  useEffect(() => {
    let isMounted = true
    setIsLoadingEras(true)
    fetchEras()
      .then((loadedEras) => {
        if (!isMounted) return
        setEras(loadedEras)
        const { eraSlug } = readViewUrl(window.location.search)
        setCurrentEra(resolveEra(loadedEras, eraSlug))
      })
      .catch((err) => {
        console.error("Failed to load historical eras:", err)
      })
      .finally(() => {
        if (isMounted) setIsLoadingEras(false)
      })

    return () => {
      isMounted = false
    }
  }, [])

  // Keep URL search query in sync with active era and latest camera view
  useEffect(() => {
    if (!currentEra) return
    replaceViewUrl(currentEra.slug, latestViewRef.current)
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

  // Load GeoJSON data whenever the active era changes
  useEffect(() => {
    if (!currentEra) return
    let isMounted = true
    setIsLoadingGeoJson(true)
    setSelectedFeature(null)

    fetchEraGeoJson(currentEra.slug)
      .then((data) => {
        if (!isMounted) return
        setGeoJsonData(data)
      })
      .catch((err) => {
        console.error(`Failed to load GeoJSON for era ${currentEra.slug}:`, err)
      })
      .finally(() => {
        if (isMounted) setIsLoadingGeoJson(false)
      })

    return () => {
      isMounted = false
    }
  }, [currentEra])

  const iceOverlay = getIceOverlay(currentEra?.slug)

  // Localize eras based on active language
  const localizedEras = useMemo(() => {
    return eras.map((e) => getLocalizedEra(e, language))
  }, [eras, language])

  const localizedCurrentEra = useMemo(() => {
    return currentEra ? getLocalizedEra(currentEra, language) : null
  }, [currentEra, language])

  if (isLoadingEras && !eras.length) {
    return (
      <div className="app-loading-screen">
        <PuffLoader color="#38bdf8" size={80} />
        <h2 className="app-loading-text">
          {t("loading_datasets", language)}
        </h2>
      </div>
    )
  }

  return (
    <div className="app-layout">
      {/* Top Navigation Bar */}
      <header className="app-header">
        <div className="app-brand">
          <h1 className="app-title">{t("app_title", language)}</h1>
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
            surfaceUnderlayUrl={terrainOverlayUrl}
            eraSlug={currentEra?.slug}
            terrainHighlightTrigger={terrainHighlightTrigger}
            terrainHighlightStyle={globeConfig.terrainHighlightStyle}
            onTerrainHighlightEnd={handleTerrainHighlightEnd}
            surfaceOverlay={
              globeConfig.showIceOverlay &&
              (globeConfig.texture === GlobeTexture.EARTH_BLUE_MARBLE ||
                globeConfig.texture === GlobeTexture.EARTH_DAY)
                ? iceOverlay
                : undefined
            }
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
            language={language}
            onFeatureClick={(feature) => setSelectedFeature(feature)}
          />
        </div>

        {/* Selected Era Banner — Floats on top of the Globe */}
        <ActiveEraBanner
          currentEra={localizedCurrentEra}
          language={language}
        />

        {/* Top Controls Bar with Language Toggle and Visual Settings */}
        <div className="top-controls-bar">
          <LanguageToggle
            language={language}
            onSelectLanguage={handleLanguageChange}
          />
          <ControlsOverlay
            config={globeConfig}
            iceOverlayAvailable={!!iceOverlay}
            terrainOverlayAvailable={!!terrainOverlayUrl}
            onChangeConfig={setGlobeConfig}
            onOpenAttribution={() => setIsAttributionOpen(true)}
            colorScheme={themePreference}
            onChangeColorScheme={handleColorSchemeChange}
            language={language}
            onChangeLanguage={handleLanguageChange}
            onTriggerTerrainHighlight={
              isTerrainMaskActive ? handlePulseTerrainHighlight : undefined
            }
            isTerrainHighlightActive={isHighlightingTerrain}
            terrainHighlightLabel={
              isTerrainMaskEligible ? terrainHighlightLabel : undefined
            }
          />
        </div>

        {/* Country / Culture Inspector Drawer */}
        <CountryDrawer
          feature={selectedFeature}
          currentEra={localizedCurrentEra}
          onClose={() => setSelectedFeature(null)}
          language={language}
        />

        {/* Interactive Timeline Scrubber */}
        <Timeline
          eras={localizedEras}
          currentEra={localizedCurrentEra}
          onSelectEra={setCurrentEra}
          isLoading={isLoadingGeoJson}
          language={language}
        />

        {/* Data Source & Map Attribution */}
        <Attribution
          isModalOpen={isAttributionOpen}
          onOpenModal={() => setIsAttributionOpen(true)}
          onCloseModal={() => setIsAttributionOpen(false)}
          language={language}
        />
      </main>
    </div>
  )
}

export default App
