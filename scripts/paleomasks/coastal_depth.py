"""Bathymetric coastal scenarios, independent of application textures.

Classify native ETOPO before reducing to the ice masks' equirectangular grid.
Sea levels are inherited visual assumptions, not calibrated reconstructions.
"""
import argparse
import json
from pathlib import Path
import tempfile

import numpy as np
from PIL import Image, ImageDraw
import PIL

from .coast_prototype import BASE, ETOPO, SIZE, connected_ocean, reduce_coverage
from .contract import DATA, ROOT, fingerprint, read_json, require, verify_file

ERAS = {"world-bc123000": 7., "world-bc10000": -55.,
        "world-bc8000": -25., "world-bc5000": -3.}
SCALE_M = 64.
FADE_START_M = 200.
FADE_END_M = 400.
NODATA = -99999.


def ocean_at_level(elevation, level):
    require(np.isfinite(level) and abs(level) <= SCALE_M, "Invalid sea level")
    return connected_ocean(np.isfinite(elevation) & (elevation != NODATA) & (elevation < level))


def coastal_change(elevation, modern_ocean, era_ocean, level):
    """Return magnitude in metres, tapered offshore, plus land-change membership.

    For retreating seas, stranded water below the new level remains unknown.
    For rising seas, only connected flooding of nonnegative terrain is added.
    """
    require(np.isfinite(level) and abs(level) <= SCALE_M, "Invalid sea level")
    require(elevation.ndim == 2 and all(a.shape == elevation.shape and a.dtype == bool
            for a in (modern_ocean, era_ocean)), "Misaligned ocean grids")
    valid = np.isfinite(elevation) & (elevation != NODATA)
    z = np.where(valid, elevation, 0).astype(np.float32)
    modern_depth = np.maximum(-z, 0)
    era_depth = np.maximum(level - z, 0)
    shallow_depth = np.minimum(modern_depth, era_depth)
    t = np.clip((shallow_depth - FADE_START_M) / (FADE_END_M - FADE_START_M), 0, 1)
    weight = 1 - t * t * (3 - 2 * t)
    if level < 0:
        changed_land = modern_ocean & (z >= level)
        domain = modern_ocean & (era_ocean | changed_land)
    else:
        changed_land = era_ocean & (z >= 0)
        domain = modern_ocean | changed_land
    magnitude = np.abs(modern_depth - era_depth) * weight
    magnitude[~(domain & valid)] = 0
    return magnitude, changed_land & valid


def quantize(magnitude, maximum, bits):
    require(bits in (8, 16) and np.isfinite(maximum) and maximum > 0, "Invalid encoding")
    require(np.isfinite(magnitude).all() and (magnitude >= 0).all(), "Invalid magnitudes")
    return np.floor(np.clip(magnitude / maximum, 0, 1) * (2 ** bits - 1) + .5).astype(
        np.uint8 if bits == 8 else np.uint16)


def shoreline(ocean, land):
    """One output-cell ocean-side line; wrap longitude, never latitude."""
    adjacent = np.roll(land, 1, axis=1) | np.roll(land, -1, axis=1)
    adjacent[1:] |= land[:-1]
    adjacent[:-1] |= land[1:]
    return ocean & adjacent


def save_png(path, array):
    Image.fromarray(array).save(path, compress_level=9)


def make_preview(package, images):
    tile_w, tile_h = 1024, 512
    plate = Image.new("RGB", (tile_w * 2, (tile_h + 56) * 2 + 48), "#171b20")
    draw = ImageDraw.Draw(plate)
    for i, (slug, mask) in enumerate(images.items()):
        x, y = (i % 2) * tile_w, (i // 2) * (tile_h + 56)
        label = f"{int(slug.split('bc')[1]):,} BCE | assumed sea level {ERAS[slug]:+g} m"
        draw.text((x + 16, y + 12), label, fill="white")
        draw.text((x + 16, y + 30), f"Black = zero; white = {abs(ERAS[slug]):g} m tapered depth change", fill="#bfc6cd")
        plate.paste(Image.fromarray(mask).resize((tile_w, tile_h), Image.Resampling.BOX), (x, y + 56))
    draw.text((16, plate.height - 32), "Illustrative uniform sea levels. Each panel uses its own scale. Not calibrated paleocoastlines.", fill="white")
    plate.save(package / "preview.png")


def generate(output):
    output = output.resolve()
    require(not output.exists(), "Choose a fresh output directory")
    for directory in ("src", "public", "docs", "data-sources"):
        require(not output.is_relative_to(ROOT / directory), "Write separate masks under output/ or /tmp")
    selection = read_json(DATA / "SOURCE-SELECTION.json")
    source = next(item for item in selection["downloads"] if item["path"] == str(ETOPO.relative_to(DATA)))
    baseline = read_json(DATA / "OUTPUT-CONTRACT.json")["grid"]["alignment_reference"]
    verify_file(ETOPO, source)
    verify_file(BASE, baseline)
    output.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(prefix=".coastal-depth-", dir=output.parent) as staging:
        package = Path(staging) / "package"
        package.mkdir()
        print("Reading pinned native ETOPO and checking grid registration", flush=True)
        Image.MAX_IMAGE_PIXELS = None
        with Image.open(ETOPO) as im:
            require(im.size == (21600, 10800), "Unexpected ETOPO size")
            require(tuple(im.tag_v2[33550])[:2] == (1 / 60, 1 / 60), "Unexpected ETOPO cell size")
            require(tuple(im.tag_v2[33922]) == (0., 0., 0., -180., 90., 0.), "Unexpected ETOPO origin")
            keys = im.tag_v2[34735]
            geokeys = {keys[i]: keys[i + 3] for i in range(4, len(keys), 4)}
            require(geokeys[1025] == 1 and geokeys[2048] == 4326, "Expected WGS84 PixelIsArea")
            require(float(im.tag_v2[42113]) == NODATA, "Unexpected nodata")
            elevation = np.array(im)
        with Image.open(BASE) as im:
            rgb = np.asarray(im.convert("RGB"))
        require(rgb.shape == (SIZE[1], SIZE[0], 3), "Unexpected baseline size")
        snow = (rgb.min(axis=2) > 150) & (np.ptp(rgb, axis=2) < 45)
        del rgb
        print("Classifying modern ocean with longitude-seam connectivity", flush=True)
        modern = ocean_at_level(elevation, 0)
        previews, eras = {}, []
        for slug, level in ERAS.items():
            print(f"Generating {slug}: {level:+g} m scenario", flush=True)
            era_ocean = ocean_at_level(elevation, level)
            magnitude = np.empty_like(elevation, dtype=np.float32)
            changed = np.empty_like(modern)
            for row in range(0, elevation.shape[0], 128):
                sl = slice(row, row + 128)
                magnitude[sl], changed[sl] = coastal_change(elevation[sl], modern[sl], era_ocean[sl], level)
            native_changed = int(changed.sum())
            reduced = np.asarray(Image.fromarray(magnitude).resize(SIZE, Image.Resampling.BOX)).copy()
            # Float BOX accumulation can overshoot a constant by a few ULPs.
            np.clip(reduced, 0, abs(level), out=reduced)
            del magnitude
            coverage = reduce_coverage(changed, SIZE).copy()
            del changed
            ocean_alpha = reduce_coverage(era_ocean, SIZE)
            del era_ocean
            land_alpha = reduce_coverage(np.isfinite(elevation) & (elevation != NODATA) & (elevation >= level), SIZE)
            coast = shoreline(ocean_alpha >= 128, land_alpha >= 128)
            excluded = snow.copy()
            ice_record = None
            if slug != "world-bc123000":
                ice_path = ROOT / f"src/earthTextures/ice/{slug}-coverage.png"
                with Image.open(ice_path) as im:
                    require(im.mode == "RGBA" and im.size == SIZE, "Unexpected ice mask format")
                    excluded |= np.asarray(im)[:, :, 3] > 0
                ice_record = {"path": str(ice_path.relative_to(ROOT)), **fingerprint(ice_path)}
            reduced[excluded] = 0
            coverage[excluded] = 0
            coast[excluded] = False
            encoded = quantize(reduced, SCALE_M, 16)
            preview = quantize(reduced, abs(level), 8)
            save_png(package / f"{slug}-depth-change.png", encoded)
            save_png(package / f"{slug}-depth-change-8bit.png", preview)
            save_png(package / f"{slug}-land-change.png", coverage)
            save_png(package / f"{slug}-shoreline.png", coast.astype(np.uint8) * 255)
            save_png(package / f"{slug}-excluded.png", excluded.astype(np.uint8) * 255)
            previews[slug] = preview
            eras.append({"slug": slug, "sea_level_m": level,
                         "depth_change_sign": 1 if level > 0 else -1,
                         "direction": "deeper / flooding" if level > 0 else "shallower / exposure",
                         "land_change_class": "flooded" if level > 0 else "exposed",
                         "preview_white_m": abs(level), "ice_exclusion": ice_record,
                         "counts": {"native_changed_land_cells_before_exclusion": native_changed,
                                    "depth_change_pixels": int(np.count_nonzero(encoded)),
                                    "land_change_pixels": int(np.count_nonzero(coverage)),
                                    "shoreline_pixels": int(coast.sum()),
                                    "excluded_pixels": int(excluded.sum())},
                         "maximum_tapered_depth_change_m": float(reduced.max())})
        make_preview(package, previews)
        readme = Path(__file__).with_name("coastal_depth_README.md")
        (package / "README.md").write_text(readme.read_text())
        manifest = {"kind": "illustrative_coastal_depth_change_masks", "scientifically_validated": False,
                    "sea_level_basis": "Inherited ERA_SPECS from generate_prehistoric_textures.py; not fitted historical dates",
                    "grid": {"width": SIZE[0], "height": SIZE[1], "bounds": [-180, -90, 180, 90],
                             "projection": "WGS84 equirectangular", "row_zero": "north", "column_zero": "west",
                             "registration": "pixel areas; centres at half-cell offsets"},
                    "encoding": {"depth_change": {"png_bits": 16, "black_m": 0, "white_m": SCALE_M,
                                  "decode": "pixel / 65535 * 64 * era.depth_change_sign; tapered metres, positive is deeper"},
                                 "depth_change_8bit": "pixel / 255 * era.preview_white_m; unsigned tapered metres",
                                 "land_change": "8-bit coverage: 0 absent, 255 full; class from era.land_change_class",
                                 "shoreline": "8-bit binary ocean-side line at output grid resolution",
                                 "excluded": "255 = suppressed by modern bright snow or available empirical ice; 0 is not proof of valid reconstruction"},
                    "method": {"depth": "max(sea_level - elevation, 0); modern sea_level = 0",
                               "magnitude": "abs(era_depth - modern_depth)",
                               "coastal_taper": {"depth": "min(modern_depth, era_depth)",
                                                 "full_strength_to_m": FADE_START_M, "zero_from_m": FADE_END_M,
                                                 "transition": "1 - smoothstep(200, 400, depth)"},
                               "connectivity": "Largest native four-neighbour ocean, with longitude union and no pole wrapping, independently at each level",
                               "resampling": "Classify and compute native fields first, Pillow BOX reduce, then round half up to unsigned integer PNG",
                               "exclusions": "Final pixels: baseline min(R,G,B)>150 and max-min<45; any available era ice alpha>0"},
                    "inputs": {"etopo": source, "blue_marble": baseline}, "eras": eras,
                    "generator": {str(p.relative_to(ROOT)): fingerprint(p) for p in
                                  (Path(__file__), Path(__file__).with_name("coast_prototype.py"), readme,
                                   ROOT / "scripts/generate_coastal_depth_masks.py")},
                    "versions": {"numpy": np.__version__, "pillow": PIL.__version__},
                    "limitations": ["Uniform assumed sea levels on modern bedrock, without regional uplift/subsidence, sediment changes or calibrated sea-level curves.",
                                    "Coastal taper is an artistic influence envelope, not evidence that sea-level change stops in deeper water.",
                                    "ETOPO bedrock connectivity and RGB snow exclusions do not establish a surveyed coastline beneath ice.",
                                    "No empirical ice exclusion is available for 123,000 BCE; modern bright snow protection still applies.",
                                    "Disconnected modern basins and water isolated by falling seas are excluded; no reconstructed inland lakes.",
                                    "Mixed coastline pixels are averaged; subpixel islands and straits may vanish, especially in the -3 m scenario.",
                                    "Zero means no encoded effect, including exclusions; it does not prove absence of historical change."],
                    "artifacts": [{"path": p.name, **fingerprint(p)} for p in sorted(package.iterdir())]}
        (package / "manifest.json").write_text(json.dumps(manifest, indent=2) + "\n")
        require(not output.exists(), "Output was created concurrently")
        package.rename(output)
    print(f"Wrote {output}", flush=True)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, required=True, help="Fresh output/ or /tmp directory")
    args = parser.parse_args()
    generate(args.output)
