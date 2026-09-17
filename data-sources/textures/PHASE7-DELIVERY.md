# Phase 7 — editing package and verification

Completed 2026-09-17 as a **partial-evidence editing delivery**, retaining the
phase-5 scientific acceptance limits. The package accounts for all 54 eras:
five regional ice suites (15 RGBA PNGs) and 49 metadata-only unavailable eras.
Coastlines, seasonal sea ice and the 123,000 BCE flooded-land reconstruction
remain unavailable. Artistic rendering and renewed app integration are deferred.

## Deliverables

- [Portable ZIP](masks/phase7-delivery/reconstruction-masks.zip), 2,020,308 bytes.
- [Extracted package index](masks/phase7-delivery/reconstruction-masks/README.md),
  linking all 54 era guides, masks, provenance, attribution and limitations.
- [Editor guide](EDITOR-GUIDE.md) and [reproduction commands](REPRODUCING-MASKS.md),
  also bundled in the ZIP with the numerical environment requirements.
- [Tracked delivery inventory](PHASE7-DELIVERY.json), copied from `delivery.json`:
  hashes and sizes for the ZIP and all 173 payload files, including the checksum
  list. The checksum list covers the other 172 files and verifies offline.

Generated masks and the ZIP remain Git-ignored under `masks/`; implementation,
tests, usage documentation and this inventory are tracked. Recreate the package
using `package-delivery` and the existing phase-6 evidence, or regenerate the
evidence first using `expand-eras`. Fresh output directories are required.

```text
phase7-delivery/
  delivery.json
  reconstruction-masks.zip
  reconstruction-masks/
    README.md
    EDITOR-GUIDE.md
    REPRODUCING-MASKS.md
    requirements-masks.txt
    CHECKSUMS.sha256
    eras/<slug>.md                    # all 54 readable era guides
    evidence/                        # byte-preserved phase-6 package
      catalog.json
      provenance/
      eras/<slug>/manifest.json
      eras/<supported-slug>/ice/
        manifest.json
        ice.png
        diagnostics/ice-minimum.png
        diagnostics/ice-maximum.png
        provenance/
```

## Packaging guarantees and limits

`package-delivery` validates its input before copying it, stages the complete
delivery, checks the copied evidence, generated guides, source pins, checksums
and ZIP contents, then publishes atomically. It rejects symlinks, output inside
its evidence input, app/static-site destinations and existing output directories.
Failures leave no published partial delivery. Archive entries have stable order,
timestamps, permissions and stored bytes; identical inputs produce identical ZIPs.

`validate-delivery` checks all phase-6/overlay contracts, regenerates expected
era guides, checks the instruction-file pins, rejects extra or missing artifacts,
and verifies every archive entry against the extracted payload. A refreshed
checksum alone cannot promote unavailable layers or scientific acceptance.

No masks were recolored, resampled, flattened or repaired during packaging.
All 15 PNGs retain their phase-6 bytes (already matched to phase 4). The 70
zero-rounding polygon drops, three uncertainty alternatives, +51-year source
offsets and single DATED-1 TS10 endpoint exception remain recorded. Per-era
guides preserve dataset-specific credit, license links and modification notices.
No blanket replacement license is applied to the research sources.

The source topology defect at 10,000 BCE and logged 6 ka ring closure remain
explicit. Transparency still means unchanged baseline, not verified ice absence.
The rejected RGB coastal classifier and Alaska domain edge have not been fixed
or repackaged as valid shorelines. See [phase 5](PHASE5-VALIDATION.md) and
[phase 6](PHASE6-EXPANSION.md) for the retained scientific findings.

## Verification

- `validate-delivery` passes for all 54 eras and 15 PNGs. The ZIP was extracted
  to a fresh temporary directory; all 172 checksums passed, every PNG matched
  phase 6 byte-for-byte, and all 70 audited drops were retained.
- **75 distinct Python tests pass:** the numerical environment runs 75 tests,
  with four GDAL-dependent skips; those four pass under system Python. The
  system terrain run additionally repeats three numerical statistics tests.
- **64 Vitest tests pass**, including the delivery/catalog cross-check and
  instruction-file hash checks.
- `npm run build` encounters the existing sandbox `tsx` IPC `EPERM`. Equivalent
  Node-import export, TypeScript checking and Vite build all pass. Export uses
  existing static data because PostGIS is unreachable. Existing Vite CJS API
  and chunk-size warnings remain.
- No tracked app/site or source-selection changes. `git diff --check` passes.

Test coverage for phase 7's required scientific-processing invariants:

| Requirement | Regression coverage |
| --- | --- |
| BCE/CE without year zero; negative BP | `test_contract.py::test_absent_year_zero_and_negative_bp` |
| Signed offsets and endpoint handling | `test_contract.py::test_wrong_dates_offsets_and_unlisted_slice_reuse`, `test_expansion.py::test_endpoint_is_not_reused_in_holocene` |
| Raster alignment, holes, poles and antimeridian | `test_geometry.py` and independent `test_reference_gdal.py` |
| ICE/LAKE filtering and unknown categories | `test_geometry.py::test_ice_lake_filter_unknown_category_and_nadi_attributes` |
| Regional source union without seams/double counting | New `test_geometry.py::test_adjacent_sources_union_without_seam_gap_or_double_counting` |
| Coverage versus transparent/empty pixels | `test_geometry.py::test_coverage_distinguishes_unknown_from_supported_absence`, `test_confirmed_empty_requires_nonempty_supported_domain` |
| Land/ocean connectivity, basin, ice and NoData exclusions | `test_coasts.py`; `test_geometry.py::test_marine_changes_exclude_lakes_subglacial_unknowns_and_seams` |
| Empirical-ice priority and union before reduction | `test_surface_policy.py` |
| Scope, portable archive integrity, deterministic bytes and atomic failure | New `test_delivery.py`; existing `test_expansion.py` |

Synthetic classification tests establish software behavior; they do not override
the failed real-world Blue Marble coastal acceptance check. Phase 7 completes
packaging of the supported evidence, not phase 5's accepted-mask deliverable.
