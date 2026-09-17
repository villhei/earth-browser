from pathlib import Path
import sys
import unittest

import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from paleomasks.contract import ContractError
from paleomasks.coasts import blue_marble_classes, image_to_native, native_to_alpha, regional_changes


class CoastTests(unittest.TestCase):
    def test_baseline_excludes_disconnected_water_and_bright_ice(self):
        rgb = np.full((6, 8, 3), (40, 80, 20), dtype=np.uint8)
        rgb[1, :] = (10, 30, 60)
        rgb[4, 3] = (10, 30, 60)
        rgb[4, 5] = (2, 2, 2)
        rgb[3, 2] = (230, 230, 240)
        ocean, excluded = blue_marble_classes(rgb)
        self.assertTrue(ocean[1].all())
        self.assertFalse(ocean[4, 3])
        self.assertTrue(excluded[4, 3] and excluded[4, 5] and excluded[3, 2])
        self.assertFalse(excluded[2, 2])

    def test_longitude_seam_connects_without_wrapping_latitude(self):
        rgb = np.full((5, 6, 3), (40, 80, 20), dtype=np.uint8)
        rgb[2:4, :2] = (10, 30, 60)
        rgb[2, -1] = (10, 30, 60)
        rgb[0, 3] = (10, 30, 60)
        ocean, _ = blue_marble_classes(rgb)
        self.assertTrue(ocean[2, -1])
        self.assertFalse(ocean[0, 3])

    def test_connected_ocean_excludes_basins_and_respects_ice_and_nodata(self):
        elevation = np.ones((7, 7), dtype=np.float32)
        elevation[:, :3] = -1
        elevation[4, 5] = -1  # Disconnected depression, even though blue today.
        valid = np.ones_like(elevation, dtype=bool)
        modern = np.zeros_like(valid)
        modern[:, 0] = True
        modern[2, 3] = True  # Exposed modern ocean on positive terrain.
        modern[4, 5] = True
        ice = np.zeros_like(valid)
        ice[3, 1] = True
        valid[2, 2] = False
        exposed, flooded, known, counts = regional_changes(elevation, valid, modern, np.zeros_like(valid), ice)
        self.assertTrue(exposed[2, 3])
        self.assertTrue(flooded[1, 1])
        self.assertFalse(known[4, 5])
        self.assertFalse(known[3, 1])
        self.assertFalse(known[2, 2])
        self.assertEqual(counts["disconnected_negative_cells_excluded"], 1)

    def test_unknown_domain_hole_cannot_seed_a_disconnected_basin(self):
        elevation = np.ones((7, 7), dtype=np.float32)
        elevation[:, 0] = -1
        elevation[3, 3:5] = -1
        valid = np.ones_like(elevation, dtype=bool)
        valid[3, 4] = False
        modern = elevation < 0
        zero = np.zeros_like(valid)
        _, _, known, _ = regional_changes(elevation, valid, modern, zero, zero)
        self.assertFalse(known[3, 3])

    def test_missing_ocean_seeds_fail_instead_of_fabricating_land(self):
        no = np.zeros((3, 3), dtype=bool)
        with self.assertRaisesRegex(ContractError, "ocean seeds"):
            regional_changes(np.ones((3, 3)), ~no, no, no, no)

    def test_native_grid_sampling_and_coverage_quantization(self):
        source = np.array([[True, False, False, False], [False, False, False, False]])
        gt = (-180, 90, 0, 90, 0, -90)
        np.testing.assert_array_equal(image_to_native(source, (4, 2), gt, "EPSG:4326"), source)
        alpha, = native_to_alpha((source,), gt, "EPSG:4326", width=2, height=1, samples=2)
        np.testing.assert_array_equal(alpha, [[64, 0]])
        # Partial native extent remains transparent outside; it is not normalized.
        alpha, = native_to_alpha((np.ones((2, 2), dtype=bool),), (0, 90, 0, 90, 0, -90),
                                 "EPSG:4326", width=2, height=1, samples=2)
        np.testing.assert_array_equal(alpha, [[0, 255]])


if __name__ == "__main__":
    unittest.main()
