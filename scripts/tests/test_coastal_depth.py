from pathlib import Path
import sys
import tempfile
import unittest

import numpy as np
from PIL import Image

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from paleomasks.coastal_depth import ERAS, coastal_change, make_preview, ocean_at_level, quantize, save_png, shoreline, white_overlay


class CoastalDepthTests(unittest.TestCase):
    def test_glacial_depth_change_is_not_clipped_at_old_64_metre_limit(self):
        z = np.array([[-200., -130., -100., 0.]], np.float32)
        change, exposed = coastal_change(z, ocean_at_level(z, 0), ocean_at_level(z, -130), -130)
        np.testing.assert_array_equal(change, [[130, 130, 100, 0]])
        np.testing.assert_array_equal(exposed, [[False, True, True, False]])
        encoded = quantize(change, 160, 16)
        np.testing.assert_allclose(encoded.astype(float) / 65535 * 160, change, atol=160 / 65535 / 2)
        self.assertLess(int(encoded.max()), 65535)

    def test_preview_adds_a_third_row_for_five_eras(self):
        with tempfile.TemporaryDirectory() as temp:
            make_preview(Path(temp), {slug: np.full((4, 8), 255, np.uint8) for slug in ERAS})
            with Image.open(Path(temp) / "preview.png") as im:
                self.assertEqual(im.size, (2048, 1752))
                self.assertEqual(im.getpixel((100, 1300)), (255, 255, 255))

    def test_generated_masks_restore_ice_covered_coasts_without_changing_other_pixels(self):
        root = Path(__file__).resolve().parents[2] / "output"
        for slug in ERAS:
            with self.subTest(era=slug):
                old = root / "coastal-depth-masks-v4" / slug
                new = root / "coastal-depth-masks-v5" / slug
                with Image.open(f"{old}-excluded.png") as im:
                    excluded = np.asarray(im)[:, :, 3] > 0
                with Image.open(f"{new}-excluded.png") as im:
                    self.assertFalse(np.asarray(im)[:, :, 3].any())
                for suffix in ("depth-change", "depth-change-8bit", "land-change", "shoreline"):
                    with self.subTest(mask=suffix):
                        with Image.open(f"{old}-{suffix}.png") as im:
                            before = np.array(im)
                        with Image.open(f"{new}-{suffix}.png") as im:
                            after = np.array(im)
                        if before.ndim == 3:
                            before, after = before[:, :, 3], after[:, :, 3]
                        np.testing.assert_array_equal(after[~excluded], before[~excluded])
                        self.assertFalse(before[excluded].any())
                        self.assertGreater(np.count_nonzero(after[excluded]), 0)

    def test_overlay_roundtrip_preserves_all_mask_values_in_alpha(self):
        mask = np.arange(256, dtype=np.uint8).reshape(16, 16)
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "overlay.png"
            save_png(path, white_overlay(mask))
            with Image.open(path) as image:
                self.assertEqual(image.mode, "RGBA")
                pixels = np.asarray(image)
                np.testing.assert_array_equal(pixels[:, :, 3], mask)
                self.assertTrue((pixels[:, :, :3] == 255).all())

    def test_overlay_composites_transparently_without_squaring_strength(self):
        mask = np.array([[0, 128, 255]], dtype=np.uint8)
        overlay = Image.fromarray(white_overlay(mask))
        background = Image.new("RGBA", overlay.size, (20, 60, 100, 255))
        composite = np.asarray(Image.alpha_composite(background, overlay))
        np.testing.assert_array_equal(composite[0], [
            [20, 60, 100, 255], [138, 158, 178, 255], [255, 255, 255, 255],
        ])

    def test_overlay_rejects_non_8bit_or_multichannel_data(self):
        for mask in (np.zeros((2, 2), np.uint16), np.zeros((2, 2, 4), np.uint8)):
            with self.assertRaises(ValueError):
                white_overlay(mask)

    def test_falling_sea_includes_exposure_and_submerged_shallows_with_smooth_taper(self):
        z = np.array([[-500, -455, -355, -255, -100, -55, -20, 0, 20]], np.float32)
        modern, era = ocean_at_level(z, 0), ocean_at_level(z, -55)
        change, exposed = coastal_change(z, modern, era, -55)
        np.testing.assert_allclose(change, [[0, 0, 27.5, 55, 55, 55, 20, 0, 0]])
        np.testing.assert_array_equal(exposed, [[False, False, False, False, False, True, True, False, False]])

    def test_rising_sea_floods_connected_lowlands_but_excludes_inland_depressions(self):
        z = np.full((7, 11), 100., np.float32)
        z[:, :3] = -100
        z[3, 3:7] = [0, 2, 6, 7]
        z[3, 9] = -2  # Isolated inland basin, below either sea level.
        modern, era = ocean_at_level(z, 0), ocean_at_level(z, 7)
        change, flooded = coastal_change(z, modern, era, 7)
        np.testing.assert_allclose(change[3, :7], [7, 7, 7, 7, 5, 1, 0])
        self.assertFalse(change[3, 9] or flooded[3, 9])
        self.assertEqual(int(flooded.sum()), 3)

    def test_stranded_water_nodata_and_nonfinite_elevations_are_excluded(self):
        z = np.full((7, 11), 100., np.float32)
        z[:, :3] = -100
        z[3, 3:7] = [-20, -100, -100, -100]  # Sill cuts off water at -55 m.
        z[1, 1] = -99999
        z[2, 1] = np.nan
        z[4, 1] = np.inf
        modern, era = ocean_at_level(z, 0), ocean_at_level(z, -55)
        change, exposed = coastal_change(z, modern, era, -55)
        self.assertEqual(change[3, 3], 20)
        self.assertTrue(exposed[3, 3])
        self.assertTrue(np.isfinite(change).all())
        self.assertFalse(change[3, 4:7].any())
        self.assertEqual(float(change[[1, 2, 4], 1].sum()), 0)

    def test_ocean_connectivity_wraps_longitude_but_not_poles(self):
        z = np.full((8, 10), 100., np.float32)
        z[2:5, :2] = z[2:5, -2:] = -100
        z[0:2, 4:8] = -100
        z[-1, 5] = -100
        ocean = ocean_at_level(z, -55)
        self.assertEqual(int(ocean.sum()), 12)
        self.assertFalse(ocean[0, 5] or ocean[-1, 5])

    def test_zero_level_has_no_change_and_invalid_levels_fail(self):
        z = np.full((2, 3), -10., np.float32)
        ocean = ocean_at_level(z, 0)
        change, land = coastal_change(z, ocean, ocean, 0)
        self.assertFalse(change.any() or land.any())
        for level in (float("nan"), float("inf"), -161, 161):
            with self.assertRaises(ValueError):
                ocean_at_level(z, level)
            with self.assertRaises(ValueError):
                coastal_change(z, ocean, ocean, level)

    def test_native_calculation_before_reduction_retains_mixed_coastal_change(self):
        z = np.array([[-20, 1000], [-100, 1000]], np.float32)
        change, _ = coastal_change(z, ocean_at_level(z, 0), ocean_at_level(z, -55), -55)
        reduced = np.asarray(Image.fromarray(change).resize((1, 1), Image.Resampling.BOX))
        self.assertEqual(float(reduced[0, 0]), 18.75)

    def test_16bit_png_roundtrip_and_common_metre_scale(self):
        metres = np.array([[0, .01, 3, 7, 25, 55, 64]], np.float32)
        encoded = quantize(metres, 64, 16)
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "mask.png"
            save_png(path, encoded)
            with Image.open(path) as image:
                self.assertEqual(image.mode, "I;16")
                np.testing.assert_array_equal(np.asarray(image), encoded)
        np.testing.assert_allclose(encoded.astype(float) / 65535 * 64, metres, atol=64 / 65535 / 2)
        self.assertEqual(quantize(np.array([[3.]], np.float32), 3, 8)[0, 0], 255)

    def test_shoreline_wraps_longitude_and_does_not_treat_unknown_as_land(self):
        ocean = np.zeros((5, 8), bool)
        ocean[0, 3] = ocean[2, 0] = ocean[2, 4] = True
        land = np.zeros_like(ocean)
        land[-1, 3] = land[2, -1] = True
        line = shoreline(ocean, land)
        self.assertTrue(line[2, 0])
        self.assertFalse(line[0, 3] or line[2, 4])


if __name__ == "__main__":
    unittest.main()
