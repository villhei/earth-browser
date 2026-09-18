from pathlib import Path
import sys
import unittest

import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from paleomasks.coast_prototype import connected_ocean, diffuse_colours, exposed_shelf, reduce_coverage, synthesize


class CoastPrototypeTests(unittest.TestCase):
    def test_exposure_excludes_land_depressions_nodata_and_deep_water(self):
        z = np.full((7, 9), 500., dtype=np.float32)
        z[:, :3] = -100
        z[3, 2] = -25
        z[4, 2] = -55
        z[5, 2] = 0
        z[1, 1] = -99999
        z[3, 6] = -25  # A disconnected inland depression.
        ocean, exposed = exposed_shelf(z, -55)
        self.assertEqual(int(exposed.sum()), 2)
        self.assertTrue(exposed[3, 2] and exposed[4, 2])
        self.assertFalse(ocean[1, 1] or ocean[3, 6])
        self.assertFalse(exposed[z >= 0].any())

    def test_longitude_union_is_done_before_choosing_largest_component(self):
        water = np.zeros((8, 10), bool)
        water[2:5, :2] = True
        water[2:5, -2:] = True
        water[0:2, 4:8] = True  # Larger than either seam half, smaller than union.
        water[-1, 5] = True  # Must not join across poles.
        ocean = connected_ocean(water)
        self.assertEqual(int(ocean.sum()), 12)
        self.assertFalse(ocean[0, 5] or ocean[-1, 5])

    def test_native_classification_survives_averaging_with_high_land(self):
        z = np.array([[-20, 1000], [-100, 1000]], dtype=np.float32)
        _, exposed = exposed_shelf(z, -55)
        self.assertEqual(int(reduce_coverage(exposed, (1, 1))[0, 0]), 64)

    def test_invalid_scenarios_are_rejected(self):
        for value in (float("nan"), float("inf"), 0, 5, -151):
            with self.assertRaises(ValueError):
                exposed_shelf(np.full((2, 2), -10), value)

    def test_texture_diffusion_has_no_date_line_colour_seam(self):
        donors = np.zeros((32, 128), bool)
        donors[:, 0:8] = donors[:, -8:] = donors[:, 60:68] = True
        rgb = np.zeros((32, 128, 3), dtype=np.float32)
        rgb[:, :8] = rgb[:, -8:] = (150, 120, 40)
        rgb[:, 60:68] = (40, 100, 50)
        colour = diffuse_colours(rgb, donors)
        np.testing.assert_allclose(colour[:, 0], colour[:, -1], atol=1e-4)
        self.assertGreater(colour[16, 0, 0], colour[16, 64, 0])

    def test_synthesis_preserves_untouched_pixels_and_protects_snow(self):
        base = np.full((20, 40, 3), (100, 120, 60), np.uint8)
        base[:, 20:] = (10, 30, 70)
        base[4, 22] = (220, 225, 230)
        ocean = np.zeros((20, 40), np.uint8)
        ocean[:, 20:] = 255
        shelf = np.zeros_like(ocean)
        shelf[:, 20:24] = 255
        result, alpha = synthesize(base, ocean, shelf, np.zeros_like(ocean, dtype=np.float32))
        self.assertEqual(alpha[4, 22], 0)
        np.testing.assert_array_equal(result[alpha == 0], base[alpha == 0])
        self.assertTrue(np.all(result[alpha > 0, 1] > result[alpha > 0, 2]))
        repeat, _ = synthesize(base, ocean, shelf, np.zeros_like(ocean, dtype=np.float32))
        np.testing.assert_array_equal(result, repeat)


if __name__ == "__main__":
    unittest.main()
