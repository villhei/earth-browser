"""Editing delivery integrity, portable archives and preservation of limitations."""
import copy
import os
from pathlib import Path
import sys
import tempfile
import unittest
from unittest.mock import patch
import zipfile

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from paleomasks.contract import ContractError, fingerprint, load_contract, read_json
from paleomasks.delivery import (PACKAGE, package_delivery, validate_archive,
                                validate_delivery, write_archive)
from paleomasks.expansion import expand_eras
from paleomasks.pipeline import build_manifest, write_json


class DeliveryTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.contract, cls.selection, cls.catalog = load_contract()

    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        # Isolate the packaging tests from PNG raster validation, tested separately.
        mock = patch("paleomasks.overlays.validate_overlay")
        mock.start()
        self.addCleanup(mock.stop)
        sources = self.root / "sources"
        for slug in {u["era_slug"] for u in self.contract["permitted_margin_uses"]}:
            package = sources / slug
            (package / "diagnostics").mkdir(parents=True)
            manifest = build_manifest(self.catalog[slug], self.contract, self.selection)
            for source in manifest["sources"]:
                source["modifications"] = "Test fixture; source pins retained."
            write_json(package / "manifest.json", manifest)
            for name in ("ice.png", "diagnostics/ice-minimum.png", "diagnostics/ice-maximum.png"):
                (package / name).write_bytes(f"synthetic {slug}/{name}".encode())
        self.expansion = self.root / "expansion"
        expand_eras(self.contract, self.selection, self.catalog, self.root, self.expansion, sources)
        self.output = self.root / "delivery"

    def generate(self):
        return package_delivery(self.expansion, self.output, self.contract, self.selection, self.catalog)

    def validate(self):
        return validate_delivery(self.output, self.contract, self.selection, self.catalog)

    def test_round_trip_preserves_every_input_and_all_era_guides(self):
        index = self.generate()
        self.assertEqual((index["png_count"], index["scientifically_accepted_era_count"]), (15, 0))
        self.assertEqual(self.validate()["eras"], 54)
        self.assertEqual(validate_delivery(os.path.relpath(self.output), self.contract, self.selection, self.catalog)["pngs"], 15)
        package = self.output / PACKAGE
        for original in self.expansion.rglob("*"):
            if original.is_file():
                self.assertEqual(original.read_bytes(), (package / "evidence" / original.relative_to(self.expansion)).read_bytes())
        self.assertEqual(len(list((package / "eras").glob("*.md"))), 54)
        guide = (package / "eras/world-bc8000.md").read_text()
        self.assertIn("+51 years; endpoint_approximation", guide)
        self.assertIn("CC-BY-3.0", guide)
        self.assertIn("CC-BY-4.0", guide)
        self.assertIn("-60 calendar BP", (package / "eras/world-2010.md").read_text())
        self.assertIn("All mask products are unavailable", (package / "eras/world-bc123000.md").read_text())
        self.assertIn("self-intersection", (package / "eras/world-bc10000.md").read_text())
        self.assertIn("open ring", (package / "eras/world-bc4000.md").read_text())
        # Portable checksums can be verified without repository metadata.
        for line in (package / "CHECKSUMS.sha256").read_text().splitlines():
            digest, name = line.split("  ", 1)
            self.assertEqual(fingerprint(package / name)["sha256"], digest)

    def test_archive_is_deterministic_and_rejects_duplicate_or_changed_entries(self):
        self.generate()
        package = self.output / PACKAGE
        archive = self.output / f"{PACKAGE}.zip"
        second = self.root / "second.zip"
        for path in package.rglob("*"):
            os.utime(path, (1000000000, 1000000000))
        write_archive(package, second)
        self.assertEqual(archive.read_bytes(), second.read_bytes())
        with zipfile.ZipFile(second, "a") as target:
            target.writestr("../unexpected.png", b"invalid")
        with self.assertRaisesRegex(ContractError, "Archive entries"):
            validate_archive(second, package)
        write_archive(package, second)
        (package / "README.md").write_text("changed")
        with self.assertRaisesRegex(ContractError, "Archive bytes"):
            validate_archive(second, package)

    def test_guide_checksum_inventory_and_unavailable_image_tampering_rejected(self):
        self.generate()
        for name, content, message in (
            (f"{PACKAGE}/eras/world-bc10000.md", "Scientifically accepted", "guide mismatch"),
            (f"{PACKAGE}/CHECKSUMS.sha256", "", "checksum list"),
            (f"{PACKAGE}/eras/flooded-land.png", "unsupported", "Unexpected"),
        ):
            path = self.output / name
            original = path.read_bytes() if path.exists() else None
            path.write_text(content)
            with self.subTest(name=name), self.assertRaisesRegex(ContractError, message):
                self.validate()
            if original is None:
                path.unlink()
            else:
                path.write_bytes(original)
        index = read_json(self.output / "delivery.json")
        index["scientifically_accepted_era_count"] = 5
        write_json(self.output / "delivery.json", index)
        with self.assertRaisesRegex(ContractError, "inventory mismatch"):
            self.validate()

    def test_invalid_input_and_copy_failure_never_publish(self):
        manifest = self.expansion / "eras/world-bc123000/manifest.json"
        original = manifest.read_bytes()
        changed = copy.deepcopy(read_json(manifest))
        changed["complete_global_reconstruction"] = True
        write_json(manifest, changed)
        with self.assertRaises(ContractError):
            self.generate()
        self.assertFalse(self.output.exists())
        manifest.write_bytes(original)
        with patch("paleomasks.delivery.shutil.copyfile", side_effect=OSError("copy failed")):
            with self.assertRaisesRegex(OSError, "copy failed"):
                self.generate()
        self.assertFalse(self.output.exists())
        self.assertFalse(list(self.root.glob(".delivery-staging-*")))

    def test_rejects_symlinks_output_inside_input_and_overwrite(self):
        link = self.expansion / "linked"
        link.symlink_to(self.root / "sources", target_is_directory=True)
        with self.assertRaisesRegex(ContractError, "symlinks"):
            self.generate()
        link.unlink()
        with self.assertRaisesRegex(ContractError, "outside its evidence"):
            package_delivery(self.expansion, self.expansion / "delivery", self.contract, self.selection, self.catalog)
        self.generate()
        with self.assertRaisesRegex(ContractError, "exists"):
            self.generate()


if __name__ == "__main__":
    unittest.main()
