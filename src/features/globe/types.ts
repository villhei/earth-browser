import { GeoJSONFeature, GeoJSONFeatureCollection, GlobeTexture } from "../../types"

export interface HistoricalGlobeProps {
  /**
   * GeoJSON FeatureCollection to render on the globe.
   */
  data: GeoJSONFeatureCollection | null

  /**
   * Whether the dataset is currently loading.
   */
  isLoading?: boolean

  /**
   * Earth sphere texture. Defaults to EARTH_BLUE_MARBLE.
   */
  texture?: GlobeTexture

  /**
   * Extrusion / altitude of country boundary polygons. Defaults to 0.005.
   */
  layerAltitude?: number

  /**
   * Polygon fill opacity (0 to 1). Defaults to 0.5.
   */
  opacity?: number

  /**
   * Polygon side / 3D extrusion color. Defaults to #FFFFFF.
   */
  sideColor?: string

  /**
   * Polygon boundary stroke color. Defaults to #000000.
   */
  strokeColor?: string

  /**
   * Currently selected feature ID or name to highlight.
   */
  selectedFeatureId?: string | null

  /**
   * Callback fired when a country/region polygon is clicked.
   */
  onFeatureClick?: (feature: GeoJSONFeature | null) => void

  /**
   * Callback fired when hovering over a country/region polygon.
   */
  onFeatureHover?: (feature: GeoJSONFeature | null) => void

  /**
   * Whether to display 2D screen-space non-overlapping country labels. Defaults to true.
   */
  showLabels?: boolean

  /**
   * Resolution (in angular degrees) of the polygon cap surface curvature.
   * Lower values yield finer subdivision that closely hugs the sphere surface,
   * preventing large region polygons from sinking into or intersecting the terrain.
   * Defaults to 3.
   */
  polygonCapCurvatureResolution?: number

  /**
   * Custom CSS style for the globe container.
   */
  style?: React.CSSProperties

  /**
   * Custom CSS class name for the globe container.
   */
  className?: string
}

export { GlobeTexture }
