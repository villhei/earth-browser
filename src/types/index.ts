export interface Era {
  id: string
  slug: string
  name: string
  year_start: number
  year_end?: number
  year_label: string
  description: string
  feature_count: number
  created_at?: string
}

export interface GeoJSONProperties {
  name?: string
  formal_name?: string | null
  iso_a3?: string | null
  color?: string
  lineage_id?: string
  canonical_name?: string
  culture_group?: string
  is_unclaimed?: boolean
  border_precision?: number | null
  BORDERPRECISION?: number | null
  part_of?: string | null
  PARTOF?: string | null
  subject_to?: string | null
  SUBJECTO?: string | null
  elevation_tier?: number | null
  elevationTier?: number | null
  labelLng?: number
  labelLat?: number
  culture_metadata?: CultureMetadata | null
  [key: string]: any
}

export interface CultureMetadata {
  id?: string
  slug: string
  name: string
  name_fi?: string | null
  native_name?: string | null
  alternate_names?: string[]
  culture_group: string
  lineage_id?: string | null
  historical_period?: string | null
  year_start?: number | null
  year_end?: number | null
  period_label?: string | null
  period_label_fi?: string | null
  wikipedia_url_en?: string | null
  wikipedia_url_fi?: string | null
  wikidata_id?: string | null
  summary_en?: string | null
  summary_fi?: string | null
  capital?: string | null
  metadata?: Record<string, any>
}

export interface GeoJSONGeometry {
  type: "Polygon" | "MultiPolygon" | "Point" | string
  coordinates: any[]
}

export interface GeoJSONFeature {
  type: "Feature"
  id?: string
  geometry: GeoJSONGeometry
  properties: GeoJSONProperties
}

export interface GeoJSONFeatureCollection {
  type: "FeatureCollection"
  name?: string
  era?: Partial<Era>
  features: GeoJSONFeature[]
}

export enum GlobeTexture {
  EARTH_BLUE_MARBLE = "EARTH_BLUE_MARBLE",
  EARTH_DARK = "EARTH_DARK",
  EARTH_DAY = "EARTH_DAY",
  EARTH_NIGHT = "EARTH_NIGHT",
}

export interface GlobeConfig {
  layerAltitude: number
  texture: GlobeTexture
  showIceOverlay?: boolean
  showTerrainOverlay?: boolean
  sideColor: string
  strokeColor: string
  opacity: number
  showLabels?: boolean
  labelSize?: number
  labelTolerance?: number
  elevationScale?: number
  terrainHighlightStyle?: "contents" | "outline"
}
