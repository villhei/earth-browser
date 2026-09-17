from pathlib import Path
import sys
import tempfile
import unittest

import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from paleomasks.contract import ContractError
from paleomasks.reference import area_km2, bound_metrics, comparison_metrics, crop_box, elevation_screen, review_reference, source_agreement


class ReferenceTests(unittest.TestCase):
    def test_area_weights_latitude_and_fraction_instead_of_counting_pixels(self):
        full = np.full((4, 8), 255, dtype=np.uint8)
        self.assertAlmostEqual(area_km2(full), 4 * np.pi * 6371.0088 ** 2, places=2)
        polar = np.zeros_like(full); polar[0, 0] = 255
        equatorial = np.zeros_like(full); equatorial[1, 0] = 255
        self.assertGreater(area_km2(equatorial), area_km2(polar))
        self.assertAlmostEqual(area_km2(full // 3), area_km2(full) / 3, places=2)

    def test_domain_rounding_allows_disjoint_subcells_but_rejects_leaks(self):
        zero = np.zeros((1, 1), dtype=np.uint8)
        part = np.full_like(zero, 128)
        comparison_metrics(zero, part, part, np.full_like(zero, 255))
        with self.assertRaisesRegex(ContractError, "exceeds"):
            comparison_metrics(zero, part, part, np.full_like(zero, 254))
        with self.assertRaisesRegex(ContractError, "ice priority"):
            comparison_metrics(part, part, zero, part)
        with self.assertRaisesRegex(ContractError, "exceeds"):
            comparison_metrics(zero, np.ones_like(zero), zero, zero)

    def test_alternatives_are_not_silently_sorted_or_unsigned_subtracted(self):
        a = np.array([[255, 0]], dtype=np.uint8)
        b = np.array([[0, 255]], dtype=np.uint8)
        result = bound_metrics(a, b, a)
        self.assertEqual(result["minimum_above_central_pixels"], 1)
        self.assertEqual(result["central_above_maximum_pixels"], 1)
        np.testing.assert_array_equal(a, [[255, 0]])

    def test_independent_check_finds_missing_interior_and_ignores_fractional_edges(self):
        a = np.full((11, 11), 255, dtype=np.uint8)
        centres = np.ones_like(a, dtype=bool)
        centres[5, 5] = False
        a[0, 0] = 128; centres[0, 0] = False
        result = source_agreement(a, centres)
        self.assertEqual(result["opaque_or_empty_disagreements"], 1)
        self.assertEqual(result["disagreements_beyond_one_pixel_edge_band"], 1)

    def test_review_crop_uses_outer_edges_and_north_up(self):
        self.assertEqual(crop_box((-180, -90, 180, 90), (2048, 4096)), (0, 0, 4096, 2048))
        self.assertEqual(crop_box((0, 0, 180, 90), (4, 8)), (4, 0, 8, 2))
        with self.assertRaises(ContractError):
            crop_box((170, 0, -170, 20), (4, 8))

    def test_elevation_flags_exclude_nodata_and_do_not_change_masks(self):
        exposed = np.array([[255, 255, 255, 0, 255]], dtype=np.uint8)
        heights = np.array([[101, 501, -99999, 1000, np.nan]])
        result = elevation_screen(exposed, heights)
        self.assertEqual(result["exposed_pixels_above_modern_height_m"], {"0": 2, "100": 2, "500": 1})
        self.assertEqual(result["missing_elevation_at_exposed_pixels"], 2)
        np.testing.assert_array_equal(exposed, [[255, 255, 255, 0, 255]])

    def test_review_cannot_write_inside_its_input_packages(self):
        with tempfile.TemporaryDirectory() as temp:
            root = Path(temp)
            for name in ("ice", "coast", "cache"):
                (root / name).mkdir()
                with self.assertRaisesRegex(ContractError, "input packages"):
                    review_reference(root / "ice", root / "coast", root / "cache", root / name / "review",
                                     Path("/usr/bin/python3"), {}, {}, {})
                self.assertFalse((root / name / "review").exists())


if __name__ == "__main__":
    unittest.main()
