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
  [key: string]: any
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
}
