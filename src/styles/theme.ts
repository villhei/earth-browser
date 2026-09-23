/**
 * Design Token System — Theme & Color Scheme Types and Utilities
 */

export type ColorSchemeId = "light" | "dark"
export type ThemePreference = "auto" | ColorSchemeId | "slate" | "parchment"

export interface ColorSchemeOption {
  id: ColorSchemeId
  name: string
  description: string
}

export interface ThemeOption {
  id: "auto" | ColorSchemeId
  name: string
  description: string
}

export const COLOR_SCHEMES: readonly ColorSchemeOption[] = [
  {
    id: "light",
    name: "Light",
    description: "Aged vellum with warm terracotta ink accents",
  },
  {
    id: "dark",
    name: "Dark",
    description: "Deep space with cyan accents",
  },
] as const

export const THEME_OPTIONS: readonly ThemeOption[] = [
  {
    id: "auto",
    name: "Auto (System)",
    description: "Automatically matches your system preference",
  },
  {
    id: "light",
    name: "Light",
    description: "Aged vellum with warm terracotta ink accents",
  },
  {
    id: "dark",
    name: "Dark",
    description: "Deep space with cyan accents",
  },
] as const

export const THEME_STORAGE_KEY = "earth-browser-theme"

/**
 * Detects the user's OS / system color scheme preference.
 * Defaults to "dark" if unavailable or if dark mode is preferred,
 * or "light" if light mode is preferred.
 */
export function getSystemTheme(): ColorSchemeId {
  if (typeof window === "undefined" || !window.matchMedia) return "dark"
  try {
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
  } catch {
    return "dark"
  }
}

/**
 * Returns the currently stored user theme preference ("auto", "light", or "dark").
 * Checks URL search parameters first, then localStorage, defaulting to "auto".
 */
export function getThemePreference(): ThemePreference {
  if (typeof window === "undefined") return "auto"
  const urlParam = new URLSearchParams(window.location.search).get("theme")
  if (
    urlParam === "auto" ||
    urlParam === "light" ||
    urlParam === "dark" ||
    urlParam === "slate" ||
    urlParam === "parchment"
  ) {
    if (urlParam === "slate") return "dark"
    if (urlParam === "parchment") return "light"
    return urlParam as ThemePreference
  }
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    if (
      stored === "auto" ||
      stored === "light" ||
      stored === "dark" ||
      stored === "slate" ||
      stored === "parchment"
    ) {
      if (stored === "slate") return "dark"
      if (stored === "parchment") return "light"
      return stored as ThemePreference
    }
  } catch {
    // Ignore localStorage access restrictions
  }
  return "auto"
}

/**
 * Resolves a theme preference to an active concrete color scheme ("light" or "dark").
 */
export function resolveTheme(preference: ThemePreference = getThemePreference()): ColorSchemeId {
  if (preference === "auto") {
    return getSystemTheme()
  }
  if (preference === "slate") {
    return "dark"
  }
  if (preference === "parchment") {
    return "light"
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

  const effectivePreference =
    preference ??
    (themeOrPreference === "slate"
      ? "dark"
      : themeOrPreference === "parchment"
        ? "light"
        : themeOrPreference)
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
      callback(event.matches ? "light" : "dark")
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
