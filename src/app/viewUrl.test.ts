import { afterEach, describe, expect, it, vi } from "vitest"
import type { Era } from "../types"
import { DEFAULT_GLOBE_VIEW } from "../features/globe/view"
import { buildViewUrl, readViewUrl, replaceViewUrl, resolveEra } from "./viewUrl"

afterEach(() => vi.unstubAllGlobals())

describe("shareable view URLs", () => {
  it("round-trips the era, rotation, zoom and pan, preserving other URL parts", () => {
    const view = { position: [-200.123456, 100, -300], target: [12, -8, 20] } as const
    const url = new URL(buildViewUrl(
      "https://example.com/earth-browser/?theme=dark#atlas",
      "world-bc10000",
      { position: [...view.position], target: [...view.target] },
    ), "https://example.com")
    expect(url.pathname).toBe("/earth-browser/")
    expect(url.hash).toBe("#atlas")
    expect(url.searchParams.get("theme")).toBe("dark")
    expect(readViewUrl(url.search)).toEqual({
      eraSlug: "world-bc10000",
      view: { position: [-200.1235, 100, -300], target: [12, -8, 20] },
    })
  })

  it("defaults to the original view for a bare URL", () => {
    expect(readViewUrl("")).toEqual({ eraSlug: null, view: DEFAULT_GLOBE_VIEW })
  })

  it("accepts a camera without a target and both zoom boundaries", () => {
    for (const distance of [140, 700]) {
      expect(readViewUrl(`?camera=0,0,${distance}`).view).toEqual({
        position: [0, 0, distance], target: [0, 0, 0],
      })
    }
  })

  it.each([
    "camera=1,2", "camera=0,,320", "camera=0,%20,320",
    "camera=0,0,NaN", "camera=0,0,Infinity", "camera=0,0,1e309",
    "camera=0,0,0", "camera=0,0,139", "camera=0,0,701",
    "camera=0,80,320&target=bad", "camera=0,80,320&target=",
    "camera=0,80,320&target=0,80,320", "target=1,2,3",
  ])("falls back safely for malformed or out-of-range poses: %s", (search) => {
    expect(readViewUrl(`?era=world-1492&${search}`)).toEqual({
      eraSlug: "world-1492", view: DEFAULT_GLOBE_VIEW,
    })
  })

  it("keeps zoom boundary views valid after coordinate rounding", () => {
    for (const distance of [140, 700]) {
      const coordinate = distance / Math.sqrt(3)
      const result = buildViewUrl("https://example.com/", null, {
        position: [coordinate, coordinate, coordinate], target: [0, 0, 0],
      })
      expect(readViewUrl(new URL(result, "https://example.com").search).view)
        .not.toEqual(DEFAULT_GLOBE_VIEW)
    }
  })

  it("replaces existing parameters instead of duplicating them", () => {
    const result = buildViewUrl("https://example.com/?era=old&camera=bad&target=bad", "world-1492", DEFAULT_GLOBE_VIEW)
    const params = new URL(result, "https://example.com").searchParams
    expect(params.getAll("era")).toEqual(["world-1492"])
    expect(params.getAll("camera")).toEqual(["0,80,320"])
    expect(params.getAll("target")).toEqual(["0,0,0"])
  })

  it("replaces history without flooding Back or discarding existing history state", () => {
    const location = new URL("https://example.com/?era=world-1492#atlas")
    const state = { existing: true }
    const replaceState = vi.fn((_state, _title, url) => { location.href = new URL(url, location).href })
    vi.stubGlobal("window", { location, history: { state, replaceState } })
    replaceViewUrl(null, DEFAULT_GLOBE_VIEW)
    replaceViewUrl(null, DEFAULT_GLOBE_VIEW)
    expect(replaceState).toHaveBeenCalledTimes(1)
    expect(replaceState).toHaveBeenCalledWith(state, "", expect.any(String))
    expect(readViewUrl(location.search).eraSlug).toBe("world-1492")
  })
})

describe("era restoration", () => {
  const eras = [{ slug: "world-bc10000" }, { slug: "world-1492" }] as Era[]

  it("selects the linked era after the catalog loads", () => {
    expect(resolveEra(eras, "world-bc10000")).toBe(eras[0])
  })

  it("uses 1492, then the first era, for missing or unknown slugs", () => {
    expect(resolveEra(eras, null)).toBe(eras[1])
    expect(resolveEra(eras, "unknown")).toBe(eras[1])
    expect(resolveEra([eras[0]], "unknown")).toBe(eras[0])
    expect(resolveEra([], "world-1492")).toBeNull()
  })
})
