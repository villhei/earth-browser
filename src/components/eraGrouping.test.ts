import { describe, it, expect } from "vitest"
import { ERA_CATALOG } from "../server/eraMetadata"
import { ERA_EPOCHS, getEpochForEra, groupErasByEpoch } from "./eraGrouping"
import { Era } from "../types"

// Convert ERA_CATALOG items to Era interface for testing
const mockEras: Era[] = ERA_CATALOG.map((item, idx) => ({
  id: `era-${idx + 1}`,
  slug: item.slug,
  name: item.name,
  year_start: item.year_start,
  year_end: item.year_end,
  year_label: item.year_label,
  description: item.description,
  feature_count: 10,
}))

describe("eraGrouping", () => {
  it("defines 7 distinct chronological epochs", () => {
    expect(ERA_EPOCHS).toHaveLength(7)
    expect(ERA_EPOCHS[0].id).toBe("prehistory")
    expect(ERA_EPOCHS[1].id).toBe("bronze-age")
    expect(ERA_EPOCHS[2].id).toBe("classical-antiquity")
    expect(ERA_EPOCHS[3].id).toBe("middle-ages")
    expect(ERA_EPOCHS[4].id).toBe("early-modern")
    expect(ERA_EPOCHS[5].id).toBe("industrial-age")
    expect(ERA_EPOCHS[6].id).toBe("modern-era")
  })

  it("groups all 54 catalog eras without losing any", () => {
    expect(mockEras).toHaveLength(54)
    const groups = groupErasByEpoch(mockEras)

    expect(groups).toHaveLength(7)

    const totalGroupedEras = groups.reduce((sum, g) => sum + g.eras.length, 0)
    expect(totalGroupedEras).toBe(54)

    // Check specific counts per epoch
    expect(groups[0].epoch.id).toBe("prehistory")
    expect(groups[0].eras).toHaveLength(4) // 123k BCE, 10k BCE, 8k BCE, 5k BCE

    expect(groups[1].epoch.id).toBe("bronze-age")
    expect(groups[1].eras).toHaveLength(4) // 4k BCE, 3k BCE, 2k BCE, 1.5k BCE

    expect(groups[2].epoch.id).toBe("classical-antiquity")
    expect(groups[2].eras).toHaveLength(14) // 1k BCE to 500 CE

    expect(groups[3].epoch.id).toBe("middle-ages")
    expect(groups[3].eras).toHaveLength(10) // 600 CE to 1400 CE

    expect(groups[4].epoch.id).toBe("early-modern")
    expect(groups[4].eras).toHaveLength(8) // 1492 CE to 1783 CE

    expect(groups[5].epoch.id).toBe("industrial-age")
    expect(groups[5].eras).toHaveLength(5) // 1800 CE to 1900 CE

    expect(groups[6].epoch.id).toBe("modern-era")
    expect(groups[6].eras).toHaveLength(9) // 1914 CE to 2010 CE
  })

  it("correctly identifies the epoch for key eras", () => {
    expect(getEpochForEra({ year_start: -123000 }).id).toBe("prehistory")
    expect(getEpochForEra({ year_start: -10000 }).id).toBe("prehistory")
    expect(getEpochForEra({ year_start: -5000 }).id).toBe("prehistory")

    expect(getEpochForEra({ year_start: -4000 }).id).toBe("bronze-age")
    expect(getEpochForEra({ year_start: -1500 }).id).toBe("bronze-age")

    expect(getEpochForEra({ year_start: -1000 }).id).toBe("classical-antiquity")
    expect(getEpochForEra({ year_start: 500 }).id).toBe("classical-antiquity")

    expect(getEpochForEra({ year_start: 600 }).id).toBe("middle-ages")
    expect(getEpochForEra({ year_start: 1400 }).id).toBe("middle-ages")

    expect(getEpochForEra({ year_start: 1492 }).id).toBe("early-modern")
    expect(getEpochForEra({ year_start: 1783 }).id).toBe("early-modern")

    expect(getEpochForEra({ year_start: 1800 }).id).toBe("industrial-age")
    expect(getEpochForEra({ year_start: 1900 }).id).toBe("industrial-age")

    expect(getEpochForEra({ year_start: 1914 }).id).toBe("modern-era")
    expect(getEpochForEra({ year_start: 2010 }).id).toBe("modern-era")
  })

  it("omits empty groups if passed a filtered list of eras", () => {
    const subset: Era[] = mockEras.filter(
      (e) => e.year_start >= 1800 && e.year_start <= 1900
    )
    const groups = groupErasByEpoch(subset)
    expect(groups).toHaveLength(1)
    expect(groups[0].epoch.id).toBe("industrial-age")
    expect(groups[0].eras).toHaveLength(5)
  })
})
