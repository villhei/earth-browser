import { Era, GeoJSONFeatureCollection } from "../types"

const API_BASE = "/api"

const geojsonCache = new Map<string, GeoJSONFeatureCollection>()

export async function fetchEras(): Promise<Era[]> {
  const response = await fetch(`${API_BASE}/eras`)
  if (!response.ok) {
    throw new Error(`Failed to fetch historical eras: ${response.statusText}`)
  }
  return response.json()
}

export async function fetchEraGeoJson(
  idOrSlug: string
): Promise<GeoJSONFeatureCollection> {
  if (geojsonCache.has(idOrSlug)) {
    return geojsonCache.get(idOrSlug)!
  }

  const response = await fetch(`${API_BASE}/eras/${idOrSlug}/geojson`)
  if (!response.ok) {
    throw new Error(
      `Failed to fetch GeoJSON for era '${idOrSlug}': ${response.statusText}`
    )
  }

  const data: GeoJSONFeatureCollection = await response.json()
  geojsonCache.set(idOrSlug, data)
  if (data.era?.id && data.era?.slug) {
    geojsonCache.set(data.era.id, data)
    geojsonCache.set(data.era.slug, data)
  }
  return data
}
