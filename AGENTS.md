# Earth Browser — Agent & Developer Guide

This guide provides technical specifications, architectural patterns, and development guidelines for agents and engineers working on the `earth-browser` codebase.

---

## Architecture Overview

`earth-browser` is an interactive 3D WebGL historical Earth atlas that visualizes sovereign boundaries, cultural spheres, and historical empires across **54 historical eras** (from 123,000 BCE to 2010 CE).

### Key Stack Components
- **Frontend Framework**: React 18 with TypeScript and Vite.
- **3D Graphics & Visualizer**: Three.js (`three`) and ThreeGlobe (`three-globe`).
- **Backend API**: Express server (`server.ts`, `src/server/api.ts`) running on Node.js / `tsx`.
- **Database & Spatial Engine**: PostgreSQL with PostGIS extension (`knex`, `knex-postgis`, `pg`).
- **Testing**: Vitest (`vitest run`).

---

## Codebase Map & Responsibilities

├── data-sources/
│   └── textures/                              # Source datasets & documentation for prehistoric textures
│       ├── README.md                          # Detailed paleogeography & generation documentation
│       ├── requirements.txt                   # Python dependencies (Pillow, numpy, scipy, pyshp, pyproj)
│       └── ice-sheets/                        # Reconstructed vector shapefiles
│           ├── north-america/                 # Laurentide & Cordilleran ice sheets (Dyke et al., WGS84)
│           └── eurasia/                       # Scandinavian & Barents ice sheets (DATED-1, Lambert Azimuthal)
├── migrations/
│   ├── 20260828000000_create_eras_and_features.ts # Base schema (eras & era_features with PostGIS geom)
│   ├── 20260831000000_add_border_precision_partof_subjecto.ts # Lineage & precision columns
│   ├── 20260831010000_add_elevation_tier.ts       # Precalculated 3D elevation tiers for overlapping polygons
│   └── seed/                                      # 54 Historical GeoJSON datasets (world_*.geojson)
├── scripts/
│   ├── generate_prehistoric_textures.py       # Python pipeline for bathymetry & ice sheet texture generation
│   └── update_geojson_datasets.ts             # Automated dataset sync & validation from upstream repository
├── src/
│   ├── app/
│   │   ├── App.tsx             # Root layout, state orchestration, era fetching & feature selection
│   │   ├── App.css             # Glassmorphic layout, header styling, .globe-viewport offset
│   │   └── index.tsx           # React DOM root entry
│   ├── components/
│   │   ├── Timeline.tsx        # Vertical left timeline panel with dot markers & auto-scroll
│   │   ├── Timeline.css        # Left-docked glassmorphism panel & custom scrollbars
│   │   ├── ControlsOverlay.tsx # Visuals dropdown (Altitude, Opacity, Label Size, Appearance Tolerance)
│   │   ├── ControlsOverlay.css # Dropdown panel & slider styling
│   │   ├── CountryDrawer.tsx   # Detailed inspector for selected territory/empire
│   │   └── CountryDrawer.css   # Right-docked slide-in inspector styling
│   ├── features/
│   │   └── globe/              # Decoupled, reusable 3D Globe Visualizer package
│   │       ├── HistoricalGlobe.tsx # WebGL canvas container, ThreeGlobe lifecycle & interaction
│   │       ├── labels.ts       # 2D Screen-space non-overlapping label projection & collision engine
│   │       ├── polygonMaterials.ts # Three.js polygon materials (subjugation stripes, opacities)
│   │       ├── colors.ts       # Culture color palettes, precision tiers & lineage resolvers
│   │       ├── historicalLineage.ts # Historical civilization mapping & entity registry
│   │       ├── textures.ts     # Texture asset path resolvers
│   │       ├── types.ts        # Globe component props & domain types
│   │       └── index.ts        # Public export for globe feature
│   ├── server/
│   │   ├── api.ts              # Express router for /api/eras and /api/eras/:slug/geojson
│   │   ├── db.ts               # PostgreSQL connection pool configuration
│   │   ├── eraMetadata.ts      # Catalog of 54 historical eras with chronological metadata
│   │   └── ingest.ts           # PostGIS ingestion CLI (land clipping, centroid calculation)
│   ├── services/
│   │   └── api.ts              # Client API service with in-memory caching
│   ├── types/
│   │   └── index.ts            # Shared GeoJSON, Era, and Globe configuration interfaces
│   └── earthTextures/          # Bundled offline Earth texture images (123k BCE, 10k BCE, 8k BCE, 5k BCE, Modern)
├── server.ts                   # Express server entry point (port 3000)
├── vite.config.ts              # Vite frontend configuration with /api proxy to backend
└── knexfile.ts                 # Knex migration connection configuration
```

---

## Component & Feature Details

### 1. 3D Globe Visualizer (`src/features/globe/HistoricalGlobe.tsx`)
- **Decoupled Architecture**: Accepts pure GeoJSON `FeatureCollection` and configuration props without any backend coupling.
- **Viewport Layout**: The globe is housed in `.globe-viewport` in [`App.css`](file:///Users/ville.heikkinen/other/earth-browser/src/app/App.css), offset (`left: 160px; width: calc(100% - 160px)`) to position the globe in the open screen area beside the left timeline.
- **Raycasting & Interaction**: OrbitControls handles rotation/zoom; pointer raycasting detects 3D feature intersections and highlights territories.

### 2. High-Performance 2D Label Engine (`src/features/globe/labels.ts`)
- **Horizon Culling**: Discards points behind the 3D globe horizon using vector trigonometry (`isPointBehindGlobe`).
- **Centroid Calculation**: For multi-island archipelagos (e.g. Japan, Indonesia, Britain), [`computeGeometryCentroid`](file:///Users/ville.heikkinen/other/earth-browser/src/features/globe/labels.ts) selects the largest polygon by area to prevent ocean-floating labels.
- **AABB Collision Resolution**: Places labels in order of priority (Selected > Hovered > Area/Prominence > Center distance) and prevents overlaps via screen-space bounding boxes.
- **Configurable Sizing & Spacing**:
  - `labelSize` (default `14px`, adjustable `9px` - `22px`).
  - `labelTolerance` (default `10px`, adjustable `2px` - `24px` collision padding).
  - Renders to a dedicated 2D canvas overlay at 60fps with high-DPI scaling and legible dark halos.

### 3. Vertical Timeline Panel (`src/components/Timeline.tsx`)
- **Docked on Left**: `position: absolute; left: 24px; top: 80px; bottom: 24px; width: 290px;` with glassmorphic dark background.
- **Features**:
  - Era step navigation (`‹` / `›` buttons).
  - Active era summary card (year, territory count, clean name, description).
  - Vertical rail line with circular dot markers for each era (glowing cyan on active).
  - Monospace, high-contrast year column (`timeline-item-year`).
  - Truncated label with ellipsis (`timeline-item-label`) and full hover tooltips.
  - Automatic smooth scrolling to keep the active era in view.

### 4. Visual Controls Overlay (`src/components/ControlsOverlay.tsx`)
- Located at top-right (`top: 24px; right: 24px;`).
- Controls:
  - **Earth Surface Texture** (Blue Marble Modern, Blue Marble Prehistoric variants, Day Map, Night Lights, Dark Planetary).
  - **Polygon Altitude** (`0.001` - `0.030`, default `0.002`).
  - **Overlap Elevation** (`0.0x` - `3.0x`, default `0.3x` multiplier for stepped elevation of nested sub-entities and overlapping territories).
  - **Country Base Opacity** (`0%` - `100%`, default `55%`).
  - **Country Labels Toggle** (`Enabled` / `Disabled`).
  - **Label Size** (`9px` - `22px`, default `14px`).
  - **Appearance Tolerance** (`2px` - `24px`, default `10px`).

### 5. Territory Inspector Drawer (`src/components/CountryDrawer.tsx`)
- Opens on country click at top-right (`top: 80px; right: 24px; width: 320px;`).
- Displays culture sphere, parent empire (`PARTOF`), subjugation status (`SUBJECTO` striped indicator), border precision rating (Exact / Approximate / Frontier), ISO code, population, estimated area, and data source link.

### 6. Attribution & Data Sources (`src/components/Attribution.tsx`)
- Bottom-right unobtrusive attribution badge with links to André Ourednik's `historical-basemaps` dataset and GPL-3.0 license.
- Interactive modal dialog (`AttributionModal`) presenting detailed licensing and source data credits.

---

## PostGIS & Backend Pipeline

### Ingestion & Export Pipeline
- **Dataset Sync (`npm run data:update`)**:
  - Fetches the latest boundary datasets from upstream repository (`aourednik/historical-basemaps`).
  - Validates GeoJSON FeatureCollection schema and JSON integrity.
  - Verifies bidirectional consistency against the `ERA_CATALOG` in `src/server/eraMetadata.ts`.
- **Ingestion (`npm run db:ingest`)**:
  - Reads raw GeoJSON files from `migrations/seed/` (sourced from [aourednik/historical-basemaps](https://github.com/aourednik/historical-basemaps/tree/master/geojson), GPL-3.0).
  - Cleans and repairs geometries using PostGIS `ST_MakeValid`, `ST_Force2D`, and `ST_CollectionExtract`.
  - Precalculates true interior surface centroids using `ST_PointOnSurface(geom)` to store `label_lng` and `label_lat`.
  - Precalculates 3D `elevation_tier` (0–N) using topological DAG area-ordered stratification over PostGIS spatial intersections (`ST_Intersects`, `ST_Area(ST_Intersection)`) so sub-entities overlapping sub-entities receive strictly ascending, non-colliding elevation tiers with zero z-fighting.
  - Enriches properties with civilization lineage, culture groups, border precision ratings, and elevation tiers.
- **Static Export (`npm run db:export`)**:
  - Exports the PostGIS-enriched era catalog (`public/data/eras.json`) and 54 era GeoJSON FeatureCollections (`public/data/eras/[slug].json`) into `public/data/`.
  - Copied into `docs/data/` on `vite build` for 100% serverless, static bucket hosting.

### Endpoints (Dev API & Static Data Layout)
- `GET /api/eras` or static `/data/eras.json`: List of all 54 historical eras sorted chronologically with metadata.
- `GET /api/eras/:slug/geojson` or static `/data/eras/:slug.json`: GeoJSON `FeatureCollection` with simplified geometries, label centroids, and elevation tiers.

---

## Verification & Development Commands

Always run tests and verify the build when making changes:

```bash
# Update dataset from upstream source
npm run data:update

# Run PostGIS database setup (migrations + ingest + export)
npm run db:setup

# Run Vitest test suite
npm test

# Typecheck and build production bundle
npm run build

# Start development servers (frontend + backend)
npm run dev
```

---

## Best Practices for Agents Modifying this Codebase

1. **Decoupling**: Keep `src/features/globe/` independent from backend details; pass configuration through props.
2. **Animation Loop Safety**: When adding dynamic props to `HistoricalGlobe`, use `useRef` to sync props to the 60fps render loop without triggering full WebGL teardown/reconstruction.
3. **Responsive UI**: Preserve glassmorphic styling, responsive media queries (`max-width: 768px`), and layout offsets (`.globe-viewport`).
4. **Testing**: Add or update unit tests in `*.test.ts` whenever helper functions, geometric calculations, or layout algorithms are modified.

