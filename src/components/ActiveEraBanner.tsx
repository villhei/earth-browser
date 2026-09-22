import React from "react"
import { Era } from "../types"
import { Language } from "../i18n/types"
import { formatEraLabel } from "./Timeline"
import { t } from "../i18n/translations"
import "./ActiveEraBanner.css"

export interface ActiveEraBannerProps {
  currentEra: Era | null
  language?: Language
  onPrevEra?: () => void
  onNextEra?: () => void
  hasPrevEra?: boolean
  hasNextEra?: boolean
  onToggleTimeline?: () => void
  isTimelineOpen?: boolean
  onOpenDetails?: () => void
  isLoading?: boolean
}

export const ActiveEraBanner: React.FC<ActiveEraBannerProps> = ({
  currentEra,
  language = "en",
  onPrevEra,
  onNextEra,
  hasPrevEra = false,
  hasNextEra = false,
  onToggleTimeline,
  isTimelineOpen = false,
  onOpenDetails,
  isLoading = false,
}) => {
  if (!currentEra) return null

  const cleanTitle = formatEraLabel(currentEra.name)

  return (
    <div
      className="active-era-banner"
      role="region"
      aria-label={language === "fi" ? "Aktiivinen historiallinen aikakausi" : "Active Historical Era"}
    >
      {/* Menu / Timeline Drawer Toggle (Visible on Mobile) */}
      {onToggleTimeline && (
        <button
          type="button"
          className={`active-era-menu-btn ${isTimelineOpen ? "active" : ""}`}
          onClick={onToggleTimeline}
          title={isTimelineOpen ? t("close_timeline", language) : t("open_timeline", language)}
          aria-label={isTimelineOpen ? t("close_timeline", language) : t("open_timeline", language)}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {isTimelineOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      )}

      {/* Previous Era Navigation Button */}
      {onPrevEra && (
        <button
          type="button"
          className="active-era-nav-btn prev"
          onClick={onPrevEra}
          disabled={!hasPrevEra || isLoading}
          title={language === "fi" ? "Edellinen aikakausi" : "Previous Era (Earlier)"}
          aria-label={language === "fi" ? "Edellinen aikakausi" : "Previous Era"}
        >
          ‹
        </button>
      )}

      {/* Main Era Summary Container */}
      <div
        className={`active-era-info-wrapper ${onOpenDetails ? "clickable" : ""}`}
        role={onOpenDetails ? "button" : undefined}
        tabIndex={onOpenDetails ? 0 : undefined}
        onClick={onOpenDetails}
        onKeyDown={
          onOpenDetails
            ? (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  onOpenDetails()
                }
              }
            : undefined
        }
        title={onOpenDetails ? t("view_era_details", language) : undefined}
      >
        <div className="active-era-info">
          <div className="active-era-title-line">
            <span className="active-era-year">{currentEra.year_label}</span>
            <span className="active-era-divider">·</span>
            <h2 className="active-era-title" title={currentEra.name}>
              {cleanTitle}
            </h2>
          </div>
        </div>
      </div>

      {/* Next Era Navigation Button */}
      {onNextEra && (
        <button
          type="button"
          className="active-era-nav-btn next"
          onClick={onNextEra}
          disabled={!hasNextEra || isLoading}
          title={language === "fi" ? "Seuraava aikakausi" : "Next Era (Later)"}
          aria-label={language === "fi" ? "Seuraava aikakausi" : "Next Era"}
        >
          ›
        </button>
      )}
    </div>
  )
}
