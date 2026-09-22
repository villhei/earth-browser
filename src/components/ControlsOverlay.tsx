import React, { useEffect, useRef, useState } from "react"
import { GlobeConfig, GlobeTexture } from "../types"
import { ThemePreference, THEME_OPTIONS } from "../styles/theme"
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
        title="Globe Visual Settings"
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
        <span>Visuals</span>
      </button>

      {isOpen && (
        <div className="controls-panel">
          <div className="controls-header">
            <h4>Globe Settings</h4>
            <button
              className="controls-close"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>

          <div className="controls-group">
            <div className="controls-label-row">
              <label className="controls-label">UI Color Scheme</label>
            </div>
            <select
              className="controls-select"
              value={colorScheme}
              onChange={(e) =>
                onChangeColorScheme?.(e.target.value as ThemePreference)
              }
              aria-label="UI Color Scheme"
            >
              {THEME_OPTIONS.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>

          <div className="controls-group">
            <div className="controls-label-row">
              <label className="controls-label">Earth Surface Texture</label>
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
              <option value={GlobeTexture.EARTH_DAY}>Day Map</option>
              <option value={GlobeTexture.EARTH_BLUE_MARBLE}>
                Blue Marble (Modern)
              </option>
            </select>
          </div>

          <div className="controls-group">
            <div className="controls-label-row">
              <span className="controls-label" id="terrain-overlay-label">Terrain mask</span>
              <button
                className={`controls-pill ${terrainOverlayEnabled ? "active" : ""}`}
                aria-labelledby="terrain-overlay-label"
                aria-pressed={terrainOverlayEnabled}
                disabled={!canShowTerrainOverlay}
                onClick={() => onChangeConfig({ ...config, showTerrainOverlay: config.showTerrainOverlay === false })}
              >
                {terrainOverlayEnabled ? "Enabled" : "Disabled"}
              </button>
            </div>
            {terrainOverlayEnabled && (
              <div className="controls-label-row" style={{ marginTop: "8px" }}>
                <span className="controls-label" style={{ fontSize: "11px" }}>Highlight focus</span>
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
                  aria-label="Terrain Highlight Focus"
                >
                  <option value="contents">Land Bridges (Texture)</option>
                  <option value="outline">Coastlines (Outlines)</option>
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
                  title={terrainHighlightLabel ? `Pulse highlight: ${terrainHighlightLabel}` : "Highlight prehistoric terrain alterations"}
                  aria-pressed={isTerrainHighlightActive}
                >
                  <span>✦</span>
                  <span>
                    {isTerrainHighlightActive
                      ? "Highlighting…"
                      : config.terrainHighlightStyle === "outline"
                      ? "Pulse Coastlines"
                      : "Pulse Land Bridges"}
                  </span>
                </button>
              </div>
            )}
            <p className="controls-help">
              {terrainHighlightLabel
                ? `${terrainHighlightLabel}.`
                : "Coastal terrain for 10,000, 8,000 and 5,000 BCE with Day Map or Blue Marble; also 123,000 BCE with Blue Marble."}
            </p>
          </div>

          <div className="controls-group">
            <div className="controls-label-row">
              <span className="controls-label" id="ice-overlay-label">Ice sheet overlay</span>
              <button
                className={`controls-pill ${config.showIceOverlay ? "active" : ""}`}
                aria-labelledby="ice-overlay-label"
                aria-pressed={!!config.showIceOverlay}
                onClick={() => onChangeConfig({ ...config, showIceOverlay: !config.showIceOverlay })}
              >
                {config.showIceOverlay ? "Enabled" : "Disabled"}
              </button>
            </div>
            <p className="controls-help">
              {!iceOverlayAvailable
                ? "Available at 10,000, 8,000, 5,000, 4,000 and 3,000 BCE."
                : "Experimental appearance · partial regional ice coverage."}
            </p>
          </div>


          <div className="controls-group">
            <div className="controls-label-row">
              <label className="controls-label">Polygon Altitude</label>
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

          <div className="controls-group">
            <div className="controls-label-row">
              <label className="controls-label">Overlap Elevation</label>
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

          <div className="controls-group">
            <div className="controls-label-row">
              <label className="controls-label">Country Base Opacity</label>
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

          <div className="controls-group">
            <div className="controls-label-row">
              <label className="controls-label">Country Labels</label>
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
                {config.showLabels !== false ? "Enabled" : "Disabled"}
              </button>
            </div>
          </div>

          {config.showLabels !== false && (
            <>
              <div className="controls-group">
                <div className="controls-label-row">
                  <label className="controls-label">Label Size</label>
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
                  <label className="controls-label">Appearance Tolerance</label>
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
                ℹ Data Sources & Attribution
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
