"""Verified input acquisition and atomic, explicitly gated evidence packages."""
from __future__ import annotations

import argparse
import copy
import hashlib
import importlib.metadata
import io
import json
import os
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile
import urllib.request
import zipfile
import zlib

from .contract import (DATA, ROOT, RECORDS, ContractError, fingerprint, load_contract,
                       read_json, require, safe_path, selected_members,
                       validate_manifest, verify_file)


def write_json(path, data):
    Path(path).write_text(json.dumps(data, indent=2, ensure_ascii=False, allow_nan=False) + "\n", encoding="utf-8")


def archive_inputs(selection, all_downloads=False):
    names = {m["archive"] for m in selection["inspected_layers"]}
    return [d for d in selection["downloads"] if all_downloads or Path(d["path"]).name in names]


def acquire(record, cache):
    """Preserve existing originals. Publish downloaded bytes only after verification."""
    dest = safe_path(cache, Path(record["path"]).name)
    if dest.exists():
        verify_file(dest, record)
        return
    cache.mkdir(parents=True, exist_ok=True)
    fd, temporary = tempfile.mkstemp(prefix=".download-", dir=cache)
    try:
        require(record["url"].startswith("https://"), "Input download must use HTTPS")
        with os.fdopen(fd, "wb") as output, urllib.request.urlopen(record["url"], timeout=60) as response:
            shutil.copyfileobj(response, output)
        verify_file(temporary, record)
        # Hard link is an atomic no-overwrite publication in the same filesystem.
        os.link(temporary, dest)
    finally:
        Path(temporary).unlink(missing_ok=True)


def member_bytes(archive, layer):
    result = {}
    for extension, pin in layer["components"].items():
        name = f"{layer['member_stem']}.{extension}"
        require(name in archive.namelist(), f"Missing required archive member: {name}")
        raw = archive.read(name)
        require(len(raw) == pin["bytes"] and hashlib.sha256(raw).hexdigest() == pin["sha256"],
                f"Archive member checksum mismatch: {name}")
        result[extension] = raw
    return result


def verify_inputs(selection, cache, all_downloads=False, layers=None):
    if layers is None:
        layers = selection["inspected_layers"]
    needed = {m["archive"] for m in layers}
    downloads = [d for d in archive_inputs(selection, all_downloads)
                 if all_downloads or Path(d["path"]).name in needed]
    for record in downloads:
        verify_file(safe_path(cache, Path(record["path"]).name), record)
    count = 0
    for archive_name in sorted(needed):
        with zipfile.ZipFile(cache / archive_name) as archive:
            require(len(archive.namelist()) == len(set(archive.namelist())), "Duplicate archive names")
            for layer in layers:
                if layer["archive"] == archive_name:
                    count += len(member_bytes(archive, layer))
    return {"original_inputs_verified": len(downloads), "selected_components_verified": count}


def build_manifest(era, contract, selection):
    example = read_json(DATA / "examples/world-bc10000.manifest.json")
    manifest = {"contract_version": contract["contract_version"], "grid_id": contract["grid"]["id"],
                "record_kind": "delivery", "era": era, "provenance_records": [], "sources": [],
                "layers": [], "complete_global_set": False,
                "limitations": [
                    "Evidence/disposition package only. No production class has a validated presence/absence domain.",
                    "Grounding, marine terrain classification, connectivity and regional seam gates remain unresolved.",
                    "Unlisted geography and all transparent diagnostic pixels have unknown class status.",
                    "Source slice offsets are not dating error bars; alternative extents are not probabilities.",
                    "Diagnostic margins are not grounded ice, shelves, sea ice or evidence of a traversable route."]}
    uses = [u for u in contract["permitted_margin_uses"] if u["era_slug"] == era["slug"]]
    for use in uses:
        source = copy.deepcopy(next(s for s in example["sources"] if s["id"] == use["dataset"]))
        source["members"] = [{"member_stem": m["member_stem"], "components": m["components"]}
                             for m in selected_members(selection, use)]
        chronology = source["chronology"]
        for key in ("source_calendar_bp", "target_calendar_bp", "source_minus_target_years"):
            chronology[key] = use[key]
        chronology["original_age"]["value"] = use["source_calendar_bp"] / 1000
        chronology["match_policy"] = use["policy"]
        source["modifications"] = "Original inputs preserved; checksums verified. Any projected/rasterized evidence is diagnostic only."
        manifest["sources"].append(source)
    for layer in example["layers"]:
        entry = copy.deepcopy(layer)
        if entry["class"] == "grounded-ice":
            entry["regions"] = [{"id": "north-america-nadi1" if u["dataset"] == "nadi-1" else "eurasia-dated1",
                                 "coverage_status": "unavailable",
                                 "reason": f"Selected {u['source_calendar_bp']} calendar BP margin suite; grounding and supported domain unresolved. Study exclusions remain in force.",
                                 "source_ids": [u["dataset"]]} for u in uses]
            entry["regions"].append({"id": "rest-of-world", "coverage_status": "unavailable",
                                     "reason": "No selected and classified epoch-specific ice input/domain.", "source_ids": []})
        manifest["layers"].append(entry)
    return manifest


def variant(layer):
    name = Path(layer["member_stem"]).name
    for token, label in (("OPTIMAL", "central"), ("MIN", "minimum"), ("MAX", "maximum"),
                         ("mc", "central"), ("min", "minimum"), ("max", "maximum")):
        if token in name.split("_"):
            return label
    raise ContractError(f"Unknown source variant: {name}")


def render_member(cache, layer, close_open_rings=False):
    import shapefile
    from pyproj import CRS, Transformer
    from .geometry import close_diagnostic_ring, filter_category, project_ring
    with zipfile.ZipFile(cache / layer["archive"]) as archive:
        raw = member_bytes(archive, layer)
    require(CRS.from_wkt(raw["prj"].decode()).equals(CRS.from_user_input(layer["crs"]), ignore_axis_order=True), "Archive CRS mismatch")
    reader = shapefile.Reader(**{k: io.BytesIO(raw[k]) for k in ("shp", "shx", "dbf")})
    require(len(reader) == layer["record_count"] and reader.shapeType == layer["shape_type"], "Shapefile layout mismatch")
    polygons = []
    excluded = 0
    native_vertices = 0
    repairs = []
    for record_index, record in enumerate(reader.iterShapeRecords()):
        if not filter_category(record.record.as_dict()):
            excluded += 1
            continue
        geometry = record.shape.__geo_interface__
        require(geometry["type"] in ("Polygon", "MultiPolygon"), "Expected polygon evidence")
        parts = [geometry["coordinates"]] if geometry["type"] == "Polygon" else geometry["coordinates"]
        for polygon_index, polygon in enumerate(parts):
            native_vertices += sum(len(r) for r in polygon)
            rings = []
            for ring_index, ring in enumerate(polygon):
                try:
                    ring, repair = close_diagnostic_ring(ring, close_open_rings)
                    rings.append(project_ring(ring, layer["crs"]))
                except ContractError as error:
                    raise ContractError(f"{layer['member_stem']}, record {record_index}, polygon {polygon_index}, ring {ring_index}: {error}") from error
                if repair:
                    repairs.append({"record": record_index, "polygon": polygon_index, "ring": ring_index, **repair})
            polygons.append(rings)
    require(polygons, "No positive margin evidence; do not publish an empty diagnostic")
    return polygons, {"lake_records_excluded": excluded, "native_vertices": native_vertices,
                      "projected_vertices": sum(len(r) for p in polygons for r in p),
                      "native_crs": layer["crs"], "target_crs": "EPSG:4326", "axis_order": "longitude,latitude",
                      "projection_pipeline": Transformer.from_crs(layer["crs"], "EPSG:4326", always_xy=True).definition,
                      "edge_subdivision_tolerance_degrees": 360 / 4096 / 32,
                      "ring_closure_repairs": repairs,
                      "topology_validation": "not scientifically validated; no self-intersection repair"}


def processing_record():
    from pyproj import __proj_version__
    paths = sorted((ROOT / "scripts/paleomasks").glob("*.py")) + [ROOT / "scripts/generate_reconstruction_masks.py"]
    files = {p.relative_to(ROOT).as_posix(): fingerprint(p) for p in paths}
    revision = subprocess.run(["git", "rev-parse", "HEAD"], cwd=ROOT, capture_output=True, text=True, check=True).stdout.strip()
    patch = subprocess.run(["git", "diff", "--binary", "HEAD"], cwd=ROOT, capture_output=True, check=True).stdout
    return {"command_argv": [sys.executable, *sys.argv], "git_revision": revision,
            "tracked_dirty_patch_sha256": hashlib.sha256(patch).hexdigest() if patch else None,
            "generator_files_including_untracked": files,
            "dependencies": {p: importlib.metadata.version(p) for p in ("numpy", "pillow", "pyshp", "pyproj")},
            "python": sys.version, "png_encoder": {"compress_level": 9, "optimize": False},
            "proj_version": __proj_version__, "zlib_version": zlib.ZLIB_RUNTIME_VERSION,
            "rasterization": "regular subcell centres, even/odd holes per polygon, polygon union, periodic longitude, box average",
            "quantization": "floor(255*f+0.5)", "scientific_validation": "pending"}


def diagnostics(package, manifest, contract, selection, cache, samples, close_open_rings=False):
    import numpy as np
    from PIL import Image
    from PIL.PngImagePlugin import PngInfo
    from .geometry import analyze_sampling_losses, rasterize
    folder = package / "diagnostics"
    folder.mkdir()
    artifacts = []
    report = {"processing": processing_record(), "members": [], "bound_comparisons": [],
              "limitations": ["No supported presence/absence domains or class semantics are asserted.",
                              "Subpixel losses and nonnested bounds are reported, never silently repaired.",
                              "Analytic loss checks assume simple rings and valid holes; they do not validate topology or union different polygons."]}
    report["processing"]["sampling_loss_analysis"] = (
        "Per missed polygon: image-plane rectangle clipping, exterior minus holes, "
        "periodic longitude, translated shoelace area, floor(255*f+0.5); "
        "4096-cell work limit; diagnostic pixels unchanged")
    for source in manifest["sources"]:
        use = next(u for u in contract["permitted_margin_uses"] if u["era_slug"] == manifest["era"]["slug"]
                   and u["dataset"] == source["id"])
        grids = {}
        for layer in selected_members(selection, use):
            print(f"Rendering diagnostic {layer['member_stem']}", flush=True)
            polygons, geometry_log = render_member(cache, layer, close_open_rings)
            coarse, _ = rasterize(polygons, samples=samples)
            alpha, hits = rasterize(polygons, samples=samples * 2)
            label = variant(layer)
            grids[label] = alpha
            rgba = np.zeros((*alpha.shape, 4), dtype=np.uint8)
            rgba[alpha > 0, :3] = (255, 255, 255)
            rgba[:, :, 3] = alpha
            filename = f"ice-margin-evidence--{source['id']}--{label}.png"
            info = PngInfo()
            info.add(b"sRGB", b"\x00")
            Image.fromarray(rgba).save(folder / filename, pnginfo=info, compress_level=9, optimize=False)
            artifacts.append({"path": f"diagnostics/{filename}", **fingerprint(folder / filename)})
            delta = np.abs(alpha.astype(np.int16) - coarse.astype(np.int16))
            report["members"].append({"source_id": source["id"], "member_stem": layer["member_stem"],
                                       "variant": label, "chronology": source["chronology"],
                                       "input_components": layer["components"], "geometry": geometry_log,
                                       "samples_per_axis": samples * 2, "comparison_samples_per_axis": samples,
                                       "max_alpha_delta": int(delta.max()), "mean_alpha_delta": float(delta.mean()),
                                       "positive_polygons_without_subpixel_hits": [i for i, h in enumerate(hits) if h == 0],
                                       "sampling_loss_analysis": analyze_sampling_losses(polygons, hits),
                                       "positive_polygons": len(hits),
                                       "production_eligible": False})
        report["bound_comparisons"].append({"source_id": source["id"],
            "minimum_gt_central_pixels": int(np.count_nonzero(grids["minimum"] > grids["central"])),
            "central_gt_maximum_pixels": int(np.count_nonzero(grids["central"] > grids["maximum"])),
            "interpretation": "Raster-space diagnostic only; no enforced nesting or probability interpretation"})
    path = folder / "ice-margin-evidence-report.json"
    write_json(path, report)
    artifacts.append({"path": f"diagnostics/{path.name}", **fingerprint(path)})
    manifest["diagnostics"] = artifacts


def generate(eras, contract, selection, cache, output, allow_unavailable, with_diagnostics, samples, close_open_rings=False):
    require(allow_unavailable, "No production masks are supported by the pinned selection. Grounding/domains and marine terrain gates remain unresolved. Use --allow-unavailable to explicitly request evidence/disposition packages without masks.")
    require(not with_diagnostics or samples in (1, 2, 4), "Diagnostic sampling factor must be 1, 2 or 4 (also checked at 2x)")
    require(not close_open_rings or with_diagnostics, "Ring closure is available only for diagnostics")
    output = output.resolve()
    for forbidden in (ROOT / "docs", ROOT / "public", ROOT / "src"):
        require(not output.is_relative_to(forbidden), "Research artifacts must stay outside the application/static site")
    for era in eras:
        require(not (output / era["slug"]).exists(), f"Package already exists: {output / era['slug']}; choose a new output directory")
    # Verify before creating any output, including metadata-only packages.
    slugs = {e["slug"] for e in eras}
    layers = {m["member_stem"]: m for u in contract["permitted_margin_uses"] if u["era_slug"] in slugs
              for m in selected_members(selection, u)}
    verify_inputs(selection, cache, layers=list(layers.values()))
    output.mkdir(parents=True, exist_ok=True)
    for era in eras:
        with tempfile.TemporaryDirectory(prefix=".staging-", dir=output) as temp:
            package = Path(temp) / era["slug"]
            (package / "provenance").mkdir(parents=True)
            manifest = build_manifest(era, contract, selection)
            for name in RECORDS:
                dest = package / "provenance" / name
                shutil.copyfile(DATA / name, dest)
                manifest["provenance_records"].append({"path": f"provenance/{name}", **fingerprint(dest)})
            if with_diagnostics:
                diagnostics(package, manifest, contract, selection, cache, samples, close_open_rings)
            write_json(package / "manifest.json", manifest)
            validate_manifest(manifest, package)
            require(not (output / era["slug"]).exists(), "Concurrent output collision")
            package.rename(output / era["slug"])
        print(f"Wrote {output / era['slug']}: 6 unavailable classes, 0 production masks", flush=True)


def main(argv=None):
    parser = argparse.ArgumentParser(description="Reproducible research evidence pipeline; scientific production gates enforced.")
    parser.add_argument("--cache", type=Path, default=DATA / "research-cache")
    sub = parser.add_subparsers(dest="command", required=True)
    for name in ("verify-inputs", "fetch-inputs"):
        p = sub.add_parser(name)
        p.add_argument("--all-downloads", action="store_true", help="Include all 14 pinned research downloads")
    sub.add_parser("plan")
    p = sub.add_parser("expand-eras", help="Account for all 54 eras; attach selected partial ice and withhold unsupported masks")
    p.add_argument("--output", type=Path, default=DATA / "masks/phase6-eras-v1")
    p.add_argument("--overlay-root", type=Path, help="Reuse verified existing overlays; otherwise regenerate all five selected eras")
    p = sub.add_parser("validate-expansion")
    p.add_argument("package", type=Path)
    p = sub.add_parser("package-delivery", help="Package partial evidence, per-era editing guides and a verified ZIP")
    p.add_argument("--expansion", type=Path, required=True)
    p.add_argument("--output", type=Path, required=True)
    p = sub.add_parser("validate-delivery")
    p.add_argument("package", type=Path)
    p = sub.add_parser("generate-overlays", help="Generate operator-directed unified static ice overlays")
    scope = p.add_mutually_exclusive_group(required=True)
    scope.add_argument("--era")
    scope.add_argument("--all-supported", action="store_true")
    p.add_argument("--output", type=Path, default=DATA / "masks/overlays-v2")
    p = sub.add_parser("validate-overlay")
    p.add_argument("manifest", type=Path)
    p = sub.add_parser("review-reference", help="Review 10,000 BCE source transfer, coastal coverage and diagnostic previews")
    p.add_argument("--ice-package", type=Path, required=True)
    p.add_argument("--coast-package", type=Path, required=True)
    p.add_argument("--output", type=Path, required=True)
    p.add_argument("--gdal-python", type=Path, default=Path("/usr/bin/python3"))
    p = sub.add_parser("coastline-candidates", help="Generate regional Blue Marble/GIA coastal candidates for scientific review")
    p.add_argument("--era", required=True)
    p.add_argument("--ice-package", type=Path, required=True)
    p.add_argument("--terrain-root", type=Path, default=DATA / "research-cache/ice6g-native-v1")
    p.add_argument("--output", type=Path, required=True)
    p.add_argument("--gdal-python", type=Path, default=Path("/usr/bin/python3"))
    p = sub.add_parser("inspect-terrain", help="Verify and export selected native ICE6G terrain with its validity mask; requires GDAL Python")
    p.add_argument("--output", type=Path, default=DATA / "research-cache/ice6g-native-v1")
    p = sub.add_parser("validate")
    p.add_argument("manifest", type=Path)
    p = sub.add_parser("generate")
    scope = p.add_mutually_exclusive_group(required=True)
    scope.add_argument("--era")
    scope.add_argument("--all-supported", action="store_true", help="All five eras with selected margin evidence")
    p.add_argument("--output", type=Path, default=DATA / "masks/v1")
    p.add_argument("--allow-unavailable", action="store_true")
    p.add_argument("--diagnostics", action="store_true")
    p.add_argument("--close-open-rings", action="store_true", help="Explicitly log/apply ring closure for diagnostics only")
    p.add_argument("--samples", type=int, choices=(1, 2, 4), default=4)
    args = parser.parse_args(argv)
    try:
        contract, selection, catalog = load_contract()
        if args.command == "plan":
            print(json.dumps({"era_count": len(catalog), "permitted_margin_uses": contract["permitted_margin_uses"],
                              "legacy_v1_production_masks_supported": 0,
                              "static_ice_overlay_eras": sorted({u["era_slug"] for u in contract["permitted_margin_uses"]}),
                              "validated_global_reconstructions": 0,
                              "operator_policy": read_json(DATA / "OUTPUT-OVERLAY-CONTRACT.json"),
                              "gates": [
                                  "Blue Marble coastline classification and native ocean connectivity",
                                  "lake exclusion and empirical-ice-priority coastal composition",
                                  "source coverage and topology validation for full reconstruction"],
                              "operator_handoff": "data-sources/textures/PHASE4-OPERATOR-ISSUES.md"}, indent=2))
        elif args.command in ("verify-inputs", "fetch-inputs"):
            if args.command == "fetch-inputs":
                for record in archive_inputs(selection, args.all_downloads):
                    acquire(record, args.cache)
            print(json.dumps(verify_inputs(selection, args.cache, args.all_downloads)))
        elif args.command == "expand-eras":
            from .expansion import expand_eras
            expand_eras(contract, selection, catalog, args.cache, args.output, args.overlay_root)
        elif args.command == "validate-expansion":
            from .expansion import validate_expansion
            print(json.dumps(validate_expansion(args.package, contract, selection, catalog)))
        elif args.command == "package-delivery":
            from .delivery import package_delivery
            package_delivery(args.expansion, args.output, contract, selection, catalog)
        elif args.command == "validate-delivery":
            from .delivery import validate_delivery
            print(json.dumps(validate_delivery(args.package, contract, selection, catalog)))
        elif args.command == "validate":
            manifest = read_json(args.manifest)
            print(json.dumps(validate_manifest(manifest, args.manifest.parent if manifest["record_kind"] == "delivery" else None)))
        elif args.command == "inspect-terrain":
            from .terrain import inspect_terrain
            inspect_terrain(args.cache, args.output, catalog)
        elif args.command == "validate-overlay":
            from .overlays import validate_overlay
            print(json.dumps(validate_overlay(read_json(args.manifest), args.manifest.parent, contract, selection, catalog)))
        elif args.command == "review-reference":
            from .reference import review_reference
            review_reference(args.ice_package, args.coast_package, args.cache, args.output,
                             args.gdal_python, contract, selection, catalog)
        elif args.command == "generate-overlays":
            from .overlays import generate_overlays
            slugs = {u["era_slug"] for u in contract["permitted_margin_uses"]} if args.all_supported else {args.era}
            require(slugs <= set(catalog), "Unknown catalog era")
            generate_overlays([e for slug, e in catalog.items() if slug in slugs], contract, selection, catalog, args.cache, args.output)
        elif args.command == "coastline-candidates":
            from .coasts import coastline_candidates
            coastline_candidates(args.era, args.ice_package, args.terrain_root, args.output, contract, args.gdal_python)
        else:
            if args.all_supported:
                slugs = {u["era_slug"] for u in contract["permitted_margin_uses"]}
                eras = [e for slug, e in catalog.items() if slug in slugs]
            else:
                require(args.era in catalog, f"Unknown catalog era: {args.era}")
                eras = [catalog[args.era]]
            generate(eras, contract, selection, args.cache, args.output, args.allow_unavailable, args.diagnostics, args.samples, args.close_open_rings)
    except (ContractError, OSError, KeyError, ValueError, TypeError, zipfile.BadZipFile, ImportError, RuntimeError, subprocess.SubprocessError) as error:
        print(f"ERROR: {error}", file=sys.stderr)
        return 2
    return 0
