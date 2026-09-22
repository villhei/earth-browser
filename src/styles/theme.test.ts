import { describe, it, expect, beforeEach, afterEach, vi } from "vitest"
import { readFileSync } from "fs"
import { resolve } from "path"
import {
  COLOR_SCHEMES,
  ColorSchemeId,
  ThemePreference,
  THEME_OPTIONS,
  getSystemTheme,
  getThemePreference,
  resolveTheme,
  getInitialTheme,
  applyTheme,
  subscribeToSystemThemeChanges,
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

  it("registers only Oceanic Slate and Historical Parchment color schemes", () => {
    const ids = COLOR_SCHEMES.map((s) => s.id)
    expect(ids).toEqual(["slate", "parchment"])
    expect(COLOR_SCHEMES.length).toBe(2)
  })

  it("provides human-readable names and descriptions for both themes", () => {
    for (const scheme of COLOR_SCHEMES) {
      expect(scheme.name.length).toBeGreaterThan(0)
      expect(scheme.description.length).toBeGreaterThan(0)
    }
  })

  it("applies theme attribute to document root and saves to localStorage", () => {
    applyTheme("parchment")
    expect(document.documentElement.getAttribute("data-theme")).toBe("parchment")
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe("parchment")

    applyTheme("slate")
    expect(document.documentElement.getAttribute("data-theme")).toBe("slate")
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe("slate")
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
        search: "?theme=parchment",
      },
    })
    expect(getInitialTheme()).toBe("parchment")
  })

  it("ignores invalid values in localStorage and falls back to slate", () => {
    localStorage.setItem(THEME_STORAGE_KEY, "invalid-theme-xyz")
    expect(getInitialTheme()).toBe("slate")
  })

  it("registers THEME_OPTIONS including Auto (System), Oceanic Slate, and Historical Parchment", () => {
    const ids = THEME_OPTIONS.map((o) => o.id)
    expect(ids).toEqual(["auto", "slate", "parchment"])
    expect(THEME_OPTIONS.length).toBe(3)
  })

  it("automatically detects system light mode preference when no override exists", () => {
    vi.stubGlobal("window", {
      location: { search: "" },
      matchMedia: vi.fn().mockImplementation((query: string) => ({
        matches: query === "(prefers-color-scheme: light)",
        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      })),
    })

    expect(getSystemTheme()).toBe("parchment")
    expect(getThemePreference()).toBe("auto")
    expect(getInitialTheme()).toBe("parchment")
  })

  it("automatically detects system dark mode preference when no override exists", () => {
    vi.stubGlobal("window", {
      location: { search: "" },
      matchMedia: vi.fn().mockImplementation((query: string) => ({
        matches: query === "(prefers-color-scheme: dark)",
        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      })),
    })

    expect(getSystemTheme()).toBe("slate")
    expect(getThemePreference()).toBe("auto")
    expect(getInitialTheme()).toBe("slate")
  })

  it("allows user localStorage override to take precedence over system light preference", () => {
    localStorage.setItem(THEME_STORAGE_KEY, "slate")
    vi.stubGlobal("window", {
      location: { search: "" },
      matchMedia: vi.fn().mockImplementation((query: string) => ({
        matches: query === "(prefers-color-scheme: light)",
        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      })),
    })

    expect(getSystemTheme()).toBe("parchment")
    expect(getThemePreference()).toBe("slate")
    expect(getInitialTheme()).toBe("slate")
  })

  it("allows user URL query param override to take precedence over system dark preference", () => {
    vi.stubGlobal("window", {
      location: { search: "?theme=parchment" },
      matchMedia: vi.fn().mockImplementation((query: string) => ({
        matches: query === "(prefers-color-scheme: dark)",
        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      })),
    })

    expect(getSystemTheme()).toBe("slate")
    expect(getThemePreference()).toBe("parchment")
    expect(getInitialTheme()).toBe("parchment")
  })

  it("applies auto theme and persists auto preference to localStorage", () => {
    vi.stubGlobal("window", {
      location: { search: "" },
      matchMedia: vi.fn().mockImplementation((query: string) => ({
        matches: query === "(prefers-color-scheme: light)",
        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      })),
    })

    applyTheme("auto")
    expect(document.documentElement.getAttribute("data-theme")).toBe("parchment")
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe("auto")
  })

  it("subscribes to system theme changes via matchMedia", () => {
    let changeHandler: ((e: any) => void) | null = null
    const addEventListenerMock = vi.fn((event: string, handler: any) => {
      if (event === "change") changeHandler = handler
    })
    const removeEventListenerMock = vi.fn()

    vi.stubGlobal("window", {
      location: { search: "" },
      matchMedia: vi.fn().mockReturnValue({
        matches: false,
        addEventListener: addEventListenerMock,
        removeEventListener: removeEventListenerMock,
      }),
    })

    const callback = vi.fn()
    const unsubscribe = subscribeToSystemThemeChanges(callback)

    expect(addEventListenerMock).toHaveBeenCalledWith("change", expect.any(Function))

    // Simulate system preference changing to light mode
    if (changeHandler) {
      (changeHandler as (e: any) => void)({ matches: true })
    }
    expect(callback).toHaveBeenCalledWith("parchment")

    // Simulate system preference changing to dark mode
    if (changeHandler) {
      (changeHandler as (e: any) => void)({ matches: false })
    }
    expect(callback).toHaveBeenCalledWith("slate")

    unsubscribe()
    expect(removeEventListenerMock).toHaveBeenCalledWith("change", expect.any(Function))
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

  it("verifies themes.css defines semantic tokens for Oceanic Slate and Historical Parchment", () => {
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

    // Verify only slate and parchment themes exist in themes.css
    expect(themesContent).toContain('[data-theme="slate"]')
    expect(themesContent).toContain('[data-theme="parchment"]')

    expect(themesContent).not.toContain('[data-theme="obsidian-gold"]')
    expect(themesContent).not.toContain('[data-theme="emerald"]')
    expect(themesContent).not.toContain('[data-theme="amethyst"]')
  })
})
