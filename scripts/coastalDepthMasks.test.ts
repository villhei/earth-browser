import { createHash } from "node:crypto"
import { readFileSync } from "node:fs"
import { describe, expect, it } from "vitest"

const root = "output/coastal-depth-masks-v1/"
const manifest = JSON.parse(readFileSync(`${root}manifest.json`, "utf8"))

describe("independent coastal depth masks", () => {
  it("keeps the four requested scenarios and signed depth meaning explicit", () => {
    expect(manifest.scientifically_validated).toBe(false)
    expect(manifest.eras.map((era: any) => [era.slug, era.sea_level_m, era.depth_change_sign])).toEqual([
      ["world-bc123000", 7, 1], ["world-bc10000", -55, -1],
      ["world-bc8000", -25, -1], ["world-bc5000", -3, -1],
    ])
    expect(manifest.encoding.depth_change.white_m).toBe(64)
  })

  it("ships complete grayscale PNGs with pinned output checksums", () => {
    for (const era of manifest.eras) {
      for (const suffix of ["depth-change", "depth-change-8bit", "land-change", "shoreline", "excluded"]) {
        const path = `${era.slug}-${suffix}.png`
        const artifact = manifest.artifacts.find((item: any) => item.path === path)
        expect(artifact, path).toBeTruthy()
        const bytes = readFileSync(`${root}${path}`)
        expect(createHash("sha256").update(bytes).digest("hex"), path).toBe(artifact.sha256)
        expect(bytes.readUInt32BE(16)).toBe(4096)
        expect(bytes.readUInt32BE(20)).toBe(2048)
        expect(bytes[24]).toBe(suffix === "depth-change" ? 16 : 8)
        expect(bytes[25]).toBe(0) // PNG grayscale, without alpha or palette.
      }
      expect(era.counts.depth_change_pixels).toBeGreaterThan(0)
      expect(era.counts.land_change_pixels).toBeGreaterThan(0)
      expect(era.maximum_tapered_depth_change_m).toBeLessThanOrEqual(Math.abs(era.sea_level_m))
    }
  })
})
