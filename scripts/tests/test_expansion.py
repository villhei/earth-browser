"""All-era coverage accounting must not promote unavailable or rejected science."""
import copy
import os
from pathlib import Path
import sys
import tempfile
import unittest
from unittest.mock import patch

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from paleomasks.contract import ContractError, fingerprint, load_contract, read_json
from paleomasks.expansion import expand_eras, era_disposition, slice_register, validate_expansion
from paleomasks.pipeline import write_json


class ExpansionTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.contract, cls.selection, cls.catalog = load_contract()

    def test_all_eras_and_dates_have_explicit_dispositions(self):
        rows = [era_disposition(e, self.contract, self.selection) for e in self.catalog.values()]
        self.assertEqual(len(rows), 54)
        self.assertEqual(sum(r["layers"]["ice"]["availability"] == "partial" for r in rows), 5)
        for row in rows:
            self.assertFalse(row["complete_global_reconstruction"])
            self.assertFalse(row["processing_scope"]["inland_waterbodies"])
            for name, layer in row["layers"].items():
                self.assertNotEqual(layer["scientific_acceptance"], "accepted")
                if name != "ice" or not row["source_uses"]:
                    self.assertEqual(layer["availability"], "unavailable")
                    self.assertEqual(layer["products"], [])
        self.assertEqual(rows[-1]["era"]["target_calendar_bp"], -60)

    def test_endpoint_is_not_reused_in_holocene(self):
        rows = {slug: era_disposition(e, self.contract, self.selection) for slug, e in self.catalog.items()}
        uses = rows["world-bc8000"]["source_uses"]
        self.assertEqual([(u["dataset"], u["source_minus_target_years"], u["policy"]) for u in uses],
                         [("nadi-1", 51, "nearest_slice_approximation"), ("dated-1", 51, "endpoint_approximation")])
        for slug in ("world-bc5000", "world-bc4000", "world-bc3000"):
            self.assertEqual([u["dataset"] for u in rows[slug]["source_uses"]], ["nadi-1"])
        self.assertEqual(rows["world-bc2000"]["source_uses"], [])

    def test_lig_and_modern_gaps_are_distinct(self):
        def row(slug):
            return era_disposition(self.catalog[slug], self.contract, self.selection)
        self.assertIn("124,949 BP", row("world-bc123000")["layers"]["flooded-land"]["reason"])
        self.assertIn("does not cover 1960", row("world-1960")["layers"]["sea-ice-winter"]["reason"])
        self.assertIn("monthly spatial files", row("world-2010")["layers"]["sea-ice-summer"]["reason"])

    def test_slice_register_distinguishes_dataset_age_and_reuse(self):
        register = slice_register(self.contract)
        self.assertEqual(len(register), 7)
        self.assertFalse(any(r["reused_across_eras"] for r in register))
        changed = copy.deepcopy(self.contract)
        changed["permitted_margin_uses"].append({**changed["permitted_margin_uses"][0], "era_slug": "test-other-target"})
        reused = slice_register(changed)[0]
        self.assertTrue(reused["reused_across_eras"])
        self.assertEqual(reused["era_slugs"], ["world-bc10000", "test-other-target"])

    def make_sources(self, root):
        # Synthetic attachment bytes isolate packaging from separately tested rasterization.
        for slug in {u["era_slug"] for u in self.contract["permitted_margin_uses"]}:
            package = root / slug
            (package / "diagnostics").mkdir(parents=True)
            write_json(package / "manifest.json", {"era": self.catalog[slug]})
            for name in ("ice.png", "diagnostics/ice-minimum.png", "diagnostics/ice-maximum.png"):
                (package / name).write_bytes(b"synthetic attachment")

    @patch("paleomasks.overlays.validate_overlay")
    def test_round_trip_rejects_science_promotion_wrong_dates_and_extra_images(self, _validate):
        with tempfile.TemporaryDirectory() as temp:
            temp = Path(temp)
            sources, output = temp / "sources", temp / "result"
            self.make_sources(sources)
            expand_eras(self.contract, self.selection, self.catalog, temp, output, sources)
            args = (output, self.contract, self.selection, self.catalog)
            self.assertEqual(validate_expansion(*args)["eras"], 54)
            self.assertEqual(validate_expansion(os.path.relpath(output), *args[1:])["eras"], 54)
            index = read_json(output / "catalog.json")
            record = index["eras"][0]
            target = output / record["path"]
            original = read_json(target)
            for modify in (
                lambda m: m["layers"]["flooded-land"].update(availability="confirmed_empty"),
                lambda m: m["era"].update(target_calendar_bp=125000),
                lambda m: m.update(complete_global_reconstruction=True),
            ):
                changed = copy.deepcopy(original)
                modify(changed)
                write_json(target, changed)
                record.update(fingerprint(target))
                write_json(output / "catalog.json", index)
                with self.assertRaisesRegex(ContractError, "disposition"):
                    validate_expansion(*args)
            write_json(target, original)
            record.update(fingerprint(target))
            write_json(output / "catalog.json", index)
            (target.parent / "flooded-land.png").write_bytes(b"unsupported")
            with self.assertRaisesRegex(ContractError, "Unexpected"):
                validate_expansion(*args)
            (target.parent / "flooded-land.png").unlink()
            index["source_slices"][0]["reused_across_eras"] = True
            write_json(output / "catalog.json", index)
            with self.assertRaisesRegex(ContractError, "slice reuse"):
                validate_expansion(*args)
            with self.assertRaisesRegex(ContractError, "exists"):
                expand_eras(self.contract, self.selection, self.catalog, temp, output, sources)

    @patch("paleomasks.overlays.validate_overlay")
    def test_missing_or_wrong_era_attachment_publishes_nothing(self, _validate):
        with tempfile.TemporaryDirectory() as temp:
            temp = Path(temp)
            sources, output = temp / "sources", temp / "result"
            self.make_sources(sources)
            path = sources / "world-bc3000/manifest.json"
            path.unlink()
            with self.assertRaises(OSError):
                expand_eras(self.contract, self.selection, self.catalog, temp, output, sources)
            self.assertFalse(output.exists())
            write_json(path, {"era": self.catalog["world-bc4000"]})
            with self.assertRaisesRegex(ContractError, "Wrong era"):
                expand_eras(self.contract, self.selection, self.catalog, temp, output, sources)
            self.assertFalse(output.exists())

    @patch("paleomasks.overlays.generate_overlays", side_effect=ContractError("missing input"))
    def test_failed_generation_cleans_staging_without_publishing(self, _generate):
        with tempfile.TemporaryDirectory() as temp:
            temp = Path(temp)
            with self.assertRaisesRegex(ContractError, "missing input"):
                expand_eras(self.contract, self.selection, self.catalog, temp, temp / "result")
            self.assertEqual(list(temp.iterdir()), [])


if __name__ == "__main__":
    unittest.main()
