# Research-based prehistoric Earth masks — implementation plan

Recorded: 2026-09-16. Updated after phase-2 source selection on the same date.

## Objective and agreed scope

Replace the retired, artistically synthesized prehistoric textures with reproducible, research-derived masks matching the repository's GeoJSON eras. Prioritize the most accurate supported reconstructions over visual plausibility. Keep geographic reconstruction separate from subsequent colorization in an external image editor or service.

User requirements:

- Keep modern Earth textures and research inputs; remove the four generated prehistoric JPEGs and their app integration.
- Match reconstruction dates to the GeoJSON era catalog, rather than choosing unrelated illustrative dates.
- Include oceanic ice where evidence supports it; the user's interest includes possible implications for human movement. Ice presence must not be represented as proof of a traversable route.
- Prioritize realistic coastlines. Account for regional vertical land movement under ice loading where supported, rather than relying exclusively on modern bathymetry and a uniform sea-level offset.
- Show present-day ocean floor that was exposed as land. Also support flooded modern land, particularly for 123,000 BCE.
- Exclude lakes and inland landscape changes from this stage.
- Deliver independent 4096 × 2048 equirectangular RGBA PNG masks, aligned to the modern base texture. Solid-color coverage, transparent background, no base imagery, shading, artistic feathering, or colorization baked in.
- Keep grounded ice, floating ice shelves, and seasonal sea ice separately identifiable. Export winter/summer sea ice separately where evidence permits.
- Final artistic textures and globe integration are a later stage.

## Current state and handoff

The original handoff recorded the removal changes below. Phase 2 started from a clean working tree; these earlier changes were already present in the checkout:

- Removed `src/earthTextures/earth-blue-marble-{123000,10000,8000,5000}bc.jpg`.
- Removed their imports, enum entries, dropdown options, and automatic era selection from the app; updated the existing texture test.
- Rebuilt the tracked static site in `docs/`, removing its prehistoric image copies and updating its application bundle.
- Kept modern textures, shapefiles, and the legacy generator.
- Added a legacy-status notice to `data-sources/textures/README.md`.
- Verification after removal: all 54 Vitest tests passed; `npm run build` passed, including database export, TypeScript checking, and Vite build. Build needed execution outside the sandbox because `tsx` creates a local IPC socket. Vite reported its CJS API deprecation and bundle-size warnings.

Do not revert these changes when starting another session. Inspect the current working tree before editing; subsequent sessions may have made additional progress.

The legacy generator is retained for reference, not accepted as a validated reconstruction. Running it recreates retired JPEGs. Its README describes legacy behavior and should not be treated as scientific validation.

## Relevant repository files

- `AGENTS.md`: repository development instructions.
- `src/server/eraMetadata.ts`: authoritative application era catalog.
- `migrations/seed/`: era GeoJSON inputs.
- `scripts/generate_prehistoric_textures.py`: legacy generator.
- `data-sources/textures/README.md`: legacy source and pipeline documentation.
- `data-sources/textures/ice-sheets/`: bundled North American and Eurasian shapefiles.
- `data-sources/textures/requirements.txt`: existing Python dependencies.
- `src/earthTextures/earth-blue-marble.jpg`: modern base and alignment reference.
- `src/features/globe/textures.ts`, `src/earthTextures/index.ts`: texture resolvers.
- `src/app/App.tsx`, `src/components/ControlsOverlay.tsx`, `src/types/index.ts`: application integration.

Do not store planning or source documentation in `docs/`: it is the generated production-site output.

## Findings and constraints established by phase 1

The historical phase-1 evidence and citations are in [SOURCE-AUDIT.md](SOURCE-AUDIT.md); [AUDIT-INVENTORY.json](AUDIT-INVENTORY.json) identifies the inspected local bytes. The audit is complete, but no era yet has a complete validated global mask set.

- All 54 catalog entries have matching, parseable seed FeatureCollections. Use `year_start` as the reconstruction target; territory boundaries are not paleoshoreline evidence.
- Interpret negative catalog years as historical BCE, without year zero. At equal positions within the year, N BCE = N + 1949 calendar BP and N CE = 1950 − N calendar BP. Preserve negative BP for dates after 1950. Rounding for display must not change target metadata.
- The primary targets are 124,949 BP (123,000 BCE), 11,949 BP (10,000 BCE), 9,949 BP (8,000 BCE), and 6,949 BP (5,000 BCE). Exact arithmetic does not imply exact scientific dating.
- North American attribution to Dyke is plausible, but the exact bundled release, chronology and license are unresolved. Published Dyke/Dalton isochrones use radiocarbon ages. The legacy filename-to-BCE assignments are unsupported; use published calibrated correspondences and uncertainty, never a fixed offset.
- All five North American layers contain both `ICE` and `LAKE` records. Filter categories explicitly before ice rasterization. Their extent includes the Greenland/Iceland sector, so directory names do not establish geographic coverage or prevent overlap with other sources.
- Bundled DATED-1 layers contain only TS10/12/20 most-credible boundaries, with no minimum/maximum uncertainty layers. They use calendar ages and ESRI:102017 projected metres. TS12 is 51 years older than the 10,000 BCE target; TS10 is 51 years older than the 8,000 BCE target and requires an explicit approximation beyond the dataset's 10 ka endpoint. TS20 has no catalog target.
- DATED-1's published license is CC-BY-3.0; local metadata supports attribution, but publisher archive comparison remains outstanding. Local file readability and checksums do not establish authenticity or scientific completeness.
- The elevation cache was intended to be bilinearly downsampled ETOPO bedrock, but lacks original-source authentication and georeferencing metadata. Reacquire a documented source before coastline generation. ETOPO 2022 is CC0-1.0; modern bedrock is not paleotopography, and below-sea-level subglacial bedrock is not necessarily open ocean.
- The modern alignment JPEG is 4096 × 2048 RGB; its exact NASA source product, acquisition/month and conversion history remain undocumented.
- No bundled inputs establish global paleoshorelines, separately classified floating shelves, seasonal sea ice, or Last Interglacial masks. Missing coverage is unavailable, not ice-free.
- Legacy sea-level offsets (+7/−55/−25/−3 m), ocean-ice shapes and lake/vegetation additions are unvalidated. Legacy rasterization can fill polygon holes and silently omit missing regions.

## Staged implementation

### 1. Audit era dates and sources

- [x] Enumerate target dates from the GeoJSON era catalog.
- [x] Explicitly distinguish BCE/CE, calendar BP, and radiocarbon ages; document rounding and time-slice matching.
- [x] Audit bundled dataset provenance, chronology, spatial coverage, licensing, and completeness; record what remains unverified.
- [x] Produce an era/source table identifying usable data, missing coverage, uncertainty, and proposed source choices.

Completed 2026-09-16: [SOURCE-AUDIT.md](SOURCE-AUDIT.md) contains the 54-era/source matrix, chronology policy, local dataset audit, recommendations and unresolved gaps. [AUDIT-INVENTORY.json](AUDIT-INVENTORY.json) records local checksums and shapefile inspection results. Exact North American provenance/license remain unresolved; audit completion does not mean the inputs are approved for generation.

### 2. Resolve source gaps and select reconstruction datasets

- [x] Trace the bundled North American archive, conversion history and license, or select a documented replacement. Correct the legacy bibliographic attribution using the audit; inspect Dalton 2020's calibrated isochrones and uncertainty before matching catalog dates.
- [x] Retrieve the full DATED-1 archive and README, compare bundled files, and recover minimum/maximum boundaries. Evaluate DATED-2 before choosing a release; retain dataset-specific attribution and license terms.
- [x] Decide and document source slices for 11,949 and 9,949 calendar BP, including the 51-year offsets and TS10 endpoint approximation. Do not interpolate polygon vertices or extrapolate DATED-1 through the Holocene.
- [x] Evaluate the Godbout/Brouard/Roy North American rebound and paleotopography dataset (CC-BY-4.0; 35–90°N, 165–45°W). Inspect available time steps, vertical datum, sea-level treatment and ICE5G/6G/7G variants; this is regional terrain evidence, not an ice mask.
- [x] Compare global and regional GIA models for shoreline reconstruction and document how overlapping regions will be reconciled. PaleoMIST's 2,500-year steps limit near-field Holocene use; its 80 ka range excludes the Last Interglacial target.
- [x] Select and pin original elevation inputs with resolution, registration and vertical reference. Use modern bathymetry plus a sourced sea-level curve only as a declared fallback; do not reuse the legacy cache or scalar offsets as validated inputs.
- [x] Research Greenland, Antarctica and smaller ice masses, plus grounded ice, floating shelves and winter/summer sea ice independently. Verify classification semantics rather than deriving all classes from undifferentiated ice polygons.
- [x] Research 124,949 BP independently using Last Interglacial regional relative sea-level and ice evidence. A broad highstand range cannot establish an exact-date +7 m coastline.
- [x] Record suitable Holocene and modern source families for the remaining catalog dates, using the audit's H-early/H/M groups. Do not assume later eras share identical coastlines or ice.
- [x] Trace the modern alignment image's original product and rights record where possible; retain unresolved details explicitly.
- [x] Produce a source-selection record alongside this plan with retrieval URLs, versions, terms, age systems, selected slices, geographic/class coverage, uncertainty, fallback decisions and unresolved gaps for each era/source group.

Completion criterion: select reproducible inputs for the supported reference-era layers and record a disposition for every remaining source gap. Unsupported layers remain unavailable. Dataset selection may support a clearly identified regional/partial result; it must not imply global completeness. This source-selection record is the next reviewable deliverable, before mask generation.

Completed 2026-09-16: [SOURCE-SELECTION.md](SOURCE-SELECTION.md) records selected releases, chronology, class/region limits, GIA comparisons and every remaining gap. [SOURCE-SELECTION.json](SOURCE-SELECTION.json) pins 14 original downloads, 21 inspected margin layers, all 24 successful DATED-1 bundle comparisons, the original ETOPO grid and 54 era dispositions. Original downloads are retained in ignored `research-cache/`; reacquisition is required in other checkouts. NADI-1 replaces the untraceable North American bundle. Completion is selection/disposition, not global mask readiness: regional terrain bulk acquisition and marine classification remain explicit gates. No masks were generated.

Phase-2 verification: rechecked all 14 download SHA-256 hashes, 84 selected shapefile component hashes, and 24 archive-to-bundle byte comparisons. All 54 era dates and dispositions match the exported catalog; selected offsets are +51 years. `npm test`: 54 tests passed. `npm run build`: database export, TypeScript and Vite passed; execution outside the sandbox was required for the `tsx` IPC socket. Existing Vite CJS deprecation and bundle-size warnings remain. `git diff --check` passed; the build introduced no tracked site changes.

### 3. Define output and metadata contracts

- [ ] Fix the shared pixel grid, projection, geographic extent, pixel registration, orientation, and alignment to the modern base.
- [ ] Define separate exposed-land, flooded-land, grounded-ice, floating-shelf, and seasonal-sea-ice outputs where supported.
- [ ] Use solid colors and transparent backgrounds. Any edge antialiasing must represent raster coverage rather than artistic expansion of boundaries.
- [ ] Store source citations, licenses, versions/checksums, original age system, calibration method, target calendar BP, source calendar BP, signed source-minus-target offset, slice reuse/interpolation policy, processing parameters and uncertainty alongside each output.
- [ ] Distinguish confirmed empty masks from unavailable or partially covered datasets for each era, region and ice class. Define coverage metadata separately from transparent pixels, so transparency cannot imply ice-free conditions outside coverage.
- [ ] Choose and document a stable per-era directory and filename convention.

### 4. Implement reproducible generation

- [ ] Preserve original research inputs; record retrieval locations and checksums.
- [ ] Implement correct reprojection (including ESRI:102017), polygon holes, polar handling and antimeridian handling. Filter North American `SYMB` categories if those layers are selected; reject unknown categories and exclude `LAKE`.
- [ ] Derive land/ocean classifications using documented vertical references, regional land movement and ocean connectivity; prevent subglacial depressions and inland basins from becoming unsupported ocean. Reconcile source overlaps and regional seams explicitly.
- [ ] Preserve source detail during processing and rasterize to the common final grid.
- [ ] Support one-era and all-supported-era generation, independent of colorization.
- [ ] Fail clearly on missing required inputs; make any explicitly permitted partial output visible in metadata.

### 5. Validate one reference era

First reference target: **10,000 BCE / 11,949 calendar BP**. Begin after phases 2–4 establish selected inputs and coverage contracts. Phase 2 selects DATED-1 TS12 and NADI-1 12 calendar ka at +51 years, not exact-date matches; preserve their uncertainty suites and resolve class/coverage contracts before generation. This sequence does not restrict final era coverage.

- [ ] Generate independent masks and separate diagnostic previews.
- [ ] Compare ice margins and shorelines against published reconstructions, including relevant land-bridge regions.
- [ ] Check alignment, seams, holes, lake exclusion, regional omissions, raster artifacts and consistency between ice and land layers. Compare alternative source bounds/slices where available and validate coverage metadata for missing marine/polar classes.
- [ ] Record discrepancies, uncertainty, and the evidence used for validation before expanding.

Reference-era deliverable: validated supported masks for 10,000 BCE, with provenance, diagnostic previews, uncertainty and explicit partial/unavailable coverage. Claim a complete global set only if every required region and class is supported.

### 6. Expand to the remaining eras

- [ ] Work through all 54 rows of the audit matrix: D10 endpoint handling, H-early/H Holocene evidence, M dated modern observations and L Last Interglacial reconstruction. Generate masks only where selected evidence supports them; record unavailable outputs for unresolved cases.
- [ ] Explicitly identify shared/reused source time slices; do not imply independent temporal precision.
- [ ] Include flooded modern land for 123,000 BCE where supported.
- [ ] Keep lakes and inland landscape changes outside this stage.

### 7. Package and verify

- [ ] Organize masks, provenance, and limitations by era.
- [ ] Add meaningful tests for BCE/CE conversion across the absent year zero, negative BP, source-age offsets and endpoint handling; also test raster alignment, holes, ICE/LAKE filtering, source seams, coverage versus transparency and land/ocean classification.
- [ ] Document reproducible generation commands and image-editor usage.
- [ ] Run repository tests and production build after implementation changes, following `AGENTS.md`.
- [ ] Deliver masks for external editing; defer artistic rendering and renewed application integration to a subsequent task.

## Research leads carried forward from the audit

These are starting points, not final dataset selections. Inspect original data and licensing before adoption.

- DATED-1 Eurasian reconstruction and uncertainty bounds: https://www.uib.no/prosjekt/dated/90692/dated-1
- DATED-1 data DOI cited by existing repository documentation: https://doi.org/10.1594/PANGAEA.848117
- Updated North American ice-margin chronology, including discussion of radiocarbon versus calibrated ages: https://www.sciencedirect.com/science/article/pii/S0277379119307619
- North American rebound/paleotopography data (CC-BY-4.0): https://doi.pangaea.de/10.1594/PANGAEA.947536
- Associated methods paper: https://www.nature.com/articles/s41597-023-02566-5
- Global ice-sheet reconstruction for the past 80,000 years (does not by itself cover 123,000 BCE): https://www.nature.com/articles/s41467-021-21469-w
- IPCC Last Interglacial sea-level assessment: https://www.ipcc.ch/report/ar6/wg1/chapter/summary-for-policymakers/
- NOAA ETOPO: https://www.ncei.noaa.gov/products/etopo-global-relief-model

## Suggested next-session task

Read `AGENTS.md`, this plan and [SOURCE-SELECTION.md](SOURCE-SELECTION.md), then inspect the working tree. Execute phase 3: define the output grid and metadata contracts, using [SOURCE-SELECTION.json](SOURCE-SELECTION.json) for pinned inputs, selected slices and all 54 era dispositions. Distinguish raw margin evidence from classified grounded/floating ice, partial coverage from empty masks, and the named TS10 endpoint exception from unrestricted extrapolation. Terrain acquisition and validation gates are recorded in the selection record. Generation follows phase 4; do not run the legacy generator or restore retired JPEGs.
