/**
 * Design Token System — Theme & Color Scheme Types and Utilities
 */

export type ColorSchemeId = "slate" | "parchment"

export interface ColorSchemeOption {
  id: ColorSchemeId
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

export const THEME_STORAGE_KEY = "earth-browser-theme"

export function getInitialTheme(): ColorSchemeId {
  if (typeof window === "undefined") return "slate"
  const urlParam = new URLSearchParams(window.location.search).get("theme")
  if (urlParam && COLOR_SCHEMES.some((s) => s.id === urlParam)) {
    return urlParam as ColorSchemeId
  }
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    if (stored && COLOR_SCHEMES.some((s) => s.id === stored)) {
      return stored as ColorSchemeId
    }
  } catch {
    // Ignore localStorage access restrictions
  }
  return "slate"
}

export function applyTheme(theme: ColorSchemeId): void {
  if (typeof document === "undefined") return
  document.documentElement.setAttribute("data-theme", theme)
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    // Ignore localStorage access restrictions
  }
}
