# Phase 1: era dates and source audit

Audit date: 2026-09-16. Scope: phase 1 of [PLAN.md](PLAN.md). This is the first reviewable deliverable; recommendations below are candidates for phase 2, not approved generation inputs. Existing texture-removal changes were preserved. No masks or artistic textures were generated.

## Date convention and matching policy

The authority is [`ERA_CATALOG`](../../src/server/eraMetadata.ts), checked against all `migrations/seed/world_*.geojson` files. There are **54 unique eras and 54 matching, parseable FeatureCollections**, without missing or extra seed files. Reconstruction targets use `year_start`, not `year_end` or interval midpoints. Historical territory polygons are not paleoshoreline evidence.

The catalog stores BCE as negative historical year numbers (e.g. −1 means 1 BCE), not astronomical years. This audit converts to elapsed calendar years before 1950 CE, at equal positions within the year:

- BCE year N: astronomical year = 1 − N; calendar BP = N + 1949.
- CE year N: calendar BP = 1950 − N.
- Thus 1 BCE = 1950 BP, 1 CE = 1949 BP, and 2010 CE = −60 BP. There is no historical year zero. Negative BP is valid; do not clamp it.

For coarse paleoclimate descriptions, round only the displayed age: 123,000 BCE = 124,949 calendar BP ≈ 125 ka; 10,000 BCE = 11,949 BP ≈ 12 ka; 8,000 BCE = 9,949 BP ≈ 10 ka; 5,000 BCE = 6,949 BP ≈ 7 ka. The common approximation N BCE + 1950 differs by one year; retain the explicit convention in metadata. These arithmetic values do not imply year-level scientific accuracy.

Calendar BP and uncalibrated radiocarbon BP are different age systems. Do not subtract 1950 from a radiocarbon filename to assign a BCE date. Use the publication's calibrated isochrone correspondence and uncertainty, or an explicitly documented calibration method; do not apply a fixed offset. DATED-1 reports calendar/calibrated ages and uses IntCal13/Marine13 for radiocarbon evidence ([Hughes et al., chronology section](https://doi.org/10.1111/bor.12142)). Dyke's sequence and the Dalton update are defined on radiocarbon isochrones; Dalton also supplies calibrated equivalents ([Dalton et al., 2020](https://www.sciencedirect.com/science/article/pii/S0277379119307619)).

Proposed slice policy: preserve both target and source age, report `source − target` in calendar years, and choose only within justified temporal coverage. For DATED-1, TS12 and TS10 are each 51 years older than their respective catalog targets; TS10 is a small, explicitly disclosed boundary approximation because 9,949 BP falls just beyond the dataset's 10 ka endpoint. Do not extrapolate that slice through the Holocene. Do not interpolate polygon vertices to invent intermediate margins. Any continuous model interpolation, shared slice, or larger mismatch needs a documented choice in phase 2.

## Local dataset audit

[AUDIT-INVENTORY.json](AUDIT-INVENTORY.json) records SHA-256, sizes, native bounds, record counts, geometry parts/points, and relevant attributes. Hashes identify local bytes; they do **not** prove publisher identity. Inspection used the existing `.venv` with pyshp, numpy, and Pillow. All eight layers have `.shp/.shx/.dbf/.prj`, load as Polygon type 5, and have matching geometry/DBF counts. This checks readability, not geometric validity or scientific completeness. Original source bytes were not modified.

### Eurasia: DATED-1

| Layer | DBF `AV_Time` (calendar ka) | Polygon records | Local components |
| --- | ---: | ---: | --- |
| `TS10_mc` | 10 | 1 | shp, shx, dbf, prj, CPG, sbn, sbx, shp.xml |
| `TS12_mc` | 12 | 5 | same |
| `TS20_mc` | 20 | 1 | same |

The XML explicitly identifies DATED-1, authors Hughes/Gyllencreutz/Lohne/Mangerud/Svendsen, the 2013 evidence census, and 2015 processing history. The PRJ is WGS84 North Pole Lambert Azimuthal Equal Area, **ESRI:102017**, metres, central meridian 0°, origin 90°N, zero false offsets; it is not geographic longitude/latitude. XML feature counts of zero are stale: use the actual counts above.

The publisher identifies coverage as British–Irish, Scandinavian and Svalbard–Barents–Kara ice sheets, 40–10 ka, and provides most-credible/minimum/maximum reconstructions. Dataset license is **CC-BY-3.0**, requiring attribution ([PANGAEA dataset and license](https://doi.pangaea.de/10.1594/PANGAEA.848117)). Only three most-credible slices are bundled: no min/max bounds, full chronology database, or source README. TS20 has no corresponding catalog target. Greenland, Antarctica and worldwide glaciers are not established by this regional collection. Neither grounded/floating separation nor seasonal marine ice can be inferred from these attributes.

The metadata strongly supports attribution, but no archive-to-local byte comparison was performed. For phase 2, retrieve the [publisher README](https://store.pangaea.de/Publications/HughesA-etal_2015/DATED-1_readme.pdf) and [full archive listing](https://doi.pangaea.de/10.1594/PANGAEA.848117?format=html), compare the selected files, and include uncertainty boundaries. The [project page](https://www.uib.no/prosjekt/dated/90692/dated-1) also links DATED-2; investigate its suitability before freezing the source version.

### North America: attributed Dyke layers, exact provenance unresolved

| Layer | Nominal filename age, **not verified calendar BP** | ICE records | LAKE records | Total |
| --- | ---: | ---: | ---: | ---: |
| `ice005000` | 5,000 | 128 | 94 | 222 |
| `ice007000` | 7,000 | 151 | 83 | 234 |
| `ice010000` | 10,000 | 217 | 198 | 415 |
| `ice012000` | 12,000 | 477 | 354 | 831 |
| `ice018000` | 18,000 | 139 | 127 | 266 |

PRJs declare WGS84 geographic degrees. DBFs contain `ICE*` identifiers and `SYMB` categories, but no explicit age-system, calibration, author, release or license fields. All records are classified ICE or LAKE. An ice-only use must filter `SYMB == 'ICE'` and preserve polygon holes; lakes are outside the requested scope. Regional bounding boxes (all categories) collectively span approximately 166.14°W–9.94°W, 36.04°N–84.03°N. Extents reach the Greenland/Iceland sector; a directory name is not proof of Laurentide-only coverage or complete polar coverage.

Repository history introduces these files in `a55e808`; neither that commit nor the bundled documentation records the download archive, conversion recipe, or upstream checksums. The README attributes them to Dyke (2004), but its Bulletin 577 citation does not match the publication identified by the [Dalton author/institution record](https://pub.geus.dk/en/publications/an-updated-radiocarbon-based-ice-margin-chronology-for-the-last-d/): Dyke et al. (2003), GSC Open File 1574, and Dyke (2004), *Quaternary Glaciations – Extent and Chronology, Part II*. That source describes 36 slices from 18 to 1 ka in **uncalibrated radiocarbon years**.

Conclusion: attribution is plausible, exact local release and chronology are unverified. Treat these files as potentially radiocarbon-based and **ineligible for direct calendar matching**. The previous `ice012000 → 10,000 BCE`, `ice010000 → 8,000 BCE`, and `ice007000 → 5,000 BCE` assignments are unsupported. No license grant was found locally; do not assume the app's GPL-3.0 covers these research inputs. Phase 2 should trace the original archive or replace these copies with a documented release, inspect its terms, and use calibrated correspondences and uncertainty. Dalton 2020 is a candidate update, not an automatic resolution of chronology or licensing.

### Elevation and modern reference

`elevation_4096x2048.npy` is present locally: shape (2048, 4096), float32, all finite, range approximately −10,250.27 to +6,320.38. The legacy script points to `ETOPO_2022_v1_60s_N90W180_bed.tif` at NOAA and bilinearly downsamples it before saving. The original GeoTIFF is absent from this source directory; the cache has no embedded CRS, pixel registration, vertical datum, original checksum, or processing manifest. The code indicates intended provenance but does not authenticate this cached array. It is unsuitable as the authoritative high-detail coastline input.

[NOAA](https://www.ncei.noaa.gov/products/etopo-global-relief-model) confirms ETOPO 2022 has bedrock and ice-surface variants. Its [dataset paper](https://essd.copernicus.org/articles/17/1835/2025/) identifies the license as **CC0-1.0**. Reacquire and pin the appropriate full-resolution source before generation; retain the citation. Modern bed elevations alone do not reconstruct past land movement, and subglacial negative elevations cannot simply be treated as open ocean.

`src/earthTextures/earth-blue-marble.jpg` is verified locally as 4096 × 2048 RGB. The legacy README attributes it to NASA Blue Marble Next Generation, but an original product URL, acquisition/month, conversion recipe and asset-specific rights record are absent here. Keep it as the alignment reference; do not infer exact coastlines or historical ice from its colors. Full pixel registration belongs to phase 3.

No bundled input provides a validated global paleoshoreline, separate floating shelves, seasonal sea ice, or Last Interglacial reconstruction. Missing coverage means **unavailable**, not ice-free or an empty mask.

## Era/source matrix

The following recommendation codes make shared source choices explicit. All rows require phase-2 selection before generation; **none currently has a complete validated global mask set**.

| Code | Usable local evidence | Proposed source choice | Missing coverage and uncertainty |
| --- | --- | --- | --- |
| L | Modern alignment only | Separate ~125 ka Last Interglacial reconstruction and regional relative sea-level evidence | All paleo layers missing. The legacy +7 m is not an exact-date result; do not use a deglacial model outside its range. |
| D12 | DATED-1 TS12 most-credible at 12,000 cal BP (+51 yr) | First reference era; full DATED uncertainty suite, calibrated North American margins, GIA paleotopography | NA chronology/license unresolved; no global coastlines, distinct shelves or seasonal sea ice. |
| D10 | DATED-1 TS10 at 10,000 cal BP (+51 yr, endpoint approximation) | Same source families, explicit endpoint handling | Younger-than-source boundary; local NA 10k radiocarbon is not 10k calendar. Other D12 gaps persist. |
| H-early | Modern alignment; NA layers only as unvalidated research leads | Holocene relative sea-level/GIA reconstruction and independently dated remaining ice | No accepted contemporaneous bundled ice layer; DATED-1 ended. Do not substitute NA 7k/5k filenames for calendar ages. |
| H | Modern alignment only for target date | Evaluate Holocene GIA/coastal evidence; explicitly shared modern approximation only if justified | No target-specific coastline/ice reconstruction. Small regional changes may matter; no assumed globally empty ice mask. |
| M | Modern alignment image, not an observation for that exact year | Evaluate dated modern coastline, grounded ice, shelf and seasonal observational data | 1960/1994/2000/2010 are different targets; a modern base is not evidence of identical ice or coastlines. |

Calendar BP below uses the exact arithmetic convention above. Seed filename for each slug replaces `world-` with `world_` and adds `.geojson`.

| Catalog slug | Target | Calendar BP (1950) | Source recommendation |
| --- | --- | ---: | --- |
| `world-bc123000` | 123,000 BCE | 124,949 | L |
| `world-bc10000` | 10,000 BCE | 11,949 | D12 |
| `world-bc8000` | 8,000 BCE | 9,949 | D10 |
| `world-bc5000` | 5,000 BCE | 6,949 | H-early |
| `world-bc4000` | 4,000 BCE | 5,949 | H-early |
| `world-bc3000` | 3,000 BCE | 4,949 | H-early |
| `world-bc2000` | 2,000 BCE | 3,949 | H |
| `world-bc1500` | 1,500 BCE | 3,449 | H |
| `world-bc1000` | 1,000 BCE | 2,949 | H |
| `world-bc700` | 700 BCE | 2,649 | H |
| `world-bc500` | 500 BCE | 2,449 | H |
| `world-bc400` | 400 BCE | 2,349 | H |
| `world-bc323` | 323 BCE | 2,272 | H |
| `world-bc300` | 300 BCE | 2,249 | H |
| `world-bc200` | 200 BCE | 2,149 | H |
| `world-bc100` | 100 BCE | 2,049 | H |
| `world-bc1` | 1 BCE | 1,950 | H |
| `world-100` | 100 CE | 1,850 | H |
| `world-200` | 200 CE | 1,750 | H |
| `world-300` | 300 CE | 1,650 | H |
| `world-400` | 400 CE | 1,550 | H |
| `world-500` | 500 CE | 1,450 | H |
| `world-600` | 600 CE | 1,350 | H |
| `world-700` | 700 CE | 1,250 | H |
| `world-800` | 800 CE | 1,150 | H |
| `world-900` | 900 CE | 1,050 | H |
| `world-1000` | 1,000 CE | 950 | H |
| `world-1100` | 1,100 CE | 850 | H |
| `world-1200` | 1,200 CE | 750 | H |
| `world-1279` | 1,279 CE | 671 | H |
| `world-1300` | 1,300 CE | 650 | H |
| `world-1400` | 1,400 CE | 550 | H |
| `world-1492` | 1,492 CE | 458 | H |
| `world-1500` | 1,500 CE | 450 | H |
| `world-1530` | 1,530 CE | 420 | H |
| `world-1600` | 1,600 CE | 350 | H |
| `world-1650` | 1,650 CE | 300 | H |
| `world-1700` | 1,700 CE | 250 | H |
| `world-1715` | 1,715 CE | 235 | H |
| `world-1783` | 1,783 CE | 167 | H |
| `world-1800` | 1,800 CE | 150 | H |
| `world-1815` | 1,815 CE | 135 | H |
| `world-1878` | 1,878 CE | 72 | H |
| `world-1880` | 1,880 CE | 70 | H |
| `world-1900` | 1,900 CE | 50 | H |
| `world-1914` | 1,914 CE | 36 | H |
| `world-1920` | 1,920 CE | 30 | H |
| `world-1930` | 1,930 CE | 20 | H |
| `world-1938` | 1,938 CE | 12 | H |
| `world-1945` | 1,945 CE | 5 | H |
| `world-1960` | 1,960 CE | -10 | M |
| `world-1994` | 1,994 CE | -44 | M |
| `world-2000` | 2,000 CE | -50 | M |
| `world-2010` | 2,010 CE | -60 | M |

## Reconstruction recommendations and phase-2 handoff

1. Start with **10,000 BCE / 11,949 calendar BP**. Use TS12 only with its disclosed 51-year mismatch and recovered uncertainty suite. Resolve North American chronology before combining regional margins. The catalog's historical period name is not a scientific age conversion.
2. Prioritize regional land movement in coastlines. The [Godbout/Brouard/Roy dataset](https://doi.pangaea.de/10.1594/PANGAEA.947536) is a concrete candidate: modeled North American rebound/paleotopography, coverage 35–90°N, 165–45°W, ICE5G/6G/7G variants, CC-BY-4.0. Phase 2 must inspect time steps, vertical reference and the sea-level treatment; do not mistake an ice-free terrain product for an ice-presence mask or global coverage.
3. Evaluate global model alternatives alongside regional evidence. [PaleoMIST 1.0](https://www.nature.com/articles/s41467-021-21469-w) covers 80 ka and includes GIA, but its 2,500-year steps are explicitly too coarse for sensitive near-field Holocene sea-level changes. It cannot cover 124,949 BP and should not be adopted as the sole accurate deglacial shoreline source. Dataset files, license and variable meanings still need inspection.
4. Research the Last Interglacial independently. The [IPCC AR6 assessment](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-2/) places the warm interval around 125 ka; that broad context does not establish a coastline at the catalog date. Exposed land and flooded modern land both require regional reconstruction and ocean connectivity, not an unvalidated uniform +7 m threshold.
5. Resolve Greenland, Antarctica, smaller ice masses, floating shelves, and winter/summer sea ice separately. No local attributes support all these classes. Ice presence is not evidence of a traversable human route. Do not revive mathematical ocean-ice shapes or add lakes/vegetation.
6. Use modern bathymetry plus a documented sea-level curve only as a declared fallback after comparing GIA options. No legacy scalar offset (−55/−25/−3/+7 m) is accepted by this audit. Later eras may share a source slice only with explicit approximation and coverage metadata.

Phase 1 is complete as an audit: unresolved provenance, licensing and data gaps are recorded rather than certified away. Phase 2 remains open for dataset acquisition/selection, including exact bundle authentication, calibrated North American matching, revised Eurasian products and marine ice evidence. Phase 3 will define output contracts; phase 4 will implement processing.

## Verification

- Verified matrix order and membership against all 54 catalog slugs, and catalog filenames against the 54 seed FeatureCollections.
- Rechecked all 47 recorded local SHA-256 hashes; all eight shapefile component sets loaded with matching record counts.
- `npm test`: 54 tests passed across eight files.
- `npm run build`: passed database export, TypeScript checking and Vite build. Required execution outside the sandbox for the `tsx` IPC socket. Existing Vite CJS deprecation and bundle-size warnings remain.
- `git diff --check`: passed. No application or generator implementation changes were made in phase 1.
