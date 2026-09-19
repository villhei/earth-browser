import { GeoJSONFeature, GeoJSONFeatureCollection, GlobeTexture } from "../../types"

export interface SurfaceOverlay {
  /** Decorative RGBA artwork on the same full-world equirectangular grid. */
  colorUrl: string
  /** Original full-resolution RGBA mask; alpha is the sole coverage authority. */
  coverageUrl: string
}

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

  /** Optional equirectangular base image overriding the selected built-in texture. */
  textureImageUrl?: string

  /** Optional equirectangular layer rendered above the globe and below territories. */
  surfaceOverlay?: SurfaceOverlay

  /** Optional RGBA equirectangular layer above the base and below surfaceOverlay. */
  surfaceUnderlayUrl?: string

  /**
   * Extrusion / altitude of country boundary polygons. Defaults to 0.002.
   */
  layerAltitude?: number

  /**
   * Multiplier for 3D elevation tiers on overlapping/nested territories.
   * Higher values create more pronounced terracing between sub-entities. Defaults to 0.3.
   */
  elevationScale?: number

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
   * Currently hovered feature ID or name to highlight.
   */
  hoveredFeatureId?: string | null

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
   * Base font size (in px) for country labels. Defaults to 14.
   */
  labelSize?: number

  /**
   * Collision and spacing tolerance (in px) for label appearance.
   * Lower values allow higher label density; higher values yield looser spacing.
   * Defaults to 10.
   */
  labelTolerance?: number

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
