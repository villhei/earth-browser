/**
 * Historical Era Catalog & Metadata
 *
 * GeoJSON boundary datasets and historical eras are sourced from:
 * https://github.com/aourednik/historical-basemaps/tree/master/geojson
 *
 * Created & curated by André Ourednik (https://ourednik.info/historicalmaps/)
 * License: GNU General Public License v3.0 (GPL-3.0)
 */

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
    slug: "world-bc123000",
    filename: "world_bc123000.geojson",
    name: "123,000 BCE - Eemian Interglacial & Early Humans",
    year_start: -123000,
    year_end: -10000,
    year_label: "123,000 BCE",
    description:
      "Eemian interglacial period; early anatomically modern humans and Neanderthal hunter-gatherer ranges.",
  },
  {
    slug: "world-bc10000",
    filename: "world_bc10000.geojson",
    name: "10,000 BCE - Dawn of the Holocene",
    year_start: -10000,
    year_end: -8000,
    year_label: "10,000 BCE",
    description:
      "End of the Last Glacial Period; emergence of early agriculture and sedentary hunter-gatherer communities in the Fertile Crescent.",
  },
  {
    slug: "world-bc8000",
    filename: "world_bc8000.geojson",
    name: "8000 BCE - Early Neolithic Era",
    year_start: -8000,
    year_end: -5000,
    year_label: "8000 BCE",
    description:
      "Early agricultural settlements expand across the Near East, Anatolia (Göbekli Tepe, Çatalhöyük), and East Asia.",
  },
  {
    slug: "world-bc5000",
    filename: "world_bc5000.geojson",
    name: "5000 BCE - Chalcolithic & Ubaid Period",
    year_start: -5000,
    year_end: -4000,
    year_label: "5000 BCE",
    description:
      "Ubaid period in Mesopotamia, early farming cultures in the Nile Valley, Yangshao culture in China, and Vinča culture in Europe.",
  },
  {
    slug: "world-bc4000",
    filename: "world_bc4000.geojson",
    name: "4000 BCE - Early Bronze Age & Urban Genesis",
    year_start: -4000,
    year_end: -3000,
    year_label: "4000 BCE",
    description:
      "First cities arise in Sumer (Uruk period); predynastic Egypt and Kurgan cultures spread across the Eurasian steppe.",
  },
  {
    slug: "world-bc3000",
    filename: "world_bc3000.geojson",
    name: "3000 BCE - Early Dynastic & Sumerian Cities",
    year_start: -3000,
    year_end: -2000,
    year_label: "3000 BCE",
    description:
      "Unification of Egypt under the First Dynasty, Sumerian Early Dynastic city-states, and the rise of the Indus Valley Civilization.",
  },
  {
    slug: "world-bc2000",
    filename: "world_bc2000.geojson",
    name: "2000 BCE - Middle Bronze Age & Minoan Crete",
    year_start: -2000,
    year_end: -1500,
    year_label: "2000 BCE",
    description:
      "Middle Kingdom Egypt, Ur III Sumerian Renaissance, Minoan civilization in Crete, and Xia/Erlitou China.",
  },
  {
    slug: "world-bc1500",
    filename: "world_bc1500.geojson",
    name: "1500 BCE - Late Bronze Age Empires",
    year_start: -1500,
    year_end: -1000,
    year_label: "1500 BCE",
    description:
      "New Kingdom Egyptian Empire, Hittite Empire in Anatolia, Mycenaean Greece, and Shang Dynasty in China.",
  },
  {
    slug: "world-bc1000",
    filename: "world_bc1000.geojson",
    name: "1000 BCE - Early Iron Age",
    year_start: -1000,
    year_end: -700,
    year_label: "1000 BCE",
    description:
      "Bronze Age collapse aftermath, Kingdom of Israel under David & Solomon, early Western Zhou Dynasty in China.",
  },
  {
    slug: "world-bc700",
    filename: "world_bc700.geojson",
    name: "700 BCE - Neo-Assyrian Empire & Archaic Greece",
    year_start: -700,
    year_end: -500,
    year_label: "700 BCE",
    description:
      "Neo-Assyrian Empire at its peak; Spring and Autumn period in China; rise of Archaic Greek poleis and Nubian 25th Dynasty.",
  },
  {
    slug: "world-bc500",
    filename: "world_bc500.geojson",
    name: "500 BCE - Classical Antiquity & Persian Zenith",
    year_start: -500,
    year_end: -400,
    year_label: "500 BCE",
    description:
      "Achaemenid Persian Empire at its zenith, Golden Age of Classical Greece, and early Roman Republic.",
  },
  {
    slug: "world-bc400",
    filename: "world_bc400.geojson",
    name: "400 BCE - Late Classical & Warring States",
    year_start: -400,
    year_end: -323,
    year_label: "400 BCE",
    description:
      "Peloponnesian War aftermath in Greece; Warring States era in China; Mahajanapadas and rise of Magadha in India.",
  },
  {
    slug: "world-bc323",
    filename: "world_bc323.geojson",
    name: "323 BCE - Hellenistic Kingdoms & Alexander",
    year_start: -323,
    year_end: -300,
    year_label: "323 BCE",
    description:
      "Death of Alexander the Great and division of his empire into Diadochi kingdoms (Ptolemaic, Seleucid, Antigonid); Mauryan expansion.",
  },
  {
    slug: "world-bc300",
    filename: "world_bc300.geojson",
    name: "300 BCE - Mauryan Empire & Hellenistic World",
    year_start: -300,
    year_end: -200,
    year_label: "300 BCE",
    description:
      "Mauryan Empire under Chandragupta Maurya and Ashoka dominates South Asia; Qin state prepares for Chinese unification.",
  },
  {
    slug: "world-bc200",
    filename: "world_bc200.geojson",
    name: "200 BCE - Han & Roman Expansion",
    year_start: -200,
    year_end: -100,
    year_label: "200 BCE",
    description:
      "Western Han Dynasty consolidates China, Roman Republic defeats Carthage in the Second Punic War.",
  },
  {
    slug: "world-bc100",
    filename: "world_bc100.geojson",
    name: "100 BCE - Late Roman Republic & Han Silk Road",
    year_start: -100,
    year_end: -1,
    year_label: "100 BCE",
    description:
      "Late Roman Republic under Marius and Sulla; Han Dynasty expands the Silk Road through Central Asia under Emperor Wu.",
  },
  {
    slug: "world-bc1",
    filename: "world_bc1.geojson",
    name: "1 BCE - Augustan Roman Empire",
    year_start: -1,
    year_end: 100,
    year_label: "1 BCE",
    description:
      "Pax Romana begins under Emperor Augustus; Han Dynasty China and Parthian Empire dominate Eurasia.",
  },
  {
    slug: "world-100",
    filename: "world_100.geojson",
    name: "100 CE - Trajan & High Roman Empire",
    year_start: 100,
    year_end: 200,
    year_label: "100 CE",
    description:
      "Roman Empire reaches maximum territorial extent under Trajan; Eastern Han Dynasty and Kushan Empire thrive.",
  },
  {
    slug: "world-200",
    filename: "world_200.geojson",
    name: "200 CE - Severan Rome & Three Kingdoms Prelude",
    year_start: 200,
    year_end: 300,
    year_label: "200 CE",
    description:
      "Severan dynasty in Rome; collapse of the Han Dynasty leading to the Three Kingdoms era in China; Sasanian rise in Persia.",
  },
  {
    slug: "world-300",
    filename: "world_300.geojson",
    name: "300 CE - Tetrarchy & Gupta Foundation",
    year_start: 300,
    year_end: 400,
    year_label: "300 CE",
    description:
      "Diocletian's Tetrarchy reorganizes Rome; Gupta Empire founded in India; Jin Dynasty in China.",
  },
  {
    slug: "world-400",
    filename: "world_400.geojson",
    name: "400 CE - Late Antiquity & Migrations",
    year_start: 400,
    year_end: 500,
    year_label: "400 CE",
    description:
      "Western Roman Empire collapses amidst barbarian migrations; Eastern Roman (Byzantine), Sasanian, and Gupta empires flourish.",
  },
  {
    slug: "world-500",
    filename: "world_500.geojson",
    name: "500 CE - Post-Roman Kingdoms & Northern/Southern Dynasties",
    year_start: 500,
    year_end: 600,
    year_label: "500 CE",
    description:
      "Ostrogothic, Visigothic, and Frankish kingdoms divide Western Europe; Byzantine Empire under Anastasius I; Northern & Southern dynasties in China.",
  },
  {
    slug: "world-600",
    filename: "world_600.geojson",
    name: "600 CE - Early Middle Ages & Sui Unification",
    year_start: 600,
    year_end: 700,
    year_label: "600 CE",
    description:
      "Byzantine-Sasanian wars on the eve of the Islamic expansion; Sui dynasty reunifies China followed by early Tang.",
  },
  {
    slug: "world-700",
    filename: "world_700.geojson",
    name: "700 CE - Umayyad Caliphate & Tang Golden Age",
    year_start: 700,
    year_end: 800,
    year_label: "700 CE",
    description:
      "Umayyad Caliphate expands from Spain to the Indus Valley; Tang Dynasty China reaches cultural height under Empress Wu Zetian.",
  },
  {
    slug: "world-800",
    filename: "world_800.geojson",
    name: "800 CE - Carolingian & Abbasid Golden Age",
    year_start: 800,
    year_end: 900,
    year_label: "800 CE",
    description:
      "Charlemagne crowned Emperor of the Romans; Abbasid Caliphate Golden Age in Baghdad; Tang Dynasty in China.",
  },
  {
    slug: "world-900",
    filename: "world_900.geojson",
    name: "900 CE - Five Dynasties & Norse Expansion",
    year_start: 900,
    year_end: 1000,
    year_label: "900 CE",
    description:
      "Viking expansions in Europe; collapse of Tang China into the Five Dynasties; rise of the Samanids and Fatimids.",
  },
  {
    slug: "world-1000",
    filename: "world_1000.geojson",
    name: "1000 CE - High Middle Ages & Song Dynasty",
    year_start: 1000,
    year_end: 1100,
    year_label: "1000 CE",
    description:
      "Song Dynasty China, Holy Roman Empire under the Ottonians, Fatimid Caliphate, and Byzantine Empire under Basil II.",
  },
  {
    slug: "world-1100",
    filename: "world_1100.geojson",
    name: "1100 CE - Crusader States & Great Seljuks",
    year_start: 1100,
    year_end: 1200,
    year_label: "1100 CE",
    description:
      "Establishment of Crusader States after the First Crusade; Great Seljuk Empire dominates the Middle East; Liao and Northern Song in China.",
  },
  {
    slug: "world-1200",
    filename: "world_1200.geojson",
    name: "1200 CE - Eve of the Mongol Invasions",
    year_start: 1200,
    year_end: 1279,
    year_label: "1200 CE",
    description:
      "Ayyubid Sultanate under Saladin's successors; Jin and Southern Song in China; Genghis Khan prepares to unify the Mongol tribes.",
  },
  {
    slug: "world-1279",
    filename: "world_1279.geojson",
    name: "1279 CE - Mongol Empire & Yuan Dynasty",
    year_start: 1279,
    year_end: 1300,
    year_label: "1279 CE",
    description:
      "Kublai Khan conquers the Song Dynasty establishing the Yuan Dynasty; Pax Mongolica spans Eurasia.",
  },
  {
    slug: "world-1300",
    filename: "world_1300.geojson",
    name: "1300 CE - Four Mongol Khanates & Ottoman Genesis",
    year_start: 1300,
    year_end: 1400,
    year_label: "1300 CE",
    description:
      "Division of Mongol Empire into Yuan, Ilkhanate, Chagatai, and Golden Horde; foundation of Ottoman principality by Osman I.",
  },
  {
    slug: "world-1400",
    filename: "world_1400.geojson",
    name: "1400 CE - Timurid Empire & Early Ming",
    year_start: 1400,
    year_end: 1492,
    year_label: "1400 CE",
    description:
      "Conquests of Timur (Tamerlane) across Central Asia and Middle East; Ming Dynasty consolidates China and launches treasure voyages.",
  },
  {
    slug: "world-1492",
    filename: "world_1492.geojson",
    name: "1492 CE - Age of Discovery",
    year_start: 1492,
    year_end: 1500,
    year_label: "1492 CE",
    description:
      "Columbus reaches the Americas; Spanish Reconquista completed; Ming Dynasty China and Ottoman Empire expand.",
  },
  {
    slug: "world-1500",
    filename: "world_1500.geojson",
    name: "1500 CE - Global Maritime Networks",
    year_start: 1500,
    year_end: 1530,
    year_label: "1500 CE",
    description:
      "Portuguese establish sea route to India (Vasco da Gama) and Brazil (Cabral); Safavid dynasty founded in Iran.",
  },
  {
    slug: "world-1530",
    filename: "world_1530.geojson",
    name: "1530 CE - Reformation & Global Empires",
    year_start: 1530,
    year_end: 1600,
    year_label: "1530 CE",
    description:
      "Charles V rules Habsburg global empire; Protestant Reformation; Mughal Empire established in India by Babur.",
  },
  {
    slug: "world-1600",
    filename: "world_1600.geojson",
    name: "1600 CE - Tokugawa Shogunate & East India Companies",
    year_start: 1600,
    year_end: 1650,
    year_label: "1600 CE",
    description:
      "Battle of Sekigahara establishes Tokugawa Shogunate in Japan; English and Dutch East India Companies chartered; Akbar expands Mughal Empire.",
  },
  {
    slug: "world-1650",
    filename: "world_1650.geojson",
    name: "1650 CE - Peace of Westphalia",
    year_start: 1650,
    year_end: 1700,
    year_label: "1650 CE",
    description:
      "End of Thirty Years' War establishes modern nation-state sovereignty; Qing Dynasty conquers Ming China.",
  },
  {
    slug: "world-1700",
    filename: "world_1700.geojson",
    name: "1700 CE - Great Northern War & War of Spanish Succession",
    year_start: 1700,
    year_end: 1715,
    year_label: "1700 CE",
    description:
      "Outbreak of the Great Northern War in the Baltic and War of the Spanish Succession; Peter the Great modernizes Russia.",
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
    year_end: 1800,
    year_label: "1783 CE",
    description:
      "Treaty of Paris recognizes the United States; Pre-Revolutionary France; Catherine the Great expands Russia into Crimea.",
  },
  {
    slug: "world-1800",
    filename: "world_1800.geojson",
    name: "1800 CE - Napoleonic Era & Global Shifts",
    year_start: 1800,
    year_end: 1815,
    year_label: "1800 CE",
    description:
      "Rise of Napoleon in Europe; United States expands; Qing Dynasty at peak geographic extent; British East India Company expands across India.",
  },
  {
    slug: "world-1815",
    filename: "world_1815.geojson",
    name: "1815 CE - Congress of Vienna",
    year_start: 1815,
    year_end: 1878,
    year_label: "1815 CE",
    description:
      "Post-Napoleonic Concert of Europe; Latin American wars of independence create new republics.",
  },
  {
    slug: "world-1878",
    filename: "world_1878.geojson",
    name: "1878 CE - Congress of Berlin & Eve of the War of the Pacific",
    year_start: 1878,
    year_end: 1880,
    year_label: "1878 CE",
    description:
      "Congress of Berlin restructures the Balkans; eve of the War of the Pacific in South America; Late Victorian imperial era.",
  },
  {
    slug: "world-1880",
    filename: "world_1880.geojson",
    name: "1880 CE - High Imperialism",
    year_start: 1880,
    year_end: 1900,
    year_label: "1880 CE",
    description:
      "Scramble for Africa begins; newly unified Germany and Italy; Victorian British Empire at global peak.",
  },
  {
    slug: "world-1900",
    filename: "world_1900.geojson",
    name: "1900 CE - Turn of the Century",
    year_start: 1900,
    year_end: 1914,
    year_label: "1900 CE",
    description:
      "Boxer Rebellion in China; Boer War in South Africa; global imperial powers at maximum territorial extent.",
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
    year_end: 1930,
    year_label: "1920 CE",
    description:
      "Post-WWI border restructuring under Treaty of Versailles; emergence of Poland, Czechoslovakia, Yugoslavia, and Soviet Union.",
  },
  {
    slug: "world-1930",
    filename: "world_1930.geojson",
    name: "1930 CE - Great Depression & Rising Autocracies",
    year_start: 1930,
    year_end: 1938,
    year_label: "1930 CE",
    description:
      "Global economic crisis of the Great Depression; Weimar Republic crisis; Japanese expansion in Manchuria.",
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
    year_end: 1960,
    year_label: "1945 CE",
    description:
      "Post-WWII division of Germany and Europe; founding of the United Nations; dawn of the Cold War and Asian decolonization.",
  },
  {
    slug: "world-1960",
    filename: "world_1960.geojson",
    name: "1960 CE - Year of Africa & Cold War Zenith",
    year_start: 1960,
    year_end: 1994,
    year_label: "1960 CE",
    description:
      "Wave of African independence (Year of Africa); Space Race and Cold War nuclear standoff between NATO and Warsaw Pact.",
  },
  {
    slug: "world-1994",
    filename: "world_1994.geojson",
    name: "1994 CE - Post-Cold War World",
    year_start: 1994,
    year_end: 2000,
    year_label: "1994 CE",
    description:
      "Dissolution of Soviet Union and Yugoslavia; establishment of the European Union (Maastricht); post-Apartheid South Africa.",
  },
  {
    slug: "world-2000",
    filename: "world_2000.geojson",
    name: "2000 CE - Turn of the Millennium",
    year_start: 2000,
    year_end: 2010,
    year_label: "2000 CE",
    description:
      "Dawn of the 21st century; expanding European Union; rise of global internet economy and WTO integration.",
  },
  {
    slug: "world-2010",
    filename: "world_2010.geojson",
    name: "2010 CE - Contemporary Era",
    year_start: 2010,
    year_end: 2024,
    year_label: "2010 CE",
    description:
      "Globalized modern world; Arab Spring prelude; contemporary geopolitical alignments and sovereign states.",
  },
]

export function getEraByFilename(filename: string): EraMetadata | undefined {
  return ERA_CATALOG.find((era) => era.filename === filename)
}

export function getEraBySlug(slug: string): EraMetadata | undefined {
  return ERA_CATALOG.find((era) => era.slug === slug)
}
