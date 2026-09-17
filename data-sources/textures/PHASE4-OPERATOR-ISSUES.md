# Phase 4 — operator handoff

Rechecked after the operator directives on 2026-09-17. **The earlier operator
decisions and environment blockers are resolved.** Five partial static ice
overlays are generated under the new version-2 workflow. Regional coastline
candidates are implemented for review; scientific reconstruction validation is
still pending. See [PHASE4-OPERATOR-DIRECTIVES.md](PHASE4-OPERATOR-DIRECTIVES.md).

## 1. Archive and GDAL raster reader available

**Acquisition blocker resolved:** the operator has staged the original ZIP at:

`data-sources/textures/research-cache/ICE6G_Paleo_subice.zip`

Source: [PANGAEA.947536 file table](https://doi.pangaea.de/10.1594/PANGAEA.947536?format=html),
[direct ICE6G archive](https://download.pangaea.de/dataset/947536/files/ICE6G_Paleo_subice.zip).
The local file is **5,533,024,659 bytes**. SHA-256:
`49cb5cfd918215988a8778f63cc71ba5e1e4ec303cf5d5caff56048a715258e7`.
All **1,028 ZIP entries** were read to EOF with successful CRC checks; every
member's SHA-256 is recorded in [ICE6G-ARCHIVE-INVENTORY.json](ICE6G-ARCHIVE-INVENTORY.json).
Uncompressed content totals 7,159,509,992 bytes. ZIP integrity establishes
readability, not independent authentication against publisher bytes; exact
retrieval date is not supplied.

The archive contains `ICE6G_Paleo_subice.gdb`. Its embedded catalog XML describes
47 raster datasets, including `ICE6G_paleosi_12000`, `ICE6G_paleosi_10000` and
`ICE6G_paleosi_07000`. The three selected rasters have now been fully decoded and
exported at native resolution, retaining their one-band Float32 values, NAD83
Albers CRS, 999.92745332252855-metre cells and explicit validity masks.

**Reader blocker resolved:** the upgraded CLI and `/usr/bin/python3` bindings
report **GDAL 3.8.4**, and OpenFileGDB advertises raster support. The 12 ka layer
opens as a 9,872 × 5,932 Float32 raster with the expected native CRS/grid and an
explicit validity mask. No further GDAL installation or external export is
required from the operator. Earlier GDAL 3.4.1 and download failures are historical.

The new `inspect-terrain` command performs full native exports of the selected
12/10/7 ka layers, preserves their validity masks, and compares every exported
cell and mask byte against the source. This is terrain evidence, not a coastline
or a supported marine domain. Run it using the GDAL-enabled interpreter:

```bash
/usr/bin/python3 scripts/generate_reconstruction_masks.py inspect-terrain
```

The default output is `research-cache/ice6g-native-v1/`; choose a fresh directory
with `--output` for a repeat run. Temporary extracted FileGDB members are verified
against their pins; the original ZIP is preserved. A failed/interrupted run
does not publish a completed output directory.

**Completed run:** all three native GeoTIFFs and `terrain-inspection.json` are
present there. [ICE6G-TERRAIN-INSPECTION.json](ICE6G-TERRAIN-INSPECTION.json) is the
tracked report with artifact/cell/mask hashes, chronology, grid, statistics and
processing versions. Each 9,872 × 5,932 layer has 35,792,814 valid cells and
22,767,890 invalid cells. Every output cell byte and mask pixel was compared with
the source. Invalid areas remain excluded; negative heights remain unclassified.

The current `fetch-inputs` command intentionally fetches only already-pinned
downloads; placing this new ZIP in the cache does not authenticate it or enable
production automatically. The pinned phase-2 selection stays unchanged as a
historical snapshot; the new inventory records the subsequent acquisition.

## 2. Baseline, grounding split and conflict policy — resolved

The operator selected Blue Marble, rejected PALEOMAP, required a single combined
grounded/floating ice overlay, and gave empirical margins precedence over GIA
terrain/marine conflicts. A separate grounding split is no longer required to
render combined extent. `generate-overlays` applies these directives with
explicit partial coverage and preserves all three uncertainty bounds.

`coastline-candidates` now segments visible Blue Marble ocean, excludes
disconnected/dark inland water and bright ice-like areas, classifies the native
regional terrain using boundary-seeded ocean connectivity, and excludes ice
before final-grid reduction. It does not add lakes or vegetation. RGB segmentation
and conservative ice barriers are approximations to assess during reference-era
validation, not reasons to request the same operator choices again.

## 3. Zero-rounding artifacts — resolved

**Operator instruction:** “Discard the polygons/subpixels that round to 0”.
The new workflow applies this instruction and records the loss audit. There is
no additional size cutoff, dilation or minimum-alpha floor.

At `alpha = floor(255*f + 0.5)`, a pixel fraction below `1/510` (about 0.001961)
rounds to zero. Analytic rectangle clipping of every polygon missed by the 8×8
diagnostic sampling produced the following results, assuming valid simple rings
and holes. Counts are polygon instances across bounds, not unique ice bodies.

| Era | Missed polygon instances | Largest per-pixel fraction among misses |
| --- | ---: | ---: |
| 10,000 BCE | 3 | 0.000632642 |
| 8,000 BCE | 1 | 0.000031079 |
| 5,000 BCE | 15 | 0.001790627 |
| 4,000 BCE | 24 | 0.000435099 |
| 3,000 BCE | 27 | 0.000435099 |

All 70 instances quantize to zero **when assessed individually**. This is not
a polygon-union assessment or a source topology validation. Some source polygons
may overlap other evidence or be geometric artifacts; that requires review.
More samples alone cannot solve this encoding limit.

The 70 instances are now recorded as discarded in the version-2 overlay
manifests. A sampling miss whose analytic coverage would round to nonzero remains
an error; the operator's instruction does not authorize dropping visible geometry.

Detailed per-polygon pixel fractions and outcomes are in each ignored local
`masks/phase4-loss-analysis/v1/<era>/diagnostics/ice-margin-evidence-report.json`.
The CLI records the method and implementation hashes and reproduces these
reports. Original source bytes and diagnostic PNG content remain preserved.

## Remaining work and operator actions

No further operator decision or installation is currently requested for the
selected regional outputs. Review the reference-era coastline candidates against
the source and base image before treating them as validated reconstructions;
check native-domain boundaries, narrow channels, source topology and near-ice
coasts. The known unclosed 6 ka ring is closed in derived overlay geometry with
a logged operation; original bytes and nonnested uncertainty bounds are retained.
Unselected regions/classes require additional evidence if broader coverage is
requested. Static-overlay transparency preserves Blue Marble and does not claim
confirmed ice absence.

## Verification and non-blocking environment limits

- 54 distinct Python tests pass across the workspace and GDAL-enabled system
  interpreters, plus 61 Vitest tests. Three GDAL tests skipped in the workspace
  venv are explicitly run and pass with system Python.
- All 14 pinned downloads and 84 selected archive components verify.
- The separately pinned ICE6G archive and all extracted members verify; all three
  native terrain exports pass full cell, mask, CRS and registration comparisons.
- All five regenerated packages validate; 21 diagnostic PNGs match the earlier
  verified run byte-for-byte. New analytic reports do not repaint diagnostics.
- Five version-2 overlay packages validate; each has one combined `ice.png` and
  minimum/maximum diagnostics, with 70 zero-rounding drops across the suites.
- `npm run build` encounters the existing `tsx` IPC socket `EPERM`. Equivalent
  stages pass with `node --import tsx src/server/exportStatic.ts &&
  ./node_modules/.bin/tsc --noEmit && ./node_modules/.bin/vite build`.
- PostGIS is unreachable; export uses the existing static datasets. Database
  access is not required for the mask diagnostics. Existing Vite CJS/chunk-size
  warnings remain. These build limitations do not block the research work.
