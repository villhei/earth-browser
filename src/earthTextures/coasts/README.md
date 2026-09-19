# Blue Marble coastline prototype

In the app, select **10,000 BCE**, keep **Blue Marble (Modern)** as the surface,
and enable **Visuals → Coastline prototype**. The switch is off by default.
It applies only to that era and surface; changing either restores the normal
texture. The existing independent ice overlay remains above the base.

This is an **illustrative −55 m sea-level scenario**, not a scientifically
validated 10,000 BCE coastline. The date is an explicit preview slot. No sea-level
curve or date calibration is asserted. Regional land deformation, sediment
change, inland water reconstruction and historical vegetation are not modeled.
In particular, coastlines around former ice sheets need regional corrections.
The regional ICE6G terrain is not spliced into this global experiment: its domain
boundary would require a separately validated transition.

## Reproduce

Use the existing numerical environment from
`data-sources/textures/requirements-masks.txt` and the pinned source files in
`data-sources/textures/SOURCE-SELECTION.json`. No GDAL, network or database is
needed for generation when the original ETOPO TIFF is already cached.

```bash
.venv/bin/python scripts/generate_coastline_prototype.py \
  --sea-level -55 --output /tmp/coastline-prototype
.venv/bin/python -m unittest discover -s scripts/tests -p test_coast_prototype.py -v
npm test
npm run build
```

Choose a fresh output directory. Generation is staged and published only when
complete; it does not install anything into the application. For an intentional
asset update after visual review:

```bash
cp /tmp/coastline-prototype/blue-marble-coast-prototype.jpg src/earthTextures/coasts/world-bc10000-prototype.jpg
cp /tmp/coastline-prototype/manifest.json src/earthTextures/coasts/manifest.json
```

The checked-in JPEG and manifest were generated together; the asset test checks
their agreement. The manifest identifies all source and output hashes, the
generator hash, processing assumptions, and numerical checks. Other sea-level
arguments produce explicitly labelled sensitivity previews, not additional era
reconstructions.

## Processing and review

1. Verify original ETOPO and Blue Marble hashes. Read ETOPO at its full
   21,600 × 10,800 resolution and check grid orientation and registration tags.
2. Label negative, valid elevations with four-neighbour connectivity. Join
   components across longitude, select the largest combined ocean component,
   and leave disconnected basins out. Neither RGB nor a downsampled elevation
   threshold defines the ocean. Native exposure requires −55 ≤ elevation < 0.
3. Box-average classifications to 4096 × 2048 coverage. This is raster sampling
   coverage, not a confidence probability or a surveyed shoreline.
4. Select inland, coloured Blue Marble donor pixels, excluding mixed shores and
   snow. Extend their colours with multiscale normalized convolution, wrapping
   longitude. Add subtle metric relief and deterministic texture grain. Bright
   neutral baseline snow is protected. RGB only affects appearance and this
   conservative protection; it cannot add exposed land.
5. Save the composite, independent masks, and before/after/coverage plates for
   the world, Sundaland, Doggerland, Beringia, the Persian Gulf and Sahul.

Outputs include `blue-marble-coast-prototype.png` (lossless), a smaller JPEG for
the app, `modern-ocean.png`, `exposed-shelf.png` (bathymetric classification),
`applied-coverage.png` (after snow protection), six comparison plates and a JSON
manifest. The PNG preserves every decoded baseline pixel outside applied
coverage. JPEG compression can change pixels elsewhere.

Ocean connectivity and image registration remain approximate, particularly at
narrow straits and beneath modern ice. ETOPO bedrock below ice is not evidence
of modern ocean; brightness protection does not replace a surveyed ice/coast
mask. These limitations are explicit in the manifest. The previous phase-5
coastline rejection and the scientific-mask pipeline remain unchanged.

Data: [NOAA NCEI ETOPO 2022](https://doi.org/10.25921/fd45-gt74), 60 arc-second
bedrock grid, plus the repository's adopted Blue Marble reference. Land colours
are an artistic continuation of that reference.
