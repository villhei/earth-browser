"""Overlay delivery remains partial and preserves source identity and bounds."""
import copy
from pathlib import Path
import sys
import tempfile
import unittest
from unittest.mock import patch

import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from paleomasks.contract import ContractError, load_contract, read_json
from paleomasks.overlays import generate_overlays, validate_overlay


class OverlayTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.contract, cls.selection, cls.catalog = load_contract()

    def test_delivery_round_trip_and_rejection_of_fabricated_scope_sources_and_artifacts(self):
        polygon = [np.array([[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]], dtype=float)]
        alpha = np.zeros((2048, 4096), dtype=np.uint8)
        alpha[1023, 2048] = 255
        with tempfile.TemporaryDirectory() as temp, patch("paleomasks.overlays.verify_inputs"), \
             patch("paleomasks.overlays.render_member", return_value=([polygon], {"ring_closure_repairs": []})), \
             patch("paleomasks.overlays.rasterize", side_effect=lambda polygons, **kwargs: (alpha, [1] * len(polygons))):
            root = Path(temp)
            args = ([self.catalog["world-bc10000"]], self.contract, self.selection, self.catalog, root, root)
            generate_overlays(*args)
            package = root / "world-bc10000"
            manifest = read_json(package / "manifest.json")
            result = validate_overlay(manifest, package, self.contract, self.selection, self.catalog)
            self.assertEqual(result["main_overlay"], "ice.png")
            self.assertEqual(set(manifest["overlays"]), {"central", "minimum", "maximum"})
            for modify in (lambda m: m.update(complete_global_reconstruction=True),
                           lambda m: m["sources"][0]["chronology"].update(source_minus_target_years=0),
                           lambda m: m["overlays"]["central"]["members"].pop(),
                           lambda m: m["overlays"]["central"].update(discarded_polygons=[{
                               "outcome": "below_encoding_resolution", "quantized_nonzero_pixels": 0,
                               "disposition": "discarded_from_overlay", "pixel_coverage": [{"fraction": .1, "quantized_alpha": 0}]}])):
                changed = copy.deepcopy(manifest)
                modify(changed)
                with self.assertRaises(ContractError):
                    validate_overlay(changed, package, self.contract, self.selection, self.catalog)
            with self.assertRaisesRegex(ContractError, "exists"):
                generate_overlays(*args)
            (package / "unlisted.png").write_bytes(b"stale")
            with self.assertRaisesRegex(ContractError, "Unexpected"):
                validate_overlay(manifest, package, self.contract, self.selection, self.catalog)

    def test_unselected_era_does_not_fabricate_empty_overlay(self):
        with tempfile.TemporaryDirectory() as temp:
            output = Path(temp) / "output"
            with self.assertRaisesRegex(ContractError, "No selected"):
                generate_overlays([self.catalog["world-bc123000"]], self.contract, self.selection,
                                  self.catalog, Path(temp), output)
            self.assertFalse(output.exists())

    def test_high_resolution_generation_uses_native_geometry_and_matching_loss_grid(self):
        polygon = [np.array([[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]], dtype=float)]
        alpha = np.zeros((4096, 8192), dtype=np.uint8)
        alpha[2047, 4096] = 255
        with tempfile.TemporaryDirectory() as temp, patch("paleomasks.overlays.verify_inputs"), \
             patch("paleomasks.overlays.render_member", return_value=([polygon], {"ring_closure_repairs": []})) as render, \
             patch("paleomasks.overlays.rasterize", return_value=(alpha, [1, 1])) as raster, \
             patch("paleomasks.overlays.apply_zero_rounding_policy", return_value=[]) as losses:
            root = Path(temp)
            generate_overlays([self.catalog["world-bc10000"]], self.contract, self.selection,
                              self.catalog, root, root, width=8192)
            package = root / "world-bc10000"
            manifest = read_json(package / "manifest.json")
            self.assertEqual(manifest["output_grid"]["gdal_geotransform"],
                             [-180, 360 / 8192, 0, 90, 0, -180 / 4096])
            self.assertEqual(manifest["policy"]["grid_id"], "earth-equirectangular-8192-v1")
            self.assertEqual(raster.call_count, 3)
            for call in raster.call_args_list:
                self.assertEqual(call.kwargs, {"width": 8192, "height": 4096, "samples": 8})
            for call in render.call_args_list:
                self.assertEqual(call.kwargs["tolerance_degrees"], 360 / 8192 / 32)
            for call in losses.call_args_list:
                self.assertEqual(call.kwargs, {"width": 8192, "height": 4096})
            manifest["output_grid"]["width"] = 4096
            with self.assertRaisesRegex(ContractError, "grid mismatch"):
                validate_overlay(manifest, package, self.contract, self.selection, self.catalog)


if __name__ == "__main__":
    unittest.main()
