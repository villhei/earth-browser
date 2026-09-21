# Coastal visualization baseline: 1950 CE = 0 m

Decision date: 2026-09-20. Explicit user instruction: “Please account for this
baseline change in the present day sea level, consider it the zero point.
re-execute the coastline generation script. Document the decision”.

## Decision

Use **1950 CE / 0 calendar BP as the present-day visualization reference**.
Modern Earth imagery and the existing ETOPO zero-level ocean provide the visual
baseline. Normalize the entire selected sea-level series by its published 0 BP
endpoint, **+8.49 m**:

`visualization_level(t) = published_level(t) - published_level(0 BP)`

This is one uniform **−8.49 m** shift after calendar-BP interpolation, applied to
all requested dates. It is not a Holocene-only adjustment, new sea-level source,
change to ETOPO elevations or modification of the original research data.

| Date | Published/interpolated level | Visualization level |
| --- | ---: | ---: |
| 123,000 BCE | −6.37103 m | −14.86103 m |
| 22,000 BCE | −129.93472 m | −138.42472 m |
| 1950 CE | +8.49 m | **0 m** |

## Scientific context and tradeoff

Spratt and Lisiecki (2016), section 3.3, deliberately calibrated the stack to
**0 m at 5 ka BP** and **−130 m at 24 ka BP**. They describe a Holocene trend
possibly related to sediment mixing (bioturbation), and chose the mid-Holocene
anchor to better represent mixing effects on older interglacial highstands.
The latest +8.49 m value is not an observation of a 1950 ocean above modern sea
level. The dataset already describes its vertical units relative to modern sea
level; its age origin (1950) is distinct from its fitted vertical calibration.

This requested normalization prioritizes a zero-change reference matching the
modern visualization. It intentionally changes the authors' calibration: their
24 ka −130 m anchor becomes **−138.49 m**, and their 5 ka 0 m anchor becomes
**−8.49 m**. It is not claimed to correct historical sea-level accuracy. Original
source-row uncertainties remain attached to their original values; no confidence
interval for the normalized differences is inferred without covariance data.

Sources: [Spratt and Lisiecki (2016), section 3.3](https://cp.copernicus.org/articles/12/1079/2016/cp-12-1079-2016.pdf#page=6)
and the [NOAA source table](https://www.ncei.noaa.gov/pub/data/paleo/contributions_by_author/spratt2016/spratt2016-noaa.txt).
The original pinned NOAA file remains unchanged in `sea-levels/`.

## Implementation and delivery

- Series generation defaults to `--baseline 1950`; `--baseline published`
  reproduces the former scaling. Legacy five-scenario generation is separate.
- Regenerate all **126 dates / 630 masks** at **8192 × 4096** from native ETOPO:
  1,000-year steps from 123,000 BCE through 1,001 CE, plus 1950 CE.
- Recalculate ocean connectivity, depths, exposed/flooded land and shorelines
  with the shifted levels. Old mask pixels cannot be corrected by changing only
  metadata or alpha values. No masks from the unnormalized v2 series are reused.
- At 1950, both depth-change files and land-change are zero/transparent. The
  shoreline file still draws the modern coastline; the exclusion file remains
  transparent. A zero-change mask does not imply there is no coastline.
- Format 7 records the original and applied levels, normalization formula,
  reference year/value and decision document. The CSV contains both scales.
  Original source rows, uncertainties, checksums and attribution are retained.
- Deliver to `output/coastal-masks-123000bce-1000yr-v3/` and a matching ZIP.
  Previous deliveries remain identifiable as using the earlier scaling.

```bash
.venv/bin/python scripts/generate_coastal_depth_masks.py --series \
  --start-year -123000 --end-year 1001 --step-years 1000 \
  --include-1950 --baseline 1950 --width 8192 \
  --output output/coastal-masks-123000bce-1000yr-v3
```
