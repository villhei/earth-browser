import { Language } from "./types"

export const UI_TRANSLATIONS: Record<string, Record<Language, string>> = {
  // App Header & Branding
  app_title: {
    en: "Earth Browser",
    fi: "Earth Browser",
  },
  historical_atlas: {
    en: "Historical Atlas",
    fi: "Historiallinen kartasto",
  },
  loading_datasets: {
    en: "Loading Historical Earth Datasets...",
    fi: "Ladataan historiallisia aineistoja...",
  },
  loading_boundaries: {
    en: "Loading Historical Boundaries...",
    fi: "Ladataan historiallisia rajoja...",
  },

  // Language Selection
  language: {
    en: "Language",
    fi: "Kieli",
  },
  english: {
    en: "English",
    fi: "Englanti",
  },
  finnish: {
    en: "Finnish",
    fi: "Suomi",
  },

  // Active Era Banner
  territories: {
    en: "territories",
    fi: "aluetta",
  },
  active_era_label: {
    en: "Active Historical Era",
    fi: "Aktiivinen historiallinen aikakausi",
  },

  // Controls Overlay (Visual Settings)
  visuals: {
    en: "Visuals",
    fi: "Näkymä",
  },
  globe_visual_settings: {
    en: "Globe Visual Settings",
    fi: "Maapallon ulkoasuasetukset",
  },
  globe_settings: {
    en: "Globe Settings",
    fi: "Maapallon asetukset",
  },
  surface_texture: {
    en: "Earth Surface Texture",
    fi: "Maan pintakartta",
  },
  texture_blue_marble_modern: {
    en: "Blue Marble (Modern)",
    fi: "Blue Marble (Nykyinen)",
  },
  texture_blue_marble_prehistoric: {
    en: "Blue Marble (Prehistoric)",
    fi: "Blue Marble (Esihistoriallinen)",
  },
  texture_day_map: {
    en: "Day Map",
    fi: "Päiväkartta",
  },
  texture_night_lights: {
    en: "Night Lights",
    fi: "Yövalot",
  },
  texture_dark_planetary: {
    en: "Dark Planetary",
    fi: "Tumma planetaarinen",
  },
  polygon_altitude: {
    en: "Polygon Altitude",
    fi: "Rajojen korkeus",
  },
  overlap_elevation: {
    en: "Overlap Elevation",
    fi: "Päällekkäisyyksien korotus",
  },
  fill_opacity: {
    en: "Country Base Opacity",
    fi: "Alueiden peittävyys",
  },
  country_labels: {
    en: "Country Labels",
    fi: "Alueiden nimet",
  },
  label_size: {
    en: "Label Size",
    fi: "Tekstikoko",
  },
  appearance_tolerance: {
    en: "Appearance Tolerance",
    fi: "Nimien tiheys",
  },
  ice_sheets_overlay: {
    en: "Ice Sheets Overlay",
    fi: "Mannerjäätiköt",
  },
  terrain_highlight: {
    en: "Prehistoric Terrain Highlight",
    fi: "Esihistoriallinen rantaviiva",
  },
  highlight_focus: {
    en: "Highlight Focus",
    fi: "Korostuksen tyyli",
  },
  focus_land_bridges: {
    en: "Land Bridges (Texture)",
    fi: "Maasillat (tekstuuri)",
  },
  focus_coastlines: {
    en: "Coastlines (Outlines)",
    fi: "Rantaviivat (ääriviivat)",
  },
  pulse_highlight: {
    en: "Pulse Highlight",
    fi: "Väläytä korostus",
  },
  pulsing: {
    en: "Pulsing...",
    fi: "Välkkyy...",
  },
  theme: {
    en: "Theme",
    fi: "Teema",
  },
  theme_auto: {
    en: "Auto (System)",
    fi: "Automaattinen",
  },
  theme_slate: {
    en: "Oceanic Slate",
    fi: "Valtamerten liuske",
  },
  theme_parchment: {
    en: "Historical Parchment",
    fi: "Historiallinen pergamentti",
  },
  state_enabled: {
    en: "Enabled",
    fi: "Käytössä",
  },
  state_disabled: {
    en: "Disabled",
    fi: "Pois käytöstä",
  },
  credits_and_sources: {
    en: "Credits & Sources",
    fi: "Lähteet ja tekijätiedot",
  },

  // Timeline
  historical_eras: {
    en: "Historical Eras",
    fi: "Aikakaudet",
  },
  eras: {
    en: "Eras",
    fi: "Aikakaudet",
  },
  expand_all: {
    en: "Expand all",
    fi: "Laajenna kaikki",
  },
  collapse_all: {
    en: "Collapse all",
    fi: "Tiivistä kaikki",
  },
  previous_era: {
    en: "Previous Era",
    fi: "Edellinen aikakausi",
  },
  next_era: {
    en: "Next Era",
    fi: "Seuraava aikakausi",
  },
  search_eras: {
    en: "Search eras or empires",
    fi: "Etsi aikakausia tai valtakuntia",
  },

  // Country / Culture Drawer
  culture_sphere: {
    en: "Culture Sphere:",
    fi: "Kulttuuripiiri:",
  },
  part_of: {
    en: "Part of (Parent):",
    fi: "Osa valtakuntaa:",
  },
  subjugated_to: {
    en: "Subjugated to:",
    fi: "Alamaissuhde:",
  },
  civilization_lineage: {
    en: "Civilization / Lineage:",
    fi: "Sivilisaatio / linja:",
  },
  historical_period: {
    en: "Historical Period:",
    fi: "Historiallinen aikakausi:",
  },
  documented_era: {
    en: "Documented Era:",
    fi: "Dokumentoitu aikakausi:",
  },
  capital_center: {
    en: "Capital / Center:",
    fi: "Pääkaupunki / keskus:",
  },
  border_precision: {
    en: "Border Precision:",
    fi: "Rajojen tarkkuus:",
  },
  precision_exact: {
    en: "Exact",
    fi: "Tarkka",
  },
  precision_approx: {
    en: "Approximate",
    fi: "Likimääräinen",
  },
  precision_frontier: {
    en: "Frontier / Estimate",
    fi: "Raja-alue / arvio",
  },
  iso_code: {
    en: "ISO / Code:",
    fi: "ISO-koodi:",
  },
  sovereignty_control: {
    en: "Sovereignty / Control:",
    fi: "Hallitsija / hallinta:",
  },
  region_continent: {
    en: "Region / Continent:",
    fi: "Maanosa / alue:",
  },
  classification: {
    en: "Classification:",
    fi: "Luokitus:",
  },
  est_population: {
    en: "Est. Population:",
    fi: "Arvioitu väkiluku:",
  },
  area_approx: {
    en: "Area (approx):",
    fi: "Pinta-ala (arvio):",
  },
  sq_km: {
    en: "sq km",
    fi: "km²",
  },
  about: {
    en: "About",
    fi: "Tietoja",
  },
  wikipedia: {
    en: "Wikipedia",
    fi: "Wikipedia",
  },
  wikipedia_article: {
    en: "Wikipedia Article ↗",
    fi: "Wikipedia-artikkeli ↗",
  },
  close: {
    en: "Close",
    fi: "Sulje",
  },
  unknown_territory: {
    en: "Unknown Territory",
    fi: "Tuntematon alue",
  },

  // Attribution & Credits Modal
  historical_atlas_credits: {
    en: "Historical Earth Atlas Credits",
    fi: "Historiallisen maapallon lähteet ja tekijät",
  },
  map_data_boundaries: {
    en: "Map Data & Historical Boundaries",
    fi: "Karttadata ja historialliset rajat",
  },
  paleogeographic_textures: {
    en: "Paleogeographic & Ice Sheet Textures",
    fi: "Paleomaantieteelliset ja jäätikkötekstuurit",
  },
  application_creator: {
    en: "Application & Creator",
    fi: "Sovellus ja tekijä",
  },
  creator_role: {
    en: "Concept, visual design & full-stack development",
    fi: "Konsepti, visuaalinen suunnittelu ja täyden pinon toteutus",
  },
  gpl_license_notice: {
    en: "Released under GNU General Public License v3.0 (GPL-3.0).",
    fi: "Julkaistu GNU General Public License v3.0 (GPL-3.0) -lisenssillä.",
  },
}

export const CULTURE_SPHERE_TRANSLATIONS: Record<string, string> = {
  "Ancient Near East": "Muinainen Lähi-itä",
  Andean: "Andien sivilisaatiot",
  "Arctic & Subarctic": "Arktinen ja subarktinen",
  Balkans: "Balkan",
  Baltic: "Balttilainen",
  Caribbean: "Karibia",
  Caucasus: "Kaukasia",
  "Central Africa": "Keski-Afrikka",
  "Central America": "Väli-Amerikka",
  "Central Asia": "Keski-Aasia",
  "Central Europe": "Keski-Eurooppa",
  "East Africa": "Itä-Afrikka",
  "East Asia": "Itä-Aasia",
  "Eastern Europe": "Itä-Eurooppa",
  "Finno-Ugric": "Suomalais-ugrilainen",
  "Greco-Roman": "Greikkalais-roomalainen",
  Iranian: "Iranilainen",
  "Islamic Caliphates": "Islamilaiset kalifaatit",
  "Latin America": "Latinalainen Amerikka",
  Mediterranean: "Välimeren alue",
  Mesoamerican: "Mesoamerikka",
  "Middle East": "Lähi-itä",
  Nordic: "Pohjoismainen",
  "North Africa": "Pohjois-Afrikka",
  "North America": "Pohjois-Amerikka",
  "North America Post-Colonial": "Pohjois-Amerikka (jälkikoloniaalinen)",
  "North American Indigenous": "Pohjois-Amerikan alkuperäiskansat",
  Oceania: "Oseania",
  "Prehistoric & Archaeological": "Esihistoriallinen ja arkeologinen",
  Slavic: "Slaavilainen",
  "South American Indigenous": "Etelä-Amerikan alkuperäiskansat",
  "South Asia": "Etelä-Aasia",
  "Southeast Asia": "Kaakkois-Aasia",
  "Southern Africa": "Eteläinen Afrikka",
  "Southern Europe": "Etelä-Eurooppa",
  "West Africa": "Länsi-Afrikka",
  "Western & Central Europe": "Länsi- ja Keski-Eurooppa",
  "Western Europe": "Länsi-Eurooppa",
}

export const TERRITORY_NAME_TRANSLATIONS: Record<string, string> = {
  // Major Historical Empires
  "Roman Empire": "Rooman valtakunta",
  "Western Roman Empire": "Länsi-Rooman valtakunta",
  "Eastern Roman Empire": "Itä-Rooman valtakunta",
  "Byzantine Empire": "Bysantin valtakunta",
  "Ottoman Empire": "Osmanien valtakunta",
  "Holy Roman Empire": "Pyhä saksalais-roomalainen keisarikunta",
  "Russian Empire": "Venäjän keisarikunta",
  "British Empire": "Brittiläinen imperiumi",
  "Mongol Empire": "Mongolivaltakunta",
  "Achaemenid Empire": "Akhaimenidien valtakunta",
  "Sasanian Empire": "Sassanidien valtakunta",
  "Parthian Empire": "Parthian valtakunta",
  "Seleucid Empire": "Seleukidien valtakunta",
  "Ptolemaic Kingdom": "Ptolemaiosten kuningaskunta",
  "Mauryan Empire": "Maurya-valtakunta",
  "Gupta Empire": "Gupta-valtakunta",
  "Mughal Empire": "Suurmogulien valtakunta",
  "Songhai Empire": "Songhai-valtakunta",
  "Mali Empire": "Malin valtakunta",
  "Ghana Empire": "Ghanan kuningaskunta",
  "Inca Empire": "Inkkavaltakunta",
  "Aztec Empire": "Atsteekkivaltakunta",
  "Khmer Empire": "Khmerien valtakunta",
  "Srivijaya Empire": "Srivijayan valtakunta",
  "Majapahit Empire": "Majapahit-valtakunta",
  "Kievan Rus": "Kiovan Venäjä",
  "Golden Horde": "Kultainen orda",
  "Ilkhanate": "Il-kaanikunta",
  "Chagatai Khanate": "Tšagatai-kaanikunta",
  "Timurid Empire": "Timuridien valtakunta",
  "Umayyad Caliphate": "Umaijadien kalifaatti",
  "Abbasid Caliphate": "Abbasidien kalifaatti",
  "Fatimid Caliphate": "Fatimidien kalifaatti",
  "Cordoba Caliphate": "Córdoban kalifaatti",

  // Dynasties
  "Han Dynasty": "Han-dynastia",
  "Tang Dynasty": "Tang-dynastia",
  "Song Dynasty": "Song-dynastia",
  "Yuan Dynasty": "Yuan-dynastia",
  "Ming Dynasty": "Ming-dynastia",
  "Qing Dynasty": "Qing-dynastia",
  "Qin Dynasty": "Qin-dynastia",
  "Zhou Dynasty": "Zhou-dynastia",
  "Shang Dynasty": "Shang-dynastia",

  // Kingdoms & Sovereign States
  "Kingdom of France": "Ranskan kuningaskunta",
  "Kingdom of England": "Englannin kuningaskunta",
  "Kingdom of Scotland": "Skotlannin kuningaskunta",
  "Kingdom of Spain": "Espanjan kuningaskunta",
  "Kingdom of Portugal": "Portugalin kuningaskunta",
  "Kingdom of Sweden": "Ruotsin kuningaskunta",
  "Kingdom of Denmark": "Tanskan kuningaskunta",
  "Kingdom of Norway": "Norjan kuningaskunta",
  "Kingdom of Poland": "Puolan kuningaskunta",
  "Kingdom of Hungary": "Unkarin kuningaskunta",
  "Kingdom of Prussia": "Preussin kuningaskunta",
  "Kingdom of Naples": "Napolin kuningaskunta",
  "Kingdom of Sicily": "Sisilian kuningaskunta",
  "Kingdom of Ireland": "Irlannin kuningaskunta",
  "Grand Duchy of Lithuania": "Liettuan suuriruhtinaskunta",
  "Grand Duchy of Finland": "Suomen suuriruhtinaskunta",
  "Grand Duchy of Moscow": "Moskovan suuriruhtinaskunta",
  "Polish-Lithuanian Commonwealth": "Puola-Liettua",
  "Republic of Venice": "Venetsian tasavalta",
  "Republic of Genoa": "Genovan tasavalta",
  "Dutch Republic": "Alankomaiden tasavalta",
  "Papal States": "Kirkkovaltio",
  "Teutonic Order": "Saksalainen ritarikunta",

  // Modern & 20th Century Nations
  "Soviet Union": "Neuvostoliitto",
  "United States": "Yhdysvallat",
  "United States of America": "Yhdysvallat",
  "United Kingdom": "Yhdistynyt kuningaskunta",
  Finland: "Suomi",
  Sweden: "Ruotsi",
  Norway: "Norja",
  Denmark: "Tanska",
  Iceland: "Islanti",
  Estonia: "Viro",
  Latvia: "Latvia",
  Lithuania: "Liettua",
  Russia: "Venäjä",
  Germany: "Saksa",
  France: "Ranska",
  Spain: "Espanja",
  Portugal: "Portugali",
  Italy: "Italia",
  Greece: "Kreikka",
  Turkey: "Turkki",
  Egypt: "Egypti",
  China: "Kiina",
  Japan: "Japani",
  India: "Intia",
  Australia: "Australia",
  Canada: "Kanada",
  Brazil: "Brasilia",
  Mexico: "Meksiko",
  Poland: "Puola",
  Ukraine: "Ukraina",
  Belarus: "Valko-Venäjä",
  Austria: "Itävalta",
  Switzerland: "Sveitsi",
  Belgium: "Belgia",
  Netherlands: "Alankomaat",
  Czechia: "Tšekki",
  "Czech Republic": "Tšekki",
  Slovakia: "Slovakia",
  Hungary: "Unkari",
  Romania: "Romania",
  Bulgaria: "Bulgaria",
  Serbia: "Serbia",
  Croatia: "Kroatia",
  Ireland: "Irlanti",
  Cyprus: "Kypros",
  Malta: "Malta",
  Iran: "Iran",
  Iraq: "Irak",
  Syria: "Syyria",
  Israel: "Israel",
  Palestine: "Palestiina",
  Jordan: "Jordania",
  "Saudi Arabia": "Saudi-Arabia",
  Yemen: "Jemen",
  Oman: "Oman",
  Afghanistan: "Afganistan",
  Pakistan: "Pakistan",
  Bangladesh: "Bangladesh",
  Myanmar: "Myanmar (Burma)",
  Thailand: "Thaimaa",
  Vietnam: "Vietnam",
  Indonesia: "Indonesia",
  Malaysia: "Malesia",
  Philippines: "Filippiinit",
  "South Korea": "Etelä-Korea",
  "North Korea": "Pohjois-Korea",
  "South Africa": "Etelä-Afrikka",
  Morocco: "Marokko",
  Algeria: "Algeria",
  Tunisia: "Tunisia",
  Libya: "Libya",
  Ethiopia: "Etiopia",
  Kenya: "Kenia",
  Nigeria: "Nigeria",
  Congo: "Kongo",
  "New Zealand": "Uusi-Seelanti",
  Argentina: "Argentiina",
  Chile: "Chile",
  Peru: "Peru",
  Colombia: "Kolumbia",
}

/**
 * Returns a translated UI string by key.
 */
export function t(key: string, language: Language = "en"): string {
  const item = UI_TRANSLATIONS[key]
  if (!item) return key
  return item[language] || item.en || key
}

/**
 * Returns localized culture sphere name.
 */
export function getLocalizedCultureSphere(sphere: string, language: Language = "en"): string {
  if (language === "en") return sphere
  return CULTURE_SPHERE_TRANSLATIONS[sphere] || sphere
}

/**
 * Returns localized territory name from dictionary or fallback.
 */
export function getLocalizedTerritoryName(name: string, language: Language = "en"): string {
  if (language === "en") return name
  return TERRITORY_NAME_TRANSLATIONS[name] || name
}

/**
 * Resolves the primary localized display name for a GeoJSON feature.
 */
export function getLocalizedFeatureName(
  properties: Record<string, any> | undefined | null,
  language: Language = "en",
): string {
  if (!properties) return "Unknown"
  const rawName = properties.name || properties.NAME || properties.NAME_LONG || properties.formal_name || ""

  if (language === "fi") {
    // 1. Highest priority: linked culture metadata with Finnish name
    if (properties.culture_metadata?.name_fi) {
      return properties.culture_metadata.name_fi
    }
    // 2. Dictionary translation for polity name
    if (rawName && TERRITORY_NAME_TRANSLATIONS[rawName]) {
      return TERRITORY_NAME_TRANSLATIONS[rawName]
    }
  }

  return rawName || "Unknown"
}
