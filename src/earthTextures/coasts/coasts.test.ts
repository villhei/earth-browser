import { describe, expect, it } from "vitest"
import { GlobeTexture } from "../../types"
import { getTerrainOverlayUrl } from "./index"

describe("terrain overlay", () => {
  it.each([123000, 10000, 8000, 5000])("automatically selects the matching mask for %i BCE Blue Marble", (year) => {
    expect(getTerrainOverlayUrl(`world-bc${year}`, GlobeTexture.EARTH_BLUE_MARBLE))
      .toContain(`earth-blue-marble-terrain-mask-bc${year}.png`)
  })

  it.each([123000, 10000, 8000, 5000])("removes the %i BCE mask when disabled and restores it when enabled again", (year) => {
    const era = `world-bc${year}`
    const enabled = getTerrainOverlayUrl(era, GlobeTexture.EARTH_BLUE_MARBLE, true)
    expect(enabled).toBeTruthy()
    expect(getTerrainOverlayUrl(era, GlobeTexture.EARTH_BLUE_MARBLE, false)).toBeUndefined()
    expect(getTerrainOverlayUrl(era, GlobeTexture.EARTH_BLUE_MARBLE, true)).toBe(enabled)
  })

  it.each([undefined, "world-bc120000", "world-bc4000", "world-bc3000", "world-2010", "toString"])(
    "does not extend the terrain mask to %s", (era) => {
      expect(getTerrainOverlayUrl(era, GlobeTexture.EARTH_BLUE_MARBLE)).toBeUndefined()
    },
  )

  it.each([10000, 8000, 5000])("uses the matching Day Map mask for %i BCE and respects the toggle", (year) => {
    const era = `world-bc${year}`
    const enabled = getTerrainOverlayUrl(era, GlobeTexture.EARTH_DAY)
    expect(enabled).toContain(`earth-daymap-may-terrain-mask-bc${year}.png`)
    expect(enabled).not.toBe(getTerrainOverlayUrl(era, GlobeTexture.EARTH_BLUE_MARBLE))
    expect(getTerrainOverlayUrl(era, GlobeTexture.EARTH_DAY, false)).toBeUndefined()
    expect(getTerrainOverlayUrl(era, GlobeTexture.EARTH_DAY, true)).toBe(enabled)
  })

  it.each([undefined, "world-bc123000", "world-bc4000", "world-2010", "toString"])(
    "does not apply Day Map masks to unsupported era %s", (era) => {
      expect(getTerrainOverlayUrl(era, GlobeTexture.EARTH_DAY)).toBeUndefined()
    },
  )

  it.each([GlobeTexture.EARTH_NIGHT, GlobeTexture.EARTH_DARK])(
    "removes the terrain overlay when switching to %s", (texture) => {
      for (const year of [123000, 10000, 8000, 5000]) {
        expect(getTerrainOverlayUrl(`world-bc${year}`, texture)).toBeUndefined()
      }
    },
  )
})
