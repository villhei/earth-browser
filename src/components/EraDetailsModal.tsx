import React, { useEffect } from "react"
import { Era } from "../types"
import { Language } from "../i18n/types"
import { t } from "../i18n/translations"
import { formatEraLabel } from "./Timeline"
import "./EraDetailsModal.css"

export interface EraDetailsModalProps {
  isOpen: boolean
  currentEra: Era | null
  onClose: () => void
  language?: Language
}

export const EraDetailsModal: React.FC<EraDetailsModalProps> = ({
  isOpen,
  currentEra,
  onClose,
  language = "en",
}) => {
  // Dismiss on Escape key
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen || !currentEra) return null

  const cleanTitle = formatEraLabel(currentEra.name)

  return (
    <>
      <div
        className="era-details-backdrop"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className="era-details-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="era-details-title"
      >
        <div className="era-details-header">
          <div className="era-details-header-text">
            <div className="era-details-badge-line">
              <span className="era-details-year">{currentEra.year_label}</span>
              {typeof currentEra.feature_count === "number" && (
                <>
                  <span className="era-details-divider">·</span>
                  <span className="era-details-stats">
                    {currentEra.feature_count} {t("regions", language)}
                  </span>
                </>
              )}
            </div>
            <h2 id="era-details-title" className="era-details-title">
              {cleanTitle}
            </h2>
          </div>

          <button
            type="button"
            className="era-details-close-btn"
            onClick={onClose}
            aria-label={t("close", language)}
            title={t("close", language)}
          >
            ✕
          </button>
        </div>

        <div className="era-details-body">
          {currentEra.description ? (
            <p className="era-details-description">{currentEra.description}</p>
          ) : (
            <p className="era-details-description empty">
              {language === "fi"
                ? "Ei lisätietoja saatavilla tälle aikakaudelle."
                : "No additional description available for this era."}
            </p>
          )}
        </div>

        <div className="era-details-footer">
          <button
            type="button"
            className="era-details-dismiss-btn"
            onClick={onClose}
          >
            {t("got_it", language)}
          </button>
        </div>
      </div>
    </>
  )
}
