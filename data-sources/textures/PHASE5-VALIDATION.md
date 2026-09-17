# Phase 5 — 10,000 BCE reference review

Recorded 2026-09-17. **The reference review found reasons to withhold scientific
acceptance. Phase 5's validated-mask deliverable remains open; do not expand the
coastline pipeline to other eras yet.** The ice images reproduce their selected
sources, but a source topology defect remains. The coastal candidates fail the
modern ocean-classification check and terminate at an artificial regional edge.

This review follows the [operator directives](PHASE4-OPERATOR-DIRECTIVES.md):
one unified empirical ice overlay, Blue Marble baseline, no inland-waterbody or
vegetation changes, and audited removal of zero-rounding coverage. It does not
reinstate the superseded grounding split or request another operator decision.

## Deliverables

- [Machine-readable results and artifact hashes](PHASE5-VALIDATION.json).
- [Published comparison evidence and geographic checkpoints](PHASE5-EVIDENCE.json).
- Local, reproducible [reference package](masks/phase5-reviewed/world-bc10000/):
  `ice/ice.png`, separate minimum/maximum alternatives, the original provenance,
  `coastline-candidates/` masks and comparison domain, `review.json`, and ten
  diagnostic plates. Generated packages remain Git-ignored; the code, evidence
  record, and result inventory are tracked.
- Start visual review with [Alaska](masks/phase5-reviewed/world-bc10000/diagnostics/alaska-domain-edge.png),
  [Scandinavia](masks/phase5-reviewed/world-bc10000/diagnostics/scandinavia.png),
  [Champlain](masks/phase5-reviewed/world-bc10000/diagnostics/champlain.png), and
  [the world overview](masks/phase5-reviewed/world-bc10000/diagnostics/world.png).

Each plate separates the modern baseline, candidate composition, processing
domain, alternative ice extents, RGB baseline classes, and elevation flags.
The plates are diagnostic illustrations, **not editable production masks**.
The independent RGBA masks retain their original 4096 × 2048 grid and bytes.
Modern snow, Greenland and Antarctic ice visible in the baseline are not new
paleo evidence. No app texture or source archive was changed.

## Checks and findings

### Source dates, alignment, transfer and uncertainty

The target is **11,949 calendar BP**, with NADI-1 12 ka, DATED-1 TS12 and ICE6G
12 ka at **+51 years**. These remain nearest-slice approximations. No neighbouring
age or GIA model was substituted. Minimum/central/maximum source extents remain
separate, and no confidence probability is assigned to alpha.

All six selected margin layers and the ETOPO source were hash-verified. A fresh
`generate-overlays --era world-bc10000` run reproduced all three ice PNGs
byte-for-byte. The review also rasterized all six native shapefiles with
**OGR reprojection and GDAL centre-hit rasterization**, independently of the
production PyProj/scanline rasterizer. Across all three combined bounds there
were **zero disagreements at fully opaque or fully transparent pixels**. This
does not test fractional edge alpha against exact geometric area. The independent
method also uses straight transformed native segments, while production
adaptively subdivides projected edges.

Grid/encoding checks, conventional north-up alignment, source CRS/axis order,
and coastline-versus-ice coverage algebra pass. Absolute registration of the
Blue Marble JPEG remains unauthenticated; agreement with its adopted grid is
not independent georeferencing validation.

| Diagnostic | Result |
| --- | ---: |
| Central ice positive pixels | 240,724 |
| Minimum alpha greater than central | 6 pixels |
| Central alpha greater than maximum | 291 pixels |
| Pixels differing among the three alternatives | 94,489 |
| Coastal output or comparison domain overlapping ice | 0 pixels |
| Coastal output outside comparison domain | 0 pixels |
| Pixels containing both exposed and flooded subcell coverage | 266 |

Mixed coastal pixels are possible when opposite classes occupy different
native/subcells within one final pixel. Their summed alpha is bounded by the
comparison-domain alpha, allowing one unit for independent rounding. They must
not be interpreted as both classes covering the same ground. Reported spherical
area estimates weight latitude and coverage; pixel counts alone are not areas.

### Source topology: scientific acceptance pending

OGR reports a **ring self-intersection** in NADI-1 12 ka OPTIMAL, feature 0, near
**64.215499°W, 58.747986°N**. The other five layers pass OGR's validity check.
The central North American source contains 17 interior rings; central DATED-1
contains one. Independent raster agreement supports hole transfer, but cannot
certify the geological meaning or topology of those holes.

No source geometry was repaired, sorted into nested bounds or enlarged. The
known three reference-era zero-rounding polygon drops remain in the copied
manifests. The source topology issue must be inspected before claiming that the
central ice product is scientifically validated; matching two rasterizers is
not sufficient to resolve it.

### Coastline baseline: rejected for production

The original candidates contain **38,989 exposed-land** and **2,718 flooded-land**
positive pixels. Their use of connected blue-dominant image pixels as modern
ocean admits substantial inland terrain. The Alaska plate visibly shows this
failure. An independent gross-error screen samples the pinned modern ETOPO 2022
grid at final pixel centres:

| Exposed-land candidate pixels | Count |
| --- | ---: |
| Modern elevation above 0 m | 18,150 |
| Modern elevation above 100 m | 13,647 |
| Modern elevation above 500 m | 6,240 |
| Missing modern elevation | 0 |

In the Alaska review box, 4,165 candidates exceed 100 m and 995 exceed 500 m.
Together with the imagery, this is evidence that the baseline ocean classifier
is unsuitable. Small near-shore height discrepancies can reflect mixed pixels,
registration or reference differences; the counts are **diagnostic flags**, not
surveyed false-positive areas. No threshold was used to silently remove pixels,
repair coastlines or derive paleotopography from the modern elevation grid.

Native connectivity had excluded 329,361 disconnected negative cells; this
number is retained from the phase-4 processing record, not independently
recomputed here. A Lake Superior spot check is excluded from coastal comparison,
and existing lake/connectivity tests pass. However, failed RGB classification
prevents claiming complete inland-water/land exclusion. Near-ice connectivity
and 8×8 coastal sampling convergence also remain unvalidated.

### Regional seams and missing coverage

The Alaska exposure mask ends in a straight line near **165°W**, following the
terrain-domain edge. It is a truncation of the candidate, not a reconstructed
coastline. No blending, invented bridge or adjacent model fills that gap.

The Bering Strait checkpoint (169°W, 66°N) has zero comparison coverage.
The broader Bering review rectangle includes a small supported portion east of
the domain edge; this does not support the strait or the entire land bridge.
Dogger Bank and Sunda also have no coastal comparison coverage. Review rectangles
are viewports, not scientific coverage polygons: the Greenland rectangle, for
example, includes neighbouring Canadian pixels and cannot establish Greenland
ice coverage.

Greenland/Antarctic paleo ice, Iceland and unselected mountain glaciers,
independent shelf additions, winter/summer sea ice and coastlines beyond selected
terrain remain unavailable. Neither transparency nor white modern imagery
establishes absence/presence for these classes.

## Published reconstruction comparisons

These comparisons establish scope and broad consistency; none supplies a
surveyed error estimate for every delivered boundary.

- **North American ice:** the published [NADI-1 v1 archive](https://zenodo.org/records/8161764)
  is the source of all three 12 ka alternatives. Independent source transfer is
  confirmed, including broad Hudson Bay ice presence. This is the same
  reconstruction, not an independent geological validation dataset.
- **Eurasian ice:** the Scandinavian plate and Finland checkpoint are broadly
  consistent with the late Younger Dryas TS12 description in
  [Hughes et al.](https://doi.org/10.1111/bor.12142). The paper's map background
  uses modern shorelines and cannot validate a paleo coastline. Peripheral
  small glaciers omitted by DATED-1 remain outside the claim.
- **Regional shorelines:** [Godbout et al.](https://doi.org/10.1038/s41597-023-02566-5)
  supports using epoch-relative zero outside ice and connected to ocean.
  Shelf exposure and Champlain lowland flooding are model candidates, not
  independent confirmations. The paper's illustrated paleoDEM is 10 ka;
  it was not treated as a 12 ka shoreline control.
- **Beringia:** [Jakobsson et al.](https://cp.copernicus.org/articles/13/991/2017/)
  motivates checking a possible exposed bridge before an approximately 11 ka
  opening, with competing earlier dates acknowledged. The current package
  cannot perform that test because the strait is outside its terrain domain.
- **Doggerland:** the younger North Sea reconstructions in
  [Walker et al., Figure 2](https://doi.org/10.15184/aqy.2020.49)
  identify an important review region but do not supply an exact 11,949 BP
  coastline. No Eurasian terrain was selected here, so this comparison remains
  unavailable rather than failed on the basis of modern water in the preview.

The Godbout paper was inspected from the hash-pinned local HTML because current
publisher/PMC fetches were blocked. New web evidence is cited by publisher URL
and summarized in `PHASE5-EVIDENCE.json`; it is not promoted to a generation input.
No route or human traversability conclusion follows from any of these checks.

## Reproduction and verification

From the repository root, with the existing pinned input cache and phase-4
packages present:

```bash
.venv/bin/python scripts/generate_reconstruction_masks.py review-reference \
  --ice-package data-sources/textures/masks/overlays-v2/world-bc10000 \
  --coast-package data-sources/textures/masks/coastline-candidates-v2/world-bc10000 \
  --output /tmp/phase5-review/world-bc10000

.venv/bin/python -m unittest discover -s scripts/tests -v
/usr/bin/python3 -m unittest discover -s scripts/tests -p test_reference_gdal.py -v
/usr/bin/python3 -m unittest discover -s scripts/tests -p test_terrain.py -v
npm test
npm run build
```

Choose a fresh output directory. The review refuses writes inside its inputs or
the app, validates source-package hashes/metadata, preserves all masks and
publishes its result atomically. `/usr/bin/python3` supplies GDAL 3.8.4; use
`--gdal-python` for another supported interpreter. See
[phase-4 generation commands](PHASE4-IMPLEMENTATION.md#commands) when inputs or
packages need regeneration.

Verification: **62 distinct Python tests** across the workspace/GDAL interpreters,
and **62 Vitest tests** pass. `npm run build` encounters the known sandbox `tsx`
IPC `EPERM`; equivalent stages pass with
`node --import tsx src/server/exportStatic.ts && ./node_modules/.bin/tsc --noEmit && ./node_modules/.bin/vite build`.
Export uses cached static data because PostGIS is unavailable. Existing Vite
deprecation/chunk-size warnings remain; no tracked app/site changes.

## Acceptance work before expansion

1. Replace the failed RGB-only ocean classifier with a documented geographically
   supported modern marine classification aligned to Blue Marble. Resolve modern
   inland-water exclusions explicitly and repeat the independent elevation screen.
2. Define an honest supported coastal domain and edge disposition. Keeping
   Beringia unavailable is permissible; a straight model edge must not masquerade
   as a coastline. Acquire additional terrain only if extending that domain.
3. Inspect the NADI-1 self-intersection and document any derived-geometry treatment
   with a before/after area and raster comparison, preserving original bytes.
4. Recheck native connectivity near ice, coastal sampling convergence, published
   regional shoreline controls and minimum/maximum alternatives after correction.

No new operator permission is required for these checks under the existing rules.
Scientific acceptance, rather than missing authorization, is what remains open.
