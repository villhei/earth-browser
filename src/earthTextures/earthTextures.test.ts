import { describe, it, expect } from "vitest"
import { Texture, getTexturePath } from "./index"
import { getGlobeTextureUrl } from "../features/globe/textures"
import { GlobeTexture } from "../types"

describe("earthTextures", () => {
  it("uses the supplied May daymap in both texture resolvers", () => {
    expect(getTexturePath(Texture.EARTH_DAY)).toContain("earth-daymap-may.png")
    expect(getGlobeTextureUrl(GlobeTexture.EARTH_DAY)).toBe(getTexturePath(Texture.EARTH_DAY))
  })

  it("resolves texture paths for all enum variants", () => {
    expect(getTexturePath(Texture.EARTH_BLUE_MARBLE)).toBeTruthy()
    expect(getTexturePath(Texture.EARTH_DARK)).toBeTruthy()
    expect(getTexturePath(Texture.EARTH_DAY)).toBeTruthy()
    expect(getTexturePath(Texture.EARTH_NIGHT)).toBeTruthy()
  })
})
