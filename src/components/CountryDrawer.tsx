import React from "react"
import { GeoJSONFeature, Era } from "../types"
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
}

export const CountryDrawer: React.FC<CountryDrawerProps> = ({
  feature,
  currentEra,
  onClose,
}) => {
  if (!feature) return null

  const props = feature.properties || {}
  const name = props.name || props.NAME || "Unknown Territory"
  const formalName = props.formal_name || props.FORMAL_EN || props.FORMAL_FR
  const iso = props.iso_a3 || props.ISO_A3 || props.ADM0_A3
  const continent = props.CONTINENT || props.REGION_UN || props.REGION_WB
  const economy = props.ECONOMY
  const sovereignty = props.SOVEREIGNT || props.CONTROLLIN
  const cultureMeta = props.culture_metadata

  const meta = getEntityMetadata(name, props)
  const color = meta.color
  const canonicalName = meta.canonicalName
  const cultureGroup = meta.cultureGroup

  const partOf = (props.PARTOF || props.part_of || "").trim()
  const subjectTo = (props.SUBJECTO || props.subject_to || props.SUBCTO || "").trim()
  const subjugation = getSubjugationInfo(name, props)
  const borderPrecision = getBorderPrecision(props)

  const parentColor = partOf ? getCountryColor(partOf, { name: partOf }) : null

  return (
    <div className="country-drawer">
      <div className="drawer-header">
        <div className="drawer-title-group">
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span className="drawer-tag">{currentEra?.year_label || "Historical Era"}</span>
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
          <h3 className="drawer-title">{name}</h3>
          {formalName && formalName !== name && (
            <div className="drawer-subtitle">{formalName}</div>
          )}
        </div>
        <button className="drawer-close-btn" onClick={onClose} aria-label="Close">
          ✕
        </button>
      </div>

      <div className="drawer-content">
        {cultureGroup && (
          <div className="drawer-row">
            <span className="drawer-label">Culture Sphere:</span>
            <span className="drawer-value badge" style={{ borderColor: color }}>
              {cultureGroup}
            </span>
          </div>
        )}

        {partOf && partOf.toLowerCase() !== name.toLowerCase() && (
          <div className="drawer-row">
            <span className="drawer-label">Part of (Parent):</span>
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
              {partOf}
            </span>
          </div>
        )}

        {subjugation.isSubjugated && subjectTo && (
          <div className="drawer-row">
            <span className="drawer-label">Subjugated to:</span>
            <span
              className="drawer-value badge"
              style={{
                background: "repeating-linear-gradient(45deg, rgba(239, 68, 68, 0.2), rgba(239, 68, 68, 0.2) 6px, rgba(56, 189, 248, 0.2) 6px, rgba(56, 189, 248, 0.2) 12px)",
                color: "#f87171",
                border: "1px solid rgba(239, 68, 68, 0.4)",
                fontWeight: 600,
              }}
            >
              {subjectTo}
            </span>
          </div>
        )}


        {canonicalName && canonicalName !== name && (
          <div className="drawer-row">
            <span className="drawer-label">Civilization / Lineage:</span>
            <span className="drawer-value">{canonicalName}</span>
          </div>
        )}

        {cultureMeta?.historical_period && (
          <div className="drawer-row">
            <span className="drawer-label">Historical Period:</span>
            <span className="drawer-value">{cultureMeta.historical_period}</span>
          </div>
        )}

        {cultureMeta?.period_label && (
          <div className="drawer-row">
            <span className="drawer-label">Documented Era:</span>
            <span
              className="drawer-value badge"
              style={{
                backgroundColor: "rgba(168, 85, 247, 0.15)",
                color: "#c084fc",
                border: "1px solid rgba(168, 85, 247, 0.3)",
              }}
            >
              {cultureMeta.period_label}
            </span>
          </div>
        )}

        {cultureMeta?.capital && (
          <div className="drawer-row">
            <span className="drawer-label">Capital / Center:</span>
            <span className="drawer-value">{cultureMeta.capital}</span>
          </div>
        )}

        <div className="drawer-row">
          <span className="drawer-label">Border Precision:</span>
          {borderPrecision === 3 ? (
            <span
              className="drawer-value badge"
              style={{ backgroundColor: "rgba(34, 197, 94, 0.15)", color: "#4ade80", border: "1px solid rgba(34, 197, 94, 0.3)" }}
            >
              Exact (Thin Line)
            </span>
          ) : borderPrecision === 2 ? (
            <span
              className="drawer-value badge"
              style={{ backgroundColor: "rgba(245, 158, 11, 0.15)", color: "#fbbf24", border: "1px solid rgba(245, 158, 11, 0.3)" }}
            >
              Approximate (Medium Line)
            </span>
          ) : (
            <span
              className="drawer-value badge"
              style={{ backgroundColor: "rgba(148, 163, 184, 0.15)", color: "#cbd5e1", border: "1px solid rgba(148, 163, 184, 0.3)" }}
            >
              Frontier / Estimate (Thick Line)
            </span>
          )}
        </div>

        {props.elevation_tier !== undefined && props.elevation_tier !== null && (
          <div className="drawer-row">
            <span className="drawer-label">3D Elevation:</span>
            {Number(props.elevation_tier) === 0 ? (
              <span
                className="drawer-value badge"
                style={{ backgroundColor: "rgba(100, 116, 139, 0.15)", color: "#94a3b8", border: "1px solid rgba(100, 116, 139, 0.3)" }}
              >
                Base Layer (Tier 0)
              </span>
            ) : Number(props.elevation_tier) === 1 ? (
              <span
                className="drawer-value badge"
                style={{ backgroundColor: "rgba(56, 189, 248, 0.15)", color: "#38bdf8", border: "1px solid rgba(56, 189, 248, 0.3)" }}
              >
                Tier 1 (Sub-Entity / Overlap)
              </span>
            ) : Number(props.elevation_tier) === 2 ? (
              <span
                className="drawer-value badge"
                style={{ backgroundColor: "rgba(168, 85, 247, 0.15)", color: "#c084fc", border: "1px solid rgba(168, 85, 247, 0.3)" }}
              >
                Tier 2 (Nested Sub-Entity)
              </span>
            ) : Number(props.elevation_tier) === 3 ? (
              <span
                className="drawer-value badge"
                style={{ backgroundColor: "rgba(236, 72, 153, 0.15)", color: "#f472b6", border: "1px solid rgba(236, 72, 153, 0.3)" }}
              >
                Tier 3 (Sub-Entity of Sub-Entity)
              </span>
            ) : (
              <span
                className="drawer-value badge"
                style={{ backgroundColor: "rgba(244, 63, 94, 0.15)", color: "#fb7185", border: "1px solid rgba(244, 63, 94, 0.3)" }}
              >
                Tier {props.elevation_tier} (Deep Micro-Terrace)
              </span>
            )}
          </div>
        )}

        {iso && (
          <div className="drawer-row">
            <span className="drawer-label">ISO / Code:</span>
            <span className="drawer-value badge">{iso}</span>
          </div>
        )}

        {sovereignty && sovereignty !== name && !subjugation.isSubjugated && (
          <div className="drawer-row">
            <span className="drawer-label">Sovereignty / Control:</span>
            <span className="drawer-value">{sovereignty}</span>
          </div>
        )}

        {continent && (
          <div className="drawer-row">
            <span className="drawer-label">Region / Continent:</span>
            <span className="drawer-value">{continent}</span>
          </div>
        )}

        {economy && (
          <div className="drawer-row">
            <span className="drawer-label">Classification:</span>
            <span className="drawer-value">{economy}</span>
          </div>
        )}

        {props.POP_EST && (
          <div className="drawer-row">
            <span className="drawer-label">Est. Population:</span>
            <span className="drawer-value">
              {Number(props.POP_EST).toLocaleString()}
            </span>
          </div>
        )}

        {props.AREA && (
          <div className="drawer-row">
            <span className="drawer-label">Area (approx):</span>
            <span className="drawer-value">
              {Number(props.AREA).toLocaleString()} sq km
            </span>
          </div>
        )}

        {cultureMeta?.summary_en && (
          <div className="drawer-summary-box">
            <div className="drawer-summary-header">
              <span className="drawer-summary-title">About this Culture</span>
              {cultureMeta.wikipedia_url_en && (
                <a
                  href={cultureMeta.wikipedia_url_en}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="drawer-wiki-link"
                  title="Open in Wikipedia"
                >
                  Wikipedia ↗
                </a>
              )}
            </div>
            <p className="drawer-summary-text">{cultureMeta.summary_en}</p>
          </div>
        )}

        {!cultureMeta?.summary_en && cultureMeta?.wikipedia_url_en && (
          <div className="drawer-row" style={{ marginTop: "4px" }}>
            <span className="drawer-label">Wikipedia:</span>
            <a
              href={cultureMeta.wikipedia_url_en}
              target="_blank"
              rel="noopener noreferrer"
              className="drawer-wiki-link"
            >
              Wikipedia Article ↗
            </a>
          </div>
        )}

        <div className="drawer-footer">
          <span>
            Data source:{" "}
            <a
              href="https://github.com/aourednik/historical-basemaps/tree/master/geojson"
              target="_blank"
              rel="noopener noreferrer"
            >
              historical-basemaps
            </a>{" "}
            (GPL-3.0)
          </span>
        </div>
      </div>
    </div>
  )
}

