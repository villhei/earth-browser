# Phase 4 implementation and remaining gates

Recorded 2026-09-17. **Phase 4 now includes operator-directed static overlays.**
The older version-1 evidence/disposition workflow is preserved. Explicit operator
directives authorize combined ice extent, empirical-ice priority, Blue Marble
baseline and deletion of coverage that rounds to zero. Five partial version-2
ice overlays are generated; regional coastline candidates are implemented for
reference-era review. Scientific reconstruction validation remains pending.

Current policy: [PHASE4-OPERATOR-DIRECTIVES.md](PHASE4-OPERATOR-DIRECTIVES.md) and
[OUTPUT-OVERLAY-CONTRACT.json](OUTPUT-OVERLAY-CONTRACT.json). These supersede
conflicting earlier class-separation and loss-preservation requirements without
altering the original source pins or historical version-1 packages.

Completed artifacts: [PHASE4-OUTPUT-INVENTORY.json](PHASE4-OUTPUT-INVENTORY.json)
pins five unified ice packages and the 10,000 BCE coastline candidate report.
The coastline candidates contain 38,989 exposed-land and 2,718 flooded-land
pixels, with explicit comparison coverage and no overlap with ice-touched output
pixels. Native connectivity excludes 329,361 disconnected negative cells. Image
segmentation, source topology and regional-edge accuracy still need review.

## Implemented

Entry point: [`scripts/generate_reconstruction_masks.py`](../../../scripts/generate_reconstruction_masks.py).
Implementation is split into `scripts/paleomasks/contract.py`, `geometry.py` and
`pipeline.py`, plus `terrain.py` for native terrain evidence, independently of
the retired JPEG generator.

- Verify original downloads and consumed archive components against the existing
  byte counts/SHA-256 pins. Read members directly from original archives; cached
  extracted shapefiles are not trusted. Fetching checks existing files, verifies
  new bytes before publication, and never overwrites an original or changes a pin.
- Check all 54 dispositions against the authoritative TypeScript catalog, all
  seven allowed uses, all 21 margin members, signed dates and the sole TS10
  endpoint exception. The Python reader fails if the catalog literal layout
  changes; Vitest separately imports the actual TypeScript catalog.
- Reproject ESRI:102017 with explicit longitude/latitude order and retain native
  vertices. Adaptively subdivide projected segments to a midpoint deviation of
  at most 1/32 final pixel. Preserve holes within each polygon and union separate
  polygons, including islands inside another polygon's hole.
- Rasterize periodic longitude without filling across the world. Projected
  pole inclusion is tested in native coordinates; ambiguous geographic polar
  rings fail rather than choosing an interior. This is raster seam handling,
  not an implementation of antimeridian-split production domain GeoJSON.
- Use regular subcell centres and box averaging on the exact 4096 × 2048 grid.
  Default diagnostics compare 4×4 with 8×8 sampling and deliver the 8×8 result.
  Report differences and each positive polygon missed by sampling. No smoothing,
  opaque uncertainty envelopes, scalar sea-level fallback or source substitution.
- Diagnose missed polygons with image-plane rectangle clipping and translated
  shoelace area, retaining holes and periodic longitude. Record per-pixel
  fractions, quantized alpha and sampling-versus-encoding outcomes. This bounded
  diagnostic assumes valid topology; it neither unions separate polygons nor
  changes their pixels. Normalize numerical roundoff at repeated unwrapped
  endpoints so seam-crossing rings remain exactly closed.
- Reject unknown `SYMB` categories and exclude `LAKE` if that field is present.
  Selected NADI-1 has no such field; the old North American bundle remains excluded.
- Write packages atomically **per era** with copied provenance, explicit reasons
  for all six unavailable classes, separate diagnostics and processing reports.
  Existing era directories cannot be overwritten. A failed batch stops and
  retains previously completed packages; the failed era has no package.
- Validate package paths, file hashes, diagnostic PNG grid/encoding headers,
  complete uncertainty suites, diagnostic chronology and source members, and
  reject stale/unlisted files. All partial/complete production claims are rejected
  under the current pinned selection. This is deliberately not a general validator
  for hypothetical future production products.
- Test encoding/coverage and marine-change comparison primitives. Marine comparison
  consumes already-classified, aligned boolean states and excludes unknown,
  lake/subglacial and seam-conflict cells. It does **not** derive a coastline from
  elevations or establish those exclusion masks scientifically.
- Inspect the selected ICE6G 12/10/7 ka native rasters using GDAL's explicit mask
  mode. Verify the original ZIP and extracted members, compare decoded CRS/grid
  against the inventoried catalog, and export Float32 GeoTIFFs without resampling
  or offsets. Check every cell byte and validity pixel against the source.
  Native validity identifies missing terrain data; it is not a scientific marine
  or ice coverage domain. Publish the three exports and report atomically as a
  separate research-cache package; leave production validation unchanged.

## Commands

Run from the repository root. Python 3.11+ is needed for the standard-library
contract tools. Numerical dependencies are pinned separately from the legacy
generator in [`requirements-masks.txt`](requirements-masks.txt); the verified
environment used Python 3.14. Reports also record PROJ, zlib and dependency versions.
Native terrain inspection instead uses the installed GDAL-enabled Python
(currently `/usr/bin/python3`, Python 3.12, GDAL 3.8.4, NumPy 1.26.4).

```bash
python3 -m venv .venv
.venv/bin/python -m pip install -r data-sources/textures/requirements-masks.txt

# Summarize supported evidence and unresolved production gates.
.venv/bin/python scripts/generate_reconstruction_masks.py plan

# New workflow: one combined static ice overlay per supported era.
.venv/bin/python scripts/generate_reconstruction_masks.py generate-overlays \
  --all-supported --output data-sources/textures/masks/overlays-v2
.venv/bin/python scripts/generate_reconstruction_masks.py validate-overlay \
  data-sources/textures/masks/overlays-v2/world-bc10000/manifest.json

# Regional coastlines against Blue Marble; scientific review still required.
.venv/bin/python scripts/generate_reconstruction_masks.py coastline-candidates \
  --era world-bc10000 \
  --ice-package data-sources/textures/masks/overlays-v2/world-bc10000 \
  --output data-sources/textures/masks/coastline-candidates-v2/world-bc10000

# Reacquire just the two selected margin archives, if absent.
.venv/bin/python scripts/generate_reconstruction_masks.py fetch-inputs
# Check all 14 original research downloads plus 84 selected components.
.venv/bin/python scripts/generate_reconstruction_masks.py verify-inputs --all-downloads

# Decode and verify selected native ICE6G terrain; needs GDAL-enabled Python.
# The current /usr/bin/python3 has GDAL 3.8.4 and NumPy 1.26.4.
/usr/bin/python3 scripts/generate_reconstruction_masks.py inspect-terrain
/usr/bin/python3 -m unittest discover -s scripts/tests -p test_terrain.py -v

# Explicitly request a disposition package, with separate evidence diagnostics.
.venv/bin/python scripts/generate_reconstruction_masks.py generate \
  --era world-bc10000 --allow-unavailable --diagnostics \
  --output /tmp/reconstruction-reference/v1

# All five eras with selected margin evidence. The opt-in closure is explained below.
.venv/bin/python scripts/generate_reconstruction_masks.py generate \
  --all-supported --allow-unavailable --diagnostics --close-open-rings \
  --output /tmp/reconstruction-all/v1

.venv/bin/python scripts/generate_reconstruction_masks.py validate \
  /tmp/reconstruction-reference/v1/world-bc10000/manifest.json

.venv/bin/python -m unittest discover -s scripts/tests -v
npm test
npm run build
```

Choose a fresh output root when repeating a run. The default root is
`data-sources/textures/masks/v1`; generated packages are ignored by Git and can be
regenerated. Use the global `--cache PATH` option **before** the subcommand for
another input cache. Missing required bytes fail even for a disposition package
that registers those sources. Eras with no selected margins can produce only
unavailable-disposition metadata. `--all-supported` means the five **evidence**
eras, not five scientifically classified reconstructions.

Without `--allow-unavailable`, generation exits with an error explaining the
scientific gates. Omitting `--diagnostics` writes no PNGs. There are no placeholder
transparent masks, production coverage polygons or masks hidden in diagnostics.

## Findings from real inputs

All 14 original downloads and 84 selected components verified against phase-2
pins. Rendering exposed an **unclosed ring** in NADI-1's
`6ka_cal_OPTIMAL_NADI-1_Dalton_etal_QSR`, zero-based record 160, polygon 0, ring 0:

- First vertex: `(-82.77263779435435, 80.77761382259823)`.
- Last vertex: `(-82.76079336266534, 80.77812111130058)`.
- Gap in native longitude/latitude coordinates: approximately `0.01185529°`
  Euclidean distance, not a geodesic distance or scientific error estimate.

Default generation rejects this ring with its source/record identity. The
explicit `--close-open-rings` option appends the first vertex **only for
diagnostics**, preserving all original vertices. Every repair, original endpoint
and closing distance is recorded in the report. No self-intersection repair or
scientific approval is inferred. The original archive is unchanged.

For the 10,000 BCE reference diagnostics, one small polygon in each NADI-1 bound
receives no 8×8 subcell hit. Maximum 4×4-versus-8×8 alpha differences across the
six images are 32–63 out of 255. Bounds are not perfectly nested at raster
resolution: NADI-1 has 1 minimum-above-central and 273 central-above-maximum
pixels; DATED-1 has 5 and 18 respectively. These are diagnostic counts, not
evidence that the source bounds should be reordered or automatically repaired.
The source vertices are retained but final-grid feature preservation remains a
production gate. Smaller polygon loss must be resolved before any production
release; diagnostic transparency cannot establish class absence.

The complete run is retained locally under `masks/phase4-verified/v1/`, with a
per-era `diagnostics/ice-margin-evidence-report.json`. Earlier diagnostic runs
remain separate. PNGs may be inspected in an editor at their original canvas
size, but cannot be relabelled as grounded ice or composited into app textures.

Continuation: `masks/phase4-loss-analysis/v1/` contains a regenerated five-era
run with analytic loss reports. Its 21 PNGs match the earlier verified run.
All 70 missed polygon instances across the bounds have individual per-pixel
fractions below the 8-bit alpha threshold, `1/510`. More supersampling alone
cannot retain those features. The source geometry still needs topology review;
this diagnostic does not decide whether small polygons are physical features,
overlapping evidence or source artifacts. See [PHASE4-OPERATOR-ISSUES.md](PHASE4-OPERATOR-ISSUES.md)
for per-era counts, the acquisition failure recheck and actionable handoff.

## Remaining scientific and implementation work (historical gates updated below)

1. Terrain acquisition and native reading are complete for the 12/10/7 ka trial
   layers. [ICE6G-ARCHIVE-INVENTORY.json](ICE6G-ARCHIVE-INVENTORY.json) pins the ZIP
   and members. [ICE6G-TERRAIN-INSPECTION.json](ICE6G-TERRAIN-INSPECTION.json) pins
   three verified native GeoTIFFs, decoded cell/mask hashes, grid/CRS and statistics.
   Outputs are under `research-cache/ice6g-native-v1/`. Each layer is 9,872 × 5,932,
   with 35,792,814 valid cells and 22,767,890 masked cells. No resampling or sea-level
   adjustment was applied. The modern marine baseline remains unselected, and
   valid terrain is not itself a supported class domain. See the updated
   [operator handoff](PHASE4-OPERATOR-ISSUES.md).
2. Native-grid regional coastline candidates are now implemented using the
   epoch-relative terrain without an added sea-level offset. Validate Blue Marble
   segmentation, connectivity, exclusions and domain-edge behavior before a
   production-coastline claim. Empirical ice overrides modeled coastal changes.
3. The operator replaced the grounding split with a unified static ice overlay.
   Transparent overlay pixels preserve the base and do not assert scientific
   absence. Class-separated version-1 outputs remain unavailable.
4. The operator permits discarding coverage that rounds to zero. Version-2
   generation records all 70 previously diagnosed polygon losses and preserves
   nonzero evidence. `validate-overlay` checks the new partial products.
5. Review reference-era coastlines, image segmentation, source geometry, native
   domain edges and near-ice connectivity under phase 5. Do not infer global
   completeness from partial ice/coastal outputs.

## Verification

- All five era packages validate; all 21 diagnostic PNGs reproduce byte-for-byte
  across the repeated runs. Original downloads and selected components remain unchanged.
- Three native ICE6G GeoTIFFs pass complete cell-byte and mask comparisons with
  their source datasets. Their CRS and grid also match the inventoried catalog.
- 54 distinct Python tests across the two interpreters: chronology, source pins, acquisition/publication failures,
  unavailable/empty semantics, domains and seams, holes/islands, polar caps,
  ESRI reprojection, subpixel coverage/loss, category filtering, ring repair and
  polar holes with different starting meridians, analytic clipping, missed-feature
  encoding limits and bounded diagnostic failures, native validity, lossless
  terrain exports and rejection of shifted grids/missing validity masks. The
  workspace venv passes 51 and skips three GDAL tests; system Python passes all
  six terrain tests, including those three.
- 61 Vitest tests, including seven catalog/selection/contract/CLI checks.
- `npm run build` hit the existing sandbox `tsx` IPC `EPERM`. Equivalent export,
  typecheck and Vite stages passed using
  `node --import tsx src/server/exportStatic.ts && ./node_modules/.bin/tsc --noEmit && ./node_modules/.bin/vite build`.
  PostGIS was unavailable, so export used the existing-static-data fallback.
  Existing Vite CJS and chunk-size warnings remain; no tracked site changes.

These checks establish software behavior, not scientific reconstruction validity.
