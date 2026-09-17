"""Operator-directed surface composition on an aligned native/subcell grid.

This chooses visible surface classes, not the physical substrate under floating
ice. Apply before final-grid area reduction; do not merge quantized alpha masks.
"""
import numpy as np

from .contract import require


def apply_zero_rounding_policy(polygons, hits, width=4096, height=2048):
    """Resolve missed polygons only when geometric coverage itself rounds to zero.

    Sampling failure alone is not permission to delete visible geometry. Retain
    the original inputs and report the discarded derived polygon instances.
    """
    from .geometry import analyze_sampling_losses
    losses = analyze_sampling_losses(polygons, hits, width, height)
    unresolved = [loss for loss in losses if loss["outcome"] != "below_encoding_resolution"]
    require(not unresolved, "Missed polygons do not all round to zero; refine rasterization before export")
    return [{**loss, "disposition": "discarded_from_overlay", "rule": "floor(255*f+0.5) == 0 in every covered pixel"}
            for loss in losses]


def compose_surface(grounded, floating, empirical_ice, marine, marine_known):
    """Combine supported ice evidence and give it priority over modeled surface.

    Empirical margin polygons need not distinguish grounded from floating ice
    for the unified overlay. Positive ice evidence establishes a visible ice
    surface even where terrain is unavailable. Transparent pixels elsewhere do
    not establish absence. Inputs and underlying marine classification remain
    unchanged; inland-water and biome rendering are outside this operation.
    """
    arrays = (grounded, floating, empirical_ice, marine, marine_known)
    require(all(isinstance(a, np.ndarray) and a.dtype == bool and a.ndim == 2
                and a.shape == marine.shape for a in arrays),
            "Surface inputs must be aligned 2D boolean native/subcell grids")
    ice = grounded | floating | empirical_ice
    ocean = marine & marine_known & ~ice
    land = ~marine & marine_known & ~ice
    return {"ice": ice, "ocean": ocean, "land": land,
            "known_surface": marine_known | ice,
            "ice_over_modeled_marine": ice & marine & marine_known}
