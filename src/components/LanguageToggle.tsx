import React from "react"
import { Language, LANGUAGES } from "../i18n/types"
import "./LanguageToggle.css"

export interface LanguageToggleProps {
  language: Language
  onSelectLanguage: (lang: Language) => void
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  language,
  onSelectLanguage,
}) => {
  return (
    <div
      className="language-toggle"
      role="group"
      aria-label="Language selection"
    >
      {LANGUAGES.map((opt) => {
        const isActive = language === opt.id
        return (
          <button
            key={opt.id}
            type="button"
            className={`language-btn ${isActive ? "active" : ""}`}
            onClick={() => onSelectLanguage(opt.id)}
            aria-pressed={isActive}
            title={opt.id === "en" ? "Switch to English" : "Vaihda suomeksi"}
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}
