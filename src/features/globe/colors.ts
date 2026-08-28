import COUNTRY_COLORS_LIST, { Country } from "country-flag-colors"

export const DEFAULT_COUNTRY_COLOR = "#3b82f6"
export const HIGHLIGHT_COLOR = "#f59e0b"

const COLORS_BY_NAME = new Map<string, string>(
  COUNTRY_COLORS_LIST.map((c: Country) => [c.name.toLowerCase(), c.colors[0]])
)

export function getCountryColor(name?: string | null): string {
  if (!name) return DEFAULT_COUNTRY_COLOR
  const normalized = name.trim().toLowerCase()
  const found = COLORS_BY_NAME.get(normalized)
  if (found) return found

  // Generate deterministic pastel color from name hash if not in flag list
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  const h = Math.abs(hash % 360)
  return `hsl(${h}, 65%, 55%)`
}
