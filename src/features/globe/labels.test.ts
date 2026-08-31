import { describe, it, expect } from "vitest"
import * as THREE from "three"
import {
  polar2Cartesian,
  cartesian2Polar,
  isPointBehindGlobe,
  projectToScreen,
  estimateGeometryArea,
  computeGeometryCentroid,
  getFeaturePriority,
  checkAABBOverlap,
  computePlacedLabels,
  renderLabelsToCanvas,
  measureTextWidth,
  clearTextWidthCache,
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

  it("converts cartesian coordinates back to polar (cartesian2Polar)", () => {
    const coords = [
      { lat: 0, lng: 0 },
      { lat: 45, lng: 90 },
      { lat: -30, lng: -60 },
      { lat: 60, lng: -120 },
      { lat: 90, lng: 0 },
      { lat: -90, lng: 0 },
    ]

    for (const { lat, lng } of coords) {
      const cart = polar2Cartesian(lat, lng, 0, GLOBE_RADIUS)
      const polar = cartesian2Polar(cart)
      expect(polar.lat).toBeCloseTo(lat, 1)
      if (Math.abs(lat) < 89) {
        expect(polar.lng).toBeCloseTo(lng, 1)
      }
    }
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
    expect(centroid!.lng).toBeCloseTo(15, 1)
    expect(centroid!.lat).toBeCloseTo(25, 1)

    // MultiPolygon with smaller island and larger mainland
    const multiPolygonGeom = {
      type: "MultiPolygon",
      coordinates: [
        [
          [
            [0, 0],
            [1, 0],
            [1, 1],
            [0, 1],
            [0, 0],
          ],
        ],
        [
          [
            [100, 20],
            [120, 20],
            [120, 40],
            [100, 40],
            [100, 20],
          ],
        ],
      ],
    }
    const multiCentroid = computeGeometryCentroid(multiPolygonGeom)
    expect(multiCentroid).not.toBeNull()
    // Should place centroid on the larger polygon (around 110, 30), not in the ocean between them
    expect(multiCentroid!.lng).toBeCloseTo(110, 1)
    expect(multiCentroid!.lat).toBeCloseTo(30, 1)
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

  it("respects custom baseFontSize and labelSize options", () => {
    const camera = new THREE.PerspectiveCamera(45, 800 / 600, 0.1, 1000)
    camera.position.set(0, 0, 320)
    camera.lookAt(0, 0, 0)
    camera.updateMatrixWorld()
    camera.updateProjectionMatrix()

    const feature: GeoJSONFeature = {
      type: "Feature",
      id: "feat-1",
      properties: { name: "Empire", labelLat: 0, labelLng: 0, AREA: 1000000 },
      geometry: { type: "Point", coordinates: [0, 0] },
    }

    const placedDefault = computePlacedLabels([feature], camera, 800, 600)
    const placedLarge = computePlacedLabels([feature], camera, 800, 600, { baseFontSize: 16 })
    const placedSmall = computePlacedLabels([feature], camera, 800, 600, { labelSize: 10 })

    expect(placedDefault[0].fontSize).toBe(14)
    expect(placedLarge[0].fontSize).toBe(16)
    expect(placedSmall[0].fontSize).toBe(10)
  })

  it("adjusts label density based on labelTolerance", () => {
    const camera = new THREE.PerspectiveCamera(45, 800 / 600, 0.1, 1000)
    camera.position.set(0, 0, 320)
    camera.lookAt(0, 0, 0)
    camera.updateMatrixWorld()
    camera.updateProjectionMatrix()

    // 3 adjacent points close to each other
    const features: GeoJSONFeature[] = [
      {
        type: "Feature",
        id: "f1",
        properties: { name: "Alpha", labelLat: 0, labelLng: 0, AREA: 100000 },
        geometry: { type: "Point", coordinates: [0, 0] },
      },
      {
        type: "Feature",
        id: "f2",
        properties: { name: "Beta", labelLat: 0, labelLng: 5, AREA: 90000 },
        geometry: { type: "Point", coordinates: [5, 0] },
      },
      {
        type: "Feature",
        id: "f3",
        properties: { name: "Gamma", labelLat: 0, labelLng: 10, AREA: 80000 },
        geometry: { type: "Point", coordinates: [10, 0] },
      },
    ]

    // Low tolerance (dense spacing) should allow more labels
    const placedDense = computePlacedLabels(features, camera, 800, 600, { labelTolerance: 1 })
    // High tolerance (loose spacing) requires more room, placing fewer labels
    const placedSpaced = computePlacedLabels(features, camera, 800, 600, { labelTolerance: 50 })

    expect(placedDense.length).toBeGreaterThanOrEqual(placedSpaced.length)
  })

  it("handles elevation_tier properties on features for 3D label placement", () => {
    const camera = new THREE.PerspectiveCamera(45, 800 / 600, 0.1, 1000)
    camera.position.set(0, 0, 320)
    camera.lookAt(0, 0, 0)
    camera.updateMatrixWorld()
    camera.updateProjectionMatrix()

    const tieredFeature: GeoJSONFeature = {
      type: "Feature",
      id: "san-marino",
      properties: {
        name: "San Marino",
        labelLat: 43.94,
        labelLng: 12.45,
        AREA: 61,
        elevation_tier: 2,
      },
      geometry: { type: "Point", coordinates: [12.45, 43.94] },
    }

    const placed = computePlacedLabels([tieredFeature], camera, 800, 600, {
      layerAltitude: 0.005,
    })

    expect(placed.length).toBe(1)
    expect(placed[0].name).toBe("San Marino")
    expect(placed[0].x).toBeGreaterThan(0)
    expect(placed[0].y).toBeGreaterThan(0)
  })

  it("applies elevationScale multiplier to label placement altitude", () => {
    const camera = new THREE.PerspectiveCamera(45, 800 / 600, 0.1, 1000)
    camera.position.set(0, 0, 320)
    camera.lookAt(0, 0, 0)
    camera.updateMatrixWorld()
    camera.updateProjectionMatrix()

    const subSubFeature: GeoJSONFeature = {
      type: "Feature",
      id: "enclave-nested",
      properties: {
        name: "Nested Enclave",
        labelLat: 0,
        labelLng: 0,
        AREA: 100,
        elevation_tier: 3,
      },
      geometry: { type: "Point", coordinates: [0, 0] },
    }

    const placedNormal = computePlacedLabels([subSubFeature], camera, 800, 600, {
      layerAltitude: 0.005,
      elevationScale: 1.0,
    })

    const placedScaled = computePlacedLabels([subSubFeature], camera, 800, 600, {
      layerAltitude: 0.005,
      elevationScale: 2.5,
    })

    expect(placedNormal.length).toBe(1)
    expect(placedScaled.length).toBe(1)
  })

  it("caches measured text widths correctly", () => {
    const mockCtx = {
      measureText: (text: string) => ({ width: text.length * 10 }),
    } as any

    // First call computes
    const width1 = measureTextWidth("Roman Empire", 14, mockCtx)
    expect(width1).toBe(120)

    // Second call returns cached value even without ctx
    const width2 = measureTextWidth("Roman Empire", 14, null)
    expect(width2).toBe(120)

    // Clear cache
    clearTextWidthCache()
    const width3 = measureTextWidth("Roman Empire", 14, null)
    // Fallback estimation after clear
    expect(width3).toBeCloseTo(12 * 14 * 0.62, 1)
  })

  it("prioritizes hovered cultural area over larger colliding neighbors", () => {
    const camera = new THREE.PerspectiveCamera(45, 800 / 600, 0.1, 1000)
    camera.position.set(0, 0, 320)
    camera.lookAt(0, 0, 0)
    camera.updateMatrixWorld()
    camera.updateProjectionMatrix()

    // 2 overlapping features: a large empire and a smaller cultural area
    const features: GeoJSONFeature[] = [
      {
        type: "Feature",
        id: "france",
        properties: { name: "Kingdom of France", labelLat: 48.8, labelLng: 2.3, AREA: 550000 },
        geometry: { type: "Point", coordinates: [2.3, 48.8] },
      },
      {
        type: "Feature",
        id: "normandy",
        properties: { name: "Duchy of Normandy", labelLat: 48.9, labelLng: 2.2, AREA: 30000 },
        geometry: { type: "Point", coordinates: [2.2, 48.9] },
      },
    ]

    // Without hover: France is placed, Normandy is omitted due to collision
    const unhovered = computePlacedLabels(features, camera, 800, 600, {
      paddingX: 10,
      paddingY: 10,
    })
    expect(unhovered.map((p) => p.name)).toContain("Kingdom of France")
    expect(unhovered.map((p) => p.name)).not.toContain("Duchy of Normandy")

    // When Normandy is hovered: Normandy takes priority over France, France is suppressed on collision
    const hoveredNormandy = computePlacedLabels(features, camera, 800, 600, {
      hoveredFeatureId: "normandy",
      paddingX: 10,
      paddingY: 10,
    })
    expect(hoveredNormandy.map((p) => p.name)).toContain("Duchy of Normandy")
    expect(hoveredNormandy.map((p) => p.name)).not.toContain("Kingdom of France")
    expect(hoveredNormandy.find((p) => p.id === "normandy")?.isHovered).toBe(true)
  })

  it("uses hoveredPoint when the feature's default centroid is behind the horizon", () => {
    const camera = new THREE.PerspectiveCamera(45, 800 / 600, 0.1, 1000)
    // Camera is looking at Europe/Africa (0, 0, 320)
    camera.position.set(0, 0, 320)
    camera.lookAt(0, 0, 0)
    camera.updateMatrixWorld()
    camera.updateProjectionMatrix()

    // Large empire with centroid in East Asia (behind the horizon from camera looking at prime meridian)
    const largeEmpire: GeoJSONFeature = {
      type: "Feature",
      id: "mongol-empire",
      properties: {
        name: "Mongol Empire",
        labelLat: 47.0,
        labelLng: 103.0, // Behind the globe from prime meridian view
        AREA: 24000000,
      },
      geometry: { type: "Point", coordinates: [103.0, 47.0] },
    }

    // Without hoveredPoint: Centroid is behind globe, so label is not visible
    const unhovered = computePlacedLabels([largeEmpire], camera, 800, 600)
    expect(unhovered.length).toBe(0)

    // When user hovers over a visible western outpost at (lat: 45, lng: 10)
    const hovered = computePlacedLabels([largeEmpire], camera, 800, 600, {
      hoveredFeatureId: "mongol-empire",
      hoveredPoint: { lat: 45.0, lng: 10.0 },
    })

    expect(hovered.length).toBe(1)
    expect(hovered[0].name).toBe("Mongol Empire")
    expect(hovered[0].isHovered).toBe(true)
    expect(hovered[0].x).toBeGreaterThan(0)
    expect(hovered[0].y).toBeGreaterThan(0)
  })

  it("renders hovered label to canvas without errors", () => {
    const mockCtx = {
      save: () => {},
      restore: () => {},
      clearRect: () => {},
      beginPath: () => {},
      arc: () => {},
      fill: () => {},
      stroke: () => {},
      strokeText: () => {},
      fillText: () => {},
    } as any

    const labels = [
      {
        id: "feat-1",
        name: "Hovered Culture",
        feature: { type: "Feature", id: "feat-1", properties: { name: "Hovered Culture" }, geometry: { type: "Point", coordinates: [0, 0] } } as GeoJSONFeature,
        x: 400,
        y: 300,
        dotX: 400,
        dotY: 300,
        textX: 400,
        textY: 294,
        box: { minX: 350, minY: 280, maxX: 450, maxY: 304 },
        priority: 1000000000,
        isSelected: false,
        isHovered: true,
        fontSize: 15,
        fontWeight: 700,
      },
    ]

    expect(() => renderLabelsToCanvas(mockCtx, labels, 800, 600)).not.toThrow()
  })

  it("places only hovered or selected labels when onlyHoveredOrSelected is true", () => {
    const camera = new THREE.PerspectiveCamera(45, 800 / 600, 0.1, 1000)
    camera.position.set(0, 0, 320)
    camera.lookAt(0, 0, 0)
    camera.updateMatrixWorld()
    camera.updateProjectionMatrix()

    const features: GeoJSONFeature[] = [
      {
        type: "Feature",
        id: "f1",
        properties: { name: "Country A", labelLat: 0, labelLng: 0, AREA: 100000 },
        geometry: { type: "Point", coordinates: [0, 0] },
      },
      {
        type: "Feature",
        id: "f2",
        properties: { name: "Country B", labelLat: 20, labelLng: 20, AREA: 100000 },
        geometry: { type: "Point", coordinates: [20, 20] },
      },
    ]

    const placed = computePlacedLabels(features, camera, 800, 600, {
      hoveredFeatureId: "f2",
      onlyHoveredOrSelected: true,
    })

    expect(placed.length).toBe(1)
    expect(placed[0].name).toBe("Country B")
    expect(placed[0].isHovered).toBe(true)
  })
})


