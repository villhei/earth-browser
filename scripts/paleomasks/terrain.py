"""Native ICE6G terrain evidence inspection; no land/ocean classification."""
from __future__ import annotations

import hashlib
import json
from pathlib import Path
import shutil
import sys
import tempfile
import zipfile

import numpy as np

from .contract import DATA, ROOT, fingerprint, read_json, require, safe_path, verify_file

TRIALS = ((12000, "world-bc10000"), (10000, "world-bc8000"), (7000, "world-bc5000"))


def summarize_cells(values, mask):
    """Measure only explicitly valid native cells. Below zero does not mean ocean."""
    require(values.ndim == 2 and values.shape == mask.shape and mask.dtype == np.uint8,
            "Terrain values and validity mask must be aligned 2D arrays")
    require(np.all((mask == 0) | (mask == 255)), "Expected binary native validity mask")
    valid = mask == 255
    cells = values[valid]
    require(np.isfinite(cells).all(), "Nonfinite terrain in valid cells")
    rows, columns = np.nonzero(valid)
    return {"valid_cells": int(cells.size), "invalid_cells": int(values.size - cells.size),
            "valid_below_zero_cells": int(np.count_nonzero(cells < 0)),
            "valid_zero_cells": int(np.count_nonzero(cells == 0)),
            "valid_above_zero_cells": int(np.count_nonzero(cells > 0)),
            "minimum": float(cells.min()) if cells.size else None,
            "maximum": float(cells.max()) if cells.size else None,
            "valid_pixel_bounds_inclusive": [int(columns.min()), int(rows.min()),
                                              int(columns.max()), int(rows.max())] if cells.size else None}


def validate_native_grid(dataset, catalog_entry, osr):
    """Compare decoded registration with the previously inventoried source XML."""
    gt = dataset.GetGeoTransform()
    extent = catalog_entry["extent"]
    expected = (extent["XMin"], catalog_entry["cell_size_x"], 0,
                extent["YMax"], 0, -catalog_entry["cell_size_y"])
    require(np.allclose(gt, expected, rtol=0, atol=1e-7), "Native geotransform disagrees with catalog")
    require(abs(gt[0] + dataset.RasterXSize * gt[1] - extent["XMax"]) < 1e-6
            and abs(gt[3] + dataset.RasterYSize * gt[5] - extent["YMin"]) < 1e-6,
            "Native dimensions disagree with catalog extent")
    reference = osr.SpatialReference()
    reference.ImportFromWkt(catalog_entry["horizontal_crs_wkt"])
    require(bool(dataset.GetSpatialRef().IsSame(reference)), "Native CRS disagrees with catalog")
    require(dataset.RasterCount == catalog_entry["band_count"] == 1, "Expected single-band terrain")


def export_native(dataset, destination, gdal):
    """Lossless native Float32 export with a separate validity mask, fully checked.

    Cell and mask hashes use north-to-south row-major order, little-endian Float32
    and uint8 respectively. Invalid cell bytes are preserved but never classified.
    """
    require(dataset.RasterCount == 1 and dataset.GetRasterBand(1).DataType == gdal.GDT_Float32,
            "Expected one Float32 native terrain band")
    require(dataset.GetRasterBand(1).GetMaskFlags() & gdal.GMF_PER_DATASET,
            "Expected explicit per-dataset native validity mask")
    previous = gdal.GetConfigOption("GDAL_TIFF_INTERNAL_MASK")
    try:
        gdal.SetConfigOption("GDAL_TIFF_INTERNAL_MASK", "YES")
        exported = gdal.Translate(str(destination), dataset, format="GTiff",
                                  creationOptions=["TILED=YES", "COMPRESS=DEFLATE", "PREDICTOR=3", "NUM_THREADS=1"])
        require(exported is not None, "Native GeoTIFF export failed")
        exported.FlushCache()
        exported = None
    finally:
        gdal.SetConfigOption("GDAL_TIFF_INTERNAL_MASK", previous)
    exported = gdal.OpenEx(str(destination), gdal.OF_RASTER)
    require((exported.RasterXSize, exported.RasterYSize, exported.RasterCount) ==
            (dataset.RasterXSize, dataset.RasterYSize, dataset.RasterCount)
            and exported.GetGeoTransform() == dataset.GetGeoTransform()
            and exported.GetSpatialRef().IsSame(dataset.GetSpatialRef()),
            "Native export changed grid or CRS")
    source_band, export_band = dataset.GetRasterBand(1), exported.GetRasterBand(1)
    require(export_band.DataType == source_band.DataType
            and export_band.GetMaskFlags() & gdal.GMF_PER_DATASET,
            "Native export lost datatype or validity mask")
    value_hash, mask_hash = hashlib.sha256(), hashlib.sha256()
    summary = {key: 0 for key in ("valid_cells", "invalid_cells", "valid_below_zero_cells",
                                "valid_zero_cells", "valid_above_zero_cells")}
    summary.update(minimum=None, maximum=None, valid_pixel_bounds_inclusive=None)
    for y in range(0, dataset.RasterYSize, 128):
        height = min(128, dataset.RasterYSize - y)
        window = (0, y, dataset.RasterXSize, height)
        values = source_band.ReadAsArray(*window)
        mask = source_band.GetMaskBand().ReadAsArray(*window)
        value_bytes = values.astype("<f4", copy=False).tobytes()
        require(value_bytes == export_band.ReadAsArray(*window).astype("<f4", copy=False).tobytes(),
                "Native export changed cell values")
        require(np.array_equal(mask, export_band.GetMaskBand().ReadAsArray(*window)),
                "Native export changed validity mask")
        value_hash.update(value_bytes)
        mask_hash.update(mask.tobytes())
        part = summarize_cells(values, mask)
        for key in ("valid_cells", "invalid_cells", "valid_below_zero_cells", "valid_zero_cells", "valid_above_zero_cells"):
            summary[key] += part[key]
        if part["valid_cells"]:
            summary["minimum"] = part["minimum"] if summary["minimum"] is None else min(summary["minimum"], part["minimum"])
            summary["maximum"] = part["maximum"] if summary["maximum"] is None else max(summary["maximum"], part["maximum"])
            x0, y0, x1, y1 = part["valid_pixel_bounds_inclusive"]
            bounds = [x0, y + y0, x1, y + y1]
            old = summary["valid_pixel_bounds_inclusive"]
            summary["valid_pixel_bounds_inclusive"] = bounds if old is None else [
                min(old[0], bounds[0]), min(old[1], bounds[1]), max(old[2], bounds[2]), max(old[3], bounds[3])]
    require(summary["valid_cells"] > 0, "Terrain contains no valid cells")
    require(set(exported.GetFileList()) == {str(destination)}, "Unexpected external GeoTIFF sidecars")
    exported = None
    return {"size": [dataset.RasterXSize, dataset.RasterYSize], "geotransform": dataset.GetGeoTransform(),
            "horizontal_crs_wkt": dataset.GetProjection(), "datatype": "Float32",
            "source_nodata_value": source_band.GetNoDataValue(), "source_mask_flags": source_band.GetMaskFlags(),
            "mask_encoding": "internal binary validity mask, read as uint8 0/255; not scientific coverage",
            "cells_sha256_le_float32_row_major": value_hash.hexdigest(),
            "validity_sha256_uint8_row_major": mask_hash.hexdigest(), "statistics": summary,
            "export_verification": "all cell bytes and validity pixels equal; grid and CRS equal",
            "geotiff": {"path": Path(destination).name, **fingerprint(destination)}}


def inspect_terrain(cache, output, catalog):
    try:
        from osgeo import gdal, osr
    except ImportError as error:
        raise ImportError("inspect-terrain needs Python GDAL bindings with OpenFileGDB raster support; use the GDAL-enabled Python interpreter") from error
    gdal.UseExceptions()
    driver = gdal.GetDriverByName("OpenFileGDB")
    require(driver is not None and driver.GetMetadataItem("DCAP_RASTER") == "YES",
            "GDAL OpenFileGDB raster support is required (GDAL 3.7+)")
    output = output.resolve()
    require(not output.exists(), "Terrain inspection output exists; choose a fresh directory")
    for forbidden in (ROOT / "docs", ROOT / "public", ROOT / "src"):
        require(not output.is_relative_to(forbidden), "Terrain evidence must stay outside application/static assets")
    inventory_path = DATA / "ICE6G-ARCHIVE-INVENTORY.json"
    inventory = read_json(inventory_path)
    archive_path = cache / Path(inventory["archive"]["repository_path"]).name
    print("Verifying original ICE6G archive", flush=True)
    verify_file(archive_path, inventory["archive"])
    output.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(prefix=".terrain-staging-", dir=output.parent) as staging:
        staging = Path(staging)
        package = staging / "package"
        package.mkdir()
        extracted = staging / "original-members"
        with zipfile.ZipFile(archive_path) as archive:
            names = archive.namelist()
            require(len(names) == len(set(names)) == len(inventory["members"])
                    and set(names) == {m["path"] for m in inventory["members"]}, "Archive inventory mismatch")
            print("Extracting and verifying pinned FileGDB components", flush=True)
            for pin in inventory["members"]:
                dest = safe_path(extracted, pin["path"].rstrip("/"))
                if archive.getinfo(pin["path"]).is_dir():
                    dest.mkdir(parents=True, exist_ok=True)
                    continue
                dest.parent.mkdir(parents=True, exist_ok=True)
                with archive.open(pin["path"]) as source, dest.open("xb") as target:
                    shutil.copyfileobj(source, target)
                verify_file(dest, pin)
        report = {"record_kind": "native_terrain_evidence", "production_eligible": False,
                  "archive": inventory["archive"], "archive_inventory": fingerprint(inventory_path),
                  "source_doi": "10.1594/PANGAEA.947536", "license": "CC-BY-4.0",
                  "attribution": "Godbout, Brouard and Roy (2022 dataset; 2023 methods)",
                  "vertical_interpretation": "Source epoch-relative paleotopography per SOURCE-SELECTION.md; no additional sea-level offset applied. Raster CRS does not supply a vertical datum.",
                  "source_selection": fingerprint(DATA / "SOURCE-SELECTION.json"),
                  "processing": {"gdal": gdal.VersionInfo("RELEASE_NAME"), "numpy": np.__version__,
                                 "python": sys.version, "command_argv": [sys.executable, *sys.argv],
                                 "files": {p.relative_to(ROOT).as_posix(): fingerprint(p) for p in
                                           [Path(__file__), ROOT / "scripts/paleomasks/contract.py",
                                            ROOT / "scripts/paleomasks/pipeline.py", ROOT / "scripts/generate_reconstruction_masks.py"]},
                                 "resampling": "none", "sea_level_offset": "none",
                                 "classification": "none", "gdal_open_options": ["NODATA_OR_MASK=MASK"]},
                  "layers": [], "limitations": [
                      "Native validity is data availability, not a supported marine or ice presence/absence domain.",
                      "Negative elevation is not evidence of ocean connectivity; inland and subglacial basins remain unresolved.",
                      "No modern marine baseline, ice grounding classification or GIA/empirical-margin reconciliation is established."]}
        entries = {r["name"]: r for r in inventory["catalog_inspection"]["rasters"]}
        for age, slug in TRIALS:
            name = f"ICE6G_paleosi_{age:05d}"
            print(f"Decoding and verifying native export: {name}", flush=True)
            connection = f'OpenFileGDB:"{extracted / "ICE6G_Paleo_subice.gdb"}":{name}'
            ds = gdal.OpenEx(connection, gdal.OF_RASTER, open_options=["NODATA_OR_MASK=MASK"])
            validate_native_grid(ds, entries[name], osr)
            record = export_native(ds, package / f"{name}.tif", gdal)
            ds = None
            record.update(name=name, era_slug=slug, source_calendar_bp=age,
                          target_calendar_bp=catalog[slug]["target_calendar_bp"],
                          source_minus_target_years=age - catalog[slug]["target_calendar_bp"],
                          match_policy="nearest_slice_approximation", interpolation="none")
            report["layers"].append(record)
        (package / "terrain-inspection.json").write_text(json.dumps(report, indent=2, allow_nan=False) + "\n")
        require(not output.exists(), "Concurrent terrain output collision")
        package.rename(output)
    print(f"Wrote {output}: 3 verified native terrain exports, 0 production masks", flush=True)
    return report
