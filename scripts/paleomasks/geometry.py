"""Numerical primitives for evidence diagnostics, not scientific classification.

Rasterization uses regular subcell centres, even/odd polygon interiors (holes),
union across polygons, periodic longitude, and box reduction. Native vertices
are retained and projected edges are densified. No smoothing or artistic repair.
"""
from __future__ import annotations

import math
import numpy as np
from pyproj import CRS, Transformer

from .contract import ContractError, require


def point_pixel(lon, lat, width=4096, height=2048):
    require(math.isfinite(lon) and math.isfinite(lat) and -90 <= lat <= 90,
            "Invalid geographic point")
    return (int(((lon + 180) % 360) * width / 360),
            min(height - 1, int((90 - lat) * height / 180)))


def filter_category(properties):
    """Legacy SYMB is never silently ignored if encountered; NADI has no SYMB."""
    if "SYMB" not in properties:
        return True
    require(properties["SYMB"] in ("ICE", "LAKE"), f"Unknown SYMB category: {properties['SYMB']!r}")
    return properties["SYMB"] == "ICE"


def close_diagnostic_ring(coordinates, allow=False):
    """Explicit diagnostic repair only: retain all vertices and append the first."""
    ring = np.asarray(coordinates, dtype=np.float64)
    require(ring.ndim == 2 and ring.shape[1] == 2 and len(ring) >= 3
            and np.isfinite(ring).all(), "Invalid native ring")
    if np.array_equal(ring[0], ring[-1]):
        return ring, None
    require(allow, "Unclosed source ring; inspect input or explicitly use --close-open-rings for diagnostics only")
    log = {"operation": "append_first_vertex", "original_start": ring[0].tolist(),
           "original_end": ring[-1].tolist(), "closing_segment_native_units": float(np.linalg.norm(ring[-1] - ring[0])),
           "scope": "diagnostic only; scientific interpretation not validated"}
    return np.vstack([ring, ring[0]]), log


def unwrap_ring(coordinates, pole=None):
    ring = np.asarray(coordinates, dtype=np.float64)
    require(ring.ndim == 2 and ring.shape[1] == 2 and len(ring) >= 4
            and np.isfinite(ring).all() and np.array_equal(ring[0], ring[-1]), "Invalid/unclosed ring")
    require(np.all(np.abs(ring[:, 1]) <= 90), "Latitude outside geographic extent")
    lon = np.rad2deg(np.unwrap(np.deg2rad(ring[:, 0])))
    lat = ring[:, 1]
    winding = int(round((lon[-1] - lon[0]) / 360))
    if winding:
        require(abs(winding) == 1 and pole in (-90, 90),
                "Pole-enclosing ring requires explicit, evidenced pole inclusion")
        lon = np.r_[lon, lon[-1], lon[0], lon[0]]
        lat = np.r_[lat, pole, pole, lat[0]]
    result = np.column_stack([lon, lat])
    result[:, 0] -= 360 * math.floor((float(lon.min()) + 180) / 360)
    # Unwrapping can leave roundoff at the repeated endpoint across the seam.
    result[-1] = result[0]
    return result


def contains_native(ring, point):
    a, b = np.asarray(ring[:-1]), np.asarray(ring[1:])
    x, y = point
    crossing = (a[:, 1] > y) != (b[:, 1] > y)
    a, b = a[crossing], b[crossing]
    if not len(a):
        return False
    xs = a[:, 0] + (y - a[:, 1]) * (b[:, 0] - a[:, 0]) / (b[:, 1] - a[:, 1])
    return bool(np.count_nonzero(xs > x) % 2)


def project_ring(coordinates, crs, tolerance_degrees=360 / 4096 / 32):
    """Adaptive native-segment subdivision; no removal of original vertices.

    Geographic input segments are treated as straight lon/lat edges with the
    short seam crossing. Projected edges are linear in their original CRS.
    """
    native = CRS.from_user_input(crs)
    transformer = Transformer.from_crs(native, "EPSG:4326", always_xy=True)
    coords = np.asarray(coordinates, dtype=np.float64)
    require(np.isfinite(coords).all() and np.array_equal(coords[0], coords[-1]), "Invalid native ring")
    if native.equals(CRS.from_epsg(4326), ignore_axis_order=True):
        # A geographic winding cannot disambiguate the pole without source evidence.
        return unwrap_ring(coords)
    transformed = np.column_stack(transformer.transform(coords[:, 0], coords[:, 1], errcheck=True))

    def subdivide(a, b, pa, pb, depth=0):
        mid = (a + b) / 2
        pm = np.asarray(transformer.transform(*mid, errcheck=True))
        end_lon = pa[0] + ((pb[0] - pa[0] + 180) % 360 - 180)
        mid_lon = pa[0] + ((pm[0] - pa[0] + 180) % 360 - 180)
        error = max(abs(mid_lon - (pa[0] + end_lon) / 2), abs(pm[1] - (pa[1] + pb[1]) / 2))
        if error <= tolerance_degrees:
            return [pa]
        require(depth < 20, "Projection subdivision did not converge near a singularity")
        return subdivide(a, mid, pa, pm, depth + 1) + subdivide(mid, b, pm, pb, depth + 1)

    out = []
    for a, b, pa, pb in zip(coords[:-1], coords[1:], transformed[:-1], transformed[1:]):
        out.extend(subdivide(a, b, pa, pb))
    out.append(transformed[-1])
    pole = None
    for latitude in (90, -90):
        inverse = Transformer.from_crs("EPSG:4326", native, always_xy=True)
        p = inverse.transform(0, latitude)
        if all(math.isfinite(x) for x in p) and contains_native(coords, p):
            require(pole is None, "Ambiguous ring contains both poles")
            pole = latitude
    return unwrap_ring(out, pole=pole)


def rasterize(polygons, width=4096, height=2048, samples=4, window=None):
    """List of polygons, each a list of unwrapped exterior/interior rings.

    Holes are subtracted within each polygon before union, so another polygon's
    island inside a hole survives. Longitude is periodic; latitude never wraps.
    Returns coverage plus per-polygon subpixel hits for quantization diagnostics.
    """
    require(type(samples) is int and 1 <= samples <= (256 if window is not None else 8),
            "Sampling factor must be 1..8 globally or 1..256 for a local window")
    left, top, out_width, out_height = window if window is not None else (0, 0, width, height)
    require(all(type(v) is int for v in (left, top, out_width, out_height))
            and 0 <= left < left + out_width <= width and 0 <= top < top + out_height <= height,
            "Invalid raster window")
    require(window is None or out_width * out_height <= 64, "Refinement window must be at most 64 pixels")
    w, h = width * samples, height * samples
    x0, y0 = left * samples, top * samples
    canvas = np.zeros((out_height * samples, out_width * samples), dtype=bool)
    hits = []
    for polygon in polygons:
        edges = []
        ring_ids = []
        # Keep hole coordinates in the same longitude branch as their exterior.
        anchor = float(np.mean(polygon[0][:, 0]))
        for ring_index, ring in enumerate(polygon):
            p = np.array(ring, copy=True)
            p[:, 0] += 360 * round((anchor - float(p[:, 0].mean())) / 360)
            p[:, 0] = (p[:, 0] + 180) * w / 360
            p[:, 1] = (90 - p[:, 1]) * h / 180
            edges.append(np.stack([p[:-1], p[1:]], axis=1))
            ring_ids.extend([ring_index] * (len(p) - 1))
        e = np.concatenate(edges)
        a, b = e[:, 0], e[:, 1]
        active = a[:, 1] != b[:, 1]
        a, b = a[active], b[active]
        ring_ids = np.asarray(ring_ids)[active]
        if not len(a):
            hits.append(0)
            continue
        ymin, ymax = np.minimum(a[:, 1], b[:, 1]), np.maximum(a[:, 1], b[:, 1])
        row_start = max(y0, math.ceil(float(ymin.min()) - .5))
        row_end = min(y0 + out_height * samples, math.ceil(float(ymax.max()) - .5))
        count = 0
        for r in range(row_start, row_end):
            y = r + .5
            select = (ymin <= y) & (y < ymax)
            aa, bb = a[select], b[select]
            intersections = aa[:, 0] + (y - aa[:, 1]) * (bb[:, 0] - aa[:, 0]) / (bb[:, 1] - aa[:, 1])
            ids = ring_ids[select]
            interior = np.zeros(out_width * samples, dtype=bool)
            # Apply periodicity BEFORE ring parity: polar shells and their holes
            # can start at different longitudes and span different unwrapped worlds.
            for ring_index in np.unique(ids):
                xs = np.sort(intersections[ids == ring_index])
                require(len(xs) % 2 == 0, "Odd edge crossings: invalid polygon topology")
                for lo, hi in zip(xs[::2], xs[1::2]):
                    start, end = math.ceil(float(lo) - .5), math.ceil(float(hi) - .5)
                    require(end - start <= w, "Polygon spans more than one world")
                    for shift in range(math.floor(start / w), math.floor((end - 1) / w) + 1):
                        lo_col = max(x0, start - shift * w)
                        hi_col = min(x0 + out_width * samples, end - shift * w)
                        if lo_col < hi_col:
                            interior[lo_col - x0:hi_col - x0] ^= True
            count += int(np.count_nonzero(interior))
            canvas[r - y0] |= interior
        hits.append(count)
    counts = canvas.reshape(out_height, samples, out_width, samples).sum(axis=(1, 3), dtype=np.uint32)
    alpha = np.floor(255 * counts.astype(np.float64) / samples ** 2 + .5).astype(np.uint8)
    return alpha, hits


def refine_sampling_misses(polygons, alpha, hits, width, height):
    """Recompute affected pixels as a polygon union with denser local sampling.

    Include all polygons and holes, not just the missed feature, to retain
    overlaps correctly. Never add alpha values or impose a visibility floor.
    """
    losses = analyze_sampling_losses(polygons, hits, width, height)
    cells = sorted({(p["row"], p["column"]) for loss in losses if loss["outcome"] == "sampling_miss"
                    for p in loss["pixel_coverage"]})
    report = []
    hits = list(hits)
    for row, column in cells:
        targets = {loss["polygon_index"] for loss in losses if loss["outcome"] == "sampling_miss"
                   and any(p["row"] == row and p["column"] == column and p["quantized_alpha"] > 0
                           for p in loss["pixel_coverage"])}
        for samples in (32, 64, 128, 256):
            local, local_hits = rasterize(polygons, width, height, samples, window=(column, row, 1, 1))
            if all(local_hits[index] > 0 for index in targets):
                break
        require(all(local_hits[index] > 0 for index in targets), "Local raster refinement still misses visible geometry")
        report.append({"row": row, "column": column, "samples_per_axis": samples,
                       "previous_alpha": int(alpha[row, column]), "refined_alpha": int(local[0, 0]),
                       "missed_polygon_indices": sorted(targets)})
        alpha[row, column] = local[0, 0]
        # Only presence is consumed by the subsequent loss audit; counts at
        # different sampling resolutions are not added or compared as areas.
        hits = [max(old, int(new > 0)) for old, new in zip(hits, local_hits)]
    return alpha, hits, report


def _clipped_ring_area(ring, column, row):
    """Image-plane ring area inside one pixel, using rectangle clipping.

    Translating before clipping/shoelace avoids cancellation for tiny features
    far from the coordinate origin. Input rings must be simple; this calculation
    does not validate or repair their topology.
    """
    points = ring[:-1] - (column, row)
    for axis, boundary, direction in ((0, 0, 1), (0, 1, -1), (1, 0, 1), (1, 1, -1)):
        if not len(points):
            return 0.0
        clipped = []
        previous = points[-1]
        previous_inside = direction * (previous[axis] - boundary) >= 0
        for current in points:
            current_inside = direction * (current[axis] - boundary) >= 0
            if current_inside != previous_inside:
                fraction = (boundary - previous[axis]) / (current[axis] - previous[axis])
                clipped.append(previous + fraction * (current - previous))
            if current_inside:
                clipped.append(current)
            previous, previous_inside = current, current_inside
        points = np.asarray(clipped)
    if len(points) < 3:
        return 0.0
    following = np.roll(points, -1, axis=0)
    return abs(float(np.sum(points[:, 0] * following[:, 1] - following[:, 0] * points[:, 1]))) / 2


def polygon_pixel_coverage(polygon, width=4096, height=2048, max_cells=4096):
    """Analytic diagnostic for ONE small, unwrapped polygon, with holes.

    Returns {(row, column): fraction}, before 8-bit quantization. Periodic pieces
    are accumulated in the same pixel. No sampling, dilation or alpha floor is
    applied. This is not a general polygon-union rasterizer or topology validator.
    Work is bounded so a sampling failure on a large/invalid polygon cannot turn
    a loss report into an unbounded per-cell clipping job.
    """
    require(type(width) is int and type(height) is int and width > 0 and height > 0,
            "Invalid diagnostic grid")
    require(len(polygon) > 0, "Missing polygon exterior")
    rings = []
    anchor = float(np.mean(polygon[0][:, 0]))
    for ring in polygon:
        p = np.array(ring, dtype=np.float64, copy=True)
        require(p.ndim == 2 and p.shape[1] == 2 and len(p) >= 4
                and np.isfinite(p).all() and np.array_equal(p[0], p[-1]), "Invalid/unclosed ring")
        p[:, 0] += 360 * round((anchor - float(p[:, 0].mean())) / 360)
        p[:, 0] = (p[:, 0] + 180) * width / 360
        p[:, 1] = (90 - p[:, 1]) * height / 180
        rings.append(p)
    exterior = rings[0]
    left, top = np.floor(exterior.min(axis=0)).astype(int)
    right, bottom = np.ceil(exterior.max(axis=0)).astype(int)
    top, bottom = max(0, top), min(height, bottom)
    require(exterior[:, 0].max() - exterior[:, 0].min() <= width + 1e-9,
            "Polygon spans more than one world")
    require((right - left) * max(0, bottom - top) <= max_cells,
            "Analytic diagnostic cell limit exceeded")
    fractions = {}
    for row in range(top, bottom):
        for column in range(left, right):
            fraction = _clipped_ring_area(exterior, column, row)
            for hole in rings[1:]:
                # Polar holes can use a different unwrapped longitude window.
                for shift in (-width, 0, width):
                    fraction -= _clipped_ring_area(hole, column + shift, row)
            require(-1e-9 <= fraction <= 1 + 1e-9,
                    "Invalid clipped area; inspect polygon/hole topology")
            fraction = min(1.0, max(0.0, fraction))
            if fraction:
                key = (row, column % width)
                fractions[key] = fractions.get(key, 0.0) + fraction
    require(all(f <= 1 + 1e-9 for f in fractions.values()), "Overlapping periodic polygon pieces")
    return {key: min(1.0, value) for key, value in fractions.items()}


def analyze_sampling_losses(polygons, hits, width=4096, height=2048):
    """Distinguish sampling misses from encoding limits without changing pixels."""
    require(len(polygons) == len(hits), "Polygon/hit count mismatch")
    losses = []
    for index, (polygon, count) in enumerate(zip(polygons, hits)):
        if count:
            continue
        entry = {"polygon_index": index}
        try:
            fractions = polygon_pixel_coverage(polygon, width, height)
        except ContractError as error:
            entry.update(outcome="unresolved", reason=str(error))
        else:
            pixels = [{"row": row, "column": column, "fraction": fraction,
                       "quantized_alpha": math.floor(255 * fraction + .5)}
                      for (row, column), fraction in sorted(fractions.items())]
            visible = sum(p["quantized_alpha"] > 0 for p in pixels)
            entry.update(area_pixel_units=sum(fractions.values()),
                         max_pixel_fraction=max(fractions.values(), default=0),
                         quantized_nonzero_pixels=visible, pixel_coverage=pixels,
                         outcome="sampling_miss" if visible else
                         "below_encoding_resolution" if pixels else "zero_area_unresolved")
        losses.append(entry)
    return losses


def coverage_rgba(alpha, coverage, rgb, confirmed_empty=False):
    """Encoding primitive; callers must establish scientific domains separately."""
    require(alpha.dtype == coverage.dtype == np.uint8 and alpha.shape == coverage.shape,
            "Alpha/coverage must be aligned uint8 grids")
    require(np.any(coverage), "Empty domain is unavailable, not confirmed empty")
    require(np.all(alpha <= coverage), "Presence extends outside supported coverage")
    require(bool(np.any(alpha)) != confirmed_empty, "Presence state disagrees with pixels")
    rgba = np.zeros((*alpha.shape, 4), dtype=np.uint8)
    rgba[alpha > 0, :3] = rgb
    rgba[:, :, 3] = alpha
    return rgba


def marine_changes(modern, target, modern_known, target_known, excluded, conflicts):
    """Compare already-classified native-grid marine states; never threshold bedrock.

    Evidence-backed exclusions must include inland waters, ambiguous subglacial
    basins, disconnected water and unresolved seams. This is not a terrain model.
    """
    arrays = (modern, target, modern_known, target_known, excluded, conflicts)
    require(all(a.dtype == bool and a.shape == modern.shape for a in arrays),
            "Marine states/domains must be aligned boolean classifications")
    known = modern_known & target_known & ~excluded & ~conflicts
    return modern & ~target & known, ~modern & target & known, known
