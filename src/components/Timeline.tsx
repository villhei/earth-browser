import React from "react"
import { Era } from "../types"
import "./Timeline.css"

interface TimelineProps {
  eras: Era[]
  currentEra: Era | null
  onSelectEra: (era: Era) => void
  isLoading?: boolean
}

export const Timeline: React.FC<TimelineProps> = ({
  eras,
  currentEra,
  onSelectEra,
  isLoading = false,
}) => {
  if (!eras.length || !currentEra) return null

  const currentIndex = eras.findIndex((e) => e.id === currentEra.id)

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
    <div className="timeline-container">
      {/* Era Title & Description Header */}
      <div className="timeline-header">
        <div className="timeline-badge">{currentEra.year_label}</div>
        <div className="timeline-title-group">
          <h2 className="timeline-title">{currentEra.name}</h2>
          {currentEra.description && (
            <p className="timeline-description">{currentEra.description}</p>
          )}
        </div>
        <div className="timeline-stats">
          <span>{currentEra.feature_count} territories</span>
        </div>
      </div>

      {/* Scrubber & Controls */}
      <div className="timeline-controls">
        <button
          className="timeline-nav-btn"
          onClick={handlePrev}
          disabled={currentIndex <= 0 || isLoading}
          title="Previous Era"
        >
          ‹
        </button>

        <div className="timeline-slider-track">
          <input
            type="range"
            min={0}
            max={eras.length - 1}
            value={currentIndex >= 0 ? currentIndex : 0}
            onChange={(e) => {
              const index = parseInt(e.target.value, 10)
              if (eras[index]) onSelectEra(eras[index])
            }}
            className="timeline-range-input"
          />
          <div className="timeline-ticks">
            {eras.map((era, i) => (
              <button
                key={era.id}
                className={`timeline-tick ${i === currentIndex ? "active" : ""}`}
                onClick={() => onSelectEra(era)}
                title={`${era.year_label}: ${era.name}`}
              >
                <span className="timeline-tick-label">{era.year_label}</span>
              </button>
            ))}
          </div>
        </div>

        <button
          className="timeline-nav-btn"
          onClick={handleNext}
          disabled={currentIndex >= eras.length - 1 || isLoading}
          title="Next Era"
        >
          ›
        </button>
      </div>
    </div>
  )
}
