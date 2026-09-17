import { describe, expect, it } from "vitest"
import { getIceOverlay } from "./index"

describe("ice overlay era selection", () => {
  it.each([10000, 8000, 5000, 4000, 3000])("selects the matching color and coverage for %i BCE", (year) => {
    const overlay = getIceOverlay(`world-bc${year}`)
    expect(overlay?.colorUrl).toContain(`world-bc${year}-color.png`)
    expect(overlay?.coverageUrl).toContain(`world-bc${year}-coverage.png`)
  })

  it.each([undefined, "world-bc123000", "world-bc6000", "world-bc2000", "world-1492", "world-2010", "toString"])(
    "does not infer coverage for unsupported era %s", (slug) => {
      expect(getIceOverlay(slug)).toBeUndefined()
    },
  )
})
