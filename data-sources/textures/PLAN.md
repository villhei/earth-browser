# Research-based prehistoric Earth masks — implementation plan

Recorded: 2026-09-16. Updated during phase-7 editing delivery on 2026-09-17.

New ice-only expansion requested 2026-09-20:
[Ice masks from 38,000 BCE onwards](ICE-MASK-EXPANSION-PLAN.md). Extend the existing
8192-pixel workflow across available DATED-1 and NADI-1 dates, combine matching
ages, and skip missing regions, dates or variants. This follow-up is independent
of the older coastal acceptance work below; implementation remains pending.

**Latest operator override:** [PHASE4-OPERATOR-DIRECTIVES.md](PHASE4-OPERATOR-DIRECTIVES.md)
supersedes conflicting earlier requirements: empirical ice takes precedence
over GIA/marine conflicts; grounded and floating ice merge into one static
overlay; Blue Marble is the baseline; PALEOMAP, inland waterbody changes and
vegetation changes are excluded. The completed `DROP_ARTIFACTS` rule discards
polygons/subpixels that round to zero under the existing 8-bit coverage quantizer;
retain a processing audit without enlarging those features.

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

- [x] Fix the shared pixel grid, projection, geographic extent, pixel registration, orientation, and alignment to the modern base.
- [x] Define separate exposed-land, flooded-land, grounded-ice, floating-shelf, and seasonal-sea-ice outputs where supported.
- [x] Use solid colors and transparent backgrounds. Any edge antialiasing must represent raster coverage rather than artistic expansion of boundaries.
- [x] Store source citations, licenses, versions/checksums, original age system, calibration method, target calendar BP, source calendar BP, signed source-minus-target offset, slice reuse/interpolation policy, processing parameters and uncertainty alongside each output.
- [x] Distinguish confirmed empty masks from unavailable or partially covered datasets for each era, region and ice class. Define coverage metadata separately from transparent pixels, so transparency cannot imply ice-free conditions outside coverage.
- [x] Choose and document a stable per-era directory and filename convention.

Completed 2026-09-17 as a contract definition: [OUTPUT-CONTRACT.md](OUTPUT-CONTRACT.md) defines the common pixel-is-area grid, six independent RGBA classes, geometric edge coverage, per-product coverage rasters/domains, availability and uncertainty semantics, chronology, metadata fields and stable package paths. [OUTPUT-CONTRACT.json](OUTPUT-CONTRACT.json) records machine-readable constants and all seven permitted margin source/target pairs, including the sole DATED-1 TS10 endpoint exception. [examples/world-bc10000.manifest.json](examples/world-bc10000.manifest.json) demonstrates the current reference-era metadata with pinned source members and all six outputs unavailable. No generated files, coverage domains or successful scientific validation are claimed. Implementation of the contract validator belongs to phase 4.

Phase-3 verification: checked all 54 catalog dates/dispositions, all seven selected source uses and offsets, the single named endpoint exception, grid centres/extent, reference-image dimensions/hash, example provenance hashes and its six margin members against the selection record. `npm test`: 54 tests passed. `npm run build` encountered sandbox `tsx` IPC `EPERM`; equivalent stages passed with `node --import tsx src/server/exportStatic.ts && ./node_modules/.bin/tsc --noEmit && ./node_modules/.bin/vite build`. PostGIS was unreachable, so export used its existing-static-data fallback. Existing Vite CJS deprecation and bundle-size warnings remain. No tracked site changes; `git diff --check` passed.

### 4. Implement reproducible generation

- [x] Preserve original research inputs; record retrieval locations and checksums.
- [x] Implement correct reprojection (including ESRI:102017), polygon holes, polar handling and antimeridian handling. Filter North American `SYMB` categories if those layers are selected; reject unknown categories and exclude `LAKE`. Implemented for evidence rasters; production supported-domain splitting remains gated below.
- [ ] Derive land/ocean classifications using documented vertical references, regional land movement and ocean connectivity; prevent subglacial depressions and inland basins from becoming unsupported ocean. Reconcile source overlaps and regional seams explicitly.
- [x] Preserve source detail during processing and rasterize to the common final grid, with the operator-authorized exception for coverage that rounds to zero. Record those drops without enlarging geometry.
- [x] Support one-era and all-supported-era generation, independent of colorization. The operator-directed version-2 workflow now emits partial unified ice overlays for all five selected eras; the original version-1 evidence workflow is retained.
- [x] Fail clearly on missing required inputs; make partial output visible in metadata. Version-2 overlays have separate validation and cannot claim global absence/completeness; version-1 class-separated production remains gated.

Current regional coastline implementation: Blue Marble RGB segmentation, native-grid boundary-seeded ocean connectivity, exclusion of disconnected negative basins/inland water and empirical-ice priority are implemented and tested. The 10,000 BCE exposed/flooded candidate masks are generated; the land/ocean item above remains open for validation of image-derived baseline boundaries and regional seams before treating those candidates as production coastlines.

Progress 2026-09-17: [PHASE4-IMPLEMENTATION.md](PHASE4-IMPLEMENTATION.md) records the CLI, validator, numerical implementation, real-input findings and commands. All 14 original downloads and 84 selected components verify. The software retains all seven source uses and three-bound suites. Diagnostic rasterization identified small polygon losses and nonnested bounds, plus an unclosed NADI-1 6 ka central ring that fails by default and can be explicitly closed with a recorded diagnostic-only repair. **Phase 4 remains incomplete:** terrain/modern marine inputs, grounding/presence-absence domains, production domain geometry and feature-preserving coverage are unresolved. The selected terrain archive could not be acquired in this environment. No production mask, inferred coastline, source-selection change or successful phase-5 scientific validation is claimed.

Continuation 2026-09-17: added analytic image-plane coverage checks for missed diagnostic polygons and fixed numerical ring-closure roundoff at the antimeridian. Regenerated all five evidence-era packages: all 70 missed polygon instances across the bounds individually fall below the required 8-bit alpha encoding threshold; sampling increases alone cannot preserve them. Reports retain fractions and identify sampling misses versus encoding limits without changing diagnostic pixels or approving production. [PHASE4-OPERATOR-ISSUES.md](PHASE4-OPERATOR-ISSUES.md) lists the rechecked terrain download failure, required marine/grounding evidence and subpixel-policy decision. Phase 4 remains incomplete.

Phase-4 verification: 35 Python tests and 60 Vitest tests passed. All 14 downloads and 84 selected components verify; five regenerated packages validate and all 21 PNGs match the preceding verified run. `npm run build` hit sandbox `tsx` IPC `EPERM`; equivalent Node-import export, TypeScript and Vite stages passed with the existing-static-data fallback because PostGIS was unreachable. No tracked site changes; existing Vite CJS/chunk warnings remain.

Operator-staged terrain update 2026-09-17: `research-cache/ICE6G_Paleo_subice.zip` is now present (5,533,024,659 bytes). [ICE6G-ARCHIVE-INVENTORY.json](ICE6G-ARCHIVE-INVENTORY.json) records its SHA-256, successful CRC verification and individual hashes for all 1,028 ZIP entries. Embedded FileGDB XML identifies 47 rasters, including `ICE6G_paleosi_12000`, `ICE6G_paleosi_10000` and `ICE6G_paleosi_07000`, with NAD83 Albers and approximately 999.92745-metre cells. The archive-acquisition blocker is cleared. Native cell/NoData decoding now requires an available GDAL 3.7+ OpenFileGDB raster reader or faithful native-grid exports; none is installed here. The phase-2 selection remains an unchanged historical snapshot, and terrain is not yet registered for production. Other marine, grounding, domain and subpixel-policy gates remain.

GDAL installation recheck 2026-09-17: `/usr/bin/gdalinfo` and system Python bindings report GDAL **3.4.1**. OpenFileGDB opens the zipped archive through the vector API, but advertises no raster capability. A GDAL **3.7+** installation with OpenFileGDB raster support is still needed; binary-only Rasterio acquisition for system Python 3.10 also found no matching distribution. The operator handoff now records this specific version/capability blocker.

GDAL upgrade and terrain implementation 2026-09-17: GDAL **3.8.4** now reads the FileGDB rasters. The new `inspect-terrain` command verifies the ZIP and extracted members, checks the decoded native grid against the catalog, exports the selected 12/10/7 ka layers as Float32 GeoTIFFs with explicit validity masks, and compares every output cell byte and mask pixel with its source. All three exports completed under `research-cache/ice6g-native-v1/`; [ICE6G-TERRAIN-INSPECTION.json](ICE6G-TERRAIN-INSPECTION.json) records hashes, grid/CRS, chronology and processing. Each layer is 9,872 × 5,932 with 35,792,814 valid cells and 22,767,890 masked cells. No resampling, added sea-level offset or marine classification was applied. **Archive and reader blockers are cleared.** Remaining Phase-4 work is the modern marine baseline, ocean connectivity and basin/ice exclusions, scientific coverage/grounding domains, seam reconciliation and subpixel preservation. Phase 5 has not started.

Latest verification: 41 distinct Python tests pass across the workspace and GDAL-enabled system interpreters; 61 Vitest tests pass. `npm run build` still hits `tsx` IPC `EPERM`; equivalent export/typecheck/Vite stages pass, with cached static data because PostGIS is unavailable. No tracked site changes.

Operator-directed generation 2026-09-17: [OUTPUT-OVERLAY-CONTRACT.json](OUTPUT-OVERLAY-CONTRACT.json) defines the unified ice workflow. `generate-overlays --all-supported` produced and validated five packages under `masks/overlays-v2/`, each with a single `ice.png` and minimum/maximum diagnostic alternatives. Empirical ice is the upper overlay; grounded/floating separation is no longer required. All 70 previously diagnosed zero-rounding polygon instances are recorded as discarded. The known 6 ka unclosed ring is closed in derived geometry with the operation logged; original bytes and nonnested source bounds remain preserved.

The `coastline-candidates` command also generated the 10,000 BCE regional reference under `masks/coastline-candidates-v2/world-bc10000/`: 38,989 exposed-land and 2,718 flooded-land candidate pixels. These are based on the operator-selected Blue Marble image and the verified native ICE6G terrain, with 329,361 disconnected negative native cells excluded. No output crosses its comparison domain or occupies a final pixel touched by empirical ice. The image-color coastline baseline and regional boundaries require scientific review; these outputs are explicitly candidates, not a validated global reconstruction. [PHASE4-OUTPUT-INVENTORY.json](PHASE4-OUTPUT-INVENTORY.json) records artifact hashes, losses and environment versions. No further operator decision is pending for the stated rules.

Latest tests: 54 distinct Python tests pass across the two interpreters, plus 61 Vitest tests. Equivalent production build stages pass with the existing sandbox/export fallback. The legacy JPEG generator and app texture registry remain unchanged.

### 5. Validate one reference era

First reference target: **10,000 BCE / 11,949 calendar BP**. Begin after phases 2–4 establish selected inputs and coverage contracts. Phase 2 selects DATED-1 TS12 and NADI-1 12 calendar ka at +51 years, not exact-date matches; preserve their uncertainty suites and resolve class/coverage contracts before generation. This sequence does not restrict final era coverage.

- [x] Generate independent masks and separate diagnostic previews. The three reference ice PNGs reproduce byte-for-byte; the review package preserves separate ice/coastal masks and ten labelled diagnostic plates.
- [x] Compare ice margins and shorelines against published reconstructions, including relevant land-bridge regions. Source transfer and qualitative literature checks are recorded; Bering Strait/Doggerland shoreline comparisons are unavailable within current coverage, not successful validations.
- [x] Check alignment, seams, holes, lake exclusion, regional omissions, raster artifacts and consistency between ice and land layers. All three selected bounds and missing-class metadata were reviewed; failed baseline classification, a domain-edge truncation and source topology findings are recorded. No neighbouring slice or alternative GIA model was adopted.
- [x] Record discrepancies, uncertainty, and the evidence used for validation before expanding. See [PHASE5-VALIDATION.md](PHASE5-VALIDATION.md), [PHASE5-VALIDATION.json](PHASE5-VALIDATION.json) and [PHASE5-EVIDENCE.json](PHASE5-EVIDENCE.json).
- [ ] Resolve the failed reference acceptance checks and deliver scientifically validated supported masks before phase-6 expansion.

Reference-era deliverable: validated supported masks for 10,000 BCE, with provenance, diagnostic previews, uncertainty and explicit partial/unavailable coverage. Claim a complete global set only if every required region and class is supported.

Reference review 2026-09-17: the new `review-reference` command creates an atomic
package under `masks/phase5-reviewed/world-bc10000/`. Independent OGR/GDAL
rasterization of all six selected native layers has zero full/empty-pixel
mismatches across the three ice bounds. The bounds remain nonnested (6
minimum-above-central and 291 central-above-maximum pixels). OGR identifies a
self-intersection in NADI-1 12 ka OPTIMAL feature 0 near 64.215499°W, 58.747986°N;
original geometry is retained. Coastline/ice exclusion and comparison-domain
containment pass, but **coastal scientific acceptance fails**: 13,647 exposed
candidate pixels sample modern ETOPO elevations above 100 m, including 6,240
above 500 m, indicating substantial inland terrain misclassified as ocean by
Blue Marble RGB segmentation. The Alaska domain edge also creates an artificial
cutoff near 165°W. Bering Strait, Doggerland and Sunda lack coastal support.
The four review activities above are performed; **Phase 5's accepted-mask
deliverable remains incomplete**. No global validation or phase-6 expansion is
claimed. Verification: 62 distinct Python tests and 62 Vitest tests pass;
equivalent production build stages pass with the documented IPC/static-data
fallback. No app/site/source-pin changes.

### 6. Expand to the remaining eras

- [x] Work through all 54 rows of the audit matrix: D10 endpoint handling, H-early/H Holocene evidence, M dated modern observations and L Last Interglacial reconstruction. Generate masks only where selected evidence supports them; record unavailable outputs for unresolved cases.
- [x] Explicitly identify shared/reused source time slices; do not imply independent temporal precision.
- [x] Include flooded modern land for 123,000 BCE where supported. No selected exact-target surface supports it; explicitly unavailable with no placeholder PNG or uniform +7 m approximation.
- [x] Keep lakes and inland landscape changes outside this stage.

Completed 2026-09-17 **as catalog-wide evidence/disposition expansion**, following
the operator's request to continue to phase 6. This does not complete phase 5's
scientifically accepted-mask deliverable or authorize expansion of the rejected
coastline algorithm. [PHASE6-EXPANSION.md](PHASE6-EXPANSION.md) documents all 54
rows, the CLI and remaining scientific limits;
[PHASE6-EXPANSION.json](PHASE6-EXPANSION.json) pins the generated catalog and
per-era manifests. `expand-eras` produces an atomic package under
`masks/phase6-eras-verified/`: five regenerated partial regional ice suites (central,
minimum, maximum) and 49 metadata-only unavailable eras. All coastlines and
seasonal sea ice remain unavailable. Original source selection is unchanged.
The seven dataset/age pairs have no cross-era reuse; all offsets remain +51
years and TS10 is restricted to 8,000 BCE. Each era records the scope, unavailable
products and acceptance limits; no transparent absence mask is fabricated.

Phase-6 verification: all 54 packages validate; the existing-overlay reuse path
also passes. All 15 regenerated PNGs match the phase-4 bytes and retain 70
audited zero-rounding drops. 69 distinct Python tests and 63 Vitest tests pass.
`npm run build` encounters the existing sandbox IPC failure; equivalent Node
import/export, typecheck and Vite stages pass with cached static data because
PostGIS is unavailable. No tracked app/site/source-pin changes;
`git diff --check` passes.

### 7. Package and verify

- [x] Organize masks, provenance, and limitations by era.
- [x] Add meaningful tests for BCE/CE conversion across the absent year zero, negative BP, source-age offsets and endpoint handling; also test raster alignment, holes, ICE/LAKE filtering, source seams, coverage versus transparency and land/ocean classification.
- [x] Document reproducible generation commands and image-editor usage.
- [x] Run repository tests and production build after implementation changes, following `AGENTS.md`.
- [x] Deliver masks for external editing; defer artistic rendering and renewed application integration to a subsequent task.

Completed 2026-09-17 **as packaging of partial evidence, not scientific acceptance**.
[PHASE7-DELIVERY.md](PHASE7-DELIVERY.md) records the portable ZIP, all 54 era
guides, source credits, processing limits and verification. The new
`package-delivery` and `validate-delivery` commands produce and verify
`masks/phase7-delivery/`; [PHASE7-DELIVERY.json](PHASE7-DELIVERY.json) pins its
archive and payload. All 15 PNGs preserve the phase-6 bytes and 70 audited drops;
49 eras remain metadata-only. No rejected coastline candidate is included.
[EDITOR-GUIDE.md](EDITOR-GUIDE.md) documents aligned layer import and alpha;
[REPRODUCING-MASKS.md](REPRODUCING-MASKS.md) documents regeneration and offline
verification. All 172 extracted-file checksums pass. 75 distinct Python tests
and 64 Vitest tests pass. The standard build hits the known sandbox IPC error;
equivalent export/typecheck/Vite stages pass using cached static data. No tracked
app/site/source-pin changes. Phase 5's accepted-mask deliverable remains open.

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

Read `AGENTS.md`, this plan, [PHASE6-EXPANSION.md](PHASE6-EXPANSION.md),
[PHASE5-VALIDATION.md](PHASE5-VALIDATION.md) and the current
[operator directives](PHASE4-OPERATOR-DIRECTIVES.md). Phase 7 has delivered the
partial evidence with its limitations; see [PHASE7-DELIVERY.md](PHASE7-DELIVERY.md).
It does not label these masks scientifically accepted. To expand coastal coverage,
first resolve the failed RGB marine
classification, regional edge disposition and source topology findings. Retain
all 54 era dispositions, original source pins, three ice bounds, signed offsets
and the single TS10 exception. Do not infer ocean from all negative terrain,
enlarge zero-rounding features, repair topology silently, substitute modern
imagery for unavailable evidence or run the retired JPEG generator. The
`validate-expansion` command verifies package integrity and scope, not scientific
acceptance. No operator decision is pending.
