import React from "react"
import { Era } from "../types"
import { formatEraLabel } from "./Timeline"
import "./ActiveEraBanner.css"

export interface ActiveEraBannerProps {
  currentEra: Era | null
  onPulseHighlight?: () => void
  isHighlighting?: boolean
  highlightLabel?: string
}

export const ActiveEraBanner: React.FC<ActiveEraBannerProps> = ({
  currentEra,
  onPulseHighlight,
  isHighlighting = false,
  highlightLabel,
}) => {
  if (!currentEra) return null

  const cleanTitle = formatEraLabel(currentEra.name)

  return (
    <div className="active-era-banner" role="region" aria-label="Active Historical Era">
      <div className="active-era-info">
        <div className="active-era-title-line">
          <span className="active-era-year">{currentEra.year_label}</span>
          <span className="active-era-divider">·</span>
          <h2 className="active-era-title" title={currentEra.name}>
            {cleanTitle}
          </h2>
          <span className="active-era-stats">
            {currentEra.feature_count} territories
          </span>
          {onPulseHighlight && highlightLabel && (
            <button
              className={`active-era-highlight-btn ${isHighlighting ? "active" : ""}`}
              onClick={onPulseHighlight}
              title={`Pulse highlight: ${highlightLabel}`}
              aria-label={`Highlight terrain: ${highlightLabel}`}
              aria-pressed={isHighlighting}
            >
              <span className="active-era-sparkle">✦</span>
              <span>
                {isHighlighting ? "Highlighting Coastlines…" : "Highlight Coastlines"}
              </span>
            </button>
          )}
        </div>

        {currentEra.description && (
          <p className="active-era-description" title={currentEra.description}>
            {currentEra.description}
          </p>
        )}
      </div>
    </div>
  )
}
