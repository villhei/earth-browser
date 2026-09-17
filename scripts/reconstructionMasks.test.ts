import { createHash } from "node:crypto"
import { execFile } from "node:child_process"
import { readFileSync } from "node:fs"
import { promisify } from "node:util"
import { describe, expect, it } from "vitest"
import { ERA_CATALOG } from "../src/server/eraMetadata"

const data = "data-sources/textures/"
const contract = JSON.parse(readFileSync(`${data}OUTPUT-CONTRACT.json`, "utf8"))
const selection = JSON.parse(readFileSync(`${data}SOURCE-SELECTION.json`, "utf8"))
interface SourceUse {
  dataset: string
  source_calendar_bp: number
  source_minus_target_years: number
  bounds: string[]
  policy: string
}
interface Disposition {
  slug: string
  target_calendar_bp: number
  selected_margin_slices: SourceUse[]
}

describe("reconstruction mask contract", () => {
  it("accounts for all eras without promoting failed coastlines or inventing temporal reuse", async () => {
    const { stdout } = await promisify(execFile)("python3", ["scripts/generate_reconstruction_masks.py", "expand-eras", "--help"])
    expect(stdout).toContain("--overlay-root")
    const expansion = JSON.parse(readFileSync(`${data}PHASE6-EXPANSION.json`, "utf8"))
    expect(expansion.eras.map((era: { slug: string }) => era.slug)).toEqual(ERA_CATALOG.map(era => era.slug))
    expect(expansion.partial_ice_era_count).toBe(5)
    expect(expansion.fully_unavailable_era_count).toBe(49)
    expect(expansion.coastal_mask_count).toBe(0)
    expect(expansion.scientifically_accepted_era_count).toBe(0)
    expect(expansion.source_slices).toHaveLength(7)
    expect(expansion.source_slices.every((slice: { reused_across_eras: boolean }) => !slice.reused_across_eras)).toBe(true)
    const review = JSON.parse(readFileSync(`${data}PHASE5-VALIDATION.json`, "utf8"))
    expect(expansion.phase5_acceptance).toEqual(review.acceptance)
  })
  it("keeps reference review explicit and limited to the selected era", async () => {
    const { stdout } = await promisify(execFile)("python3", ["scripts/generate_reconstruction_masks.py", "review-reference", "--help"])
    expect(stdout).toContain("--ice-package")
    expect(stdout).toContain("--coast-package")
    expect(stdout).not.toContain("--all-supported")
    const evidence = JSON.parse(readFileSync(`${data}PHASE5-EVIDENCE.json`, "utf8"))
    expect(evidence.target_calendar_bp).toBe(11949)
    expect(evidence.era_slug).toBe("world-bc10000")
    expect(evidence.sources.every((source: { independence: string }) => source.independence.length > 0)).toBe(true)
  })
  it("offers native terrain inspection separately from production generation", async () => {
    const { stdout } = await promisify(execFile)("python3", ["scripts/generate_reconstruction_masks.py", "inspect-terrain", "--help"])
    expect(stdout).toContain("inspect-terrain")
    expect(stdout).toContain("--output")
    expect(stdout).not.toContain("--allow-unavailable")
  })

  it("exposes remaining generation gates through the dependency-free Python CLI", async () => {
    const { stdout } = await promisify(execFile)("python3", ["scripts/generate_reconstruction_masks.py", "plan"])
    const plan = JSON.parse(stdout)
    expect(plan.era_count).toBe(ERA_CATALOG.length)
    expect(plan.permitted_margin_uses).toEqual(contract.permitted_margin_uses)
    expect(plan.legacy_v1_production_masks_supported).toBe(0)
    expect(plan.static_ice_overlay_eras).toHaveLength(5)
    expect(plan.validated_global_reconstructions).toBe(0)
    expect(plan.operator_policy.subpixel_policy.operator_rule).toBe("Discard the polygons/subpixels that round to 0")
    expect(plan.operator_policy.ice.priority).toBe("empirical_ice_over_gia_terrain_and_marine_predictions")
    expect(readFileSync(plan.operator_handoff, "utf8")).toContain("ICE6G_Paleo_subice.zip")
  })

  it("pins the original selection and alignment bytes", () => {
    for (const pin of [contract.selection_record, contract.grid.alignment_reference]) {
      const bytes = readFileSync(pin.repository_path)
      expect(bytes.length).toBe(pin.bytes)
      expect(createHash("sha256").update(bytes).digest("hex")).toBe(pin.sha256)
    }
  })

  it("matches all 54 dates against the actual TypeScript era catalog", () => {
    expect(selection.eras).toHaveLength(ERA_CATALOG.length)
    const actual = ERA_CATALOG.map(({ slug, year_start }) => ({
      slug, target_calendar_bp: year_start < 0 ? -year_start + 1949 : 1950 - year_start,
    }))
    expect(selection.eras.map(({ slug, target_calendar_bp }: Disposition) => ({ slug, target_calendar_bp }))).toEqual(actual)
  })

  it("preserves all seven source uses and their three uncertainty bounds", () => {
    const uses = selection.eras.flatMap((era: Disposition) => era.selected_margin_slices.map(use => ({
      era_slug: era.slug, target_calendar_bp: era.target_calendar_bp, ...use,
    })))
    expect(contract.permitted_margin_uses).toEqual(uses)
    expect(uses).toHaveLength(7)
    for (const use of uses) {
      expect(use.source_minus_target_years).toBe(use.source_calendar_bp - use.target_calendar_bp)
      expect(use.bounds).toEqual(use.dataset === "nadi-1" ? ["OPTIMAL", "MIN", "MAX"] : ["mc", "min", "max"])
    }
  })

  it("permits only the named DATED-1 TS10 endpoint approximation", () => {
    expect(contract.permitted_margin_uses.filter((use: SourceUse) => use.policy === "endpoint_approximation")).toEqual([{
      era_slug: "world-bc8000", target_calendar_bp: 9949, dataset: "dated-1",
      source_calendar_bp: 10000, source_minus_target_years: 51,
      bounds: ["mc", "min", "max"], policy: "endpoint_approximation",
    }])
  })

  it("keeps all six reference classes unavailable until scientific gates are resolved", () => {
    const example = JSON.parse(readFileSync(`${data}examples/world-bc10000.manifest.json`, "utf8"))
    expect(example.layers).toHaveLength(6)
    expect(example.complete_global_set).toBe(false)
    for (const layer of example.layers) {
      expect(layer.coverage_status).toBe("unavailable")
      expect(layer.products).toEqual([])
    }
  })
})
