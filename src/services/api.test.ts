import { describe, it, expect, vi, beforeEach } from "vitest"
import { fetchEras, fetchEraGeoJson, resolveDataPath } from "./api"

describe("API Service Path Resolution", () => {
  it("resolves relative data paths correctly with default base", () => {
    expect(resolveDataPath("data/eras.json", "./")).toBe("./data/eras.json")
    expect(resolveDataPath("data/eras/world-1492.json", "./")).toBe("./data/eras/world-1492.json")
  })

  it("resolves subpath deployments correctly", () => {
    expect(resolveDataPath("data/eras.json", "/earth-browser/")).toBe("/earth-browser/data/eras.json")
    expect(resolveDataPath("/data/eras.json", "/earth-browser/")).toBe("/earth-browser/data/eras.json")
    expect(resolveDataPath("data/eras.json", "/earth-browser")).toBe("/earth-browser/data/eras.json")
  })

  it("resolves root domain deployments correctly", () => {
    expect(resolveDataPath("data/eras.json", "/")).toBe("/data/eras.json")
    expect(resolveDataPath("/data/eras.json", "/")).toBe("/data/eras.json")
  })
})

describe("API Service Fetching & Caching", () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it("fetches eras from static JSON location", async () => {
    const mockEras = [
      { id: "1", slug: "world-1492", name: "1492 CE", year_start: 1492, year_label: "1492 CE", description: "Age of Discovery", feature_count: 50 },
    ]

    const expectedUrl = resolveDataPath("data/eras.json")
    const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValueOnce({
      ok: true,
      json: async () => mockEras,
    } as Response)

    const result = await fetchEras()
    expect(fetchSpy).toHaveBeenCalledWith(expectedUrl)
    expect(result).toEqual(mockEras)
  })

  it("fetches era GeoJSON from static JSON location and caches results", async () => {
    const mockGeoJson = {
      type: "FeatureCollection" as const,
      name: "1492 CE",
      era: { id: "1", slug: "world-1492", name: "1492 CE", year_start: 1492, year_label: "1492 CE" },
      features: [],
    }

    const expectedUrl = resolveDataPath("data/eras/world-1492.json")
    const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValueOnce({
      ok: true,
      json: async () => mockGeoJson,
    } as Response)

    const result = await fetchEraGeoJson("world-1492")
    expect(fetchSpy).toHaveBeenCalledWith(expectedUrl)
    expect(result).toEqual(mockGeoJson)

    // Second call should return from cache without re-fetching
    const cachedResult = await fetchEraGeoJson("world-1492")
    expect(fetchSpy).toHaveBeenCalledTimes(1)
    expect(cachedResult).toEqual(mockGeoJson)
  })

  it("falls back to Express backend endpoint if static file is unavailable in dev", async () => {
    const mockEras = [
      { id: "2", slug: "world-2000", name: "2000 CE", year_start: 2000, year_label: "2000 CE", description: "Modern era", feature_count: 200 },
    ]

    const expectedStaticUrl = resolveDataPath("data/eras.json")
    const fetchSpy = vi.spyOn(globalThis, "fetch")
      .mockResolvedValueOnce({ ok: false, statusText: "Not Found" } as Response) // static fetch fails (404)
      .mockResolvedValueOnce({ ok: true, json: async () => mockEras } as Response) // backend fallback succeeds

    const result = await fetchEras()
    expect(fetchSpy).toHaveBeenCalledTimes(2)
    expect(fetchSpy).toHaveBeenNthCalledWith(1, expectedStaticUrl)
    expect(fetchSpy).toHaveBeenNthCalledWith(2, "/api/eras")
    expect(result).toEqual(mockEras)
  })
})
