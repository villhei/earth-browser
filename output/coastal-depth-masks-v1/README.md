# Coastal depth-change masks

Four independent **4096 × 2048 grayscale PNG** sets, aligned to the existing
ice masks: WGS84 equirectangular, west to east, north to south, full world extent.
These are illustrative bathymetric scenarios using the project's existing
sea-level assumptions. They are not calibrated historical reconstructions.

| Era | Assumed sea level versus modern | Interpretation |
| --- | ---: | --- |
| 123,000 BCE | +7 m | Deeper water and flooded coastal lowlands |
| 10,000 BCE | −55 m | Shallower water and exposed shelf |
| 8,000 BCE | −25 m | Shallower water and exposed shelf |
| 5,000 BCE | −3 m | Shallower water and exposed shelf |

## Files and decoding

For each `world-bc…` prefix:

- **`-depth-change.png`**: 16-bit linear grayscale magnitude. Black is zero;
  white (65535) is 64 metres for **every era**. Decode magnitude as
  `pixel / 65535 * 64`. Multiply by `depth_change_sign` in the manifest for a
  signed change in water depth: positive means deeper, negative shallower.
- **`-depth-change-8bit.png`**: convenient normalized mask. Black is zero;
  white is the magnitude of that era's assumed sea-level shift (7, 55, 25 or
  3 metres). These have comparable visibility, **not a shared metre scale**.
- **`-land-change.png`**: 8-bit native-cell coverage of newly exposed shelf
  (negative levels) or flooded land (positive levels). White is full coverage;
  grey is a mixed output pixel. It does not include still-submerged shallows.
- **`-shoreline.png`**: white ocean-side historical shoreline, one output
  pixel wide. This cartographic line is derived from majority ocean/land
  coverage; width does not encode metres, confidence or positional accuracy.
- **`-excluded.png`**: white where modern bright snow or the available era ice
  mask suppressed output. Black does not establish scientific validity.

`preview.png` compares the normalized masks. `manifest.json` records source,
generator and output hashes, encoding, assumptions, exclusions and counts.
Treat the PNG values as **linear data**, without sRGB/gamma conversion. The
16-bit files may appear dark in ordinary image viewers; use the 8-bit versions
for inspection. No rendering integration is needed to use these assets.

## What the gradient means

At native resolution, with elevation `z` and assumed sea level `s` in metres:

```
modern_depth = max(-z, 0)
era_depth = max(s - z, 0)
change = abs(era_depth - modern_depth)
coastal_depth = min(modern_depth, era_depth)
mask_metres = change * (1 - smoothstep(200, 400, coastal_depth))
```

The gradient spans newly exposed/flooded coast and still-submerged shallow
water. It retains full strength to 200 m depth, then smoothly fades to zero
at 400 m. This taper is a **visual influence envelope**; the assumed physical
sea-level shift also affects deeper ocean. On exposed shelf, the decrease in
water depth is capped at its modern depth because historical water depth is
zero. On flooded land, the increase is the new water depth. In still-submerged
water, change is the full sea-level difference before the taper.

Modern and era oceans are the largest four-connected negative-relative-to-sea
terrain components, joined across longitude but never across the poles.
Disconnected modern depressions, invalid terrain, and water stranded by a
falling sea are omitted. Flooding adds only connected, nonnegative modern
terrain. Native classification and depth calculations precede BOX reduction
to the image grid, preserving fractional land coverage at mixed pixels.

Final pixels touched by available 10,000, 8,000 and 5,000 BCE empirical ice
coverage are suppressed, along with bright neutral snow in the modern Blue
Marble reference. There is no empirical 123,000 BCE ice mask. This conservative
guard is approximate and cannot establish historical ice extent or a surveyed
coastline beneath modern ice. The masks do not reconstruct regional land
movement, changing sediments, inland lakes or vegetation. Narrow straits,
small islands and the −3 m land-change scenario are resolution-sensitive.
Black also includes unsupported/excluded areas; it is not evidence of no change.

## Reproduce

From the repository root, using the cached, pinned ETOPO source and existing
Python environment (`data-sources/textures/requirements-masks.txt`):

```bash
.venv/bin/python scripts/generate_coastal_depth_masks.py --output /tmp/coastal-depth-masks
.venv/bin/python -m unittest discover -s scripts/tests -p test_coastal_depth.py -v
npm test
npm run build
```

Choose a fresh output directory. Generation is staged before publishing the
complete package. Source checksums and GeoTIFF registration are verified.
Generation requires several GB of RAM to classify the 21600 × 10800 source.

## Sources and interpretation

- [NOAA NCEI ETOPO 2022](https://www.ncei.noaa.gov/products/etopo-global-relief-model),
  [dataset DOI](https://doi.org/10.25921/fd45-gt74): pinned 60 arc-second bedrock
  grid. Bedrock under ice is not the ice surface.
- Existing project assumptions from `scripts/generate_prehistoric_textures.py`:
  +7, −55, −25 and −3 m. These exact values have **not** been fitted to the dates
  using a published sea-level curve in this generator.
- [IPCC AR6, Chapter 9](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-9/)
  gives a +5 to +10 m last-interglacial context, not an exact +7 m estimate for
  123,000 BCE. [Lambeck et al. (2014)](https://doi.org/10.1073/pnas.1411762111)
  documents deglacial sea-level evolution; it is background, not a numeric
  input to these masks.
- Ice exclusions reuse the project's masks: Dalton et al. (2023),
  [NADI-1](https://doi.org/10.5281/zenodo.8161764), CC BY 4.0; Hughes et al.,
  [DATED-1](https://doi.org/10.1594/PANGAEA.848117), CC BY 3.0. Existing source
  records are in `src/earthTextures/ice/source-records/`. Only their nonzero
  alpha is used to suppress final mask pixels; the ice assets are unchanged.

Keep this README and manifest with redistributed masks.
