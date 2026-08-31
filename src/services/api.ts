import { Era, GeoJSONFeatureCollection } from "../types"

export function resolveDataPath(relativePath: string, baseUrl?: string): string {
  const base = baseUrl ?? (import.meta.env?.BASE_URL || "./")
  const cleanBase = base.endsWith("/") ? base : `${base}/`
  const cleanPath = relativePath.startsWith("/") ? relativePath.slice(1) : relativePath
  return `${cleanBase}${cleanPath}`
}

const geojsonCache = new Map<string, GeoJSONFeatureCollection>()

export async function fetchEras(): Promise<Era[]> {
  const staticUrl = resolveDataPath("data/eras.json")
  try {
    const response = await fetch(staticUrl)
    if (response.ok) {
      return await response.json()
    }
  } catch {
    // Fall back to server endpoint if static file is unavailable in dev
  }

  // Fallback to Express backend in dev mode
  const response = await fetch("/api/eras")
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

  const staticUrl = resolveDataPath(`data/eras/${idOrSlug}.json`)
  try {
    const response = await fetch(staticUrl)
    if (response.ok) {
      const data: GeoJSONFeatureCollection = await response.json()
      geojsonCache.set(idOrSlug, data)
      if (data.era?.id && data.era?.slug) {
        geojsonCache.set(data.era.id, data)
        geojsonCache.set(data.era.slug, data)
      }
      return data
    }
  } catch {
    // Fall back to server endpoint if static file is unavailable in dev
  }

  // Fallback to Express backend in dev mode
  const response = await fetch(`/api/eras/${idOrSlug}/geojson`)
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

