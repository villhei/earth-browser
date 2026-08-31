import { describe, it, expect } from "vitest"
import {
  sanitizePolygonCoords,
  sanitizeFeature,
  sanitizeRenderableFeatures,
  DEFAULT_MIN_SPHERICAL_AREA,
} from "./geometrySanitizer"
import { GeoJSONFeature } from "../../types"

describe("geometrySanitizer", () => {
  describe("sanitizePolygonCoords", () => {
    it("returns null for invalid or unclosed rings", () => {
      expect(sanitizePolygonCoords([])).toBeNull()
      expect(sanitizePolygonCoords([[[0, 0], [1, 1]]])).toBeNull()
      expect(sanitizePolygonCoords([[[0, 0], [1, 0], [1, 1]]])).toBeNull()
    })

    it("accepts a normal CCW square polygon", () => {
      const square = [
        [
          [0, 0],
          [10, 0],
          [10, 10],
          [0, 10],
          [0, 0],
        ],
      ]
      const result = sanitizePolygonCoords(square)
      expect(result).not.toBeNull()
    })

    it("rewinds a valid large polygon that was wound clockwise (inverted)", () => {
      // Large CW square (~100 deg²): encloses ~4PI if inverted, but true area is valid
      const cwLarge = [
        [
          [0, 0],
          [0, 10],
          [10, 10],
          [10, 0],
          [0, 0],
        ],
      ]
      const result = sanitizePolygonCoords(cwLarge)
      expect(result).not.toBeNull()
    })

    it("rejects an inverted degenerate sliver like 1783 Andean sub-polygon 3", () => {
      // Exact rounded coordinates of 1783 Andean sub-poly 3 from API response
      const andeanPoly3 = [
        [
          [-71.5086, -32.9052],
          [-71.4161, -32.7526],
          [-71.4133, -32.7289],
          [-71.4034, -32.6446],
          [-71.4034, -32.6446],
          [-71.4161, -32.7526],
          [-71.5086, -32.9052],
          [-71.7134, -33.1088],
          [-71.7504, -33.1915],
          [-71.7504, -33.1915],
          [-71.7134, -33.1088],
          [-71.5086, -32.9052],
        ],
      ]
      expect(sanitizePolygonCoords(andeanPoly3)).toBeNull()
    })
  })

  describe("sanitizeFeature", () => {
    it("returns null for unclaimed or neutral entities", () => {
      const unclaimedFeat: GeoJSONFeature = {
        type: "Feature",
        properties: { name: "Unclaimed" },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [0, 0],
              [10, 0],
              [10, 10],
              [0, 10],
              [0, 0],
            ],
          ],
        },
      }
      expect(sanitizeFeature(unclaimedFeat)).toBeNull()
    })

    it("returns null for features where Polygon area < minArea", () => {
      const sliverFeat: GeoJSONFeature = {
        type: "Feature",
        properties: { name: "Sliver Territory" },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [0, 0],
              [0.0001, 0],
              [0.0001, 0.0001],
              [0, 0.0001],
              [0, 0],
            ],
          ],
        },
      }
      expect(sanitizeFeature(sliverFeat)).toBeNull()
    })

    it("returns null for 1783 Andean hunter-gatherers degenerate MultiPolygon", () => {
      const andeanFeat: GeoJSONFeature = {
        type: "Feature",
        properties: {
          NAME: "Andean hunter-gatherers",
          SUBJECTO: "Andean hunter-gatherers",
          PARTOF: "Andean hunter-gatherers",
        },
        geometry: {
          type: "MultiPolygon",
          coordinates: [
            [
              [
                [-73.7594, -40.2434],
                [-73.4343, -39.9104],
                [-73.1938, -39.5654],
                [-73.1963, -39.4187],
                [-73.1963, -39.4187],
                [-73.1938, -39.5654],
                [-73.4343, -39.9104],
                [-73.7594, -40.2434],
                [-73.8208, -40.4291],
                [-73.9052, -40.839],
                [-73.9052, -40.839],
                [-73.8208, -40.4291],
                [-73.7594, -40.2434],
              ],
            ],
            [
              [
                [-71.5086, -32.9052],
                [-71.4161, -32.7526],
                [-71.4133, -32.7289],
                [-71.4034, -32.6446],
                [-71.4034, -32.6446],
                [-71.4161, -32.7526],
                [-71.5086, -32.9052],
                [-71.7134, -33.1088],
                [-71.7504, -33.1915],
                [-71.7504, -33.1915],
                [-71.7134, -33.1088],
                [-71.5086, -32.9052],
              ],
            ],
          ],
        },
      }
      expect(sanitizeFeature(andeanFeat)).toBeNull()
    })

    it("cleans degenerate sub-polygons from a MultiPolygon while keeping valid landmasses", () => {
      const multiFeat: GeoJSONFeature = {
        type: "Feature",
        properties: { name: "Empire with Island and Artifact" },
        geometry: {
          type: "MultiPolygon",
          coordinates: [
            // Valid main territory: 10x10 deg
            [
              [
                [10, 10],
                [20, 10],
                [20, 20],
                [10, 20],
                [10, 10],
              ],
            ],
            // Slivers: collapsed 0-area line
            [
              [
                [5, 5],
                [6, 6],
                [5, 5],
                [5, 5],
              ],
            ],
          ],
        },
      }

      const sanitized = sanitizeFeature(multiFeat)
      expect(sanitized).not.toBeNull()
      expect(sanitized?.geometry.type).toBe("MultiPolygon")
      expect(sanitized?.geometry.coordinates.length).toBe(1)
    })
  })

  describe("sanitizeRenderableFeatures", () => {
    it("filters out invalid and sliver features from a collection", () => {
      const features: GeoJSONFeature[] = [
        {
          type: "Feature",
          properties: { name: "Roman Empire" },
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [12, 41],
                [15, 41],
                [15, 45],
                [12, 45],
                [12, 41],
              ],
            ],
          },
        },
        {
          type: "Feature",
          properties: { name: "Andean hunter-gatherers" },
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [-70, -30],
                [-70.0001, -30],
                [-70, -30],
                [-70, -30],
              ],
            ],
          },
        },
      ]

      const renderable = sanitizeRenderableFeatures(features)
      expect(renderable.length).toBe(1)
      expect(renderable[0].properties?.name).toBe("Roman Empire")
    })
  })
})
