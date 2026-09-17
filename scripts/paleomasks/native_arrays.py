"""Small GDAL-Python bridge for the numerical environment; invoked as a script."""
from pathlib import Path
import sys
import numpy as np
from osgeo import gdal


def main():
    gdal.UseExceptions()
    dataset = gdal.OpenEx(sys.argv[1], gdal.OF_RASTER)
    band = dataset.GetRasterBand(1)
    if not band.GetMaskFlags() & gdal.GMF_PER_DATASET:
        raise ValueError("Expected the verified native terrain's explicit validity mask")
    output = Path(sys.argv[2])
    for name, source, dtype in (("elevation", band, np.float32), ("valid", band.GetMaskBand(), np.uint8)):
        result = np.lib.format.open_memmap(output / f"{name}.npy", mode="w+", dtype=dtype,
                                          shape=(dataset.RasterYSize, dataset.RasterXSize))
        for row in range(0, dataset.RasterYSize, 128):
            count = min(128, dataset.RasterYSize - row)
            result[row:row + count] = source.ReadAsArray(0, row, dataset.RasterXSize, count)
        result.flush()


if __name__ == "__main__":
    main()
