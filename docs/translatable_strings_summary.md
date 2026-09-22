# Historical Earth Browser — Translatable Strings Summary

This document summarizes all extracted translatable names, sovereign polities, parent empires, archaeological sites, societal classifications, era metadata, and UI labels across the 53 historical GeoJSON datasets, places catalog, and application code.

---

## 📊 Summary Statistics

- **Total Unique Translatable Strings Extracted**: **6,345**
- **Total Historical Era Boundary Datasets Scanned**: **54 eras** (17,769 total polygon features)
- **Archaeological & City Places Scanned**: **675 locations** with multi-lingual seed names
- **Generated Catalog Files**:
  - [`src/data/translations/extracted_strings.json`](file:///Users/ville.heikkinen/other/earth-browser/src/data/translations/extracted_strings.json): Complete array with occurrence frequencies, roles, era references, and seed translations.
  - [`src/data/translations/translatable_catalog.json`](file:///Users/ville.heikkinen/other/earth-browser/src/data/translations/translatable_catalog.json): Key-value map suitable for direct integration into i18n localization engines (e.g. i18next, react-intl).
  - [`src/data/translations/places_multilingual_seed.json`](file:///Users/ville.heikkinen/other/earth-browser/src/data/translations/places_multilingual_seed.json): Seed translations across 20+ languages (Arabic, Hebrew, Greek, Russian, French, German, Spanish, Portuguese, Italian, Hindi, etc.).

---

## 📂 Breakdown by Category

| Category | Unique Strings | Description |
| :--- | :--- | :--- |
| **Polities & Territories** | **2,957** | Sovereign empires, kingdoms, tribes, archaeological horizons, and modern countries. |
| **Archaeological Sites & Places** | **2,458** | Cities, ancient monuments, necropolises, tell mounds, and points of interest. |
| **Abbreviated Names** | **203** | Shortened territorial labels in `ABBREVN` for small polygon label rendering. |
| **Historical Eras & Periods** | **162** | Era catalog titles, chronological year labels, and historical narrative summaries. |
| **Site Descriptions** | **159** | Archaeological site descriptions and historical notes. |
| **Canonical Civilization Names** | **123** | Normalized historical lineage identities (e.g. Achaemenid Persian Empire, Byzantine Empire). |
| **Parent Empires & Suzerainties** | **77** | Overarching suzerain empires and sovereign states referenced in `PARTOF` and `SUBJECTO`. |
| **Civilizations & Cultures** | **47** | Ancient civilization descriptors associated with archaeological sites (e.g. phoenician, nabatean). |
| **Site Types & Topography** | **37** | Typology of ancient settlements and sites (e.g. city, necropolis, megalith, tumulus). |
| **Entity Registry Overrides** | **33** | Manually curated historical empire display names and overrides. |
| **Culture Spheres & Groups** | **32** | Macro-regional cultural spheres (e.g. Greco-Roman, Middle East, East Asia, Andean). |
| **UI & Application Interface** | **25** | Application controls, filters, metadata drawer labels, and buttons. |
| **Societal Classifications** | **19** | Anthropological and societal types (e.g. hunter-gatherers, kingdom, pastoral nomads). |
| **Locations & Regions** | **8** | Additional contextual regional or boundary labels. |
| **Natural Features** | **3** | Additional contextual regional or boundary labels. |
| **Neighboring Countries** | **2** | Additional contextual regional or boundary labels. |

---

## 🏛️ Top Recurring Polities & Sovereign Entities (Spanning Multiple Eras)

These high-frequency historical entities appear consistently across multiple eras and represent prime candidates for prioritized translation:

| Entity Name | Era Count | Total Feature Mentions | Category | Key Roles |
| :--- | :--- | :--- | :--- | :--- |
| **Australian aboriginal hunter-gatherers** | 36 eras | 143 | Polities & Territories | `abbreviated_label, parent_empire, suzerain_power, territory_name` |
| **Pampas cultures** | 35 eras | 139 | Polities & Territories | `abbreviated_label, parent_empire, suzerain_power, territory_name` |
| **Patagonian shellfish and marine mammal hunters** | 35 eras | 139 | Polities & Territories | `abbreviated_label, parent_empire, suzerain_power, territory_name` |
| **Khoisan** | 33 eras | 106 | Polities & Territories | `abbreviated_label, parent_empire, suzerain_power, territory_name` |
| **Guanches** | 32 eras | 135 | Polities & Territories | `abbreviated_label, parent_empire, suzerain_power, territory_name` |
| **Amazon hunter-gatherers** | 32 eras | 127 | Polities & Territories | `abbreviated_label, parent_empire, suzerain_power, territory_name` |
| **Andean hunter-gatherers** | 32 eras | 127 | Polities & Territories | `abbreviated_label, parent_empire, suzerain_power, territory_name` |
| **Savanna hunter-gatherers** | 32 eras | 127 | Polities & Territories | `abbreviated_label, parent_empire, suzerain_power, territory_name` |
| **Tasmanian hunter-gatherers** | 32 eras | 127 | Polities & Territories | `abbreviated_label, parent_empire, suzerain_power, territory_name` |
| **Ainu** | 32 eras | 121 | Polities & Territories | `abbreviated_label, parent_empire, suzerain_power, territory_name` |
| **Subarctic forest hunter-gatherers** | 31 eras | 127 | Polities & Territories | `abbreviated_label, parent_empire, suzerain_power, territory_name` |
| **Caribbean hunter-gatherers** | 30 eras | 123 | Polities & Territories | `abbreviated_label, parent_empire, suzerain_power, territory_name` |
| **France** | 28 eras | 359 | Parent Empires & Suzerainties | `abbreviated_label, neighbor_border, parent_empire, suzerain_power, territory_name` |
| **Khoiasan** | 28 eras | 29 | Parent Empires & Suzerainties | `parent_empire` |
| **Plateau fichers and hunter gatherers** | 27 eras | 107 | Polities & Territories | `abbreviated_label, parent_empire, suzerain_power, territory_name` |
| **West African cereal farmers** | 27 eras | 107 | Polities & Territories | `abbreviated_label, parent_empire, suzerain_power, territory_name` |
| **Portugal** | 26 eras | 124 | Polities & Territories | `abbreviated_label, parent_empire, suzerain_power, territory_name` |
| **Desert hunter-gatherers** | 26 eras | 103 | Polities & Territories | `abbreviated_label, parent_empire, suzerain_power, territory_name` |
| **North American Pacific foraging, hunting and fishing peoples** | 26 eras | 103 | Polities & Territories | `abbreviated_label, parent_empire, suzerain_power, territory_name` |
| **Plain bison hunters** | 26 eras | 103 | Polities & Territories | `abbreviated_label, parent_empire, suzerain_power, territory_name` |
| **Madagascar** | 26 eras | 92 | Polities & Territories | `abbreviated_label, parent_empire, suzerain_power, territory_name` |
| **Ethiopia** | 24 eras | 96 | Polities & Territories | `abbreviated_label, parent_empire, suzerain_power, territory_name` |
| **Finno-Ugric taiga hunter-gatherers** | 23 eras | 108 | Polities & Territories | `abbreviated_label, parent_empire, suzerain_power, territory_name` |
| **Arctic marine mammal hunters** | 23 eras | 92 | Polities & Territories | `abbreviated_label, parent_empire, suzerain_power, territory_name` |
| **Paleo-Siberian hunter-gatherers** | 23 eras | 91 | Polities & Territories | `abbreviated_label, parent_empire, suzerain_power, territory_name` |
| **Morocco** | 22 eras | 252 | Polities & Territories | `abbreviated_label, neighbor_border, parent_empire, suzerain_power, territory_name` |
| **Sweden** | 22 eras | 145 | Polities & Territories | `abbreviated_label, parent_empire, suzerain_power, territory_name` |
| **Hadramaut** | 21 eras | 84 | Polities & Territories | `abbreviated_label, parent_empire, suzerain_power, territory_name` |
| **Tibet** | 21 eras | 74 | Polities & Territories | `abbreviated_label, parent_empire, suzerain_power, territory_name` |
| **Spain** | 20 eras | 290 | Polities & Territories | `abbreviated_label, neighbor_border, parent_empire, suzerain_power, territory_name` |
| **Yemen** | 20 eras | 255 | Polities & Territories | `abbreviated_label, neighbor_border, parent_empire, suzerain_power, territory_name` |
| **Philippines** | 20 eras | 78 | Polities & Territories | `abbreviated_label, parent_empire, suzerain_power, territory_name` |
| **Egypt** | 20 eras | 77 | Polities & Territories | `abbreviated_label, parent_empire, suzerain_power, territory_name` |
| **Eastern North American hunter-gatherers** | 19 eras | 79 | Polities & Territories | `abbreviated_label, parent_empire, suzerain_power, territory_name` |
| **Bhutan** | 19 eras | 74 | Polities & Territories | `abbreviated_label, parent_empire, suzerain_power, territory_name` |

---

## 🌍 Multilingual Place Name Seeds in `places.geojson`

The dataset includes multilingual name variants across more than 20 world languages. Below is a sample of archaeological sites with pre-existing multi-language translations in the dataset:

| English Name | Site Type | Available Language Variants | Sample Translations |
| :--- | :--- | :--- | :--- |
| **Aperlae** | Archaeological Site | `el` | **el**: Ἄπερλαι |
| **Tomb of the Kings** | Archaeological Site | `ru, de` | **ru**: Царские гробницы; **de**: Paphos - Tomb of the Kings - Königsgräber von Nea Paphos |
| **Tel Shaharit** | Archaeological Site | `he, en` | **he**: תל שחרית; **en**: Tel Shaharit |
| **Tel Hazir** | Archaeological Site | `ar, he, en` | **ar**: تل حصير; **he**: תל חציר; **en**: Tel Hazir |
| **Tel Zayit** | Archaeological Site | `fr, he, en` | **fr**: Tel Zayit; **he**: תל זית; **en**: Tel Zayit |
| **Tel Qashish** | Archaeological Site | `fr, he, en` | **fr**: Tell Kashish; **he**: תל קשיש; **en**: Tel Qashish |
| **Tel Zehavi** | Archaeological Site | `he, en` | **he**: תל זהבך; **en**: Tel Zehavi |
| **Tel Shoqeq** | Archaeological Site | `he, en` | **he**: תל שוקק; **en**: Tel Shoqeq |
| **Tel Kedesh** | Archaeological Site | `en, fr, he` | **en**: Qedesh Naftali; **fr**: Tel Qadesh; **he**: תל קדש |
| **Tel Rosh** | Archaeological Site | `ar, he, en` | **ar**: تل راش; **he**: תל ראש; **en**: Tel Rosh |
| **Tel Yeshua** | Archaeological Site | `en, he` | **en**: Tell Sawa; **he**: תל ישוע |
| **Sharayi`** | Archaeological Site | `en` | **en**: Sharai |
| **Horbat Ribbo** | Archaeological Site | `he, en` | **he**: חורבת רבוא; **en**: Horbat Ribbo |
| **Tel Rekhesh** | Archaeological Site | `he, en` | **he**: תל רכש; **en**: Tel Rekhesh |
| **Mt. `Arqov** | Archaeological Site | `en, he` | **en**: Jebel Irqab Isdud; **he**: הר ערקוב |

---

## 🚀 How to Use These Extracted Strings for Localization

1. **Direct Integration with i18n Frameworks**:
   - The JSON dictionary in [`src/data/translations/translatable_catalog.json`](file:///Users/ville.heikkinen/other/earth-browser/src/data/translations/translatable_catalog.json) can be loaded directly into `i18next` or `react-intl`.
2. **Translation Guessing & Fallback Pipeline**:
   - Historical entities can inherit translations from canonical lineages (e.g. "Western Roman Empire" inheriting the base translation for "Rome" + "Western").
   - Machine translation APIs or LLM batch translators can translate [`translatable_catalog.json`](file:///Users/ville.heikkinen/other/earth-browser/src/data/translations/translatable_catalog.json) in prioritized tiers:
     - **Tier 1 (Core UI & Eras)**: Historical Eras & Descriptions (53 items), Culture Spheres (20 items), Societal Classifications (20 items), UI interface strings (24 items).
     - **Tier 2 (High-Frequency Empires)**: Top 200 sovereign empires and polities.
     - **Tier 3 (Comprehensive World Atlas)**: Remaining historical tribes, polities, and archaeological sites.
