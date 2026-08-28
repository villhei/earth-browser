import React from "react"
import { GeoJSONFeature, Era } from "../types"
import { getEntityMetadata } from "../features/globe/colors"
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

  const meta = getEntityMetadata(name, props)
  const color = props.color || meta.color
  const canonicalName = props.canonical_name || meta.canonicalName
  const cultureGroup = props.culture_group || meta.cultureGroup

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

        {canonicalName && canonicalName !== name && (
          <div className="drawer-row">
            <span className="drawer-label">Civilization / Lineage:</span>
            <span className="drawer-value">{canonicalName}</span>
          </div>
        )}

        {iso && (
          <div className="drawer-row">
            <span className="drawer-label">ISO / Code:</span>
            <span className="drawer-value badge">{iso}</span>
          </div>
        )}

        {sovereignty && sovereignty !== name && (
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
      </div>
    </div>
  )
}
