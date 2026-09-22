import React, { useEffect, useMemo, useRef, useState } from "react"
import { Era } from "../types"
import { Language } from "../i18n/types"
import { groupErasByEpoch, getEpochForEra, getLocalizedEpoch } from "./eraGrouping"
import "./Timeline.css"

interface TimelineProps {
  eras: Era[]
  currentEra: Era | null
  onSelectEra: (era: Era) => void
  isLoading?: boolean
  language?: Language
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
  language = "en",
}) => {
  const activeItemRef = useRef<HTMLButtonElement | null>(null)
  const listRef = useRef<HTMLDivElement | null>(null)

  const currentIndex = currentEra
    ? eras.findIndex((e) => e.id === currentEra.id)
    : -1

  const activeEpoch = currentEra ? getEpochForEra(currentEra) : null

  const groups = useMemo(() => groupErasByEpoch(eras), [eras])
  const allEpochIds = useMemo(() => groups.map((g) => g.epoch.id), [groups])

  // Track which epoch accordions are expanded
  const [expandedEpochs, setExpandedEpochs] = useState<Set<string>>(() => {
    const initial = new Set<string>()
    if (activeEpoch) {
      initial.add(activeEpoch.id)
    }
    return initial
  })

  // Auto-expand the epoch group containing the active era when selected
  useEffect(() => {
    if (activeEpoch) {
      setExpandedEpochs((prev) => {
        if (prev.has(activeEpoch.id)) return prev
        const next = new Set(prev)
        next.add(activeEpoch.id)
        return next
      })
    }
  }, [activeEpoch?.id])

  // Auto-scroll active era item into view when selected era changes
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

  const handleToggleEpoch = (epochId: string) => {
    setExpandedEpochs((prev) => {
      const next = new Set(prev)
      if (next.has(epochId)) {
        next.delete(epochId)
      } else {
        next.add(epochId)
      }
      return next
    })
  }

  const isAllExpanded =
    allEpochIds.length > 0 && allEpochIds.every((id) => expandedEpochs.has(id))

  const handleToggleAll = () => {
    if (isAllExpanded) {
      // Collapse to only active epoch
      setExpandedEpochs(activeEpoch ? new Set([activeEpoch.id]) : new Set())
    } else {
      // Expand all epochs
      setExpandedEpochs(new Set(allEpochIds))
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
          <span className="timeline-badge-tag">{language === "fi" ? "Aikajana" : "Timeline"}</span>
          <span className="timeline-era-count">
            {currentIndex >= 0
              ? `${currentIndex + 1} / ${eras.length}`
              : language === "fi"
                ? `${eras.length} aikakautta`
                : `${eras.length} eras`}
          </span>
        </div>

        <div className="timeline-nav-group">
          <button
            type="button"
            className="timeline-nav-btn timeline-toggle-all-btn"
            onClick={handleToggleAll}
            title={
              isAllExpanded
                ? language === "fi"
                  ? "Tiivistä kaikki aikakaudet"
                  : "Collapse all epochs"
                : language === "fi"
                  ? "Laajenna kaikki aikakaudet"
                  : "Expand all epochs"
            }
            aria-label={
              isAllExpanded
                ? language === "fi"
                  ? "Tiivistä kaikki aikakaudet"
                  : "Collapse all epochs"
                : language === "fi"
                  ? "Laajenna kaikki aikakaudet"
                  : "Expand all epochs"
            }
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {isAllExpanded ? (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              ) : (
                <>
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </button>
          <button
            type="button"
            className="timeline-nav-btn"
            onClick={handlePrev}
            disabled={currentIndex <= 0 || isLoading}
            title={language === "fi" ? "Edellinen aikakausi" : "Previous Era (Earlier)"}
            aria-label={language === "fi" ? "Edellinen aikakausi" : "Previous Era"}
          >
            ‹
          </button>
          <button
            type="button"
            className="timeline-nav-btn"
            onClick={handleNext}
            disabled={currentIndex >= eras.length - 1 || isLoading}
            title={language === "fi" ? "Seuraava aikakausi" : "Next Era (Later)"}
            aria-label={language === "fi" ? "Seuraava aikakausi" : "Next Era"}
          >
            ›
          </button>
        </div>
      </div>

      {/* Vertical Scrollable Era Accordion List */}
      <div
        className="timeline-list-container"
        ref={listRef}
        role="region"
        aria-label={language === "fi" ? "Historialliset aikakaudet jaoteltuna kausiin" : "Historical Eras Grouped by Epoch"}
      >
        <div className="timeline-epochs-wrapper">
          {groups.map((group) => {
            const isExpanded = expandedEpochs.has(group.epoch.id)
            const containsActive = group.eras.some((e) => e.id === currentEra.id)
            const epoch = getLocalizedEpoch(group.epoch, language)

            return (
              <div
                key={group.epoch.id}
                className={`timeline-epoch-group ${isExpanded ? "expanded" : "collapsed"}`}
              >
                {/* Accordion Header */}
                <button
                  type="button"
                  className={`timeline-epoch-header ${isExpanded ? "expanded" : ""} ${containsActive ? "has-active" : ""}`}
                  onClick={() => handleToggleEpoch(group.epoch.id)}
                  aria-expanded={isExpanded}
                  title={`${epoch.name} (${epoch.dateRangeLabel}) — ${
                    isExpanded
                      ? language === "fi"
                        ? "Napsauta tiivistääksesi"
                        : "Click to collapse"
                      : language === "fi"
                        ? "Napsauta laajentaaksesi"
                        : "Click to expand"
                  }`}
                >
                  <span
                    className={`timeline-epoch-chevron ${isExpanded ? "expanded" : ""}`}
                    aria-hidden="true"
                  >
                    ▶
                  </span>

                  <div className="timeline-epoch-meta">
                    <span className="timeline-epoch-title">{epoch.name}</span>
                    <span className="timeline-epoch-dates">
                      {epoch.dateRangeLabel}
                    </span>
                  </div>

                  <div className="timeline-epoch-badge-wrapper">
                    {containsActive && !isExpanded && (
                      <span
                        className="timeline-epoch-active-dot"
                        title="Active era is inside this collapsed epoch"
                      />
                    )}
                    <span className="timeline-epoch-count">{group.eras.length}</span>
                  </div>
                </button>

                {/* Collapsible Content */}
                {isExpanded && (
                  <div
                    className="timeline-epoch-content"
                    role="listbox"
                    aria-label={group.epoch.name}
                  >
                    <div className="timeline-rail" />
                    <div className="timeline-list">
                      {group.eras.map((era) => {
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
                              <span
                                className={`timeline-dot ${isActive ? "active" : ""}`}
                              />
                            </div>

                            {/* Clearly visible year */}
                            <span className="timeline-item-year">
                              {era.year_label}
                            </span>

                            {/* Truncated label */}
                            <span className="timeline-item-label">
                              {cleanLabel}
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </aside>
  )
}
