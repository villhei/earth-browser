import React, { useEffect, useRef, useState } from "react"
import { GlobeConfig, GlobeTexture } from "../types"
import { ThemePreference, THEME_OPTIONS } from "../styles/theme"
import { Language, LANGUAGES } from "../i18n/types"
import { t } from "../i18n/translations"
import "./ControlsOverlay.css"

interface ControlsOverlayProps {
  config: GlobeConfig
  onChangeConfig: (config: GlobeConfig) => void
  onOpenAttribution?: () => void
  iceOverlayAvailable?: boolean
  terrainOverlayAvailable?: boolean
  colorScheme?: ThemePreference
  onChangeColorScheme?: (scheme: ThemePreference) => void
  onTriggerTerrainHighlight?: () => void
  isTerrainHighlightActive?: boolean
  terrainHighlightLabel?: string
  language?: Language
  onChangeLanguage?: (lang: Language) => void
}

export const ControlsOverlay: React.FC<ControlsOverlayProps> = ({
  config,
  onChangeConfig,
  onOpenAttribution,
  iceOverlayAvailable = false,
  terrainOverlayAvailable = false,
  colorScheme = "auto",
  onChangeColorScheme,
  onTriggerTerrainHighlight,
  isTerrainHighlightActive = false,
  terrainHighlightLabel,
  language = "en",
  onChangeLanguage,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const handlePointerDown = (event: PointerEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    document.addEventListener("pointerdown", handlePointerDown, { capture: true })
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown, { capture: true })
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen])

  const labelSize = config.labelSize ?? 14
  const labelTolerance = config.labelTolerance ?? 10
  const canShowTerrainOverlay = terrainOverlayAvailable
  const terrainOverlayEnabled = canShowTerrainOverlay && config.showTerrainOverlay !== false

  return (
    <div ref={containerRef} className="controls-overlay">
      <button
        className={`controls-toggle-btn ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        title={t("globe_visual_settings", language)}
        aria-expanded={isOpen}
      >
        <svg
          className="controls-icon"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
        <span>{t("visuals", language)}</span>
      </button>

      {isOpen && (
        <div className="controls-panel">
          <div className="controls-header">
            <h4>{t("globe_settings", language)}</h4>
            <button
              className="controls-close"
              onClick={() => setIsOpen(false)}
              aria-label={t("close", language)}
            >
              ✕
            </button>
          </div>

          {/* Language Selector */}
          <div className="controls-group">
            <div className="controls-label-row">
              <label className="controls-label">{t("language", language)}</label>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              {LANGUAGES.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  className={`controls-pill ${language === opt.id ? "active" : ""}`}
                  style={{ flex: 1, textAlign: "center" }}
                  onClick={() => onChangeLanguage?.(opt.id)}
                  aria-pressed={language === opt.id}
                >
                  {opt.fullLabel}
                </button>
              ))}
            </div>
          </div>

          {/* UI Color Scheme */}
          <div className="controls-group">
            <div className="controls-label-row">
              <label className="controls-label">{t("theme", language)}</label>
            </div>
            <select
              className="controls-select"
              value={colorScheme}
              onChange={(e) =>
                onChangeColorScheme?.(e.target.value as ThemePreference)
              }
              aria-label={t("theme", language)}
            >
              {THEME_OPTIONS.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.id === "auto"
                    ? t("theme_auto", language)
                    : option.id === "slate"
                      ? t("theme_slate", language)
                      : t("theme_parchment", language)}
                </option>
              ))}
            </select>
          </div>

          {/* Earth Surface Texture */}
          <div className="controls-group">
            <div className="controls-label-row">
              <label className="controls-label">{t("surface_texture", language)}</label>
            </div>
            <select
              className="controls-select"
              value={config.texture}
              onChange={(e) =>
                onChangeConfig({
                  ...config,
                  texture: e.target.value as GlobeTexture,
                })
              }
            >
              <option value={GlobeTexture.EARTH_DAY}>{t("texture_day_map", language)}</option>
              <option value={GlobeTexture.EARTH_BLUE_MARBLE}>
                {t("texture_blue_marble_modern", language)}
              </option>
            </select>
          </div>

          {/* Prehistoric Terrain Highlight */}
          <div className="controls-group">
            <div className="controls-label-row">
              <span className="controls-label" id="terrain-overlay-label">
                {t("terrain_highlight", language)}
              </span>
              <button
                className={`controls-pill ${terrainOverlayEnabled ? "active" : ""}`}
                aria-labelledby="terrain-overlay-label"
                aria-pressed={terrainOverlayEnabled}
                disabled={!canShowTerrainOverlay}
                onClick={() =>
                  onChangeConfig({
                    ...config,
                    showTerrainOverlay: config.showTerrainOverlay === false,
                  })
                }
              >
                {terrainOverlayEnabled ? t("state_enabled", language) : t("state_disabled", language)}
              </button>
            </div>
            {terrainOverlayEnabled && (
              <div className="controls-label-row" style={{ marginTop: "8px" }}>
                <span className="controls-label" style={{ fontSize: "11px" }}>
                  {t("highlight_focus", language)}
                </span>
                <select
                  className="controls-select"
                  style={{ width: "auto", padding: "3px 8px", fontSize: "11px" }}
                  value={config.terrainHighlightStyle ?? "contents"}
                  onChange={(e) =>
                    onChangeConfig({
                      ...config,
                      terrainHighlightStyle: e.target.value as "contents" | "outline",
                    })
                  }
                  aria-label={t("highlight_focus", language)}
                >
                  <option value="contents">{t("focus_land_bridges", language)}</option>
                  <option value="outline">{t("focus_coastlines", language)}</option>
                </select>
              </div>
            )}
            {terrainOverlayEnabled && onTriggerTerrainHighlight && (
              <div style={{ marginTop: "6px" }}>
                <button
                  className={`controls-pill ${isTerrainHighlightActive ? "active" : ""}`}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    padding: "6px 8px",
                  }}
                  onClick={onTriggerTerrainHighlight}
                  title={
                    terrainHighlightLabel
                      ? `${t("pulse_highlight", language)}: ${terrainHighlightLabel}`
                      : t("pulse_highlight", language)
                  }
                  aria-pressed={isTerrainHighlightActive}
                >
                  <span>✦</span>
                  <span>
                    {isTerrainHighlightActive
                      ? t("pulsing", language)
                      : t("pulse_highlight", language)}
                  </span>
                </button>
              </div>
            )}
            <p className="controls-help">
              {terrainHighlightLabel
                ? `${terrainHighlightLabel}.`
                : language === "fi"
                  ? "Rantaviivat 10 000, 8000 ja 5000 eaa. Päiväkartalla tai Blue Marblella; myös 123 000 eaa. Blue Marblella."
                  : "Coastal terrain for 10,000, 8,000 and 5,000 BCE with Day Map or Blue Marble; also 123,000 BCE with Blue Marble."}
            </p>
          </div>

          {/* Ice Sheet Overlay */}
          <div className="controls-group">
            <div className="controls-label-row">
              <span className="controls-label" id="ice-overlay-label">
                {t("ice_sheets_overlay", language)}
              </span>
              <button
                className={`controls-pill ${config.showIceOverlay ? "active" : ""}`}
                aria-labelledby="ice-overlay-label"
                aria-pressed={!!config.showIceOverlay}
                onClick={() =>
                  onChangeConfig({
                    ...config,
                    showIceOverlay: !config.showIceOverlay,
                  })
                }
              >
                {config.showIceOverlay ? t("state_enabled", language) : t("state_disabled", language)}
              </button>
            </div>
            <p className="controls-help">
              {!iceOverlayAvailable
                ? language === "fi"
                  ? "Saatavilla aikakausilla 10 000, 8000, 5000, 4000 ja 3000 eaa."
                  : "Available at 10,000, 8,000, 5,000, 4,000 and 3,000 BCE."
                : language === "fi"
                  ? "Kokeellinen esitysmuoto · osittainen alueellinen jäätikköpeitto."
                  : "Experimental appearance · partial regional ice coverage."}
            </p>
          </div>

          {/* Polygon Altitude */}
          <div className="controls-group">
            <div className="controls-label-row">
              <label className="controls-label">{t("polygon_altitude", language)}</label>
              <span className="controls-val">{config.layerAltitude.toFixed(3)}</span>
            </div>
            <input
              type="range"
              min={0.001}
              max={0.03}
              step={0.001}
              value={config.layerAltitude}
              onChange={(e) =>
                onChangeConfig({
                  ...config,
                  layerAltitude: parseFloat(e.target.value),
                })
              }
              className="controls-slider"
            />
          </div>

          {/* Overlap Elevation */}
          <div className="controls-group">
            <div className="controls-label-row">
              <label className="controls-label">{t("overlap_elevation", language)}</label>
              <span className="controls-val">{(config.elevationScale ?? 0.3).toFixed(1)}x</span>
            </div>
            <input
              type="range"
              min={0.0}
              max={3.0}
              step={0.1}
              value={config.elevationScale ?? 0.3}
              onChange={(e) =>
                onChangeConfig({
                  ...config,
                  elevationScale: parseFloat(e.target.value),
                })
              }
              className="controls-slider"
            />
          </div>

          {/* Country Base Opacity */}
          <div className="controls-group">
            <div className="controls-label-row">
              <label className="controls-label">{t("fill_opacity", language)}</label>
              <span className="controls-val">
                {Math.round(config.opacity * 100)}%
              </span>
            </div>
            <input
              type="range"
              min={0.0}
              max={1.0}
              step={0.05}
              value={config.opacity}
              onChange={(e) =>
                onChangeConfig({
                  ...config,
                  opacity: parseFloat(e.target.value),
                })
              }
              className="controls-slider"
            />
          </div>

          {/* Country Labels */}
          <div className="controls-group">
            <div className="controls-label-row">
              <label className="controls-label">{t("country_labels", language)}</label>
              <button
                className={`controls-pill ${config.showLabels !== false ? "active" : ""}`}
                style={{ padding: "4px 12px", width: "auto" }}
                onClick={() =>
                  onChangeConfig({
                    ...config,
                    showLabels: config.showLabels === false,
                  })
                }
              >
                {config.showLabels !== false ? t("state_enabled", language) : t("state_disabled", language)}
              </button>
            </div>
          </div>

          {config.showLabels !== false && (
            <>
              <div className="controls-group">
                <div className="controls-label-row">
                  <label className="controls-label">{t("label_size", language)}</label>
                  <span className="controls-val">{labelSize}px</span>
                </div>
                <input
                  type="range"
                  min={9}
                  max={22}
                  step={1}
                  value={labelSize}
                  onChange={(e) =>
                    onChangeConfig({
                      ...config,
                      labelSize: parseInt(e.target.value, 10),
                    })
                  }
                  className="controls-slider"
                />
              </div>

              <div className="controls-group">
                <div className="controls-label-row">
                  <label className="controls-label">{t("appearance_tolerance", language)}</label>
                  <span className="controls-val">{labelTolerance}px</span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={24}
                  step={2}
                  value={labelTolerance}
                  onChange={(e) =>
                    onChangeConfig({
                      ...config,
                      labelTolerance: parseInt(e.target.value, 10),
                    })
                  }
                  className="controls-slider"
                />
              </div>
            </>
          )}

          {onOpenAttribution && (
            <div className="controls-divider">
              <button
                className="controls-pill"
                style={{
                  width: "100%",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  fontSize: "11px",
                  padding: "6px 8px",
                }}
                onClick={onOpenAttribution}
              >
                ℹ {t("credits_and_sources", language)}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
