"""Contract, provenance and command gates; runs without numerical dependencies."""
import copy
import hashlib
import io
import json
from pathlib import Path
import sys
import tempfile
import unittest
from unittest.mock import patch
import zipfile

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from paleomasks.contract import (DATA, ROOT, ContractError, calendar_bp, fingerprint,
    load_contract, read_json, safe_path, selected_members, validate_manifest, verify_file)
from paleomasks.pipeline import acquire, build_manifest, generate, main, member_bytes


class ContractTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.contract, cls.selection, cls.eras = load_contract()
        cls.example = read_json(DATA / "examples/world-bc10000.manifest.json")

    def test_absent_year_zero_and_negative_bp(self):
        self.assertEqual([calendar_bp(y) for y in (-123000, -10000, -1, 1, 1950, 2010)],
                         [124949, 11949, 1950, 1949, 0, -60])
        for bad in (0, True, -10000.0, "-10000"):
            with self.assertRaises(ContractError):
                calendar_bp(bad)

    def test_all_54_dispositions_and_seven_suites(self):
        self.assertEqual(len(self.eras), 54)
        self.assertEqual(len(self.contract["permitted_margin_uses"]), 7)
        self.assertEqual(sum(len(selected_members(self.selection, u)) for u in self.contract["permitted_margin_uses"]), 21)

    def test_reference_example_and_all_era_metadata(self):
        self.assertEqual(validate_manifest(self.example)["production_products"], 0)
        for era in self.eras.values():
            manifest = build_manifest(era, self.contract, self.selection)
            manifest["record_kind"] = "example"
            manifest["provenance_records"] = self.example["provenance_records"]
            validate_manifest(manifest)

    def test_wrong_dates_offsets_and_unlisted_slice_reuse(self):
        for key, value in (("source_minus_target_years", -51), ("source_calendar_bp", 11949),
                           ("target_calendar_bp", 12000), ("match_policy", "endpoint_approximation"),
                           ("interpolation", "linear"), ("other_era_uses", ["world-bc5000"])):
            manifest = copy.deepcopy(self.example)
            manifest["sources"][0]["chronology"][key] = value
            with self.subTest(key=key), self.assertRaises(ContractError):
                validate_manifest(manifest)

    def test_named_endpoint_exception_only(self):
        manifest = build_manifest(self.eras["world-bc8000"], self.contract, self.selection)
        policies = {s["id"]: s["chronology"]["match_policy"] for s in manifest["sources"]}
        self.assertEqual(policies, {"nadi-1": "nearest_slice_approximation", "dated-1": "endpoint_approximation"})

    def test_missing_bound_blocks_whole_suite(self):
        manifest = copy.deepcopy(self.example)
        manifest["sources"][0]["members"].pop()
        with self.assertRaisesRegex(ContractError, "source members"):
            validate_manifest(manifest)

    def test_margins_cannot_be_promoted_to_grounded_ice(self):
        for field, value in (("coverage_status", "partial"), ("products", [{"presence": "confirmed_empty"}])):
            manifest = copy.deepcopy(self.example)
            manifest["layers"][2][field] = value
            with self.assertRaisesRegex(ContractError, "export gated"):
                validate_manifest(manifest)

    def test_six_classes_and_no_false_global_completeness(self):
        for change in (lambda m: m["layers"].pop(), lambda m: m.update(complete_global_set=True),
                       lambda m: m["layers"][0]["regions"][0].update(reason="")):
            manifest = copy.deepcopy(self.example)
            change(manifest)
            with self.assertRaises(ContractError):
                validate_manifest(manifest)

    def test_safe_paths_and_symlink_escape(self):
        with tempfile.TemporaryDirectory() as temp:
            for bad in ("/etc/passwd", "../x", "a/../../x", "a\\x", "https://host/x", "a//x", ""):
                with self.subTest(path=bad), self.assertRaises(ContractError):
                    safe_path(temp, bad)
            (Path(temp) / "escape").symlink_to("/tmp", target_is_directory=True)
            with self.assertRaises(ContractError):
                safe_path(temp, "escape/outside")

    def test_hashes_missing_inputs_and_duplicate_json(self):
        with tempfile.TemporaryDirectory() as temp:
            path = Path(temp) / "input.json"
            path.write_text('{"x": 1, "x": 2}')
            with self.assertRaisesRegex(ContractError, "Duplicate"):
                read_json(path)
            pin = fingerprint(path)
            path.write_text("changed")
            with self.assertRaisesRegex(ContractError, "mismatch"):
                verify_file(path, pin)
            path.unlink()
            with self.assertRaisesRegex(ContractError, "Missing required"):
                verify_file(path, pin)

    def test_archive_component_tampering(self):
        archive_bytes = io.BytesIO()
        with zipfile.ZipFile(archive_bytes, "w") as archive:
            archive.writestr("layer.shp", b"wrong")
        layer = {"member_stem": "layer", "components": {"shp": {"bytes": 5, "sha256": "0" * 64}}}
        with zipfile.ZipFile(archive_bytes) as archive, self.assertRaisesRegex(ContractError, "checksum"):
            member_bytes(archive, layer)

    def test_download_verifies_before_publication_and_preserves_original(self):
        with tempfile.TemporaryDirectory() as temp:
            cache = Path(temp)
            record = {"path": "research-cache/source.zip", "url": "https://example.test/source.zip",
                      "bytes": 4, "sha256": hashlib.sha256(b"good").hexdigest()}
            with patch("urllib.request.urlopen", return_value=io.BytesIO(b"bad")):
                with self.assertRaises(ContractError):
                    acquire(record, cache)
            self.assertEqual(list(cache.iterdir()), [])
            with patch("urllib.request.urlopen", return_value=io.BytesIO(b"good")):
                acquire(record, cache)
            with patch("urllib.request.urlopen", side_effect=AssertionError("No overwrite/download expected")):
                acquire(record, cache)
            self.assertEqual((cache / "source.zip").read_bytes(), b"good")

    def test_generation_requires_explicit_unavailable_request(self):
        with tempfile.TemporaryDirectory() as temp:
            output = Path(temp) / "output"
            with self.assertRaisesRegex(ContractError, "No production masks"):
                generate([self.eras["world-bc10000"]], self.contract, self.selection,
                         Path(temp), output, False, False, 4)
            self.assertFalse(output.exists())

    def test_missing_inputs_never_leave_a_package(self):
        with tempfile.TemporaryDirectory() as temp:
            output = Path(temp) / "output"
            with self.assertRaisesRegex(ContractError, "Missing required"):
                generate([self.eras["world-bc10000"]], self.contract, self.selection,
                         Path(temp), output, True, False, 4)
            self.assertFalse(output.exists())

    def test_atomic_metadata_package_validation_no_overwrite_or_stale_masks(self):
        with tempfile.TemporaryDirectory() as temp, patch("paleomasks.pipeline.verify_inputs"):
            output = Path(temp)
            args = ([self.eras["world-bc10000"]], self.contract, self.selection, output, output, True, False, 4)
            generate(*args)
            package = output / "world-bc10000"
            manifest = read_json(package / "manifest.json")
            validate_manifest(manifest, package)
            self.assertFalse((package / "masks").exists())
            with self.assertRaisesRegex(ContractError, "already exists"):
                generate(*args)
            (package / "stale.png").write_bytes(b"not a mask")
            with self.assertRaisesRegex(ContractError, "Unlisted"):
                validate_manifest(manifest, package)


if __name__ == "__main__":
    unittest.main()
