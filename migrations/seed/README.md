# Historical GeoJSON Datasets

The GeoJSON files in this directory contain historical boundaries, sovereign territories, and cultural regions across 54 eras from 123,000 BCE to 2010 CE.


## Data Source & Attribution

- **Project**: [historical-basemaps](https://github.com/aourednik/historical-basemaps)
- **Source Files**: [`geojson/`](https://github.com/aourednik/historical-basemaps/tree/master/geojson)
- **Author & Cartographer**: **André Ourednik** ([ourednik.info](https://ourednik.info/historicalmaps/))
- **License**: **GNU General Public License v3.0 (GPL-3.0)** ([LICENSE](https://github.com/aourednik/historical-basemaps/blob/master/LICENSE))

## Included Datasets

The seed files span prehistoric, ancient, medieval, early modern, and contemporary eras:
- `world_bc123000.geojson` – Eemian Interglacial & Early Humans
- `world_bc10000.geojson` – Dawn of the Holocene
- `world_bc8000.geojson` – Early Neolithic Era
- `world_bc5000.geojson` – Chalcolithic & Ubaid Period
- `world_bc4000.geojson` – Early Bronze Age & Urban Genesis
- `world_bc3000.geojson` – Early Dynastic & Sumerian Cities
- `world_bc2000.geojson` – Middle Bronze Age & Minoan Crete
- `world_bc1500.geojson` – Late Bronze Age Empires
- `world_bc1000.geojson` – Early Iron Age
- `world_bc700.geojson` – Neo-Assyrian Empire & Archaic Greece
- `world_bc500.geojson` – Classical Antiquity & Persian Zenith
- `world_bc400.geojson` – Late Classical & Warring States
- `world_bc323.geojson` – Hellenistic Kingdoms & Alexander
- `world_bc300.geojson` – Mauryan Empire & Hellenistic World
- `world_bc200.geojson` – Han & Roman Expansion
- `world_bc100.geojson` – Late Roman Republic & Han Silk Road
- `world_bc1.geojson` – Augustan Roman Empire
- `world_100.geojson` – Trajan & High Roman Empire
- `world_200.geojson` – Severan Rome & Three Kingdoms Prelude
- `world_300.geojson` – Tetrarchy & Gupta Foundation
- `world_400.geojson` – Late Antiquity & Migrations
- `world_500.geojson` – Post-Roman Kingdoms & Northern/Southern Dynasties
- `world_600.geojson` – Early Middle Ages & Sui Unification
- `world_700.geojson` – Umayyad Caliphate & Tang Golden Age
- `world_800.geojson` – Carolingian & Abbasid Golden Age
- `world_900.geojson` – Five Dynasties & Norse Expansion
- `world_1000.geojson` – High Middle Ages & Song Dynasty
- `world_1100.geojson` – Crusader States & Great Seljuks
- `world_1200.geojson` – Eve of the Mongol Invasions
- `world_1279.geojson` – Mongol Empire & Yuan Dynasty
- `world_1300.geojson` – Four Mongol Khanates & Ottoman Genesis
- `world_1400.geojson` – Timurid Empire & Early Ming
- `world_1492.geojson` – Age of Discovery
- `world_1500.geojson` – Global Maritime Networks
- `world_1530.geojson` – Reformation & Global Empires
- `world_1600.geojson` – Tokugawa Shogunate & East India Companies
- `world_1650.geojson` – Peace of Westphalia
- `world_1700.geojson` – Great Northern War & War of Spanish Succession
- `world_1715.geojson` – Age of Enlightenment
- `world_1783.geojson` – American Independence
- `world_1800.geojson` – Napoleonic Era & Global Shifts
- `world_1815.geojson` – Congress of Vienna
- `world_1878.geojson` – Congress of Berlin & Eve of the War of the Pacific
- `world_1880.geojson` – High Imperialism
- `world_1900.geojson` – Turn of the Century
- `world_1914.geojson` – Outbreak of World War I
- `world_1920.geojson` – Interwar & League of Nations
- `world_1930.geojson` – Great Depression & Rising Autocracies
- `world_1938.geojson` – Eve of World War II
- `world_1945.geojson` – Post-World War II
- `world_1960.geojson` – Year of Africa & Cold War Zenith
- `world_1994.geojson` – Post-Cold War World
- `world_2000.geojson` – Turn of the Millennium
- `world_2010.geojson` – Contemporary Era
- `places.geojson` – Historical settlements and cities

## Updating Datasets from Upstream

To synchronize GeoJSON datasets from the upstream `aourednik/historical-basemaps` repository:

```bash
# 1. Fetch and synchronize seed files from upstream
npm run data:update

# 2. Ingest updated features into the PostGIS database
npm run db:ingest

# 3. Re-export static datasets for client & static distribution
npm run db:export

# 4. Verify test suite
npm test
```

The `npm run data:update` command (`scripts/update_geojson_datasets.ts`):
- Clones or pulls the latest master branch of `https://github.com/aourednik/historical-basemaps`.
- Validates the GeoJSON topology and FeatureCollection format of every file.
- Detects added, modified, and unchanged datasets.
- Automatically checks consistency with the era catalog in `src/server/eraMetadata.ts` to ensure all historical eras have catalog metadata and year definitions.

