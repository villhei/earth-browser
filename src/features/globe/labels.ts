import * as THREE from "three"
import { GeoJSONFeature, GeoJSONGeometry } from "../../types"

export const GLOBE_RADIUS = 100

export interface BoundingBox2D {
  minX: number
  minY: number
  maxX: number
  maxY: number
}

export interface PlacedLabel {
  id: string
  name: string
  formalName?: string | null
  feature: GeoJSONFeature
  x: number
  y: number
  dotX: number
  dotY: number
  textX: number
  textY: number
  box: BoundingBox2D
  priority: number
  isSelected: boolean
  isHovered: boolean
  fontSize: number
  fontWeight: number | string
}

export interface LabelComputeOptions {
  layerAltitude?: number
  selectedFeatureId?: string | null
  hoveredFeatureId?: string | null
  minFontScale?: number
  paddingX?: number
  paddingY?: number
  maxLabels?: number
  baseFontSize?: number
  labelSize?: number
  labelTolerance?: number
  elevationScale?: number
}

/**
 * Converts geographic coordinates (latitude, longitude, relative altitude)
 * to 3D Cartesian coordinates matching ThreeGlobe convention.
 */
export function polar2Cartesian(
  lat: number,
  lng: number,
  relAltitude: number = 0,
  globeRadius: number = GLOBE_RADIUS,
): THREE.Vector3 {
  const phi = ((90 - lat) * Math.PI) / 180
  const theta = ((90 - lng) * Math.PI) / 180
  const r = globeRadius * (1 + relAltitude)
  const phiSin = Math.sin(phi)

  return new THREE.Vector3(
    r * phiSin * Math.cos(theta),
    r * Math.cos(phi),
    r * phiSin * Math.sin(theta),
  )
}

/**
 * Determines whether a 3D point on the globe is occluded behind the visible horizon
 * relative to the camera position.
 */
export function isPointBehindGlobe(
  pos: THREE.Vector3,
  cameraPos: THREE.Vector3,
  globeRadius: number = GLOBE_RADIUS,
): boolean {
  const povDist = cameraPos.length()
  const posDist = pos.length()
  if (povDist <= globeRadius) return false

  const povEdgeDist = Math.sqrt(povDist * povDist - globeRadius * globeRadius)
  const povPosDist = cameraPos.distanceTo(pos)

  if (povPosDist < povEdgeDist) {
    return false // Point is closer than visible horizon edge
  }

  const povEdgeAngle = Math.acos(povEdgeDist / povDist)
  const cosAngle =
    (povDist * povDist + povPosDist * povPosDist - posDist * posDist) /
    (2 * povDist * povPosDist)
  const clampedCos = Math.max(-1, Math.min(1, cosAngle))
  const povPosAngle = Math.acos(clampedCos)

  // Point is behind globe if within the horizon cone and further than edge
  return povPosAngle < povEdgeAngle
}

/**
 * Projects a 3D world coordinate to 2D screen pixel space.
 * Returns null if the point is behind the camera plane.
 */
export function projectToScreen(
  pos: THREE.Vector3,
  camera: THREE.Camera,
  width: number,
  height: number,
): { x: number; y: number; z: number } | null {
  const projected = pos.clone().project(camera)

  // Check if point is outside camera frustum depth range (-1 to 1)
  if (projected.z < -1 || projected.z > 1) {
    return null
  }

  const x = ((projected.x + 1) / 2) * width
  const y = ((-projected.y + 1) / 2) * height

  return { x, y, z: projected.z }
}

/**
 * Estimates approximate surface area from GeoJSON geometry coordinates
 * when precomputed area properties are unavailable.
 */
export function estimateGeometryArea(
  geometry: GeoJSONGeometry | undefined,
): number {
  if (
    !geometry ||
    !geometry.coordinates ||
    !Array.isArray(geometry.coordinates)
  ) {
    return 1000
  }

  let minX = Infinity
  let maxX = -Infinity
  let minY = Infinity
  let maxY = -Infinity

  function scan(coords: any) {
    if (!Array.isArray(coords)) return
    if (
      coords.length >= 2 &&
      typeof coords[0] === "number" &&
      typeof coords[1] === "number"
    ) {
      const [x, y] = coords
      if (x < minX) minX = x
      if (x > maxX) maxX = x
      if (y < minY) minY = y
      if (y > maxY) maxY = y
    } else {
      for (let i = 0; i < coords.length; i++) {
        scan(coords[i])
      }
    }
  }

  scan(geometry.coordinates)

  if (minX === Infinity || maxX === -Infinity) {
    return 1000
  }

  const width = Math.abs(maxX - minX)
  const height = Math.abs(maxY - minY)
  const midLat = (((minY + maxY) / 2) * Math.PI) / 180
  return Math.max(1, width * height * Math.cos(midLat) * 10000)
}

/**
 * Computes polygon ring centroid and approximate area.
 * Unwraps longitudes across anti-meridian to prevent artificial Atlantic/ocean centroids.
 */
function computeRingCentroid(
  ring: number[][],
): { lng: number; lat: number; area: number } | null {
  if (!ring || ring.length < 3) return null
  const refLng = ring[0][0]
  let area2 = 0
  let cx = 0
  let cy = 0

  for (let i = 0; i < ring.length - 1; i++) {
    let x1 = ring[i][0]
    let y1 = ring[i][1]
    let x2 = ring[i + 1][0]
    let y2 = ring[i + 1][1]

    // Unwrap longitude relative to reference vertex
    if (x1 - refLng > 180) x1 -= 360
    if (x1 - refLng < -180) x1 += 360
    if (x2 - refLng > 180) x2 -= 360
    if (x2 - refLng < -180) x2 += 360

    const cross = x1 * y2 - x2 * y1
    area2 += cross
    cx += (x1 + x2) * cross
    cy += (y1 + y2) * cross
  }

  const absArea = Math.abs(area2) / 2
  if (absArea < 1e-7 || Math.abs(area2) < 1e-7) {
    let sumX = 0
    let sumY = 0
    for (let i = 0; i < ring.length; i++) {
      let x = ring[i][0]
      if (x - refLng > 180) x -= 360
      if (x - refLng < -180) x += 360
      sumX += x
      sumY += ring[i][1]
    }
    let finalLng = sumX / ring.length
    while (finalLng > 180) finalLng -= 360
    while (finalLng < -180) finalLng += 360
    return { lng: finalLng, lat: sumY / ring.length, area: absArea }
  }

  let finalLng = cx / (3 * area2)
  let finalLat = cy / (3 * area2)
  while (finalLng > 180) finalLng -= 360
  while (finalLng < -180) finalLng += 360

  return { lng: finalLng, lat: finalLat, area: absArea }
}

/**
 * Computes primary landmass centroid fallback for Polygon and MultiPolygon geometries.
 * For multi-island archipelagos and maritime realms, selects the largest polygon by area
 * so label anchors are placed on actual land rather than floating in open ocean.
 */
export function computeGeometryCentroid(
  geometry: GeoJSONGeometry | undefined,
): { lat: number; lng: number } | null {
  if (
    !geometry ||
    !geometry.coordinates ||
    !Array.isArray(geometry.coordinates)
  ) {
    return null
  }

  if (geometry.type === "Polygon") {
    const ring = geometry.coordinates[0]
    const res = computeRingCentroid(ring)
    return res ? { lng: res.lng, lat: res.lat } : null
  }

  if (geometry.type === "MultiPolygon") {
    let maxArea = -1
    let bestCentroid: { lng: number; lat: number } | null = null

    for (const poly of geometry.coordinates) {
      if (!Array.isArray(poly) || poly.length === 0) continue
      const ring = poly[0]
      const res = computeRingCentroid(ring)
      if (res && res.area > maxArea) {
        maxArea = res.area
        bestCentroid = { lng: res.lng, lat: res.lat }
      }
    }
    return bestCentroid
  }

  // Fallback for Point or generic coordinates
  let sumX = 0
  let sumY = 0
  let count = 0

  function scan(coords: any) {
    if (!Array.isArray(coords)) return
    if (
      coords.length >= 2 &&
      typeof coords[0] === "number" &&
      typeof coords[1] === "number"
    ) {
      sumX += coords[0]
      sumY += coords[1]
      count++
    } else {
      for (let i = 0; i < coords.length; i++) {
        scan(coords[i])
      }
    }
  }

  scan(geometry.coordinates)
  if (count === 0) return null

  return { lng: sumX / count, lat: sumY / count }
}

/**
 * Calculates priority score for a country feature.
 * Higher priority items are placed first during collision resolution.
 */
export function getFeaturePriority(
  feature: GeoJSONFeature,
  selectedFeatureId?: string | null,
  hoveredFeatureId?: string | null,
): number {
  const name = feature.properties?.name || ""
  const id = feature.id || name

  // 1. Selected country is top priority
  if (
    selectedFeatureId &&
    (id === selectedFeatureId || name === selectedFeatureId)
  ) {
    return 1_000_000_000
  }

  // 2. Hovered country is second highest priority
  if (
    hoveredFeatureId &&
    (id === hoveredFeatureId || name === hoveredFeatureId)
  ) {
    return 500_000_000
  }

  const props = feature.properties || {}

  // 3. Precomputed area from GIS properties
  if (typeof props.AREA === "number" && props.AREA > 0) {
    return props.AREA
  }
  if (typeof props.area === "number" && props.area > 0) {
    return props.area
  }
  if (typeof props.scalerank === "number") {
    return (10 - props.scalerank) * 100_000
  }
  if (typeof props.POP_EST === "number" && props.POP_EST > 0) {
    return props.POP_EST / 100
  }

  // 4. Estimate from geometry bounds
  return estimateGeometryArea(feature.geometry)
}

/**
 * Checks if two 2D axis-aligned bounding boxes overlap.
 */
export function checkAABBOverlap(
  a: BoundingBox2D,
  b: BoundingBox2D,
  padX: number = 0,
  padY: number = 0,
): boolean {
  return (
    a.minX - padX < b.maxX + padX &&
    a.maxX + padX > b.minX - padX &&
    a.minY - padY < b.maxY + padY &&
    a.maxY + padY > b.minY - padY
  )
}

// Cache for measured text dimensions to avoid canvas measureText layout engine overhead
const textWidthCache = new Map<string, number>()

export function clearTextWidthCache(): void {
  textWidthCache.clear()
}

/**
 * Measures text width or provides a fast fallback estimate, using an in-memory cache.
 */
export function measureTextWidth(
  text: string,
  fontSize: number,
  ctx?: CanvasRenderingContext2D | null,
): number {
  const key = `${text}::${fontSize}`
  const cached = textWidthCache.get(key)
  if (cached !== undefined) {
    return cached
  }

  let width: number
  if (ctx) {
    width = ctx.measureText(text).width
  } else {
    // Fast approximate width for Latin typography (avg ~0.62em per char)
    width = text.length * fontSize * 0.62
  }

  // Cap cache size to avoid unbounded memory growth
  if (textWidthCache.size > 2000) {
    textWidthCache.clear()
  }
  textWidthCache.set(key, width)
  return width
}

/**
 * Computes non-overlapping, fixed-scaling country labels projected onto 2D screen space.
 */
export function computePlacedLabels(
  features: GeoJSONFeature[],
  camera: THREE.PerspectiveCamera | THREE.Camera,
  width: number,
  height: number,
  options: LabelComputeOptions = {},
  ctx?: CanvasRenderingContext2D | null,
): PlacedLabel[] {
  if (!features.length || width <= 0 || height <= 0) {
    return []
  }

  const {
    layerAltitude = 0.002,
    selectedFeatureId = null,
    hoveredFeatureId = null,
    maxLabels = 120,
  } = options

  const baseFontSize = options.baseFontSize ?? options.labelSize ?? 14
  const tolerance = options.labelTolerance ?? options.paddingX ?? 10
  const paddingX = tolerance
  const paddingY = options.paddingY ?? Math.max(2, Math.round(tolerance * 0.6))

  const cameraPos = new THREE.Vector3()
  camera.getWorldPosition(cameraPos)

  const candidates: Array<{
    feature: GeoJSONFeature
    id: string
    name: string
    formalName?: string | null
    lat: number
    lng: number
    worldPos: THREE.Vector3
    screenPos: { x: number; y: number; z: number }
    priority: number
    isSelected: boolean
    isHovered: boolean
    centerDistance: number
  }> = []

  const centerX = width / 2
  const centerY = height / 2

  // 1. Filter visible features and project to screen space
  for (const feat of features) {
    const props = feat.properties || {}
    const name = props.name || props.NAME || props.NAME_LONG
    if (!name || typeof name !== "string" || name.trim() === "") {
      continue
    }

    let lat = props.labelLat ?? props.label_lat
    let lng = props.labelLng ?? props.label_lng

    if (lat == null || lng == null) {
      const centroid = computeGeometryCentroid(feat.geometry)
      if (!centroid) continue
      lat = centroid.lat
      lng = centroid.lng
    }

    const tier = Number(props.elevation_tier ?? props.elevationTier ?? 0)
    const tierStep = 0.0025 * (options.elevationScale ?? 0.3)
    const featureAlt = layerAltitude + tier * tierStep

    const worldPos = polar2Cartesian(
      lat,
      lng,
      featureAlt + 0.002,
      GLOBE_RADIUS,
    )

    // Occlusion check against globe sphere horizon
    if (isPointBehindGlobe(worldPos, cameraPos, GLOBE_RADIUS)) {
      continue
    }

    const screenPos = projectToScreen(worldPos, camera, width, height)
    if (!screenPos) continue

    // Reject points far outside screen view
    if (
      screenPos.x < -80 ||
      screenPos.x > width + 80 ||
      screenPos.y < -80 ||
      screenPos.y > height + 80
    ) {
      continue
    }

    const id = (feat.id || name).toString()
    const isSelected =
      selectedFeatureId != null &&
      (id === selectedFeatureId || name === selectedFeatureId)
    const isHovered =
      hoveredFeatureId != null &&
      (id === hoveredFeatureId || name === hoveredFeatureId)

    const priority = getFeaturePriority(
      feat,
      selectedFeatureId,
      hoveredFeatureId,
    )

    const dx = screenPos.x - centerX
    const dy = screenPos.y - centerY
    const centerDistance = Math.sqrt(dx * dx + dy * dy)

    candidates.push({
      feature: feat,
      id,
      name,
      formalName: props.formal_name || props.FORMAL_EN || null,
      lat,
      lng,
      worldPos,
      screenPos,
      priority,
      isSelected,
      isHovered,
      centerDistance,
    })
  }

  // 2. Sort candidates by priority (Selected -> Hovered -> Area/Prominence -> Closer to center)
  candidates.sort((a, b) => {
    if (a.isSelected !== b.isSelected) return a.isSelected ? -1 : 1
    if (a.isHovered !== b.isHovered) return a.isHovered ? -1 : 1
    if (Math.abs(a.priority - b.priority) > 10) {
      return b.priority - a.priority
    }
    return a.centerDistance - b.centerDistance
  })

  // 3. Collision Resolution / AABB Placement
  const placedLabels: PlacedLabel[] = []
  const placedBoxes: BoundingBox2D[] = []

  for (const candidate of candidates) {
    if (
      placedLabels.length >= maxLabels &&
      !candidate.isSelected &&
      !candidate.isHovered
    ) {
      break
    }

    // Configurable font sizing based on baseFontSize
    const isMajor =
      candidate.priority > 500_000 ||
      candidate.isSelected ||
      candidate.isHovered
    const fontSize = candidate.isSelected
      ? baseFontSize + 1
      : isMajor
        ? baseFontSize
        : Math.max(8, baseFontSize - 1)
    const fontWeight = candidate.isSelected ? 700 : isMajor ? 600 : 500

    if (ctx) {
      ctx.font = `${fontWeight} ${fontSize}px "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
    }
    const textWidth = measureTextWidth(candidate.name, fontSize, ctx)
    const textHeight = fontSize

    // Anchor layout: Dot at (x, y), text centered horizontally above dot
    const dotX = candidate.screenPos.x
    const dotY = candidate.screenPos.y
    const textX = dotX
    const textY = dotY - 6 // 6px offset above dot

    const boxMinX = textX - textWidth / 2 - 4
    const boxMaxX = textX + textWidth / 2 + 4
    const boxMinY = textY - textHeight - 2
    const boxMaxY = dotY + 4 // include dot in bounding box

    const candidateBox: BoundingBox2D = {
      minX: Math.min(boxMinX, dotX - 4),
      minY: boxMinY,
      maxX: Math.max(boxMaxX, dotX + 4),
      maxY: boxMaxY,
    }

    // Overlap test against already placed labels
    let collides = false
    for (const placedBox of placedBoxes) {
      if (checkAABBOverlap(candidateBox, placedBox, paddingX, paddingY)) {
        collides = true
        break
      }
    }

    // Always place selected country even if tight, but skip others on collision
    if (collides && !candidate.isSelected) {
      continue
    }

    placedBoxes.push(candidateBox)
    placedLabels.push({
      id: candidate.id,
      name: candidate.name,
      formalName: candidate.formalName,
      feature: candidate.feature,
      x: candidate.screenPos.x,
      y: candidate.screenPos.y,
      dotX,
      dotY,
      textX,
      textY,
      box: candidateBox,
      priority: candidate.priority,
      isSelected: candidate.isSelected,
      isHovered: candidate.isHovered,
      fontSize,
      fontWeight,
    })
  }

  return placedLabels
}

/**
 * Renders high-DPI crisp country labels to a 2D canvas overlay.
 */
export function renderLabelsToCanvas(
  ctx: CanvasRenderingContext2D,
  placedLabels: PlacedLabel[],
  width: number,
  height: number,
  _dpr: number = 1,
): void {
  ctx.save()
  ctx.clearRect(0, 0, width, height)

  for (const label of placedLabels) {
    const {
      name,
      dotX,
      dotY,
      textX,
      textY,
      isSelected,
      isHovered,
      fontSize,
      fontWeight,
    } = label

    // 1. Draw Anchor Dot
    const dotRadius = isSelected ? 3.5 : isHovered ? 3.0 : 2.2
    ctx.beginPath()
    ctx.arc(dotX, dotY, dotRadius, 0, Math.PI * 2)

    if (isSelected) {
      ctx.fillStyle = "#38bdf8"
      ctx.shadowColor = "#38bdf8"
      ctx.shadowBlur = 6
    } else if (isHovered) {
      ctx.fillStyle = "#7dd3fc"
      ctx.shadowColor = "#38bdf8"
      ctx.shadowBlur = 4
    } else {
      ctx.fillStyle = "rgba(255, 255, 255, 0.95)"
      ctx.shadowColor = "transparent"
      ctx.shadowBlur = 0
    }
    ctx.fill()

    ctx.lineWidth = 1.2
    ctx.strokeStyle = "rgba(10, 15, 29, 0.85)"
    ctx.stroke()
    ctx.shadowBlur = 0 // reset shadow

    // 2. Draw Text with Outline / Halo for high legibility
    ctx.font = `${fontWeight} ${fontSize}px "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
    ctx.textAlign = "center"
    ctx.textBaseline = "bottom"

    // Outline / halo
    ctx.strokeStyle = "rgba(10, 15, 29, 0.92)"
    ctx.lineWidth = isSelected || isHovered ? 3.5 : 2.8
    ctx.lineJoin = "round"
    ctx.strokeText(name, textX, textY)

    // Text Fill
    if (isSelected) {
      ctx.fillStyle = "#38bdf8"
    } else if (isHovered) {
      ctx.fillStyle = "#bae6fd"
    } else {
      ctx.fillStyle = "#ffffff"
    }
    ctx.fillText(name, textX, textY)
  }

  ctx.restore()
}
