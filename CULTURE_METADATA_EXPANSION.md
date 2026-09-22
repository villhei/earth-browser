# Culture Metadata Expansion & Parallel Agent Guide

This document establishes the architecture, work distribution protocol, progress tracking, and inventory of missing entries for the ongoing expansion of the `culture_metadata` catalog in **Earth Browser**.

---

## 1. Architectural Overview

Earth Browser visualizes historical entities across **54 historical eras** (123,000 BCE to 2010 CE), comprising **17,563 total feature instances** and **3,000 unique named cultures/polities**.

To provide encyclopedic context in the interactive inspector drawer ([`CountryDrawer.tsx`](file:///home/ville/src/web/earth-browser/src/components/CountryDrawer.tsx)), the PostgreSQL database includes a dedicated metadata table:
* **Table**: `culture_metadata`
* **Foreign Key**: `era_features.culture_id` (UUID references `culture_metadata.id`)
* **Dynamic Projection**: Both `GET /api/eras/:slug/geojson` ([`src/server/api.ts`](file:///home/ville/src/web/earth-browser/src/server/api.ts)) and static exporter ([`src/server/exportStatic.ts`](file:///home/ville/src/web/earth-browser/src/server/exportStatic.ts)) join `culture_metadata` dynamically into feature properties as `properties.culture_metadata`.
* **Current UI Display Policy**: English-only presentation in the UI (`summary_en`, `period_label`, `historical_period`, `capital`, `wikipedia_url_en`), while both English and Finnish metadata are preserved in PostgreSQL for future localization.

### Schema Fields Reference
Each record in `culture_metadata` adheres to the following specification:
| Field | Type | Description | Example |
| :--- | :--- | :--- | :--- |
| `slug` | `VARCHAR(128) UNIQUE` | URL-safe, lowercase unique identifier | `maya-civilization` |
| `name` | `VARCHAR(255)` | Canonical English name | `Maya Civilization` |
| `name_fi` | `VARCHAR(255)` | Canonical Finnish name | `Mayojen sivilisaatio` |
| `native_name` | `VARCHAR(255)` | Historical endonym / original script | `Maya / Mayab'` |
| `culture_group` | `VARCHAR(128)` | Standard culture group from taxonomy | `Mesoamerican` |
| `lineage_id` | `VARCHAR(128)` | Lineage ID in `historicalLineage.ts` | `maya` |
| `historical_period` | `VARCHAR(128)` | Historical period / archaeological era | `Classic Maya Period` |
| `year_start` | `INTEGER` | Founding / emergence year in BCE/CE | `-2000` |
| `year_end` | `INTEGER` | Dissolution / collapse / endpoint year | `1697` |
| `period_label` | `VARCHAR(128)` | Formatted English duration | `2000 BCE – 1697 CE` |
| `period_label_fi` | `VARCHAR(128)` | Formatted Finnish duration | `2000 eaa. – 1697 jaa.` |
| `wikipedia_url_en` | `TEXT` | Canonical English Wikipedia article | `https://en.wikipedia.org/wiki/Maya_civilization` |
| `wikipedia_url_fi` | `TEXT` | Canonical Finnish Wikipedia article | `https://fi.wikipedia.org/wiki/Mayat` |
| `wikidata_id` | `VARCHAR(32)` | Wikidata item identifier | `Q28567` |
| `summary_en` | `TEXT` | 2–4 sentence English overview | Mesoamerican civilization known for hieroglyphs... |
| `summary_fi` | `TEXT` | 2–4 sentence Finnish overview | Mesoamerikkalainen korkeakulttuuri... |
| `capital` | `VARCHAR(255)` | Notable capital / ceremonial center(s) | `Tikal, Calakmul, Chichen Itza` |
| `feature_name_matches` | `TEXT[]` | Names in `era_features.name` to link | `['Maya', 'Maya city-states', 'Mayas']` |

---

## 2. Current Completion Log (as of September 2026)

Progress is tracked dynamically via [`scripts/culture_metadata_status.ts`](file:///home/ville/src/web/earth-browser/scripts/culture_metadata_status.ts) and recorded in [`data-sources/culture_metadata_status.json`](file:///home/ville/src/web/earth-browser/data-sources/culture_metadata_status.json).

* **Unique Named Entities Completed**: **2,999 / 2,999** (`100.0%`)
* **Total Feature Records Linked**: **10,395 / 10,395** (`100.0%`)
* **Unlinked Features Remaining**: **0**
* **Missing Entities Remaining**: **0**
* **Catalog Status**: **100% COMPLETE across all 54 historical eras** (123,000 BCE to 2010 CE)


---

## 3. Parallel Execution Protocol for Multi-Agent Work

To avoid race conditions, merge conflicts, and table-lock contention, work is partitioned by **Culture Group Work Units**. Because cultures in the same cultural group share geographical and historical context, partitioning by Culture Group allows an agent to completely resolve an entire cultural sphere across all 54 eras in a single batch.

### Standard Operating Procedure (SOP) for an Agent
1. **Select an Unclaimed Work Unit**:
   Choose a Culture Group from the [Work Units & Missing Entries Inventory](#4-work-units--missing-entries-inventory) below (e.g. `Mesoamerican` or `Andean` or `Greco-Roman`).
2. **Draft the Batch JSON**:
   Create a batch file under `data-sources/batches/<culture_group_slug>.json` containing the array of `CultureBatchEntry` objects.
3. **Execute the Batch Seeder**:
   ```bash
   npx tsx scripts/seed_culture_metadata_batch.ts data-sources/batches/<culture_group_slug>.json
   ```
   *The script performs atomic PostgreSQL transactions (`ON CONFLICT (slug) DO UPDATE`), links all matching `era_features` by name/canonical_name, and updates feature properties.*
4. **Regenerate Static Datasets**:
   ```bash
   npm run db:export
   ```
5. **Update Progress Log**:
   ```bash
   npx tsx scripts/culture_metadata_status.ts
   ```
6. **Verify Build & Tests**:
   ```bash
   npm test
   ```

---

## 4. Work Units & Missing Entries Inventory

Below is the complete inventory of missing entities grouped into modular, parallelizable work units.

### Work Unit 1: Mesoamerican Civilizations (COMPLETED)
* **Total Entities**: 50 | **Completed**: 50 | **Missing**: 0 (`100% COMPLETE`)
* **Batch File**: `data-sources/batches/mesoamerican.json` (32 cultures populated, 138 features linked across eras)
* **Entities Resolved**:
  - `Ayuukjä'äy (Mixe)`, `Aztec Empire`, `Ben 'Zaa/Binnizá/Mén Diiste/Bene Xhon (Zapoteco)`, `Chorotega`, `Coyutecos (Nahua)`, `Guachichil`, `Guachichiles`, `Guna of Madugandí`, `Guna of Wargandí`, `Guna Yala`, `Gunadule (Kuna-Tule)`, `Huasteco/Teenek`, `Ikoots/Kunajts/Ikoojts (Huave)`, `K'iche'`, `Kamejeya (Yukuna)`, `Kaqchikel`, `Lenca`, `Maize farmers`, `Maya`, `Maya chiefdoms and states`, `Maya city-states`, `Maya states`, `Maya Yucateco`, `Mayaimi`, `Mayangna`, `Mayas`, `Mesoamerican hunter-gatherers and maïze farmers`, `Mexicanero (Nahuas)`, `Mexihcah (Triple Alliance)`, `Miskito`, `Mixtec Empire`, `Mixtecs`, `Monte Albán`, `Nahua`, `Nahua (Guerrero)`, `Nahua (Mexico)`, `Nahua (Michoacan)`, `Nahuas`, `Nicarao/Nahoa`, `Náayerite (Cora)`, `Olmec`, `P’urhépecha`, `Q'eqchi'`, `Teotihuacan`, `Toltec Empire`, `Totonac`, `Totonaco`, `Zapotec`, `Zapotec Empire`, `Ñuu Savi (Mixtecapan)`

### Work Unit 2: Andean Civilizations & Chiefdoms (COMPLETED)
* **Total Entities**: 33 | **Completed**: 33 | **Missing**: 0 (`100% COMPLETE`)
* **Batch File**: `data-sources/batches/andean.json` (35 cultures populated, 134 features linked across eras)
* **Entities Resolved**:
  - `Andean hunter-gatherers`, `Cayubaba`, `Chavin`, `Chimú`, `Chimú Empire`, `Chinchoros`, `Chinchorro culture`, `Chorrera`, `El Paraiso`, `Huancas`, `Huari Empire`, `Inca Empire`, `Kichwa`, `Kichwa (Amazónico)`, `Kichwa Lamista`, `Kichwa Santarrosino`, `Kichwa del Río Napo`, `Kichwa del Río Pastaza`, `Kichwa del Río Tigre`, `Manteño-Huancavilca`, `Moche`, `Muisca`, `Nazca`, `Norte Chico`, `Paracas`, `Pasto`, `Tiahuanaco Empire`, `Valdivia`, `Wankarani`, `Wari`, `Wari’`, `Xinca`, `Zenú`

### Work Unit 3: Greco-Roman & Classical Mediterranean (COMPLETED)
* **Total Entities**: 17 | **Completed**: 17 | **Missing**: 0 (`100% COMPLETE`)
* **Batch File**: `data-sources/batches/greco-roman.json` (15 cultures populated, 58 features linked across eras)
* **Entities Resolved**:
  - `Bosporan Kingdom` / `Bosporian Kingdom`, `Byzantine Empire`, `Cycladic Culture`, `Empire of Alexander / Macedonian Empire`, `Kingdom of Epirus`, `Latin Empire`, `Macedon and Hellenic League`, `Macedonia`, `Minoan Civilization`, `Mycenaean Greece`, `Kingdom of Pergamon`, `Ptolemaic Kingdom`, `Roman Empire`, `Western Roman Empire`, `Roman Tetrarchy`, `Seleucid Empire`, `Empire of Trebizond`

### Work Unit 4: Ancient Near East (COMPLETED)
* **Total Entities**: 21 | **Completed**: 21 | **Missing**: 0 (`100% COMPLETE`)
* **Batch File**: `data-sources/batches/ancient-near-east.json` (22 cultures populated, 57 features linked across eras)
* **Entities Resolved**:
  - `Akkad / Akkadian Empire`, `Amorites`, `Arameans / Aramaean kingdoms`, `Assyria / Neo-Assyrian Empire`, `Babylonia / Neo-Babylonian Empire`, `Canaan`, `Cappadocia`, `Colchis`, `Ebla`, `Elam`, `Hittites`, `Hurrian Kingdoms`, `Kingdom of David and Solomon`, `Kingdom of Judah / Judea`, `Mitanni`, `Nabataean Kingdom`, `Palmyrene Empire`, `Phoenicia`, `Phrygians`, `Sumer / Sumerian City-States`, `Ubaid`, `Urartu`

### Work Unit 5: Iranian & Persian Realms (COMPLETED)
* **Total Entities**: 14 | **Completed**: 14 | **Missing**: 0 (`100% COMPLETE`)
* **Batch File**: `data-sources/batches/iranian.json` (15 cultures populated, 34 features linked across eras)
* **Entities Resolved**:
  - `Afsharid Empire`, `Greco-Bactrian Kingdom (Bactria)`, `Buyid Dynasty / Buyid Emirate`, `Ghaznavid Empire`, `Iranian Pastoralists`, `Khwarazmian Empire`, `Median Empire`, `Parthian Empire (Parthia)`, `Qajar Iran`, `Safavid Empire`, `Samanid Empire`, `Sasanian Empire & dependencies`, `Suren Kingdom`, `Saffarid Dynasty`, `Azande Kingdom`

### Work Unit 6: Islamic Caliphates (COMPLETED)
* **Total Entities**: 12 | **Completed**: 12 | **Missing**: 0 (`100% COMPLETE`)
* **Batch File**: `data-sources/batches/islamic-caliphates.json` (16 cultures populated, 36 features linked across eras)
* **Entities Resolved**:
  - `Abbasid Caliphate`, `Aghlabid Emirate`, `Almohad Caliphate`, `Ayyubid Sultanate`, `Caliphate of Córdoba`, `Fatimid Caliphate`, `Hafsid Caliphate`, `Idrisid dynasty`, `Mamluk Sultanate`, `Rashidun Caliphate`, `Seljuk Caliphate`, `Sokoto Caliphate`, `Toucouleur Empire`, `Umayyad Caliphate`, `Wattasid Caliphate`, `Zayyanid Caliphate`

### Work Unit 7: Central Asia & Steppe Nomads (COMPLETED)
* **Total Entities**: 71 | **Completed**: 71 | **Missing**: 0 (`100% COMPLETE`)
* **Batch File**: `data-sources/batches/central-asia.json` (53 cultures populated, 219 features linked across eras)
* **Entities Resolved**:
  - `Afanasevo`, `Afghanistan`, `Alans`, `Andronovo`, `Astrakhan Khanate`, `Avars`, `Blue Horde`, `Bokhara Khanate`, `Bukara Khanate`, `Bulgar Khanate`, `Catacomb culture`, `Caucasian Alans`, `Chagatai Khanate`, `Cimerians`, `Crimean Khanate`, `Cuman Khanates`, `Cuman-Kipchak confederation`, `Donghu tribes`, `Golden Horde`, `Great Khanate`, `Göktürks`, `Huns`, `Ilkhanate`, `Karasuk culture`, `Karluks`, `Kazakhstan`, `Kazan Khanate`, `Kelteminar`, `Kelteminar culture`, `Khanate of Sibir`, `Khanate of the Golden Horde`, `Khazars`, `Khiva Khanate`, `Kimek-Kipchak khaganate`, `Kyrgyzstan`, `Mongol Empire`, `Mongolia`, `Mongols`, `Nogai Horde`, `Oghuz`, `Oghuz Turks`, `Oirat Confederation`, `Pechenegs`, `Proto-Altaic pastoralists`, `Proto-Scythian culture`, `Proto-Tibetan cultures`, `Saces`, `Saka Kingdom`, `Sarmates`, `Scythians`, `Sintashta`, `Southern Xiongnu`, `Tajikistan`, `Tibet`, `Tibetan Empire`, `Tibetans`, `Tibeto-Burmanese`, `Timurid Emirates`, `Timurid Empire`, `Turcik tribes`, `Turkmenistan`, `Uyghurs`, `Uzbekistan`, `Volga Bulgars`, `Western Gokturk Khaganate`, `White Horde`, `Xiongnu`, `Yamnaya culture`, `Yuezhi`, `Zhangzhung Kingdom`, `central Asian khanates`

### Work Unit 8: East Asian Dynasties & Kingdoms (COMPLETED)
* **Total Entities**: 63 | **Completed**: 63 | **Missing**: 0 (`100% COMPLETE`)
* **Batch File**: `data-sources/batches/east-asia.json` (48 cultures populated, 254 features linked across eras)
* **Entities Resolved**:
  - `Ainu`, `Ainus`, `Balhae`, `Baekje (Paekche)`, `Baiyue (Yue)`, `China`, `Chinese Warlords`, `Cochin China`, `Dali Kingdom`, `Dutch Formosa`, `Empire of Japan`, `French Indochina`, `Gaya`, `Goguryeo (Koguryo)`, `Gojoseon`, `Goryeo`, `Hainan`, `Han Empire`, `Heian Japan (Fujiwara)`, `Hong Kong`, `Imperial Japan`, `Japan`, `Japan (Warring States)`, `Jin Dynasty (Jurchen)`, `Joseon (Korea)`, `Kamakura Shogunate`, `Khitans`, `Kushan Empire`, `Liao`, `Manchu Empire`, `Manchuria`, `Min-Yue`, `Ming Chinese Empire`, `Ming Empire`, `Nan-Yue`, `North Korea (DPRK)`, `Northern Wei`, `Paleo-Koreans`, `Parhae`, `Post-Ming Warlords`, `Qin`, `Qing Empire`, `Ryukyu Kingdom`, `Shang Dynasty (Sinic)`, `Silla (Silia)`, `Sixteen Kingdoms`, `Song Empire`, `South Korea (ROK)`, `Sui Dynasty`, `Taiwan`, `Tang Empire`, `Tokugawa shogunate`, `Western Xia (Tangut)`, `Wu (Eastern Wu)`, `Xia`, `Yamato`, `Yayoi`

### Work Unit 9: South Asian Empires & Dynasties (COMPLETED)
* **Total Entities**: 85 | **Completed**: 85 | **Missing**: 0 (`100% COMPLETE`)
* **Batch File**: `data-sources/batches/south-asia.json` (46 cultures populated, 276 features linked across eras)
* **Entities Resolved**:
  - `Ahmadnagar`, `Bahmani Kingdom`, `Bangladesh`, `Berar`, `Bhutan`, `Bidar`, `Bijapur`, `Ceylon`, `Ceylon (Dutch)`, `Chalukya Empire`, `Chalukyas`, `Cheras`, `Chola`, `Chola Empire`, `Cholas`, `Cochin`, `Dravidians`, `Gandhara grave culture`, `Golconda`, `Gujarat`, `Gupta Empire`, `Gurjara Pratihara`, `Hindu kingdoms`, `Hindu kingdoms and republics`, `India`, `Indus valley civilization`, `Kadambas`, `Kalinga`, `Kandy`, `Kashmir and Ladakh`, `Kingdom of Kashmir`, `Kushan Principalities`, `Maitraka Kingdom`, `Maratha`, `Maratha Confederacy`, `Mauryan Empire`, `Mughal Empire`, `Mysore`, `Mysore (Indian princely state)`, `Nepal`, `Nizam's Dominions`, `Orissa`, `Otoe-Missouri (Oklahoma)`, `Otoe-Missouria (Oklahoma)`, `Pakistan`, `Palas`, `Pallava`, `Pallava state`, `Pallavas`, `Pandya state`, `Pandyas`, `Peoria (Oklahoma)`, `Pratiharas`, `Punjab`, `Rajput Clans and Small States`, `Rajput kingdoms`, `Rajputana`, `Rajputs`, `Rashtrakuta`, `Rashtrakuta state`, `Sac and Fox (Oklahoma)`, `Satavahanihara`, `Sikhs`, `Sikkim (Indian princely state)`, `Simhala`, `Sindh`, `Solankis`, `Sri Lanka`, `Sultanate of Delhi`, `Travancore`, `Vakataka`, `Vedic Aryans`, `Vijayanagara`, `Western Chalukyas`, `Western Gangas`, `minor Hindu kingdoms`

### Work Unit 10: Southeast Asian Kingdoms & Nusantara (COMPLETED)
* **Total Entities**: 50 | **Completed**: 50 | **Missing**: 0 (`100% COMPLETE`)
* **Batch File**: `data-sources/batches/southeast-asia.json` (27 cultures populated, 300 features linked across eras)
* **Entities Resolved**:
  - `Aceh`, `Annam`, `Arakan`, `Arakan (Indian princely state)`, `Austro-Asiatic rice cultures`, `Ava`, `Ayutthaya`, `Brunei`, `Burma`, `Burmese`, `Burmese kingdoms`, `Cambodia`, `Champa`, `Champa City States`, `Dutch East Indies`, `Dvaravati`, `Funan`, `Indonesia`, `Kediri`, `Khmer Empire`, `Kingdom of Pagan`, `Kungarakany`, `Lan Na`, `Laos`, `Lavo`, `Malacca`, `Malay`, `Malaya`, `Malays`, `Malaysia`, `Malaysian Islamic states`, `Mataram`, `Minang`, `Mon-Khmer`, `Pagan`, `Pegu`, `Philippines`, `Proto-Thai cultures`, `Pyu state`, `Rattanakosin Kingdom`, `Siam`, `Slavonic tribes`, `Srivijaya Empire`, `Sukhothai`, `Thai`, `Thai Kingdoms`, `Thailand`, `Tonkin`, `Vietnam`, `Đại Việt`

### Work Unit 11: African Civilizations (West, Central, East & Southern) (COMPLETED)
* **Total Entities**: 124 | **Completed**: 124 | **Missing**: 0 (`100% COMPLETE`)
* **Batch Files**:
  - `data-sources/batches/west-africa.json` (24 cultures populated, 299 features linked across eras)
  - `data-sources/batches/central-africa.json` (11 cultures populated, 90 features linked across eras)
  - `data-sources/batches/east-africa.json` (23 cultures populated, 252 features linked across eras)
  - `data-sources/batches/southern-africa.json` (19 cultures populated, 154 features linked across eras)
* **Entities Resolved**:
  - *West Africa*: `Akan`, `Asante`, `Bantu`, `Bantu peoples`, `Benin`, `Burkina Faso`, `Dahomey`, `Empire of Ghana`, `Fante`, `Fulani Empire`, `Gambia`, `Ghana`, `Gold Coast`, `Gold Coast (GB)`, `Guinea`, `Guinea-Bissau`, `Guinea-Bissau (Portugal)`, `Hausa States`, `Ivory Coast`, `Kanem`, `Kanem-Bornu`, `Liberia`, `Mali`, `Mossi States`, `Niger`, `Nigeria`, `Oyo`, `Portuguese Guinea`, `Senegal`, `Senegal (FR)`, `Sierra Leone`, `Songhai`, `Togo`, `Wadai`, `Wadai Empire`, `Wassoulou Empire`, `West African cereal farmers`
  - *Central Africa*: `Belgian Congo`, `Cameroon`, `Central African Republic`, `Chad`, `Congo`, `Congo (France)`, `Equatorial Guinea`, `Gabon`, `Kazembe`, `Kuba`, `Luba`, `Lunda`, `Ndongo`, `Spanish Guinea`, `Zaire`, `Zaire (Belgium)`
  - *East Africa*: `Abyssinia`, `Adal`, `Alwa`, `Axum`, `Blemmyes`, `British Somaliland`, `Buganda`, `Bunyoro`, `Burundi`, `Damot`, `Darfur`, `Djibouti`, `Eritrea`, `Eritrea (Italy)`, `Ethiopia`, `Ethiopia (Italy)`, `Ethiopian Highland Peoples`, `Ethiopian highland farmers`, `French Somaliland`, `Funj`, `Futa Toro`, `Ifat`, `Imerina`, `Italian Somaliland`, `Kenya`, `Kerma`, `Madagascar`, `Madagascar (France)`, `Makkura`, `Merina Kingdom`, `Nobatia`, `Oromo`, `Rwanda`, `Rwanda (Belgium)`, `Shoa`, `Shoalwater Bay`, `Somalia`, `Sultanate of Zanzibar`, `Sultinate of Zanzibar`, `Toromona`, `Uganda`, `Zanzibar`
  - *Southern Africa*: `Angola`, `Angola (Portugal)`, `Basutoland`, `Botswana`, `Gitx̱san Lax̱yip`, `Great Zimbabwe`, `Khoisan`, `Lesotho`, `Malawi`, `Mozambique`, `Mozambique (Portugal)`, `Mwenemutapa`, `Namibia`, `Northern Rhodesia`, `Nyasaland`, `Rhodesia`, `Rozwi`, `San Carlos Apache`, `San Poil`, `South Africa`, `Swaziland`, `Xhosa`, `Zambia`, `Zimbabwe`, `Zulu`, `Zululand`

### Work Unit 12: European Medieval & Early Modern Realms (COMPLETED)
* **Total Entities**: 170 | **Completed**: 170 | **Missing**: 0 (`100% COMPLETE`)
* **Batch Files**:
  - `data-sources/batches/western-europe.json` (26 cultures populated, 264 features linked across eras)
  - `data-sources/batches/central-europe.json` (15 cultures populated, 185 features linked across eras)
  - `data-sources/batches/nordic.json` (8 cultures populated, 115 features linked across eras)
  - `data-sources/batches/slavic.json` (11 cultures populated, 52 features linked across eras)
  - `data-sources/batches/baltic.json` (8 cultures populated, 74 features linked across eras)
* **Entities Resolved**:
  - *Western Europe*: `Anglo-Saxons`, `Belgium`, `Britany`, `Burgundians`, `Carolingian Empire`, `Celtiberians`, `Celtic kingdoms`, `Celts`, `Dutch Brazil`, `Dutch Guiana`, `Dutch Guinea`, `Dutch Republic`, `Dutch settlements`, `England`, `England and Ireland`, `France`, `Frankish Kingdom`, `Franks`, `French Cameroons`, `French Equatorial Africa`, `French West Africa`, `Frisians`, `Germanic tribes`, `Goths`, `Hallstatt culture`, `Ireland`, `Kingdom of France`, `Kingdom of Ireland`, `La Tène culture`, `Lombard duchies`, `Lombard principalities`, `Lombardy`, `Luxembourg`, `Netherlands`, `Netherlands Indies`, `New France`, `New South Wales`, `New South Wales (UK)`, `Ostrogoths`, `Penobscot`, `Picts`, `Saxons`, `Saxony`, `Scotland`, `Scots`, `Suebi`, `Swedes and Goths`, `United Kingdom`, `United Kingdom of Great Britain and Ireland`, `Vandals`, `Visigothic Kingdom`, `Visigoths`, `Welsh`
  - *Central Europe*: `Austria`, `Austria Hungary`, `Austrian Empire`, `Austrian Netherlands`, `Austro-Hungarian Empire`, `Baden`, `Bavaria`, `Brandenburg`, `Czech Republic`, `Czechoslovakia`, `Czechs`, `East Germany`, `East Prussia`, `Electoral Hesse`, `German Empire`, `Germany`, `Germany (France)`, `Germany (Soviet)`, `Germany (UK)`, `Germany (USA)`, `Grand Duchy of Hesse`, `Great Moravia`, `Habsburg Netherlands`, `Hanover`, `Holy Roman Empire`, `Hungary`, `Imperial Hungary`, `Kingdom of Hungary`, `Liechtenstein`, `Lusatian culture`, `Milano (Austria)`, `Moravians`, `Palatinate`, `Poland`, `Poland-Lithuania`, `Polish–Lithuanian Commonwealth`, `Prussia`, `Prussians`, `Republic of the Seven Zenden`, `Slovakia`, `Swiss Confederation`, `Switzerland`, `Teutonic Knights`, `West Germany`, `Württemberg`
  - *Nordic*: `Denmark`, `Denmark-Norway`, `Finland`, `Greenland`, `Iceland`, `Icelandic Commonwealth`, `Kalmar Union`, `Kingdom of Norway`, `Norsemen`, `Norway`, `Suomi`, `Sweden`, `Sweden–Norway`
  - *Slavic*: `Grand Duchy of Moscow`, `Kievan Rus`, `Novgorod`, `Novgorod-Seversky`, `Principality of Novgorod`, `Principality of Vladimir-Suzdal`, `Pskov`, `Russia`, `Russian Empire`, `Ryazan`, `Slavic tribes`, `South Russia`, `Tsardom of Muscovy`, `USSR`, `Ukraine`, `White Russia`
  - *Baltic*: `Baltic tribes`, `Brushed Pottery culture`, `Curonians`, `Early combware`, `Eastern Masurian culture`, `Estonia`, `Latvia`, `Lithuania`, `Narva`, `Plain-Pottery culture`, `Sambian-Nothangian culture`, `Volga-Kamm`, `Western Masurian culture`

### Work Unit 13: North African & Maghreb Dynasties (COMPLETED)
* **Total Entities**: 34 | **Completed**: 34 | **Missing**: 0 (`100% COMPLETE`)
* **Batch File**: `data-sources/batches/north-africa.json` (16 cultures populated, 148 features linked across eras)
* **Entities Resolved**:
  - `Algeria`, `Algeria (FR)`, `Algeria (France)`, `Almoravid dynasty`, `Berber Tribes`, `Berbers`, `Cyprus`, `Egypt`, `Harer (Egypt)`, `Kingdom of Gala`, `Kingdom of Syphax`, `Libya`, `Libya (IT)`, `Mauretania`, `Mauritania`, `Morocco`, `Morocco (France)`, `Numidia`, `Saharan Nomadic Tribes`, `Saharan pastoral nomads`, `Spanish Morocco`, `Sudan`, `Tripolitana (UK Lybia)`, `Tripolitania`, `Tuareg Nomadic Tribes`, `Tuaregs`, `Tunisia`, `Watassid Morocco`, `Western Sahara`

### Work Unit 14: Middle East, Ottoman Empire & Levant (COMPLETED)
* **Total Entities**: 57 | **Completed**: 57 | **Missing**: 0 (`100% COMPLETE`)
* **Batch File**: `data-sources/batches/middle-east.json` (26 cultures populated, 227 features linked across eras)
* **Entities Resolved**:
  - `Anatolian tribes`, `Arabian pastoral nomads`, `Arabs`, `Bedouins`, `Chelamela`, `Emirate of the White Sheep Turks`, `Hadramaut`, `Himyarite Kingdom`, `Iran`, `Iraq`, `Islamic city-states`, `Israel`, `Jordan`, `Kuwait`, `Lebanon`, `Maan`, `Mari`, `Mundurukânia (Wuy jugu)`, `Muscat`, `Muscat and Oman`, `Oman`, `Oman (British Raj)`, `Ottoman Empire`, `Ottoman Sultanate`, `Qataban`, `Qatar`, `Republic of Turkey`, `Saudi Arabia`, `Syria`, `Syria (France)`, `Trucial Oman`, `Turkey`, `United Arab Emirates`, `Wulgurukaba`, `Yemen`, `Yemen (UK)`

### Work Unit 15: Southern Europe, Iberia & Italian Maritime Republics (COMPLETED)
* **Total Entities**: 39 | **Completed**: 39 | **Missing**: 0 (`100% COMPLETE`)
* **Batch File**: `data-sources/batches/southern-europe.json` (21 cultures populated, 236 features linked across eras)
* **Entities Resolved**:
  - `Andorra`, `Aragón`, `Asturias`, `Castile`, `Castille`, `Dumonii`, `Emirate of Sicily`, `Florence`, `Florida (Spain)`, `Genoa`, `Greece`, `Hispaniola (Spain)`, `Italy`, `Kingdom of Italy`, `Kingdom of Sardinia`, `Kingdom of the Two Sicilies`, `León`, `Malta`, `Milan`, `Naples`, `Navarre`, `Papal States`, `Portugal`, `San Marino`, `Santo Domingo (Spain)`, `Sardinia`, `Sardinia-Piedmont`, `Savoy`, `Sicily`, `Spain`, `Tuscany`, `Venice`, `Viceroyalty of New Spain`

### Work Unit 16: Balkans, Eastern Europe, Caucasus & Finno-Ugric Frontiers (COMPLETED)
* **Total Entities**: 37 | **Completed**: 37 | **Missing**: 0 (`100% COMPLETE`)
* **Batch File**: `data-sources/batches/balkans-eastern-europe.json` (21 cultures populated, 150 features linked across eras)
* **Entities Resolved**:
  - `Albania`, `Armenia`, `Azerbaijan`, `Bosnia`, `Bosnia and Herzegovina`, `Bosnia-Herzegovina`, `Bulgaria`, `Caucasian Albania`, `Chernoles culture`, `Croatia`, `Croatian kingdom`, `Dacia`, `Dacians`, `Dardania`, `Finno-Ugric taiga hunter-gatherers`, `Georgia`, `Moldova`, `Montenegro`, `Odrysian Kingdom`, `Pisamira`, `Principality of Wallachia`, `Romania`, `Samis`, `Samish`, `Serbia`, `Slovenia`, `Thrace`

### Work Unit 17: Post-Colonial Nation States of the Americas (COMPLETED)
* **Total Entities**: 25 | **Completed**: 25 | **Missing**: 0 (`100% COMPLETE`)
* **Batch File**: `data-sources/batches/americas-states.json` (23 cultures populated, 286 features linked across eras)
* **Entities Resolved**:
  - `Argentina`, `Belize`, `Bolivia`, `Brazil`, `Canada`, `Chile`, `Colombia`, `Costa Rica`, `Ecuador`, `El Salvador`, `French Guiana`, `Guatemala`, `Guyana`, `Guyana (Netherlands)`, `Honduras`, `Mexico`, `Nicaragua`, `Panama`, `Paraguay`, `Peru`, `Suriname`, `United States`, `United States of America`, `Uruguay`, `Venezuela`

### Work Unit 18: Caribbean Island Polities & Maritime Chiefdoms (COMPLETED)
* **Total Entities**: 35 | **Completed**: 35 | **Missing**: 0 (`100% COMPLETE`)
* **Batch File**: `data-sources/batches/caribbean.json` (27 cultures populated, 315 features linked across eras)
* **Entities Resolved**:
  - `Anguilla`, `Antigua and Barbuda`, `Arawaks`, `Bahamas`, `Barbados`, `Barbados (UK)`, `Boriken Taino`, `Caribbean hunter-gatherers`, `Ciboney`, `Cuba`, `Cuba (Spain)`, `Dominica`, `Dominican Republic`, `Grenada`, `Guadeloupe`, `Haiti`, `Jamaica`, `Jamaica (UK)`, `Kalinago`, `Kalinago (Island Carib)`, `Lokono (Arawak)`, `Martinique`, `Martinique (France)`, `Montserrat`, `Netherlands Antilles`, `Puerto Rico`, `Saint Barthelemy`, `Saint Kitts and Nevis`, `Saint Kitts and Nevis (UK)`, `Saint Lucia`, `Saint Martin`, `Saint Vincent and the Grenadines`, `Taino`, `Trinidad`, `United States Virgin Islands`

### Work Unit 19: Global Prehistoric Horizons & Archaeological Complexes (COMPLETED)
* **Total Entities**: 23 | **Completed**: 23 | **Missing**: 0 (`100% COMPLETE`)
* **Batch File**: `data-sources/batches/prehistoric-archaeological.json` (21 cultures populated, 96 features linked across eras)
* **Entities Resolved**:
  - `Alluvial Lowland Mesolithic Hunter-Foragers`, `Coastal and Woodland Mesolithic Hunter-Foragers`, `Dimini`, `Funnel-Beaker`, `Ghassul`, `Highland Mesolithic Hunter-Foragers`, `Homo erectus`, `Homo heidelbergensis`, `Hunters-gatherers`, `La Almagra culture`, `Levantine Corridor (Neolithic Farmers)`, `N. European Bronze Age cultures`, `Naquada I`, `Neanderthal`, `Neolithic Farmers`, `Patagonian shellfish and marine mammal hunters`, `Shellfish gatherers`, `Stentinello culture`, `Steppe Mesolithic Hunter-Foragers`, `Urnfield cultures`, `Únětice`

### Work Unit 20: Oceania, Australian Aboriginal & Pacific Island Nations (COMPLETED)
* **Total Entities**: 74 | **Completed**: 74 | **Missing**: 0 (`100% COMPLETE`)
* **Batch File**: `data-sources/batches/oceania.json` (52 cultures populated, 619 features linked across eras)
* **Entities Resolved**:
  - `Aboriginal Tasmanians`, `Aboriginal tribes`, `American Samoa`, `Armorica`, `Arrernte`, `Australia`, `Australian aboriginal hunter-gatherers`, `Austronesians`, `Badimaya`, `Banjima`, `Bardi`, `Bibbulman`, `Dakapeng culture`, `Dapenkeng culture`, `Eora`, `Fiji`, `First Samori Empire`, `Gagudju`, `Gamberre`, `Gooniyandi`, `Goreng`, `Gugu-Badhun`, `Gunbalang`, `Gungurugoni`, `Gunibidji`, `Gunwinggu`, `Gurindji`, `Iwaidja`, `Jabirrjabirr`, `Jaburrara`, `Jaminjung`, `Jaru`, `Jawoyn`, `Jingili`, `Jiwarli`, `Jukun`, `Jurruru`, `Kadjerong`, `Kalaako/Malpa`, `Kalaamaya`, `Kaniyang`, `Karajarri`, `Karangpurru`, `Kingdom of Hawaii`, `Kō Hawaiʻi Paeʻāina (Hawaiian Kingdom)`, `M?ori`, `Maori`, `Maoris`, `Mayi-Yapi`, `Mebêngôkre (Kayapó)`, `Muruwari`, `Māori`, `New Caledonia`, `New Hebrides`, `New Zealand`, `Ngunawal`, `Niue`, `Papua New Guinea`, `Papuan`, `Papuan neolithic farmers`, `Papuans`, `Pinikura`, `Pinjarup`, `Polynesians`, `Rapa Nui`, `Samoa`, `Second Samori Empire`, `Taiwanese Tribes`, `Tasmanian hunter-gatherers`, `Tonga`, `Tuʻi Tonga Empire`, `Wallis and Futuna Islands`, `WiYaPeMiAk (Weapemeoc-Yeopim)`, `Yiiji`

### Work Unit 21: Arctic, Subarctic & Circumpolar Indigenous Peoples (COMPLETED)
* **Total Entities**: 44 | **Completed**: 44 | **Missing**: 0 (`100% COMPLETE`)
* **Batch File**: `data-sources/batches/arctic-subarctic.json` (25 cultures populated, 225 features linked across eras)
* **Entities Resolved**:
  - `Acho Dene Koe`, `Alutiiq (Sugpiaq)`, `Arctic marine mammal hunters`, `Athabaskan`, `Beothuk`, `Champagne & Aishihik`, `Chukchi`, `Dehcho Dene`, `Dene Tha'`, `Dorset`, `Eyak`, `Eyaq`, `Gwich'in Nành`, `Innu`, `Inuit`, `Inupiaq`, `Inupiat`, `Itelmen`, `Kaska Dena Kayeh`, `Kaskaskia`, `Koryaks`, `Montagnais Innu`, `Naskapi Innu`, `Nitassinan (Innu)`, `Okhotsk culture`, `Paleo-Inuit`, `Paleo-Siberian hunter-gatherers`, `Sahtu`, `Sahtu Dene and Metis`, `Siberians`, `Siginygmit (Sireniki) Yupik`, `Sivuqaq (St. Lawrence Island) Yupik`, `Subarctic forest hunter-gatherers`, `Suspiaq`, `T'atsaot'ine`, `Tāłtān Konelīne (Tahltan)`, `Teslin Tlingit Council (BC)`, `Teslin Tlingit Council (Yukon)`, `Tetlit Gwich’in`, `Thule`, `Unangam Tanangin (Unangax̂ /Aleut)`, `Ungazigmit (Chaplino) Yupik`, `Yup'ik & Cup'ik`, `Yup’ik/Cup’ik`

### Work Unit 22: South American Indigenous Peoples (Amazonia, Chaco & Southern Cone) (COMPLETED)
* **Total Entities**: 40 | **Completed**: 40 | **Missing**: 0 (`100% COMPLETE`)
* **Batch File**: `data-sources/batches/south-american-indigenous.json` (26 cultures populated, 162 features linked across eras)
* **Entities Resolved**:
  - `Ahé (Kawahib)`, `Amazon hunter-gatherers`, `Ashaninka`, `Awaeté`, `Awaeté (Asurini of the Xingu)`, `Aónikenk (Tehuelche)`, `Cabiyari/Kawiyarí`, `Charrúa`, `Chitonahua/Murunahua`, `Da’naxda’xw Awaetlatla`, `Diaguita`, `Envuga (Kawahib)`, `Juma (Kawahib)`, `Jupaú (Kawahib)`, `Kawahib (Jiahui)`, `Kawahib (Parintintin)`, `Kawahib (Tenharim)`, `Magüta/Ticuna`, `Manioc farmers`, `Mapuche`, `Marinahua`, `Miranha`, `Pampas cultures`, `Paspahegh`, `Pintupi`, `Savanna hunter-gatherers`, `Selk'nam`, `Selkirk`, `Sharanahua`, `Shipibo-Konibo`, `Shuar`, `Shuar-Wampis`, `Tekohá (Guarani)`, `Tupinambá`, `Tupis`, `Waiwai`, `Wallmapu (Mapuche)`, `Warao`, `Yanomami`, `Yeba-masã`

### Work Unit 23: North American Indigenous Nations (Eastern Woodlands & Great Plains) (COMPLETED)
* **Total Entities**: 146 | **Completed**: 146 | **Missing**: 0 (`100% COMPLETE`)
* **Batch File**: `data-sources/batches/north-america-east-plains.json` (66 cultures populated, 420 features linked across eras)
* **Entities Resolved**:
  - `[Gáuigú (Kiowa)`, `Abenaki / Abénaquis`, `Algonquin`, `Apalachee`, `Apalachees`, `Apsaalooké (Crow)`, `Arapaho`, `Archaic Amerindian hunter-gatherers`, `Arikara`, `Assiniboine`, `Atakapa`, `Atakapa Ishak Chawasha`, `Atakapa-Ishak`, `Attiwonderonk (Neutral)`, `Beaver Lake Cree`, `Big Stone Cree`, `Blackfoot`, `Bodéwadmiakiwen (Potawatomi)`, `Caddo`, `Caloosahatchee culture`, `Calusa`, `Catawba`, `Chahta Yakni (Choctaw)`, `Cheraw`, `Cheroenhaka (Nottoway)`, `Cherokee`, `Cherokee (Oklahoma)`, `Cheyenne`, `Cheyenne-Arapaho (Oklahoma)`, `Chickahominy`, `Chickasaw`, `Chickasaw (Oklahoma)`, `Chikashsha Yaki (Chickasaw)`, `Choctaw`, `Choctaw (Oklahoma)`, `Comanche`, `Copena`, `Couture Complex`, `Cree`, `Crow`, `Delaware`, `Eastern North American hunter-gatherers`, `Eastern Shawnee (Oklahoma)`, `Fourche Maline Culture`, `Glades Culture`, `Goodall Focus`, `Gros Ventre`, `Ho-de-no-sau-nee-ga (Haudenosaunee)`, `Hoocąk (Ho-Chunk)`, `Hopewell`, `Hopewell Culture`, `Huron`, `Illinois`, `Iowa`, `Iowa (Oklahoma)`, `Iroquois`, `Isle de Jean Charles Biloxi-Chitimacha-Choctaw`, `Kanienʼkehá꞉ka (Mohawk)`, `Kansa`, `Kaw (Oklahoma)`, `Kickapoo (Oklahoma)`, `Kiikaapoi (Kickapoo)`, `Kiowa`, `Kiowa-Comanche-Apache (Oklahoma)`, `Laurel complex`, `Lənape Haki-nk (Lenni-Lenape)`, `Mandan`, `Mandan, Hidatsa, and Arikara`, `Mandandanji`, `Marksville Culture`, `Mattaponi`, `Menominee`, `Mi'kma'ki`, `Miami`, `Miami (Oklahoma)`, `Mill Creek Culture`, `Mohegan`, `Moose Cree`, `Munsee Lenape`, `Muscogee (Oklahoma)`, `Mvskoke (Muscogee / Creek)`, `Narragansett`, `Nentego (Nanticoke)`, `Niitsítpiis-stahkoii ᖹᐟᒧᐧᐨᑯᐧ ᓴᐦᖾᐟ (Blackfoot / Niitsítapi ᖹᐟᒧᐧᒣᑯ)`, `Nʉmʉnʉʉ (Comanche)`, `Odǫhwęja:deˀ (Cayuga)`, `Omaha`, `Omàmìwininìwag (Algonquin)`, `Onundagaonoga (Onondaga)`, `Onʌyote'a•ka (Oneida)`, `Onöndowa'ga:' (Seneca)`, `Oro Win/Oro Towati’`, `Osage`, `Osage (Oklahoma)`, `Ottawa (Oklahoma)`, `oθaakiiwaki‧hina‧ki (Sauk)`, `Pamlico (Pomouik)`, `Pamunkey`, `Passamaquoddy`, `Pawnee`, `Pawnee (Oklahoma)`, `Pequot`, `Piscataway`, `Plain bison hunters`, `Ponca`, `Ponca (Oklahoma)`, `Potawatomi`, `Potawatomi-Shawnee (Oklahoma)`, `Poverty point culture`, `Powhatan`, `Pâri (Pawnee)`, `Quapaw`, `Quinnipiac`, `S’atsoyaha (Yuchi)`, `Sauk and Meskwaki`, `Seminole`, `Seminole (Oklahoma)`, `Seminole Tribe of Florida (Big Cypress Reservation)`, `Seminole Tribe of Florida (Brighton Reservation)`, `Seminole Tribe of Florida (Hollywood Reservation)`, `Seminole Tribe of Florida (Immokalee Reservation)`, `Seminole Tribe of Florida (Tampa Reservation)`, `Seneca-Cayuga (Oklahoma)`, `Shawandasse Tula (Shawanwaki/Shawnee)`, `Shawnee`, `Sicaog (Saukiog)`, `Skaruhreh/Tuscarora (North Carolina)`, `Sturgeon Lake Cree`, `Swift Creek Culture`, `Timucua`, `Tonkawa`, `Tonkawa (Oklahoma)`, `Tuscarora`, `Umoⁿhoⁿ (Omaha)`, `Washtáge Moⁿzháⁿ (Kaw / Kansa)`, `Wichita`, `Wichita-Caddo-Delaware (Oklahoma)`, `Wolastoqiyik Wahsipekuk (Maliseet)`, `Woodland Cree`, `Wyandot (Anderdon)`, `Wyandotte (Oklahoma)`, `Wôpanâak (Wampanoag)`, `Yuchi`, `ᏣᎳᎫᏪᏘᏱ Tsalaguwetiyi (Cherokee, East)`, `𐓏𐒰𐓓𐒰𐓓𐒷  𐒼𐓂𐓊𐒻  𐓆𐒻𐒿𐒷  𐓀𐒰^𐓓𐒰^(Osage)`, `ᓀᐦᐃᔭᐤ ᐊᐢᑭᕀ Nêhiyaw-Askiy (Plains Cree)`

### Work Unit 24: North American Indigenous Nations (Southwest, Pacific Northwest & California) (COMPLETED)
* **Total Entities**: 126 | **Completed**: 126 | **Missing**: 0 (`100% COMPLETE`)
* **Batch File**: `data-sources/batches/north-america-west.json` (48 cultures populated, 278 features linked across eras)
* **Entities Resolved**:
  - `Achumawi`, `Acjachemen (Juaneño)`, `Akimel O'odham (Upper Pima)`, `Anasazi`, `Apache`, `Cahuilla`, `Cayuse, Umatilla and Walla Walla`, `Central Pomo`, `Chehalis`, `Chinook`, `Chiricahua`, `Chiricahua Apache`, `Chumash`, `Coast Salish`, `Confederated Tribes of Grand Ronde`, `Confederated Tribes of Siletz Indians`, `Coos, Lower Umpqua, Siuslaw`, `Coquille`, `Cow Creek Umpqua`, `Desert hunter-gatherers`, `Diné Bikéyah`, `Eastern Pomo`, `Eastern Shoshone`, `Flathead`, `Gitxaała`, `Goshute`, `Haida Gwaii`, `Hanis Coos`, `Havasu Baaja (Havasupai)`, `Havasupai`, `Heiltsuk`, `Hohokam`, `Hopi`, `Hopie`, `Hopitutskwa`, `Hualapai`, `Hupacasath`, `Jicarilla`, `Jicarilla Apache`, `Kalispel`, `Karuk`, `Klamath`, `Kwakwaka'wakw`, `Kwakwaka’wakw`, `Lemhi-Shoshone`, `Lingít Aaní (Tlingit)`, `Lipan`, `Lower Chinook`, `Lower Tohono O’odham (Lower Pima)`, `Makah`, `Me-Wuk (Bay Miwok)`, `Me-Wuk (Central Sierra Miwok)`, `Me-Wuk (Coast Miwok)`, `Me-Wuk (Lake Miwok)`, `Me-Wuk (Northern Sierra Miwok)`, `Me-Wuk (Southern Sierra Miwok)`, `Mescalero`, `Mescalero Apache`, `Miluk Coos`, `Miwok`, `Modoc`, `Modoc (Oklahoma)`, `Mogollon`, `Mohawk (Kalapuya)`, `Mountain Maidu`, `Navajo`, `Ndee/Nnēē: (Western Apache)`, `Ndé Kónitsąąíí Gokíyaa (Lipan Apache)`, `Newe (Western Shoshone)`, `Nez Perce`, `Nimiipuu (Nez Perce)`, `North American Pacific foraging, hunting and fishing peoples`, `Northeastern Pomo`, `Northern Paiute`, `Northern Pomo`, `Numu (Northern Paiute)`, `Nuwuvi (Southern Paiute)`, `Nuxalk`, `Núu-agha-tʉvʉ-pʉ̱ (Ute)`, `Okanagan`, `Payómkawichum (Luiseño)`, `Piipaash (Maricopa)`, `Pima`, `Pipa Aha Macav (Mojave)`, `Plains Miwok`, `Plateau fichers and hunter gatherers`, `Pomo`, `Pueblos`, `Quechan (Kwatsáan)`, `Quileute`, `Quinault`, `Quuiich (Lower Umpqua)`, `Resighini Rancheria (Yurok)`, `Salish & Kootenai Tribes`, `Salish Kootenai (Flathead)`, `Sauk Suiattle`, `Secwepemcúl'ecw (Secwépemc)`, `Shiwinna (Zuni)`, `Shoshone-Bannock`, `Siletz`, `Southeastern Pomo`, `Southern Paiute`, `Southern Pomo`, `Spokane`, `Susquehannock`, `Syilx tmixʷ (Okanagan)`, `Taku River Tlingit`, `Taos Pueblo`, `Tillamook`, `Tongva`, `Ts'msyen La̱xyuup (Tsimshian)`, `Twana/Skokomish`, `Umatilla`, `Ute`, `Wailaki`, `Wašišiw Ɂítdeʔ (Washoe)`, `White Mountain Apache`, `Xawiƚƚ kwñchawaay (Cocopah)`, `Yakama`, `Yavapai`, `Yavapaiv Apache`, `Yokuts`, `Yurok`, `Zuni`, `nuučaan̓uuɫɁatḥ nism̓a (Nuu-chah-nulth)`, `x̣àʼisla w̓áwís (Haisla)`

### Work Unit 25: Historical Culture Residue — North America (COMPLETED)
* **Total Entities**: 606 | **Completed**: 606 | **Missing**: 0 (`100% COMPLETE`)
* **Features Linked across Eras**: 843
* **Batch Files**:
  - Set 1: [`data-sources/batches/residue-north-america.json`](file:///home/ville/src/web/earth-browser/data-sources/batches/residue-north-america.json) (94 cultures populated, 329 features linked across eras)
  - Set 2: [`data-sources/batches/residue-north-america-2.json`](file:///home/ville/src/web/earth-browser/data-sources/batches/residue-north-america-2.json) (506 cultures populated, 514 features linked across eras)
* **Batch Generators**:
  - Set 1: [`scripts/build_residue_north_america_batch.ts`](file:///home/ville/src/web/earth-browser/scripts/build_residue_north_america_batch.ts)
  - Set 2: [`scripts/build_residue_north_america_2_batch.ts`](file:///home/ville/src/web/earth-browser/scripts/build_residue_north_america_2_batch.ts)
* **Inventory File**: [`data-sources/residue/north-america.json`](file:///home/ville/src/web/earth-browser/data-sources/residue/north-america.json)

### Work Unit 26: Historical Culture Residue — South America (COMPLETED)
* **Total Entities**: 366 | **Completed**: 366 | **Missing**: 0 (`100% COMPLETE`)
* **Features Linked across Eras**: 390
* **Batch File**: [`data-sources/batches/residue-south-america.json`](file:///home/ville/src/web/earth-browser/data-sources/batches/residue-south-america.json) (366 cultures populated, 390 features linked across eras)
* **Batch Generator**: [`scripts/build_residue_south_america_batch.ts`](file:///home/ville/src/web/earth-browser/scripts/build_residue_south_america_batch.ts)
* **Inventory File**: [`data-sources/residue/south-america.json`](file:///home/ville/src/web/earth-browser/data-sources/residue/south-america.json)

### Work Unit 27: Historical Culture Residue — Oceania & Australian Indigenous (COMPLETED)
* **Total Entities**: 339 | **Completed**: 339 | **Missing**: 0 (`100% COMPLETE`)
* **Features Linked across Eras**: 2,120
* **Batch File**: [`data-sources/batches/residue-oceania.json`](file:///home/ville/src/web/earth-browser/data-sources/batches/residue-oceania.json) (339 cultures populated, 2,120 features linked across eras)
* **Batch Generator**: [`scripts/build_residue_oceania_batch.ts`](file:///home/ville/src/web/earth-browser/scripts/build_residue_oceania_batch.ts)
* **Inventory File**: [`data-sources/residue/oceania.json`](file:///home/ville/src/web/earth-browser/data-sources/residue/oceania.json)

### Work Unit 28: Historical Culture Residue — Asia & Eurasia (COMPLETED)
* **Total Entities**: 128 | **Completed**: 128 | **Missing**: 0 (`100% COMPLETE`)
* **Features Linked across Eras**: 268
* **Batch File**: [`data-sources/batches/residue-asia.json`](file:///home/ville/src/web/earth-browser/data-sources/batches/residue-asia.json) (110 cultures populated, 268 features linked across eras)
* **Batch Generator**: [`scripts/build_residue_asia_batch.ts`](file:///home/ville/src/web/earth-browser/scripts/build_residue_asia_batch.ts)
* **Inventory File**: [`data-sources/residue/asia.json`](file:///home/ville/src/web/earth-browser/data-sources/residue/asia.json)
* **Entities Resolved**:
  - `Amuq D`, `Bagan`, `Bahawalpur`, `Banas`, `Bashkirs`, `Bengal`, `Beylik of Aydin`, `Bithynia`, `British East India Company`, `British Protectorate`, `British Raj`, `Bundelkhand`, `Buwayhid Emirates`, `Carnatic`, `Chandellas`, `Chauhans`, `Chen-La`, `Chūzan`, `Circars`, `East Java`, `Emirate of Bin Shal'an`, `Enets`, `Far Eastern SSR`, `Gandhāra`, `Gharra`, `Goa`, `Golkonda`, `Gondwana`, `Gooty`, `Hail`, `Han`, `Han Zhao`, `Harapunchai`, `Haripunjaya`, `Hejaz`, `Hindu Shahis`, `Hindu states`, `Hokuzan`, `Hövsgöl Nuur`, `Iron Age chieftainships`, `Iron Age megalith cultures`, `Islamic and Hindu states`, `Islamic states`, `Jin Empire`, `Kamarupa`, `Kanara`, `Kanauj`, `Kara Khitai Khaganate`, `Karkhanids`, `Khanty`, `Kingdom of Antigonus`, `Kingdom of Kapisa`, `Kingdom of Sind`, `Kingdom of Sukhotai`, `Kingdom of Zunbil`, `Klachuris`, `Komi`, `Kuril Islands`, `Kurykans`, `Kwarezm`, `Lahore`, `Lambakannas`, `Laotian states`, `Lopburi Kingdom`, `Luva`, `Madras`, `Mahra`, `Mahratta states`, `Malabar`, `Mandatory Palestine (GB)`, `Mascat`, `Mazun`, `Mesopotamia (GB)`, `Middag Kingdom`, `Mon state`, `Mon States`, `Multan`, `Namazga`, `Nan Chao`, `Nan-Zhao`, `Nanzan`, `Nejd`, `Nenets`, `Northern Liang`, `Nyvukagmit (Naukan)`, `Oudh`, `Oxus`, `Paramas`, `Peshemegs`, `Quazaq Khanate`, `Rajastan`, `Ruanruan`, `Sakhalin (RU)`, `Samoyèdes`, `Saylan`, `Semites`, `Senas`, `Shan states`, `Shaskanka`, `Sind`, `Sinhalese kingdom`, `Sinhalese kingdoms`, `Somvamsis`, `Soomra Emirate`, `Sui Empire`, `Toba Wei`, `Tufan Empire`, `Tungus`, `Tungusic Tribes`, `Turan`, `Turkish Cypriot-administered area`, `Vallabhi`, `Vengi`, `Vishnu-Kundins`, `Xinjiang`, `Xixia`, `Yueban`, `Yukagir`, `minor Hindu and Buddhist kingdoms`, `minor Hindu and Buddhist states`, `minor states`, `minor states under Indian influence`

### Work Unit 29: Historical Culture Residue — Europe & Mediterranean (COMPLETED)
* **Total Entities**: 125 | **Completed**: 125 | **Missing**: 0 (`100% COMPLETE`)
* **Features Linked across Eras**: 268
* **Batch File**: [`data-sources/batches/residue-europe.json`](file:///home/ville/src/web/earth-browser/data-sources/batches/residue-europe.json) (116 cultures populated, 268 features linked across eras)
* **Batch Generator**: [`scripts/build_residue_europe_batch.ts`](file:///home/ville/src/web/earth-browser/scripts/build_residue_europe_batch.ts)
* **Inventory File**: [`data-sources/residue/europe.json`](file:///home/ville/src/web/earth-browser/data-sources/residue/europe.json)
* **Entities Resolved**:
  - `?`, `Akatziri`, `Alamans`, `Angevin Empire`, `Anhalt`, `Arran`, `Artsakh`, `Balts`, `Basques`, `Batavian Republic`, `Bremen`, `Broërec`, `Brunswick`, `Bulgars`, `Burgandy`, `Byelarus`, `Cantia`, `Castilla`, `Chelmia`, `Chuds`, `Comté de Toulouse`, `Corsica`, `Crete`, `Cuxhaven`, `Danes`, `Danube Bulgars`, `Danzig`, `Derbent`, `Dodecanese Islands`, `Duchy of Benevento`, `Duchy of Swabia`, `Dumnonia`, `Durdzuks`, `East Francia`, `East Getaes`, `Emirate of Córdoba`, `Emirate of Tiflis`, `English territory`, `Essex`, `Ests`, `Finnmark`, `Finns`, `Fivizzano`, `Franche-Comté`, `Geats`, `Geneva`, `Georgian Kingdom`, `Gepids`, `Goghtn`, `Granada`, `Guta`, `Hamburg`, `Helvetic Republic`, `Heruli`, `Hohenzollern`, `Holstein`, `Irlanda`, `Kakheti-Hereti`, `Karakalpaks`, `Karelians`, `Kent`, `Khundzi`, `Kingdom of Cassander`, `Kingdom of Georgia`, `Kingdom of Lysimachus`, `Kryvichs`, `Kurs`, `Kyivan Rus`, `Lake Segozerskoye`, `Lake Vygozero`, `Leks`, `Lippe-Detmold`, `Lucca`, `Lübeck`, `Magyars`, `Maskat`, `Massa`, `Mecklenburg-Schwerin`, `Mecklenburg-Strelitz`, `Mercia`, `Modena`, `Mordvinians`, `Nassau`, `Nemay`, `Neustria`, `Northmen`, `Northumbria`, `Oldenburg`, `Other Rus Principalities`, `Parma`, `Permians`, `Polanes`, `Polyanians`, `Pomerania`, `Pontremoli`, `Principality of Galicia-Volhynia`, `Principality of Kyiv`, `Principality of Polotsk`, `Proto-Slavs`, `Raška`, `Republic of Kraków`, `Rus' Khaganate`, `Saar Protectorate`, `Sabirs`, `Schaumburg-Lippe`, `Schleswig`, `Severians`, `Shirvan`, `Skirii`, `Slavs`, `Swabia`, `Swedes`, `Syunik`, `Tashir`, `Thuringia`, `Turingians`, `Vasconia`, `Venetia`, `Veps`, `Waldeck`, `Wessex`, `West Francia`, `West Getaes`, `Wetzlar`, `Yugoslavia`

### Work Unit 30: Historical Culture Residue — Africa (COMPLETED)
* **Total Entities**: 82 | **Completed**: 82 | **Missing**: 0 (`100% COMPLETE`)
* **Features Linked across Eras**: 216
* **Batch File**: [`data-sources/batches/residue-africa.json`](file:///home/ville/src/web/earth-browser/data-sources/batches/residue-africa.json) (75 cultures populated, 216 features linked across eras)
* **Batch Generator**: [`scripts/build_residue_africa_batch.ts`](file:///home/ville/src/web/earth-browser/scripts/build_residue_africa_batch.ts)
* **Inventory File**: [`data-sources/residue/africa.json`](file:///home/ville/src/web/earth-browser/data-sources/residue/africa.json)
* **Entities Resolved**:
  - `Abdelouadides`, `Accra`, `Africa`, `Air`, `Algiers`, `Anglo-Egyptian Sudan`, `Arma`, `Ato trading confederacy`, `Aures`, `Awsa`, `Bagirmi`, `Barghawata`, `Barotse`, `Bega`, `Beja people`, `Borgu States`, `British East Africa`, `Calabar`, `Cape Colony`, `Cotonou`, `Cushites`, `Cyraneica (UK Lybia)`, `Delagoa Bay`, `Dendi Kingdom`, `Fezzan (Frech Lybia)`, `Futa Jalon`, `Gambia, The`, `German E. Africa (Tanganyika)`, `German South-West Africa`, `Griqualand West`, `Ibadites`, `Ibadan`, `Imbangala`, `Kaarta`, `Kali`, `Kamerun`, `Kong`, `Kong Empire`, `Kushites`, `Lagos`, `Lozi`, `Malagasy`, `Mandes`, `Mauri`, `Mbailundu`, `Merinides`, `Mirambo Unyanyembe Ukimbu`, `Natal`, `Ndebele`, `Nguni`, `Ngwato`, `Nkore`, `Opobo`, `Orange Free State`, `Ovimbundu`, `Portuguese East Africa`, `Rabih az-Zubayr`, `Rift Valley States`, `Rio De Oro`, `Segu`, `Shona`, `Sotho`, `Southern Cameroon`, `Southern Rhodesia`, `Spanish Sahara`, `Sultanate of Damagaram`, `Sultanate of Utetera`, `Takrur`, `Tanzania, United Republic of`, `Teke`, `Tekrur`, `Togoland`, `Touareg`, `Transvaal`, `Tunis`, `Union of South Africa`, `Vazimba`, `Walbis Bay`, `Warsenis`, `Yaka`, `Yeke`

---

## 5. Automated Verification & Quality Gates

Before concluding work on any batch, agents must run the standard validation pipeline:

```bash
# 1. Verify schema consistency and seed data
npm test

# 2. Check TypeScript types and compile production bundle
npm run build

# 3. Log updated metrics and inspect culture_metadata_status.json
npx tsx scripts/culture_metadata_status.ts
```

All new batch scripts and datasets should be committed alongside their corresponding unit test entries in [`src/server/cultureMetadata.test.ts`](file:///home/ville/src/web/earth-browser/src/server/cultureMetadata.test.ts).
