# Editing the partial ice masks

This delivery contains evidence for **10,000, 8,000, 5,000, 4,000 and 3,000 BCE**.
Each has a central ice mask and minimum/maximum alternatives. The other 49 eras
have metadata only. These are partial regional reconstructions with scientific
acceptance pending. No exposed-land, flooded-land or seasonal-sea-ice mask is
delivered. The rejected coastal candidates are excluded.

In the extracted package, open `README.md`, choose an era, and follow its guide
to `evidence/eras/<slug>/ice/ice.png`. Each guide includes the source dates,
signed offsets, attribution, licenses, links and era-specific limitations.

## Image-editor workflow

1. Open your copy of `src/earthTextures/earth-blue-marble.jpg` from the repository
   as a **4096 × 2048** canvas. The baseline is not bundled in this delivery;
   its exact original product/conversion history remains unresolved. Its adopted
   alignment hash is recorded in every era manifest and `OUTPUT-CONTRACT.json`.
2. Import `ice.png` as a separate layer at its original dimensions. Keep its top
   left corner at **(0, 0)**, scale at 100%, and rotation at zero. Disable automatic
   trimming, cropping, resizing, flipping or warping. The grid is north-up,
   equirectangular: west/east edges −180°/+180°, top/bottom +90°/−90°; Greenwich
   and the equator meet at the centre. Pixel centres are offset half a pixel
   inside those edges; pixels represent areas, not grid nodes.
3. Use Normal compositing at 100% layer opacity. Empirical ice belongs above the
   baseline and any later supported coastal layers. White is ice coverage;
   transparency leaves the base unchanged. If recoloring, use the PNG's **alpha
   channel** as the selection/mask and preserve fractional edge alpha. Do not
   flatten against black or white before extracting alpha.
4. For uncertainty review, import `diagnostics/ice-minimum.png` and
   `diagnostics/ice-maximum.png` at the same position and switch between the
   three alternatives. Display one bound at a time. Do not stack, average,
   intersect or force them to nest: the source alternatives are sometimes
   nonnested. Alpha describes pixel coverage, not confidence or ice thickness.
5. Save edits in a separate project/output directory. Preserve the supplied PNGs
   and metadata so their checksums still verify. Keep the source credits and
   record any additional colorization or geometry edits with derived exports.
   Artistic rendering and application integration are subsequent tasks.

No blur, feathering, geometry dilation or minimum-opacity floor was applied.
Coverage uses `floor(255*f+0.5)`. Tiny polygon instances rounding to zero were
discarded with an audit; the delivery retains 70 such instances across the bounds.

## Interpreting coverage and dates

Transparency is **not confirmed ice absence**. The masks lack a global
presence/absence domain. Greenland, Antarctica, Iceland, unselected mountain
glaciers, independent shelf additions and seasonal sea ice remain unsupported.
Modern snow or ice visible underneath does not become paleo evidence. Grounded
and floating empirical ice are merged; no new floating-shelf boundary is inferred.
Lakes, inland-waterbody changes and vegetation changes are excluded. Ice presence
does not establish a traversable human route.

All seven selected dataset/age pairs are 51 years older than their era targets.
This offset is not a dating uncertainty interval. DATED-1 TS10 is an endpoint
approximation only for 8,000 BCE; it is not extended into the Holocene. No selected
source date is reused across catalog eras. Historical years have no year zero;
post-1950 dates retain negative calendar BP.

The 10,000 BCE central NADI-1 source has a recorded self-intersection. The 4,000
BCE NADI-1 6 ka open ring was explicitly closed in derived geometry, with the
operation recorded. Reference raster-transfer agreement does not confer
scientific acceptance on any era. See the bundled
`evidence/provenance/PHASE5-VALIDATION.md` and the per-era manifests.

## Attribution and verification

The per-era guides reproduce dataset-specific attribution, source citations and
license links from the pinned source manifests (NADI-1: CC-BY-4.0; DATED-1:
CC-BY-3.0). They also identify the modifications made during mask generation.
Original archives are not bundled; download locations, member hashes and
chronology remain in the evidence provenance. Keep those records with shared
derivatives and identify your further edits.

From the extracted `reconstruction-masks/` directory, verify all payload files:

```bash
sha256sum -c CHECKSUMS.sha256
```

This portable check requires no repository, database, Python environment or
network access. The enclosing `delivery.json` additionally hashes the ZIP and
payload; the repository's `validate-delivery` command verifies scientific-scope
metadata, all source/era contracts, guides, PNG encoding and archive contents.
These checks establish integrity and adherence to the stated scope, not
geological validation.
