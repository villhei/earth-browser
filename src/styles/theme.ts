/**
 * Design Token System — Theme & Color Scheme Types and Utilities
 */

export type ColorSchemeId = "slate" | "parchment"
export type ThemePreference = "auto" | ColorSchemeId

export interface ColorSchemeOption {
  id: ColorSchemeId
  name: string
  description: string
}

export interface ThemeOption {
  id: ThemePreference
  name: string
  description: string
}

export const COLOR_SCHEMES: readonly ColorSchemeOption[] = [
  {
    id: "slate",
    name: "Oceanic Slate",
    description: "Deep space with cyan accents",
  },
  {
    id: "parchment",
    name: "Historical Parchment",
    description: "Aged vellum with warm terracotta ink accents",
  },
] as const

export const THEME_OPTIONS: readonly ThemeOption[] = [
  {
    id: "auto",
    name: "Auto (System)",
    description: "Automatically matches your system preference",
  },
  {
    id: "slate",
    name: "Oceanic Slate",
    description: "Deep space with cyan accents",
  },
  {
    id: "parchment",
    name: "Historical Parchment",
    description: "Aged vellum with warm terracotta ink accents",
  },
] as const

export const THEME_STORAGE_KEY = "earth-browser-theme"

/**
 * Detects the user's OS / system color scheme preference.
 * Defaults to "slate" if unavailable or if dark mode is preferred,
 * or "parchment" if light mode is preferred.
 */
export function getSystemTheme(): ColorSchemeId {
  if (typeof window === "undefined" || !window.matchMedia) return "slate"
  try {
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "parchment" : "slate"
  } catch {
    return "slate"
  }
}

/**
 * Returns the currently stored user theme preference ("auto", "slate", or "parchment").
 * Checks URL search parameters first, then localStorage, defaulting to "auto".
 */
export function getThemePreference(): ThemePreference {
  if (typeof window === "undefined") return "auto"
  const urlParam = new URLSearchParams(window.location.search).get("theme")
  if (urlParam === "auto" || urlParam === "slate" || urlParam === "parchment") {
    return urlParam as ThemePreference
  }
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    if (stored === "auto" || stored === "slate" || stored === "parchment") {
      return stored as ThemePreference
    }
  } catch {
    // Ignore localStorage access restrictions
  }
  return "auto"
}

/**
 * Resolves a theme preference to an active concrete color scheme ("slate" or "parchment").
 */
export function resolveTheme(preference: ThemePreference = getThemePreference()): ColorSchemeId {
  if (preference === "auto") {
    return getSystemTheme()
  }
  return preference
}

/**
 * Returns the initial active color scheme for bootstrapping the application.
 */
export function getInitialTheme(): ColorSchemeId {
  return resolveTheme(getThemePreference())
}

/**
 * Applies the specified theme to the DOM and optionally persists the preference in localStorage.
 */
export function applyTheme(
  themeOrPreference: ThemePreference,
  preference?: ThemePreference
): void {
  if (typeof document === "undefined") return

  const effectivePreference = preference ?? themeOrPreference
  const resolvedTheme = resolveTheme(themeOrPreference)

  document.documentElement.setAttribute("data-theme", resolvedTheme)

  try {
    localStorage.setItem(THEME_STORAGE_KEY, effectivePreference)
  } catch {
    // Ignore localStorage access restrictions
  }
}

/**
 * Subscribes to OS / system theme changes (via prefers-color-scheme media query).
 * Returns an unsubscribe cleanup function.
 */
export function subscribeToSystemThemeChanges(
  callback: (systemTheme: ColorSchemeId) => void
): () => void {
  if (typeof window === "undefined" || !window.matchMedia) {
    return () => {}
  }
  try {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)")
    const listener = (event: MediaQueryListEvent | MediaQueryList) => {
      callback(event.matches ? "parchment" : "slate")
    }

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", listener as (e: MediaQueryListEvent) => void)
      return () => mediaQuery.removeEventListener("change", listener as (e: MediaQueryListEvent) => void)
    } else if ("addListener" in mediaQuery) {
      // Legacy browser support
      (mediaQuery as any).addListener(listener)
      return () => (mediaQuery as any).removeListener(listener)
    }
  } catch {
    // Ignore media query listener issues
  }
  return () => {}
}
