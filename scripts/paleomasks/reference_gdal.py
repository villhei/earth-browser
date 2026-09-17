"""Independent OGR reprojection / GDAL centre-hit check, run with GDAL Python.

This diagnostic deliberately does not import the production geometry rasterizer.
It does not repair invalid source geometry or supply new scientific evidence.
"""
import json
from pathlib import Path
import sys

import numpy as np


def raster_layer(layer, width=4096, height=2048):
    from osgeo import gdal, ogr, osr
    gdal.UseExceptions()
    ogr.UseExceptions()
    osr.UseExceptions()
    target = osr.SpatialReference()
    target.ImportFromEPSG(4326)
    target.SetAxisMappingStrategy(osr.OAMS_TRADITIONAL_GIS_ORDER)
    source = layer.GetSpatialRef().Clone()
    source.SetAxisMappingStrategy(osr.OAMS_TRADITIONAL_GIS_ORDER)
    transform = osr.CoordinateTransformation(source, target)
    memory = ogr.GetDriverByName("Memory").CreateDataSource("")
    projected = memory.CreateLayer("projected", target, ogr.wkbUnknown)
    invalid, holes, count = [], 0, 0
    layer.ResetReading()
    for feature in layer:
        geometry = feature.GetGeometryRef().Clone()
        messages = []
        gdal.PushErrorHandler(lambda level, number, message: messages.append(message))
        try:
            if not geometry.IsValid():
                invalid.append({"fid": feature.GetFID(), "reason": "; ".join(messages) or "OGR reports invalid geometry"})
        finally:
            gdal.PopErrorHandler()
            gdal.ErrorReset()
        parts = [geometry] if geometry.GetGeometryName() == "POLYGON" else list(geometry)
        holes += sum(max(0, part.GetGeometryCount() - 1) for part in parts)
        geometry.Transform(transform)
        out = ogr.Feature(projected.GetLayerDefn())
        out.SetGeometry(geometry)
        projected.CreateFeature(out)
        count += 1
    raster = gdal.GetDriverByName("MEM").Create("", width, height, 1, gdal.GDT_Byte)
    raster.SetGeoTransform((-180, 360 / width, 0, 90, 0, -180 / height))
    raster.SetProjection(target.ExportToWkt())
    raster.GetRasterBand(1).Fill(0)
    gdal.RasterizeLayer(raster, [1], projected, burn_values=[1])
    return raster.ReadAsArray().astype(bool), {"features": count, "interior_rings": holes,
        "invalid_native_geometries": invalid, "repair": "none"}


def main(job_path, output):
    from osgeo import gdal, ogr
    gdal.UseExceptions()
    ogr.UseExceptions()
    output = Path(output)
    job = json.loads(Path(job_path).read_text())
    report = {"gdal": gdal.VersionInfo("RELEASE_NAME"), "numpy": np.__version__, "layers": []}
    for index, layer in enumerate(job["layers"]):
        path = f"/vsizip/{Path(job['cache']).resolve() / layer['archive']}/{layer['member_stem']}.shp"
        dataset = ogr.Open(path)
        if dataset is None:
            raise ValueError(f"Cannot open pinned source: {path}")
        pixels, record = raster_layer(dataset.GetLayer(0))
        np.save(output / f"source-{index}.npy", pixels)
        report["layers"].append({"member_stem": layer["member_stem"], **record})
    # Modern elevation is an independent gross image-classification screen only.
    # Never use this resampled reference to generate or repair paleo coastlines.
    modern = gdal.Warp("", job["modern_elevation"], format="MEM", dstSRS="EPSG:4326",
        outputBounds=(-180, -90, 180, 90), width=4096, height=2048,
        resampleAlg="near", dstNodata=-99999, outputType=gdal.GDT_Float32)
    np.save(output / "modern-elevation.npy", modern.ReadAsArray())
    (output / "gdal-report.json").write_text(json.dumps(report, indent=2) + "\n")


if __name__ == "__main__":
    main(*sys.argv[1:])
