# Phase 4 operator directives — current scope

Received 2026-09-17. These explicit operator instructions supersede conflicting
earlier planning/contract requirements. Historical version-1 contracts and
source pins remain preserved. [OUTPUT-OVERLAY-CONTRACT.json](OUTPUT-OVERLAY-CONTRACT.json)
defines the new static-overlay delivery workflow. The fourth directive has now
been completed by the operator.

## Accepted directives

1. **Empirical ice takes precedence.** Although the supplied priority token is
   `ICE_MODEL`, its explicit rule gives empirical ice margin datasets absolute
   precedence over conflicting GIA terrain or marine predictions. Render ice
   over those predictions without changing the original terrain values or
   asserting that floating ice rests on land.
2. **One static ice overlay per era.** Include grounded ice and merge floating
   ice into the same layer. A grounding-versus-floating split is no longer a
   prerequisite for rendering supported combined ice extent. Combine geometry
   or native/subcell occupancy before raster reduction, so overlaps are counted
   once and disjoint subpixel pieces are retained. Missing regional evidence is
   still unavailable; this instruction does not supply new shelf boundaries.
3. **Blue Marble baseline; coastline changes only.** Use the existing Blue Marble
   base and alignment reference. PALEOMAP is rejected. Coastal outlines are
   enabled; inland-waterbody and vegetation/biome modifications are disabled.
   The single ice overlay is intended to sit above that base. Reconstruction
   dates and original input provenance remain required.

4. **Drop coverage that rounds to zero.** The operator completed the rule:
   “Discard the polygons/subpixels that round to 0”. Use the existing quantizer
   `floor(255*f+0.5)`; zero pixels are transparent. A polygon missed by sampling
   can be discarded only if analytic pixel coverage confirms it rounds to zero
   throughout. A sampling miss that would produce nonzero alpha still requires
   improved rasterization. Keep a loss audit; do not inflate geometry or impose
   minimum alpha. This resolves the earlier subpixel-policy decision.

## Implementation so far

`scripts/paleomasks/surface_policy.py` implements the independent composition
rule with tests for grounded/floating union, empirical ice over modeled marine
and land surfaces, unknown terrain, unchanged inputs, and union before pixel
reduction. `generate-overlays` merges the selected source polygons before
rasterization, publishes one `ice.png` per era with minimum/maximum diagnostic
alternatives, and records quantization drops. Ice is always the upper overlay
regardless of the underlying GIA/marine prediction. Original input bytes are
unchanged. A repeated endpoint is appended to the known unclosed source ring
in derived geometry, with the original endpoints and operation logged.

The existing version-1 validator continues to validate its historical evidence
packages. `validate-overlay` checks the new packages. Coastline changes remain
enabled but require their own image-baseline classification and ocean-connectivity
implementation; the ice overlay alone does not modify coastlines. Unselected
regional shelf extents and seasonal sea ice are not inferred from this directive.
