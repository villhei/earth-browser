"""Numerical behavior on synthetic evidence; not scientific source validation."""
from pathlib import Path
import sys
import unittest

import numpy as np
from pyproj import Transformer

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from paleomasks.contract import ContractError
from paleomasks.geometry import (analyze_sampling_losses, close_diagnostic_ring, coverage_rgba,
                                filter_category, marine_changes, point_pixel, polygon_pixel_coverage,
                                project_ring, rasterize, refine_sampling_misses, unwrap_ring)


def ring(west, south, east, north):
    return np.array([(west, south), (east, south), (east, north), (west, north), (west, south)], dtype=float)


class GeometryTests(unittest.TestCase):
    def test_local_window_matches_global_union_with_holes_and_longitude_wrap(self):
        polygons = [[unwrap_ring(ring(170, -20, -170, 20)),
                     unwrap_ring(ring(175, -10, -175, 10))], [ring(179.25, -.75, 180.5, .75)]]
        full, _ = rasterize(polygons, 360, 180, 8)
        for column, row in ((0, 90), (359, 90), (0, 75), (180, 90)):
            local, _ = rasterize(polygons, 360, 180, 8, window=(column, row, 1, 1))
            self.assertEqual(local[0, 0], full[row, column])
        dense, _ = rasterize([[ring(0, -1, 1, 0)]], 360, 180, 256, window=(180, 90, 1, 1))
        self.assertEqual(dense[0, 0], 255)  # 65,536 hits must not overflow uint16.

    def test_refinement_retains_tiny_features_and_unions_overlaps_without_alpha_addition(self):
        tiny = [ring(.001, -.051, .051, -.001)]
        polygons = [[ring(.75, -1, 1, 0)], tiny, tiny]
        alpha, hits = rasterize(polygons, 360, 180, 8)
        self.assertEqual(hits[1:], [0, 0])
        before = alpha.copy()
        alpha, hits, report = refine_sampling_misses(polygons, alpha, hits, 360, 180)
        self.assertTrue(hits[1] and hits[2])
        self.assertEqual(len(report), 1)
        samples = report[0]["samples_per_axis"]
        expected, _ = rasterize(polygons[:2], 360, 180, samples, window=(180, 90, 1, 1))
        self.assertEqual(alpha[90, 180], expected[0, 0])
        self.assertGreater(alpha[90, 180], before[90, 180])
        alpha[90, 180] = before[90, 180]
        np.testing.assert_array_equal(alpha, before)

    def test_unclosed_ring_fails_unless_diagnostic_repair_is_explicit(self):
        unclosed = ring(0, 0, 1, 1)[:-1]
        with self.assertRaisesRegex(ContractError, "Unclosed source ring"):
            close_diagnostic_ring(unclosed)
        closed, log = close_diagnostic_ring(unclosed, allow=True)
        np.testing.assert_array_equal(closed[:-1], unclosed)
        np.testing.assert_array_equal(closed[-1], unclosed[0])
        self.assertEqual(log["operation"], "append_first_vertex")
        self.assertEqual(log["closing_segment_native_units"], 1)

    def test_pixel_centres_equator_seam_and_poles(self):
        self.assertEqual(point_pixel(-179.9560546875, 89.9560546875), (0, 0))
        self.assertEqual(point_pixel(179.9560546875, -89.9560546875), (4095, 2047))
        self.assertEqual(point_pixel(0, 0), (2048, 1024))
        self.assertEqual(point_pixel(180, -90), (0, 2047))
        self.assertEqual(point_pixel(-180, 90), (0, 0))

    def test_hole_and_island_union(self):
        shell, hole, island = ring(-40, -40, 40, 40), ring(-20, -20, 20, 20), ring(-5, -5, 5, 5)
        alpha, _ = rasterize([[shell, hole], [island]], 360, 180, 2)
        self.assertEqual(alpha[90, 180], 255)
        self.assertEqual(alpha[90, 190], 0)
        self.assertEqual(alpha[90, 210], 255)

    def test_adjacent_sources_union_without_seam_gap_or_double_counting(self):
        # Two regional sources meet within a pixel, with a slight overlap.
        # Union before downsampling must equal a single continuous source.
        west = ring(-2, -1, .25, 1)
        east = ring(-.25, -1, 2, 1)
        combined, _ = rasterize([[west], [east]], 360, 180, 8)
        whole, _ = rasterize([[ring(-2, -1, 2, 1)]], 360, 180, 8)
        np.testing.assert_array_equal(combined, whole)
        self.assertEqual(np.count_nonzero(combined), 8)

    def test_antimeridian_crossing_preserves_holes(self):
        shell = unwrap_ring(ring(170, -20, -170, 20))
        hole = unwrap_ring(ring(175, -10, -175, 10))
        alpha, _ = rasterize([[shell, hole]], 360, 180, 2)
        self.assertEqual(alpha[90, 180], 0)
        self.assertEqual(alpha[90, 0], 0)
        self.assertEqual(alpha[75, 0], 255)
        self.assertEqual(alpha[75, -1], 255)
        self.assertEqual(np.count_nonzero(alpha), 20 * 40 - 10 * 20)

    def test_explicit_polar_cap_and_ambiguous_rejection(self):
        cap = [(-180, 80), (-90, 80), (0, 80), (90, 80), (180, 80), (-180, 80)]
        with self.assertRaisesRegex(ContractError, "pole inclusion"):
            unwrap_ring(cap)
        alpha, _ = rasterize([[unwrap_ring(cap, pole=90)]], 360, 180, 2)
        self.assertTrue(np.all(alpha[:10] == 255))
        self.assertFalse(np.any(alpha[10:]))

    def test_polar_hole_with_a_different_starting_meridian(self):
        shell = [(-180, 70), (-90, 70), (0, 70), (90, 70), (180, 70), (-180, 70)]
        hole = [(-90, 80), (0, 80), (90, 80), (180, 80), (-90, 80)]
        alpha, _ = rasterize([[unwrap_ring(shell, pole=90), unwrap_ring(hole, pole=90)]], 360, 180, 2)
        self.assertFalse(np.any(alpha[:10]))
        self.assertTrue(np.all(alpha[10:20] == 255))
        self.assertFalse(np.any(alpha[20:]))

    def test_esri102017_reprojection_and_native_vertex_retention(self):
        geographic = ring(10, 60, 15, 65)
        to_native = Transformer.from_crs("EPSG:4326", "ESRI:102017", always_xy=True)
        native = np.column_stack(to_native.transform(geographic[:, 0], geographic[:, 1]))
        result = project_ring(native, "ESRI:102017")
        self.assertGreater(len(result), len(native))
        for vertex in geographic:
            self.assertLess(np.linalg.norm(result - vertex, axis=1).min(), 1e-6)

    def test_projected_north_and_south_pole_caps(self):
        for crs, pole in (("EPSG:3413", 90), ("EPSG:3031", -90)):
            angles = np.linspace(0, 2 * np.pi, 65)
            native = np.column_stack([np.cos(angles), np.sin(angles)]) * 100000
            native[-1] = native[0]
            result = project_ring(native, crs)
            alpha, _ = rasterize([[result]], 360, 180, 2)
            self.assertTrue(np.all(alpha[0 if pole == 90 else -1] > 0))
            self.assertFalse(np.any(alpha[90]))

    def test_regular_subcell_centres_and_box_quantization(self):
        alpha, _ = rasterize([[ring(0, 0, .5, 1)]], 360, 180, 4)
        self.assertEqual(alpha[89, 180], 128)
        self.assertEqual(np.count_nonzero(alpha), 1)

    def test_small_positive_feature_loss_is_reported(self):
        alpha, hits = rasterize([[ring(0, 0, .01, .01)]], 360, 180, 4)
        self.assertEqual(hits, [0])
        self.assertFalse(alpha.any())

    def test_analytic_loss_distinguishes_sampling_from_encoding(self):
        polygons = [[ring(0, 0, .02, .2)], [ring(0, 0, .01, .01)]]
        alpha, hits = rasterize(polygons, 360, 180, 8)
        self.assertEqual(hits, [0, 0])
        losses = analyze_sampling_losses(polygons, hits, 360, 180)
        self.assertEqual([loss["outcome"] for loss in losses],
                         ["sampling_miss", "below_encoding_resolution"])
        self.assertAlmostEqual(losses[0]["area_pixel_units"], .004)
        self.assertEqual(losses[0]["pixel_coverage"][0]["quantized_alpha"], 1)
        self.assertAlmostEqual(losses[1]["area_pixel_units"], .0001)
        self.assertEqual(losses[1]["quantized_nonzero_pixels"], 0)
        self.assertFalse(alpha.any())  # Analysis must not paint enlarged features.

    def test_analytic_coverage_holes_and_orientation(self):
        polygon = [ring(0, 0, 1, 1), ring(.25, .25, .75, .75)]
        fractions = polygon_pixel_coverage(polygon, 360, 180)
        self.assertEqual(fractions, {(89, 180): .75})
        self.assertEqual(polygon_pixel_coverage([r[::-1] for r in polygon], 360, 180), fractions)

    def test_analytic_coverage_triangle_and_concave_polygon(self):
        triangle = np.array([(0, 0), (1, 0), (0, 1), (0, 0)])
        self.assertEqual(polygon_pixel_coverage([triangle], 360, 180), {(89, 180): .5})
        elbow = np.array([(0, 0), (2, 0), (2, .5), (.5, .5), (.5, 2), (0, 2), (0, 0)])
        self.assertEqual(polygon_pixel_coverage([elbow], 360, 180),
                         {(88, 180): .5, (89, 180): .75, (89, 181): .5})

    def test_analytic_coverage_periodic_holes_and_south_pole(self):
        polygon = [unwrap_ring(ring(179.5, -1, -179.5, 1)),
                   unwrap_ring(ring(179.75, -.5, -179.75, .5))]
        fractions = polygon_pixel_coverage(polygon, 360, 180)
        self.assertEqual(set(fractions), {(89, 359), (89, 0), (90, 359), (90, 0)})
        for fraction in fractions.values():
            self.assertAlmostEqual(fraction, .375)
        cap = [(-180, -89), (-90, -89), (0, -89), (90, -89), (180, -89), (-180, -89)]
        fractions = polygon_pixel_coverage([unwrap_ring(cap, pole=-90)], 360, 180)
        self.assertEqual(set(fractions), {(179, col) for col in range(360)})
        for fraction in fractions.values():
            self.assertAlmostEqual(fraction, 1)

    def test_analytic_coverage_polar_hole_different_meridian(self):
        shell = [(-180, 70), (-90, 70), (0, 70), (90, 70), (180, 70), (-180, 70)]
        hole = [(-90, 80), (0, 80), (90, 80), (180, 80), (-90, 80)]
        fractions = polygon_pixel_coverage([unwrap_ring(shell, pole=90), unwrap_ring(hole, pole=90)], 36, 18)
        self.assertEqual(fractions, {(1, col): 1 for col in range(36)})

    def test_analytic_diagnostic_reports_unresolved_geometry_and_work_limit(self):
        polygons = [[ring(-100, -80, 100, 80)]]
        # First polygon deliberately bypasses unwrap: its area exceeds the work cap.
        losses = analyze_sampling_losses(polygons, [0], 360, 180)
        self.assertEqual(losses[0]["outcome"], "unresolved")
        self.assertIn("cell limit", losses[0]["reason"])
        with self.assertRaisesRegex(ContractError, "count mismatch"):
            analyze_sampling_losses(polygons, [], 360, 180)
        # Invalid overlapping holes create negative clipped area, never a repair.
        losses = analyze_sampling_losses([[ring(0, 0, 1, 1), ring(0, 0, 1, 1), ring(0, 0, 1, 1)]],
                                         [0], 360, 180)
        self.assertEqual(losses[0]["outcome"], "unresolved")
        self.assertIn("topology", losses[0]["reason"])

    def test_ice_lake_filter_unknown_category_and_nadi_attributes(self):
        self.assertTrue(filter_category({"SYMB": "ICE"}))
        self.assertFalse(filter_category({"SYMB": "LAKE"}))
        self.assertTrue(filter_category({"Area": 200}))
        for category in (None, "ice", "SHELF", ""):
            with self.assertRaises(ContractError):
                filter_category({"SYMB": category})

    def test_coverage_distinguishes_unknown_from_supported_absence(self):
        coverage = np.array([[0, 255, 128]], dtype=np.uint8)
        alpha = np.array([[0, 0, 128]], dtype=np.uint8)
        rgba = coverage_rgba(alpha, coverage, (217, 164, 65))
        self.assertEqual(rgba[0, 0].tolist(), [0, 0, 0, 0])
        self.assertEqual(rgba[0, 1].tolist(), [0, 0, 0, 0])
        self.assertEqual(rgba[0, 2].tolist(), [217, 164, 65, 128])
        alpha[0, 0] = 1
        with self.assertRaisesRegex(ContractError, "outside"):
            coverage_rgba(alpha, coverage, (255, 255, 255))

    def test_confirmed_empty_requires_nonempty_supported_domain(self):
        zero = np.zeros((2, 2), dtype=np.uint8)
        with self.assertRaisesRegex(ContractError, "unavailable"):
            coverage_rgba(zero, zero, (255, 255, 255), confirmed_empty=True)
        coverage = np.full_like(zero, 255)
        self.assertFalse(coverage_rgba(zero, coverage, (255, 255, 255), confirmed_empty=True).any())
        with self.assertRaisesRegex(ContractError, "Presence state"):
            coverage_rgba(zero, coverage, (255, 255, 255))

    def test_marine_changes_exclude_lakes_subglacial_unknowns_and_seams(self):
        modern = np.array([True, False, True, True, True, True, True])
        target = ~modern
        modern_known = np.ones(7, dtype=bool)
        target_known = np.array([True, True, False, True, True, True, True])
        excluded = np.array([False, False, False, True, True, False, False])
        seams = np.array([False, False, False, False, False, True, False])
        exposed, flooded, domain = marine_changes(modern, target, modern_known, target_known, excluded, seams)
        np.testing.assert_array_equal(exposed, [True, False, False, False, False, False, True])
        np.testing.assert_array_equal(flooded, [False, True, False, False, False, False, False])
        self.assertEqual(domain.sum(), 3)


if __name__ == "__main__":
    unittest.main()
