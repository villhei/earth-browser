# Earth Browser — Agent & Developer Guide

This guide provides technical specifications, architectural patterns, and development guidelines for agents and engineers working on the `earth-browser` codebase.

---

## Architecture Overview

`earth-browser` is an interactive 3D WebGL historical Earth atlas that visualizes sovereign boundaries, cultural spheres, and historical empires across historical eras (from 123,000 BCE to 2010 CE).

### Key Stack Components
- **Frontend Framework**: React 18 with TypeScript and Vite.
- **3D Graphics & Visualizer**: Three.js (`three`) and ThreeGlobe (`three-globe`).
- **Backend API**: Express server (`server.ts`, `src/server/api.ts`) running on Node.js / `tsx`.
- **Database & Spatial Engine**: PostgreSQL with PostGIS extension (`knex`, `knex-postgis`, `pg`).
- **Testing**: Vitest (`vitest run`).

---

## Codebase Map & Responsibilities

```
├── data-sources/
│   ├── batches/                               # Culture metadata batch JSON files
│   ├── residue/                               # Regional inventories of unmapped historical entities
│   ├── textures/                              # Source datasets & documentation for prehistoric textures
│   │   ├── README.md                          # Detailed paleogeography & generation documentation
│   │   ├── requirements.txt                   # Python dependencies (Pillow, numpy, scipy, pyshp, pyproj)
│   │   └── ice-sheets/                        # Reconstructed vector shapefiles
│   │       ├── north-america/                 # Laurentide & Cordilleran ice sheets (Dyke et al., WGS84)
│   │       └── eurasia/                       # Scandinavian & Barents ice sheets (DATED-1, Lambert Azimuthal)
│   └── translations/                          # Extracted entity string catalogs for localization
├── CULTURE_METADATA_EXPANSION.md              # Multi-agent parallel task guide & completed inventory
├── migrations/
│   ├── 20260828000000_create_eras_and_features.ts # Base schema (eras & era_features with PostGIS geom)
│   ├── 20260831000000_add_border_precision_partof_subjecto.ts # Lineage & precision columns
│   ├── 20260831010000_add_elevation_tier.ts   # Precalculated 3D elevation tiers for overlapping polygons
│   ├── 20260921000000_create_culture_metadata.ts # Canonical culture metadata table & era_features linkage
│   └── seed/                                  # Historical GeoJSON datasets (world_*.geojson)
├── scripts/
│   ├── generators/                            # Culture metadata batch generator scripts
│   ├── culture_metadata_status.ts             # Completion tracking and status reporter
│   ├── export_cultures_list.ts                # Dynamic culture catalog & statistics exporter
│   ├── extract-translatable-strings.ts        # Translatable string extractor
│   ├── generate_prehistoric_textures.py       # Python pipeline for bathymetry & ice sheet texture generation
│   ├── partition_residue_continents.ts        # Unmapped entity continent partitioner CLI
│   ├── seed_culture_metadata_batch.ts         # Parallel batch seeder CLI wrapper
│   ├── seed_culture_metadata_bc500.ts         # 500 BCE prototype seeder wrapper
│   └── update_geojson_datasets.ts             # Automated dataset sync & validation from upstream repository
├── src/
│   ├── app/
│   │   ├── App.tsx             # Root layout, state orchestration, era fetching & feature selection
│   │   ├── App.css             # Glassmorphic layout, header styling, .globe-viewport offset
│   │   └── index.tsx           # React DOM root entry
│   ├── components/
│   │   ├── ActiveEraBanner.tsx # Floating top era banner with year pill & click-to-expand details
│   │   ├── Attribution.tsx     # Attribution modal dialog & source credits
│   │   ├── ControlsOverlay.tsx # Visuals & theme dropdown (altitude, opacity, labels, theme, lang)
│   │   ├── ControlsOverlay.css # Dropdown panel & slider styling
│   │   ├── CountryDrawer.tsx   # Detailed inspector for selected territory/empire
│   │   ├── CountryDrawer.css   # Right-docked slide-in inspector styling
│   │   ├── EraDetailsModal.tsx # Full-screen modal with detailed historical era context
│   │   ├── LanguageToggle.tsx  # Standalone bilingual switcher (EN / FI)
│   │   ├── Timeline.tsx        # Vertical left timeline panel with dot markers & auto-scroll
│   │   └── Timeline.css        # Left-docked glassmorphism panel & custom scrollbars
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
│   ├── i18n/                   # Bilingual localization system (English & Finnish)
│   │   ├── context.tsx         # LanguageProvider & useLanguage hook
│   │   ├── translations.ts     # Static UI string dictionary
│   │   └── types.ts            # Supported languages and translation schemas
│   ├── server/
│   │   ├── api.ts              # Express router for /api/eras and /api/eras/:slug/geojson
│   │   ├── cultureSeeder.ts    # Batch upsert & feature linkage engine
│   │   ├── db.ts               # PostgreSQL connection pool configuration
│   │   ├── eraMetadata.ts      # Catalog of historical eras with chronological metadata
│   │   ├── exportStatic.ts     # Serverless static JSON exporter
│   │   ├── ingest.ts           # PostGIS ingestion CLI (land clipping, centroid calculation)
│   │   └── queries.ts          # Shared PostGIS FeatureCollection SQL query builder
│   ├── services/
│   │   └── api.ts              # Client API service with in-memory caching
│   ├── styles/                 # Theme tokens and color schemes (Light, Dark, Auto)
│   ├── types/                  # Shared GeoJSON, Era, and Globe configuration interfaces
│   └── earthTextures/          # Bundled offline Earth texture images & paleogeographic masks
├── server.ts                   # Express server entry point (port 3000)
├── vite.config.ts              # Vite frontend configuration with Rollup code-splitting & /api proxy
└── knexfile.ts                 # Knex migration connection configuration
```

---

## Component & Feature Details

### 1. 3D Globe Visualizer (`src/features/globe/HistoricalGlobe.tsx`)
- **Decoupled Architecture**: Accepts pure GeoJSON `FeatureCollection` and configuration props without any backend coupling.
- **Viewport Layout**: The globe is housed in `.globe-viewport` in [`App.css`](src/app/App.css), offset (`left: 160px; width: calc(100% - 160px)`) to position the globe in the open screen area beside the left timeline.
- **Raycasting & Interaction**: OrbitControls handles rotation/zoom; pointer raycasting detects 3D feature intersections and highlights territories.
- **Camera Deep-Linking & URL Sharing**: URL query string (`?era=<slug>&camera=x,y,z&target=x,y,z`) is updated via `replaceState` without polluting history, enabling instantaneous view restoration and bookmark sharing.
- **Prehistoric Terrain Highlights**: Custom GLSL shader with Land Bridges and Coastlines focus modes, dynamic pulsing animation (`✦ Pulse Highlight`), and bathymetric underlays for 123k, 10k, 8k, and 5k BCE.

### 2. High-Performance 2D Label Engine (`src/features/globe/labels.ts`)
- **Horizon Culling**: Discards points behind the 3D globe horizon using vector trigonometry (`isPointBehindGlobe`).
- **Centroid Calculation**: For multi-island archipelagos (e.g. Japan, Indonesia, Britain), [`computeGeometryCentroid`](src/features/globe/labels.ts) selects the largest polygon by area to prevent ocean-floating labels.
- **AABB Collision Resolution**: Places labels in order of priority (Selected > Hovered > Area/Prominence > Center distance) and prevents overlaps via screen-space bounding boxes.
- **Configurable Sizing & Spacing**:
  - `labelSize` (default `14px`, adjustable `9px` - `22px`).
  - `labelTolerance` (default `10px`, adjustable `2px` - `24px` collision padding).
  - Renders to a dedicated 2D canvas overlay at 60fps with high-DPI scaling and legible dark halos.

### 3. Vertical Timeline Panel (`src/components/Timeline.tsx`)
- **Docked on Left**: `position: absolute; left: 24px; top: 80px; bottom: 24px; width: 290px;` with glassmorphic background.
- **Historical Epoch Accordions**: Eras are grouped into chronologically stratified epochs via `groupErasByEpoch` ([`src/components/eraGrouping.ts`](src/components/eraGrouping.ts)):
  1. *Prehistory & Holocene* (123k – 5000 BCE)
  2. *Bronze Age* (4000 – 1500 BCE)
  3. *Iron Age & Antiquity* (1000 BCE – 500 CE)
  4. *Middle Ages* (600 – 1400 CE)
  5. *Early Modern Era* (1492 – 1783 CE)
  6. *19th Century & Industrial* (1800 – 1900 CE)
  7. *Modern & Contemporary* (1914 – 2010 CE)
- **Features**:
  - Accordion headers show localized epoch title and date span badge.
  - Active era's epoch accordion auto-expands on era switch.
  - Vertical rail line with circular dot markers for each era (glowing cyan on active).
  - Monospace, high-contrast year column (`timeline-item-year`).
  - Truncated label with ellipsis (`timeline-item-label`) and full hover tooltips.
  - Automatic smooth scrolling to keep the active era in view.
  - **Responsive Mobile Drawer**: On narrow screens (`<= 768px`), collapses into a full-height off-canvas slide-in drawer toggled from the active banner menu button with backdrop overlay and Escape key dismissal.

### 4. Active Era Banner & Era Details Modal (`ActiveEraBanner.tsx`, `EraDetailsModal.tsx`)
- **Active Era Banner**: Top floating pill displaying active year pill, clean era title, and era navigation buttons (`‹` / `›`). On mobile screens (`<= 768px`), includes a timeline menu toggle button. Clicking the era information opens the detailed era modal.
- **Era Details Modal**: Full-screen glassmorphic dialog displaying the active year badge, territory count, full era title, and rich chronological narrative description with bilingual support (EN / FI).

### 5. Visual Controls Overlay (`src/components/ControlsOverlay.tsx`)
- Located at bottom-right next to attributions as an icon-only button; popover opens upwards.
- Controls:
  - **Language**: English (`en`) / Finnish (`fi`) switching via embedded `<LanguageToggle />` and `<LanguageProvider>`.
  - **Theme / Color Scheme**: Auto (System), Light (Aged vellum with warm terracotta ink), Dark (Deep space with cyan accents), dynamically applied via CSS custom properties from design tokens in [`src/styles/theme.ts`](src/styles/theme.ts).
  - **Earth Surface Texture**: Day Map (`EARTH_DAY`) and Blue Marble Modern (`EARTH_BLUE_MARBLE`).
  - **Prehistoric Overlays**:
    - *Terrain Highlight*: Toggle enabled/disabled, focus mode selector (`Land Bridges` vs `Coastlines`), and dynamic `✦ Pulse Highlight` button triggering GLSL shader animation over exposed shelves (10,000, 8,000, 5,000 BCE) and flooded lowlands (123,000 BCE).
    - *Ice Sheet Overlay*: Toggle enabled/disabled for reconstructed regional glacial ice sheets (10k, 8k, 5k, 4k, 3k BCE).
  - **Polygon Altitude**: `0.001` - `0.030` (default `0.002`).
  - **Overlap Elevation**: `0.0x` - `3.0x` (default `0.3x` multiplier for stepped elevation of nested sub-entities and overlapping territories).
  - **Country Base Opacity**: `0%` - `100%` (default `55%`).
  - **Country Labels Toggle**: Enabled / Disabled.
  - **Label Size**: `9px` - `22px` (default `14px`).
  - **Appearance Tolerance**: `2px` - `24px` (default `10px`).
  - **Credits & Sources**: Button opening attribution modal.

### 6. Territory Inspector Drawer (`src/components/CountryDrawer.tsx`)
- Opens on country click at top-right (`top: 80px; right: 24px; width: 340px;`) on desktop displays (>= 1280px).
- Automatically collapses into a centered mobile modal presentation with backdrop overlay on screens smaller than 1280px wide (`@media (max-width: 1279px)`).
- Displays:
  - Era year badge and culture color indicator swatch.
  - Localized territory/culture name and formal/native endonym subtitle.
  - Culture Sphere badge (`culture_group`, localized).
  - Parent territory (`PARTOF`) with parent color indicator.
  - Subjugation status (`SUBJECTO` striped indicator badge).
  - Civilization lineage (`canonical_name`, localized).
  - Historical period & documented era duration badge (`period_label`, localized).
  - Capital / Ceremonial center (`capital`).
  - Border precision tier (Exact / Approximate / Frontier).
  - ISO A3 code (when available).
  - Sovereignty / Controlling power (when distinct from territory name).
  - Bilingual encyclopedic culture overview summary (`summary_en`, `summary_fi`).
  - Canonical Wikipedia article link.

### 7. Attribution & Data Sources (`src/components/Attribution.tsx`)
- Bottom-right unobtrusive icon-only button ("Credits & Sources" / "Lähteet ja tekijätiedot") next to settings.
- Interactive modal dialog (`AttributionModal`) presenting application creator profile (Ville Heikkinen with GitHub and LinkedIn links), source basemaps ([aourednik/historical-basemaps](https://github.com/aourednik/historical-basemaps/tree/master/geojson), GPL-3.0), elevation/bathymetry (NOAA NCEI ETOPO 2022), ice sheets (Dyke et al., DATED-1), satellite imagery (NASA Visible Earth), and core technologies.

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
  - Automatically seeds canonical encyclopedic records into `culture_metadata` across regional batch files in `data-sources/batches/` (covering unique cultures, summaries, historical periods, Wikipedia URLs, and capitals in both English and Finnish).
  - Links each feature in `era_features` via `culture_id` and embeds `properties.culture_metadata`.
- **Static Export (`npm run db:export`)**:
  - Exports the PostGIS-enriched era catalog (`public/data/eras.json`) and era GeoJSON FeatureCollections (`public/data/eras/[slug].json`) into `public/data/`.
  - Copied into `docs/data/` on `vite build` for 100% serverless, static bucket hosting.
- **Restoring / Re-ingesting Metadata for the Live Dev App**:
  If country drawer metadata (encyclopedic summaries, capitals, Wikipedia links, culture groups) is missing in the live dev app because `db:export` was previously run against an unseeded database, execute the full re-ingestion and rebuild pipeline:
  ```bash
  # 1. Re-ingest boundaries and re-seed/link culture metadata batches
  npm run db:ingest

  # 2. Check metadata linkage completion status
  npm run culture:status

  # 3. Export enriched datasets and build production bundle
  npm run build
  ```
  After rebuilding, perform a hard refresh in the browser (`Cmd + Shift + R`) to bypass any cached JSON files in local dev memory.

### Endpoints (Dev API & Static Data Layout)
- `GET /api/eras` or static `/data/eras.json`: List of historical eras sorted chronologically with metadata.
- `GET /api/eras/:slug/geojson` or static `/data/eras/:slug.json`: GeoJSON `FeatureCollection` with simplified geometries, label centroids, elevation tiers, and embedded `culture_metadata`.

---

## Verification & Development Commands

Always run tests and verify the build when making changes:

```bash
# Update dataset from upstream source
npm run data:update

# Run PostGIS database setup (migrations + ingest + export)
npm run db:setup

# Re-ingest datasets & link culture metadata (when restoring metadata)
npm run db:ingest

# Verify culture metadata linkage status
npm run culture:status

# Partition residual unmapped entities by continent
npm run culture:residue

# Extract translatable strings from era datasets
npm run i18n:extract

# Export enriched PostGIS datasets to static public/data/
npm run db:export

# Reset database (rollback migrations and fresh setup)
npm run db:reset

# Run Vitest test suite
npm test

# Typecheck, static export, and build production bundle
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
5. **Documentation Count-Neutrality & Longevity**: Avoid hardcoding exact counts of metadata batches, entities, features, or eras in prose documentation and high-level architectural guides. Refer qualitatively to "culture metadata batches", "historical eras", and "feature collections" rather than specific counts to prevent documentation drift as datasets evolve.

