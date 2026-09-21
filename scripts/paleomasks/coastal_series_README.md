# Coastal masks at 1,000-year intervals

Format 7 uses **1950 CE = 0 m** as the visualization baseline, subtracting
the published 0 BP value of **8.49 m** from every selected sea level. It retains
both original and normalized levels, with a common **160 m** 16-bit depth scale.
See `provenance/COASTAL-BASELINE-DECISION.md` for the explicit user decision and
scientific tradeoff. `--baseline published` retains the previous format-6 scaling.
The default series has **125 dates**, from **123,000 BCE to 1,001 CE**, at exactly
1,000 elapsed-year intervals. There is no year zero: the final dates are
2,000 BCE, 1,000 BCE, 1 CE and 1,001 CE. Read `index.csv` for all dates and levels;
the manifest is authoritative for custom ranges and output dimensions.
With `--include-1950`, append a separate **1950 CE reference endpoint** for
**126 dates / 630 masks**. The final gap is 949 years, outside the regular cadence.
The published 0 BP row is **+8.49 m**; its normalized value is **0 m**. Modern
ETOPO's 0 m datum is the comparison baseline. The manifest marks this date with
`reference_endpoint: true`. Its depth-change and land-change masks are empty;
its shoreline mask draws the modern coastline.

## Source and chronology

Spratt and Lisiecki (2016), *A Late Pleistocene sea level stack*,
https://doi.org/10.5194/cp-12-1079-2016;
NOAA dataset https://doi.org/10.25921/rd66-5820, retrieved 2026-09-19.
The original data and selection record accompany the package in `provenance/`.
The equivalent PANGAEA dataset https://doi.org/10.1594/PANGAEA.979830 is CC BY 3.0.
ETOPO 2022 bedrock input is NOAA's pinned 60 arc-second WGS84 grid, CC0-1.0;
source details and hashes are in `manifest.json`.

Each historical year is converted to calendar BP relative to 1950. The seven-record
`SeaLev_shortPC1` series covers 0–430,000 BP at 1,000-year sampling. Linearly
interpolate between the two bracketing source rows without extrapolation, then
subtract 8.49 m for the visualization. For example, 123,000 BCE is 124,949 BP,
between the 124 ka and 125 ka rows: its original interpolated −6.37103 m becomes
−14.86103 m. Source rows and `sea_level_source` stay on the published scale;
the era's `sea_level_m` is the normalized value used to generate masks.
All outputs are regenerated using their selected values, including dates that
also appear in older deliveries. Their numerical levels and masks can differ.

Source-row ages, values, uncertainty and interpolation weights are retained
for each era. Original uncertainty values are not converted into a new
interpolated confidence interval or mask opacity. This is a scaled proxy
reconstruction applied uniformly to modern terrain; it does not reconstruct
regional uplift/subsidence, sediment changes or accurately dated local coastlines.
The shift is an explicit visualization normalization, not a scientific correction:
the authors' −130 m at 24 ka and 0 m at 5 ka become −138.49 m and −8.49 m.
Original uncertainties do not describe the uncertainty of the normalized
differences, which would require a separate covariance treatment.

## Files

Every date has five 8192 × 4096 PNGs by default, on the existing equirectangular
PixelIsArea grid (north to south, west to east):

- `*-depth-change.png`: 16-bit unsigned magnitude, decode as
  `pixel / 65535 * 160 * era.depth_change_sign` metres.
- `*-depth-change-8bit.png`: white RGBA; alpha is relative intensity for that
  era, decode as `alpha / 255 * era.preview_white_m` unsigned metres. A zero-level
  scenario has transparent depth-change masks and a zero sign.
- `*-land-change.png`: white RGBA with newly exposed/flooded native-cell coverage
  in alpha, classified by the sign of the selected level.
- `*-shoreline.png`: white RGBA, one-output-pixel ocean-side shoreline.
- `*-excluded.png`: transparent white compatibility artifact; ice and snow do
  not exclude coastal pixels.

All 8-bit data reside in straight alpha, with white RGB including transparent
pixels. Coverage is reduced from the original 21,600 × 10,800 ETOPO cells.
Connectivity, 200–400 m offshore taper, rounding and shoreline extraction follow
the existing generator. The 16-bit scale is shared across eras; the normalized
8-bit intensity scale varies by era. Missing/zero effects are not evidence of
unchanged historical coastlines. `COASTAL-FORMAT.md` documents the common algorithm
and earlier deliveries; this README and manifest describe this series.

`preview-*.png` contact sheets show up to 12 eras each; they are diagnostics,
not masks. Artifact checksums, counts and input provenance are in `manifest.json`.
Preserve the documentation and source credits with redistributed masks.

## Regenerate

```bash
.venv/bin/python scripts/generate_coastal_depth_masks.py --series \
  --start-year -123000 --end-year 1001 --step-years 1000 \
  --include-1950 --baseline 1950 --width 8192 \
  --output output/coastal-masks-123000bce-1000yr-v3
```

Use a fresh output directory. Generation uses several GB of memory and writes
the completed package atomically. The five legacy scenarios remain available
without `--series`.
