import React from "react"
import { Era } from "../types"
import { Language } from "../i18n/types"
import { formatEraLabel } from "./Timeline"
import "./ActiveEraBanner.css"

export interface ActiveEraBannerProps {
  currentEra: Era | null
  language?: Language
}

export const ActiveEraBanner: React.FC<ActiveEraBannerProps> = ({
  currentEra,
  language = "en",
}) => {
  if (!currentEra) return null

  const cleanTitle = formatEraLabel(currentEra.name)

  return (
    <div
      className="active-era-banner"
      role="region"
      aria-label={language === "fi" ? "Aktiivinen historiallinen aikakausi" : "Active Historical Era"}
    >
      <div className="active-era-info">
        <div className="active-era-title-line">
          <span className="active-era-year">{currentEra.year_label}</span>
          <span className="active-era-divider">·</span>
          <h2 className="active-era-title" title={currentEra.name}>
            {cleanTitle}
          </h2>
          <span className="active-era-stats">
            {currentEra.feature_count} {language === "fi" ? "aluetta" : "territories"}
          </span>
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
