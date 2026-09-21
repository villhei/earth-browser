# 8192 × 4096 ice and coastal masks

The [1,000-year coastal series](COASTAL-SERIES-123000BCE.md) extends the workflow
to 125 source-dated scenarios from 123,000 BCE through 1,001 CE plus a 1950 CE
reference endpoint, delivered in `output/coastal-masks-123000bce-1000yr-v3/`
(also zipped). The [baseline decision](COASTAL-BASELINE-DECISION.md) shifts the
series by −8.49 m so that the modern reference produces zero change.

The latest five-scenario coastal package is `output/coastal-depth-masks-v5/` (also zipped).
It retains all five v4 scenarios and their decoding scales, but removes both
empirical ice and baseline snow exclusions from depth, land-change and shoreline
masks. Its `-excluded.png` files are fully transparent compatibility artifacts.
Generate it without ice inputs:

```bash
.venv/bin/python scripts/generate_coastal_depth_masks.py \
  --width 8192 --output output/coastal-depth-masks-v5
```

The notes below describe earlier deliveries and their original exclusions.

The subsequent [22,000 BCE addition](RECONSTRUCTION-BC22000.md) is delivered in
`output/ice-masks-8192-v2/` (six eras) and `output/coastal-depth-masks-v4/`
(five eras), alongside the original packages described below. Coastal v4
declares a per-era depth scale: 160 m for the new era and 64 m for the originals.

These packages regenerate the existing selected scenarios from their original
inputs on a WGS84 equirectangular PixelIsArea grid. Pixel rows run north to south,
columns west to east, with bounds −180°/−90°/180°/90°. They do not expand the
scientific coverage or revise the existing assumed sea levels.

## Outputs

- `output/ice-masks-8192-v1/`: five regional ice suites for 10,000, 8,000, 5,000,
  4,000 and 3,000 BCE. Each has a central `ice.png`, separate minimum/maximum
  diagnostics, a manifest and source/attribution records: 15 mask PNGs in total.
- `output/coastal-depth-masks-v3/`: four coastal scenarios for 123,000, 10,000,
  8,000 and 5,000 BCE, with assumed levels +7, −55, −25 and −3 metres. Each has
  depth change (16-bit), depth overlay, land change, shoreline and exclusions:
  20 mask PNGs, plus a smaller preview, manifest and decoding README.

Ice PNGs are white with coverage in straight alpha (transparent pixels have
black RGB). Coastal 8-bit PNGs are white throughout with data in straight alpha.
Coastal 16-bit depth magnitude uses the shared 0–64 metre scale. Preserve alpha;
do not interpret RGB as mask data. Read the coastal package README for decoding.

## Regeneration

Use fresh output paths and the existing pinned source cache:

```bash
.venv/bin/python scripts/generate_reconstruction_masks.py generate-overlays \
  --all-supported --width 8192 --output output/ice-masks-8192-v1
.venv/bin/python scripts/generate_coastal_depth_masks.py \
  --width 8192 --ice-root output/ice-masks-8192-v1 \
  --output output/coastal-depth-masks-v3
```

Ice is rasterized from native source polygons, including holes and all three
source alternatives, with projection subdivision tolerance scaled to the output
grid. Eight-by-eight subcell sampling is used initially. Tiny polygons missed
by those sample positions are checked analytically for encodable coverage;
affected pixels are rerasterized as the union of all source polygons at 32–256
samples per axis. Every refinement and zero-rounding drop is recorded. No alpha
floor, dilation or addition of separately quantized polygon masks is used.

The derived ice overlay contract is version 2.1.0, with an explicit
`earth-equirectangular-8192-v1` output grid. Source provenance retains the
original 4096-grid documents unchanged; the manifest's `output_grid` and derived
`policy` specify this delivery's grid. Existing 4096 overlay generation and
validation remain supported under version 2.0.0.

Coastal classification and depth computation operate on native 21,600 × 10,800
ETOPO cells before reduction to 8192 × 4096. Coastlines are derived at the new
resolution. The coastal generator validates and consumes matching-grid ice
packages. Only the modern Blue Marble snow exclusion is aligned from a 4096 ×
2048 classification using nearest-neighbour sampling; it adds no new snow data.

## Scope and validation

Ice coverage remains regional, with scientific acceptance pending and the known
source topology limitations retained. There is no ice reconstruction for
123,000 BCE. Coastal masks remain illustrative modern-bedrock scenarios without
historical land-deformation corrections. Higher resolution does not remove
these limitations. The app's existing artwork is separate from these data masks.

```bash
.venv/bin/python -m unittest discover -s scripts/tests -v
/usr/bin/python3 -m unittest discover -s scripts/tests -p test_reference_gdal.py -v
/usr/bin/python3 -m unittest discover -s scripts/tests -p test_terrain.py -v
npm test
npm run build
```

Validate an individual ice package with:

```bash
.venv/bin/python scripts/generate_reconstruction_masks.py validate-overlay \
  output/ice-masks-8192-v1/world-bc10000/manifest.json
```

Original source credits and licenses are preserved in each ice package. Coastal
manifests pin the consumed ice PNGs and manifests as well as the terrain source.
