import { describe, it, expect } from "vitest"
import { Texture, getTexturePath } from "./index"

describe("earthTextures", () => {
  it("resolves texture paths for all enum variants", () => {
    expect(getTexturePath(Texture.EARTH_BLUE_MARBLE)).toBeTruthy()
    expect(getTexturePath(Texture.EARTH_BLUE_MARBLE_123K_BC)).toBeTruthy()
    expect(getTexturePath(Texture.EARTH_BLUE_MARBLE_10K_BC)).toBeTruthy()
    expect(getTexturePath(Texture.EARTH_BLUE_MARBLE_8K_BC)).toBeTruthy()
    expect(getTexturePath(Texture.EARTH_BLUE_MARBLE_5K_BC)).toBeTruthy()
    expect(getTexturePath(Texture.EARTH_DARK)).toBeTruthy()
    expect(getTexturePath(Texture.EARTH_DAY)).toBeTruthy()
    expect(getTexturePath(Texture.EARTH_NIGHT)).toBeTruthy()
  })
})
