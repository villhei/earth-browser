export interface EraMetadata {
  slug: string
  name: string
  year_start: number
  year_end?: number
  year_label: string
  description: string
  filename: string
}

export const ERA_CATALOG: EraMetadata[] = [
  {
    slug: "world-bc2000",
    filename: "world_bc2000.geojson",
    name: "2000 BCE - Early Bronze Age",
    year_start: -2000,
    year_end: -1000,
    year_label: "2000 BCE",
    description:
      "Old Kingdom Egypt, Ur III Sumerian Renaissance, early Indus Valley Civilization, and Xia/Erlitou China.",
  },
  {
    slug: "world-bc1000",
    filename: "world_bc1000.geojson",
    name: "1000 BCE - Early Iron Age",
    year_start: -1000,
    year_end: -500,
    year_label: "1000 BCE",
    description:
      "Bronze Age collapse aftermath, Kingdom of Israel under David & Solomon, early Western Zhou Dynasty in China.",
  },
  {
    slug: "world-bc500",
    filename: "world_bc500.geojson",
    name: "500 BCE - Classical Antiquity",
    year_start: -500,
    year_end: -323,
    year_label: "500 BCE",
    description:
      "Achaemenid Persian Empire at its zenith, Golden Age of Classical Greece, and early Roman Republic.",
  },
  {
    slug: "world-bc323",
    filename: "world_bc323.geojson",
    name: "323 BCE - Hellenistic Kingdoms",
    year_start: -323,
    year_end: -200,
    year_label: "323 BCE",
    description:
      "Death of Alexander the Great and division of his empire into Diadochi kingdoms (Ptolemaic, Seleucid, Antigonid).",
  },
  {
    slug: "world-bc200",
    filename: "world_bc200.geojson",
    name: "200 BCE - Han & Roman Expansion",
    year_start: -200,
    year_end: -1,
    year_label: "200 BCE",
    description:
      "Western Han Dynasty consolidates China, Roman Republic defeats Carthage in the Second Punic War.",
  },
  {
    slug: "world-1bc",
    filename: "world1bc.geojson",
    name: "1 BCE - Augustan Roman Empire",
    year_start: -1,
    year_end: 400,
    year_label: "1 BCE",
    description:
      "Pax Romana begins under Emperor Augustus; Han Dynasty China and Parthian Empire dominate Eurasia.",
  },
  {
    slug: "world-400",
    filename: "world_400.geojson",
    name: "400 CE - Late Antiquity & Migrations",
    year_start: 400,
    year_end: 600,
    year_label: "400 CE",
    description:
      "Western Roman Empire collapses amidst barbarian migrations; Eastern Roman (Byzantine), Sasanian, and Gupta empires flourish.",
  },
  {
    slug: "world-600",
    filename: "world_600.geojson",
    name: "600 CE - Early Middle Ages",
    year_start: 600,
    year_end: 800,
    year_label: "600 CE",
    description:
      "Byzantine-Sasanian wars on the eve of the Islamic expansion; Sui dynasty reunifies China followed by early Tang.",
  },
  {
    slug: "world-800",
    filename: "world_800.geojson",
    name: "800 CE - Carolingian & Abbasid Golden Age",
    year_start: 800,
    year_end: 1000,
    year_label: "800 CE",
    description:
      "Charlemagne crowned Emperor of the Romans; Abbasid Caliphate Golden Age in Baghdad; Tang Dynasty in China.",
  },
  {
    slug: "world-1000",
    filename: "world_1000.geojson",
    name: "1000 CE - High Middle Ages",
    year_start: 1000,
    year_end: 1279,
    year_label: "1000 CE",
    description:
      "Song Dynasty China, Holy Roman Empire under the Ottonians, Fatimid Caliphate, and Byzantine Empire under Basil II.",
  },
  {
    slug: "world-1279",
    filename: "world_1279.geojson",
    name: "1279 CE - Mongol Empire & Yuan Dynasty",
    year_start: 1279,
    year_end: 1492,
    year_label: "1279 CE",
    description:
      "Kublai Khan conquers the Song Dynasty establishing the Yuan Dynasty; Pax Mongolica spans Eurasia.",
  },
  {
    slug: "world-1492",
    filename: "world_1492.geojson",
    name: "1492 CE - Age of Discovery",
    year_start: 1492,
    year_end: 1530,
    year_label: "1492 CE",
    description:
      "Columbus reaches the Americas; Spanish Reconquista completed; Ming Dynasty China and Ottoman Empire expand.",
  },
  {
    slug: "world-1530",
    filename: "world_1530.geojson",
    name: "1530 CE - Reformation & Global Empires",
    year_start: 1530,
    year_end: 1650,
    year_label: "1530 CE",
    description:
      "Charles V rules Habsburg global empire; Protestant Reformation; Mughal Empire established in India.",
  },
  {
    slug: "world-1650",
    filename: "world_1650.geojson",
    name: "1650 CE - Peace of Westphalia",
    year_start: 1650,
    year_end: 1715,
    year_label: "1650 CE",
    description:
      "End of Thirty Years' War establishes modern nation-state sovereignty; Qing Dynasty conquers Ming China.",
  },
  {
    slug: "world-1715",
    filename: "world_1715.geojson",
    name: "1715 CE - Age of Enlightenment",
    year_start: 1715,
    year_end: 1783,
    year_label: "1715 CE",
    description:
      "End of War of the Spanish Succession and death of Louis XIV; rise of Great Britain, Prussia, and Russian Empire under Peter the Great.",
  },
  {
    slug: "world-1783",
    filename: "world_1783.geojson",
    name: "1783 CE - American Independence",
    year_start: 1783,
    year_end: 1815,
    year_label: "1783 CE",
    description:
      "Treaty of Paris recognizes the United States; Pre-Revolutionary France; Catherine the Great expands Russia into Crimea.",
  },
  {
    slug: "world-1815",
    filename: "world_1815.geojson",
    name: "1815 CE - Congress of Vienna",
    year_start: 1815,
    year_end: 1880,
    year_label: "1815 CE",
    description:
      "Post-Napoleonic Concert of Europe; Latin American wars of independence create new republics.",
  },
  {
    slug: "world-1880",
    filename: "world_1880.geojson",
    name: "1880 CE - High Imperialism",
    year_start: 1880,
    year_end: 1914,
    year_label: "1880 CE",
    description:
      "Scramble for Africa begins; newly unified Germany and Italy; Victorian British Empire at global peak.",
  },
  {
    slug: "world-1914",
    filename: "world_1914.geojson",
    name: "1914 CE - Outbreak of World War I",
    year_start: 1914,
    year_end: 1920,
    year_label: "1914 CE",
    description:
      "Eurasia on the eve of WWI; European alliances, Austro-Hungarian, Russian, and Ottoman Empires before their collapse.",
  },
  {
    slug: "world-1920",
    filename: "world_1920.geojson",
    name: "1920 CE - Interwar & League of Nations",
    year_start: 1920,
    year_end: 1938,
    year_label: "1920 CE",
    description:
      "Post-WWI border restructuring under Treaty of Versailles; emergence of Poland, Czechoslovakia, Yugoslavia, and Soviet Union.",
  },
  {
    slug: "world-1938",
    filename: "world_1938.geojson",
    name: "1938 CE - Eve of World War II",
    year_start: 1938,
    year_end: 1945,
    year_label: "1938 CE",
    description:
      "Pre-WWII Europe following Austrian Anschluss; Second Sino-Japanese War; Axis and Allied powers aligning.",
  },
  {
    slug: "world-1945",
    filename: "world_1945.geojson",
    name: "1945 CE - Post-World War II",
    year_start: 1945,
    year_end: 1994,
    year_label: "1945 CE",
    description:
      "Post-WWII division of Germany and Europe; founding of the United Nations; dawn of the Cold War and Asian decolonization.",
  },
  {
    slug: "world-1994",
    filename: "world_1994.geojson",
    name: "1994 CE - Post-Cold War World",
    year_start: 1994,
    year_end: 2024,
    year_label: "1994 CE",
    description:
      "Dissolution of Soviet Union and Yugoslavia; establishment of the European Union (Maastricht); post-Apartheid South Africa.",
  },
  {
    slug: "modern-110m",
    filename: "ne_110m_admin_0_countries.geojson",
    name: "Modern Countries & Borders (Natural Earth)",
    year_start: 2024,
    year_label: "Modern",
    description:
      "Contemporary world sovereign states and territories from Natural Earth 1:110m administrative boundaries.",
  },
]

export function getEraByFilename(filename: string): EraMetadata | undefined {
  return ERA_CATALOG.find((era) => era.filename === filename)
}

export function getEraBySlug(slug: string): EraMetadata | undefined {
  return ERA_CATALOG.find((era) => era.slug === slug)
}
