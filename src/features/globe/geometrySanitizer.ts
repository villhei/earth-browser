import { geoArea } from "d3-geo"
import { GeoJSONFeature } from "../../types"
import { isNeutralOrUnclaimed } from "./colors"

/**
 * Minimum spherical polygon area threshold in steradians (~50 km² / 0.005 deg²).
 * Eliminates collapsed 1D boundary artifacts, antennas, backtracking lines,
 * and microscopic GIS remnants while preserving legitimate sovereign territories.
 */
export const DEFAULT_MIN_SPHERICAL_AREA = 1e-6
const SPHERE_SURFACE_AREA = 4 * Math.PI

/**
 * Sanitizes a single polygon coordinate set ([outerRing, ...holes]):
 * 1. Rejects degenerate rings (< 4 coordinates).
 * 2. Computes spherical surface area via d3-geo.
 * 3. If area > 2*PI (wound clockwise on sphere / inverted complement):
 *    - Rejects if true complement area < minArea (sliver).
 *    - Rewinds ring coordinates to CCW if it is a valid larger polygon.
 * 4. If area <= 2*PI:
 *    - Rejects if area < minArea.
 */
export function sanitizePolygonCoords(
  poly: number[][][],
  minArea: number = DEFAULT_MIN_SPHERICAL_AREA
): number[][][] | null {
  if (!poly || !poly[0] || poly[0].length < 4) return null

  try {
    const area = geoArea({ type: "Polygon", coordinates: poly })

    // If area > 2*PI, the ring is wound clockwise and encloses the complementary globe
    if (area > 2 * Math.PI) {
      const trueArea = SPHERE_SURFACE_AREA - area
      if (trueArea < minArea) {
        return null // Degenerate sliver
      }

      // Rewind exterior ring (and any holes) to proper CCW orientation
      const rewound = poly.map((ring) => ring.slice().reverse())
      const rewoundArea = geoArea({ type: "Polygon", coordinates: rewound })
      return rewoundArea <= 2 * Math.PI ? rewound : null
    }

    // Standard CCW polygon
    if (area < minArea) {
      return null // Zero-area or microscopic sliver
    }

    return poly
  } catch {
    return null
  }
}

/**
 * Sanitizes a GeoJSON Feature by stripping zero-area/inverted degenerate sub-polygons.
 * Returns null if the entire feature consists of degenerate slivers or is unclaimed.
 */
export function sanitizeFeature(
  feature: GeoJSONFeature,
  minArea: number = DEFAULT_MIN_SPHERICAL_AREA
): GeoJSONFeature | null {
  if (!feature || !feature.geometry) return null

  const props = feature.properties || {}
  const name =
    props.name || props.NAME || props.NAME_LONG || props.formal_name || ""

  if (props.is_unclaimed || isNeutralOrUnclaimed(name)) {
    return null
  }

  const geom = feature.geometry
  if (!geom.coordinates || !Array.isArray(geom.coordinates)) {
    return null
  }

  if (geom.type === "Polygon") {
    const coords = geom.coordinates as number[][][]
    const cleaned = sanitizePolygonCoords(coords, minArea)
    if (!cleaned) return null
    return {
      ...feature,
      geometry: {
        ...geom,
        coordinates: cleaned,
      },
    }
  }

  if (geom.type === "MultiPolygon") {
    const coords = geom.coordinates as number[][][][]
    const validPolys: number[][][][] = []

    for (let i = 0; i < coords.length; i++) {
      const cleaned = sanitizePolygonCoords(coords[i], minArea)
      if (cleaned) {
        validPolys.push(cleaned)
      }
    }

    if (validPolys.length === 0) {
      return null
    }

    return {
      ...feature,
      geometry: {
        ...geom,
        coordinates: validPolys,
      },
    }
  }

  return feature
}

/**
 * Filters and sanitizes an array of GeoJSON features for 3D Globe rendering.
 */
export function sanitizeRenderableFeatures(
  features: GeoJSONFeature[] | undefined | null,
  minArea: number = DEFAULT_MIN_SPHERICAL_AREA
): GeoJSONFeature[] {
  if (!features || !Array.isArray(features)) return []

  const sanitized: GeoJSONFeature[] = []
  for (let i = 0; i < features.length; i++) {
    const cleaned = sanitizeFeature(features[i], minArea)
    if (cleaned) {
      sanitized.push(cleaned)
    }
  }

  return sanitized
}
