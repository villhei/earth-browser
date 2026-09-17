"""Native terrain inspection: explicit validity and lossless GDAL export."""
from pathlib import Path
import sys
import tempfile
import unittest

import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from paleomasks.contract import ContractError
from paleomasks.terrain import export_native, summarize_cells, validate_native_grid

try:
    from osgeo import gdal, osr
except ImportError:
    gdal = osr = None


class TerrainStatisticsTests(unittest.TestCase):
    def test_mask_excludes_negative_nodata_and_preserves_valid_zero(self):
        values = np.array([[-99999, -2, 0], [4, np.nan, np.inf]], dtype=np.float32)
        mask = np.array([[0, 255, 255], [255, 0, 0]], dtype=np.uint8)
        self.assertEqual(summarize_cells(values, mask), {
            "valid_cells": 3, "invalid_cells": 3, "valid_below_zero_cells": 1,
            "valid_zero_cells": 1, "valid_above_zero_cells": 1,
            "minimum": -2, "maximum": 4, "valid_pixel_bounds_inclusive": [0, 0, 2, 1]})

    def test_empty_validity_is_data_absence(self):
        summary = summarize_cells(np.zeros((2, 2)), np.zeros((2, 2), dtype=np.uint8))
        self.assertEqual(summary["valid_cells"], 0)
        self.assertIsNone(summary["minimum"])
        self.assertIsNone(summary["valid_pixel_bounds_inclusive"])

    def test_rejects_nonfinite_valid_values_and_ambiguous_masks(self):
        with self.assertRaisesRegex(ContractError, "Nonfinite"):
            summarize_cells(np.array([[np.nan]]), np.array([[255]], dtype=np.uint8))
        with self.assertRaisesRegex(ContractError, "binary"):
            summarize_cells(np.zeros((1, 1)), np.array([[128]], dtype=np.uint8))
        with self.assertRaisesRegex(ContractError, "aligned"):
            summarize_cells(np.zeros((1, 2)), np.zeros((1, 1), dtype=np.uint8))


@unittest.skipUnless(gdal is not None, "Run with the GDAL-enabled Python to test native exports")
class TerrainGDALTests(unittest.TestCase):
    def make_dataset(self):
        gdal.UseExceptions()
        ds = gdal.GetDriverByName("MEM").Create("", 3, 260, 1, gdal.GDT_Float32)
        ds.SetGeoTransform((100, 10, 0, 3000, 0, -10))
        crs = osr.SpatialReference()
        crs.ImportFromEPSG(3857)
        ds.SetProjection(crs.ExportToWkt())
        values = np.arange(780, dtype=np.float32).reshape(260, 3) - 100
        mask = np.full(values.shape, 255, dtype=np.uint8)
        mask[:129] = 0
        mask[130, 1] = 0
        ds.GetRasterBand(1).WriteArray(values)
        ds.GetRasterBand(1).CreateMaskBand(gdal.GMF_PER_DATASET)
        ds.GetRasterBand(1).GetMaskBand().WriteArray(mask)
        entry = {"extent": {"XMin": 100, "XMax": 130, "YMin": 400, "YMax": 3000},
                 "cell_size_x": 10, "cell_size_y": 10, "horizontal_crs_wkt": crs.ExportToWkt(), "band_count": 1}
        return ds, entry, values, mask

    def test_export_checks_every_row_and_preserves_mask_grid_and_values(self):
        ds, entry, values, mask = self.make_dataset()
        validate_native_grid(ds, entry, osr)
        previous = gdal.GetConfigOption("GDAL_TIFF_INTERNAL_MASK")
        with tempfile.TemporaryDirectory() as temp:
            path = Path(temp) / "terrain.tif"
            result = export_native(ds, path, gdal)
            self.assertEqual(result["statistics"], summarize_cells(values, mask))
            self.assertEqual(result["size"], [3, 260])
            self.assertEqual(result["statistics"]["valid_pixel_bounds_inclusive"], [0, 129, 2, 259])
            self.assertEqual([p.name for p in Path(temp).iterdir()], ["terrain.tif"])
        self.assertEqual(gdal.GetConfigOption("GDAL_TIFF_INTERNAL_MASK"), previous)

    def test_grid_mismatch_is_rejected(self):
        ds, entry, _, _ = self.make_dataset()
        ds.SetGeoTransform((105, 10, 0, 3000, 0, -10))
        with self.assertRaisesRegex(ContractError, "geotransform"):
            validate_native_grid(ds, entry, osr)
        ds.SetGeoTransform((100, 10, 0, 3000, 0, -10))
        entry["extent"]["XMax"] = 131
        with self.assertRaisesRegex(ContractError, "dimensions"):
            validate_native_grid(ds, entry, osr)

    def test_missing_explicit_validity_blocks_export(self):
        ds = gdal.GetDriverByName("MEM").Create("", 2, 2, 1, gdal.GDT_Float32)
        with tempfile.TemporaryDirectory() as temp, self.assertRaisesRegex(ContractError, "explicit"):
            export_native(ds, Path(temp) / "terrain.tif", gdal)


if __name__ == "__main__":
    unittest.main()
