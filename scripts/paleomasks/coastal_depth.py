"""Bathymetric coastal scenarios, independent of application textures.

Classify native ETOPO before reducing to the requested equirectangular grid.
The additional 22,000 BCE level is source-backed; older scenarios retain their assumptions.
"""
import argparse
import json
import shutil
from pathlib import Path
import tempfile

import numpy as np
from PIL import Image, ImageDraw
import PIL

from .coast_prototype import ETOPO, connected_ocean, reduce_coverage
from .contract import DATA, ROOT, fingerprint, load_contract, require, verify_file
from .additional_eras import RECORD, SLUG, sea_level_record
from .overlays import overlay_grid

ERAS = {"world-bc123000": 7., "world-bc22000": -130., "world-bc10000": -55.,
        "world-bc8000": -25., "world-bc5000": -3.}
SCALE_M = 160.
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


def save_png(path, array, compression=9):
    Image.fromarray(array).save(path, compress_level=compression)


def white_overlay(mask):
    """Preserve 8-bit mask values as straight alpha, with white RGB throughout."""
    require(mask.ndim == 2 and mask.dtype == np.uint8, "Expected an 8-bit mask")
    rgba = np.full((*mask.shape, 4), 255, dtype=np.uint8)
    rgba[:, :, 3] = mask
    return rgba


def make_preview(package, images, levels=None, filename="preview.png"):
    levels = ERAS if levels is None else levels
    tile_w, tile_h = 1024, 512
    rows = (len(images) + 1) // 2
    plate = Image.new("RGB", (tile_w * 2, (tile_h + 56) * rows + 48), "#171b20")
    draw = ImageDraw.Draw(plate)
    for i, (slug, mask) in enumerate(images.items()):
        x, y = (i % 2) * tile_w, (i // 2) * (tile_h + 56)
        year = f"{int(slug.split('bc')[1]):,} BCE" if 'bc' in slug else f"{int(slug.split('-')[1]):,} CE"
        label = f"{year} | scenario sea level {levels[slug]:+g} m"
        draw.text((x + 16, y + 12), label, fill="white")
        detail = (f"Transparent = zero; opaque white = {abs(levels[slug]):g} m tapered depth change"
                  if levels[slug] else "Zero-level reference: no depth or land change")
        draw.text((x + 16, y + 30), detail, fill="#bfc6cd")
        alpha = np.asarray(Image.fromarray(mask).resize((tile_w, tile_h), Image.Resampling.BOX))
        overlay = Image.fromarray(white_overlay(alpha))
        plate.paste(overlay, (x, y + 56), overlay)
    draw.text((16, plate.height - 32), "Illustrative uniform sea levels. Each panel uses its own scale. Not calibrated paleocoastlines.", fill="white")
    plate.save(package / filename)


def generate(output, width=8192, scenarios=None, reuse=None):
    grid = overlay_grid(width)
    size = (grid["width"], grid["height"])
    output = output.resolve()
    require(not output.exists(), "Choose a fresh output directory")
    for directory in ("src", "public", "docs", "data-sources"):
        require(not output.is_relative_to(ROOT / directory), "Write separate masks under output/ or /tmp")
    _, selection, _ = load_contract()
    dated_level = sea_level_record()
    require(ERAS[SLUG] == dated_level["sea_level_m"], "Scenario sea level differs from source selection")
    is_series = scenarios is not None
    if scenarios is None:
        scenarios = [{"slug": slug, "sea_level_m": level,
                      "sea_level_source": dated_level if slug == SLUG else {"kind": "legacy_assumption"}}
                     for slug, level in ERAS.items()]
    require(bool(scenarios) and len({s["slug"] for s in scenarios}) == len(scenarios), "Empty or duplicate scenarios")
    levels = {s["slug"]: s["sea_level_m"] for s in scenarios}
    normalization = scenarios[0].get("normalization")
    require(all(s.get("normalization") == normalization for s in scenarios), "Mixed scenario baselines")
    source = next(item for item in selection["downloads"] if item["path"] == str(ETOPO.relative_to(DATA)))
    verify_file(ETOPO, source)
    previous = None
    if reuse is not None:
        require(is_series, "Reuse requires a source-dated series")
        previous = json.loads((reuse / "manifest.json").read_text())
        require(previous["format_version"] == (7 if normalization else 6) and previous["grid"]["id"] == grid["id"]
                and previous["inputs"]["etopo"] == source, "Reused terrain/grid differs")
        require(previous["method"]["exclusions"] == "none; modern snow and empirical ice do not suppress coastal masks"
                and previous["method"]["coastal_taper"] == {"depth": "min(modern_depth, era_depth)",
                    "full_strength_to_m": FADE_START_M, "zero_from_m": FADE_END_M,
                    "transition": "1 - smoothstep(200, 400, depth)"}, "Reused processing differs")
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
        print("Classifying modern ocean with longitude-seam connectivity", flush=True)
        modern = ocean_at_level(elevation, 0)
        previews, eras = {}, []
        for index, scenario in enumerate(scenarios):
            slug, level = scenario["slug"], scenario["sea_level_m"]
            if previous and any(e["slug"] == slug for e in previous["eras"]):
                from .coastal_series import reuse_scenario
                eras.append(reuse_scenario(scenario, previous, reuse, package))
                with Image.open(package / f"{slug}-depth-change-8bit.png") as im:
                    previews[slug] = np.asarray(im.getchannel("A").resize((1024, 512), Image.Resampling.BOX)).copy()
                if len(previews) == 12 or index == len(scenarios) - 1:
                    make_preview(package, previews, levels, f"preview-{index // 12 + 1:02d}.png")
                    previews.clear()
                print(f"Reused {index + 1}/{len(scenarios)} {slug}: checksums verified", flush=True)
                continue
            print(f"Generating {index + 1}/{len(scenarios)} {slug}: {level:+g} m scenario", flush=True)
            era_ocean = modern if level == 0 else ocean_at_level(elevation, level)
            magnitude = np.empty_like(elevation, dtype=np.float32)
            changed = np.empty_like(modern)
            for row in range(0, elevation.shape[0], 128):
                sl = slice(row, row + 128)
                magnitude[sl], changed[sl] = coastal_change(elevation[sl], modern[sl], era_ocean[sl], level)
            native_changed = int(changed.sum())
            reduced = np.asarray(Image.fromarray(magnitude).resize(size, Image.Resampling.BOX)).copy()
            # Float BOX accumulation can overshoot a constant by a few ULPs.
            np.clip(reduced, 0, abs(level), out=reduced)
            del magnitude
            coverage = reduce_coverage(changed, size).copy()
            del changed
            ocean_alpha = reduce_coverage(era_ocean, size)
            del era_ocean
            land_alpha = reduce_coverage(np.isfinite(elevation) & (elevation != NODATA) & (elevation >= level), size)
            coast = shoreline(ocean_alpha >= 128, land_alpha >= 128)
            # Coast masks remain independent of snow and ice coverage. Keep the
            # legacy exclusion artifact transparent for consumers of the package.
            excluded = np.zeros((size[1], size[0]), dtype=bool)
            # Keep the existing per-era decoding scales.
            depth_white_m = SCALE_M if is_series or slug == SLUG else 64.
            encoded = quantize(reduced, depth_white_m, 16)
            preview = quantize(reduced, abs(level), 8) if level else np.zeros_like(encoded, dtype=np.uint8)
            compression = 6 if is_series else 9  # Lossless; avoids slow maximum compression for large batches.
            save_png(package / f"{slug}-depth-change.png", encoded, compression)
            save_png(package / f"{slug}-depth-change-8bit.png", white_overlay(preview), compression)
            save_png(package / f"{slug}-land-change.png", white_overlay(coverage), compression)
            save_png(package / f"{slug}-shoreline.png", white_overlay(coast.astype(np.uint8) * 255), compression)
            save_png(package / f"{slug}-excluded.png", white_overlay(excluded.astype(np.uint8) * 255), compression)
            previews[slug] = np.asarray(Image.fromarray(preview).resize((1024, 512), Image.Resampling.BOX)).copy()
            eras.append({**scenario,
                         "depth_white_m": depth_white_m,
                         "depth_change_sign": int(np.sign(level)),
                         "direction": "deeper / flooding" if level > 0 else "shallower / exposure" if level < 0 else "unchanged",
                         "land_change_class": "flooded" if level > 0 else "exposed" if level < 0 else "none",
                         "preview_white_m": abs(level), "ice_exclusion": None,
                         "counts": {"native_changed_land_cells_before_exclusion": native_changed,
                                    "depth_change_pixels": int(np.count_nonzero(encoded)),
                                    "land_change_pixels": int(np.count_nonzero(coverage)),
                                    "shoreline_pixels": int(coast.sum()),
                                    "excluded_pixels": int(excluded.sum())},
                         "maximum_tapered_depth_change_m": float(reduced.max())})
            # Bound memory and image dimensions for long series; 12 eras per contact sheet.
            if is_series and (len(previews) == 12 or index == len(scenarios) - 1):
                make_preview(package, previews, levels, f"preview-{index // 12 + 1:02d}.png")
                previews.clear()
        if not is_series:
            make_preview(package, previews)
        readme = Path(__file__).with_name("coastal_depth_README.md")
        (package / "README.md").write_text(readme.read_text())
        (package / "provenance").mkdir()
        if previous:
            shutil.copyfile(reuse / "manifest.json", package / "provenance/reused-manifest.json")
        shutil.copyfile(DATA / RECORD, package / "provenance" / RECORD)
        shutil.copyfile(DATA / dated_level["path"], package / "provenance/spratt2016-noaa.txt")
        if is_series:
            series_readme = Path(__file__).with_name("coastal_series_README.md")
            (package / "README.md").write_text(series_readme.read_text())
            (package / "COASTAL-FORMAT.md").write_text(readme.read_text())
            (package / "index.csv").write_text("slug,year_start,target_calendar_bp,sea_level_m,published_sea_level_m,applied_offset_m,depth_white_m\n" + "".join(
                f"{e['slug']},{e['year_start']},{e['target_calendar_bp']},{e['sea_level_m']:.8f},"
                f"{e.get('published_sea_level_m', e['sea_level_m']):.8f},{e.get('normalization', {}).get('applied_offset_m', 0):.8f},{e['depth_white_m']}\n" for e in eras))
            if normalization:
                shutil.copyfile(DATA / normalization["decision"], package / "provenance" / normalization["decision"])
        manifest = {"kind": "illustrative_coastal_depth_change_masks", "scientifically_validated": False,
                    "format_version": 7 if normalization else 6 if is_series else 5,
                    "sea_level_basis": "All dates use the pinned Spratt-Lisiecki short stack, linearly interpolated in calendar BP without extrapolation or rebasing" if is_series else "22,000 BCE uses the pinned Spratt-Lisiecki 24 ka short stack row (+51 years); other eras retain legacy assumptions",
                    "grid": {"id": grid["id"], "width": size[0], "height": size[1], "bounds": [-180, -90, 180, 90],
                             "projection": "WGS84 equirectangular", "row_zero": "north", "column_zero": "west",
                             "registration": "pixel areas; centres at half-cell offsets"},
                    "encoding": {"depth_change": {"png_bits": 16, "black_m": 0, "scale": "per-era depth_white_m",
                                  "decode": "pixel / 65535 * era.depth_white_m * era.depth_change_sign; tapered metres, positive is deeper"},
                                 "overlays": {"mode": "RGBA", "png_bits": 8, "rgb": [255, 255, 255],
                                              "alpha": "straight (unassociated); 0 transparent, 255 opaque; mask values stored only in alpha"},
                                 "depth_change_8bit": "alpha / 255 * era.preview_white_m; unsigned tapered metres",
                                 "land_change": "8-bit alpha coverage: 0 absent, 255 full; class from era.land_change_class",
                                 "shoreline": "8-bit binary alpha ocean-side line at output grid resolution",
                                 "excluded": "always transparent; snow and ice exclusions are disabled"},
                    "method": {"depth": "max(sea_level - elevation, 0); modern sea_level = 0",
                               "magnitude": "abs(era_depth - modern_depth)",
                               "coastal_taper": {"depth": "min(modern_depth, era_depth)",
                                                 "full_strength_to_m": FADE_START_M, "zero_from_m": FADE_END_M,
                                                 "transition": "1 - smoothstep(200, 400, depth)"},
                               "connectivity": "Largest native four-neighbour ocean, with longitude union and no pole wrapping, independently at each level",
                               "resampling": "Classify and compute native fields first, Pillow BOX reduce, then round half up to unsigned integer PNG",
                               "exclusions": "none; modern snow and empirical ice do not suppress coastal masks"},
                    "inputs": {"etopo": source}, "eras": eras,
                    "generator": {str(p.relative_to(ROOT)): fingerprint(p) for p in
                                  (Path(__file__), Path(__file__).with_name("coast_prototype.py"),
                                   Path(__file__).with_name("overlays.py"), Path(__file__).with_name("additional_eras.py"), readme,
                                   ROOT / "scripts/generate_coastal_depth_masks.py")},
                    "versions": {"numpy": np.__version__, "pillow": PIL.__version__},
                    "limitations": ["Uniform sea-level scenarios on modern bedrock, without regional uplift/subsidence or sediment changes." + (" Source uncertainty is retained at bracketing rows; interpolation adds no temporal precision." if is_series else " Only 22,000 BCE has a selected numeric sea-level source."),
                                    "Coastal taper is an artistic influence envelope, not evidence that sea-level change stops in deeper water.",
                                    "ETOPO bedrock connectivity does not establish a surveyed coastline beneath ice.",
                                    "Disconnected modern basins and water isolated by falling seas are excluded; no reconstructed inland lakes.",
                                    "Mixed coastline pixels are averaged; subpixel islands and straits may vanish, especially in the -3 m scenario.",
                                    "Zero means no encoded effect; it does not prove absence of historical change."],
                    "artifacts": [{"path": p.relative_to(package).as_posix(), **fingerprint(p)}
                                  for p in sorted(package.rglob("*")) if p.is_file()]}
        if is_series:
            for p in (Path(__file__).with_name("coastal_series.py"), series_readme):
                manifest["generator"][str(p.relative_to(ROOT))] = fingerprint(p)
            manifest["inputs"]["sea_level"] = {key: dated_level[key] for key in ("path", "bytes", "sha256", "publication_doi", "dataset_doi", "column", "reference")}
            manifest["chronology"] = {"age_system": "calendar BP (1950)", "year_zero": False,
                                      "start_year": eras[0]["year_start"], "end_year": eras[-1]["year_start"],
                                      "interval_years": [a["target_calendar_bp"] - b["target_calendar_bp"] for a, b in zip(eras, eras[1:])]}
            manifest["method"]["png_compression_level"] = 6
            if normalization:
                manifest["normalization"] = normalization
                manifest["sea_level_basis"] = "Spratt-Lisiecki short stack interpolated in calendar BP, then shifted by minus its published 1950 endpoint (+8.49 m); 1950 is visualization zero"
                manifest["limitations"].append("Operator-requested uniform normalization changes the authors' 5 ka / 24 ka calibration; it is not a scientific correction or a reconstructed modern sea-level observation. Original source uncertainties are retained without deriving uncertainty for differences.")
        (package / "manifest.json").write_text(json.dumps(manifest, indent=2) + "\n")
        require(not output.exists(), "Output was created concurrently")
        package.rename(output)
    print(f"Wrote {output}", flush=True)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, required=True, help="Fresh output/ or /tmp directory")
    parser.add_argument("--width", type=int, choices=(4096, 8192), default=8192, help="Output width; height is half")
    parser.add_argument("--series", action="store_true", help="Use the published sea-level series instead of the five legacy scenarios")
    parser.add_argument("--start-year", type=int, default=-123000, help="Historical signed year; BCE negative, no zero (series only)")
    parser.add_argument("--end-year", type=int, default=1001, help="Inclusive latest year (series only)")
    parser.add_argument("--step-years", type=int, default=1000, help="Elapsed calendar years between outputs (series only)")
    parser.add_argument("--include-1950", action="store_true", help="Append the published 1950 CE endpoint outside the regular cadence (series only)")
    parser.add_argument("--baseline", choices=("1950", "published"), default="1950", help="Series baseline: 1950 visualization zero (default), or original published scaling")
    parser.add_argument("--reuse", type=Path, help="Explicitly reuse matching verified format-6 series masks; preserve their generation provenance")
    args = parser.parse_args()
    if args.include_1950 and not args.series:
        parser.error("--include-1950 requires --series")
    selected = None
    if args.series:
        from .coastal_series import scenarios
        selected = scenarios(args.start_year, args.end_year, args.step_years, args.include_1950, args.baseline)
    generate(args.output, args.width, selected, args.reuse)
