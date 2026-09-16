# Prehistoric Earth Textures — Data Sources & Generation Pipeline

This directory contains the geospatial source data, vector shapefiles, and technical documentation for generating era-accurate, high-resolution Earth textures with bathymetry-based coastline expansions and glacial ice sheets for `earth-browser`.

> **Status:** The four generated prehistoric JPEGs and their app integration have been removed. Modern textures and research inputs are retained. The pipeline below documents the legacy generator; its reconstructions have not been validated and are being replaced with independently sourced, transparent era masks. Running the legacy generator recreates the retired JPEGs.

> **Current source audit:** See [SOURCE-AUDIT.md](SOURCE-AUDIT.md) for catalog dates, usable inputs and unresolved provenance. The legacy North American BP-to-BCE assignments below are unsupported: the attributed source uses radiocarbon chronology. Those files also contain `LAKE` records. Sea-level offsets and artistic marine ice below are legacy assumptions, not validated reconstruction inputs.

---

## 1. Overview & Paleogeography

Modern satellite maps (such as NASA Blue Marble) represent Earth at present-day sea level with contemporary polar ice caps. Throughout human prehistory and late Quaternary glacial cycles, sea levels fluctuated by over **130 meters**, and continental ice sheets covered millions of square kilometers across Eurasia and North America.

This pipeline reconstructs five key prehistoric epochs:

| Era Slug | Historical Period | Sea Level ($\Delta h$) | Reconstructed Paleogeography | Key Features |
| :--- | :--- | :--- | :--- | :--- |
| **`world-bc123000`** | **123,000 BCE** *(Eemian Interglacial)* | **+7 m** | Submerged coastal lowlands and embayments; reduced polar margin ice | Flooded coastal plains, Amazon margins, Baltic-White Sea straits |
| **`world-bc10000`** | **10,000 BCE** *(Dawn of Holocene / Younger Dryas)* | **-55 m** | Exposed continental shelves; deglaciation proglacial lakes | **Baltic Ice Lake**, retreating Laurentide & Scandinavian ice margins |
| **`world-bc8000`** | **8,000 BCE** *(Early Neolithic)* | **-25 m** | Doggerland archipelago/marshes; English Channel breaching | Drowned river valleys, residual Canadian ice |
| **`world-bc5000`** | **5,000 BCE** *(Chalcolithic / Green Sahara)* | **-3 m** | Near-modern coastlines; **African Humid Period** | **Lake Mega-Chad** (~350,000 km²), green savannah across the Sahara |

---

## 2. Primary Data Sources & Provenance

### A. Base Satellite Map
- **NASA Blue Marble Next Generation** (equirectangular $360^\circ \times 180^\circ$, $4096 \times 2048$ RGB).
- Located in: `src/earthTextures/earth-blue-marble.jpg`.

### B. Global Bathymetry & Topography
- **NOAA NCEI ETOPO 2022** (60 arc-second global bedrock elevation GeoTIFF).
- Source: [NOAA National Centers for Environmental Information](https://www.ncei.noaa.gov/products/etopo-global-relief-model).
- File: `ETOPO_2022_v1_60s_N90W180_bed.tif`.

### C. North American Ice Sheets (Laurentide & Cordilleran)
- **Dyke, A. S. (2004)**: *An outline of North American deglaciation with emphasis on central and northern Canada*. Geological Survey of Canada Bulletin 577.
- Vector shapefiles provided in WGS84 coordinates in `data-sources/textures/ice-sheets/north-america/`:
  - `ice018000.*`: 18,000 BP (LGM)
  - `ice012000.*`: 12,000 BP (10,000 BCE)
  - `ice010000.*`: 10,000 BP (8,000 BCE)
  - `ice007000.*`: 7,000 BP (5,000 BCE)
  - `ice005000.*`: 5,000 BP (3,000 BCE)

### D. Eurasian Ice Sheets (Scandinavian, British-Irish, Barents-Kara)
- **DATED-1 (Hughes et al., 2015)**: *The last Eurasian ice sheets – a chronological database and time-slice reconstruction, DATED-1*. Boreas, 45(1), 1–45. DOI: [10.1594/PANGAEA.848117](https://doi.org/10.1594/PANGAEA.848117).
- Vector shapefiles provided in North Pole Lambert Azimuthal Equal Area projection (`.prj`) in `data-sources/textures/ice-sheets/eurasia/`:
  - `TS20_mc.*`: 20,000 BP (LGM)
  - `TS12_mc.*`: 12,000 BP (10,000 BCE)
  - `TS10_mc.*`: 10,000 BP (8,000 BCE)

---

## 3. Directory Structure

```
data-sources/textures/
├── README.md                      # This documentation guide
├── requirements.txt               # Python package dependencies
├── elevation_4096x2048.npy        # Cached 4096x2048 ETOPO elevation grid (generated on first run)
└── ice-sheets/
    ├── north-america/             # Laurentide / Cordilleran shapefiles (Dyke et al., WGS84)
    │   ├── ice018000.{shp,dbf,shx,prj}
    │   ├── ice012000.{shp,dbf,shx,prj}
    │   ├── ice010000.{shp,dbf,shx,prj}
    │   ├── ice007000.{shp,dbf,shx,prj}
    │   └── ice005000.{shp,dbf,shx,prj}
    └── eurasia/                   # DATED-1 Eurasian ice sheet shapefiles (Hughes et al., Lambert Azimuthal)
        ├── TS20_mc.{shp,dbf,shx,prj,sbn,sbx}
        ├── TS12_mc.{shp,dbf,shx,prj,sbn,sbx}
        └── TS10_mc.{shp,dbf,shx,prj,sbn,sbx}
```

---

## 4. Synthesis & Generation Algorithms

The generator script (`scripts/generate_prehistoric_textures.py`) implements the following processing pipeline:

### 1. Bathymetric Shelf Inpainting
When sea level drops ($\Delta h < 0$), newly exposed land is identified where $\text{elevation} \ge \Delta h$ and $\text{elevation}_{\text{modern}} < 0$.
- **Nearest-Neighbor Color Diffusion**: A Euclidean distance transform (`scipy.ndimage.distance_transform_edt`) propagates pixel colors outward from the nearest modern subaerial coastline into the exposed shelf mask.
- **Latitude Biome Tinting**:
  - *Tundra / Steppe ($>52^\circ\text{N}$)*: Tinted with dry periglacial tundra hues (`[125, 130, 105]`).
  - *Temperate Plains ($28^\circ\text{N} - 52^\circ\text{N}$)*: Tinted with alluvial steppe/grassland tones (`[115, 125, 85]`).
  - *Tropical Lowlands ($-15^\circ\text{S} - 25^\circ\text{N}$)*: Tinted with lush tropical green (`[65, 95, 48]`) matching Sundaland and Sahul.
- **Shaded Relief Modulation**: Calculates solar hillshading from bathymetric terrain slopes ($\nabla z$) using azimuth $315^\circ$ (NW) and altitude $45^\circ$.

### 2. High Sea-Level Flooding
When sea level rises ($\Delta h > 0$, e.g., 123,000 BCE), modern land pixels where $\text{elevation} < \Delta h$ are shaded with shallow coastal water turquoise (`[28, 72, 110]`).

### 3. Glacial Ice Sheet & Polar Marine Ice Composite
- **Continental Ice**: Vector boundaries from Dyke et al. (North America) and DATED-1 (Eurasia) are projected to WGS84 and rasterized onto the $4096 \times 2048$ grid.
- **Polar Ocean Sea Ice & Ice Shelves**: Simulates era-accurate marine ice pack across the Arctic Ocean basin, subpolar marine current extensions (Labrador Sea, East Greenland, Bering Sea, Sea of Okhotsk), and circum-Antarctic sea ice and ice shelves (Weddell and Ross seas). Narrow fjords, straits, and sounds bordering continental ice sheets are bridged seamlessly.
- **Multi-Zone Smooth Transitions**:
  - *Ocean Margins (Marginal Ice Zone)*: Smooth Hermite `smoothstep` transition over 12–14 pixels with cold turquoise/cyan meltwater bloom (`[45, 110, 155]`) in the adjacent ocean and translucent pack ice fading into open water without harsh edges.
  - *Land Margins (Ablation Zone)*: Frost and snow dusting (`[215, 225, 230]`) extending into proglacial terrain, with translucent frosty margins gradually ramping into deep glacial accumulation.
- **Eliminating "Solid White" Flatness**:
  - *Physically Correct Hillshading*: Normalized 3D shaded relief ($NW, 45^\circ$) that maintains $1.0$ albedo on flat surfaces while illuminating sunward slopes ($1.22$) and shading leeward slopes ($0.78$).
  - *Base Texture Modulation*: Modulates ice albedo with high-frequency planetary surface luminance, revealing underlying mountain ranges, plateaus, and river valleys through the ice.
  - *Nunataks*: Steep mountain peaks exceeding 1,300m pierce the ice sheet with exposed rocky terrain.
  - *Marine Pack Ice Floes*: Synthesizes subtle multi-scale pack ice floe and lead patterns across ocean ice.

### 4. Pluvial Paleolakes & Vegetation Anomalies
- **5000 BCE**: Renders **Lake Mega-Chad** ($14^\circ\text{N}, 16.5^\circ\text{E}$) and applies green savannah blending across the Sahara/Sahel.
- **10,000 BCE**: Renders the proglacial **Baltic Ice Lake** south of the Fennoscandian ice margin.

---

## 5. How to Repeat & Iterate

### Step 1: Set Up Python Virtual Environment
```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r data-sources/textures/requirements.txt
```

### Step 2: Run Texture Generation
```bash
# Generate all prehistoric textures (123k BCE, 10k BCE, 8k BCE, 5k BCE):
python3 scripts/generate_prehistoric_textures.py

# Or regenerate a single specific era:
python3 scripts/generate_prehistoric_textures.py --era world-bc10000
```

### Step 3: Adding New Eras or Customizing Parameters
To add a new epoch or adjust parameters, modify the `ERA_SPECS` dictionary in [`scripts/generate_prehistoric_textures.py`](../../scripts/generate_prehistoric_textures.py):

```python
ERA_SPECS = {
    "world-bc123000": {"sea_level": +7,  "na_shp": None,        "eu_shp": None},
    "world-bc10000":  {"sea_level": -55, "na_shp": "ice012000", "eu_shp": "TS12_mc"},
    "world-bc8000":   {"sea_level": -25, "na_shp": "ice010000", "eu_shp": "TS10_mc"},
    "world-bc5000":   {"sea_level": -3,  "na_shp": "ice007000", "eu_shp": None},
}
```

Generated texture outputs are automatically saved to `src/earthTextures/` and bundled into `docs/assets/` during `npm run build`.
