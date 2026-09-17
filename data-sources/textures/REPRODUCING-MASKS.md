# Reproducing the editing delivery

Run these commands from the Earth Browser repository root. Use the source
selection and contracts bundled in the delivery when identifying the matching
repository revision; a newer scientific selection may intentionally fail the
old package validator. Original sources and the adopted Blue Marble reference
are hash checked. Never run `generate_prehistoric_textures.py` for this workflow.

## Environment and inputs

The tested numerical environment uses Python 3.14 and the exact versions in
`data-sources/textures/requirements-masks.txt`. Use an existing `.venv` if it
already satisfies that file; otherwise:

```bash
python3.14 -m venv .venv
.venv/bin/python -m pip install -r data-sources/textures/requirements-masks.txt
.venv/bin/python scripts/generate_reconstruction_masks.py fetch-inputs
.venv/bin/python scripts/generate_reconstruction_masks.py verify-inputs
```

The default acquisition verifies the selected margin archives and their members
against `SOURCE-SELECTION.json`. It does not need the multi-gigabyte terrain
archive: this delivery contains no coastal masks. Keep downloaded originals in
the ignored `data-sources/textures/research-cache/`. No database or GDAL is
required for ice generation or packaging.

## Regenerate and package

Use fresh output directories; existing packages are never overwritten. The
default `expand-eras` path regenerates all five regional suites from verified
inputs and writes all 54 era dispositions atomically:

```bash
.venv/bin/python scripts/generate_reconstruction_masks.py expand-eras \
  --output /tmp/earth-mask-expansion
.venv/bin/python scripts/generate_reconstruction_masks.py validate-expansion \
  /tmp/earth-mask-expansion
.venv/bin/python scripts/generate_reconstruction_masks.py package-delivery \
  --expansion /tmp/earth-mask-expansion \
  --output /tmp/earth-mask-delivery
.venv/bin/python scripts/generate_reconstruction_masks.py validate-delivery \
  /tmp/earth-mask-delivery
```

For a single supported era, the underlying generator is:

```bash
.venv/bin/python scripts/generate_reconstruction_masks.py generate-overlays \
  --era world-bc10000 --output /tmp/earth-mask-one-era
.venv/bin/python scripts/generate_reconstruction_masks.py validate-overlay \
  /tmp/earth-mask-one-era/world-bc10000/manifest.json
```

To reuse all five existing validated ice suites, add
`--overlay-root data-sources/textures/masks/overlays-v2` to `expand-eras`.
To package the existing phase-6 catalog directly:

```bash
.venv/bin/python scripts/generate_reconstruction_masks.py package-delivery \
  --expansion data-sources/textures/masks/phase6-eras-verified \
  --output data-sources/textures/masks/phase7-delivery
```

Packaging preserves source manifests and PNGs byte-for-byte, adds 54 readable
era guides, instructions and checksums, and creates `reconstruction-masks.zip`.
The ZIP uses sorted entries, fixed timestamps/permissions and uncompressed
storage to make archive bytes independent of file mtimes and zlib versions.
Repeating packaging with identical evidence, documentation and code produces
the same archive. Regenerated evidence can carry different software-version
metadata; compare image hashes separately when changing the environment.
No rejected candidate, base image, artistic composite or app asset is included.

## Tests and production build

```bash
.venv/bin/python -m unittest discover -s scripts/tests -v
/usr/bin/python3 -m unittest discover -s scripts/tests -p test_reference_gdal.py -v
/usr/bin/python3 -m unittest discover -s scripts/tests -p test_terrain.py -v
npm test
npm run build
```

The two system-Python runs exercise GDAL tests skipped in the numerical virtual
environment; they require a GDAL 3.7+ OpenFileGDB raster reader (tested: 3.8.4).
GDAL and terrain inspection belong to the broader research checks, not the
delivery's runtime requirements. In the restricted environment where `tsx`
cannot create its IPC socket, run the equivalent build stages:

```bash
node --import tsx src/server/exportStatic.ts
./node_modules/.bin/tsc --noEmit
./node_modules/.bin/vite build
```

If PostGIS is unavailable, the existing exporter uses cached static data and
reports that fallback. Build verification does not validate coastal science or
integrate these research masks into the application.
