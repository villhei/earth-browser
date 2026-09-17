"""Operator-directed unified ice overlays, independent of historical v1 packages."""
from pathlib import Path
import shutil
import tempfile

import numpy as np
from PIL import Image
from PIL.PngImagePlugin import PngInfo

from .contract import DATA, ROOT, RECORDS, fingerprint, read_json, require, safe_path, selected_members, verify_file
from .geometry import rasterize
from .pipeline import build_manifest, processing_record, render_member, variant, verify_inputs, write_json
from .surface_policy import apply_zero_rounding_policy

POLICY = "OUTPUT-OVERLAY-CONTRACT.json"
PROVENANCE = (*RECORDS, POLICY, "PHASE4-OPERATOR-DIRECTIVES.md")
MODIFICATIONS = "Source polygons merged into unified static ice overlays before raster reduction; zero-rounding losses and ring closures recorded. Original input bytes preserved."


def validate_overlay(manifest, package, contract, selection, catalog):
    require(manifest["contract_version"] == "2.0.0" and manifest["kind"] == "static_ice_overlay",
            "Unsupported overlay contract/kind")
    era = catalog[manifest["era"]["slug"]]
    require(manifest["era"] == era and manifest["grid_id"] == contract["grid"]["id"], "Overlay era/grid mismatch")
    require(manifest["baseline"] == contract["grid"]["alignment_reference"], "Blue Marble baseline mismatch")
    expected = build_manifest(era, contract, selection)["sources"]
    for source in expected:
        source["modifications"] = MODIFICATIONS
    require(manifest["sources"] == expected and bool(expected), "Overlay source/chronology mismatch")
    require(manifest["complete_global_reconstruction"] is False
            and manifest["transparency"] == "baseline_unchanged_not_confirmed_absence",
            "Overlay cannot assert global absence/completeness")
    require(manifest["policy"] == read_json(DATA / POLICY), "Overlay operator policy mismatch")
    allowed = {"manifest.json"}
    require(len(manifest["provenance"]) == len(PROVENANCE), "Missing overlay provenance")
    for name in PROVENANCE:
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
            require(image.mode == "RGBA" and image.size == (4096, 2048), "Overlay must be full-grid RGBA")
            pixels = np.asarray(image)
        alpha = pixels[:, :, 3]
        require(np.any(alpha), "Overlay has no positive ice evidence")
        require(np.all(pixels[alpha > 0, :3] == 255) and np.all(pixels[alpha == 0, :3] == 0),
                "Overlay RGB must be solid white or transparent black")
        require(record["priority"] == "ice_over_terrain_and_marine" and record["samples_per_axis"] == 8,
                "Overlay priority/sampling mismatch")
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


def generate_overlays(eras, contract, selection, catalog, cache, output):
    policy = read_json(DATA / POLICY)
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
            manifest = {"contract_version": "2.0.0", "kind": "static_ice_overlay", "era": era,
                        "grid_id": contract["grid"]["id"], "baseline": contract["grid"]["alignment_reference"],
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
            for name in PROVENANCE:
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
                    parts, log = render_member(cache, layer, close_open_rings=True)
                    for repair in log["ring_closure_repairs"]:
                        repair["scope"] = "derived static overlay; source bytes unchanged; scientific validation pending"
                    members.append({"dataset": use["dataset"], "member_stem": layer["member_stem"],
                                    "first_polygon_index": len(polygons), "polygon_count": len(parts), "geometry": log})
                    polygons.extend(parts)
                # Union all source and ice-class geometry BEFORE coverage reduction.
                alpha, hits = rasterize(polygons, samples=8)
                drops = apply_zero_rounding_policy(polygons, hits)
                rgba = np.zeros((*alpha.shape, 4), dtype=np.uint8)
                rgba[alpha > 0, :3] = 255
                rgba[:, :, 3] = alpha
                info = PngInfo()
                info.add(b"sRGB", b"\x00")
                Image.fromarray(rgba).save(package / filename, pnginfo=info, compress_level=9, optimize=False)
                manifest["overlays"][label] = {"path": filename, **fingerprint(package / filename),
                    "samples_per_axis": 8, "priority": "ice_over_terrain_and_marine", "members": members,
                    "discarded_polygons": drops, "positive_pixels": int(np.count_nonzero(alpha))}
            write_json(package / "manifest.json", manifest)
            validate_overlay(manifest, package, contract, selection, catalog)
            require(not (output / era["slug"]).exists(), "Concurrent overlay output collision")
            package.rename(output / era["slug"])
        print(f"Wrote {output / era['slug']}: one unified ice overlay plus uncertainty diagnostics", flush=True)
