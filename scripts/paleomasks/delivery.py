"""Portable editing handoff without changing evidence bytes or acceptance status."""
from pathlib import Path
import shutil
import tempfile
import zipfile

from .contract import DATA, ROOT, fingerprint, read_json, require, verify_file
from .expansion import validate_expansion
from .pipeline import write_json

PACKAGE = "reconstruction-masks"
DOCUMENTS = ("EDITOR-GUIDE.md", "REPRODUCING-MASKS.md", "requirements-masks.txt")


def files(root):
    """Reject links, including directory links, instead of archiving outside bytes."""
    paths = sorted(Path(root).rglob("*"))
    require(not any(p.is_symlink() for p in paths), "Delivery must not contain symlinks")
    return {p.relative_to(root).as_posix(): p for p in paths if p.is_file()}


def era_guide(manifest, overlay=None):
    era = manifest["era"]
    slug = era["slug"]
    year = era["year_start"]
    title = f"{abs(year):,} {'BCE' if year < 0 else 'CE'}"
    lines = [f"# {title} — {slug}", "",
             f"Target: {era['target_calendar_bp']:,} calendar BP (1950); no historical year zero.", "",
             "Partial evidence only; scientific acceptance remains pending." if overlay else
             "All mask products are unavailable for this era. No placeholder image is supplied.", "",
             f"[Era manifest](../evidence/eras/{slug}/manifest.json) · [Editor guide](../EDITOR-GUIDE.md)", "",
             "## Products", "", "| Layer | Availability | Reason |", "| --- | --- | --- |"]
    for name, layer in manifest["layers"].items():
        lines.append(f"| {name} | {layer['availability']} | {layer['reason']} |")
    if overlay:
        lines += ["", "## Editable masks and alternative bounds", ""]
        for product in manifest["layers"]["ice"]["products"]:
            lines.append(f"- [{product['bound']}](../evidence/eras/{slug}/{product['path']})")
        lines += ["", "Use one bound at a time. Bounds can be nonnested; they are not dates or probabilities.",
                  "", "## Sources, attribution and changes", ""]
        for source in overlay["sources"]:
            age = source["chronology"]
            license = source["license"]
            lines += [f"- {license['attribution']}; {source['version']}. "
                      f"[{license['id']}]({license['terms_url']}). "
                      + " ".join(f"[Source {i + 1}]({url})" for i, url in enumerate(source["citations"]))
                      + f" Source age {age['source_calendar_bp']:,} calendar BP; signed source-minus-target "
                      f"offset {age['source_minus_target_years']:+d} years; {age['match_policy']}. "
                      + source["modifications"]]
        lines += ["", f"[Full source pins, chronology, processing and loss audit](../evidence/eras/{slug}/ice/manifest.json)"]
    lines += ["", "## Limits", "",
              "Transparency leaves the baseline unchanged; it does not establish ice absence. "
              "Grounded and floating ice are merged. No global presence/absence domain is available.", ""]
    lines += [f"- {issue}" for issue in manifest["validation_limits"] + manifest["coverage"]["missing"]]
    lines += ["", "Lakes, inland-waterbody and vegetation changes are excluded. Ice presence is not proof of a traversable route.", ""]
    return "\n".join(lines)


def guides(evidence):
    index = read_json(evidence / "catalog.json")
    result = {}
    lines = ["# Earth Browser — masks for external editing", "",
             "Five partial regional ice suites (15 RGBA PNGs) and 49 metadata-only eras. "
             "Scientific acceptance remains pending; coastlines and seasonal sea ice are unavailable.", "",
             "Start with the [editor guide](EDITOR-GUIDE.md) and [reproduction commands](REPRODUCING-MASKS.md). "
             "The evidence directory preserves the validated phase-6 package byte-for-byte. "
             "Each era guide links its masks, provenance, attribution and limitations.", "",
             "Verify extracted bytes with `sha256sum -c CHECKSUMS.sha256` from this directory. "
             "Checksums verify integrity, not scientific acceptance.", "",
             "| Era | Target calendar BP | Ice | Guide |", "| --- | ---: | --- | --- |"]
    for record in index["eras"]:
        manifest = read_json(evidence / record["path"])
        slug = record["slug"]
        overlay = read_json(evidence / f"eras/{slug}/ice/manifest.json") if manifest["ice_package"] else None
        name = f"eras/{slug}.md"
        result[name] = era_guide(manifest, overlay)
        lines.append(f"| {slug} | {manifest['era']['target_calendar_bp']} | "
                     f"{manifest['layers']['ice']['availability']} | [Read]({name}) |")
    result["README.md"] = "\n".join(lines) + "\n"
    return result


def checksums(root):
    return "".join(f"{fingerprint(path)['sha256']}  {name}\n"
                   for name, path in files(root).items() if name != "CHECKSUMS.sha256")


def write_archive(package, destination):
    # Fixed metadata and stored entries make bytes independent of mtimes and zlib.
    with zipfile.ZipFile(destination, "w", compression=zipfile.ZIP_STORED) as archive:
        for name, path in files(package).items():
            info = zipfile.ZipInfo(f"{PACKAGE}/{name}", date_time=(1980, 1, 1, 0, 0, 0))
            info.create_system = 3
            info.external_attr = 0o100644 << 16
            archive.writestr(info, path.read_bytes())


def validate_archive(archive_path, package):
    expected = {f"{PACKAGE}/{name}": path for name, path in files(package).items()}
    with zipfile.ZipFile(archive_path) as archive:
        require(archive.namelist() == list(expected), "Archive entries differ, are duplicated or unordered")
        for name, path in expected.items():
            require(archive.read(name) == path.read_bytes(), f"Archive bytes differ: {name}")


def delivery_index(root):
    index = read_json(root / PACKAGE / "evidence/catalog.json")
    return {"contract_version": "1.0.0", "kind": "external_editing_delivery",
            "era_count": index["era_count"], "partial_ice_era_count": index["partial_ice_era_count"],
            "fully_unavailable_era_count": index["fully_unavailable_era_count"],
            "scientifically_accepted_era_count": 0, "coastal_mask_count": 0,
            "png_count": len(list((root / PACKAGE).rglob("*.png"))),
            "complete_global_reconstruction": False,
            "archive": {"path": f"{PACKAGE}.zip", **fingerprint(root / f"{PACKAGE}.zip")},
            "files": [{"path": f"{PACKAGE}/{name}", **fingerprint(path)}
                      for name, path in files(root / PACKAGE).items()]}


def validate_delivery(root, contract, selection, catalog):
    root = Path(root).resolve()
    actual = files(root)
    package = root / PACKAGE
    validate_expansion(package / "evidence", contract, selection, catalog)
    expected_guides = guides(package / "evidence")
    for name, content in expected_guides.items():
        require((package / name).read_text(encoding="utf-8") == content, f"Delivery guide mismatch: {name}")
    for name in DOCUMENTS:
        verify_file(package / name, fingerprint(DATA / name))
    expected_files = {f"{PACKAGE}/evidence/{name}" for name in files(package / "evidence")}
    expected_files.update(f"{PACKAGE}/{name}" for name in (*expected_guides, *DOCUMENTS, "CHECKSUMS.sha256"))
    expected_files.update(("delivery.json", f"{PACKAGE}.zip"))
    require(set(actual) == expected_files, "Unexpected or missing delivery artifacts")
    require((package / "CHECKSUMS.sha256").read_text() == checksums(package), "Delivery checksum list mismatch")
    validate_archive(root / f"{PACKAGE}.zip", package)
    require(read_json(root / "delivery.json") == delivery_index(root), "Delivery inventory mismatch")
    return {"status": "valid_external_editing_delivery", "eras": len(catalog), "pngs": 15,
            "scientifically_accepted_eras": 0}


def package_delivery(expansion, output, contract, selection, catalog):
    expansion, output = Path(expansion).resolve(), Path(output).resolve()
    require(not output.exists(), "Delivery output exists; choose a fresh directory")
    require(not output.is_relative_to(expansion), "Keep delivery outside its evidence input")
    for forbidden in (ROOT / "docs", ROOT / "public", ROOT / "src"):
        require(not output.is_relative_to(forbidden), "Keep delivery outside the app/static site")
    files(expansion)
    validate_expansion(expansion, contract, selection, catalog)
    output.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(prefix=".delivery-staging-", dir=output.parent) as temp:
        root = Path(temp) / "delivery"
        package = root / PACKAGE
        shutil.copytree(expansion, package / "evidence")
        for name in DOCUMENTS:
            shutil.copyfile(DATA / name, package / name)
        for name, content in guides(package / "evidence").items():
            path = package / name
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_text(content, encoding="utf-8")
        (package / "CHECKSUMS.sha256").write_text(checksums(package), encoding="utf-8")
        write_archive(package, root / f"{PACKAGE}.zip")
        index = delivery_index(root)
        write_json(root / "delivery.json", index)
        validate_delivery(root, contract, selection, catalog)
        require(not output.exists(), "Concurrent delivery output collision")
        root.rename(output)
    print(f"Wrote {output}: 54 era guides, 15 partial-evidence PNGs, portable ZIP", flush=True)
    return index
