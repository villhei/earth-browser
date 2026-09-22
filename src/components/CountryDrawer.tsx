import React from "react"
import { GeoJSONFeature, Era } from "../types"
import { Language } from "../i18n/types"
import {
  t,
  getLocalizedCultureSphere,
  getLocalizedTerritoryName,
} from "../i18n/translations"
import {
  getEntityMetadata,
  getSubjugationInfo,
  getBorderPrecision,
  getCountryColor,
} from "../features/globe/colors"
import "./CountryDrawer.css"

interface CountryDrawerProps {
  feature: GeoJSONFeature | null
  currentEra: Era | null
  onClose: () => void
  language?: Language
}

export const CountryDrawer: React.FC<CountryDrawerProps> = ({
  feature,
  currentEra,
  onClose,
  language = "en",
}) => {
  if (!feature) return null

  const props = feature.properties || {}
  const rawName = props.name || props.NAME || t("unknown_territory", language)
  const formalName = props.formal_name || props.FORMAL_EN || props.FORMAL_FR
  const iso = props.iso_a3 || props.ISO_A3 || props.ADM0_A3
  const continent = props.CONTINENT || props.REGION_UN || props.REGION_WB
  const economy = props.ECONOMY
  const sovereignty = props.SOVEREIGNT || props.CONTROLLIN
  const cultureMeta = props.culture_metadata

  const meta = getEntityMetadata(rawName, props)
  const color = meta.color
  const canonicalName = meta.canonicalName
  const rawCultureGroup = cultureMeta?.culture_group || meta.cultureGroup

  // Localized values
  const displayName =
    language === "fi"
      ? cultureMeta?.name_fi || getLocalizedTerritoryName(rawName, "fi") || rawName
      : rawName

  const subtitleName =
    displayName !== rawName
      ? rawName
      : formalName && formalName !== rawName
        ? formalName
        : null

  const localizedCultureGroup = rawCultureGroup
    ? getLocalizedCultureSphere(rawCultureGroup, language)
    : null

  const partOf = (props.PARTOF || props.part_of || "").trim()
  const localizedPartOf = partOf ? getLocalizedTerritoryName(partOf, language) : ""

  const subjectTo = (props.SUBJECTO || props.subject_to || props.SUBCTO || "").trim()
  const localizedSubjectTo = subjectTo ? getLocalizedTerritoryName(subjectTo, language) : ""

  const subjugation = getSubjugationInfo(rawName, props)
  const borderPrecision = getBorderPrecision(props)

  const parentColor = partOf ? getCountryColor(partOf, { name: partOf }) : null

  const summary =
    language === "fi"
      ? cultureMeta?.summary_fi || cultureMeta?.summary_en
      : cultureMeta?.summary_en || cultureMeta?.summary_fi

  const wikipediaUrl =
    language === "fi"
      ? cultureMeta?.wikipedia_url_fi || cultureMeta?.wikipedia_url_en
      : cultureMeta?.wikipedia_url_en || cultureMeta?.wikipedia_url_fi

  const periodLabel =
    language === "fi"
      ? cultureMeta?.period_label_fi || cultureMeta?.period_label
      : cultureMeta?.period_label || cultureMeta?.period_label_fi

  return (
    <div className="country-drawer">
      <div className="drawer-header">
        <div className="drawer-title-group">
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span className="drawer-tag">
              {currentEra?.year_label || (language === "fi" ? "Historiallinen aikakausi" : "Historical Era")}
            </span>
            {color && (
              <span
                style={{
                  display: "inline-block",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: color,
                  border: "1px solid rgba(255,255,255,0.4)",
                  boxShadow: `0 0 6px ${color}88`,
                }}
                title={`Culture color: ${color}`}
              />
            )}
          </div>
          <h3 className="drawer-title">{displayName}</h3>
          {subtitleName && (
            <div className="drawer-subtitle">{subtitleName}</div>
          )}
        </div>
        <button className="drawer-close-btn" onClick={onClose} aria-label={t("close", language)}>
          ✕
        </button>
      </div>

      <div className="drawer-content">
        {localizedCultureGroup && (
          <div className="drawer-row">
            <span className="drawer-label">{t("culture_sphere", language)}</span>
            <span className="drawer-value badge" style={{ borderColor: color }}>
              {localizedCultureGroup}
            </span>
          </div>
        )}

        {partOf && partOf.toLowerCase() !== rawName.toLowerCase() && (
          <div className="drawer-row">
            <span className="drawer-label">{t("part_of", language)}</span>
            <span className="drawer-value" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              {parentColor && (
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: parentColor,
                    display: "inline-block",
                  }}
                />
              )}
              {localizedPartOf}
            </span>
          </div>
        )}

        {subjugation.isSubjugated && subjectTo && (
          <div className="drawer-row">
            <span className="drawer-label">{t("subjugated_to", language)}</span>
            <span
              className="drawer-value badge"
              style={{
                background: "repeating-linear-gradient(45deg, rgba(239, 68, 68, 0.2), rgba(239, 68, 68, 0.2) 6px, rgba(56, 189, 248, 0.2) 6px, rgba(56, 189, 248, 0.2) 12px)",
                color: "#f87171",
                border: "1px solid rgba(239, 68, 68, 0.4)",
                fontWeight: 600,
              }}
            >
              {localizedSubjectTo}
            </span>
          </div>
        )}

        {canonicalName && canonicalName !== rawName && (
          <div className="drawer-row">
            <span className="drawer-label">{t("civilization_lineage", language)}</span>
            <span className="drawer-value">{getLocalizedTerritoryName(canonicalName, language)}</span>
          </div>
        )}

        {cultureMeta?.historical_period && (
          <div className="drawer-row">
            <span className="drawer-label">{t("historical_period", language)}</span>
            <span className="drawer-value">{cultureMeta.historical_period}</span>
          </div>
        )}

        {periodLabel && (
          <div className="drawer-row">
            <span className="drawer-label">{t("documented_era", language)}</span>
            <span className="drawer-value badge drawer-badge-era">
              {periodLabel}
            </span>
          </div>
        )}

        {cultureMeta?.capital && (
          <div className="drawer-row">
            <span className="drawer-label">{t("capital_center", language)}</span>
            <span className="drawer-value">{cultureMeta.capital}</span>
          </div>
        )}

        <div className="drawer-row">
          <span className="drawer-label">{t("border_precision", language)}</span>
          {borderPrecision === 3 ? (
            <span className="drawer-value badge drawer-badge-exact">
              {t("precision_exact", language)}
            </span>
          ) : borderPrecision === 2 ? (
            <span className="drawer-value badge drawer-badge-approx">
              {t("precision_approx", language)}
            </span>
          ) : (
            <span className="drawer-value badge drawer-badge-frontier">
              {t("precision_frontier", language)}
            </span>
          )}
        </div>

        {iso && (
          <div className="drawer-row">
            <span className="drawer-label">{t("iso_code", language)}</span>
            <span className="drawer-value badge">{iso}</span>
          </div>
        )}

        {sovereignty && sovereignty !== rawName && !subjugation.isSubjugated && (
          <div className="drawer-row">
            <span className="drawer-label">{t("sovereignty_control", language)}</span>
            <span className="drawer-value">{getLocalizedTerritoryName(sovereignty, language)}</span>
          </div>
        )}

        {continent && (
          <div className="drawer-row">
            <span className="drawer-label">{t("region_continent", language)}</span>
            <span className="drawer-value">{continent}</span>
          </div>
        )}

        {economy && (
          <div className="drawer-row">
            <span className="drawer-label">{t("classification", language)}</span>
            <span className="drawer-value">{economy}</span>
          </div>
        )}

        {props.POP_EST && (
          <div className="drawer-row">
            <span className="drawer-label">{t("est_population", language)}</span>
            <span className="drawer-value">
              {Number(props.POP_EST).toLocaleString()}
            </span>
          </div>
        )}

        {props.AREA && (
          <div className="drawer-row">
            <span className="drawer-label">{t("area_approx", language)}</span>
            <span className="drawer-value">
              {Number(props.AREA).toLocaleString()} {t("sq_km", language)}
            </span>
          </div>
        )}

        {summary && (
          <div className="drawer-summary-box">
            <div className="drawer-summary-header">
              <span className="drawer-summary-title">{t("about", language)}</span>
              {wikipediaUrl && (
                <a
                  href={wikipediaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="drawer-wiki-link"
                  title="Open in Wikipedia"
                >
                  Wikipedia ↗
                </a>
              )}
            </div>
            <p className="drawer-summary-text">{summary}</p>
          </div>
        )}

        {!summary && wikipediaUrl && (
          <div className="drawer-row" style={{ marginTop: "4px" }}>
            <span className="drawer-label">{t("wikipedia", language)}:</span>
            <a
              href={wikipediaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="drawer-wiki-link"
            >
              {t("wikipedia_article", language)}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
