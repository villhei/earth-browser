export type Language = "en" | "fi"

export interface LanguageOption {
  id: Language
  label: string
  fullLabel: string
}

export const LANGUAGES: readonly LanguageOption[] = [
  { id: "en", label: "EN", fullLabel: "English" },
  { id: "fi", label: "FI", fullLabel: "Suomi" },
] as const

export const LANGUAGE_STORAGE_KEY = "earth-browser-language"
