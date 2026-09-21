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

* **Unique Named Entities Completed**: **199 / 2,999** (`6.6%`)
* **Total Feature Records Linked**: **636 / 10,395** (`6.1%`)
* **Prototype Era (500 BCE / `world-bc500`)**: **32 / 77 features linked** (`41.6%`)
* **Unlinked Features Remaining**: **9,759**
* **Missing Entities Remaining**: **2,800**


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


### Work Unit 7: Central Asia & Steppe Nomads
* **Total Entities**: 71 | **Completed**: 0 | **Missing**: 71
* **Target Batch File**: `data-sources/batches/central-asia.json`
* **Key Missing Entities**:
  - `Afanasevo`, `Alans`, `Andronovo`, `Astrakhan Khanate`, `Avars`, `Blue Horde`, `Bokhara Khanate`, `Bulgar Khanate`, `Catacomb culture`, `Chagatai Khanate`, `Cimmerians`, `Cumans`, `Dzungar Khanate`, `Göktürks`, `Golden Horde`, `Hephthalites`, `Huns`, `Ilkhanate`, `Karasuk culture`, `Kazakh Khanate`, `Khazar Khaganate`, `Khiva Khanate`, `Kipchaks`, `Kokand Khanate`, `Mongol Empire`, `Nogai Horde`, `Pechenegs`, `Rouran Khaganate`, `Saka`, `Sarmatians`, `Scythians`, `Sintashta`, `Timurid Empire`, `Uyghur Khaganate`, `White Horde`, `Xiongnu`, `Yamnaya culture`, `Yuezhi`

### Work Unit 8: East Asian Dynasties & Kingdoms
* **Total Entities**: 70 | **Completed**: 4 | **Missing**: 66
* **Target Batch File**: `data-sources/batches/east-asia.json`
* **Key Missing Entities**:
  - `Baekje`, `Balhae`, `Buyeo`, `Cao Wei`, `Dali Kingdom`, `Donghu`, `Eastern Wu`, `Gaya Confederacy`, `Goguryeo`, `Gojoseon`, `Goryeo`, `Han Dynasty`, `Heian Japan`, `Hong Kong`, `Jin Dynasty (Jurchen)`, `Joseon`, `Kamakura Shogunate`, `Kofun Japan`, `Liang Dynasty`, `Liao Dynasty (Khitan)`, `Macau`, `Ming Dynasty`, `Muromachi Shogunate`, `Nanzhao`, `Northern Wei`, `Qin Dynasty`, `Qing Dynasty`, `Ryukyu Kingdom`, `Shang Dynasty`, `Shu Han`, `Silla`, `Song Dynasty`, `Sui Dynasty`, `Tang Dynasty`, `Tokugawa Shogunate`, `Western Xia (Tangut)`, `Xia Dynasty`, `Yamato Japan`, `Yayoi`, `Yuan Dynasty`

### Work Unit 9: South Asian Empires & Dynasties
* **Total Entities**: 85 | **Completed**: 9 | **Missing**: 76
* **Target Batch File**: `data-sources/batches/south-asia.json`
* **Key Missing Entities**:
  - `Bahmani Sultanate`, `Bengal Sultanate`, `Chalukya Dynasty`, `Chera Kingdom`, `Chola Empire`, `Deccan Sultanates`, `Delhi Sultanate`, `Dravidians`, `Gandhara`, `Gupta Empire`, `Harsha Empire`, `Hoysala Empire`, `Indus Valley Civilization`, `Kalinga`, `Kushite / Kushan Empire`, `Maratha Empire`, `Mauryan Empire`, `Mughal Empire`, `Nanda Empire`, `Pallava Dynasty`, `Pandya Dynasty`, `Rashtrakuta Dynasty`, `Satavahana Empire`, `Sikh Empire`, `Vakataka Dynasty`, `Vedic Aryans`, `Vijayanagara Empire`

### Work Unit 10: Southeast Asian Kingdoms & Nusantara
* **Total Entities**: 50 | **Completed**: 0 | **Missing**: 50
* **Target Batch File**: `data-sources/batches/southeast-asia.json`
* **Key Missing Entities**:
  - `Aceh Sultanate`, `Ayutthaya Kingdom`, `Banten Sultanate`, `Bruneian Empire`, `Champa`, `Chenla`, `Dai Viet`, `Dvaravati`, `Funan`, `Khmer Empire`, `Lan Na`, `Lan Xang`, `Majapahit Empire`, `Mataram Kingdom`, `Melaka Sultanate`, `Pagan Kingdom`, `Pyu City-States`, `Rattanakosin`, `Srivijaya Empire`, `Sukhothai Kingdom`, `Sulu Sultanate`, `Sunda Kingdom`, `Toungoo Empire`

### Work Unit 11: African Civilizations (West, Central, East & Southern)
* **Total Entities**: 124 | **Completed**: 3 | **Missing**: 121
* **Target Batch Files**:
  - `data-sources/batches/west-africa.json`
  - `data-sources/batches/central-africa.json`
  - `data-sources/batches/east-africa.json`
  - `data-sources/batches/southern-africa.json`
* **Key Missing Entities**:
  - *West Africa*: `Ashanti Empire`, `Benin Kingdom`, `Dahomey`, `Empire of Ghana (Wagadou)`, `Hausa Kingdoms`, `Jolof Empire`, `Kanem-Bornu Empire`, `Mali Empire`, `Mossi Kingdoms`, `Nok culture`, `Oyo Empire`, `Songhai Empire`, `Yoruba`
  - *Central Africa*: `Kingdom of Kongo`, `Kuba Kingdom`, `Loango`, `Luba Empire`, `Lunda Empire`, `Matamba`, `Ndongo`
  - *East Africa*: `Adal Sultanate`, `Ajuran Sultanate`, `Aksumite Empire (Axum)`, `Buganda`, `Bunyoro`, `Da'amat (D'mt)`, `Geledi Sultanate`, `Kilwa Sultanate`, `Mombasa`, `Rwanda`, `Swahili Coast`, `Zagwe Dynasty`
  - *Southern Africa*: `Butua / Rozvi Empire`, `Great Zimbabwe`, `Kingdom of Mutapa`, `Mapungubwe`, `Zulu Kingdom`

### Work Unit 12: European Medieval & Early Modern Realms
* **Total Entities**: 170 | **Completed**: 15 | **Missing**: 155
* **Target Batch Files**:
  - `data-sources/batches/western-europe.json`
  - `data-sources/batches/central-europe.json`
  - `data-sources/batches/nordic.json`
  - `data-sources/batches/slavic.json`
  - `data-sources/batches/baltic.json`
* **Key Missing Entities**:
  - *Western Europe*: `Anglo-Saxons`, `Carolingian Empire`, `Celts / Gauls`, `Celtiberians`, `Franks / Merovingian`, `Kingdom of England`, `Kingdom of France`, `Kingdom of Scotland`, `Picts`, `Visigothic Kingdom`, `Ostrogothic Kingdom`, `Vandal Kingdom`
  - *Central Europe*: `Austrian Empire`, `Austro-Hungarian Empire`, `Holy Roman Empire`, `Kingdom of Bohemia`, `Kingdom of Prussia`, `Polish-Lithuanian Commonwealth`, `Swiss Confederacy`, `Teutonic Order`
  - *Nordic*: `Kalmar Union`, `Kingdom of Denmark-Norway`, `Norse / Vikings`, `Swedish Empire`
  - *Slavic*: `Kievan Rus'`, `Novgorod Republic`, `Principality of Vladimir-Suzdal`, `Grand Duchy of Moscow`, `Tsardom of Russia`, `Russian Empire`
  - *Baltic*: `Curonians`, `Early Combware`, `Narva culture`, `Old Prussians`, `Brushed Pottery culture`

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
