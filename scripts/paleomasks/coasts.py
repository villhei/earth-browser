"""Regional coastline candidates against the operator-selected Blue Marble image.

Image color classification is an explicit approximation requiring Phase-5 review.
All terrain decisions precede reduction to the final image grid.
"""
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile

import numpy as np
from PIL import Image
from PIL.PngImagePlugin import PngInfo
from pyproj import Transformer
from scipy import ndimage

from .contract import DATA, ROOT, fingerprint, read_json, require, verify_file
from .pipeline import write_json

FOUR = ndimage.generate_binary_structure(2, 1)


def blue_marble_classes(rgb):
    """Conservative visible-image classes; excludes disconnected/dark water.

    Ocean: largest connected blue-dominant component, including seam-connected
    components. Snow/ice-like bright neutral pixels and disconnected/dark water
    remain excluded. This is image segmentation, not an observed marine survey.
    """
    require(rgb.ndim == 3 and rgb.shape[2] == 3 and rgb.dtype == np.uint8, "Expected RGB baseline")
    r, g, b = np.moveaxis(rgb.astype(np.int16), -1, 0)
    blue = (b >= r + 5) & (b >= g + 2)
    labels, count = ndimage.label(blue, FOUR)
    require(count > 0, "No blue ocean candidate in baseline")
    sizes = np.bincount(labels.ravel())
    sizes[0] = 0
    selected = {int(sizes.argmax())}
    # Join across longitude only, never across latitude/poles.
    pairs = {(int(a), int(b)) for a, b in zip(labels[:, 0], labels[:, -1]) if a and b}
    while True:
        expanded = selected | {x for a, b in pairs if a in selected or b in selected for x in (a, b)}
        if expanded == selected:
            break
        selected = expanded
    ocean = np.isin(labels, list(selected))
    dark = (r < 12) & (g < 12) & (b < 12)
    bright_neutral = (np.minimum(np.minimum(r, g), b) > 150) & (np.maximum(np.maximum(r, g), b) - np.minimum(np.minimum(r, g), b) < 40)
    excluded = ((blue | dark) & ~ocean) | bright_neutral
    return ocean, excluded


def regional_changes(elevation, valid, modern_ocean, excluded, ice):
    """Seed ocean at the regional exterior; disconnected depressions stay unknown.

    Ice is a conservative connectivity barrier and suppresses coastal changes.
    This does not assert that every ice polygon is grounded.
    """
    require(elevation.ndim == 2 and all(a.dtype == bool and a.shape == elevation.shape
            for a in (valid, modern_ocean, excluded, ice)), "Regional grids must align")
    require(np.isfinite(elevation[valid]).all(), "Nonfinite valid terrain")
    exterior_seeds = np.zeros_like(valid)
    exterior_seeds[[0, -1], :] = True
    exterior_seeds[:, [0, -1]] = True
    exterior = ndimage.binary_propagation(exterior_seeds & ~valid, structure=FOUR, mask=~valid)
    boundary = valid & (ndimage.binary_dilation(exterior, structure=FOUR) | exterior_seeds)
    candidate = valid & (elevation < 0) & ~ice & ~excluded
    seeds = boundary & candidate & modern_ocean & ~excluded
    require(np.any(seeds), "No evidenced ocean seeds at regional boundary")
    ocean = ndimage.binary_propagation(seeds, structure=FOUR, mask=candidate)
    # A negative disconnected cell is not promoted to land or open water.
    known = valid & ((elevation >= 0) | ocean) & ~excluded & ~ice
    exposed = modern_ocean & (elevation >= 0) & known
    flooded = ~modern_ocean & ocean & known
    return exposed, flooded, known, {"ocean_seed_cells": int(np.count_nonzero(seeds)),
        "ocean_connected_cells": int(np.count_nonzero(ocean)),
        "disconnected_negative_cells_excluded": int(np.count_nonzero(candidate & ~ocean)),
        "ice_priority_cells": int(np.count_nonzero(ice & valid))}


def image_to_native(image, size, geotransform, crs):
    """Nearest-cell categorical sampling at native terrain cell centres."""
    width, height = size
    gt = geotransform
    require(gt[2] == gt[4] == 0, "Rotated native terrain is unsupported")
    transform = Transformer.from_crs(crs, "EPSG:4326", always_xy=True)
    out = np.zeros((height, width), dtype=image.dtype)
    x = gt[0] + (np.arange(width) + .5) * gt[1]
    for row in range(0, height, 128):
        n = min(128, height - row)
        y = gt[3] + (np.arange(row, row + n) + .5) * gt[5]
        lon, lat = transform.transform(np.broadcast_to(x, (n, width)), np.broadcast_to(y[:, None], (n, width)))
        good = np.isfinite(lon) & np.isfinite(lat) & (np.abs(lat) <= 90)
        col = np.floor(((np.where(good, lon, 0) + 180) % 360) * image.shape[1] / 360).astype(int)
        iy = np.clip(np.floor((90 - np.where(good, lat, 0)) * image.shape[0] / 180).astype(int), 0, image.shape[0] - 1)
        out[row:row + n] = np.where(good, image[iy, col], 0)
    return out


def native_to_alpha(classes, geotransform, crs, width=4096, height=2048, samples=8):
    """Count native categorical hits on final-grid subcell centres; unknown is zero.

    No renormalization by valid fraction, interpolation of elevations, or blur.
    """
    gt = geotransform
    require(gt[2] == gt[4] == 0 and gt[1] > 0 and gt[5] < 0, "Unsupported native orientation")
    transform = Transformer.from_crs("EPSG:4326", crs, always_xy=True)
    outputs = [np.zeros((height, width), dtype=np.uint8) for _ in classes]
    lon = -180 + (np.arange(width * samples) + .5) * 360 / (width * samples)
    for row in range(0, height, 8):
        n = min(8, height - row)
        lat = 90 - (np.arange(row * samples, (row + n) * samples) + .5) * 180 / (height * samples)
        shape = (n * samples, width * samples)
        x, y = transform.transform(np.broadcast_to(lon, shape), np.broadcast_to(lat[:, None], shape))
        finite = np.isfinite(x) & np.isfinite(y)
        col = np.floor((np.where(finite, x, gt[0]) - gt[0]) / gt[1]).astype(np.int64)
        iy = np.floor((np.where(finite, y, gt[3]) - gt[3]) / gt[5]).astype(np.int64)
        inside = finite & (col >= 0) & (iy >= 0) & (col < classes[0].shape[1]) & (iy < classes[0].shape[0])
        cx = np.clip(col, 0, classes[0].shape[1] - 1)
        cy = np.clip(iy, 0, classes[0].shape[0] - 1)
        for source, target in zip(classes, outputs):
            hits = inside & source[cy, cx]
            counts = hits.reshape(n, samples, width, samples).sum(axis=(1, 3))
            target[row:row + n] = np.floor(counts * 255 / samples ** 2 + .5).astype(np.uint8)
    return outputs


def coastline_candidates(era_slug, ice_package, terrain_root, output, contract, gdal_python):
    """Generate explicitly experimental coastal masks, leaving the base untouched."""
    from .overlays import validate_overlay
    from .contract import load_contract
    c, selection, catalog = load_contract()
    validate_overlay(read_json(ice_package / "manifest.json"), ice_package, c, selection, catalog)
    ice_manifest = read_json(ice_package / "manifest.json")
    require(ice_manifest["era"]["slug"] == era_slug, "Ice/terrain era mismatch")
    terrain_record = DATA / "ICE6G-TERRAIN-INSPECTION.json"
    terrain_report = read_json(terrain_record)
    layers = [layer for layer in terrain_report["layers"] if layer["era_slug"] == era_slug]
    require(len(layers) == 1, "No selected native terrain for this era")
    layer = layers[0]
    terrain_path = terrain_root / layer["geotiff"]["path"]
    verify_file(terrain_path, layer["geotiff"])
    baseline = contract["grid"]["alignment_reference"]
    baseline_path = ROOT / baseline["repository_path"]
    verify_file(baseline_path, baseline)
    output = output.resolve()
    require(not output.exists(), "Coastline candidate package exists; use a fresh directory")
    for forbidden in (ROOT / "docs", ROOT / "public", ROOT / "src"):
        require(not output.is_relative_to(forbidden), "Keep coastline candidates outside the application")
    output.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(prefix=".coast-staging-", dir=output.parent) as temp:
        temp = Path(temp)
        package = temp / "package"
        package.mkdir()
        print("Reading native terrain and explicit validity", flush=True)
        subprocess.run([str(gdal_python), str(ROOT / "scripts/paleomasks/native_arrays.py"),
                        str(terrain_path), str(temp)], check=True)
        elevation = np.load(temp / "elevation.npy", mmap_mode="r")
        valid = np.load(temp / "valid.npy", mmap_mode="r").astype(bool)
        require(list(elevation.shape[::-1]) == layer["size"] and elevation.shape == valid.shape,
                "Native terrain dimensions changed")
        with Image.open(baseline_path) as image:
            baseline_ocean, excluded = blue_marble_classes(np.asarray(image.convert("RGB")))
        with Image.open(ice_package / "ice.png") as image:
            ice_alpha = np.asarray(image)[:, :, 3].copy()
        args = (layer["size"], layer["geotransform"], layer["horizontal_crs_wkt"])
        print("Mapping Blue Marble categories and ice to native terrain", flush=True)
        modern_ocean = image_to_native(baseline_ocean, *args)
        native_excluded = image_to_native(excluded, *args)
        native_ice = image_to_native(ice_alpha > 0, *args)
        exposed, flooded, known, counts = regional_changes(elevation, valid, modern_ocean, native_excluded, native_ice)
        print("Reducing classified coastal candidates to the final grid", flush=True)
        alphas = native_to_alpha((exposed, flooded, known), layer["geotransform"], layer["horizontal_crs_wkt"])
        # Conservatively reserve every final pixel touched by empirical ice.
        for alpha in alphas:
            alpha[ice_alpha > 0] = 0
        artifacts = []
        for name, alpha, color in zip(("exposed-land", "flooded-land"), alphas[:2], ((217, 164, 65), (40, 120, 181))):
            rgba = np.zeros((*alpha.shape, 4), dtype=np.uint8)
            rgba[alpha > 0, :3] = color
            rgba[:, :, 3] = alpha
            info = PngInfo()
            info.add(b"sRGB", b"\x00")
            path = package / f"{name}-candidate.png"
            Image.fromarray(rgba).save(path, pnginfo=info, compress_level=9)
            artifacts.append({"path": path.name, **fingerprint(path), "positive_pixels": int(np.count_nonzero(alpha))})
        path = package / "comparison-domain.png"
        Image.fromarray(alphas[2]).save(path, compress_level=9)
        artifacts.append({"path": path.name, **fingerprint(path)})
        report = {"kind": "regional_coastline_candidates", "era": catalog[era_slug], "grid_id": contract["grid"]["id"],
                  "production_eligible": False, "scientific_validation": "Phase-5 review required",
                  "baseline": baseline, "terrain": layer, "terrain_record": fingerprint(terrain_record),
                  "ice_manifest": fingerprint(ice_package / "manifest.json"), "ice_overlay": fingerprint(ice_package / "ice.png"),
                  "operator_policy": read_json(DATA / "OUTPUT-OVERLAY-CONTRACT.json"), "artifacts": artifacts,
                  "processing": {"command_argv": [sys.executable, *sys.argv], "numpy": np.__version__,
                      "coasts_module": fingerprint(Path(__file__)), "native_reader": fingerprint(ROOT / "scripts/paleomasks/native_arrays.py"),
                      "baseline_ocean": "largest 4-connected component of B>=R+5 and B>=G+2, with longitude-seam joining",
                      "baseline_exclusions": "disconnected blue/dark pixels; neutral bright snow/ice-like pixels",
                      "connectivity": "4-connected negative native terrain seeded by Blue Marble ocean at exterior valid-domain boundary",
                      "ice_priority": "ice blocks candidate connectivity and suppresses output in all final pixels with nonzero ice alpha",
                      "resampling": "native classification first, then 8x8 final subcell centres and box averaging",
                      "quantization": "floor(255*f+0.5); zero is discarded", "sea_level_offset": "none"},
                  "native_counts": counts,
                  "limitations": ["Blue Marble RGB segmentation is an approximation, not a surveyed coastline; assess edge errors in Phase 5.",
                      "Native terrain validity and a bounding envelope do not prove global scientific coverage.",
                      "Disconnected negative basins and baseline inland/dark water are excluded, not rendered as lakes.",
                      "Ice is a conservative connectivity barrier without a grounded/floating inference; near-ice water may be underrepresented.",
                      "Only the selected North American terrain domain is evaluated; vegetation and base pixels remain unchanged."]}
        write_json(package / "coastline-candidates.json", report)
        require(not output.exists(), "Concurrent coastline output collision")
        package.rename(output)
    print(f"Wrote {output}: regional coastal candidates, scientific validation pending", flush=True)
