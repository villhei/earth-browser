# Coastal mask series: 123,000 BCE onwards

**Superseded baseline:** The v1/v2 delivery described below preserves the
published scaling. The [baseline decision](COASTAL-BASELINE-DECISION.md) directs
regeneration as v3 with a uniform −8.49 m shift and **1950 CE = 0 m**. The current
package is `output/coastal-masks-123000bce-1000yr-v3/` and its matching ZIP;
verification is recorded in `output/coastal-masks-123000bce-1000yr-v3-verification.json`.
V3 regenerates all 630 masks from native terrain and records both scales.

Generated 2026-09-20 using the existing native-ETOPO coastal workflow, extended
to read the pinned Spratt–Lisiecki short sea-level stack for every date.

- Package: `output/coastal-masks-123000bce-1000yr-v2/` and matching ZIP.
- **125 dates**, at **1,000 elapsed-year intervals**, from **123,000 BCE** through
  **1,001 CE**. No year zero: the last four dates are 2,000 BCE, 1,000 BCE, 1 CE
  and 1,001 CE. A separately requested **1950 CE reference endpoint** brings
  the total to **126 dates**; the last gap is 949 years.
- **630 mask PNGs**, each **8192 × 4096**: 16-bit depth change, normalized RGBA
  depth change, land change, shoreline and transparent exclusion compatibility
  mask for every date. Eleven contact sheets are separate previews.
- All 16-bit depth masks use the same **160 m** scale; normalized RGBA intensity
  retains its per-era scale. Values are in straight alpha with white RGB.
- `index.csv` lists dates and levels. `manifest.json` records source-row ages,
  interpolation weights, original uncertainty, input/output hashes and encoding.

The series linearly interpolates `SeaLev_shortPC1` at each target calendar-BP
date, without extrapolation or zero-age rebasing. It replaces legacy sea-level
assumptions for this package only. For example, its 123,000 BCE scenario uses
−6.37103 m rather than the older +7 m assumption; 22,000 BCE uses −129.93472 m
rather than the older nearest-row −130 m value. This follows the selected proxy
stack; it does not establish exact regional historical sea levels. The 1950 CE
endpoint is the published **+8.49 m** value at 0 BP, not a zeroed modern coastline.
No zero-age rebasing is applied; modern ETOPO's zero remains the comparison datum.

The masks use modern bedrock without historical uplift/subsidence or sediment
corrections. Ice and snow do not exclude coastal pixels. The original source
bytes, previous packages and app textures remain separate.

Reproduce into a fresh directory:

```bash
.venv/bin/python scripts/generate_coastal_depth_masks.py --series \
  --start-year -123000 --end-year 1001 --step-years 1000 \
  --include-1950 --baseline published --width 8192 --output output/coastal-masks-123000bce-1000yr-v2
```

See [the series format and source guide](../../scripts/paleomasks/coastal_series_README.md)
for decoding and chronology. Verification is recorded in
`output/coastal-masks-123000bce-1000yr-v2-verification.json`: per-file checksums,
full decoded mask checks, independent source interpolation checks and ZIP CRCs.
The coastal Python suites pass 22 tests; Vitest passes 154 tests. The production
build passes using cached static datasets because PostGIS is unavailable; its
site output is isolated under `/tmp`.

The v2 delivery reuses the 125 fully verified v1 mask suites byte-for-byte and
generates only the new endpoint. `--reuse output/coastal-masks-123000bce-1000yr-v1`
enables this explicit reuse after source/date, grid, encoding and checksum checks.
The original manifest is preserved as `provenance/reused-manifest.json`.
