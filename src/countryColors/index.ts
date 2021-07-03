import COUNTRY_COLORS_LIST, { Country } from "country-flag-colors"

export const DEFAULT_COLOR = "#FFFFFF"

const COLORS_BY_COUNTRY_NAME = new Map<string, Array<string>>(
  COUNTRY_COLORS_LIST.map((countrySpec: Country) => [
    countrySpec.name,
    countrySpec.colors,
  ])
)

export function findCountryColor(name: string): string | undefined {
  const colors = COLORS_BY_COUNTRY_NAME.get(name)
  if (colors) {
    return colors[0]
  }
  return undefined
}
