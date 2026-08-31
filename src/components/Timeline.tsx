import React, { useEffect, useRef } from "react"
import { Era } from "../types"
import "./Timeline.css"

interface TimelineProps {
  eras: Era[]
  currentEra: Era | null
  onSelectEra: (era: Era) => void
  isLoading?: boolean
}

/**
 * Extracts a clean display label for an era, removing redundant leading year prefix if present.
 */
export function formatEraLabel(name: string): string {
  if (!name) return ""
  if (name.includes(" - ")) {
    const parts = name.split(" - ")
    return parts.slice(1).join(" - ").trim()
  }
  return name.trim()
}

export const Timeline: React.FC<TimelineProps> = ({
  eras,
  currentEra,
  onSelectEra,
  isLoading = false,
}) => {
  const activeItemRef = useRef<HTMLButtonElement | null>(null)
  const listRef = useRef<HTMLDivElement | null>(null)

  const currentIndex = currentEra
    ? eras.findIndex((e) => e.id === currentEra.id)
    : -1

  // Auto-scroll active era item into view when selection changes
  useEffect(() => {
    if (activeItemRef.current) {
      activeItemRef.current.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      })
    }
  }, [currentEra?.id])

  if (!eras.length || !currentEra) return null

  const handlePrev = () => {
    if (currentIndex > 0) {
      onSelectEra(eras[currentIndex - 1])
    }
  }

  const handleNext = () => {
    if (currentIndex < eras.length - 1) {
      onSelectEra(eras[currentIndex + 1])
    }
  }

  return (
    <aside
      className="timeline-container"
      aria-label="Historical Timeline"
    >
      {/* Panel Header & Navigation Controls */}
      <div className="timeline-panel-header">
        <div className="timeline-header-title-group">
          <span className="timeline-badge-tag">Timeline</span>
          <span className="timeline-era-count">
            {currentIndex >= 0 ? `${currentIndex + 1} / ${eras.length}` : `${eras.length} eras`}
          </span>
        </div>

        <div className="timeline-nav-group">
          <button
            className="timeline-nav-btn"
            onClick={handlePrev}
            disabled={currentIndex <= 0 || isLoading}
            title="Previous Era (Earlier)"
            aria-label="Previous Era"
          >
            ‹
          </button>
          <button
            className="timeline-nav-btn"
            onClick={handleNext}
            disabled={currentIndex >= eras.length - 1 || isLoading}
            title="Next Era (Later)"
            aria-label="Next Era"
          >
            ›
          </button>
        </div>
      </div>

      {/* Active Era Details Card */}
      <div className="timeline-active-card">
        <div className="timeline-active-header">
          <span className="timeline-active-year">{currentEra.year_label}</span>
          <span className="timeline-active-stats">
            {currentEra.feature_count} territories
          </span>
        </div>
        <h3 className="timeline-active-title" title={currentEra.name}>
          {formatEraLabel(currentEra.name)}
        </h3>
        {currentEra.description && (
          <p className="timeline-active-description" title={currentEra.description}>
            {currentEra.description}
          </p>
        )}
      </div>

      {/* Vertical Scrollable Era List */}
      <div
        className="timeline-list-container"
        ref={listRef}
        role="listbox"
        aria-label="Select Historical Era"
      >
        <div className="timeline-rail" />
        <div className="timeline-list">
          {eras.map((era) => {
            const isActive = era.id === currentEra.id
            const cleanLabel = formatEraLabel(era.name)

            return (
              <button
                key={era.id}
                ref={isActive ? activeItemRef : null}
                className={`timeline-item ${isActive ? "active" : ""}`}
                onClick={() => onSelectEra(era)}
                disabled={isLoading && !isActive}
                role="option"
                aria-selected={isActive}
                title={`${era.year_label}: ${era.name}`}
              >
                {/* Dot marker */}
                <div className="timeline-dot-wrapper">
                  <span className={`timeline-dot ${isActive ? "active" : ""}`} />
                </div>

                {/* Clearly visible year */}
                <span className="timeline-item-year">{era.year_label}</span>

                {/* Truncated label */}
                <span className="timeline-item-label">{cleanLabel}</span>
              </button>
            )
          })}
        </div>
      </div>
    </aside>
  )
}
