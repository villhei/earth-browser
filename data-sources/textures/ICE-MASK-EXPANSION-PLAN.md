# Ice mask expansion from 38,000 BCE onwards

Requested 2026-09-20. Planning only; generation and implementation remain to do.
“38BCE” is interpreted as **38,000 BCE**, following the discussion of DATED-1's
40 ka coverage. Use the existing NADI-1 and DATED-1 archives for their available
dates and regions. Missing data is skipped and does not block other masks.

## Existing workflow to extend

- [HIGH-RESOLUTION-MASKS.md](HIGH-RESOLUTION-MASKS.md): 8192 × 4096 RGBA masks,
  equirectangular WGS84 PixelIsArea grid, native-polygon rasterization and
  audited subpixel refinement.
- [RECONSTRUCTION-BC22000.md](RECONSTRUCTION-BC22000.md): additional reconstruction
  dates independent of the historical territory catalog, with pinned source
  members and explicit age offsets.
- `scripts/paleomasks/additional_eras.py`: currently registers only 22,000 BCE;
  generalize this registration for the expanded ice series.
- `scripts/paleomasks/overlays.py`, `pipeline.py` and `geometry.py`: reuse source
  verification, projection, polygon union, rasterization, manifest generation,
  atomic package creation and validation.
- [OUTPUT-OVERLAY-CONTRACT.json](OUTPUT-OVERLAY-CONTRACT.json): unified empirical
  ice, central rendering where available, separate source alternatives, and
  transparency meaning no overlay rather than confirmed absence of ice.

Deliver this as an ice-only series for external use. Reconstruction dates do
not require new territory GeoJSON, timeline entries, coastal masks or app assets.

## Actual archive coverage

The cached archive member lists were inspected for this plan. DATED-1's broad
40–10 ka study coverage is **not** a regular collection of masks back to 40 ka.
38,000 BCE is 39,949 calendar BP; there is no `TS40` polygon in the pinned archive.
Leave that starting gap unavailable instead of extending a younger polygon.

| Source | Available polygon members | Handling |
| --- | --- | --- |
| DATED-1, older Eurasia | `TS_3835max_poly`, `TS_3835min_poly`, `TS_3230_poly`, `TS_2829_poly`, `TS_27_poly` | Inspect original chronology and variant meanings; preserve interval dates and missing alternatives. |
| DATED-1, younger Eurasia | `TS25` through `TS10`, every 1,000 calendar years, each with `mc`, `min`, `max` | Central/minimum/maximum suites for 25,000–10,000 BP. |
| NADI-1, North America | 25–1 ka every 500 calendar years, each with `OPTIMAL`, `MIN`, `MAX` | 49 central/minimum/maximum suites for 25,000–1,000 BP. |

The older DATED-1 DBFs have a `Time` field, including 38 in the `3835max`
member and 35 in `3835min`. Do not assume these are synchronous uncertainty
bounds or collapse `3835`, `3230` or `2829` into exact ages from their filenames.
Resolve their published age/interval semantics using the cached source README
and methods before assigning output metadata. Polygon members are the mask
inputs; associated line members are useful for inspection only.

Use both sources at shared ages, DATED-1 alone for its supported older dates,
and NADI-1 alone for its supported younger dates. The youngest NADI-1 slice is
1,000 BP (**950 CE**); later requested dates have no output from these sources.

## Date and missing-data policy

1. Build the series from the union of actual source ages and documented
   intervals, within the requested window starting at 38,000 BCE. Preserve
   native temporal resolution rather than inventing an annual or uniform series.
2. For exact ages, use calendar BP relative to 1950 and the existing absent-year-zero
   conversion. For example, 25,000 BP = 23,051 BCE and 10,000 BP = 8,051 BCE.
   Preserve source interval endpoints for interval products; do not replace them
   with an undocumented midpoint.
3. Merge the two sources only when their exact ages match. At NADI-1 half-ka
   steps without a DATED-1 slice, render North America alone. Do not carry
   Eurasian ice forwards/backwards, interpolate vertices or fill temporal gaps.
4. Retain the existing named-era selections separately: 22,000, 10,000, 8,000,
   5,000, 4,000 and 3,000 BCE, including their signed offsets and the named
   DATED-1 TS10 endpoint approximation. Do not silently relabel those products
   as exact-age reconstructions or broaden their approximation rules.
5. Missing regions remain transparent. If an entire requested date has no
   source, record it as skipped/unavailable in the index and create no empty PNG.
   Missing central/minimum/maximum variants are recorded and omitted individually;
   never duplicate a bound to fabricate another variant.
6. An older product with only a published bound remains a labelled bound output.
   Do not invent `ice.png` when no central estimate is supplied. Any unresolvable
   source chronology is recorded as skipped while the remaining series proceeds.
7. Missing scientific coverage is not a generation failure. A checksum mismatch,
   unreadable selected file or failed raster validation is an error, not missing
   data to silently ignore.

## Implementation steps

- [ ] Inventory and checksum all available polygon components in the two
  existing pinned archives. Record native CRS, source age or interval, variant,
  layer/component hashes, geometry findings, citation and license. Keep original
  source bytes and existing source-selection records unchanged; add a separate
  versioned expansion selection record.
- [ ] Generalize additional reconstruction registration to accept exact ages,
  intervals and one or both sources, while retaining the existing 22,000 BCE
  record and coastal consumer. Keep this registry separate from the 54-era
  territory catalog. Use stable exact-age IDs such as `ice-bp25000`; give interval
  products explicit endpoint IDs after their semantics are established.
- [ ] Extend selection/provenance handling and overlay validation for the new
  registry. Version the expanded contract to support optional variants and
  interval chronology. Preserve strict three-variant validation for existing
  packages and continue validating them with their original provenance.
- [ ] Add an explicit CLI series option, proposed as `--series ice-expansion`,
  alongside the existing `--era` and `--all-supported` paths. Emit a chronologically
  ordered index listing generated products, source participation, missing
  variants, date/interval metadata and skipped dates. Keep the old CLI behavior.
- [ ] Generate at 8192 × 4096 using the current grid and sampling code. Union
  available source polygons separately for each matching variant before coverage
  reduction. Preserve holes, projection subdivision, seam handling, ring-closure
  records, local sampling refinements and audited zero-rounding drops. Preserve
  source alternatives even when they are not geometrically nested.
- [ ] Write each product into its own directory with `manifest.json`, provenance,
  central `ice.png` where supported, and available
  `diagnostics/ice-minimum.png` / `diagnostics/ice-maximum.png`. Continue white RGB
  with straight coverage alpha and transparent black outside coverage. Preserve
  partial-coverage metadata and dataset-specific credits/licenses.
- [ ] Package into a fresh `output/ice-masks-38000bce-v1/` directory and matching
  ZIP, with an index, checksums and a short editor guide. Keep existing deliveries
  intact. Include the retained named-era products with their explicit offsets.

Proposed command after implementation (the series option does not exist yet):

```bash
.venv/bin/python scripts/generate_reconstruction_masks.py generate-overlays \
  --series ice-expansion --width 8192 --output output/ice-masks-38000bce-v1
```

## Verification and completion

- [ ] Test date conversion, exact versus interval registration, source age
  intersection, the 500-year NADI-only steps, missing variants, skipped dates,
  retained named-era offsets and the existing TS10 exception.
- [ ] Test that both sources contribute at all 16 shared exact ages (25–10 ka),
  NADI-1 contributes at all 49 native ages, and inspected older DATED-1 polygon
  products are either generated with their actual semantics or explicitly
  skipped. The 49 exact-age suites imply 147 PNGs before older/alias products.
- [ ] Check dimensions, orientation, alignment, alpha encoding, seams, holes,
  per-variant source membership, provenance and output checksums. Compare shared
  source-age masks with existing deliveries where processing is unchanged.
- [ ] Inspect the earliest usable Eurasian product, first combined product,
  an intervening NADI-only half-ka product, the 10 ka boundary, and the 1 ka
  endpoint. Confirm absent datasets contribute no geometry.
- [ ] Run the relevant Python suites, `npm test`, `npm run build`, package
  validation and `git diff --check` after implementation.

Complete when all usable source products have reproducible masks and provenance,
and all omissions are listed. Missing dates, regions or variants do not block
delivery and are not interpreted as ice-free conditions. Existing scientific
limitations remain metadata; resolving unrelated coastal validation findings
is not a prerequisite for this ice expansion.
