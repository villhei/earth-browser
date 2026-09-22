import { describe, it, expect, beforeEach, afterEach, vi } from "vitest"
import { readFileSync } from "fs"
import { resolve } from "path"
import {
  COLOR_SCHEMES,
  ColorSchemeId,
  getInitialTheme,
  applyTheme,
  THEME_STORAGE_KEY,
} from "./theme"

describe("Design Token System & Color Schemes", () => {
  let mockStorage: Record<string, string> = {}
  let mockAttributes: Record<string, string> = {}

  beforeEach(() => {
    mockStorage = {}
    mockAttributes = {}

    const fakeLocalStorage = {
      getItem: (key: string) => mockStorage[key] ?? null,
      setItem: (key: string, value: string) => {
        mockStorage[key] = value
      },
      removeItem: (key: string) => {
        delete mockStorage[key]
      },
      clear: () => {
        mockStorage = {}
      },
    }

    const fakeDocument = {
      documentElement: {
        setAttribute: (key: string, value: string) => {
          mockAttributes[key] = value
        },
        getAttribute: (key: string) => mockAttributes[key] ?? null,
        removeAttribute: (key: string) => {
          delete mockAttributes[key]
        },
      },
    }

    const fakeWindow = {
      location: {
        search: "",
      },
    }

    vi.stubGlobal("localStorage", fakeLocalStorage)
    vi.stubGlobal("document", fakeDocument)
    vi.stubGlobal("window", fakeWindow)
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it("registers all supported color schemes", () => {
    const ids = COLOR_SCHEMES.map((s) => s.id)
    expect(ids).toContain("slate")
    expect(ids).toContain("obsidian-gold")
    expect(ids).toContain("emerald")
    expect(ids).toContain("amethyst")
    expect(ids).toContain("parchment")
    expect(COLOR_SCHEMES.length).toBe(5)
  })

  it("provides human-readable names and descriptions for every theme", () => {
    for (const scheme of COLOR_SCHEMES) {
      expect(scheme.name.length).toBeGreaterThan(0)
      expect(scheme.description.length).toBeGreaterThan(0)
    }
  })

  it("applies theme attribute to document root and saves to localStorage", () => {
    applyTheme("emerald")
    expect(document.documentElement.getAttribute("data-theme")).toBe("emerald")
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe("emerald")

    applyTheme("obsidian-gold")
    expect(document.documentElement.getAttribute("data-theme")).toBe("obsidian-gold")
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe("obsidian-gold")
  })

  it("resolves default theme when no stored preference exists", () => {
    expect(getInitialTheme()).toBe("slate")
  })

  it("reads theme preference from localStorage", () => {
    localStorage.setItem(THEME_STORAGE_KEY, "parchment")
    expect(getInitialTheme()).toBe("parchment")
  })

  it("reads theme preference from URL search params", () => {
    vi.stubGlobal("window", {
      location: {
        search: "?theme=emerald",
      },
    })
    expect(getInitialTheme()).toBe("emerald")
  })

  it("ignores invalid values in localStorage and falls back to slate", () => {
    localStorage.setItem(THEME_STORAGE_KEY, "invalid-theme-xyz")
    expect(getInitialTheme()).toBe("slate")
  })

  it("verifies tokens.css defines primitive scales", () => {
    const tokensPath = resolve(__dirname, "tokens.css")
    const tokensContent = readFileSync(tokensPath, "utf-8")

    const expectedPrimitives = [
      "--font-family-sans",
      "--font-family-mono",
      "--font-size-sm",
      "--font-size-base",
      "--font-size-lg",
      "--space-4",
      "--space-8",
      "--radius-sm",
      "--radius-md",
      "--radius-lg",
      "--radius-xl",
      "--radius-pill",
      "--blur-sm",
      "--blur-lg",
      "--transition-fast",
      "--transition-smooth",
      "--z-panel",
      "--z-banner",
      "--z-modal",
    ]

    for (const token of expectedPrimitives) {
      expect(tokensContent).toContain(token)
    }
  })

  it("verifies themes.css defines all semantic tokens across alternate themes", () => {
    const themesPath = resolve(__dirname, "themes.css")
    const themesContent = readFileSync(themesPath, "utf-8")

    const expectedSemanticTokens = [
      "--color-bg-app",
      "--color-bg-panel",
      "--color-bg-control",
      "--color-text-primary",
      "--color-text-secondary",
      "--color-text-muted",
      "--color-text-accent",
      "--color-accent",
      "--color-accent-hover",
      "--color-border-default",
      "--color-border-accent",
      "--shadow-md",
      "--shadow-xl",
      "--color-status-exact-bg",
      "--color-status-approx-bg",
      "--color-status-frontier-bg",
    ]

    for (const token of expectedSemanticTokens) {
      expect(themesContent).toContain(token)
    }

    // Verify each theme selector is declared in themes.css
    expect(themesContent).toContain('[data-theme="slate"]')
    expect(themesContent).toContain('[data-theme="obsidian-gold"]')
    expect(themesContent).toContain('[data-theme="emerald"]')
    expect(themesContent).toContain('[data-theme="amethyst"]')
    expect(themesContent).toContain('[data-theme="parchment"]')
  })
})
