# Additional reconstruction: 22,000 BCE

The additional snapshot targets **23,949 calendar BP (1950)**. It is available
to the mask generators independently of the 54-era historical territory catalog.
It does not add a territory dataset or a timeline entry to the app.

## Selected inputs

`RECONSTRUCTION-BC22000.json` pins all six new shapefile layers inside the
existing authenticated NADI-1 and DATED-1 archives. Original archive pins and
older selection records remain unchanged. Both sources use the **24,000
calendar BP** snapshot, a **+51-year offset**, without interpolation.

- North America: `24ka_cal_{OPTIMAL,MIN,MAX}_NADI-1_Dalton_etal_QSR`.
  [Dalton et al. (2023), NADI-1](https://doi.org/10.5281/zenodo.8161764), CC BY 4.0.
- Eurasia: `TS24_{mc,min,max}`.
  [Hughes et al., DATED-1](https://doi.org/10.1594/PANGAEA.848117), CC BY 3.0.
- Sea level: [Spratt and Lisiecki (2016)](https://doi.org/10.5194/cp-12-1079-2016),
  [NOAA dataset](https://doi.org/10.25921/rd66-5820),
  [landing page](https://www.ncei.noaa.gov/access/paleo-search/study/19982),
  retrieved 2026-09-19. The seven-record short PC1 stack at 24 ka gives **−130 m**,
  standard deviation **4.38 m**, and a published 95% interval **−134.58 to
  −118.09 m**. Original data are retained in `sea-levels/spratt2016-noaa.txt`.
  Source scaling is retained, with no additional zero-age rebasing. The source
  describes values as metres above modern sea level; this is a scaled proxy
  reconstruction, not a direct observation at 22,000 BCE. The same published
  dataset is [archived by PANGAEA](https://doi.org/10.1594/PANGAEA.979830) under
  CC BY 3.0.

The sea-level estimate is applied uniformly to modern ETOPO terrain. It does
not incorporate regional land deformation, sediment changes, or a local
sea-level model. Its source uncertainty is recorded but only the central
scenario is rendered. Greenland, Antarctica, Iceland, peripheral glaciers and
seasonal sea ice retain the existing coverage gaps.

## Geometry inspection

OGR inspection of the six native shapefiles found self-intersections in NADI-1
MIN features 0 and 5, and OPTIMAL feature 21. The inspected NADI-1 MAX and all
three DATED-1 layers passed that topology check. Original geometry is preserved;
these are partial source-derived overlays with scientific acceptance pending.
The generation manifest records any ring closures and sampling refinements.
Higher resolution does not resolve source topology uncertainty.

## Generate

```bash
.venv/bin/python scripts/generate_reconstruction_masks.py generate-overlays \
  --all-supported --width 8192 --output output/ice-masks-8192-v2
.venv/bin/python scripts/generate_coastal_depth_masks.py \
  --width 8192 --ice-root output/ice-masks-8192-v2 \
  --output output/coastal-depth-masks-v4
```

To generate just the new ice suite, replace `--all-supported` with
`--era world-bc22000`. Use fresh output directories. The current delivery
copies the previous five verified ice suites unchanged and generates the new
sixth suite; a complete regeneration uses the command above.

The new ice package contains central/minimum/maximum RGBA masks. The coastal
package contains all five eras and uses format version 4: **read
`era.depth_white_m` when decoding 16-bit depth masks**. The new era uses a
160-metre maximum, while the original four retain their 64-metre scale and
pixel values. The normalized RGBA overlays remain directly usable in an editor.
