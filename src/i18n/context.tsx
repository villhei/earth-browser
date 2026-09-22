import React, { createContext, useCallback, useContext, useEffect, useState } from "react"
import { Language, LANGUAGE_STORAGE_KEY } from "./types"
import { t as translate } from "./translations"

export interface LanguageContextValue {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  isFi: boolean
  isEn: boolean
}

export function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "en"
  try {
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY)
    if (saved === "en" || saved === "fi") {
      return saved
    }
  } catch {
    // localStorage might be unavailable
  }

  try {
    if (navigator.language && navigator.language.toLowerCase().startsWith("fi")) {
      return "fi"
    }
  } catch {
    // navigator might be unavailable
  }

  return "en"
}

export const LanguageContext = createContext<LanguageContextValue>({
  language: "en",
  setLanguage: () => {},
  t: (key: string) => translate(key, "en"),
  isFi: false,
  isEn: true,
})

export interface LanguageProviderProps {
  children: React.ReactNode
  defaultLanguage?: Language
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
  defaultLanguage,
}) => {
  const [language, setLanguageState] = useState<Language>(() => {
    return defaultLanguage || getInitialLanguage()
  })

  const setLanguage = useCallback((newLang: Language) => {
    setLanguageState(newLang)
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, newLang)
    } catch {
      // ignore storage error
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = newLang
    }
  }, [])

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language
    }
  }, [language])

  const t = useCallback(
    (key: string) => translate(key, language),
    [language]
  )

  const value: LanguageContextValue = {
    language,
    setLanguage,
    t,
    isFi: language === "fi",
    isEn: language === "en",
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  return useContext(LanguageContext)
}
