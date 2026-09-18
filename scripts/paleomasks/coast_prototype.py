"""Illustrative Blue Marble shelf exposure, separate from accepted reconstructions.

The sea-level argument is a scenario parameter, not a fitted historical curve.
Classify the original ETOPO cells before reducing coverage to the image grid.
"""
from pathlib import Path
import argparse
import json
import tempfile

import numpy as np
from PIL import Image, ImageDraw
from scipy import ndimage as ndi

from .contract import DATA, ROOT, fingerprint, read_json, require, verify_file

FOUR = ndi.generate_binary_structure(2, 1)
SIZE = (4096, 2048)
BASE = ROOT / "src/earthTextures/earth-blue-marble.jpg"
ETOPO = DATA / "research-cache/ETOPO_2022_v1_60s_N90W180_bed.tif"


def connected_ocean(water):
    """Largest 4-connected water component, joining longitude but never poles."""
    labels, count = ndi.label(water, FOUR)
    require(count > 0, "No ocean cells")
    sizes = np.bincount(labels.ravel())
    parent = np.arange(count + 1)

    def root(i):
        while parent[i] != i:
            parent[i] = parent[parent[i]]
            i = parent[i]
        return i

    for a, b in zip(labels[:, 0], labels[:, -1]):
        if a and b:
            parent[root(b)] = root(a)
    roots = np.array([root(i) for i in range(count + 1)])
    totals = np.bincount(roots, weights=sizes, minlength=count + 1)
    totals[0] = 0
    return (roots == totals.argmax())[labels]


def exposed_shelf(elevation, sea_level, nodata=-99999):
    require(np.isfinite(sea_level) and -150 <= sea_level < 0,
            "Prototype sea level must be finite and between -150 m and 0 m (exclusive)")
    water = np.isfinite(elevation) & (elevation != nodata) & (elevation < 0)
    ocean = connected_ocean(water)
    # Do not convert disconnected depressions or newly isolated water into land.
    exposed = ocean & (elevation >= sea_level)
    return ocean, exposed


def reduce_coverage(mask, size):
    """Box-average native classifications; never threshold a smoothed DEM."""
    return np.asarray(Image.fromarray(mask.astype(np.uint8) * 255).resize(size, Image.Resampling.BOX))


def diffuse_colours(rgb, donors):
    """Multiscale normalized convolution, wrapping longitude only.

    Nearby land contributes fine colour, distant land a broad average. This
    avoids the large Voronoi wedges created by nearest-land sampling.
    """
    require(donors.any(), "No land texture donors")
    h, w = donors.shape
    small = (max(1, w // 4), max(1, h // 4))

    def resize(a, size, method):
        return np.asarray(Image.fromarray(a.astype(np.float32)).resize(size, method))

    weight = resize(donors, small, Image.Resampling.BOX)
    numerator = [resize(rgb[:, :, c] * donors, small, Image.Resampling.BOX) for c in range(3)]
    colour = np.broadcast_to(rgb[donors].mean(axis=0), (*weight.shape, 3)).copy()
    for radius in (96, 32, 8, 2):
        support = ndi.gaussian_filter(weight, radius, mode=("nearest", "wrap"))
        blend = (1 - np.exp(-support * 24))[:, :, None]
        local = np.stack([ndi.gaussian_filter(a, radius, mode=("nearest", "wrap")) /
                          np.maximum(support, 1e-12) for a in numerator], axis=2)
        colour = colour * (1-blend) + local * blend
    return np.stack([resize(colour[:, :, c], (w, h), Image.Resampling.BILINEAR) for c in range(3)], axis=2)


def synthesize(base, ocean_alpha, shelf_alpha, elevation):
    """Deterministic donor colouring and light relief, confined to exposure.

    RGB is used only for texture donors and conservative snow protection, never
    as the authority for modern ocean or exposure. No biome reconstruction.
    """
    rgb = base.astype(np.float32)
    snow = (rgb.min(axis=2) > 150) & (np.ptp(rgb, axis=2) < 45)
    alpha = shelf_alpha.copy()
    alpha[snow] = 0
    # Erode inland donors to avoid copying blue mixed shoreline pixels.
    land = ocean_alpha == 0
    inland = ndi.minimum_filter(land, size=5, mode=("nearest", "wrap"))
    donors = inland & ~snow & (np.ptp(rgb, axis=2) > 25) & (rgb[:, :, 2] < rgb[:, :, :2].max(axis=2))
    colour = diffuse_colours(rgb, donors)
    h, w = alpha.shape
    latitude = np.deg2rad(90 - (np.arange(h) + .5) * 180 / h)
    dy = np.gradient(elevation, axis=0) / (np.pi * 6371000 / h)
    dx = (np.roll(elevation, -1, axis=1) - np.roll(elevation, 1, axis=1)) / (
        2 * 2 * np.pi * 6371000 / w * np.maximum(np.cos(latitude[:, None]), .1))
    relief = np.clip(1 + 12 * (dx - dy), .90, 1.10)
    rng = np.random.default_rng(10000)
    grain = ndi.gaussian_filter(rng.normal(0, 1, alpha.shape).astype(np.float32),
                                sigma=1, mode=("nearest", "wrap"))
    colour = np.clip(colour * (relief + .07 * grain)[:, :, None], 0, 255)
    a = alpha.astype(np.float32)[:, :, None] / 255
    result = np.floor(rgb * (1-a) + colour * a + .5).astype(np.uint8)
    # Preserve every unmodified decoded Blue Marble pixel exactly in the PNG.
    result[alpha == 0] = base[alpha == 0]
    return result, alpha


def comparison(base, result, mask, bounds, path, sea_level):
    """Before / after / coverage; supports a viewport crossing the date line."""
    west, south, east, north = bounds
    w, h = SIZE
    cols = np.arange(int((west+180)/360*w), int((east+180)/360*w)) % w
    rows = slice(int((90-north)/180*h), int((90-south)/180*h))
    panels = [base[rows][:, cols], result[rows][:, cols], np.repeat(mask[rows][:, cols, None], 3, axis=2)]
    tile_w = 480
    tile_h = round(panels[0].shape[0] / panels[0].shape[1] * tile_w)
    plate = Image.new("RGB", (tile_w*3, tile_h+42), "#15202a")
    draw = ImageDraw.Draw(plate)
    for i, (panel, title) in enumerate(zip(panels, ("Modern Blue Marble", f"Prototype (assumed {sea_level:g} m)", "Exposed shelf coverage"))):
        plate.paste(Image.fromarray(panel).resize((tile_w, tile_h), Image.Resampling.LANCZOS), (tile_w*i, 42))
        draw.text((tile_w*i+12, 14), title, fill="white")
    plate.save(path)


def generate(output, sea_level):
    require(np.isfinite(sea_level) and -150 <= sea_level < 0, "Invalid sea-level scenario")
    output = output.resolve()
    require(not output.exists(), "Choose a fresh output directory")
    for directory in ("src", "public", "docs", "data-sources"):
        require(not output.is_relative_to(ROOT / directory), "Write prototypes under output/ or /tmp")
    selection = read_json(DATA / "SOURCE-SELECTION.json")
    source = next(item for item in selection["downloads"] if item["path"] == str(ETOPO.relative_to(DATA)))
    baseline = read_json(DATA / "OUTPUT-CONTRACT.json")["grid"]["alignment_reference"]
    verify_file(ETOPO, source)
    verify_file(BASE, baseline)
    output.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(prefix=".coast-prototype-", dir=output.parent) as staging:
        package = Path(staging) / "package"
        package.mkdir()
        print("Reading verified native ETOPO (21600 x 10800)", flush=True)
        Image.MAX_IMAGE_PIXELS = None
        with Image.open(ETOPO) as im:
            require(im.size == (21600, 10800), "Unexpected ETOPO grid")
            require(tuple(im.tag_v2[33550])[:2] == (1/60, 1/60), "Unexpected ETOPO cell size")
            require(tuple(im.tag_v2[33922])[3:5] == (-180., 90.), "Unexpected ETOPO origin")
            elevation = np.array(im)
        print("Classifying connected ocean and exposed shelves at source resolution", flush=True)
        ocean, shelf = exposed_shelf(elevation, sea_level)
        counts = {"native_ocean_cells": int(ocean.sum()), "native_exposed_cells": int(shelf.sum()),
                  "exposed_cells_at_or_above_modern_zero": int(np.count_nonzero(shelf & (elevation >= 0)))}
        ocean_alpha = reduce_coverage(ocean, SIZE)
        shelf_alpha = reduce_coverage(shelf, SIZE)
        del ocean, shelf
        relief = np.asarray(Image.fromarray(elevation.astype(np.float32)).resize(SIZE, Image.Resampling.BILINEAR))
        del elevation
        base = np.asarray(Image.open(BASE).convert("RGB"))
        require(base.shape == (SIZE[1], SIZE[0], 3), "Unexpected baseline size")
        print("Synthesizing land colour and comparison plates", flush=True)
        result, alpha = synthesize(base, ocean_alpha, shelf_alpha, relief)
        Image.fromarray(result).save(package / "blue-marble-coast-prototype.png")
        Image.fromarray(result).save(package / "blue-marble-coast-prototype.jpg", quality=94, subsampling=0, optimize=True)
        for name, array in (("exposed-shelf", shelf_alpha), ("applied-coverage", alpha), ("modern-ocean", ocean_alpha)):
            Image.fromarray(array).save(package / f"{name}.png")
        regions = {"world": (-180, -90, 180, 90), "sundaland": (90, -12, 125, 20),
                   "doggerland": (-12, 47, 15, 62), "beringia": (155, 52, 205, 73),
                   "persian-gulf": (44, 20, 60, 33), "sahul": (125, -22, 155, 0)}
        for name, bounds in regions.items():
            comparison(base, result, alpha, bounds, package / f"comparison-{name}.png", sea_level)
        counts.update({"applied_pixels": int(np.count_nonzero(alpha)),
                       "snow_protected_pixels": int(np.count_nonzero((shelf_alpha > 0) & (alpha == 0))),
                       "unmodified_pixels_changed": int(np.count_nonzero(np.any(result != base, axis=2) & (alpha == 0)))})
        manifest = {"kind": "illustrative_bathymetry_scenario", "era_preview": "world-bc10000",
                    "scientifically_validated": False, "sea_level_m": sea_level,
                    "sea_level_basis": "Explicit visual prototype assumption; not a selected historical curve",
                    "grid": {"width": SIZE[0], "height": SIZE[1], "bounds": [-180, -90, 180, 90]},
                    "inputs": {"etopo": source, "blue_marble": baseline},
                    "generator": fingerprint(Path(__file__)), "numpy": np.__version__,
                    "method": "Native negative ETOPO largest 4-connected component with longitude union; "
                              "exposure where sea_level <= elevation < 0; Pillow BOX coverage reduction; "
                              "inland RGB donors, multiscale normalized colour convolution, metric relief and seeded grain",
                    "counts": counts, "limitations": [
                        "Uniform sea-level scenario on modern bedrock; no regional land deformation correction.",
                        "10,000 BCE is the preview slot, not a validated date for the assumed sea level.",
                        "ETOPO connectivity is an approximate marine mask, not an independent coastline survey.",
                        "Bedrock beneath modern ice is not a coastline; bright baseline snow is conservatively protected.",
                        "No reconstructed inland lakes, vegetation, sediment change, or new ice extent.",
                        "Image/terrain registration and narrow-strait connectivity remain approximate.",
                        "The PNG preserves decoded baseline pixels outside applied coverage; JPEG is lossy."],
                    "artifacts": [{"path": p.name, **fingerprint(p)} for p in sorted(package.iterdir())]}
        (package / "manifest.json").write_text(json.dumps(manifest, indent=2)+"\n")
        require(not output.exists(), "Output was created concurrently")
        package.rename(output)
    print(f"Wrote {output}", flush=True)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--sea-level", type=float, required=True, help="Explicit illustrative sea level in metres; negative")
    parser.add_argument("--output", type=Path, required=True, help="Fresh output directory")
    args = parser.parse_args()
    generate(args.output, args.sea_level)
