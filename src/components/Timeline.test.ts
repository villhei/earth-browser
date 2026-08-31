import { describe, it, expect } from "vitest"
import { formatEraLabel } from "./Timeline"

describe("Timeline helpers", () => {
  it("extracts era label without leading year prefix", () => {
    expect(formatEraLabel("1492 CE - Age of Discovery")).toBe("Age of Discovery")
    expect(
      formatEraLabel("123,000 BCE - Eemian Interglacial & Early Humans")
    ).toBe("Eemian Interglacial & Early Humans")
  })

  it("handles labels without separator gracefully", () => {
    expect(formatEraLabel("Classical Antiquity")).toBe("Classical Antiquity")
    expect(formatEraLabel("")).toBe("")
  })

  it("handles multi-part labels correctly", () => {
    expect(
      formatEraLabel("500 CE - Post-Roman Kingdoms & Northern/Southern Dynasties")
    ).toBe("Post-Roman Kingdoms & Northern/Southern Dynasties")
  })
})
