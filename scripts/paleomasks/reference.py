"""Reproducible Phase-5 reference review; never promotes candidates automatically."""
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile

import numpy as np
from PIL import Image, ImageDraw
from scipy import ndimage

from .coasts import blue_marble_classes
from .contract import DATA, ROOT, fingerprint, read_json, require, safe_path, selected_members, verify_file
from .overlays import validate_overlay
from .pipeline import variant, verify_inputs, write_json

REGIONS = {
    "north-america": (-170, 35, -45, 85),
    "scandinavia": (0, 50, 45, 75),
    "alaska-domain-edge": (-175, 55, -145, 75),
    "atlantic-shelf": (-80, 35, -45, 55),
    "champlain": (-78, 43, -65, 50),
    "bering-strait": (-175, 60, -160, 70),
    "doggerland": (-5, 50, 10, 60),
    "sunda": (95, -10, 120, 15),
    "greenland": (-60, 58, -20, 85),
}
COLORS = {"exposed": (217, 164, 65), "flooded": (40, 120, 181)}


def crop_box(bounds, shape):
    west, south, east, north = bounds
    height, width = shape[:2]
    require(-180 <= west < east <= 180 and -90 <= south < north <= 90, "Invalid review bounds")
    return (int(np.floor((west + 180) * width / 360)), int(np.floor((90 - north) * height / 180)),
            int(np.ceil((east + 180) * width / 360)), int(np.ceil((90 - south) * height / 180)))


def area_km2(alpha):
    """Spherical cell-area weighted alpha; diagnostic, not equal-area pixel counts."""
    height, width = alpha.shape
    edges = np.linspace(np.pi / 2, -np.pi / 2, height + 1)
    row_area = 6371.0088 ** 2 * (2 * np.pi / width) * (np.sin(edges[:-1]) - np.sin(edges[1:]))
    return round(float(np.dot(alpha.sum(axis=1, dtype=np.float64) / 255, row_area)), 3)


def comparison_metrics(ice, exposed, flooded, domain):
    require(all(a.dtype == np.uint8 and a.shape == ice.shape for a in (ice, exposed, flooded, domain)),
            "Review grids must align as uint8")
    require(all(a.ndim == 2 for a in (ice, exposed, flooded, domain)), "Review grids must be 2D")
    # Opposite classes can occupy disjoint subcells of one pixel. Independent
    # rounding can exceed the rounded union by one alpha unit, never more.
    require(np.all(exposed.astype(int) + flooded <= domain.astype(int) + 1),
            "Coastal class coverage exceeds comparison domain")
    require(np.all(exposed <= domain) and np.all(flooded <= domain), "Coastal class exceeds comparison domain")
    require(not np.any(((exposed > 0) | (flooded > 0) | (domain > 0)) & (ice > 0)),
            "Coastal comparison violates empirical ice priority")
    return {"ice_overlap_pixels": 0,
        "outside_domain_pixels": int(np.count_nonzero(((exposed > 0) | (flooded > 0)) & (domain == 0))),
        "mixed_coastal_pixels": int(np.count_nonzero((exposed > 0) & (flooded > 0))),
        "layers": {name: {"positive_pixels": int(np.count_nonzero(a)), "coverage_area_km2": area_km2(a)}
                   for name, a in (("ice", ice), ("exposed", exposed), ("flooded", flooded), ("comparison_domain", domain))}}


def bound_metrics(minimum, central, maximum):
    return {"minimum_above_central_pixels": int(np.count_nonzero(minimum > central)),
            "central_above_maximum_pixels": int(np.count_nonzero(central > maximum)),
            "any_bound_difference_pixels": int(np.count_nonzero((minimum != central) | (central != maximum))),
            "coverage_area_km2": {k: area_km2(a) for k, a in
                                   (("minimum", minimum), ("central", central), ("maximum", maximum))},
            "interpretation": "source alternatives, not nested guarantees or probability bounds"}


def source_agreement(alpha, centres):
    require(alpha.shape == centres.shape and centres.dtype == bool, "Independent raster grid mismatch")
    disagreements = ((alpha == 255) & ~centres) | ((alpha == 0) & centres)
    # A centre raster is not antialiased coverage; only inspect full/empty
    # disagreement. Report distance from all detected edges, without auto-passing.
    occupied = alpha > 0
    edge = ndimage.binary_dilation(occupied) ^ ndimage.binary_erosion(occupied)
    edge |= (alpha > 0) & (alpha < 255)
    near_edge = ndimage.binary_dilation(edge, iterations=1)
    return {"opaque_or_empty_disagreements": int(disagreements.sum()),
            "disagreements_beyond_one_pixel_edge_band": int(np.count_nonzero(disagreements & ~near_edge)),
            "method": "independent OGR native-vertex reprojection and GDAL centre hits vs full/empty 8x8 coverage",
            "limitation": "edge conventions and straight projected segments differ; not independent geological validation"}


def elevation_screen(exposed, modern_elevation):
    """Flag gross land-as-ocean candidates, not near-shore or paleo accuracy."""
    require(exposed.shape == modern_elevation.shape, "Elevation screen grids must align")
    valid = np.isfinite(modern_elevation) & (modern_elevation != -99999)
    return {"exposed_pixels_above_modern_height_m": {
                str(height): int(np.count_nonzero((exposed > 0) & valid & (modern_elevation > height)))
                for height in (0, 100, 500)},
            "missing_elevation_at_exposed_pixels": int(np.count_nonzero((exposed > 0) & ~valid)),
            "method": "nearest modern ETOPO cell at final pixel centre; flags are not pixel-area intersections",
            "interpretation": "large positive modern heights flag RGB ocean misclassification; thresholds are diagnostic, not corrections"}


def read_alpha(path, rgb=None):
    with Image.open(path) as image:
        require(image.size == (4096, 2048) and image.mode == ("RGBA" if rgb else "L"), "Invalid review PNG grid/encoding")
        pixels = np.asarray(image).copy()
    if rgb:
        alpha = pixels[:, :, 3]
        require(np.all(pixels[alpha > 0, :3] == rgb) and np.all(pixels[alpha == 0, :3] == 0), "Invalid solid mask colors")
        return alpha
    return pixels


def validate_coasts(package, ice_package, contract, catalog):
    report = read_json(package / "coastline-candidates.json")
    require(report["kind"] == "regional_coastline_candidates" and report["production_eligible"] is False,
            "Reference review accepts coastal candidates only")
    require(report["era"] == catalog["world-bc10000"] and report["grid_id"] == contract["grid"]["id"], "Coast era/grid mismatch")
    require(report["baseline"] == contract["grid"]["alignment_reference"], "Coast baseline mismatch")
    verify_file(DATA / "ICE6G-TERRAIN-INSPECTION.json", report["terrain_record"])
    require(report["terrain"] in read_json(DATA / "ICE6G-TERRAIN-INSPECTION.json")["layers"], "Unregistered coast terrain")
    require(report["terrain"]["era_slug"] == "world-bc10000", "Wrong terrain era")
    require(report["operator_policy"] == read_json(DATA / "OUTPUT-OVERLAY-CONTRACT.json"), "Coast policy mismatch")
    verify_file(ice_package / "manifest.json", report["ice_manifest"])
    verify_file(ice_package / "ice.png", report["ice_overlay"])
    expected = {"exposed-land-candidate.png", "flooded-land-candidate.png", "comparison-domain.png"}
    require(len(report["artifacts"]) == 3 and {a["path"] for a in report["artifacts"]} == expected, "Missing/duplicate coast artifacts")
    for record in report["artifacts"]:
        verify_file(safe_path(package, record["path"]), record)
    require({p.relative_to(package).as_posix() for p in package.rglob("*") if p.is_file()} == expected | {"coastline-candidates.json"},
            "Unexpected coastal package files")
    return report


def previews(output, baseline, alphas, bounds, ocean, excluded, elevation):
    """Separate labelled review plates; no preview is a production mask."""
    composite = Image.fromarray(baseline).convert("RGBA")
    for name, color in [*COLORS.items(), ("ice", (255, 255, 255))]:
        rgba = np.zeros((*alphas[name].shape, 4), dtype=np.uint8)
        rgba[:, :, :3] = color
        rgba[:, :, 3] = alphas[name]
        composite = Image.alpha_composite(composite, Image.fromarray(rgba))
    coverage = np.full_like(baseline, (45, 45, 55))
    coverage[alphas["domain"] > 0] = (40, 160, 170)
    coverage[alphas["ice"] > 0] = (255, 255, 255)
    alternatives = np.full_like(baseline, (45, 45, 55))
    alternatives[bounds["maximum"] > 0] = (210, 90, 180)
    alternatives[alphas["ice"] > 0] = (250, 220, 110)
    alternatives[bounds["minimum"] > 0] = (80, 195, 240)
    classes = np.full_like(baseline, (130, 110, 75))
    classes[ocean] = (40, 120, 181)
    classes[excluded] = (190, 75, 170)
    flags = baseline.copy()
    flags[(alphas["exposed"] > 0) & (elevation > 100)] = (255, 40, 60)
    panels = [(Image.fromarray(baseline), "Modern baseline (not paleo evidence)"),
              (composite.convert("RGB"), "Candidates: gold=exposed blue=flooded white=ice"),
              (Image.fromarray(coverage), "Domain: cyan=comparison white=ice dark=unknown"),
              (Image.fromarray(alternatives), "Ice alternatives: pink=max gold=central cyan=min"),
              (Image.fromarray(classes), "RGB classes: blue=ocean pink=excluded tan=other"),
              (Image.fromarray(flags), "Red: exposed candidate with modern elevation >100m")]
    output.mkdir()
    for name, region in {"world": (-180, -90, 180, 90), **REGIONS}.items():
        box = crop_box(region, baseline.shape)
        width = 720
        height = round((box[3] - box[1]) * width / (box[2] - box[0]))
        plate = Image.new("RGB", (width * 2, (height + 34) * 3 + 52), (15, 20, 30))
        draw = ImageDraw.Draw(plate)
        draw.text((12, 8), f"PHASE 5 / 10,000 BCE / 11,949 cal BP / {name} {region}", fill="white")
        draw.text((12, 27), "DIAGNOSTIC ONLY. Partial evidence; modern base persists outside masks. No route/traversability inference.", fill="white")
        for index, (panel, caption) in enumerate(panels):
            x, y = (index % 2) * width, 52 + (index // 2) * (height + 34)
            draw.text((x + 10, y + 8), caption, fill="white")
            plate.paste(panel.crop(box).resize((width, height), Image.Resampling.NEAREST), (x, y + 34))
        plate.save(output / f"{name}.png", compress_level=9)


def review_reference(ice_package, coast_package, cache, output, gdal_python, contract, selection, catalog):
    ice_package, coast_package, output = ice_package.resolve(), coast_package.resolve(), output.resolve()
    require(not output.exists(), "Reference review exists; choose a fresh directory")
    for forbidden in (ROOT / "docs", ROOT / "public", ROOT / "src", cache.resolve(), ice_package, coast_package):
        require(not output.is_relative_to(forbidden), "Keep reviews outside app and input packages/cache")
    manifest = read_json(ice_package / "manifest.json")
    require(manifest["era"]["slug"] == "world-bc10000", "Phase 5 is restricted to the reference era")
    validate_overlay(manifest, ice_package, contract, selection, catalog)
    coast = validate_coasts(coast_package, ice_package, contract, catalog)
    baseline_path = ROOT / contract["grid"]["alignment_reference"]["repository_path"]
    verify_file(baseline_path, contract["grid"]["alignment_reference"])
    layers = [m for u in contract["permitted_margin_uses"] if u["era_slug"] == "world-bc10000" for m in selected_members(selection, u)]
    verify_inputs(selection, cache, layers=layers)
    modern_record = next(r for r in selection["downloads"] if r["path"].endswith("ETOPO_2022_v1_60s_N90W180_bed.tif"))
    modern_path = cache / Path(modern_record["path"]).name
    verify_file(modern_path, modern_record)
    evidence = DATA / "PHASE5-EVIDENCE.json"
    output.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(prefix=".reference-review-", dir=output.parent) as temp:
        temp = Path(temp)
        write_json(temp / "job.json", {"cache": str(cache.resolve()), "layers": layers, "modern_elevation": str(modern_path.resolve())})
        print("Checking six source layers with independent OGR/GDAL rasterization", flush=True)
        subprocess.run([str(gdal_python), str(ROOT / "scripts/paleomasks/reference_gdal.py"), str(temp / "job.json"), str(temp)], check=True)
        package = temp / "package"
        package.mkdir()
        shutil.copytree(ice_package, package / "ice")
        shutil.copytree(coast_package, package / "coastline-candidates")
        shutil.copyfile(evidence, package / evidence.name)
        arrays = {"ice": read_alpha(ice_package / "ice.png", (255, 255, 255)),
                  "exposed": read_alpha(coast_package / "exposed-land-candidate.png", COLORS["exposed"]),
                  "flooded": read_alpha(coast_package / "flooded-land-candidate.png", COLORS["flooded"]),
                  "domain": read_alpha(coast_package / "comparison-domain.png")}
        bounds = {v: read_alpha(ice_package / manifest["overlays"][v]["path"], (255, 255, 255)) for v in ("minimum", "maximum")}
        stats = comparison_metrics(arrays["ice"], arrays["exposed"], arrays["flooded"], arrays["domain"])
        gdal_report = read_json(temp / "gdal-report.json")
        agreement = {}
        for name, alpha in {"central": arrays["ice"], **bounds}.items():
            centres = np.zeros_like(alpha, dtype=bool)
            for index, layer in enumerate(layers):
                if variant(layer) == name:
                    centres |= np.load(temp / f"source-{index}.npy")
            agreement[name] = source_agreement(alpha, centres)
        baseline = np.asarray(Image.open(baseline_path).convert("RGB"))
        ocean, excluded = blue_marble_classes(baseline)
        elevation = np.load(temp / "modern-elevation.npy")
        regional = {}
        for name, region in REGIONS.items():
            x0, y0, x1, y1 = crop_box(region, arrays["ice"].shape)
            regional[name] = {"bounds_west_south_east_north": region,
                "positive_pixels": {k: int(np.count_nonzero(a[y0:y1, x0:x1])) for k, a in arrays.items()},
                "baseline_elevation_screen": elevation_screen(arrays["exposed"][y0:y1, x0:x1], elevation[y0:y1, x0:x1])}
        checkpoints = []
        for point in read_json(evidence)["checkpoints"]:
            x = int((point["longitude"] + 180) * 4096 / 360)
            y = int((90 - point["latitude"]) * 2048 / 180)
            checkpoints.append({**point, "pixel_column_row": [x, y],
                "alpha": {k: int(a[y, x]) for k, a in arrays.items()},
                "baseline_class": "ocean" if ocean[y, x] else "excluded" if excluded[y, x] else "other"})
        print("Writing separate regional diagnostic plates", flush=True)
        previews(package / "diagnostics", baseline, arrays, bounds, ocean, excluded, elevation)
        report = {"kind": "reference_era_review", "era": catalog["world-bc10000"],
            "decision": "partial_ice_source_consistency_reviewed_coastlines_remain_candidates",
            "scientifically_validated_global_reconstruction": False, "coastline_production_eligible": False,
            "acceptance": {"ice": "source_transfer_checked_scientific_acceptance_pending",
                "coastlines": "withheld_pending_baseline_and_seam_resolution",
                "expansion": "not_authorized_by_this_review",
                "native_invalid_features": sum(len(layer["invalid_native_geometries"]) for layer in gdal_report["layers"])},
            "source_minus_target_years": 51, "metrics": stats,
            "baseline_elevation_screen": {**elevation_screen(arrays["exposed"], elevation), "source": modern_record},
            "ice_alternatives": bound_metrics(bounds["minimum"], arrays["ice"], bounds["maximum"]),
            "independent_source_rasterization": {**gdal_report, "agreement": agreement},
            "regions": regional, "checkpoints": checkpoints, "reported_native_counts": coast["native_counts"],
            "coverage": {"ice": "partial NADI-1 and DATED-1 evidence; transparency is not confirmed absence",
                "coastlines": "regional image-derived candidates; comparison-domain is processing support, not validated scientific coverage",
                "unavailable": ["Greenland paleo ice", "Antarctica paleo ice", "Iceland and unselected mountain glaciers",
                    "independent floating-shelf additions", "winter sea ice", "summer sea ice", "coastlines outside selected terrain"]},
            "limitations": ["No surveyed shoreline error or complete global reconstruction is established.",
                "Source raster agreement is a transfer check, not independent geological confirmation.",
                "Native domain edge clips Alaska coastal candidates; Bering Strait and Doggerland have no coastline support.",
                "Image-color baseline, near-ice ocean connectivity and coastline sampling convergence remain unresolved.",
                "Ice alternatives are nonnested; preserve their original shapes. Inspect source topology findings.",
                "No neighbouring age slice or alternative GIA model was adopted; the 51-year offset is unchanged."],
            "processing": {"command_argv": [sys.executable, *sys.argv],
                "code": {name: fingerprint(ROOT / "scripts/paleomasks" / name) for name in ("reference.py", "reference_gdal.py", "coasts.py")},
                "numpy": np.__version__, "baseline": contract["grid"]["alignment_reference"],
                "evidence": fingerprint(evidence)},
            "artifacts": [{"path": p.relative_to(package).as_posix(), **fingerprint(p)} for p in sorted(package.rglob("*")) if p.is_file()]}
        write_json(package / "review.json", report)
        require(not output.exists(), "Concurrent review output collision")
        package.rename(output)
    print(f"Wrote {output}: reference review and diagnostics; coastal production withheld", flush=True)
