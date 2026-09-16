#!/usr/bin/env python3
"""
Prehistoric Earth Texture Generator for Earth Browser
=====================================================

Generates realistic 4096x2048 equirectangular Earth textures for historical & prehistoric eras:
1. Bathymetry-based coastline expansions (Doggerland, Sundaland, Beringia, Sahul, dry Persian Gulf).
2. Paleo-ice sheets rasterized from empirical geochronological reconstructions:
   - North America: Laurentide and Cordilleran Ice Sheets (Dyke et al., 2004).
   - Eurasia: British-Irish, Scandinavian, and Barents-Kara Ice Sheets (DATED-1, Hughes et al., 2015).
3. Paleolakes and pluvial climate features (Baltic Ice Lake, Lake Agassiz, Lake Mega-Chad, Green Sahara).
4. Submerged coastal lowlands for high sea-level interglacial periods (123,000 BCE Eemian).

Usage:
------
    # 1. Install dependencies in a virtual environment:
    python3 -m venv .venv
    source .venv/bin/activate
    pip install -r data-sources/textures/requirements.txt

    # 2. Run generation for all prehistoric eras:
    python3 scripts/generate_prehistoric_textures.py

    # 3. Or generate a specific era:
    python3 scripts/generate_prehistoric_textures.py --era world-bc10000
"""

import argparse
import math
import os
import sys
import urllib.request
import numpy as np
from PIL import Image, ImageDraw, ImageFilter
import scipy.ndimage as ndi
import shapefile
from pyproj import CRS, Transformer

# Project root resolution
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)
DATA_DIR = os.path.join(PROJECT_ROOT, "data-sources", "textures")
ICE_DIR = os.path.join(DATA_DIR, "ice-sheets")
NA_ICE_DIR = os.path.join(ICE_DIR, "north-america")
EU_ICE_DIR = os.path.join(ICE_DIR, "eurasia")
TEXTURE_OUT_DIR = os.path.join(PROJECT_ROOT, "src", "earthTextures")
BASE_TEXTURE_PATH = os.path.join(TEXTURE_OUT_DIR, "earth-blue-marble.jpg")
ELEV_CACHE_PATH = os.path.join(DATA_DIR, "elevation_4096x2048.npy")

ETOPO_URL = (
    "https://www.ngdc.noaa.gov/mgg/global/relief/ETOPO2022/data/60s/60s_bed_elev_gtif/"
    "ETOPO_2022_v1_60s_N90W180_bed.tif"
)

WIDTH = 4096
HEIGHT = 2048

def ensure_elevation_grid(width=WIDTH, height=HEIGHT):
    """
    Load downsampled elevation grid. If not present in cache, download NOAA ETOPO 2022
    and resample to target equirectangular resolution.
    """
    if os.path.exists(ELEV_CACHE_PATH):
        print(f"Loading cached elevation grid from {ELEV_CACHE_PATH}...")
        return np.load(ELEV_CACHE_PATH)
        
    print(f"\nCached elevation grid not found at {ELEV_CACHE_PATH}.")
    os.makedirs(DATA_DIR, exist_ok=True)
    
    tmp_tif = os.path.join(DATA_DIR, "etopo_bed_60s.tif")
    if not os.path.exists(tmp_tif):
        print(f"Downloading NOAA ETOPO 2022 60-arcsecond bedrock GeoTIFF (~450MB)...")
        print(f"URL: {ETOPO_URL}")
        urllib.request.urlretrieve(ETOPO_URL, tmp_tif)
        print("Download complete.")
        
    print(f"Resampling ETOPO grid to {width}x{height} equirectangular...")
    Image.MAX_IMAGE_PIXELS = None
    im = Image.open(tmp_tif)
    im_resized = im.resize((width, height), Image.Resampling.BILINEAR)
    elev_arr = np.array(im_resized, dtype=np.float32)
    
    np.save(ELEV_CACHE_PATH, elev_arr)
    print(f"Saved downsampled elevation grid to {ELEV_CACHE_PATH} ({elev_arr.nbytes / (1024*1024):.1f} MB)")
    
    # Remove large raw GeoTIFF to conserve disk space
    if os.path.exists(tmp_tif):
        os.remove(tmp_tif)
        
    return elev_arr

def latlng_to_pixel(lng, lat, width=WIDTH, height=HEIGHT):
    x = (lng + 180.0) / 360.0 * width
    y = (90.0 - lat) / 180.0 * height
    return x, y

def rasterize_shapefile_wgs84(shp_path, width=WIDTH, height=HEIGHT):
    """Rasterize a WGS84 shapefile directly to an 8-bit mask (0-255)."""
    mask = Image.new("L", (width, height), 0)
    draw = ImageDraw.Draw(mask)
    
    if not os.path.exists(shp_path):
        print(f"Warning: shapefile not found at {shp_path}")
        return np.array(mask)
        
    sf = shapefile.Reader(shp_path)
    for s in sf.shapes():
        pts = s.points
        parts = list(s.parts) + [len(pts)]
        for i in range(len(parts) - 1):
            poly_pts = pts[parts[i]:parts[i+1]]
            if len(poly_pts) < 3:
                continue
            pix_pts = [latlng_to_pixel(p[0], p[1], width, height) for p in poly_pts]
            draw.polygon(pix_pts, fill=255)
    return np.array(mask)

def rasterize_shapefile_projected(shp_path, prj_path, width=WIDTH, height=HEIGHT):
    """Rasterize a projected shapefile (e.g. Lambert Azimuthal) to WGS84 equirectangular."""
    mask = Image.new("L", (width, height), 0)
    draw = ImageDraw.Draw(mask)
    
    if not os.path.exists(shp_path) or not os.path.exists(prj_path):
        print(f"Warning: {shp_path} or {prj_path} not found")
        return np.array(mask)
        
    with open(prj_path, "r") as f:
        wkt = f.read()
    crs_src = CRS.from_wkt(wkt)
    crs_dst = CRS.from_epsg(4326)
    transformer = Transformer.from_crs(crs_src, crs_dst, always_xy=True)
    
    sf = shapefile.Reader(shp_path)
    for s in sf.shapes():
        pts = s.points
        parts = list(s.parts) + [len(pts)]
        for i in range(len(parts) - 1):
            poly_pts = pts[parts[i]:parts[i+1]]
            if len(poly_pts) < 3:
                continue
            pix_pts = []
            for p in poly_pts:
                lng, lat = transformer.transform(p[0], p[1])
                if -180 <= lng <= 180 and -90 <= lat <= 90:
                    pix_pts.append(latlng_to_pixel(lng, lat, width, height))
            if len(pix_pts) >= 3:
                draw.polygon(pix_pts, fill=255)
    return np.array(mask)

def compute_shelf_color_diffusion(base_img, modern_land_mask, exposed_shelf_mask, elev_grid):
    """
    Synthesize realistic land color for exposed continental shelves by diffusing color
    from the nearest adjacent modern landmass, modulated by latitude biome tendencies
    and shaded bathymetric relief.
    """
    h, w, c = base_img.shape
    result = base_img.copy().astype(np.float32)
    
    # 1. Nearest-neighbor color propagation from modern land
    dist, indices = ndi.distance_transform_edt(~modern_land_mask, return_indices=True)
    diffused_color = base_img[indices[0], indices[1]].astype(np.float32)
    
    # 2. Latitude and regional biome adjustments
    lat_arr = np.linspace(90, -90, h)[:, None]
    lat_grid = np.repeat(lat_arr, w, axis=1)
    
    # Northern periglacial / tundra biome (> 52°N): drier steppe/tundra tint
    tundra_mask = (lat_grid > 52) & exposed_shelf_mask
    tundra_tint = np.array([125.0, 130.0, 105.0])
    diffused_color[tundra_mask] = 0.55 * diffused_color[tundra_mask] + 0.45 * tundra_tint
    
    # Mid-latitude temperate grassland / plains (28°N - 52°N): rich alluvial/steppe tint
    temperate_mask = (lat_grid >= 28) & (lat_grid <= 52) & exposed_shelf_mask
    temperate_tint = np.array([115.0, 125.0, 85.0])
    diffused_color[temperate_mask] = 0.65 * diffused_color[temperate_mask] + 0.35 * temperate_tint
    
    # Tropical savanna & lowland rainforest (-15°S to 25°N): lush tropical green
    tropical_mask = (lat_grid >= -15) & (lat_grid <= 25) & exposed_shelf_mask
    tropical_tint = np.array([65.0, 95.0, 48.0])
    diffused_color[tropical_mask] = 0.60 * diffused_color[tropical_mask] + 0.40 * tropical_tint
    
    # 3. Micro-relief shading using bathymetry gradients
    dy, dx = np.gradient(elev_grid)
    sun_azimuth = math.radians(315)
    sun_elev = math.radians(45)
    slope = np.arctan(np.sqrt(dx**2 + dy**2) * 0.005)
    aspect = np.arctan2(dy, -dx)
    shaded_relief = np.sin(sun_elev) * np.cos(slope) + np.cos(sun_elev) * np.sin(slope) * np.cos(sun_azimuth - aspect)
    shaded_relief = np.clip(shaded_relief, 0.75, 1.25)[:, :, None]
    
    diffused_color = np.clip(diffused_color * shaded_relief, 0, 255)
    result[exposed_shelf_mask] = diffused_color[exposed_shelf_mask]
    
    return np.clip(result, 0, 255).astype(np.uint8)

def apply_flooded_lowlands(base_img, flooded_mask):
    """Submerge modern land pixels that are flooded by elevated sea levels."""
    result = base_img.copy().astype(np.float32)
    coastal_water_tint = np.array([28.0, 72.0, 110.0])
    result[flooded_mask] = 0.75 * coastal_water_tint + 0.25 * result[flooded_mask]
    return np.clip(result, 0, 255).astype(np.uint8)

def smoothstep(edge0, edge1, x):
    """Hermite smoothstep interpolation between edge0 and edge1."""
    t = np.clip((x - edge0) / (edge1 - edge0), 0.0, 1.0)
    return t * t * (3.0 - 2.0 * t)

def compute_polar_ocean_ice(era_slug, sea_level_offset, elev_grid, continental_mask=None, width=WIDTH, height=HEIGHT):
    """
    Compute era-accurate polar sea ice, marine ice shelves, and high-latitude pack ice.
    Covers the Arctic Ocean basin, subpolar marine extensions, and Antarctic polar sea ice,
    connecting smoothly with continental ice sheets.
    """
    lat_arr = np.linspace(90, -90, height)[:, None]
    lng_arr = np.linspace(-180, 180, width)[None, :]
    lat_grid = np.repeat(lat_arr, width, axis=1)
    lng_grid = np.repeat(lng_arr, height, axis=0)
    
    water_or_shelf = elev_grid < 0

    if era_slug == "world-bc10000":
        # Younger Dryas / Terminal Pleistocene (sea level -55m)
        # High Arctic polar pack ice basin
        arctic_cap = lat_grid >= 71.5
        
        # Subpolar marine current extensions
        labrador_dip = 72.0 - 18.0 * np.exp(-((lng_grid + 60.0) / 16.0)**2) # Labrador/Baffin down to ~54°N
        greenland_dip = 72.0 - 12.0 * np.exp(-((lng_grid + 30.0) / 14.0)**2) # East Greenland down to ~60°N
        bering_dip = 72.0 - 12.0 * np.exp(-((np.abs(lng_grid) - 175.0) / 15.0)**2) # Bering Sea down to ~60°N
        okhotsk_dip = 72.0 - 16.0 * np.exp(-((lng_grid - 148.0) / 10.0)**2) # Sea of Okhotsk down to ~56°N
        
        marine_ext = water_or_shelf & (
            (lat_grid >= labrador_dip) |
            (lat_grid >= greenland_dip) |
            (lat_grid >= bering_dip) |
            (lat_grid >= okhotsk_dip)
        )
        
        # Antarctic circum-polar sea ice & expanded ice shelves (Weddell Sea to -60°S, Ross Sea to -60.5°S)
        south_lim = -64.0 + 4.0 * np.exp(-((lng_grid + 40.0) / 25.0)**2) + 3.5 * np.exp(-((np.abs(lng_grid) - 175.0) / 20.0)**2)
        antarctic = lat_grid <= south_lim
        shelf_dist = 35.0
        shelf_lat = 45.0

    elif era_slug == "world-bc8000":
        # Early Holocene (sea level -25m)
        arctic_cap = lat_grid >= 74.0
        baffin_dip = 74.0 - 10.0 * np.exp(-((lng_grid + 60.0) / 16.0)**2)
        greenland_dip = 74.0 - 7.0 * np.exp(-((lng_grid + 30.0) / 14.0)**2)
        bering_dip = 74.0 - 10.0 * np.exp(-((np.abs(lng_grid) - 175.0) / 15.0)**2)
        
        marine_ext = water_or_shelf & (
            (lat_grid >= baffin_dip) |
            (lat_grid >= greenland_dip) |
            (lat_grid >= bering_dip)
        )
        
        south_lim = -66.0 + 2.5 * np.exp(-((lng_grid + 40.0) / 25.0)**2) + 2.0 * np.exp(-((np.abs(lng_grid) - 175.0) / 20.0)**2)
        antarctic = lat_grid <= south_lim
        shelf_dist = 30.0
        shelf_lat = 48.0

    elif era_slug == "world-bc5000":
        # Mid Holocene / Green Sahara (sea level -3m)
        arctic_cap = lat_grid >= 77.0
        baffin_dip = 77.0 - 5.0 * np.exp(-((lng_grid + 65.0) / 16.0)**2)
        marine_ext = water_or_shelf & (lat_grid >= baffin_dip)
        
        south_lim = -68.5 + 1.8 * np.exp(-((lng_grid + 40.0) / 25.0)**2) + 1.5 * np.exp(-((np.abs(lng_grid) - 175.0) / 20.0)**2)
        antarctic = lat_grid <= south_lim
        shelf_dist = 25.0
        shelf_lat = 52.0

    elif era_slug == "world-bc123000":
        # Eemian Interglacial (sea level +7m)
        arctic_cap = lat_grid >= 81.0
        marine_ext = np.zeros((height, width), dtype=bool)
        antarctic = lat_grid <= -70.5
        shelf_dist = 0.0
        shelf_lat = 90.0
    else:
        return np.zeros((height, width), dtype=bool)

    # Bridge narrow fjords, straits, and sounds bordering continental ice sheets
    if continental_mask is not None and np.max(continental_mask) > 0 and shelf_dist > 0:
        cont_binary = continental_mask > 64
        dist_to_cont = ndi.distance_transform_edt(~cont_binary)
        shelf_conn = water_or_shelf & (dist_to_cont <= shelf_dist) & (lat_grid > shelf_lat)
    else:
        shelf_conn = np.zeros((height, width), dtype=bool)

    return arctic_cap | marine_ext | antarctic | shelf_conn

def render_glacial_ice_sheet(base_img, ice_mask, elev_grid, sea_level_offset=0):
    """
    Composite realistic high-albedo glacial ice sheet with soft blue ablation margins,
    ocean meltwater transitions, and underlying terrain relief.
    """
    if np.max(ice_mask) == 0:
        return base_img
        
    h, w, c = base_img.shape
    res = base_img.copy().astype(np.float32)
    ocean = elev_grid < sea_level_offset
    
    ice_binary = ice_mask > 64
    # Close small vector rasterization gaps along complex coastal channels
    ice_binary = ndi.binary_closing(ice_binary, structure=np.ones((5, 5)))
    
    dist_in = ndi.distance_transform_edt(ice_binary)
    dist_out = ndi.distance_transform_edt(~ice_binary)
    
    # 1. Outer boundary transitions (gentle halo fading into background graphic)
    # Ocean: cold turquoise/cyan meltwater bloom (14px)
    ocean_out_w = smoothstep(14.0, 0.0, dist_out) * 0.40
    meltwater_color = np.array([45.0, 110.0, 155.0])
    ocean_out_mask = ocean & (dist_out > 0) & (dist_out <= 14.0)
    res[ocean_out_mask] = (
        (1.0 - ocean_out_w[ocean_out_mask, None]) * res[ocean_out_mask] +
        ocean_out_w[ocean_out_mask, None] * meltwater_color
    )
    
    # Land: frost and snow dusting (12px)
    land_out_w = smoothstep(12.0, 0.0, dist_out) * 0.22
    frost_tint = np.array([215.0, 225.0, 230.0])
    land_out_mask = (~ocean) & (dist_out > 0) & (dist_out <= 12.0)
    res[land_out_mask] = (
        (1.0 - land_out_w[land_out_mask, None]) * res[land_out_mask] +
        land_out_w[land_out_mask, None] * frost_tint
    )
    
    # 2. Inside ice transitions
    # Ocean: marginal ice zone (MIZ) (12px)
    miz_factor = smoothstep(0.0, 12.0, dist_in)
    ocean_alpha = miz_factor * 0.92
    miz_edge_rgb = np.array([160.0, 205.0, 232.0]) # luminous cyan meltwater
    ocean_pack_rgb = np.array([240.0, 245.0, 252.0]) # dense polar sea ice
    ocean_color = (
        miz_edge_rgb[None, None, :] * (1.0 - miz_factor[:, :, None]) +
        ocean_pack_rgb[None, None, :] * miz_factor[:, :, None]
    )
    
    # Land: ablation zone (12px)
    ablation_factor = smoothstep(0.0, 12.0, dist_in)
    land_alpha = ablation_factor * 0.94
    ablation_edge_rgb = np.array([230.0, 238.0, 245.0]) # frosty light margin
    land_core_rgb = np.array([244.0, 248.0, 253.0]) # deep glacier snow
    land_color = (
        ablation_edge_rgb[None, None, :] * (1.0 - ablation_factor[:, :, None]) +
        land_core_rgb[None, None, :] * ablation_factor[:, :, None]
    )
    
    ice_color = np.where(ocean[:, :, None], ocean_color, land_color)
    alpha = np.where(ocean, ocean_alpha, land_alpha)
    
    # 3. Physically correct shaded relief (hillshade normalized to 1.0 on flat terrain)
    dy, dx = np.gradient(elev_grid)
    sun_az = math.radians(315)
    sun_el = math.radians(45)
    slope = np.arctan(np.sqrt(dx**2 + dy**2) * 0.0035)
    aspect = np.arctan2(dy, -dx)
    cos_inc = np.sin(sun_el) * np.cos(slope) + np.cos(sun_el) * np.sin(slope) * np.cos(sun_az - aspect)
    hillshade = np.clip(cos_inc / np.sin(sun_el), 0.78, 1.22)[:, :, None]
    
    # 4. Planetary surface texture modulation from base satellite image
    base_gray = 0.299 * base_img[:, :, 0] + 0.587 * base_img[:, :, 1] + 0.114 * base_img[:, :, 2]
    base_smooth = ndi.gaussian_filter(base_gray, sigma=12.0)
    detail = (base_gray - base_smooth) / 128.0
    lum_factor = np.clip(1.0 + 0.12 * detail, 0.88, 1.12)[:, :, None]
    
    # 5. Pack ice floe texture modulation over ocean
    y_idx, x_idx = np.indices((h, w))
    floes = 0.035 * (np.sin(x_idx * 0.14) * np.cos(y_idx * 0.11) + 0.5 * np.sin(x_idx * 0.32 + y_idx * 0.25))
    pack_mod = np.clip(1.0 + np.where(ocean, floes, 0.0), 0.95, 1.05)[:, :, None]
    
    # 6. Nunataks: mountain peaks piercing steep terrain
    slope_deg = np.degrees(slope)
    nunatak = np.clip((elev_grid - 1300.0) / 1400.0, 0.0, 1.0) * np.clip((slope_deg - 5.0) / 12.0, 0.0, 1.0)
    alpha = alpha * (1.0 - 0.40 * nunatak)
    
    # Combine modulated ice color
    ice_color = np.clip(ice_color * hillshade * lum_factor * pack_mod, 0.0, 255.0)
    
    # 7. Composite ice layer
    in_ice_mask = dist_in > 0
    res[in_ice_mask] = (
        (1.0 - alpha[in_ice_mask, None]) * res[in_ice_mask] +
        alpha[in_ice_mask, None] * ice_color[in_ice_mask]
    )
    
    return np.clip(res, 0, 255).astype(np.uint8)

def add_paleolakes_and_green_sahara(img, era_slug):
    """Add era-specific features like Lake Mega-Chad or Baltic Ice Lake."""
    h, w, c = img.shape
    result = img.copy().astype(np.float32)
    lake_water_color = np.array([32.0, 78.0, 118.0])
    
    lat_arr = np.linspace(90, -90, h)[:, None]
    lng_arr = np.linspace(-180, 180, w)[None, :]
    lat_grid = np.repeat(lat_arr, w, axis=1)
    lng_grid = np.repeat(lng_arr, h, axis=0)
    
    if era_slug == "world-bc5000":
        # 1. Lake Mega-Chad (centered at 14°N, 16.5°E, ~350,000 km²)
        chad_dist = np.sqrt(((lng_grid - 16.5) / 3.8)**2 + ((lat_grid - 14.0) / 2.6)**2)
        chad_mask = chad_dist <= 1.0
        result[chad_mask] = 0.85 * lake_water_color + 0.15 * result[chad_mask]
        
        # 2. Green Sahara (African Humid Period: 14°N to 26°N, 15°W to 35°E)
        sahara_mask = (lat_grid >= 14.0) & (lat_grid <= 26.0) & (lng_grid >= -15.0) & (lng_grid <= 35.0)
        green_savanna = np.array([88.0, 120.0, 62.0])
        blend = 0.35
        result[sahara_mask] = (1.0 - blend) * result[sahara_mask] + blend * green_savanna
        
    elif era_slug == "world-bc10000":
        # Baltic Ice Lake (proglacial lake dammed by retreating Fennoscandian sheet)
        baltic_dist = np.sqrt(((lng_grid - 21.0) / 6.0)**2 + ((lat_grid - 59.0) / 2.5)**2)
        baltic_lake_mask = baltic_dist <= 1.0
        result[baltic_lake_mask] = 0.70 * lake_water_color + 0.30 * result[baltic_lake_mask]
        
    return np.clip(result, 0, 255).astype(np.uint8)

def generate_era_texture(era_slug, sea_level_offset, na_shp_name=None, eu_shp_name=None):
    print(f"\n==========================================")
    print(f"Generating texture for {era_slug} (Sea level: {sea_level_offset:+d}m)...")
    
    base_img = np.array(Image.open(BASE_TEXTURE_PATH).convert("RGB"))
    elev_grid = ensure_elevation_grid(WIDTH, HEIGHT)
    modern_land_mask = elev_grid >= 0
    
    if sea_level_offset < 0:
        exposed_shelf_mask = (elev_grid >= sea_level_offset) & (elev_grid < 0)
        pct = np.sum(exposed_shelf_mask) / (WIDTH * HEIGHT) * 100
        print(f"Exposed shelf pixels: {np.sum(exposed_shelf_mask):,} ({pct:.2f}% of globe)")
        img = compute_shelf_color_diffusion(base_img, modern_land_mask, exposed_shelf_mask, elev_grid)
    elif sea_level_offset > 0:
        flooded_mask = (elev_grid < sea_level_offset) & (elev_grid >= 0)
        pct = np.sum(flooded_mask) / (WIDTH * HEIGHT) * 100
        print(f"Flooded land pixels: {np.sum(flooded_mask):,} ({pct:.2f}% of globe)")
        img = apply_flooded_lowlands(base_img, flooded_mask)
    else:
        img = base_img.copy()
        
    continental_mask = np.zeros((HEIGHT, WIDTH), dtype=np.uint8)
    
    if na_shp_name:
        na_shp_path = os.path.join(NA_ICE_DIR, f"{na_shp_name}.shp")
        if os.path.exists(na_shp_path):
            print(f"Adding North American ice sheet from {na_shp_name}...")
            na_mask = rasterize_shapefile_wgs84(na_shp_path)
            continental_mask = np.maximum(continental_mask, na_mask)
            
    if eu_shp_name:
        eu_shp_path = os.path.join(EU_ICE_DIR, f"{eu_shp_name}.shp")
        eu_prj_path = os.path.join(EU_ICE_DIR, f"{eu_shp_name}.prj")
        if os.path.exists(eu_shp_path) and os.path.exists(eu_prj_path):
            print(f"Adding Eurasian ice sheet from {eu_shp_name}...")
            eu_mask = rasterize_shapefile_projected(eu_shp_path, eu_prj_path)
            continental_mask = np.maximum(continental_mask, eu_mask)
            
    # Compute era-accurate polar sea ice, ice shelves & marine extensions
    ocean_ice = compute_polar_ocean_ice(era_slug, sea_level_offset, elev_grid, continental_mask, WIDTH, HEIGHT)
    total_ice_mask = np.maximum(continental_mask, (ocean_ice.astype(np.uint8) * 255))
    
    if np.max(total_ice_mask) > 0:
        print(f"Rendering glacial ice sheet and sea ice ({np.sum(total_ice_mask > 0):,} pixels)...")
        img = render_glacial_ice_sheet(img, total_ice_mask, elev_grid, sea_level_offset)
        
    img = add_paleolakes_and_green_sahara(img, era_slug)
    
    out_filename = f"earth-blue-marble-{era_slug.replace('world-bc', '').replace('world-', '')}bc.jpg"
    out_path = os.path.join(TEXTURE_OUT_DIR, out_filename)
    
    os.makedirs(TEXTURE_OUT_DIR, exist_ok=True)
    pil_out = Image.fromarray(img)
    pil_out.save(out_path, "JPEG", quality=90, optimize=True)
    size_mb = os.path.getsize(out_path) / (1024 * 1024)
    print(f" Saved: {out_path} ({size_mb:.2f} MB)")
    return out_path

ERA_SPECS = {
    "world-bc123000": {"sea_level": +7, "na_shp": None, "eu_shp": None},
    "world-bc10000": {"sea_level": -55, "na_shp": "ice012000", "eu_shp": "TS12_mc"},
    "world-bc8000": {"sea_level": -25, "na_shp": "ice010000", "eu_shp": "TS10_mc"},
    "world-bc5000": {"sea_level": -3, "na_shp": "ice007000", "eu_shp": None},
}

def main():
    parser = argparse.ArgumentParser(description="Generate prehistoric Earth textures for Earth Browser")
    parser.add_argument("--era", help="Specific era slug to generate (e.g. world-bc10000)")
    args = parser.parse_args()
    
    ensure_elevation_grid(WIDTH, HEIGHT)
    
    if args.era:
        if args.era not in ERA_SPECS:
            print(f"Error: Era '{args.era}' not in known specifications: {list(ERA_SPECS.keys())}")
            sys.exit(1)
        spec = ERA_SPECS[args.era]
        generate_era_texture(args.era, spec["sea_level"], spec["na_shp"], spec["eu_shp"])
    else:
        for slug, spec in ERA_SPECS.items():
            generate_era_texture(slug, spec["sea_level"], spec["na_shp"], spec["eu_shp"])
            
    print("\nPrehistoric Earth textures generated successfully!")

if __name__ == "__main__":
    main()
