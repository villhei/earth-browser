import React, { useState, useEffect } from "react"
import "./Attribution.css"

export const DATA_SOURCE_INFO = {
  name: "historical-basemaps",
  author: "André Ourednik",
  authorUrl: "https://ourednik.info/historicalmaps/",
  repoUrl: "https://github.com/aourednik/historical-basemaps/tree/master/geojson",
  license: "GPL-3.0",
  licenseUrl: "https://github.com/aourednik/historical-basemaps/blob/master/LICENSE",
  texturesSource: "NASA Earth Observatory (Visible Earth)",
  texturesUrl: "https://visibleearth.nasa.gov/",
}

export interface AttributionModalProps {
  isOpen?: boolean
  onClose?: () => void
}

export const AttributionModal: React.FC<AttributionModalProps> = ({
  isOpen = false,
  onClose,
}) => {

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen && onClose) {
        onClose()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="attribution-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="attribution-dialog-title"
    >
      <div
        className="attribution-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="attribution-modal-header">
          <div className="attribution-modal-title-group">
            <span className="attribution-modal-tag">Dataset & Legal Notices</span>
            <h3 id="attribution-dialog-title" className="attribution-modal-title">
              Data Attribution & Sources
            </h3>
          </div>
          <button
            className="attribution-modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        <div className="attribution-modal-body">
          <section className="attribution-section">
            <h4>Historical Boundaries & Geodata</h4>
            <p>
              The historical world country borders, empires, and cultural regions visualized across all 53 historical eras (123,000 BCE – 2010 CE) are sourced from the{" "}
              <strong>historical-basemaps</strong> project created and curated by{" "}
              <strong>{DATA_SOURCE_INFO.author}</strong>.
            </p>
            <div className="attribution-meta-card">
              <div className="attribution-meta-row">
                <span className="meta-label">Author:</span>
                <span className="meta-val">
                  <a
                    href={DATA_SOURCE_INFO.authorUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {DATA_SOURCE_INFO.author} (ourednik.info)
                  </a>
                </span>
              </div>
              <div className="attribution-meta-row">
                <span className="meta-label">Source Repository:</span>
                <span className="meta-val">
                  <a
                    href={DATA_SOURCE_INFO.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/aourednik/historical-basemaps
                  </a>
                </span>
              </div>
              <div className="attribution-meta-row">
                <span className="meta-label">Dataset License:</span>
                <span className="meta-val">
                  <a
                    href={DATA_SOURCE_INFO.licenseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="license-badge"
                  >
                    GNU General Public License v3.0 (GPL-3.0)
                  </a>
                </span>
              </div>
            </div>
          </section>

          <section className="attribution-section">
            <h4>Planetary Textures</h4>
            <p>
              High-resolution Earth basemap textures (Blue Marble, Day, Night, Dark) are provided courtesy of{" "}
              <a
                href={DATA_SOURCE_INFO.texturesUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                NASA Earth Observatory / Visible Earth
              </a>{" "}
              (Public Domain).
            </p>
          </section>

          <section className="attribution-section">
            <h4>Experimental Ice Sheet Overlay</h4>
            <p>
              Regional ice coverage: Dalton et al. (2023),{" "}
              <a href="https://doi.org/10.5281/zenodo.8161764" target="_blank" rel="noopener noreferrer">NADI-1 v1</a>{" "}
              (<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>),
              and Hughes et al. (2015 dataset; 2016 methods),{" "}
              <a href="https://doi.org/10.1594/PANGAEA.848117" target="_blank" rel="noopener noreferrer">DATED-1</a>{" "}
              (<a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener noreferrer">CC BY 3.0</a>).
              DATED-1 is used only for 10,000 and 8,000 BCE.
            </p>
            <p>
              Source polygons were merged and rasterized into partial regional masks.
              AI-generated ice color and surface detail are illustrative; coverage comes from the original masks.
              Selected source dates are 51 years older than the displayed eras.
              Scientific acceptance remains pending. Uncovered regions do not establish ice absence;
              modern snow visible on Blue Marble is not historical ice evidence.
            </p>
          </section>

          <section className="attribution-section">
            <h4>Core Technologies</h4>
            <p>
              Interactive 3D WebGL globe visualizer built with <strong>Three.js</strong>, <strong>ThreeGlobe</strong>, and <strong>React</strong>. High-performance spatial geometry storage, simplification, and surface centroid calculations powered by <strong>PostGIS</strong> and <strong>PostgreSQL</strong>.
            </p>
          </section>
        </div>


        <div className="attribution-modal-footer">
          <button
            className="attribution-btn-primary"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export interface AttributionProps {
  isModalOpen?: boolean
  onOpenModal?: () => void
  onCloseModal?: () => void
}

export const Attribution: React.FC<AttributionProps> = ({
  isModalOpen: controlledIsOpen,
  onOpenModal,
  onCloseModal,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false)
  const isModalOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen
  const handleOpen = onOpenModal || (() => setInternalIsOpen(true))
  const handleClose = onCloseModal || (() => setInternalIsOpen(false))

  return (
    <>
      <div className="app-attribution" aria-label="Map Data Attribution">
        <span className="attribution-text">
          Map data:{" "}
          <a
            href={DATA_SOURCE_INFO.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="attribution-link"
          >
            {DATA_SOURCE_INFO.author} / {DATA_SOURCE_INFO.name}
          </a>{" "}
          (
          <a
            href={DATA_SOURCE_INFO.licenseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="attribution-license"
          >
            {DATA_SOURCE_INFO.license}
          </a>
          )
        </span>
        <button
          className="attribution-info-btn"
          onClick={handleOpen}
          title="Data Sources & Attribution"
          aria-label="View data sources and attribution"
        >
          ℹ
        </button>
      </div>

      <AttributionModal
        isOpen={isModalOpen}
        onClose={handleClose}
      />
    </>
  )
}
