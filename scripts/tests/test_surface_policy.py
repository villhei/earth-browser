"""Operator-directed ice precedence and a unified static surface overlay."""
from pathlib import Path
import sys
import unittest

import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from paleomasks.contract import ContractError
from paleomasks.surface_policy import apply_zero_rounding_policy, compose_surface


class SurfacePolicyTests(unittest.TestCase):
    def test_drops_geometric_zero_but_not_a_visible_sampling_miss(self):
        def rectangle(w, h):
            return [np.array([[0, 0], [w, 0], [w, h], [0, h], [0, 0]], dtype=float)]
        drops = apply_zero_rounding_policy([rectangle(.01, .01)], [0], 360, 180)
        self.assertEqual(drops[0]["disposition"], "discarded_from_overlay")
        self.assertEqual(drops[0]["quantized_nonzero_pixels"], 0)
        with self.assertRaisesRegex(ContractError, "refine rasterization"):
            apply_zero_rounding_policy([rectangle(.02, .2)], [0], 360, 180)

    def test_merges_ice_and_overrides_modeled_land_and_ocean(self):
        grounded = np.array([[True, False, False, False, False]])
        floating = np.array([[False, True, False, False, False]])
        empirical = np.array([[False, False, True, False, False]])
        marine = np.array([[False, True, True, True, False]])
        known = np.ones_like(marine)
        originals = [a.copy() for a in (grounded, floating, empirical, marine, known)]
        result = compose_surface(grounded, floating, empirical, marine, known)
        np.testing.assert_array_equal(result["ice"], [[True, True, True, False, False]])
        np.testing.assert_array_equal(result["ocean"], [[False, False, False, True, False]])
        np.testing.assert_array_equal(result["land"], [[False, False, False, False, True]])
        np.testing.assert_array_equal(result["ice_over_modeled_marine"], [[False, True, True, False, False]])
        for actual, original in zip((grounded, floating, empirical, marine, known), originals):
            np.testing.assert_array_equal(actual, original)

    def test_positive_ice_survives_unknown_terrain_without_filling_other_gaps(self):
        no = np.zeros((1, 2), dtype=bool)
        result = compose_surface(no, no, np.array([[True, False]]), ~no, no)
        np.testing.assert_array_equal(result["known_surface"], [[True, False]])
        self.assertFalse(result["ocean"].any())
        self.assertFalse(result["land"].any())
        self.assertFalse(result["ice_over_modeled_marine"].any())

    def test_union_before_area_reduction_retains_disjoint_subcell_coverage(self):
        grounded = np.array([[True, False], [True, False]])
        floating = ~grounded
        no = np.zeros_like(grounded)
        result = compose_surface(grounded, floating, no, no, no)
        self.assertEqual(result["ice"].mean(), 1.0)
        # Taking the max of separately quantized half-pixel masks would give 0.5.
        result = compose_surface(grounded, grounded, no, no, no)
        self.assertEqual(result["ice"].mean(), .5)  # Overlaps are not double counted.

    def test_rejects_quantized_alpha_and_misaligned_grids(self):
        no = np.zeros((2, 2), dtype=bool)
        for bad in (np.zeros((2, 2), dtype=np.uint8), np.zeros((1, 2), dtype=bool), np.zeros(4, dtype=bool)):
            with self.assertRaisesRegex(ContractError, "aligned"):
                compose_surface(bad, no, no, no, no)


if __name__ == "__main__":
    unittest.main()
