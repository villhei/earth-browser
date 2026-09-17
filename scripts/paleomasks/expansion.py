"""All-era dispositions with only the pinned, partial ice evidence attached.

This expands catalog accounting, not the rejected coastal reconstruction or the
scientific acceptance of the reference era. No nearest-era fallback is allowed.
"""
from pathlib import Path
import shutil
import tempfile

from .contract import DATA, ROOT, RECORDS, fingerprint, read_json, require, safe_path, verify_file
from .pipeline import write_json

PROVENANCE = (*RECORDS, "OUTPUT-OVERLAY-CONTRACT.json", "PHASE4-OPERATOR-DIRECTIVES.md",
              "PHASE5-VALIDATION.json", "PHASE5-VALIDATION.md", "PHASE5-EVIDENCE.json")
LAYERS = ("ice", "exposed-land", "flooded-land", "sea-ice-winter", "sea-ice-summer")
GROUP_REASONS = {
    "L": "WALIS is selected as regional relative-sea-level evidence, not a pinned exact-date surface or ice polygon. No 124,949 BP flooded-land geometry is supported; no uniform +7 m offset or deglacial extrapolation is selected.",
    "D12": "Regional ice margins are selected. The reference coastline classifier fails the modern-ocean check and has an unresolved domain-edge truncation; coastal expansion is withheld.",
    "D10": "Regional ice margins are selected. DATED-1 TS10 is permitted only for this 9,949 BP endpoint approximation. Coastlines remain unavailable while reference classification and seams fail acceptance.",
    "H-early": "Only NADI-1 regional ice margins are pinned. DATED-1 is not extrapolated into the Holocene; coastal acceptance and additional regional sources remain unresolved.",
    "H": "HOLSEA, regional GIA, historical charts and dated glacier records are evidence families only. No contemporaneous mask geometry is selected; neither modern imagery nor younger NADI slices are an automatic fallback.",
    "M": "Dated glacier, coast-survey and ice-sheet observations are not pinned to this year. Modern image appearance is not a contemporaneous reconstruction.",
}


def slice_register(contract):
    """Expose every source age's consumers, including any explicit future reuse."""
    groups = {}
    for use in contract["permitted_margin_uses"]:
        key = (use["dataset"], use["source_calendar_bp"])
        groups.setdefault(key, []).append(use["era_slug"])
    return [{"dataset": dataset, "source_calendar_bp": age, "era_slugs": slugs,
             "reused_across_eras": len(slugs) > 1,
             "temporal_interpretation": "source snapshot; offsets do not establish independent target-date precision"}
            for (dataset, age), slugs in groups.items()]


def era_disposition(era, contract, selection):
    selected = next(e for e in selection["eras"] if e["slug"] == era["slug"])
    group = selected["source_group"]
    uses = [u for u in contract["permitted_margin_uses"] if u["era_slug"] == era["slug"]]
    season_reason = "No selected, byte-pinned seasonal spatial observations or reconstructed boundaries for this target."
    if group == "M":
        season_reason = ("The selected satellite Sea Ice Index family does not cover 1960." if era["year_start"] == 1960 else
                         "Sea Ice Index v4 is a selected family only: monthly spatial files, observation dates, hemisphere-specific seasons and concentration threshold are not yet pinned.")
    layers = {}
    for layer in LAYERS:
        partial = layer == "ice" and bool(uses)
        reason = GROUP_REASONS[group]
        if layer.startswith("sea-ice"):
            reason = season_reason
        elif layer in ("exposed-land", "flooded-land") and group in ("D12", "D10", "H-early"):
            reason = "Unavailable: phase-5 coastal scientific acceptance failed baseline classification and regional seam checks. No candidate coastline is promoted or expanded."
        layers[layer] = {"availability": "partial" if partial else "unavailable",
                         "scientific_acceptance": "pending" if partial else "unavailable",
                         "reason": reason, "products": []}
    if uses:
        layers["ice"]["products"] = [
            {"bound": bound, "path": path}
            for bound, path in (("central", "ice/ice.png"),
                                ("minimum", "ice/diagnostics/ice-minimum.png"),
                                ("maximum", "ice/diagnostics/ice-maximum.png"))]
    issues = ["No scientific acceptance is conferred by expanding the catalog."]
    if era["slug"] == "world-bc10000":
        issues += ["NADI-1 12 ka OPTIMAL feature 0 has a recorded self-intersection; source bytes and derived pixels remain unchanged.",
                   "Reference source transfer was independently checked, but source bounds remain nonnested."]
    elif uses:
        issues += ["The reference review does not validate this era's topology, margins or coastlines."]
    if era["slug"] == "world-bc4000":
        issues += ["The known NADI-1 6 ka open ring is closed only in derived geometry with the operation logged in the ice manifest."]
    return {"contract_version": "1.0.0", "kind": "era_expansion_disposition", "era": era,
            "source_group": group, "grid_id": contract["grid"]["id"],
            "baseline": contract["grid"]["alignment_reference"],
            "complete_global_reconstruction": False,
            "processing_scope": {"coastal_outlines": True, "inland_waterbodies": False, "vegetation_biomes": False},
            "source_uses": uses,
            "slice_policy": "Only explicitly selected source/target pairs; no interpolation, extrapolation or implicit reuse.",
            "layers": layers,
            "coverage": {"positive_evidence_regions": ["north-america-nadi1" if u["dataset"] == "nadi-1" else "eurasia-dated1" for u in uses],
                         "presence_absence_domain": "unavailable",
                         "transparency": "baseline_unchanged_not_confirmed_absence",
                         "missing": ["Unselected regions, including Greenland, Antarctica, Iceland and peripheral mountain glaciers",
                                     "Independent floating-shelf additions and seasonal sea ice",
                                     "Validated exposed and flooded coastal land"]},
            "validation_limits": issues, "ice_package": None}


def index_metadata(contract, selection, catalog):
    selected = {u["era_slug"] for u in contract["permitted_margin_uses"]}
    return {"contract_version": "1.0.0", "kind": "all_era_expansion", "era_count": len(catalog),
            "partial_ice_era_count": len(selected), "fully_unavailable_era_count": len(catalog) - len(selected),
            "scientifically_accepted_era_count": 0, "coastal_mask_count": 0,
            "complete_global_reconstruction": False,
            "phase5_acceptance": read_json(DATA / "PHASE5-VALIDATION.json")["acceptance"],
            "source_slices": slice_register(contract),
            "groups": {group: [e["slug"] for e in selection["eras"] if e["source_group"] == group]
                       for group in GROUP_REASONS}}


def validate_expansion(root, contract, selection, catalog):
    from .overlays import validate_overlay
    root = Path(root).resolve()
    index = read_json(root / "catalog.json")
    expected = index_metadata(contract, selection, catalog)
    require({k: v for k, v in index.items() if k not in ("eras", "provenance")} == expected,
            "Expansion summary, acceptance or slice reuse mismatch")
    provenance = [{"path": f"provenance/{name}", **fingerprint(DATA / name)} for name in PROVENANCE]
    require(index["provenance"] == provenance, "Expansion provenance mismatch")
    allowed = {"catalog.json"}
    for pin in provenance:
        verify_file(safe_path(root, pin["path"]), pin)
        allowed.add(pin["path"])
    require([r["slug"] for r in index["eras"]] == list(catalog), "Expected all catalog eras exactly once in order")
    for record in index["eras"]:
        slug = record["slug"]
        path = f"eras/{slug}/manifest.json"
        require(record["path"] == path, "Unexpected era manifest path")
        verify_file(safe_path(root, path), record)
        package = safe_path(root, f"eras/{slug}")
        manifest = read_json(package / "manifest.json")
        expected = era_disposition(catalog[slug], contract, selection)
        if expected["source_uses"]:
            ice = package / "ice"
            overlay = read_json(ice / "manifest.json")
            validate_overlay(overlay, ice, contract, selection, catalog)
            require(overlay["era"] == catalog[slug], "Wrong era's ice package")
            expected["ice_package"] = {"path": "ice/manifest.json", **fingerprint(ice / "manifest.json")}
            for product in expected["layers"]["ice"]["products"]:
                product.update(fingerprint(safe_path(package, product["path"])))
            allowed.update(p.relative_to(root).as_posix() for p in ice.rglob("*") if p.is_file())
        require(manifest == expected, f"Era disposition, chronology or output mismatch: {slug}")
        allowed.add(path)
    actual = {p.relative_to(root).as_posix() for p in root.rglob("*") if p.is_file()}
    require(actual == allowed, "Unexpected or missing expansion artifacts; unavailable outputs must have no image")
    return {"status": "valid_all_era_dispositions", "eras": len(catalog),
            "partial_ice_eras": index["partial_ice_era_count"], "scientifically_accepted_eras": 0}


def expand_eras(contract, selection, catalog, cache, output, overlay_root=None):
    from .overlays import generate_overlays, validate_overlay
    output = Path(output).resolve()
    require(not output.exists(), "Expansion output exists; choose a fresh directory")
    for forbidden in (ROOT / "docs", ROOT / "public", ROOT / "src"):
        require(not output.is_relative_to(forbidden), "Keep research expansion outside the app/static site")
    supported = [e for e in catalog.values() if any(u["era_slug"] == e["slug"] for u in contract["permitted_margin_uses"])]
    # Validate every supplied package before staging; never silently fill a missing era.
    if overlay_root is not None:
        overlay_root = Path(overlay_root).resolve()
        for era in supported:
            package = safe_path(overlay_root, era["slug"])
            overlay = read_json(package / "manifest.json")
            require(overlay["era"] == era, "Wrong era's supplied overlay")
            validate_overlay(overlay, package, contract, selection, catalog)
    output.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(prefix=".expansion-staging-", dir=output.parent) as temp:
        temp = Path(temp)
        if overlay_root is None:
            overlay_root = temp / "generated-overlays"
            generate_overlays(supported, contract, selection, catalog, cache, overlay_root)
        root = temp / "package"
        (root / "provenance").mkdir(parents=True)
        index = {**index_metadata(contract, selection, catalog), "provenance": [], "eras": []}
        for name in PROVENANCE:
            dest = root / "provenance" / name
            shutil.copyfile(DATA / name, dest)
            index["provenance"].append({"path": f"provenance/{name}", **fingerprint(dest)})
        for era in catalog.values():
            slug = era["slug"]
            package = root / "eras" / slug
            package.mkdir(parents=True)
            manifest = era_disposition(era, contract, selection)
            if manifest["source_uses"]:
                shutil.copytree(overlay_root / slug, package / "ice")
                manifest["ice_package"] = {"path": "ice/manifest.json", **fingerprint(package / "ice/manifest.json")}
                for product in manifest["layers"]["ice"]["products"]:
                    product.update(fingerprint(package / product["path"]))
            write_json(package / "manifest.json", manifest)
            index["eras"].append({"slug": slug, "path": f"eras/{slug}/manifest.json", **fingerprint(package / "manifest.json")})
        write_json(root / "catalog.json", index)
        result = validate_expansion(root, contract, selection, catalog)
        require(not output.exists(), "Concurrent expansion output collision")
        root.rename(output)
    print(f"Wrote {output}: {result['eras']} era dispositions; {result['partial_ice_eras']} partial ice packages; 0 accepted coastlines", flush=True)
    return index
