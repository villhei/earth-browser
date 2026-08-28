import { describe, it, expect } from "vitest"
import * as THREE from "three"
import {
  polar2Cartesian,
  isPointBehindGlobe,
  projectToScreen,
  estimateGeometryArea,
  computeGeometryCentroid,
  getFeaturePriority,
  checkAABBOverlap,
  computePlacedLabels,
  GLOBE_RADIUS,
} from "./labels"
import { GeoJSONFeature } from "../../types"

describe("labels: coordinate & geometry utilities", () => {
  it("converts polar coordinates to cartesian accurately", () => {
    // North pole
    const north = polar2Cartesian(90, 0, 0, GLOBE_RADIUS)
    expect(north.x).toBeCloseTo(0, 4)
    expect(north.y).toBeCloseTo(100, 4)
    expect(north.z).toBeCloseTo(0, 4)

    // South pole
    const south = polar2Cartesian(-90, 0, 0, GLOBE_RADIUS)
    expect(south.x).toBeCloseTo(0, 4)
    expect(south.y).toBeCloseTo(-100, 4)
    expect(south.z).toBeCloseTo(0, 4)

    // Equator / Prime Meridian (0 lat, 0 lng)
    const equatorPrime = polar2Cartesian(0, 0, 0, GLOBE_RADIUS)
    expect(equatorPrime.x).toBeCloseTo(0, 4)
    expect(equatorPrime.y).toBeCloseTo(0, 4)
    expect(equatorPrime.z).toBeCloseTo(100, 4)

    // Equator / 90 East (0 lat, 90 lng)
    const equatorEast = polar2Cartesian(0, 90, 0, GLOBE_RADIUS)
    expect(equatorEast.x).toBeCloseTo(100, 4)
    expect(equatorEast.y).toBeCloseTo(0, 4)
    expect(equatorEast.z).toBeCloseTo(0, 4)
  })

  it("accurately detects points behind the globe horizon", () => {
    const cameraPos = new THREE.Vector3(0, 0, 300)

    // Point directly facing camera at (0, 0, 100)
    const frontPoint = new THREE.Vector3(0, 0, 100)
    expect(isPointBehindGlobe(frontPoint, cameraPos, GLOBE_RADIUS)).toBe(false)

    // Point on exact opposite side of globe (0, 0, -100)
    const backPoint = new THREE.Vector3(0, 0, -100)
    expect(isPointBehindGlobe(backPoint, cameraPos, GLOBE_RADIUS)).toBe(true)

    // Point beyond the visible tangent horizon
    const beyondHorizonPoint = new THREE.Vector3(100, 0, 0)
    expect(isPointBehindGlobe(beyondHorizonPoint, cameraPos, GLOBE_RADIUS)).toBe(true)
  })

  it("projects 3D coordinates into 2D screen coordinates", () => {
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000)
    camera.position.set(0, 0, 300)
    camera.lookAt(0, 0, 0)
    camera.updateMatrixWorld()
    camera.updateProjectionMatrix()

    // Origin (0,0,0) projects directly to screen center (400, 300) on 800x600 canvas
    const centerPoint = new THREE.Vector3(0, 0, 0)
    const screenCenter = projectToScreen(centerPoint, camera, 800, 600)
    expect(screenCenter).not.toBeNull()
    expect(screenCenter!.x).toBeCloseTo(400, 1)
    expect(screenCenter!.y).toBeCloseTo(300, 1)

    // Point behind camera should return null or z > 1
    const behindCamera = new THREE.Vector3(0, 0, 500)
    const behindProj = projectToScreen(behindCamera, camera, 800, 600)
    expect(behindProj).toBeNull()
  })

  it("estimates geometry area and computes fallback centroid", () => {
    const polygonGeom = {
      type: "Polygon",
      coordinates: [
        [
          [10, 20],
          [20, 20],
          [20, 30],
          [10, 30],
          [10, 20],
        ],
      ],
    }

    const area = estimateGeometryArea(polygonGeom)
    expect(area).toBeGreaterThan(0)

    const centroid = computeGeometryCentroid(polygonGeom)
    expect(centroid).not.toBeNull()
    expect(centroid!.lng).toBeCloseTo(14, 1)
    expect(centroid!.lat).toBeCloseTo(24, 1)
  })
})

describe("labels: priority and collision detection", () => {
  it("prioritizes selected and hovered features", () => {
    const feature1: GeoJSONFeature = {
      type: "Feature",
      id: "feat-1",
      properties: { name: "Small Island", AREA: 50 },
      geometry: { type: "Point", coordinates: [0, 0] },
    }

    const feature2: GeoJSONFeature = {
      type: "Feature",
      id: "feat-2",
      properties: { name: "Big Empire", AREA: 500000 },
      geometry: { type: "Point", coordinates: [0, 0] },
    }

    // Normally big empire has higher priority
    expect(getFeaturePriority(feature2)).toBeGreaterThan(getFeaturePriority(feature1))

    // When small island is selected, it takes absolute precedence
    const prioritySelected = getFeaturePriority(feature1, "feat-1", null)
    expect(prioritySelected).toBeGreaterThan(getFeaturePriority(feature2))

    // When small island is hovered, it also takes precedence
    const priorityHovered = getFeaturePriority(feature1, null, "feat-1")
    expect(priorityHovered).toBeGreaterThan(getFeaturePriority(feature2))
  })

  it("correctly identifies overlapping bounding boxes", () => {
    const boxA = { minX: 100, minY: 100, maxX: 200, maxY: 150 }
    const boxB = { minX: 150, minY: 120, maxX: 250, maxY: 180 }
    const boxFar = { minX: 400, minY: 400, maxX: 500, maxY: 450 }

    expect(checkAABBOverlap(boxA, boxB)).toBe(true)
    expect(checkAABBOverlap(boxA, boxFar)).toBe(false)
  })
})

describe("labels: computePlacedLabels algorithm", () => {
  it("resolves label collisions so no output boxes overlap", () => {
    const camera = new THREE.PerspectiveCamera(45, 800 / 600, 0.1, 1000)
    camera.position.set(0, 0, 320)
    camera.lookAt(0, 0, 0)
    camera.updateMatrixWorld()
    camera.updateProjectionMatrix()

    // 4 features very close together in Western Europe (lat 48, lng 2)
    const features: GeoJSONFeature[] = [
      {
        type: "Feature",
        id: "france",
        properties: { name: "Kingdom of France", labelLat: 48.8, labelLng: 2.3, AREA: 550000 },
        geometry: { type: "Point", coordinates: [2.3, 48.8] },
      },
      {
        type: "Feature",
        id: "paris",
        properties: { name: "Paris County", labelLat: 48.85, labelLng: 2.35, AREA: 1000 },
        geometry: { type: "Point", coordinates: [2.35, 48.85] },
      },
      {
        type: "Feature",
        id: "normandy",
        properties: { name: "Duchy of Normandy", labelLat: 49.1, labelLng: 0.3, AREA: 30000 },
        geometry: { type: "Point", coordinates: [0.3, 49.1] },
      },
      {
        type: "Feature",
        id: "japan",
        properties: { name: "Japan", labelLat: 36.2, labelLng: 138.2, AREA: 377000 },
        geometry: { type: "Point", coordinates: [138.2, 36.2] },
      },
    ]

    const placed = computePlacedLabels(features, camera, 800, 600, {
      layerAltitude: 0.005,
      paddingX: 8,
      paddingY: 6,
    })

    // Verify all placed labels have non-overlapping bounding boxes
    for (let i = 0; i < placed.length; i++) {
      for (let j = i + 1; j < placed.length; j++) {
        const overlaps = checkAABBOverlap(placed[i].box, placed[j].box, 0, 0)
        expect(overlaps).toBe(false)
      }
    }

    // Kingdom of France should be placed over small Paris County due to higher area priority
    const placedNames = placed.map((p) => p.name)
    expect(placedNames).toContain("Kingdom of France")
    expect(placedNames).not.toContain("Paris County")
  })

  it("maintains fixed screen scaling across different zoom levels", () => {
    const cameraFar = new THREE.PerspectiveCamera(45, 800 / 600, 0.1, 2000)
    cameraFar.position.set(0, 0, 600) // Zoomed out far
    cameraFar.lookAt(0, 0, 0)
    cameraFar.updateMatrixWorld()
    cameraFar.updateProjectionMatrix()

    const cameraNear = new THREE.PerspectiveCamera(45, 800 / 600, 0.1, 2000)
    cameraNear.position.set(0, 0, 160) // Zoomed in close
    cameraNear.lookAt(0, 0, 0)
    cameraNear.updateMatrixWorld()
    cameraNear.updateProjectionMatrix()

    const feature: GeoJSONFeature = {
      type: "Feature",
      id: "feat-test",
      properties: { name: "Equatorial Region", labelLat: 0, labelLng: 0, AREA: 100000 },
      geometry: { type: "Point", coordinates: [0, 0] },
    }

    const placedFar = computePlacedLabels([feature], cameraFar, 800, 600)
    const placedNear = computePlacedLabels([feature], cameraNear, 800, 600)

    expect(placedFar.length).toBe(1)
    expect(placedNear.length).toBe(1)

    // Font size in screen pixels is constant and consistent across zoom levels
    expect(placedFar[0].fontSize).toBe(placedNear[0].fontSize)
  })
})
