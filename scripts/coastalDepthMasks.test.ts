import { createHash } from "node:crypto"
import { readFileSync } from "node:fs"
import { describe, expect, it } from "vitest"

describe.each([1, 2, 3, 4, 5])("independent coastal depth masks v%i", (version) => {
  const root = `output/coastal-depth-masks-v${version}/`
  const manifest = JSON.parse(readFileSync(`${root}manifest.json`, "utf8"))
  it("keeps the requested scenarios and signed depth meaning explicit", () => {
    expect(manifest.scientifically_validated).toBe(false)
    const expected: (string | number)[][] = [
      ["world-bc123000", 7, 1], ["world-bc10000", -55, -1],
      ["world-bc8000", -25, -1], ["world-bc5000", -3, -1],
    ]
    if (version >= 4) expected.splice(1, 0, ["world-bc22000", -130, -1])
    expect(manifest.eras.map((era: any) => [era.slug, era.sea_level_m, era.depth_change_sign])).toEqual(expected)
    if (version >= 4) {
      expect(manifest.encoding.depth_change.decode).toContain("era.depth_white_m")
      const era = manifest.eras.find((era: any) => era.slug === "world-bc22000")
      expect(era.depth_white_m).toBe(160)
      expect(era.sea_level_source).toMatchObject({ source_calendar_bp: 24000, target_calendar_bp: 23949,
        source_minus_target_years: 51, sea_level_m: -130, source_95_percent_interval_m: [-134.58, -118.09] })
      const source = readFileSync(`${root}provenance/spratt2016-noaa.txt`)
      expect(createHash("sha256").update(source).digest("hex")).toBe(era.sea_level_source.sha256)
    } else expect(manifest.encoding.depth_change.white_m).toBe(64)
  })

  it("ships complete PNGs with pinned output checksums and the expected channels", () => {
    if (version >= 2) {
      expect(manifest.format_version).toBe(version)
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
        expect(bytes.readUInt32BE(16)).toBe(version >= 3 ? 8192 : 4096)
        expect(bytes.readUInt32BE(20)).toBe(version >= 3 ? 4096 : 2048)
        expect(bytes[24]).toBe(suffix === "depth-change" ? 16 : 8)
        expect(bytes[25]).toBe(version >= 2 && suffix !== "depth-change" ? 6 : 0) // RGBA or grayscale.
        if (version === 2 && suffix === "depth-change") {
          expect(bytes.equals(readFileSync(`output/coastal-depth-masks-v1/${path}`))).toBe(true)
        }
        if (version === 4 && era.slug !== "world-bc22000") {
          expect(bytes.equals(readFileSync(`output/coastal-depth-masks-v3/${path}`))).toBe(true)
          expect(era.depth_white_m).toBe(64)
        }
      }
      if (version === 5) {
        expect(era.ice_exclusion).toBeNull()
        expect(era.counts.excluded_pixels).toBe(0)
        expect(manifest.inputs).not.toHaveProperty("blue_marble")
        expect(manifest.method.exclusions).toBe("none; modern snow and empirical ice do not suppress coastal masks")
      }
      expect(era.counts.depth_change_pixels).toBeGreaterThan(0)
      expect(era.counts.land_change_pixels).toBeGreaterThan(0)
      expect(era.maximum_tapered_depth_change_m).toBeLessThanOrEqual(Math.abs(era.sea_level_m))
      if (version >= 3 && version <= 4 && era.slug !== "world-bc123000") {
        const ice = readFileSync(`output/ice-masks-8192-v${version === 4 ? 2 : 1}/${era.slug}/ice.png`)
        expect(createHash("sha256").update(ice).digest("hex")).toBe(era.ice_exclusion.sha256)
        expect(ice.readUInt32BE(16)).toBe(manifest.grid.width)
        expect(ice.readUInt32BE(20)).toBe(manifest.grid.height)
      }
    }
  })
})

describe.each([1, 2])("8192 ice mask delivery v%i", (version) => {
  it.each(version === 2 ? [22000, 10000, 8000, 5000, 4000, 3000] : [10000, 8000, 5000, 4000, 3000])("preserves all three source bounds at %i BCE", (year) => {
    const root = `output/ice-masks-8192-v${version}/world-bc${year}/`
    const manifest = JSON.parse(readFileSync(`${root}manifest.json`, "utf8"))
    expect(manifest.complete_global_reconstruction).toBe(false)
    expect(manifest.output_grid).toMatchObject({ width: 8192, height: 4096, registration: "PixelIsArea" })
    expect(Object.keys(manifest.overlays).sort()).toEqual(["central", "maximum", "minimum"])
    if (year === 22000) {
      expect(manifest.era.target_calendar_bp).toBe(23949)
      expect(manifest.sources).toHaveLength(2)
      for (const source of manifest.sources) {
        expect(source.chronology).toMatchObject({ source_calendar_bp: 24000, source_minus_target_years: 51, interpolation: "none" })
      }
    }
    for (const record of Object.values(manifest.overlays) as any[]) {
      const bytes = readFileSync(`${root}${record.path}`)
      expect(createHash("sha256").update(bytes).digest("hex")).toBe(record.sha256)
      expect(bytes.readUInt32BE(16)).toBe(8192)
      expect(bytes.readUInt32BE(20)).toBe(4096)
      expect(bytes[24]).toBe(8)
      expect(bytes[25]).toBe(6)
      if (version === 2 && year !== 22000) {
        expect(bytes.equals(readFileSync(`output/ice-masks-8192-v1/world-bc${year}/${record.path}`))).toBe(true)
      }
    }
  })
})
