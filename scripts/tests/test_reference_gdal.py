from pathlib import Path
import sys
import unittest

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from paleomasks.reference_gdal import raster_layer

try:
    from osgeo import ogr, osr
except ImportError:
    ogr = osr = None


@unittest.skipUnless(ogr is not None, "Requires GDAL-enabled Python")
class IndependentRasterTests(unittest.TestCase):
    def test_independent_raster_preserves_hole_and_axis_order(self):
        crs = osr.SpatialReference(); crs.ImportFromEPSG(4326)
        dataset = ogr.GetDriverByName("Memory").CreateDataSource("")
        layer = dataset.CreateLayer("test", crs, ogr.wkbPolygon)
        feature = ogr.Feature(layer.GetLayerDefn())
        feature.SetGeometry(ogr.CreateGeometryFromWkt(
            "POLYGON ((0 0, 90 0, 90 90, 0 90, 0 0), (0 0, 0 45, 45 45, 45 0, 0 0))"))
        layer.CreateFeature(feature)
        pixels, report = raster_layer(layer, width=8, height=4)
        self.assertTrue(pixels[0, 4] and pixels[0, 5] and pixels[1, 5])
        self.assertFalse(pixels[1, 4] or pixels[2, 4] or pixels[0, 3])
        self.assertEqual(report["interior_rings"], 1)
        # This deliberately touching hole is invalid; diagnostics retain the finding.
        self.assertEqual(len(report["invalid_native_geometries"]), 1)


if __name__ == "__main__":
    unittest.main()
