# Phase 3: reconstruction mask contract, version 1

Defined 2026-09-17 for [PLAN.md](PLAN.md), using the pinned decisions in
[SOURCE-SELECTION.md](SOURCE-SELECTION.md) and [SOURCE-SELECTION.json](SOURCE-SELECTION.json).
[OUTPUT-CONTRACT.json](OUTPUT-CONTRACT.json) is the machine-readable grid, layer
registry and naming contract. This document defines the metadata and semantic
requirements. [examples/world-bc10000.manifest.json](examples/world-bc10000.manifest.json)
is a metadata-only example of the current reference-era disposition. No masks
are generated or scientifically validated by phase 3. Contract validation and
raster generation are phase-4 work; JSON parsing alone is not validation.

## 1. Shared grid and alignment

All masks and coverage rasters use grid `earth-equirectangular-4096-v1`:

| Property | Required value |
| --- | --- |
| Dimensions | 4096 columns × 2048 rows, including regional products |
| Mapping | Equirectangular / plate carrée, equally spaced longitude and latitude |
| Horizontal reference | WGS84; EPSG:4326, explicitly serialized longitude then latitude |
| Outer edges | West −180°, east +180°, north +90°, south −90° |
| Registration | Pixel-is-area; coordinates below refer to outer edges unless called centres |
| Pixel size | 0.087890625° × 0.087890625° |
| Orientation | Row 0 at north; column 0 at west; east to the right, south downward |
| GDAL-order affine transform | `[-180, 0.087890625, 0, 90, 0, -0.087890625]` |
| Meridian/equator | Longitude 0 at edge x = 2048; latitude 0 at edge y = 1024 |
| Seam | −180°/+180° is the shared outer seam; no duplicate column or pole row |

For zero-based column `c` and row `r`, the centre is
`lon = -180 + (c + 0.5) * 360 / 4096`,
`lat = 90 - (r + 0.5) * 180 / 2048`. The first centre is
`(-179.9560546875, 89.9560546875)`; the last is
`(179.9560546875, -89.9560546875)`. Geographic coordinates map to continuous
pixel edges by `x = (lon + 180) * 4096 / 360`,
`y = (90 - lat) * 2048 / 180`.

Normalize point longitudes to [−180, 180); +180 aliases −180. For point lookup,
use floor(x), floor(y), with the exact south pole assigned to row 2047. Vector
edges may use +180 as a clipping boundary. Preserve polygon interiors when
splitting antimeridian crossings; a crossing must not fill the long way around
the world. Polar caps must retain pole inclusion after reprojection. No texture
flip, longitude rotation, half-pixel shift, crop, padding or per-region resizing.

The alignment reference is the existing 4096 × 2048
`src/earthTextures/earth-blue-marble.jpg`, SHA-256
`228deba2e4b600146bdcb6cfa359b8ead6aacc2b1c13550a29cd82824cfa1c01`.
Visual inspection confirms the north-up, Atlantic-centred orientation. This
contract adopts its conventional full-world plate-carrée registration; the JPEG
has no authenticated georeferencing history, so pixel-accurate coastline
agreement is not asserted. Do not georeference by matching its ice or shoreline
colours. Later validation must compare known geographic landmarks, the seam and
poles on a separate diagnostic overlay. A changed reference hash requires an
explicit alignment review. The original image's source identity and rights
remain unresolved as recorded in phase 2.

## 2. Independent output layers

The registry contains six files/classes (seasonal sea ice has two outputs).
Colours identify classes for editing; they have no scientific meaning.

| Class / filename stem | Solid RGB | Meaning within supported coverage |
| --- | --- | --- |
| `exposed-land` | `#D9A441` | Modern marine area that is non-marine terrain at the target epoch |
| `flooded-land` | `#2878B5` | Modern non-marine terrain that is marine at the target epoch |
| `grounded-ice` | `#FFFFFF` | Ice supported by bedrock, including validated marine-grounded ice |
| `floating-shelf` | `#9ADBE8` | Floating glacier-derived shelf ice, separately classified from grounded ice |
| `winter-sea-ice` | `#6B8CFF` | Frozen seawater extent for the specified local winter sampling period |
| `summer-sea-ice` | `#BE9BFF` | Frozen seawater extent for the specified local summer sampling period |

Let `M` and `T` denote validated modern and target marine classifications on a
common geographic domain. Exposed land is `M ∩ not(T)`; flooded land is
`not(M) ∩ T`. Both classifications must be known at a location. Record the
modern reference epoch/product and the target vertical reference separately;
the JPEG is not the modern classification. These are marine-change masks,
not whole land masks, vegetation maps or ice-free-land maps. Grounded ice may
overlay non-marine terrain. Exclude inland waters and changes to lake basins
from the comparison domain rather than exporting lake gains/losses. Unknown
subglacial depressions, ocean connectivity and ice/terrain conflicts also stay
outside that domain. Modern negative bed elevation alone establishes neither
modern ocean nor target ocean. No modern shoreline classification is yet
validated; land-change output therefore remains unavailable.

Grounded ice, floating shelves and sea ice must be disjoint at the classification
resolution for a given scenario and season. Fractional pixels can contain more
than one adjacent class; this is not permission to double-classify the same
area. Sea ice excludes shelves and grounded ice. Raw NADI-1 or DATED-1 margins
are **unclassified evidence**, not a seventh production layer and not an
automatic grounded-ice mask. Keep them, if rendered, under `diagnostics/` with
`ice-margin-evidence` in the filename. No ground/shelf classification from
overlap with the modern sea alone.

For a future monthly modern sea-ice product, version 1 uses March (NH winter),
September (NH summer), September (SH winter), March (SH summer), each in the
catalog CE year. These are fixed seasonal samples, not a claim about that
year's maximum/minimum. NH and SH are separate products. Threshold monthly
mean concentration at `>= 0.15` before rasterization; alpha represents spatial
extent coverage, not concentration. Record the concentration algorithm and
missing-data flags. An extent-only source must document an equivalent
convention. No climatology or different observation year is silently substituted.
A paleo seasonal product must state its own published months/season,
hemisphere and temporal aggregation; a generic ice margin cannot supply it.
Changing the modern sampling convention requires a contract version change.
Seasonal evidence supports no claim of safe or historical human passage.

## 3. PNG encoding and coverage

Production masks are PNG colour type 6, 8-bit RGBA, straight/unassociated alpha,
with the registry RGB at every pixel with alpha > 0 and `(0,0,0,0)` at alpha 0.
RGB is sRGB; alpha is linear coverage and must never undergo gamma correction.
No base image, labels, shading, gradients, colourization, dilation, feathering,
blur or uncertainty encoded as opacity. Interior coverage is alpha 255.

For boundaries, alpha is `floor(255 * f + 0.5)`, where `f` is the fraction of
the pixel rectangle covered by classified geometry **inside the supported
domain**, measured in the equirectangular image plane. This is not geodesic
area or confidence. Record the area-coverage algorithm, any subpixel sampling
factor and convergence/error check. Supersampling, if used, must use regular
subcell centres and box averaging, not ringing filters. Source classification
precedes reduction to this grid; do not bilinearly downsample elevation and
then classify it. An output must not be declared empty because positive
features vanished during rasterization/quantization; report and resolve that
loss before publishing.

Every published mask, even a globally covered or confirmed-empty mask, has:

1. A companion **coverage PNG**, colour type 0, 8-bit grayscale on the same
   grid. Its value is `floor(255 * k + 0.5)`, where `k` is the fraction with
   supported class-presence **and class-absence** assessment. It is data, not
   artwork, and has no gamma correction or alpha channel.
2. A GeoJSON Polygon/MultiPolygon supported-domain file in longitude/latitude,
   with an evidence-based domain rationale, exclusions and source ownership in
   metadata. Preserve holes and split the antimeridian. An archive's bounding
   box or the positive ice polygon is not automatically a coverage domain.

Clip the class to that domain before measuring alpha; mask alpha must be no
greater than coverage at every pixel. Coverage 0 means unknown, including
unresolved class or seam conflicts. Coverage 255 with alpha 0 means supported
absence of **this class** for this source scenario/date, subject to the declared
uncertainty. Partial coverage leaves the remaining pixel fraction unknown;
an alpha of 0 there cannot establish full-pixel absence. Coverage values are
rounded; use the domain geometry when exact edge membership matters.
Never normalize class alpha by the known fraction. Coverage is class-, region-,
scenario- and date-specific, not a shared "we downloaded this continent" mask.

## 4. Availability, regions and uncertainty

Each era manifest must contain all six class entries, including unavailable
ones. `coverage_status` is a global assessment for that class:

| Status | Required representation |
| --- | --- |
| `unavailable` | `products: []`; region reasons describe missing evidence/gates; no placeholder mask |
| `partial` | At least one supported product, but global coverage is incomplete; missing regions remain explicit |
| `complete` | Supported domain union is global for each delivered scenario, including supported absence; no unresolved gaps |

Each region entry has `id`, `coverage_status` (`unavailable`, `partial`,
`complete`, evaluated against that declared region), `reason`, and `source_ids`.
Regions describe scientific ownership, not arbitrary rectangles. Their exact
supported portion is in each product's domain geometry. Unlisted geography
is always unavailable; record a `rest-of-world` entry for partial deliveries.
Use `north-america-nadi1`, `eurasia-dated1`, `nh`, `sh` or `global` as applicable;
new names require a documented geographic scope. Greenland is excluded from
NADI-1 ownership. DATED-1 does not own Greenland or Iceland. Do not union
conflicting regional sources; retain an unknown seam until reconciled.

Each product has `presence: present | confirmed_empty`, independently of its
region's coverage completeness. `confirmed_empty` requires a nonempty supported
domain and explicit evidence of no class presence throughout that domain; its
mask is all transparent and its coverage is still supplied. A regional empty
product cannot establish global absence. A class may thus be `partial` with
only regionally confirmed-empty products. Missing inputs, rejected categories,
NoData, unclassified marine ice and processing failures are not confirmed empty.

Use `central`, `minimum`, `maximum` variants for the selected ice suites,
mapping NADI-1 OPTIMAL/MIN/MAX and DATED-1 mc/min/max respectively. Preserve
all three independently with source member names, processing and coverage;
never turn their differences into alpha probabilities. Bound labels are the
authors' alternative extents, not statistical confidence intervals or assured
nested geometry. Validate nesting without silently repairing/reordering sources.
If a bound cannot be classified, keep the family gated and record the reason.
Other supported products use `central` unless a separately reviewed scenario
is introduced. Global completeness is never inferred from the central member
alone. `complete_global_set` is true only when every class is complete and all
required scenarios and seasons have passed validation.

## 5. Time and source-use contract

Use the catalog's exact `slug` and `year_start`; historical year zero is invalid.
For `year_start < 0`, target BP is `-year_start + 1949`; for positive years it
is `1950 - year_start`. Thus 1 BCE = 1950 BP, 1 CE = 1949 BP, and 2010 CE =
−60 BP. BP has the 1950 reference epoch. Exact arithmetic does not assert
year-level scientific accuracy. Never round stored dates to a display label.

Every dated source use records original age value/unit/system, published
calibration method, source calendar BP, target calendar BP, and signed
`source_minus_target_years = source_calendar_bp - target_calendar_bp`.
Keep numeric age uncertainties/intervals when supplied, or explicitly mark
them unquantified; do not invent ±51-year error bars from a slice offset.
Record an observation interval for modern products. Modern reference terrain
with an unspecified acquisition interval has a null source BP/offset with a
reason; do not pretend ETOPO's release year dates all its elevations.

Permitted margin uses are **exactly** the seven source/target pairs in
`OUTPUT-CONTRACT.json`, copied from phase 2. All have +51-year offsets. Only
DATED-1 TS10 → `world-bc8000` / 9949 BP may use
`endpoint_approximation`. It is not a generic ±51-year tolerance or permission
to extrapolate through the Holocene. NADI-1 10 ka is a normal nearest selected
slice. No polygon interpolation, unlisted reuse or scalar sea-level fallback
is authorized. A new scientific selection requires updating the source record
and explicitly reviewing the contract. A repeated slice must retain the same
dataset/member identity and list other era uses; re-exporting does not make
an independent reconstruction.

All 54 dispositions in the pinned selection record remain authoritative.
Phase 3 maps `regional_margin_evidence_selected_classification_pending` to
**unavailable grounded-ice output with retained evidence**, not partial output.
At present all six classes remain unavailable for all eras. In particular no
DATED Holocene reuse, blanket modern approximation, Last Interglacial +7 m
shoreline, or observational 1960 satellite sea ice is introduced.

## 6. Directory and metadata contract

Use `data-sources/textures/masks/v1/<catalog-slug>/` for eventual packages:

```text
manifest.json
masks/<class>--<region>--<variant>.png
coverage/<class>--<region>--<variant>.png
coverage/<class>--<region>--<variant>.geojson
diagnostics/<descriptive-name>.<extension>
provenance/OUTPUT-CONTRACT.json
provenance/OUTPUT-CONTRACT.md
provenance/SOURCE-SELECTION.json
provenance/SOURCE-SELECTION.md
provenance/<additional-pinned-records>
```

No spaces, date rounding, database numeric IDs, or source ages in product
filenames. Tuple `(class, region, variant)` is unique per era package. A package
is one reviewed revision; do not silently overwrite a published revision.
Metadata references are relative to the era directory and must resolve inside
it (no absolute paths, `..` or remote output files). Original-input retrieval
URLs and repository reference paths are provenance strings, not package paths.
Keep diagnostics outside production layers. Do not put masks in `docs/`,
`public/`, `src/earthTextures/`, or the application texture registry in this phase.

`manifest.json` is UTF-8 JSON with these required top-level fields:

| Field | Contract |
| --- | --- |
| `contract_version`, `grid_id` | `1.0.0`, `earth-equirectangular-4096-v1` |
| `record_kind` | `example` or `delivery`; examples never advertise artifact files |
| `era` | `slug`, integer `year_start`, `target_calendar_bp`, `age_system: calendar BP (1950)` |
| `provenance_records` | Path and SHA-256 for copies of the four contract/selection records above; examples may instead identify repository records |
| `sources` | Source register as specified below, including selected but blocked evidence |
| `layers` | Exactly six entries with `class`, `coverage_status`, `regions`, `products` |
| `complete_global_set` | Boolean, subject to section 4 |
| `limitations` | Nonempty list of specific temporal, geographic and classification limitations |

Each `sources` entry requires a unique `id`, title, version, citations (dataset
and methods), license identifier/terms URL and attribution, source role, original
input retrieval URL and SHA-256/byte count, native horizontal CRS, chronology
and uncertainty. For shapefiles, list archive member stems and checksums for
every consumed component, including auxiliary metadata if used; refer to the
pinned archive for anything not yet consumed. For not-acquired source families,
state that explicitly and leave artifacts empty; these cannot back products.
Do not assign the repository license to third-party data. Preserve authors,
dataset-specific terms, access dates when known, and processing-change notices
in every deliverable; unknown access dates must remain unknown. `source_role`
distinguishes unclassified margin evidence, terrain reference, target terrain,
modern marine classification, grounding evidence and classified ice.

Every product requires the following metadata alongside its PNG (inside the
same manifest; no dependence on an editor retaining embedded PNG metadata):

| Field | Required content |
| --- | --- |
| `region`, `variant`, `presence` | Ownership ID, scenario and presence state from section 4 |
| `mask`, `coverage`, `domain` | Objects with relative `path`, file `bytes`, SHA-256; pixel assets also declare dimensions/mode/grid ID |
| `source_uses` | Source-register IDs, exact consumed members, source variant, original chronology/calibration, target/source BP, signed offset, match policy, interpolation policy (`none`), other eras reusing the slice, temporal uncertainty |
| `classification` | Definition, evidence and predicates separating classes; modern marine baseline and epoch for land change; explicit lake exclusion, grounding and ocean-connectivity rules, unresolved/excluded areas |
| `season` | Null for nonseasonal products; otherwise hemisphere, season, calendar months, year or dated interval, aggregation, concentration/extent threshold and missing-data rules |
| `coverage_assessment` | Domain rationale/citations, presence-and-absence support, region exclusions, source ownership, seam decisions and confirmation evidence for an empty product |
| `processing` | Exact command, generator revision and dirty-patch hash if applicable, dependency versions, input hashes, reprojection pipeline/axis order, geometry repair/filter logs, native and working resolution, vertical datum/units/transforms, sea-level treatment, resampling/raster-coverage parameters and PNG encoder settings |
| `uncertainty` | Spatial bounds and their companion product IDs; dating error or explicit unknown; model differences, resolution limits, class ambiguity, seam conflicts and exclusions; no probability inferred from alpha |
| `validation` | Checks performed, evidence/report references, results and unresolved limits; publish only passed products |
| `attribution` | Source IDs plus readable combined credit, dataset-specific license notices and description of modifications |

An unavailable layer has no fabricated product metadata, checksums, coverage
polygon or transparent PNG. Its reasons and selected evidence still belong in
the manifest. Null values require an explanation; omitted required metadata,
missing consumed files and incompatible references must fail delivery validation.
Source references are expanded through the bundled register, so copying an era
package preserves every output's provenance.

## 7. Phase-4 acceptance gates

Implement validation for the above invariants before writing final artifacts.
Check catalog/selection consistency for all 54 eras; absent year zero, negative
BP and signed offsets; the single named endpoint exception; all three uncertainty
members; correct pixel centres/orientation/seam/poles; holes and class filtering;
mask/coverage clipping and empty-versus-unavailable behavior; safe paths and
artifact hashes. Test unavailable marine regions independently of transparent
pixels. Scientific coverage must be established before declaring partial or
complete output, and a rasterizer must fail rather than silently omit inputs.

Acquire and pin regional terrain members and a valid modern marine baseline
before land change; validate vertical references, ocean connectivity and GIA
seams. Establish grounding interpretation and supported domains before turning
selected margins into grounded ice. The current example deliberately has no
PNG paths. The reference-era generation and published-reconstruction comparison
remain phases 4–5, not accomplishments of this contract.
