# Phase 6 — all-era evidence and unavailable-output catalog

Recorded 2026-09-17. The operator requested continuation to phase 6 after the
reference review. All 54 era rows now have explicit output dispositions. This
completes phase 6's catalog accounting with the selected evidence; it does not
resolve the failed phase-5 acceptance checks or expand the rejected coastline
algorithm.

The generated [package](masks/phase6-eras-verified/) contains five partial
regional ice suites (15 RGBA PNGs, including the alternative bounds) and 49
metadata-only era directories. Every era records exposed land, flooded land,
winter sea ice and summer sea ice as unavailable, with no placeholder images.
[PHASE6-EXPANSION.json](PHASE6-EXPANSION.json) is the tracked copy of the package
catalog, including hashes for all 54 per-era manifests and bundled provenance.
The manifests in turn hash each ice package and its images. Generated packages
remain Git-ignored; source pins, implementation, tests and this inventory are
tracked.

## Scientific scope and remaining gaps

The [phase-5 findings](PHASE5-VALIDATION.md) remain in force. NADI-1 12 ka's
self-intersection, nonnested source bounds, failed Blue Marble ocean
classification and the Alaska terrain-domain cutoff are not repaired or
reclassified by this expansion. The reference source-transfer check applies
only to 10,000 BCE; other eras do not inherit scientific acceptance. The known
6 ka open-ring closure and zero-rounding drops remain logged in the ice
manifests. Original research bytes are preserved.

No new source family or temporal approximation was adopted. Dispositions use
[SOURCE-SELECTION.md](SOURCE-SELECTION.md), its pinned machine-readable record,
and the current [operator directives](PHASE4-OPERATOR-DIRECTIVES.md):

- **D10:** DATED-1 TS10 is an endpoint approximation only for 8,000 BCE / 9,949
  calendar BP. NADI-1 10 ka is a nearest-slice approximation. Both offsets are
  +51 years; DATED-1 is not extended into younger eras.
- **H-early:** 5,000/4,000/3,000 BCE retain only the selected NADI-1 7/6/5 ka
  regional evidence. These masks do not establish global ice presence/absence.
- **H:** all 44 later Holocene/historical rows remain unavailable. HOLSEA, GIA,
  dated glacier records and historical coast surveys remain evidence families,
  without selected contemporaneous mask geometry. Younger NADI slices and
  modern imagery are not used as automatic replacements.
- **M:** 1960/1994/2000/2010 retain their negative calendar-BP dates. The selected
  satellite Sea Ice Index family does not cover 1960. For the other three eras,
  monthly spatial inputs, observation dates, hemisphere-specific seasons and
  concentration thresholds still need selection and pins. No modern ice-sheet,
  glacier or coastal inventory has been approved as a snapshot for these years.
- **L:** 123,000 BCE / 124,949 BP has no selected exact-target flooded-land
  surface. WALIS remains regional relative-sea-level evidence, not a raster
  coastline. Flooded land is explicitly unavailable; no +7 m offset, deglacial
  extrapolation or modern substitute was used.

Grounded/floating empirical ice remains merged in one static overlay, above the
Blue Marble baseline. Independent floating-shelf additions, Greenland,
Antarctica, Iceland and unselected mountain ice remain unsupported. Transparency
means baseline unchanged, not confirmed ice absence. Lakes, inland-waterbody
changes and vegetation changes are excluded. This package includes no artistic
textures or app integration.

## Source-slice identity and reuse

The catalog lists all seven distinct **dataset/age** pairs and every consuming
era. None is reused across different catalog eras in the current selection.
The NADI-1 and DATED-1 datasets share the numeric ages 12/10 ka, but they supply
different regional evidence. Minimum, central and maximum alternatives share a
source date; they are not independent dates or alpha probabilities. Every
selected source is 51 years older than its target. Reusing existing package
bytes via `--overlay-root` is reproducible artifact reuse, not a new temporal
assignment. No interpolation or implicit nearest-era fallback is allowed.

## All 54 dispositions

`Partial` means selected positive regional ice evidence, with scientific
acceptance pending and no supported global presence/absence domain. All
coastline and seasonal sea-ice outputs in this table are unavailable.

| Era | Target calendar BP | Group | Unified ice / source calendar BP |
| --- | ---: | --- | --- |
| `world-bc123000` | 124,949 | L | Unavailable |
| `world-bc10000` | 11,949 | D12 | Partial: nadi-1 12,000, dated-1 12,000 |
| `world-bc8000` | 9,949 | D10 | Partial: nadi-1 10,000, dated-1 10,000 |
| `world-bc5000` | 6,949 | H-early | Partial: nadi-1 7,000 |
| `world-bc4000` | 5,949 | H-early | Partial: nadi-1 6,000 |
| `world-bc3000` | 4,949 | H-early | Partial: nadi-1 5,000 |
| `world-bc2000` | 3,949 | H | Unavailable |
| `world-bc1500` | 3,449 | H | Unavailable |
| `world-bc1000` | 2,949 | H | Unavailable |
| `world-bc700` | 2,649 | H | Unavailable |
| `world-bc500` | 2,449 | H | Unavailable |
| `world-bc400` | 2,349 | H | Unavailable |
| `world-bc323` | 2,272 | H | Unavailable |
| `world-bc300` | 2,249 | H | Unavailable |
| `world-bc200` | 2,149 | H | Unavailable |
| `world-bc100` | 2,049 | H | Unavailable |
| `world-bc1` | 1,950 | H | Unavailable |
| `world-100` | 1,850 | H | Unavailable |
| `world-200` | 1,750 | H | Unavailable |
| `world-300` | 1,650 | H | Unavailable |
| `world-400` | 1,550 | H | Unavailable |
| `world-500` | 1,450 | H | Unavailable |
| `world-600` | 1,350 | H | Unavailable |
| `world-700` | 1,250 | H | Unavailable |
| `world-800` | 1,150 | H | Unavailable |
| `world-900` | 1,050 | H | Unavailable |
| `world-1000` | 950 | H | Unavailable |
| `world-1100` | 850 | H | Unavailable |
| `world-1200` | 750 | H | Unavailable |
| `world-1279` | 671 | H | Unavailable |
| `world-1300` | 650 | H | Unavailable |
| `world-1400` | 550 | H | Unavailable |
| `world-1492` | 458 | H | Unavailable |
| `world-1500` | 450 | H | Unavailable |
| `world-1530` | 420 | H | Unavailable |
| `world-1600` | 350 | H | Unavailable |
| `world-1650` | 300 | H | Unavailable |
| `world-1700` | 250 | H | Unavailable |
| `world-1715` | 235 | H | Unavailable |
| `world-1783` | 167 | H | Unavailable |
| `world-1800` | 150 | H | Unavailable |
| `world-1815` | 135 | H | Unavailable |
| `world-1878` | 72 | H | Unavailable |
| `world-1880` | 70 | H | Unavailable |
| `world-1900` | 50 | H | Unavailable |
| `world-1914` | 36 | H | Unavailable |
| `world-1920` | 30 | H | Unavailable |
| `world-1930` | 20 | H | Unavailable |
| `world-1938` | 12 | H | Unavailable |
| `world-1945` | 5 | H | Unavailable |
| `world-1960` | -10 | M | Unavailable |
| `world-1994` | -44 | M | Unavailable |
| `world-2000` | -50 | M | Unavailable |
| `world-2010` | -60 | M | Unavailable |

## Reproduction and validation

Use the mask environment from `requirements-masks.txt`. Obtain the pinned
original archives using the existing `fetch-inputs` command if the ignored
research cache is absent. The default expansion regenerates the five selected
ice suites from verified archives and creates all 54 dispositions atomically:

```bash
.venv/bin/python scripts/generate_reconstruction_masks.py expand-eras \
  --output data-sources/textures/masks/phase6-eras-verified
.venv/bin/python scripts/generate_reconstruction_masks.py validate-expansion \
  data-sources/textures/masks/phase6-eras-verified
```

Choose a fresh output directory for subsequent runs. To package previously
verified ice bytes without rasterizing again, add
`--overlay-root data-sources/textures/masks/overlays-v2`. All five packages must
exist and pass the overlay validator, including era/date/source checks, image
encoding, bounds, provenance and hashes. Historical overlay metadata is copied
unchanged; the phase-6 dispositions and bundled reference review give the
current acceptance status.

Layout:

```text
phase6-eras-verified/
  catalog.json
  provenance/                     # contracts, source selection, directives, phase-5 findings
  eras/<slug>/manifest.json        # present for every one of the 54 eras
  eras/<supported-slug>/ice/       # present only for the five selected eras
    manifest.json
    ice.png
    diagnostics/ice-minimum.png
    diagnostics/ice-maximum.png
    provenance/
```

`validate-expansion` rejects missing or duplicate eras, wrong dates, implicit
slice reuse, changed provenance, unsupported images, unavailable-to-empty
promotion and claims of scientific acceptance. An incomplete generation is
never published as a finished all-era package. Validation verifies software
contracts and artifact integrity; it does not supply geological acceptance.

## Verification

- All 54 era packages pass `validate-expansion`, including invocation with a
  relative package path. The existing-overlay reuse path was also exercised
  against all five real phase-4 packages.
- All 15 regenerated PNGs match the phase-4 overlay bytes. The 70 audited
  zero-rounding polygon drops remain recorded across the three bounds.
- 69 distinct Python tests pass across the workspace and GDAL-enabled system
  interpreters. The new cases cover all-era dispositions, date/endpoint rules,
  slice reuse, Last Interglacial and modern gaps, metadata tampering, unavailable
  images, wrong-era/missing inputs, relative paths and atomic failure cleanup.
- `npm test`: 63 tests pass, including the catalog-to-TypeScript cross-check.
- `npm run build` hits the existing sandbox `tsx` IPC `EPERM`. Equivalent
  `node --import tsx src/server/exportStatic.ts`, `tsc --noEmit` and `vite build`
  stages pass. PostGIS is unavailable, so export uses existing static data.
  Existing Vite CJS deprecation and chunk-size warnings remain.
- No tracked app/site changes; source pins are unchanged. `git diff --check`
  passes.
