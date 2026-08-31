import React, { useState } from "react"
import { GlobeConfig } from "../types"
import "./ControlsOverlay.css"

interface ControlsOverlayProps {
  config: GlobeConfig
  onChangeConfig: (config: GlobeConfig) => void
}

export const ControlsOverlay: React.FC<ControlsOverlayProps> = ({
  config,
  onChangeConfig,
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
        ⚙ Visuals
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
              <label className="controls-label">Fill Opacity</label>
              <span className="controls-val">
                {Math.round(config.opacity * 100)}%
              </span>
            </div>
            <input
              type="range"
              min={0.1}
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
        </div>
      )}
    </div>
  )
}
