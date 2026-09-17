# Experimental ice surface overlays

Ice sheets are enabled by default with **Blue Marble (Modern)** selected; use **Visuals → Ice sheet overlay** to toggle them. Coverage is available only for the exact 10,000, 8,000, 5,000, 4,000 and 3,000 BCE eras; other eras show the base texture.

`*-color.png` files are unmodified 1774 × 887 artistic drafts from the built-in image generator. Their boundaries are not reliable. `*-coverage.png` files are byte-for-byte copies of the original 4096 × 2048 central RGBA masks from `data-sources/textures/masks/phase7-delivery/reconstruction-masks/evidence/eras/<slug>/ice/ice.png`.

At runtime, the decorative color is scaled to the coverage grid over opaque white, then every alpha byte is replaced with the original mask alpha. This fills missing artwork with white, clips all invented ice, and preserves fractional coverage. No feathering, dilation, opacity floor, blending of uncertainty bounds, or interpolation across eras is applied. The layer uses the base sphere's equirectangular orientation and tessellation, with a small radial offset below the territory polygons. Changes dispose the old GPU layer and ignore obsolete asynchronous loads.

The apparent relief and striations are artistic details, not observations of ice thickness or flow. This is partial regional evidence with scientific acceptance pending. Transparency does not establish ice absence. Greenland, Antarctica, Iceland, unselected mountain glaciers, independent shelves, seasonal sea ice, coastlines, lakes and vegetation changes are unsupported. Modern snow and ice visible in the baseline remain modern. The baseline's original product/conversion history is unresolved.

The ice sphere sits 0.0005 globe radii above the base, below the minimum territory altitude of 0.001. The camera near plane is 1 scene unit to retain depth precision at the supported zoom distances and prevent the base and ice from interleaving during rotation.

## Credits and provenance

- All five eras: Dalton et al. (2023), NADI-1 v1 (2023-11-09), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), [dataset](https://doi.org/10.5281/zenodo.8161764), [methods](https://doi.org/10.1016/j.quascirev.2023.108345).
- 10,000 and 8,000 BCE additionally: Hughes et al. (2015 dataset; 2016 methods), DATED-1, PANGAEA.848117, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/), [dataset](https://doi.org/10.1594/PANGAEA.848117), [methods](https://doi.org/10.1111/bor.12142).

Source polygons were merged and rasterized in the existing reconstruction pipeline; see copied `source-records/*-ice-manifest.json` for dates, pins, changes and limitations. All seven selected source/age pairs are 51 years older than their target eras. DATED-1 TS10 is an endpoint approximation only for 8,000 BCE. The 10,000 BCE NADI central source has a recorded self-intersection; the 4,000 BCE 6 ka open ring was explicitly closed upstream. Minimum and maximum alternatives remain in the original evidence package.

Further modifications: generated RGB appearance (with unintended draft geometry changes), scaling of the decorative color only, opaque white filling, and restoration of source alpha at runtime. See `prompts.json` for exact generation prompts and inputs. Original source masks, manifests and alternative bounds are unmodified.
