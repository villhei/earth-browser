import { createHash } from "node:crypto"
import { readFileSync } from "node:fs"
import { describe, expect, it } from "vitest"

describe.each([1, 2])("independent coastal depth masks v%i", (version) => {
  const root = `output/coastal-depth-masks-v${version}/`
  const manifest = JSON.parse(readFileSync(`${root}manifest.json`, "utf8"))
  it("keeps the four requested scenarios and signed depth meaning explicit", () => {
    expect(manifest.scientifically_validated).toBe(false)
    expect(manifest.eras.map((era: any) => [era.slug, era.sea_level_m, era.depth_change_sign])).toEqual([
      ["world-bc123000", 7, 1], ["world-bc10000", -55, -1],
      ["world-bc8000", -25, -1], ["world-bc5000", -3, -1],
    ])
    expect(manifest.encoding.depth_change.white_m).toBe(64)
  })

  it("ships complete PNGs with pinned output checksums and the expected channels", () => {
    if (version === 2) {
      expect(manifest.format_version).toBe(2)
      expect(manifest.encoding.overlays).toMatchObject({ mode: "RGBA", png_bits: 8, rgb: [255, 255, 255] })
      expect(manifest.encoding.depth_change_8bit).toContain("alpha / 255")
    }
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
        expect(bytes[25]).toBe(version === 2 && suffix !== "depth-change" ? 6 : 0) // RGBA or grayscale.
        if (version === 2 && suffix === "depth-change") {
          expect(bytes.equals(readFileSync(`output/coastal-depth-masks-v1/${path}`))).toBe(true)
        }
      }
      expect(era.counts.depth_change_pixels).toBeGreaterThan(0)
      expect(era.counts.land_change_pixels).toBeGreaterThan(0)
      expect(era.maximum_tapered_depth_change_m).toBeLessThanOrEqual(Math.abs(era.sea_level_m))
    }
  })
})
