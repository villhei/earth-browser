"""Operator-directed unified ice overlays, independent of historical v1 packages."""
from pathlib import Path
import shutil
import tempfile

import numpy as np
from PIL import Image
from PIL.PngImagePlugin import PngInfo

from .contract import DATA, ROOT, RECORDS, fingerprint, read_json, require, safe_path, selected_members, verify_file
from .geometry import rasterize, refine_sampling_misses
from .pipeline import build_manifest, processing_record, render_member, variant, verify_inputs, write_json
from .surface_policy import apply_zero_rounding_policy

POLICY = "OUTPUT-OVERLAY-CONTRACT.json"
PROVENANCE = (*RECORDS, POLICY, "PHASE4-OPERATOR-DIRECTIVES.md")
MODIFICATIONS = "Source polygons merged into unified static ice overlays before raster reduction; zero-rounding losses and ring closures recorded. Original input bytes preserved."


def provenance_files(era):
    from .additional_eras import RECORD, SLUG
    return (*PROVENANCE, RECORD) if era["slug"] == SLUG else PROVENANCE


def overlay_grid(width):
    require(type(width) is int and width in (4096, 8192), "Unsupported overlay width")
    return {"id": f"earth-equirectangular-{width}-v1", "width": width, "height": width // 2,
            "horizontal_crs": "EPSG:4326", "registration": "PixelIsArea",
            "gdal_geotransform": [-180, 360 / width, 0, 90, 0, -360 / width]}


def overlay_policy(width):
    policy = read_json(DATA / POLICY)
    if width == 8192:
        policy.update(contract_version="2.1.0", grid_id=overlay_grid(width)["id"])
    return policy


def validate_overlay(manifest, package, contract, selection, catalog):
    require(manifest["contract_version"] in ("2.0.0", "2.1.0") and manifest["kind"] == "static_ice_overlay",
            "Unsupported overlay contract/kind")
    width = 8192 if manifest["contract_version"] == "2.1.0" else 4096
    grid = overlay_grid(width)
    if width == 8192:
        require(manifest["output_grid"] == grid, "Overlay output grid mismatch")
    era = catalog[manifest["era"]["slug"]]
    require(manifest["era"] == era and manifest["grid_id"] == grid["id"], "Overlay era/grid mismatch")
    require(manifest["baseline"] == contract["grid"]["alignment_reference"], "Blue Marble baseline mismatch")
    expected = build_manifest(era, contract, selection)["sources"]
    for source in expected:
        source["modifications"] = MODIFICATIONS
    require(manifest["sources"] == expected and bool(expected), "Overlay source/chronology mismatch")
    require(manifest["complete_global_reconstruction"] is False
            and manifest["transparency"] == "baseline_unchanged_not_confirmed_absence",
            "Overlay cannot assert global absence/completeness")
    require(manifest["policy"] == overlay_policy(width), "Overlay operator policy mismatch")
    allowed = {"manifest.json"}
    provenance = provenance_files(era)
    require(len(manifest["provenance"]) == len(provenance), "Missing overlay provenance")
    for name in provenance:
        path = f"provenance/{name}"
        matches = [p for p in manifest["provenance"] if p["path"] == path]
        require(len(matches) == 1 and {k: matches[0][k] for k in ("bytes", "sha256")} == fingerprint(DATA / name),
                "Stale or duplicate overlay provenance")
        verify_file(safe_path(package, path), matches[0])
        allowed.add(path)
    expected_paths = {"central": "ice.png", "minimum": "diagnostics/ice-minimum.png", "maximum": "diagnostics/ice-maximum.png"}
    require(set(manifest["overlays"]) == set(expected_paths), "All three ice bounds must be retained")
    for label, path in expected_paths.items():
        record = manifest["overlays"][label]
        expected_members = {(u["dataset"], m["member_stem"]) for u in contract["permitted_margin_uses"]
                            if u["era_slug"] == era["slug"] for m in selected_members(selection, u) if variant(m) == label}
        require(len(record["members"]) == len(expected_members)
                and {(m["dataset"], m["member_stem"]) for m in record["members"]} == expected_members,
                "Overlay bound/source member mismatch")
        require(record["path"] == path, "Unexpected overlay path")
        verify_file(safe_path(package, path), record)
        with Image.open(safe_path(package, path)) as image:
            require(image.mode == "RGBA" and image.size == (width, width // 2), "Overlay must be full-grid RGBA")
            pixels = np.asarray(image)
        alpha = pixels[:, :, 3]
        require(np.any(alpha), "Overlay has no positive ice evidence")
        require(np.all(pixels[alpha > 0, :3] == 255) and np.all(pixels[alpha == 0, :3] == 0),
                "Overlay RGB must be solid white or transparent black")
        require(record["priority"] == "ice_over_terrain_and_marine" and record["samples_per_axis"] == 8,
                "Overlay priority/sampling mismatch")
        if width == 8192:
            seen = set()
            for refinement in record["local_sampling_refinements"]:
                row, column = refinement["row"], refinement["column"]
                require(type(row) is int and type(column) is int and 0 <= row < width // 2
                        and 0 <= column < width and (row, column) not in seen,
                        "Invalid/duplicate refinement pixel")
                seen.add((row, column))
                require(refinement["samples_per_axis"] in (32, 64, 128, 256)
                        and int(alpha[row, column]) == refinement["refined_alpha"]
                        and 0 <= refinement["previous_alpha"] <= 255,
                        "Invalid local sampling refinement")
        for drop in record["discarded_polygons"]:
            require(drop["outcome"] == "below_encoding_resolution" and drop["quantized_nonzero_pixels"] == 0
                    and drop["disposition"] == "discarded_from_overlay", "Unauthorized polygon loss")
            require(bool(drop["pixel_coverage"]) and all(
                0 < p["fraction"] < 1 / 510 and p["quantized_alpha"] == 0 for p in drop["pixel_coverage"]),
                "Discarded polygon has nonzero quantized coverage")
        allowed.add(path)
    actual = {p.relative_to(package).as_posix() for p in Path(package).rglob("*") if p.is_file()}
    require(actual == allowed, "Unexpected or missing overlay package files")
    return {"era": era["slug"], "status": "valid_partial_static_ice_overlay", "main_overlay": "ice.png"}


def generate_overlays(eras, contract, selection, catalog, cache, output, width=4096):
    grid = overlay_grid(width)
    policy = overlay_policy(width)
    require(policy["subpixel_policy"]["operator_rule"] == "Discard the polygons/subpixels that round to 0",
            "Unsupported operator filtering rule")
    output = output.resolve()
    for forbidden in (ROOT / "docs", ROOT / "public", ROOT / "src"):
        require(not output.is_relative_to(forbidden), "Keep research overlays outside the app/static site")
    uses = [u for u in contract["permitted_margin_uses"] if u["era_slug"] in {e["slug"] for e in eras}]
    for era in eras:
        require(any(u["era_slug"] == era["slug"] for u in uses), "No selected margin evidence for this era")
        require(not (output / era["slug"]).exists(), "Overlay package exists; choose a fresh output directory")
    layers = {m["member_stem"]: m for u in uses for m in selected_members(selection, u)}
    verify_inputs(selection, cache, layers=list(layers.values()))
    output.mkdir(parents=True, exist_ok=True)
    for era in eras:
        with tempfile.TemporaryDirectory(prefix=".overlay-staging-", dir=output) as temp:
            package = Path(temp) / era["slug"]
            (package / "provenance").mkdir(parents=True)
            (package / "diagnostics").mkdir()
            sources = build_manifest(era, contract, selection)["sources"]
            for source in sources:
                source["modifications"] = MODIFICATIONS
            manifest = {"contract_version": policy["contract_version"], "kind": "static_ice_overlay", "era": era,
                        "grid_id": grid["id"], "baseline": contract["grid"]["alignment_reference"],
                        "policy": policy, "sources": sources, "provenance": [], "overlays": {},
                        "complete_global_reconstruction": False,
                        "transparency": "baseline_unchanged_not_confirmed_absence",
                        "coastlines": {"enabled": True, "status": "not_generated", "baseline": "BLUE_MARBLE",
                                       "reason": "Coastlines are a separate product. Current reference candidates failed baseline classification and regional seam acceptance; no coastline is delivered in this ice package."},
                        "limitations": ["Partial selected regional ice evidence only; unselected regions preserve the baseline.",
                                        "Grounded and floating ice are merged; no new shelf front or seasonal sea ice is invented.",
                                        "Source uncertainty bounds remain alternative geometries, not alpha probabilities.",
                                        "Phase-5 ice scientific acceptance remains pending; reference coastlines failed acceptance."],
                        "processing": processing_record()}
            if width == 8192:
                manifest["output_grid"] = grid
                manifest["processing"]["projection_tolerance_degrees"] = 360 / width / 32
            for name in provenance_files(era):
                dest = package / "provenance" / name
                shutil.copyfile(DATA / name, dest)
                manifest["provenance"].append({"path": f"provenance/{name}", **fingerprint(dest)})
            era_uses = [u for u in uses if u["era_slug"] == era["slug"]]
            for label, filename in (("central", "ice.png"), ("minimum", "diagnostics/ice-minimum.png"),
                                    ("maximum", "diagnostics/ice-maximum.png")):
                print(f"Rendering unified ice: {era['slug']} / {label}", flush=True)
                polygons, members = [], []
                for use in era_uses:
                    layer = next(m for m in selected_members(selection, use) if variant(m) == label)
                    parts, log = render_member(cache, layer, close_open_rings=True,
                                               tolerance_degrees=360 / width / 32)
                    for repair in log["ring_closure_repairs"]:
                        repair["scope"] = "derived static overlay; source bytes unchanged; scientific validation pending"
                    members.append({"dataset": use["dataset"], "member_stem": layer["member_stem"],
                                    "first_polygon_index": len(polygons), "polygon_count": len(parts), "geometry": log})
                    polygons.extend(parts)
                # Union all source and ice-class geometry BEFORE coverage reduction.
                alpha, hits = rasterize(polygons, width=width, height=width // 2, samples=8)
                refinements = []
                if width == 8192:
                    alpha, hits, refinements = refine_sampling_misses(polygons, alpha, hits, width, width // 2)
                drops = apply_zero_rounding_policy(polygons, hits, width=width, height=width // 2)
                rgba = np.zeros((*alpha.shape, 4), dtype=np.uint8)
                rgba[alpha > 0, :3] = 255
                rgba[:, :, 3] = alpha
                info = PngInfo()
                info.add(b"sRGB", b"\x00")
                Image.fromarray(rgba).save(package / filename, pnginfo=info, compress_level=9, optimize=False)
                manifest["overlays"][label] = {"path": filename, **fingerprint(package / filename),
                    "samples_per_axis": 8, "priority": "ice_over_terrain_and_marine", "members": members,
                    "discarded_polygons": drops, "positive_pixels": int(np.count_nonzero(alpha))}
                if width == 8192:
                    manifest["overlays"][label]["local_sampling_refinements"] = refinements
            write_json(package / "manifest.json", manifest)
            validate_overlay(manifest, package, contract, selection, catalog)
            require(not (output / era["slug"]).exists(), "Concurrent overlay output collision")
            package.rename(output / era["slug"])
        print(f"Wrote {output / era['slug']}: one unified ice overlay plus uncertainty diagnostics", flush=True)
