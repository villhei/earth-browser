"""Fail-closed validation of the pinned phase-3 selection (standard library only).

No production class is supported by this selection. A future scientific selection
must extend validation deliberately; changing a manifest cannot open those gates.
"""
from __future__ import annotations

import hashlib
import json
import re
import struct
from pathlib import Path, PurePosixPath

ROOT = Path(__file__).resolve().parents[2]
DATA = ROOT / "data-sources/textures"
RECORDS = ("OUTPUT-CONTRACT.json", "OUTPUT-CONTRACT.md",
           "SOURCE-SELECTION.json", "SOURCE-SELECTION.md")


class ContractError(ValueError):
    pass


def require(condition, message):
    if not condition:
        raise ContractError(message)


def read_json(path):
    def unique(pairs):
        result = {}
        for key, value in pairs:
            require(key not in result, f"Duplicate JSON key: {key}")
            result[key] = value
        return result
    return json.loads(Path(path).read_text(encoding="utf-8"), object_pairs_hook=unique)


def fingerprint(path):
    path = Path(path)
    with path.open("rb") as stream:
        digest = hashlib.file_digest(stream, "sha256").hexdigest()
    return {"bytes": path.stat().st_size, "sha256": digest}


def verify_file(path, record):
    require(Path(path).is_file(), f"Missing required input: {path}")
    require(fingerprint(path) == {k: record[k] for k in ("bytes", "sha256")},
            f"Checksum/size mismatch: {path}; preserve the pin and investigate")


def safe_path(root, relative):
    require(isinstance(relative, str) and relative, "Missing relative artifact path")
    p = PurePosixPath(relative)
    require(not p.is_absolute() and ".." not in p.parts and "\\" not in relative
            and ":" not in relative and str(p) == relative,
            f"Unsafe artifact path: {relative}")
    result = (Path(root) / relative).resolve()
    require(result.is_relative_to(Path(root).resolve()), f"Path escapes package: {relative}")
    return result


def calendar_bp(year):
    require(type(year) is int and year != 0, "Historical year must be an integer without year zero")
    return -year + 1949 if year < 0 else 1950 - year


def catalog():
    # Read the authoritative, literal TS catalog, not possibly stale DB/static exports.
    source = (ROOT / "src/server/eraMetadata.ts").read_text()
    rows = re.findall(r'\{\s*slug:\s*"([^"]+)"\s*,\s*filename:\s*"([^"]+)"\s*,\s*'
                      r'name:\s*"[^"]*"\s*,\s*year_start:\s*(-?\d+)\s*,', source)
    require(len(rows) == source.count("year_start:") - 1 and len(rows) > 0,
            "Catalog format changed: update the literal catalog reader")
    require(len({r[0] for r in rows}) == len(rows), "Duplicate catalog slug")
    return {slug: {"slug": slug, "year_start": int(year),
                   "target_calendar_bp": calendar_bp(int(year)),
                   "age_system": "calendar BP (1950)"} for slug, _, year in rows}


def load_contract():
    contract = read_json(DATA / "OUTPUT-CONTRACT.json")
    grid = contract["grid"]
    require(contract["contract_version"] == "1.0.0" and grid["id"] == "earth-equirectangular-4096-v1"
            and (grid["width"], grid["height"]) == (4096, 2048)
            and grid["horizontal_crs"] == "EPSG:4326" and grid["registration"] == "PixelIsArea"
            and grid["gdal_geotransform"] == [-180, 360 / 4096, 0, 90, 0, -180 / 2048],
            "Unsupported grid/version: explicitly review generator before changing the contract")
    verify_file(ROOT / contract["selection_record"]["repository_path"], contract["selection_record"])
    verify_file(ROOT / contract["grid"]["alignment_reference"]["repository_path"],
                contract["grid"]["alignment_reference"])
    selection = read_json(DATA / "SOURCE-SELECTION.json")
    eras = catalog()
    require(len(selection["eras"]) == len(eras) == 54, "Expected all 54 era dispositions")
    require({e["slug"] for e in selection["eras"]} == set(eras), "Catalog/selection slug mismatch")
    uses = []
    for era in selection["eras"]:
        require(era["target_calendar_bp"] == eras[era["slug"]]["target_calendar_bp"],
                f"Target date mismatch: {era['slug']}")
        for use in era["selected_margin_slices"]:
            require(use["source_minus_target_years"] == use["source_calendar_bp"] - era["target_calendar_bp"],
                    "Incorrect signed source offset")
            uses.append({"era_slug": era["slug"], "target_calendar_bp": era["target_calendar_bp"], **use})
    require(uses == contract["permitted_margin_uses"] and len(uses) == 7,
            "Selected source/target pairs differ from contract")
    endpoints = [u for u in uses if u["policy"] == "endpoint_approximation"]
    require(len(endpoints) == 1 and endpoints[0]["dataset"] == "dated-1"
            and endpoints[0]["era_slug"] == "world-bc8000"
            and endpoints[0]["source_calendar_bp"] == 10000, "Invalid endpoint exception")
    for use in uses:
        selected_members(selection, use)
    return contract, selection, eras


def selected_members(selection, use):
    layers = [x for x in selection["inspected_layers"] if x["source"] == use["dataset"]
              and x["source_calendar_bp"] == use["source_calendar_bp"]]
    expected = ({f"{use['source_calendar_bp'] // 1000}ka_cal_{b}_NADI-1_Dalton_etal_QSR"
                 for b in use["bounds"]} if use["dataset"] == "nadi-1" else
                {f"TS{use['source_calendar_bp'] // 1000}_{b}" for b in use["bounds"]})
    require(len(layers) == 3 and {Path(x["member_stem"]).name for x in layers} == expected,
            f"Missing/incorrect uncertainty suite: {use}")
    return layers


def validate_manifest(manifest, package=None):
    contract, selection, eras = load_contract()
    require(manifest["contract_version"] == contract["contract_version"], "Unsupported contract version")
    require(manifest["grid_id"] == contract["grid"]["id"], "Grid mismatch")
    kind = manifest["record_kind"]
    require(kind in ("example", "delivery"), "Invalid record kind")
    era = manifest["era"]
    require(type(era["year_start"]) is int and type(era["target_calendar_bp"]) is int, "Era dates must be integers")
    require(era == eras.get(era["slug"]), "Era metadata differs from authoritative catalog")
    require(manifest["complete_global_set"] is False, "Selected evidence cannot establish global completeness")
    require(isinstance(manifest["limitations"], list) and all(manifest["limitations"])
            and manifest["limitations"], "Missing limitations")
    records = manifest["provenance_records"]
    require(len(records) == 4, "Bundle all four provenance records")
    paths = set()
    for rec in records:
        if kind == "example":
            path = safe_path(ROOT, rec["repository_path"])
        else:
            require(package is not None, "Delivery validation requires the package directory")
            path = safe_path(package, rec["path"])
            require(rec["path"] == f"provenance/{path.name}", "Incorrect provenance path")
        require(path.name in RECORDS and path.name not in paths, "Invalid/duplicate provenance record")
        paths.add(path.name)
        verify_file(path, rec)
        require(fingerprint(path) == fingerprint(DATA / path.name), "Stale provenance snapshot")
    uses = [u for u in contract["permitted_margin_uses"] if u["era_slug"] == era["slug"]]
    sources = manifest["sources"]
    require(len(sources) == len(uses) and {s["id"] for s in sources} == {u["dataset"] for u in uses},
            "Source register must retain exactly the selected evidence")
    templates = {s["id"]: s for s in read_json(DATA / "examples/world-bc10000.manifest.json")["sources"]}
    for source in sources:
        use = next(u for u in uses if u["dataset"] == source["id"])
        template = templates[source["id"]]
        for key in ("title", "version", "citations", "license", "source_role", "original_inputs", "native_horizontal_crs"):
            require(source[key] == template[key], f"Source provenance differs from selection: {source['id']}/{key}")
        require(source["source_role"] == "unclassified_margin_evidence", "Margins cannot establish grounded ice")
        chronology = source["chronology"]
        for key in ("target_calendar_bp", "source_calendar_bp", "source_minus_target_years"):
            require(chronology[key] == use[key], f"Invalid chronology: {key}")
        require(chronology["match_policy"] == use["policy"] and chronology["interpolation"] == "none",
                "Unpermitted slice policy/interpolation")
        require(chronology["original_age"] == {"value": use["source_calendar_bp"] / 1000,
                "unit": "ka", "system": "calendar BP (1950)"}, "Original chronology mismatch")
        require(chronology["calibration"] == template["chronology"]["calibration"]
                and chronology["temporal_uncertainty"], "Missing/changed calibration or uncertainty")
        require(chronology["other_era_uses"] == [], "No repeated slices in current selection")
        require(source["uncertainty"]["source_variants"] == use["bounds"], "Missing uncertainty bounds")
        members = [{"member_stem": m["member_stem"], "components": m["components"]}
                   for m in selected_members(selection, use)]
        require(source["members"] == members, "Missing/changed consumed source members")
        require(source["modifications"] and source["retrieval_note"], "Missing processing/retrieval notice")
    layers = manifest["layers"]
    require(len(layers) == 6 and {l["class"] for l in layers} == {l["class"] for l in contract["layers"]},
            "Exactly six unique layer classes required")
    for layer in layers:
        require(layer["coverage_status"] == "unavailable" and layer["products"] == [],
                f"{layer['class']}: current pinned selection has no validated classification/domain; production export gated")
        require(layer["regions"], "Unavailable layer requires region reasons")
        ids = set()
        for region in layer["regions"]:
            require(region["id"] not in ids and region["coverage_status"] == "unavailable"
                    and region["reason"], "Invalid region disposition")
            ids.add(region["id"])
            require(set(region["source_ids"]) <= {s["id"] for s in sources}, "Unknown regional source")
    diagnostics = manifest.get("diagnostics", [])
    require(kind != "example" or not diagnostics, "Examples cannot advertise artifacts")
    diagnostic_paths = set()
    for artifact in diagnostics:
        require(package is not None, "Diagnostics require a package")
        path = safe_path(package, artifact["path"])
        require(artifact["path"].startswith("diagnostics/") and "ice-margin-evidence" in path.name,
                "Raw margins must stay under diagnostics with ice-margin-evidence in their names")
        require(artifact["path"] not in diagnostic_paths, "Duplicate diagnostic path")
        diagnostic_paths.add(artifact["path"])
        verify_file(path, artifact)
        if path.suffix == ".png":
            with path.open("rb") as stream:
                header = stream.read(33)
            require(len(header) == 33 and header[:8] == b"\x89PNG\r\n\x1a\n" and header[12:16] == b"IHDR"
                    and struct.unpack(">IIBB", header[16:26]) == (4096, 2048, 8, 6),
                    "Diagnostic must be a full-grid 8-bit RGBA PNG")
    if diagnostics:
        expected_paths = {f"diagnostics/ice-margin-evidence--{s['id']}--{v}.png"
                          for s in sources for v in ("central", "minimum", "maximum")}
        expected_paths.add("diagnostics/ice-margin-evidence-report.json")
        require(diagnostic_paths == expected_paths, "Diagnostics must retain all selected uncertainty suites and their report")
        report = read_json(safe_path(package, "diagnostics/ice-margin-evidence-report.json"))
        expected_members = {(s["id"], m["member_stem"]) for s in sources for m in s["members"]}
        require(len(report["members"]) == len(expected_members)
                and {(m["source_id"], m["member_stem"]) for m in report["members"]} == expected_members,
                "Diagnostic report omits/duplicates source members")
        for member in report["members"]:
            source = next(s for s in sources if s["id"] == member["source_id"])
            pin = next(m for m in source["members"] if m["member_stem"] == member["member_stem"])
            require(member["input_components"] == pin["components"]
                    and member["chronology"] == source["chronology"] and member["production_eligible"] is False,
                    "Diagnostic report provenance/classification mismatch")
    if package:
        allowed = {r["path"] for r in records} | diagnostic_paths | {"manifest.json"}
        actual = {p.relative_to(package).as_posix() for p in Path(package).rglob("*") if p.is_file()}
        require(actual == allowed, "Unlisted or missing package files (including stale masks)")
    return {"era": era["slug"], "production_products": 0, "diagnostic_artifacts": len(diagnostics),
            "status": "valid_unavailable_disposition"}
