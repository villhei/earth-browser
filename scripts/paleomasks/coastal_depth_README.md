# Coastal depth-change masks

Version 5: five independent **8192 × 4096 PNG** sets by default, aligned to the
ice masks: WGS84 equirectangular, west to east, north to south, full world extent.
The manifest records the output dimensions (`--width 4096` also remains available).
These are illustrative bathymetric scenarios. The 22,000 BCE level uses a
published sea-level estimate; the other four retain existing assumptions.
They are not validated historical coastline reconstructions.

| Era | Assumed sea level versus modern | Interpretation |
| --- | ---: | --- |
| 123,000 BCE | +7 m | Deeper water and flooded coastal lowlands |
| 22,000 BCE | −130 m | Published 24 ka sea-level scenario; exposed shelves |
| 10,000 BCE | −55 m | Shallower water and exposed shelf |
| 8,000 BCE | −25 m | Shallower water and exposed shelf |
| 5,000 BCE | −3 m | Shallower water and exposed shelf |

## Files and decoding

For each `world-bc…` prefix:

- **`-depth-change.png`**: 16-bit linear grayscale magnitude. Black is zero;
  white (65535) is **160 metres for 22,000 BCE and 64 metres for the other eras**.
  Decode magnitude as `pixel / 65535 * era.depth_white_m` from the manifest.
  Multiply by `depth_change_sign` in the manifest for a
  signed change in water depth: positive means deeper, negative shallower.
- **`-depth-change-8bit.png`**: normalized white overlay. Transparent is zero;
  opaque white is the magnitude of that era's sea-level shift (7, 130, 55, 25 or
  3 metres). These have comparable visibility, **not a shared metre scale**.
- **`-land-change.png`**: 8-bit alpha native-cell coverage of newly exposed shelf
  (negative levels) or flooded land (positive levels). Opaque white is full coverage;
  partial transparency is a mixed output pixel. It does not include still-submerged shallows.
- **`-shoreline.png`**: white ocean-side historical shoreline, one output
  pixel wide. This cartographic line is derived from majority ocean/land
  coverage; width does not encode metres, confidence or positional accuracy.
- **`-excluded.png`**: fully transparent compatibility artifact. Modern snow and
  era ice sheets no longer suppress depth, land-change or shoreline pixels.

All four 8-bit file types use **RGBA, 8 bits per channel**, with white RGB
`(255, 255, 255)` and the original mask value in **straight (unassociated) alpha**.
Alpha 0 is fully transparent, 255 fully opaque, and intermediate values preserve
the original gradient. Even transparent pixels have white RGB to avoid dark
fringes when filtering. The 16-bit depth files retain their original grayscale encoding.

In an editor, place an 8-bit PNG above an image using normal alpha compositing.
For code, read the **alpha channel**, not RGB or a grayscale conversion:
`metres = alpha / 255 * era.preview_white_m`. RGB is constant white and carries
no magnitude data. To tint an overlay, replace RGB with the desired colour and
retain alpha. For example, with Pillow (images must share the same dimensions):

```python
from PIL import Image

base = Image.open("background.png").convert("RGBA")
overlay = Image.open("world-bc8000-depth-change-8bit.png").convert("RGBA")
Image.alpha_composite(base, overlay).save("composite.png")
```

`preview.png` compares the overlays composited on a dark background. `manifest.json` records source,
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

Snow and ice coverage do not exclude any coastal pixels. Coastal masks can be
composited independently of ice overlays, including across ice-covered terrain.
Bedrock-derived coastlines beneath ice are not surveyed ice-front boundaries.
The masks do not reconstruct regional land
movement, changing sediments, inland lakes or vegetation. Narrow straits,
small islands and the −3 m land-change scenario are resolution-sensitive.
Zero values also include unsupported areas; they are not evidence of no change.

## Reproduce

From the repository root, using the cached, pinned ETOPO source and existing
Python environment (`data-sources/textures/requirements-masks.txt`):

```bash
.venv/bin/python scripts/generate_coastal_depth_masks.py \
  --width 8192 --output output/coastal-depth-masks-v5
.venv/bin/python -m unittest discover -s scripts/tests -p test_coastal_depth.py -v
npm test
npm run build
```

Choose a fresh output directory. Generation is staged before publishing the
complete package. Source checksums and GeoTIFF registration are verified.
Generation requires several GB of RAM to classify the 21600 × 10800 source.
Depth and land-change data are freshly reduced from that native grid, and the
shoreline is derived on the new output grid. These are not enlarged older PNGs.

## Sources and interpretation

- **22,000 BCE:** Spratt and Lisiecki (2016),
  [A Late Pleistocene sea level stack](https://doi.org/10.5194/cp-12-1079-2016),
  [NOAA dataset](https://doi.org/10.25921/rd66-5820),
  [landing page](https://www.ncei.noaa.gov/access/paleo-search/study/19982),
  accessed 2026-09-19. The seven-record `SeaLev_shortPC1` at **24 ka BP** is
  **−130 m**, with source bootstrap standard deviation 4.38 m and reported
  95% interval **−134.58 to −118.09 m**. The target is 23,949 calendar BP:
  this is a +51-year nearest-snapshot approximation, with no interpolation.
  Published scaling is retained without additional zero-age rebasing; this
  proxy stack is not a direct exact-date observation. Only the central level
  is rendered; the source uncertainty is metadata, not an alpha probability or
  a confidence band for the coastline. The original NOAA text and selection
  record accompany the package in `provenance/`. The same published dataset is
  [archived by PANGAEA](https://doi.org/10.1594/PANGAEA.979830) under CC BY 3.0.
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

Keep this README and manifest with redistributed masks.
