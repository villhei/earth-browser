import { createHash } from "node:crypto"
import { readFileSync } from "node:fs"
import { describe, expect, it } from "vitest"
import { GlobeTexture } from "../../types"
import { getCoastlinePrototype, getCoastlineTextureOverride } from "./index"

describe("coastline prototype", () => {
  it("uses an explicit preview era without extending it to other dates", () => {
    expect(getCoastlinePrototype("world-bc10000")).toBeTruthy()
    for (const era of [undefined, "world-bc8000", "world-bc123000", "world-2010"]) {
      expect(getCoastlinePrototype(era)).toBeUndefined()
    }
  })

  it("returns to the normal surface when disabled, switching eras, or choosing another texture", () => {
    expect(getCoastlineTextureOverride("world-bc10000", GlobeTexture.EARTH_BLUE_MARBLE, true)).toBeTruthy()
    expect(getCoastlineTextureOverride("world-bc10000", GlobeTexture.EARTH_BLUE_MARBLE)).toBeUndefined()
    expect(getCoastlineTextureOverride("world-bc8000", GlobeTexture.EARTH_BLUE_MARBLE, true)).toBeUndefined()
    expect(getCoastlineTextureOverride("world-bc10000", GlobeTexture.EARTH_NIGHT, true)).toBeUndefined()
  })

  it("ships the reviewed generation artifact with its assumptions and checksums", () => {
    const root = "src/earthTextures/coasts/"
    const manifest = JSON.parse(readFileSync(`${root}manifest.json`, "utf8"))
    expect(manifest.scientifically_validated).toBe(false)
    expect(manifest.sea_level_m).toBe(-55)
    expect(manifest.counts.exposed_cells_at_or_above_modern_zero).toBe(0)
    expect(manifest.counts.unmodified_pixels_changed).toBe(0)
    const artifact = manifest.artifacts.find((item: { path: string }) => item.path === "blue-marble-coast-prototype.jpg")
    const bytes = readFileSync(`${root}world-bc10000-prototype.jpg`)
    expect(createHash("sha256").update(bytes).digest("hex")).toBe(artifact.sha256)
  })
})
