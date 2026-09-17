import React, { useState } from "react"
import { GlobeConfig, GlobeTexture } from "../types"
import "./ControlsOverlay.css"

interface ControlsOverlayProps {
  config: GlobeConfig
  onChangeConfig: (config: GlobeConfig) => void
  onOpenAttribution?: () => void
  iceOverlayAvailable?: boolean
}

export const ControlsOverlay: React.FC<ControlsOverlayProps> = ({
  config,
  onChangeConfig,
  onOpenAttribution,
  iceOverlayAvailable = false,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const labelSize = config.labelSize ?? 14
  const labelTolerance = config.labelTolerance ?? 10

  return (
    <div className="controls-overlay">
      <button
        className={`controls-toggle-btn ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        title="Globe Visual Settings"
      >
        Visuals
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
              <option value={GlobeTexture.EARTH_BLUE_MARBLE}>
                Blue Marble (Modern)
              </option>
              <option value={GlobeTexture.EARTH_DAY}>Day Map</option>
              <option value={GlobeTexture.EARTH_NIGHT}>Night Lights</option>
              <option value={GlobeTexture.EARTH_DARK}>Dark Planetary</option>
            </select>
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
              {config.texture !== GlobeTexture.EARTH_BLUE_MARBLE
                ? "Select Blue Marble to view ice sheets."
                : !iceOverlayAvailable
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
            <div
              style={{
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                paddingTop: "10px",
                marginTop: "2px",
              }}
            >
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
