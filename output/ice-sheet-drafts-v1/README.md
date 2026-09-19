# Ice sheet appearance drafts

Generated on 2026-09-17 using the built-in image_gen tool, following the repository's [editor guide](../../data-sources/textures/EDITOR-GUIDE.md). These are artistic experiments, not replacement evidence masks or application-ready textures.

| Era | Generated draft |
| --- | --- |
| 10,000 BCE | [PNG](world-bc10000-ice-draft.png) |
| 8,000 BCE | [PNG](world-bc8000-ice-draft.png) |
| 5,000 BCE | [PNG](world-bc5000-ice-draft.png) |
| 4,000 BCE | [PNG](world-bc4000-ice-draft.png) |
| 3,000 BCE | [PNG](world-bc3000-ice-draft.png) |

The intended treatment is snow-white accumulation zones, pale blue shading, and delicate glacial striations. Surface relief and crevasses are invented appearance details, not evidence about thickness or flow. Exact final prompts and reference inputs are recorded in [prompts.json](prompts.json).

## Review result

All outputs are 1774 × 887 RGBA PNGs despite requests for the original 4096 × 2048 grid. The generator also changes silhouettes, small components, and alpha. In particular, the 5,000 and 4,000 BCE drafts enlarge/add western patches that are absent or much smaller in their source masks. These drafts therefore fail the editor guide's geometry and alignment contract. They must not be used as scientific coverage masks. Before any integration, transfer only the desired color treatment onto the original full-resolution alpha, preserving that alpha byte-for-byte and checking for artifacts. No such transfer or application integration is included here.

Initial 5,000/4,000/3,000 BCE attempts incorrectly borrowed broad snow coverage from the modern baseline. Those variants were rejected; the saved retries use only the respective era mask. The 10,000/8,000 BCE drafts also used the Blue Marble image as a style reference. The baseline's original product/conversion provenance remains unresolved, as noted in the editor guide.

Source masks and uncertainty alternatives remain unchanged. Only central masks were used; minimum/maximum alternatives were not combined. Transparency does not establish ice absence, and the source reconstructions remain partial with scientific acceptance pending.

## Attribution and source records

All five eras derive from Dalton et al. (2023), NADI-1 v1 (2023-11-09), [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/): https://doi.org/10.5281/zenodo.8161764 and https://doi.org/10.1016/j.quascirev.2023.108345.

The 10,000 and 8,000 BCE masks additionally derive from Hughes et al. (2015 dataset; 2016 methods), DATED-1, PANGAEA.848117, [CC-BY-3.0](https://creativecommons.org/licenses/by/3.0/): https://doi.org/10.1594/PANGAEA.848117 and https://doi.org/10.1111/bor.12142.

See the unchanged [delivery era guides and evidence](../../data-sources/textures/masks/phase7-delivery/reconstruction-masks/README.md) for the exact source dates, +51-year offsets, source transformations, licenses, and era-specific limitations. Copies of the five ice manifests are included in `source-records/`; retain the original evidence delivery when sharing these derivatives. Additional modifications here are generative recoloring, invented surface detail, unintended boundary/alpha changes, and reduced image dimensions.
