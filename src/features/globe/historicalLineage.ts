import { MODERN_PALETTE_BY_NAME, MODERN_COUNTRY_PALETTE, ModernCountryColor } from "./modernPalettes"
import entityRegistryData from "./entityRegistry.json"

export interface EntityMetadata {
  color: string
  lineageId: string
  canonicalName: string
  cultureGroup?: string
  isUnclaimed?: boolean
}

export const NEUTRAL_TERRITORY_COLOR = "#475569" // Muted slate gray for unclaimed wilderness

// Words that indicate non-state / unorganized / unclaimed territories
const UNCLAIMED_KEYWORDS = [
  "unclaimed",
  "unknown",
  "unnamed",
  "antarctica",
  "the americas",
  "unconquered tribes",
  "terra nullius",
  "no sovereignty",
  "null",
  "undefined",
  "n/a",
  "none",
]

/**
 * Returns true if a feature represents terra nullius / unclaimed wilderness / unknown / Antarctica
 */
export function isNeutralOrUnclaimed(name?: string | null): boolean {
  if (!name) return true
  const lower = name.trim().toLowerCase()
  if (
    !lower ||
    lower === "null" ||
    lower === "undefined" ||
    lower === "unknown" ||
    lower === "unnamed" ||
    lower === "none" ||
    lower === "n/a"
  ) {
    return true
  }
  return UNCLAIMED_KEYWORDS.some((kw) => lower.includes(kw))
}

/**
 * Deterministic Golden-Ratio HSL Palette Generator.
 * Ensures uncataloged ancient tribes/cultures get distinct, repeatable vivid colors.
 */
export function getDeterministicPastelColor(name: string): string {
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }

  // Golden ratio hue distribution
  const goldenRatio = 0.618033988749895
  let h = (Math.abs(hash) * goldenRatio) % 1
  const hue = Math.floor(h * 360)
  // Vivid saturation (82%) and balanced lightness (50%) for clear contrast and visibility
  return `hsl(${hue}, 82%, 50%)`
}

export const getDeterministicVividColor = getDeterministicPastelColor

/**
 * Clean and strip decorative punctuation, leading brackets, and extract sub-components
 */
function sanitizeNameStrings(raw: string): { clean: string; base: string; inParens: string[] } {
  const clean = raw.replace(/^[\[\(\{]+/, "").replace(/[\]\}]+$/, "").trim()
  const inParens: string[] = []
  const parenRegex = /\(([^)]+)\)/g
  let match: RegExpExecArray | null
  while ((match = parenRegex.exec(clean)) !== null) {
    inParens.push(match[1].trim())
  }
  const base = clean.replace(/\([^)]*\)/g, "").trim()
  return { clean, base, inParens }
}

/**
 * Historical Lineage Pattern Map.
 * Maps historical prefixes, keywords, cultural areas, and dynasties to their modern anchor or distinct historical identity.
 */
export interface LineageRule {
  pattern: RegExp
  lineageId: string
  canonicalName: string
  baseColor: string
  cultureGroup?: string
}

export const HISTORICAL_LINEAGE_RULES: LineageRule[] = [
  // ==========================================
  // 1. Paleolithic, Mesolithic & Archaeological Horizons & Cultures
  // ==========================================
  // Early Hominins & Paleolithic
  { pattern: /neanderthal/i, lineageId: "neanderthal", canonicalName: "Neanderthal Populations", baseColor: "#2563eb", cultureGroup: "Prehistoric & Archaeological" },
  { pattern: /homo erectus/i, lineageId: "homo-erectus", canonicalName: "Homo erectus Populations", baseColor: "#dc2626", cultureGroup: "Prehistoric & Archaeological" },
  { pattern: /homo heidelbergensis/i, lineageId: "homo-heidelbergensis", canonicalName: "Homo heidelbergensis Populations", baseColor: "#7c3aed", cultureGroup: "Prehistoric & Archaeological" },

  // Indigenous Hunter-Gatherers & Foragers
  { pattern: /australian aboriginal|aboriginal tasmanian|tasmanian|aboriginal tribes|badimaya|gugu-badhun|arrernte|banjima|bardi|bibbulman|eora|gagudju|gamberre|gooniyandi|goreng|gunbalang|gungurugoni|gunibidji|gunwinggu|gurindji|iwaidja|jabirrjabirr|jaburrara|jaminjung|jaru|jawoyn|jingili|jiwarli|jukun|jurruru|kadjerong|kalaako|kaniyang|karajarri|karangpurru|pinikura|yiiji/i, lineageId: "australian-aboriginal", canonicalName: "Australian & Tasmanian Aboriginal Peoples", baseColor: "#c2410c", cultureGroup: "Oceania" },
  { pattern: /arctic marine mammal hunters|paleo-inuit|inuit|thule|dorset|yupik|yup.ik|cup.ik|aleut|unangax|inupiat|inupiaq|alutiiq|sugpiaq|suspiaq|eyak|eyaq/i, lineageId: "arctic-peoples", canonicalName: "Arctic & Circumpolar Peoples", baseColor: "#0284c7", cultureGroup: "Arctic & Subarctic" },
  { pattern: /subarctic forest hunter|athabaskan|innu|beothuk|dene\b|t.atsaot.ine|slavey|chipewyan|dogrib|gwich.in|tutchone|tahltan|kaska|sekani|sahtu|champagne & aishihik|teslin/i, lineageId: "subarctic-peoples", canonicalName: "Subarctic Indigenous Peoples", baseColor: "#0f766e", cultureGroup: "Arctic & Subarctic" },
  { pattern: /paleo-siberian|siberians|chukchi|koryak|it.lmen|yukaghir|kamchadal/i, lineageId: "paleo-siberian", canonicalName: "Paleo-Siberian Peoples", baseColor: "#0369a1", cultureGroup: "Arctic & Subarctic" },
  { pattern: /finno-ugric taiga|s[aá]mi|saami|lapp/i, lineageId: "finno-ugric-taiga", canonicalName: "Finno-Ugric Taiga Peoples", baseColor: "#0d9488", cultureGroup: "Finno-Ugric" },
  { pattern: /guanches/i, lineageId: "guanches", canonicalName: "Guanches (Canary Islands)", baseColor: "#ca8a04", cultureGroup: "North Africa" },
  { pattern: /khoiasan|khoisan|khoikhoi|\bsan\b|bushm[ae]n/i, lineageId: "khoisan", canonicalName: "Khoisan Peoples", baseColor: "#ca8a04", cultureGroup: "Southern Africa" },
  { pattern: /west african cereal farmers|bantou|bantu/i, lineageId: "african-agriculturalists", canonicalName: "Sub-Saharan Agricultural Traditions", baseColor: "#15803d", cultureGroup: "West Africa" },
  { pattern: /ethiopian highland|ethiopian farmers/i, lineageId: "ethiopian-highland-traditions", canonicalName: "Ethiopian Highlands Traditions", baseColor: "#15803d", cultureGroup: "East Africa" },
  { pattern: /saharan (pastoral|nomadic)|tuareg|berber tribes|berbers|numidia|mauretania|kingdom of gala|kingdom of syphax|moors/i, lineageId: "berber-saharan", canonicalName: "Berber & Saharan Peoples", baseColor: "#b45309", cultureGroup: "North Africa" },

  // Specific Eurasian Archaeological Cultures (Distinct vivid palettes)
  { pattern: /chernoles/i, lineageId: "chernoles", canonicalName: "Chernoles Culture (Forest-Steppe Iron Age)", baseColor: "#10b981", cultureGroup: "Eastern Europe" },
  { pattern: /karasuk/i, lineageId: "karasuk", canonicalName: "Karasuk Culture (Siberian & Central Asian Bronze Age)", baseColor: "#06b6d4", cultureGroup: "Central Asia" },
  { pattern: /lusatian|lausitz/i, lineageId: "lusatian", canonicalName: "Lusatian Culture (Central European Bronze/Iron Age)", baseColor: "#f59e0b", cultureGroup: "Central Europe" },
  { pattern: /milograd/i, lineageId: "milograd", canonicalName: "Milograd Culture (Dnieper-Pripet Early Iron Age)", baseColor: "#8b5cf6", cultureGroup: "Eastern Europe" },
  { pattern: /hallstatt|celltic hallsatt|la t[èe]ne|la tene/i, lineageId: "celtic-archaeological", canonicalName: "Hallstatt & La Tène Celtic Traditions", baseColor: "#15803d", cultureGroup: "Western Europe" },
  { pattern: /pomeranian|masurian culture|sambian|brushed.pottery|plain-pottery|early combware|volga-kamm|\bnarva\b/i, lineageId: "baltic-archaeological", canonicalName: "Baltic & Pomeranian Archaeological Cultures", baseColor: "#ec4899", cultureGroup: "Baltic" },
  { pattern: /n\.?\s*european bronze age|nordic bronze age|urnfield|únětice|unetice/i, lineageId: "nordic-urnfield-bronze", canonicalName: "Nordic & Urnfield Bronze Age Cultures", baseColor: "#eab308", cultureGroup: "Western & Central Europe" },
  { pattern: /bell-shaped|\bbeaker\b|funnel-beaker|corded ware|battle-axe culture/i, lineageId: "beaker-corded-ware", canonicalName: "Bell Beaker & Corded Ware Traditions", baseColor: "#ea580c", cultureGroup: "Western & Central Europe" },
  { pattern: /yamnaya|catacomb|sintashta|andronovo|afanasevo|kelteminar/i, lineageId: "steppe-pastoral-archaeological", canonicalName: "Eurasian Steppe Pastoral Traditions", baseColor: "#0284c7", cultureGroup: "Central Asia" },
  { pattern: /jomon|jōmon/i, lineageId: "jomon", canonicalName: "Jōmon Prehistoric Culture", baseColor: "#e11d48", cultureGroup: "East Asia" },
  { pattern: /dapenkeng|dakapeng|taiwanese tribes/i, lineageId: "dapenkeng-austronesian", canonicalName: "Dapenkeng & Proto-Austronesian Cultures", baseColor: "#06b6d4", cultureGroup: "Oceania" },
  { pattern: /austro-asiatic rice|austroasian rice|mon-khmer/i, lineageId: "austroasiatic-rice", canonicalName: "Austroasiatic Agricultural Traditions", baseColor: "#059669", cultureGroup: "Southeast Asia" },
  { pattern: /papuan neolithic|papuan farmers|\bpapuan\b/i, lineageId: "papuan-farmers", canonicalName: "Papuan Highland Agriculturalists", baseColor: "#047857", cultureGroup: "Oceania" },
  { pattern: /okhotsk/i, lineageId: "okhotsk", canonicalName: "Okhotsk Maritime Culture", baseColor: "#0284c7", cultureGroup: "Arctic & Subarctic" },
  
  // Specific Prehistoric Foragers & Early Farmers (Vivid, distinct palettes for 10000 / 8000 BCE)
  { pattern: /levantine corridor/i, lineageId: "levantine-corridor-neolithic", canonicalName: "Levantine Corridor (Early Neolithic Farmers)", baseColor: "#ea580c", cultureGroup: "Prehistoric & Archaeological" },
  { pattern: /neolithic farmers|choirokoitia|stentinello|la almagra|dimini|ghassul|naquada/i, lineageId: "neolithic-farmers", canonicalName: "Neolithic Farming Traditions", baseColor: "#eab308", cultureGroup: "Prehistoric & Archaeological" },
  { pattern: /steppe mesolithic/i, lineageId: "steppe-mesolithic", canonicalName: "Steppe Mesolithic Hunter-Foragers", baseColor: "#0284c7", cultureGroup: "Prehistoric & Archaeological" },
  { pattern: /alluvial lowland/i, lineageId: "alluvial-mesolithic", canonicalName: "Alluvial Lowland Mesolithic Hunter-Foragers", baseColor: "#d97706", cultureGroup: "Prehistoric & Archaeological" },
  { pattern: /h[iI]ghland mesolithic/i, lineageId: "highland-mesolithic", canonicalName: "Highland Mesolithic Hunter-Foragers", baseColor: "#7c3aed", cultureGroup: "Prehistoric & Archaeological" },
  { pattern: /coastal and woodland/i, lineageId: "coastal-woodland-mesolithic", canonicalName: "Coastal & Woodland Mesolithic Hunter-Foragers", baseColor: "#16a34a", cultureGroup: "Prehistoric & Archaeological" },
  { pattern: /shellfish gatherers|patagonian shellfish/i, lineageId: "coastal-shellfish-gatherers", canonicalName: "Coastal Shellfish Gatherers", baseColor: "#0891b2", cultureGroup: "Prehistoric & Archaeological" },
  { pattern: /mesolithic|hunters-gatherers/i, lineageId: "mesolithic-foragers", canonicalName: "Mesolithic Hunter-Foragers", baseColor: "#059669", cultureGroup: "Prehistoric & Archaeological" },
  { pattern: /archaic amerindian/i, lineageId: "archaic-amerindian", canonicalName: "Archaic Amerindian Hunter-Gatherers", baseColor: "#c2410c", cultureGroup: "North American Indigenous" },
  { pattern: /adena|hopewell|mississip|swift creek|marksville|fourche maline|laurel complex|couture complex|mill creek|glades culture|caloosahatchee|poverty point|plum bayou|troyville|coles creek|copena|goodall focus/i, lineageId: "woodland-mississippian", canonicalName: "Mound Builder & Woodland Traditions", baseColor: "#b45309", cultureGroup: "North American Indigenous" },

  // ==========================================
  // 2. North American Indigenous Peoples & First Nations
  // ==========================================
  { pattern: /plain bison hunters|blackfoot|siksika|kainai|piegan|cheyenne|arapaho|sioux|lakota|dakota|nakota|crow|apsaalook|pawnee|kiowa|g[aá]uig[uú]|comanche|osage|omaha|ponca|kansa|\bkaw\b|quapaw|wichita|caddo|tonkawa|arikara|hidatsa|mandan|assiniboine|gros ventre|atsina/i, lineageId: "great-plains-indigenous", canonicalName: "Great Plains Indigenous Nations", baseColor: "#d97706", cultureGroup: "North American Indigenous" },
  { pattern: /desert hunter-gatherers|apache|chiricahua|mescalero|jicarilla|lipan|navajo|din[eé]|pueblo|hopi|zuni|taos|tewa|tiwa|towa|keres|hohokam|anasazi|mogollon|havasupai|havasu|hualapai|yavapai|mojave|maricopa|quechan|cocopa|cahuilla|luiseño|tongva|chumash|yokuts|miwok|pomo|wintun|maidu|shoshone|paiute|\bute\b|goshute|washoe|akimel|pima|acjachemen/i, lineageId: "southwest-california-indigenous", canonicalName: "Southwest & California Indigenous Nations", baseColor: "#ca8a04", cultureGroup: "North American Indigenous" },
  { pattern: /plateau ficher|plateau fisher|north american pacifi|coast salish|salish|haida|tlingit|ling[ií]t|tsimshian|nisga|gitxsan|gitx|haisla|heiltsuk|nuxalk|kwakwaka|kwakiutl|nuu-chah|nootka|makah|quileute|quinault|chehalis|chinook|tillamook|siletz|grand ronde|umpqua|cow creek|coos|coquille|klamath|modoc|yurok|karuk|hupa|nez perce|nimiipuu|yakama|umatilla|spokane|kalispel|flathead|kootenai|shuswap|secwepemc|okanagan|carrier|dakelh|twana|skokomish|wailaki|achumawi/i, lineageId: "pacific-northwest-indigenous", canonicalName: "Pacific Northwest & Plateau First Nations", baseColor: "#047857", cultureGroup: "North American Indigenous" },
  { pattern: /eastern north amer|cherokee|creek|muscogee|mvskoke|choctaw|chickasaw|seminole|iroquois|haudenosaunee|mohawk|oneida|onondaga|cayuga|seneca|tuscarora|huron|wendat|wyandot|algonq|ojibwe|chippewa|anishinaabe|\bcree\b|shawnee|miami|illinois|potawatomi|ottawa|menominee|ho-chunk|winnebago|sauk|meskwaki|kickapoo|iowa|powhatan|pamunkey|mattaponi|lenape|delaware|nanticoke|piscataway|susquehannock|wampanoag|narragansett|mohegan|pequot|abenaki|mi.kma|maliseet|passamaquoddy|quinnipiac|neutral|attiwonderonk|timucua|calusa|apalachee|catawba|yuchi|chickahominy|cheraw|atakapa/i, lineageId: "eastern-woodlands-indigenous", canonicalName: "Eastern Woodlands First Nations", baseColor: "#15803d", cultureGroup: "North American Indigenous" },

  // ==========================================
  // 3. Mesoamerican & Caribbean Civilizations
  // ==========================================
  { pattern: /caribbean hunter|arawak|taino|taíno|boriken|lucayan|carib|kalinago|ciboney/i, lineageId: "caribbean-indigenous", canonicalName: "Caribbean Indigenous Peoples", baseColor: "#0284c7", cultureGroup: "Caribbean" },
  { pattern: /maize farmers|maïze farmers|mesoamerican hunter/i, lineageId: "mesoamerican-agriculturalists", canonicalName: "Mesoamerican Agricultural Traditions", baseColor: "#10b981", cultureGroup: "Mesoamerican" },
  { pattern: /olmec/i, lineageId: "olmec", canonicalName: "Olmec Civilization", baseColor: "#c2410c", cultureGroup: "Mesoamerican" },
  { pattern: /zapotec|ben .zaa|binnizá|m[eé]n diiste|bene xhon|monte alb/i, lineageId: "zapotec", canonicalName: "Zapotec Civilization", baseColor: "#c2410c", cultureGroup: "Mesoamerican" },
  { pattern: /mixtec/i, lineageId: "mixtec", canonicalName: "Mixtec Civilization", baseColor: "#ea580c", cultureGroup: "Mesoamerican" },
  { pattern: /teotihuac/i, lineageId: "teotihuacan", canonicalName: "Teotihuacan Civilization", baseColor: "#b45309", cultureGroup: "Mesoamerican" },
  { pattern: /maya|k.iche|kaqchikel|q.eqchi/i, lineageId: "maya", canonicalName: "Maya Civilization", baseColor: "#0d9488", cultureGroup: "Mesoamerican" },
  { pattern: /toltec/i, lineageId: "toltec", canonicalName: "Toltec Civilization", baseColor: "#ea580c", cultureGroup: "Mesoamerican" },
  { pattern: /aztec|triple alliance|mexica|tenochtitlan|nahua|coyuteco|mexicanero/i, lineageId: "aztec", canonicalName: "Aztec Empire (Triple Alliance)", baseColor: "#059669", cultureGroup: "Mesoamerican" },
  { pattern: /p.urh.pecha|tarascan/i, lineageId: "purepecha", canonicalName: "Purépecha Empire", baseColor: "#ca8a04", cultureGroup: "Mesoamerican" },
  { pattern: /tlaxcal/i, lineageId: "tlaxcala", canonicalName: "Tlaxcala Confederacy", baseColor: "#dc2626", cultureGroup: "Mesoamerican" },
  { pattern: /totonac|huastec|pipil|lenca|chorotega|nicarao|miskito|guna|kuna|guaym|guachichil|n[aá]ayerite|\bcora\b|ayuukj/i, lineageId: "mesoamerican-states", canonicalName: "Mesoamerican & Central American Indigenous States", baseColor: "#10b981", cultureGroup: "Mesoamerican" },

  // ==========================================
  // 4. South American Indigenous Civilizations & Peoples
  // ==========================================
  { pattern: /andean hunter|chinchorro|chinchoros|valdivia|chorrera|chavin|chavín|el paraiso|norte chico|wankarani|paracas|nazca|moche|tiwanaku|tiahuanaco|wari|huari|chimu|chimú|inca|tawantinsuyu|kichwa|chachapoya|chancay|chincha|huanca|chanca|colla|lupaca|cañari|quitu|cayubaba/i, lineageId: "andean-civilizations", canonicalName: "Andean Civilizations & Inca", baseColor: "#d97706", cultureGroup: "Andean" },
  { pattern: /muisca|tairona|quimbaya|zenú|san agust|calima|tolita|\bpasto(s)?\b/i, lineageId: "chibcha-colombian", canonicalName: "Chibcha & Northern Andean Civilizations", baseColor: "#ca8a04", cultureGroup: "Andean" },
  { pattern: /amazon hunter|savanna hunter|manioc farmers|shuar|jivaro|yanomami|ashaninka|shipibo|ticuna|tupi|tupinamb|guarani|marajoara|asurini|awaet|kichwa lamista|cabiyari|miranha|yeba-mas|waiwai|wayuu|pemon|warao|ah[eé]|kawahib|chitonahua|murunahua|marinahua/i, lineageId: "amazon-indigenous", canonicalName: "Amazonian & Tropical Lowland Peoples", baseColor: "#059669", cultureGroup: "South American Indigenous" },
  { pattern: /pampas cultures|patagonian|tehuelche|a[oó]nikenk|selk|\bona\b|yaghan|y[aá]mana|kaw[eé]sqar|charr[uú]a|mapuche|araucan|diaguita|\bhet\b|puelche|pehuenche|huilliche/i, lineageId: "southern-cone-indigenous", canonicalName: "Southern Cone & Pampas Peoples", baseColor: "#a16207", cultureGroup: "South American Indigenous" },

  // ==========================================
  // 5. Oceania & Austronesian Realms
  // ==========================================
  { pattern: /polynesian|austronesian|tu.i tonga|tonga|tu.i manu.a|samoa|american samoa|rapa nui|m[aā\?]?ori|maori|maoris|niue|wallis|futuna|hawaii|hawai.i|kō hawai|kongldom of hawaii|tahiti|tuamotu|marquesas|cook islands|tokelau/i, lineageId: "polynesia", canonicalName: "Polynesian Realms & Voyagers", baseColor: "#0284c7", cultureGroup: "Oceania" },
  { pattern: /fiji|papua|melanesian|vanuatu|solomon islands|solomon is|new caledonia|kanak/i, lineageId: "melanesia", canonicalName: "Melanesian Realms", baseColor: "#0d9488", cultureGroup: "Oceania" },
  { pattern: /micronesia|palau|yap|chuuk|pohnpei|nan madol|kosrae|leluh|marshall islands|kiribati|nauru/i, lineageId: "micronesia", canonicalName: "Micronesian Realms", baseColor: "#0284c7", cultureGroup: "Oceania" },

  // ==========================================
  // 6. Steppe Nomads, Central Asia & Khanates
  // ==========================================
  { pattern: /scyth|proto-scythian|sarmat|\bsaka\b|saka kingdom|\bsaces\b|cimerian|cimmerian|massagetae|yuezhi|wusun|alans|caucasian alans|xiongnu|\bhun\b|huns|hephthalite|rouran|juan-juan/i, lineageId: "ancient-steppe-nomads", canonicalName: "Ancient Steppe Nomadic Confederations", baseColor: "#0369a1", cultureGroup: "Central Asia" },
  { pattern: /prot[o]?-altaic|donghu/i, lineageId: "proto-altaic-pastoralists", canonicalName: "Proto-Altaic & Eastern Steppe Pastoralists", baseColor: "#2563eb", cultureGroup: "Central Asia" },
  { pattern: /göktürk|gokturk|turkic khaganate|oghur|oghuz|uyghur|karluk|karakhanid|khazar|pecheneg|cuman|kipchak|\bavar\b|avars|bulgar khanate|volga bulgar|turcik/i, lineageId: "turkic-khaganates", canonicalName: "Turkic & Steppe Khaganates", baseColor: "#0284c7", cultureGroup: "Central Asia" },
  { pattern: /mongol|great khanate|yuan dynasty|golden horde|blue horde|white horde|chagatai|ilkhanate|timurid|nogai|khanate of sibir|astrakhan khanate|kazan khanate|crimean khanate|khiva|bukhara|bokhara|bukara|kokand|central asian khanates|dzungar|oirat|kazakh khanate|uzbek khanate/i, lineageId: "mongol-post-mongol-khanates", canonicalName: "Mongol & Post-Mongol Khanates", baseColor: "#2563eb", cultureGroup: "Central Asia" },

  // ==========================================
  // 7. East Asia & Tibetan Plateau
  // ==========================================
  { pattern: /ainu/i, lineageId: "ainu", canonicalName: "Ainu Peoples", baseColor: "#0d9488", cultureGroup: "East Asia" },
  { pattern: /yayoi|kofun|yamato|asuka|nara|heian|fujiwara|kamakura|muromachi|ashikaga|sengoku|azuchi|tokugawa|edo|japan|ryukyu|sanzan|chuzan/i, lineageId: "japan", canonicalName: "Japanese Dynasties & Kingdoms", baseColor: "#e11d48", cultureGroup: "East Asia" },
  { pattern: /korea|paleo-korean|joseon|choson|goryeo|koryo|silla|silia|paekche|baekje|koguryo|goguryeo|gaya|parhae|balhae|buyeo|gojoseon/i, lineageId: "korea", canonicalName: "Korean Dynasties", baseColor: "#2563eb", cultureGroup: "East Asia" },
  { pattern: /sinic|zhoa|zhou|zhow|shang|\bqin\b|\bxia\b|\bwu\b|han empire|han dynasty|three kingdoms|cao wei|shu han|eastern wu|jin dynasty|sixteen kingdoms|northern wei|northern qi|northern zhou|liu song|southern qi|liang dynasty|chen dynasty|sui dynasty|tang empire|tang dynasty|wu zhou|five dynasties|song empire|song dynasty|\bliao\b|khitan|western xia|tangut|jin \(jurchen\)|jurchen|dali kingdom|nanzhao|ming|qing|manchu|china|chinese|hainan|hong kong|macau|taiwan|formosa|tungning|min-yue|nan-yue|\byue\b/i, lineageId: "china", canonicalName: "Imperial Chinese Dynasties", baseColor: "#dc2626", cultureGroup: "East Asia" },
  { pattern: /tibet|proto-tibetan|zhangzhung|yarlung|tuyuhun|tsongkha|phagmodrupa|ganden phodrang/i, lineageId: "tibet", canonicalName: "Tibetan Realm", baseColor: "#ca8a04", cultureGroup: "Central Asia" },

  // ==========================================
  // 8. South Asia & Indian Subcontinent
  // ==========================================
  { pattern: /vedic|gandhara|indus|harapp|mehrgarh|\bkuru\b|pancala|kosala|magadha|\bkasi\b|vatsa|avanti|surasena|\bmalla\b|mahajanapada/i, lineageId: "vedic-ancient-india", canonicalName: "Vedic & Early Indian Kingdoms", baseColor: "#ea580c", cultureGroup: "South Asia" },
  { pattern: /maurya|kalinga|shunga|kanva|nanda empire/i, lineageId: "maurya", canonicalName: "Mauryan & Classical Indian Empires", baseColor: "#ea580c", cultureGroup: "South Asia" },
  { pattern: /gupta|vakataka|harsha|pushyabhuti|maitraka|maukhari|kushan/i, lineageId: "gupta", canonicalName: "Gupta & Classical Indian Empires", baseColor: "#f59e0b", cultureGroup: "South Asia" },
  { pattern: /chola|pallava|pandya|chalukya|satavahana|satavahanihara|rashtrakuta|hoysala|kakatiya|\bganga\b|western ganga|eastern ganga|gajapati|cheras?|kadamba|yadava|seuna|reddy|nayak|vijayanagar|dravidian/i, lineageId: "dravidian-dynasties", canonicalName: "Southern & Deccan Indian Kingdoms", baseColor: "#c2410c", cultureGroup: "South Asia" },
  { pattern: /\bpala\b|palas|\bsena\b|gurjara|pratihara|rajput|chandela|paramara|solanki|chaulukya|kalachuri/i, lineageId: "medieval-north-india", canonicalName: "Medieval Indian Kingdoms", baseColor: "#ea580c", cultureGroup: "South Asia" },
  { pattern: /delhi sultanate|sultanate of delhi|bahmani|deccan sultanate|bijapur|golconda|ahmadnagar|bidar|berar|bengal sultanate|gujarat sultanate|malwa sultanate|jaunpur/i, lineageId: "delhi-deccan-sultanates", canonicalName: "Delhi & Deccan Sultanates", baseColor: "#059669", cultureGroup: "South Asia" },
  { pattern: /mughal|sur empire/i, lineageId: "mughal", canonicalName: "Mughal Empire", baseColor: "#047857", cultureGroup: "South Asia" },
  { pattern: /maratha/i, lineageId: "maratha", canonicalName: "Maratha Empire", baseColor: "#ea580c", cultureGroup: "South Asia" },
  { pattern: /sikh|misl/i, lineageId: "sikh", canonicalName: "Sikh Empire", baseColor: "#f59e0b", cultureGroup: "South Asia" },
  { pattern: /mysore|hyderabad|nizam|travancore|cochin|ahom|manipur|tripura|hindu kingdoms|orissa|kashmir|sindh|punjab|gujarat/i, lineageId: "princely-indian-kingdoms", canonicalName: "Indian Kingdoms & Princely States", baseColor: "#ea580c", cultureGroup: "South Asia" },
  { pattern: /sinhala|simhala|ceylon|sri lanka|kandy|anuradhapura|polonnaruwa|dambadeniya|gampola|kotte|jaffna/i, lineageId: "sri-lanka", canonicalName: "Sri Lankan & Sinhalese Kingdoms", baseColor: "#b45309", cultureGroup: "South Asia" },
  { pattern: /nepal|gorkha|\bmalla\b|licchavi|bhutan|drukpa|sikkim|ladakh|guge/i, lineageId: "himalayan-kingdoms", canonicalName: "Himalayan Kingdoms", baseColor: "#dc2626", cultureGroup: "South Asia" },

  // ==========================================
  // 9. Southeast Asia & Maritime Nusantara
  // ==========================================
  { pattern: /khmer|angkor|funan|chenla|cambodia/i, lineageId: "khmer", canonicalName: "Khmer Empire", baseColor: "#0284c7", cultureGroup: "Southeast Asia" },
  { pattern: /siam|proto-thai|thai\b|ayutthaya|sukhothai|dvaravati|hariphunchai|lavo|lan na|chiang mai|rattanakosin|thailand/i, lineageId: "siam", canonicalName: "Siamese & Tai Kingdoms", baseColor: "#2563eb", cultureGroup: "Southeast Asia" },
  { pattern: /vietnam|champa|annam|đại việt|dai viet|van lang|au lac|nam viet|giao chi|tonkin|cochin china/i, lineageId: "vietnam", canonicalName: "Vietnamese Dynasties & Champa", baseColor: "#dc2626", cultureGroup: "Southeast Asia" },
  { pattern: /burma|burmese|\bpagan\b|\bava\b|pegu|hanthawaddy|arakan|mrauk u|toungoo|konbaung|\bpyu\b|thaton|myanmar/i, lineageId: "burma", canonicalName: "Burmese Kingdoms", baseColor: "#ca8a04", cultureGroup: "Southeast Asia" },
  { pattern: /laos|lan xang|luang prabang|vientiane|champasak/i, lineageId: "laos", canonicalName: "Lao Kingdoms", baseColor: "#1d4ed8", cultureGroup: "Southeast Asia" },
  { pattern: /srivijaya|majapahit|mataram|medang|kediri|singhasari|kahuripan|sunda|galuh|pajajaran|demak|banten|cirebon|aceh|malacca|melaka|johor|perak|pahang|selangor|kedah|terengganu|kelantan|malay|brunei|sulu|maguindanao|butuan|cebu|\btondo\b|maynila|madja-as|minang|pagaruyung|palembang|jambi|kutai|banjar|pontianak|gowa|makassar|bone|luwu|tidore|ternate|dutch east indies|philippines|indonesia/i, lineageId: "nusantara", canonicalName: "Maritime Southeast Asia (Nusantara)", baseColor: "#047857", cultureGroup: "Southeast Asia" },

  // ==========================================
  // 10. Ancient Near East, Mesopotamia & Iran
  // ==========================================
  { pattern: /sumer|uruk|\bur\b|lagash|\bkish\b|nippur|akkad|babylon|assyria|elam|mitanni|kassite|hurrian|amorite|ebla|\bmari\b|ubaid/i, lineageId: "ancient-mesopotamia", canonicalName: "Mesopotamian Civilizations", baseColor: "#b45309", cultureGroup: "Ancient Near East" },
  { pattern: /kingdom of david and solomon|aramean|arameans|\baram\b|state societies and aramaean|judea|judah|israel|canaan|phoenic|tyre|sidon|byblos|philist|nabatae|palmyra|ghassanid|lakhmid/i, lineageId: "ancient-levant", canonicalName: "Ancient Levantine Civilizations", baseColor: "#ca8a04", cultureGroup: "Ancient Near East" },
  { pattern: /hatti|hittite|luwian|phrygia|urartu|colchis|lydia|caria|lycia|cilicia|pontus|cappadocia|commagene|anatolian tribes/i, lineageId: "ancient-anatolia", canonicalName: "Anatolian & Caucasian Kingdoms", baseColor: "#d97706", cultureGroup: "Ancient Near East" },
  { pattern: /iranian pastoralists|proto-iranian|persia|achaemenid|parthia|arsacid|sasanian|sassanid|medes|tahirid|saffarid|samanid|buyid|safavid|afsharid|zand|qajar|suren|bactria/i, lineageId: "persia", canonicalName: "Persian & Iranian Empires", baseColor: "#0d9488", cultureGroup: "Iranian" },
  { pattern: /hadramaut|yemen|\bsaba\b|sabaean|himyar|qataban|kindah|muscat|oman|arabian pastoral|bedouin|arabs|islamic city-states|white sheep turks|black sheep turks|aq qoyunlu|qara qoyunlu|\bmaan\b/i, lineageId: "arabian-peninsula", canonicalName: "Arabian & Gulf Emirates", baseColor: "#047857", cultureGroup: "Middle East" },

  // ==========================================
  // 11. Islamic Caliphates & Ottoman
  // ==========================================
  { pattern: /rashidun|umayyad|abbasid|fatimid|caliphate/i, lineageId: "islamic-caliphates", canonicalName: "Islamic Caliphates", baseColor: "#15803d", cultureGroup: "Islamic Caliphates" },
  { pattern: /ottoman|turkish empire|seljuk|rum sultanate|danishmend|karamanid/i, lineageId: "ottoman-seljuk", canonicalName: "Ottoman & Seljuk Empires", baseColor: "#b91c1c", cultureGroup: "Middle East" },
  { pattern: /mamluk|mamluke|ayyubid|zengid/i, lineageId: "mamluk-ayyubid", canonicalName: "Mamluk & Ayyubid Sultanates", baseColor: "#ca8a04", cultureGroup: "North Africa" },

  // ==========================================
  // 12. African Civilizations & Kingdoms
  // ==========================================
  { pattern: /ancient egypt|predynastic egypt|old kingdom egypt|middle kingdom egypt|new kingdom egypt|\begypt\b|ptolemaic/i, lineageId: "egypt", canonicalName: "Egyptian Civilization", baseColor: "#d97706", cultureGroup: "North Africa" },
  { pattern: /nubia|\bkush\b|meroe|kerma|nobatia|makkura|makuria|alwa|blemmyes/i, lineageId: "nubia", canonicalName: "Nubian Kingdoms", baseColor: "#ca8a04", cultureGroup: "East Africa" },
  { pattern: /axum|aksum|damot|\bd\.mt\b|abyssinia|ethiopia|shewa|shoa|zagwe|oromo/i, lineageId: "ethiopia", canonicalName: "Ethiopian Realm", baseColor: "#15803d", cultureGroup: "East Africa" },
  { pattern: /somali|adal|ajuran|mogadishu|geledi|warsangali|majeerteen|hobyo|ifat/i, lineageId: "horn-of-africa", canonicalName: "Somali & Horn Sultanates", baseColor: "#0284c7", cultureGroup: "East Africa" },
  { pattern: /ghana|empire of ghana|wagadou|\bmali\b|songhai|kanem|bornu|bornu-kanem|hausa|mossi|wadai|sokoto|fulani|toucouleur|wassoulou|jolof|wolof|\bsine\b|saloum|kaabu|fouta/i, lineageId: "sahelian-empires", canonicalName: "Sahelian & Western Sudanese Empires", baseColor: "#ca8a04", cultureGroup: "West Africa" },
  { pattern: /benin|oyo|dahomey|ashanti|asante|fante|yoruba|igbo|\bnri\b|\baro\b|nupe|igala|\bakan\b/i, lineageId: "gulf-of-guinea", canonicalName: "Gulf of Guinea Kingdoms", baseColor: "#ea580c", cultureGroup: "West Africa" },
  { pattern: /kongo|congo|ndongo|matamba|loango|kakongo|ngoyo|anziku|\btio\b|luba|lunda|kuba|kazembe|maravi/i, lineageId: "central-african-kingdoms", canonicalName: "Central African Kingdoms", baseColor: "#0284c7", cultureGroup: "Central Africa" },
  { pattern: /buganda|bunyoro|ankole|\btoro\b|rwanda|burundi|swahili|kilwa|zanzibar|mombasa|lamu|\bpate\b|malindi|sofala|darfur|funj|sennar/i, lineageId: "great-lakes-swahili", canonicalName: "Great Lakes & Swahili Kingdoms", baseColor: "#0d9488", cultureGroup: "East Africa" },
  { pattern: /great zimbabwe|zimbabwe|mutapa|mwenemutapa|rozwi|rozvi|butua|mapungubwe|zulu|swazi|swaziland|lesotho|basutoland|\bgaza\b|mthethwa|ndwandwe|xhosa/i, lineageId: "southern-african-kingdoms", canonicalName: "Southern African Kingdoms", baseColor: "#ca8a04", cultureGroup: "Southern Africa" },
  { pattern: /merina|imerina|madagascar|sakalava|betsimisaraka|antemoro/i, lineageId: "madagascar", canonicalName: "Kingdom of Madagascar (Merina)", baseColor: "#dc2626", cultureGroup: "East Africa" },
  { pattern: /carthag|punic/i, lineageId: "carthage", canonicalName: "Carthaginian Empire", baseColor: "#c2410c", cultureGroup: "Mediterranean" },
  { pattern: /almoravid|almohad|hafsi|marinid|wattasid|zayyanid|saadi|alaouite|morocco|tunisia|algeria|tripoli/i, lineageId: "maghreb", canonicalName: "Maghrebi Sultanates", baseColor: "#b91c1c", cultureGroup: "North Africa" },

  // ==========================================
  // 13. Greco-Roman & Classical Mediterranean
  // ==========================================
  { pattern: /byzant|eastern roman/i, lineageId: "byzantium", canonicalName: "Byzantine Empire", baseColor: "#7c3aed", cultureGroup: "Greco-Roman" },
  { pattern: /western roman/i, lineageId: "western-rome", canonicalName: "Western Roman Empire", baseColor: "#9f1239", cultureGroup: "Greco-Roman" },
  { pattern: /roman empire|\brome\b|roman republic|roman kingdom/i, lineageId: "rome", canonicalName: "Roman Empire", baseColor: "#831843", cultureGroup: "Greco-Roman" },
  { pattern: /macedon|alexander|hellenic|seleucid|ptolemaic empire|epirus|pergamon|bospor/i, lineageId: "macedon", canonicalName: "Macedonian & Hellenistic Empires", baseColor: "#0284c7", cultureGroup: "Greco-Roman" },
  { pattern: /greek|\bsparta\b|\bathens\b|\bthebes\b|\bcorinth\b|\bargos\b|\brhodes\b|cycladic|minoan|mycenaean|greek city-states/i, lineageId: "greece", canonicalName: "Ancient Greece", baseColor: "#0284c7", cultureGroup: "Greco-Roman" },
  { pattern: /illyrian|dardania|thrac|odrysian|dacia|daces/i, lineageId: "ancient-balkans", canonicalName: "Ancient Balkan Kingdoms & Peoples", baseColor: "#b91c1c", cultureGroup: "Balkans" },
  { pattern: /etruscan|etrurian|samnite|umbrian|italic|nuragic|dumonii|boihaenum|\bboii\b|sabine|sabini/i, lineageId: "classical-mediterranean-tribes", canonicalName: "Ancient European & Mediterranean Civilizations", baseColor: "#b45309", cultureGroup: "Southern Europe" },

  // ==========================================
  // 14. European Medieval & Early Modern Realms
  // ==========================================
  { pattern: /celt|gaul|pict|scot|scottland|scotland|ireland|irish|britany|brittany|wales|welsh|celtiberian/i, lineageId: "celtic-nations", canonicalName: "Celtic Nations & Kingdoms", baseColor: "#15803d", cultureGroup: "Western Europe" },
  { pattern: /goth|visigoth|ostrogoth|vandal|suebi|burgundian|lombard|alemann|saxon|frank|carolingian|merovingian|anglo-saxon|frisian|thuringian|germanic/i, lineageId: "germanic-tribes", canonicalName: "Germanic & Migration Kingdoms", baseColor: "#2563eb", cultureGroup: "Western Europe" },
  { pattern: /viking|norse|norway|sweden|denmark|kalmar|iceland|denmark-norway/i, lineageId: "nordic-kingdoms", canonicalName: "Nordic Realms", baseColor: "#0284c7", cultureGroup: "Nordic" },
  { pattern: /holy roman empire/i, lineageId: "hre", canonicalName: "Holy Roman Empire", baseColor: "#b45309", cultureGroup: "Central Europe" },
  { pattern: /prussia|brandenburg|teutonic|livonian/i, lineageId: "prussia", canonicalName: "Kingdom of Prussia & Orders", baseColor: "#1e3a8a", cultureGroup: "Central Europe" },
  { pattern: /austro-hungarian|austrian empire|habsburg|austria|imperial hungary|hungary/i, lineageId: "austria-hungary", canonicalName: "Austro-Hungarian Realm", baseColor: "#854d0e", cultureGroup: "Central Europe" },
  { pattern: /germany|bavaria|saxony|hanover|württemberg|baden|palatinate|hesse|westphalia/i, lineageId: "german-states", canonicalName: "German States", baseColor: "#78350f", cultureGroup: "Central Europe" },
  { pattern: /bohemia|moravia|czech|slovak/i, lineageId: "bohemia", canonicalName: "Kingdom of Bohemia", baseColor: "#2563eb", cultureGroup: "Central Europe" },
  { pattern: /france|kingdom of france|french/i, lineageId: "france", canonicalName: "Kingdom of France", baseColor: "#2563eb", cultureGroup: "Western Europe" },
  { pattern: /england|great britain|british empire|united kingdom|\bbritain\b/i, lineageId: "britain", canonicalName: "British Realm", baseColor: "#1d4ed8", cultureGroup: "Western Europe" },
  { pattern: /castille|castile|arag[oó]n|navarre|asturias|\ble[oó]n\b|spain/i, lineageId: "spain", canonicalName: "Spanish Kingdoms", baseColor: "#dc2626", cultureGroup: "Southern Europe" },
  { pattern: /portugal/i, lineageId: "portugal", canonicalName: "Kingdom of Portugal", baseColor: "#047857", cultureGroup: "Southern Europe" },
  { pattern: /papal states|holy see/i, lineageId: "papal-states", canonicalName: "Papal States", baseColor: "#ca8a04", cultureGroup: "Southern Europe" },
  { pattern: /venice|republic of venice/i, lineageId: "venice", canonicalName: "Republic of Venice", baseColor: "#0284c7", cultureGroup: "Southern Europe" },
  { pattern: /genoa|florence|tuscany|milan|naples|sicily|two sicilies|sardinia|savoy|piedmont|italy/i, lineageId: "italian-states", canonicalName: "Italian States", baseColor: "#15803d", cultureGroup: "Southern Europe" },
  { pattern: /kievan rus|principality of moscow|grand duchy of moscow|tsardom of russia|tsardom of muscovy|russian empire|ussr|soviet union|white russia|novgorod|pskov|ryazan|vladimir-suzdal|\brussia\b|slavic|slavonic/i, lineageId: "russia", canonicalName: "Russian & Slavic States", baseColor: "#be123c", cultureGroup: "Slavic" },
  { pattern: /poland-lithuania|polish-lithuanian|poland|lithuania/i, lineageId: "poland-lithuania", canonicalName: "Polish-Lithuanian Realm", baseColor: "#be123c", cultureGroup: "Central Europe" },
  { pattern: /bulgaria|serbia|croatia|bosnia|montenegro|albania|ragusa|wallachia|moldavia|transylvania|romania/i, lineageId: "balkan-kingdoms", canonicalName: "Balkan Kingdoms & Principalities", baseColor: "#b91c1c", cultureGroup: "Balkans" },
  { pattern: /baltic tribes|curonian|semigallian|samogitian|yotvingian|latvia|estonia|prussian tribes/i, lineageId: "baltic-states", canonicalName: "Baltic Peoples & States", baseColor: "#ca8a04", cultureGroup: "Baltic" },
  { pattern: /belgium|netherlands|luxembourg|flanders|brabant|\bdutch\b/i, lineageId: "low-countries", canonicalName: "Low Countries", baseColor: "#ea580c", cultureGroup: "Western Europe" },
  { pattern: /swiss confederation|republic of the seven zenden|switzerland/i, lineageId: "switzerland", canonicalName: "Swiss Confederacy", baseColor: "#e11d48", cultureGroup: "Central Europe" },
]

/**
 * Core Multi-Tier Entity Metadata and Color Resolver.
 */
export function resolveEntityMetadata(
  name?: string | null,
  properties: Record<string, any> = {}
): EntityMetadata {
  const rawName = (
    name ||
    properties.name ||
    properties.NAME ||
    properties.ADMIN ||
    properties.SOVEREIGNT ||
    properties.PARTOF ||
    properties.SUBJECTO ||
    ""
  ).trim()

  const { clean, base, inParens } = sanitizeNameStrings(rawName)

  // 1. Tier 1: Neutral / Unclaimed Territories
  if (isNeutralOrUnclaimed(clean) || isNeutralOrUnclaimed(base)) {
    return {
      color: NEUTRAL_TERRITORY_COLOR,
      lineageId: "unclaimed",
      canonicalName: clean || "Unclaimed Territory",
      cultureGroup: "Unclaimed Wilderness",
      isUnclaimed: true,
    }
  }

  // 2. Tier 2: User-Editable Manual Overrides (from entityRegistry.json)
  const manualOverrides = (entityRegistryData as any).manualOverrides || {}
  if (manualOverrides[clean]) {
    const ov = manualOverrides[clean]
    return {
      color: ov.color,
      lineageId: ov.lineage || clean.toLowerCase().replace(/\s+/g, "-"),
      canonicalName: ov.displayName || clean,
      cultureGroup: ov.cultureGroup,
      isUnclaimed: false,
    }
  }
  if (base && manualOverrides[base]) {
    const ov = manualOverrides[base]
    return {
      color: ov.color,
      lineageId: ov.lineage || base.toLowerCase().replace(/\s+/g, "-"),
      canonicalName: ov.displayName || base,
      cultureGroup: ov.cultureGroup,
      isUnclaimed: false,
    }
  }

  // 3. Tier 3: Modern Baseline Match by Exact Name, Clean Name, or Base Name
  const normalizedClean = clean.toLowerCase()
  const normalizedBase = base.toLowerCase()
  const modernByClean = MODERN_PALETTE_BY_NAME.get(normalizedClean) || MODERN_PALETTE_BY_NAME.get(normalizedBase)
  if (modernByClean) {
    return {
      color: modernByClean.color,
      lineageId: modernByClean.isoA3.toLowerCase(),
      canonicalName: modernByClean.name,
      cultureGroup: modernByClean.cultureGroup,
      isUnclaimed: false,
    }
  }

  // Also check parenthetical names for modern country affiliations (e.g. "Algeria (France)" -> France if wanted, or Algeria)
  for (const paren of inParens) {
    const modernInParen = MODERN_PALETTE_BY_NAME.get(paren.toLowerCase())
    if (modernInParen && !base) {
      return {
        color: modernInParen.color,
        lineageId: modernInParen.isoA3.toLowerCase(),
        canonicalName: modernInParen.name,
        cultureGroup: modernInParen.cultureGroup,
        isUnclaimed: false,
      }
    }
  }

  // 4. Tier 4: Modern Baseline Match by ISO-3 Code (WB_CNTRY, FIPS_CODE, ISO_A3, ADM0_A3, SOV_A3)
  const isoCode = (
    properties.ISO_A3 ||
    properties.iso_a3 ||
    properties.WB_CNTRY ||
    properties.ADM0_A3 ||
    properties.SOV_A3 ||
    ""
  ).toUpperCase()

  if (isoCode && MODERN_COUNTRY_PALETTE[isoCode]) {
    const modernByIso = MODERN_COUNTRY_PALETTE[isoCode]
    return {
      color: modernByIso.color,
      lineageId: modernByIso.isoA3.toLowerCase(),
      canonicalName: modernByIso.name,
      cultureGroup: modernByIso.cultureGroup,
      isUnclaimed: false,
    }
  }

  // 5. Tier 5: Historical Lineage & Succession Rules
  for (const rule of HISTORICAL_LINEAGE_RULES) {
    if (
      rule.pattern.test(clean) ||
      rule.pattern.test(base) ||
      inParens.some((p) => rule.pattern.test(p))
    ) {
      return {
        color: rule.baseColor,
        lineageId: rule.lineageId,
        canonicalName: rule.canonicalName,
        cultureGroup: rule.cultureGroup,
        isUnclaimed: false,
      }
    }
  }

  // 6. Tier 6: Perceptual Golden-Ratio HSL Generator (for uncataloged ancient tribes/cultures)
  return {
    color: getDeterministicPastelColor(clean),
    lineageId: clean.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    canonicalName: clean,
    cultureGroup: "Historical Culture",
    isUnclaimed: false,
  }
}
