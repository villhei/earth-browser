# Phase 2: reconstruction source selection

Decision date: **2026-09-16**. Implements phase 2 of [PLAN.md](PLAN.md), following [SOURCE-AUDIT.md](SOURCE-AUDIT.md). This is a source-selection deliverable, not a mask validation or a claim of global coverage. No masks, artistic textures or application changes were made.

Select **NADI-1 v1** for North American ice margins and **DATED-1** for Eurasian margins. Their original archives and uncertainty bounds are now locally available and checksum-pinned. Select **ETOPO 2022 v1, 60 arc-second bed** as the modern elevation reference. Select the **Godbout/Brouard/Roy ICE-6G_C paleotopography family** for subsequent regional shoreline evaluation, with ICE-5G and ICE-7G_NA as sensitivity alternatives. Shoreline output remains unavailable until terrain acquisition and ocean/ice classification are validated. Unsupported regions and classes remain unavailable.

## Reproducibility and status

[SOURCE-SELECTION.json](SOURCE-SELECTION.json) records original download URLs, byte lengths, SHA-256 hashes, inspected shapefile members and a disposition for every catalog era. Downloads and selected extracted members are retained in `research-cache/`, excluded from Git because they are large research inputs. They are not production assets. Another checkout must retrieve the manifest URLs and verify hashes before use; the repository does not contain these new archives. Publisher metadata pages can change: preserve the recorded snapshot and investigate a changed hash rather than silently replacing the pin.

The manifest distinguishes downloaded and inspected inputs from source families whose bulk files have not been acquired. A DOI or a license alone does not mean a layer is ready to render. Archive integrity and shapefile readability were checked; topological validity, coverage polygons and rasterization belong to phases 3–5.

## Ice-margin selections and dates

Use historical BCE/CE and the audit's absent-year-zero convention. The signed offset is **source calendar BP − target calendar BP**. Preserve original chronology; never calibrate a filename by adding/subtracting a constant.

| Catalog target | Calendar BP | North America: NADI-1 | Eurasia: DATED-1 | Offset |
| --- | ---: | --- | --- | ---: |
| `world-bc10000` | 11,949 | `12ka_cal_{OPTIMAL,MIN,MAX}_NADI-1_Dalton_etal_QSR` | `TS12_{mc,min,max}` | +51 yr each |
| `world-bc8000` | 9,949 | `10ka_cal_{OPTIMAL,MIN,MAX}_NADI-1_Dalton_etal_QSR` | `TS10_{mc,min,max}` | +51 yr each |
| `world-bc5000` | 6,949 | `7ka_cal_{OPTIMAL,MIN,MAX}_NADI-1_Dalton_etal_QSR` | Unavailable | +51 yr |
| `world-bc4000` | 5,949 | `6ka_cal_{OPTIMAL,MIN,MAX}_NADI-1_Dalton_etal_QSR` | Unavailable | +51 yr |
| `world-bc3000` | 4,949 | `5ka_cal_{OPTIMAL,MIN,MAX}_NADI-1_Dalton_etal_QSR` | Unavailable | +51 yr |

These are disclosed nearest-slice approximations, not reconstructions accurate to 51 years. Use the published central estimate and retain both uncertainty bounds separately. Do not interpolate polygon vertices. The 9,949 BP target lies outside DATED-1's 10,000 BP endpoint: permit TS10 **only for this named target**, labelled `endpoint_approximation`; never extrapolate it to younger Holocene eras. NADI-1's 10 ka slice is within its chronology. No implicit slice reuse is selected for other eras.

### North America: replace the untraceable bundle

Use [Dalton et al., NADI-1 v1, Zenodo 8161764](https://zenodo.org/records/8161764), DOI `10.5281/zenodo.8161764`, published 2023-11-09, **CC-BY-4.0** (confirmed through the publisher API snapshot). Attribute both dataset and [Dalton et al. 2023](https://doi.org/10.1016/j.quascirev.2023.108345), and identify processing changes. The downloaded ZIP matches the publisher MD5 `fde5b0c80e766183ba5ad87c611f3e56`; SHA-256 is in the manifest. Its 588 components comprise 49 calendar slices, 25–1 ka at 500-year spacing, each with optimal/minimum/maximum polygons. Selected layers declare WGS84/EPSG:4326; their DBF contains area, not ice-class labels.

The methods use CALIB 8.1.0 with IntCal20/Marine20 for radiocarbon evidence, alongside other dating methods. Preserve the authors' chronology and spatial uncertainty bounds; do not recalibrate the isochrones. Greenland and disconnected western-US mountain ice are outside the study's scope. The margins are selected as regional ice-extent evidence; their attributes do **not** independently classify floating shelves or seasonal sea ice. Grounded-ice export requires a documented terrestrial/grounding interpretation and coverage boundary; ambiguous marine portions stay unclassified.

The old `ice*.{shp,dbf,...}` files remain research references, excluded from generation. Their archive/conversion/license is still unresolved; replacement makes those gaps non-blocking. Correct bibliographic lineage: Dyke et al. (2003), GSC Open File 1574, and Dyke (2004), *Quaternary Glaciations—Extent and Chronology, Part II*, pp. 373–424; the legacy Bulletin 577 attribution was incorrect.

[Dalton 2020, Table 1 and §2](https://www.glyfac.buffalo.edu/Faculty/briner/buf/pubs/Dalton_et_al_2020_w_maps.pdf) was inspected before choosing the replacement. It retains radiocarbon isochrones; approximate calibrated ages use IntCal13 and 10% age error. For example, 10.5 radiocarbon ka corresponds to approximately 12.1 calendar ka, while 10.25 corresponds to approximately 11.8; their recommended uncertainty brackets are 9.5–11.5 and 9.5–11 radiocarbon ka respectively. These are not a year-precise 11,949 BP solution. The 9 and 8.5 radiocarbon-ka slices correspond to approximately 10.3 and 9.6 calendar ka, bracketing 9,949 BP. NADI-1's directly calendar-dated 12/10 ka suites are preferred. The old 12/10/7 ka filename assignments are rejected.

### Eurasia: retain authenticated DATED-1

Use [Hughes et al. 2015 dataset, PANGAEA.848117](https://doi.pangaea.de/10.1594/PANGAEA.848117?format=html), **CC-BY-3.0**, and cite the [2016 Boreas methods paper](https://doi.org/10.1111/bor.12142). All six release files were retrieved: README, reference list, chronology database in SHP/KMZ, and time slices in SHP/KMZ. **All 24 bundled components** of TS10/12/20 match the publisher ZIP exactly. TS10/12 minimum/maximum members were recovered and inspected alongside the central estimates; TS20 remains unselected.

The README confirms projected metres in North Pole Lambert Azimuthal Equal Area (ESRI:102017). Preserve that CRS until explicit reprojection. Coverage is the British–Irish, Scandinavian and Svalbard–Barents–Kara complexes, not Greenland, Iceland, Antarctica or global mountain glaciers. The uncertainty suite represents alternative extents, not probabilistic alpha values or three ice classes. No class field identifies shelves or seasonal sea ice.

[The DATED-2 project page](https://www.uib.no/en/project/dated/95011/dated-2), retrieved directly, still describes a planned release and gives no downloadable release on that page. A [2020 authors' conference abstract](https://www.utupub.fi/bitstream/10024/170187/1/NGWM%202020.pdf) describes updated work, but is not an independently versioned data archive with verified terms. **Do not select DATED-2** on that evidence. This records what was located, not proof that no release exists anywhere. Even the project's proposed 120 ka extension would not reach 124,949 BP.

## Terrain, sea level and regional reconciliation

### Modern elevation reference

Select [NOAA ETOPO 2022 v1](https://www.ncei.noaa.gov/products/etopo-global-relief-model), `ETOPO_2022_v1_60s_N90W180_bed.tif`, **CC0-1.0**. Original URL and checksum are in the manifest. The [NOAA user guide](https://www.ngdc.noaa.gov/mgg/global/relief/ETOPO2022/docs/1.2%20ETOPO%202022%20User%20Guide.pdf) and inspected GeoTIFF tags establish:

- 21,600 × 10,800 float32 cells; 60 arc-seconds; WGS84 geographic coordinates, EPSG:4326.
- Pixel-is-area registration, outer extent −180…180° longitude and −90…90° latitude; upper-left corner (−180°, 90°), north-to-south rows. First cell centre is (−179.9916667°, 89.9916667°).
- Heights in metres relative to EGM2008 (vertical EPSG:3855); NoData −99999. A geoid-relative height is not an ellipsoid height.

This pins a modern reference, not paleotopography. Do not use the legacy `.npy`, pre-downsample before classification, or classify subglacial negative elevations as open ocean. ETOPO cannot resolve every narrow strait or low coastal sill. The final 4096 × 2048 alignment contract remains phase 3.

### Regional GIA choice

[Godbout, Brouard and Roy's dataset](https://doi.pangaea.de/10.1594/PANGAEA.947536?format=html), DOI `10.1594/PANGAEA.947536`, **CC-BY-4.0**, provides ICE5G/6G/7G model families. The [methods](https://pmc.ncbi.nlm.nih.gov/articles/PMC10593785/) were inspected: 1-km grids interpolate much coarser model predictions, with 500–1000-year steps; there are 38 ICE5G and 47 each ICE6G/7G surfaces. The publisher envelope is 35–90°N, 165–45°W; sampled model points span 35.5–89.5°N. Do not treat the envelope as a valid-data polygon.

Select `ICE6G_Paleo_subice.zip` for the first terrain trial, retaining ICE5G (VM2 L90) and ICE7G_NA (VM7) as alternatives to ICE6G_C (VM5a). This is an operational choice, not a finding that ICE6G is universally most accurate. ICE6G explicitly handles shelf geometry; ICE7G requires inferred shelf handling and removal of anomalous points. Prefer inspecting all model differences to silently choosing the newest.

The authors combine GEBCO 2021 (reported EGM96 heights) with deformation surfaces in Canada Albers. **PaleoDEMs are relative to sea level at the source epoch**: zero can indicate coastline only outside ice and in ocean-connected areas. Do not add another eustatic offset. Deformation differences have no independently specified absolute vertical datum. The reported ~0.4 m interpolation agreement is not paleocoastline accuracy. Bulk geodatabases (several GB each) were not downloaded; the family is selected, but exact members/grid metadata are an acquisition gate before generation. Trial ages are 12/10/7 ka (+51 years); verify actual member names and time axes, rather than infer them from archive names.

### Global comparison and overlap policy

[PaleoMIST 1.0, PANGAEA.905800](https://doi.pangaea.de/10.1594/PANGAEA.905800), **CC-BY-4.0**, supplies global ice thickness, deformation/sea-level change and paleotopography at 1°/0.25°, in 2,500-year steps over 80 ka. The record notes a 2021-04-19 grid/README update. Retain it for broad sensitivity comparison, **not the selected fine deglacial coastline**: 12.5 ka differs from 11,949 BP by +551 years; 10 ka differs from 9,949 BP by +51 years but still belongs to a coarse history. Its range excludes the Last Interglacial target. No bulk pin or production use is claimed.

Also evaluated [ICE-NADI-1](https://egusphere.copernicus.org/preprints/2026/egusphere-2026-4374/), a July 2026 preprint with 500-year thickness histories tied to NADI-1 and [associated data](https://doi.org/10.5281/zenodo.21464139). This is a promising way to reduce mismatch between empirical margins and older GIA loading histories, but remains under review as of this record. Defer adoption until its regional RSL outputs, terms and model behaviour are inspected; do not confuse it with the selected 2023 NADI-1 polygons.

Decisions for later implementation:

1. Keep regional outputs separate initially. Do not merge regional paleoDEMs, ETOPO and global models across an arbitrary rectangular boundary.
2. Within a validated regional domain, use the regional epoch-relative terrain consistently. Outside it, shoreline change remains unavailable until a separately validated model is selected. ETOPO alone does not fill the gap.
3. Before any merge, compare overlapping same-age predictions in a shared vertical reference, report disagreement, and retain an unavailable seam zone where no defensible reconciliation exists. No artistic blending or averaging incompatible shorelines.
4. Give NADI-1 ownership of its North American complexes, DATED-1 its Eurasian complexes, and a future Greenland source ownership of Greenland. Geometric overlap does not expand scientific coverage; record conflicting margins rather than unioning them.
5. GIA model ice histories and NADI-1 margins are not dynamically self-consistent. Treat their mismatch as model uncertainty; block land/ocean decisions in conflicting marine/ice cells. Ocean connectivity, inland-basin exclusion and grounded/floating semantics must be resolved before export.

**Scalar fallback decision:** no modern-bathymetry-plus-uniform-sea-level fallback is authorized for production masks. A future sensitivity experiment can evaluate [Lambeck et al. 2014](https://doi.org/10.1073/pnas.1411762111), but must first pin the curve, age axis and errors. It cannot substitute for local RSL near former ice loads. None of the legacy +7/−55/−25/−3 m values is selected.

## Remaining regions, classes and era groups

The following are explicit dispositions, not promises that all data are acquired. `Unavailable` means no output, not a transparent image representing ice-free conditions.

| Gap / group | Evidence evaluated and selected family | Disposition and next requirement |
| --- | --- | --- |
| Greenland, D12/D10/H-early | [PaleoGrIS 1.0](https://data.mendeley.com/datasets/nh57cz4gys/1), DOI `10.17632/nh57cz4gys.1`, CC-BY-4.0; [methods](https://cp.copernicus.org/articles/20/701/2024/), 14–6.5 ka at 500-year steps | Preferred extension: 12/10/7 ka (+51 yr). Not acquired or byte-pinned; unavailable until inspecting the README, isochrones, uncertainty and marine classification. No extrapolation to 5,949 BP or later; peripheral glaciers are not automatically covered. |
| Antarctica, deglacial/Holocene | [RAISED/Bentley et al. 2014](https://www.bas.ac.uk/data/our-data/publication/a-community-based-geological-reconstruction-of-antarctic-ice-sheet-deglaciation-since-the-last-glacial-maximum/), grounding-line/confidence maps at 20/15/10/5 ka; [Antarctic paleo-constraint database 2023](https://essd.copernicus.org/articles/15/3573/2023/) | Validation evidence families, not a selected 12 ka polygon. Dates, usable geometry and dataset rights require inspection. No interpolation from 15/10 ka; Antarctic masks unavailable. Grounding lines do not determine shelf calving fronts. |
| Iceland and other small ice masses | [ICEland-1](https://essd.copernicus.org/articles/18/3367/2026/essd-18-3367-2026.html) chronology; regional glacier reconstructions; modern [RGI 7](https://nsidc.org/data/nsidc-0770/versions/7) | Chronological constraints do not themselves yield synchronous polygons. Paleo small-ice coverage unavailable. Modern RGI/GLIMS is an acquisition-date inventory, not a Holocene reconstruction. Dataset-specific terms and dates must be pinned before adoption. |
| Floating shelves, prehistoric | Ice-margin archives have no shelf class; ICE6G model treatment is not an independent observed shelf extent | Unavailable. Require separately dated grounding and calving-front geometry or a validated, explicitly modelled class. Do not reinterpret undifferentiated polygons or infer shelves from modern ocean overlap. |
| Winter/summer sea ice, prehistoric | [Arctic 127 ka model/proxy comparison](https://cp.copernicus.org/articles/17/37/2021/); [Holocene Beaufort Sea biomarkers](https://cp.copernicus.org/articles/22/187/2026/); [Powell Basin Antarctic record](https://cp.copernicus.org/articles/21/299/2025/) | Regional proxy records constrain conditions, not global seasonal boundaries. 127 ka is +2,051 years from the L target. No suitable exact-target global seasonal mask was established; both classes unavailable. No latitude belts, gap-bridging or travel-route claims. |
| L: 124,949 BP | [WALIS 1.0](https://essd.copernicus.org/articles/15/1/2023/), fixed database DOI `10.5281/zenodo.7348242`; [glaciated Northern Hemisphere indicators](https://essd.copernicus.org/articles/14/1447/2022/); [Last Interglacial coupled ice/climate study](https://cp.copernicus.org/articles/12/2195/2016/) | Select WALIS as the regional RSL evidence family, not a gridded surface. Article CC-BY-4.0 does not replace inspecting individual dataset terms. Age/elevation errors, uplift, GIA and indicative meaning must be carried into any reconstruction. Models provide scenarios, not an exact-date observed polar margin. All five paleo mask classes remain unavailable; no +7 m coastline, no deglacial extrapolation. |
| H-early: 6,949/5,949/4,949 BP | NADI-1 7/6/5 ka selected above; Godbout terrain family; PaleoGrIS only for 6,949 BP | Regional ice evidence selected; shoreline and other global classes unavailable pending validation. No DATED reuse. |
| H: all 3,949…5 BP catalog targets | Regional [HOLSEA family](https://essd.copernicus.org/articles/17/545/2025/index.html) and GIA, historical charts and dated glacier records | Select these as evidence families for later regional evaluation; no contemporaneous global polygon set or blanket modern approximation selected. HOLSEA includes water-level indicators requiring marine screening; lakes stay excluded. NADI's younger slices are available for future assessment, but not automatically reused for every historical year. All requested output classes remain unavailable for now. |
| M: 1960/1994/2000/2010 | [NSIDC Sea Ice Index v4](https://nsidc.org/data/g02135/versions/4), G02135; [BedMachine Antarctica v3](https://nsidc.org/sites/default/files/documents/user-guide/nsidc-0756-v003-userguide.pdf), [Greenland v4](https://nsidc.org/sites/default/files/documents/user-guide/idbmg4-v004-userguide.pdf); RGI/GLIMS; [PSMSL](https://psmsl.org/data/obtaining/complete.php) and dated coast surveys | Sea Ice Index is the selected observational family for 1994/2000/2010 seasonal work; no 1960 satellite coverage. Pin individual monthly files, terms and observation dates first. Define hemisphere-specific seasons and concentration threshold (extent convention 15%); do not use an area time series as a spatial mask. BedMachine distinguishes grounded (2) and floating (3), but acquisition epochs must match; neither is automatically a 1960 or 2010 snapshot. Modern outputs remain unavailable until those selections are verified. |

Minimum/maximum margin envelopes are not statistical confidence probabilities. Proxy absence, missing coverage and observed absence must remain distinct. No ice product establishes that people could traverse it.

## Modern alignment image and rights

`earth-blue-marble.jpg` is retained only as the existing visual alignment reference; its SHA-256 is pinned. Git history traces it to `848dea1` (2021-07-03), then renames in `5d4488e` and `67c3dce`. The original addition and EXIF contain no source URL, month or rights record; metadata establishes dimensions/orientation, not provenance. The [NASA Blue Marble Next Generation product](https://neo.gsfc.nasa.gov/view.php?datasetId=BlueMarbleNG) is a plausible family, **not an authenticated identification of these bytes**. Do not upgrade the legacy attribution to a verified source or derive a shoreline from image colours. Exact original product, conversion history and asset-specific rights remain unresolved; no new redistribution of that image is part of this deliverable.

## Phase-3 handoff

Phase 2 is complete as selection and disposition: reproducible regional ice-margin inputs and a modern terrain reference are selected; remaining gaps explicitly restrict what may be generated. It is not a complete global reconstruction. Next define the grid and metadata contracts, including partial/unavailable coverage, class semantics and the TS10 exception. Acquire and verify selected terrain members before any coastline implementation. Marine grounding classification is a mandatory gate, not something to infer during rasterization. Preserve uncertainty suites and all attribution through later processing.

Verification results are recorded in [PLAN.md](PLAN.md). No legacy generator was run.
