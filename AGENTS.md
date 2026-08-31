# Earth Browser — Agent & Developer Guide 🌍

This guide provides technical specifications, architectural patterns, and development guidelines for agents and engineers working on the `earth-browser` codebase.

---

## 🏛 Architecture Overview

`earth-browser` is an interactive 3D WebGL historical Earth atlas that visualizes sovereign boundaries, cultural spheres, and historical empires across **36 historical eras** (from 123,000 BCE to 2010 CE).

### Key Stack Components
- **Frontend Framework**: React 18 with TypeScript and Vite.
- **3D Graphics & Visualizer**: Three.js (`three`) and ThreeGlobe (`three-globe`).
- **Backend API**: Express server (`server.ts`, `src/server/api.ts`) running on Node.js / `tsx`.
- **Database & Spatial Engine**: PostgreSQL with PostGIS extension (`knex`, `knex-postgis`, `pg`).
- **Testing**: Vitest (`vitest run`).

---

## 📁 Codebase Map & Responsibilities

```
earth-browser/
├── migrations/
│   ├── 20260828000000_create_eras_and_features.ts # Base schema (eras & era_features with PostGIS geom)
│   ├── 20260831000000_add_border_precision_partof_subjecto.ts # Lineage & precision columns
│   └── seed/                                      # 36 Historical GeoJSON datasets (world_*.geojson)
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
│   │       ├── borderLineMesh.ts # Curvature-matching precision-scaled border ribbon meshes
│   │       ├── polygonMaterials.ts # Three.js polygon materials (subjugation stripes, opacities)
│   │       ├── colors.ts       # Culture color palettes, precision tiers & lineage resolvers
│   │       ├── historicalLineage.ts # Historical civilization mapping & entity registry
│   │       ├── textures.ts     # Texture asset path resolvers
│   │       ├── types.ts        # Globe component props & domain types
│   │       └── index.ts        # Public export for globe feature
│   ├── server/
│   │   ├── api.ts              # Express router for /api/eras and /api/eras/:slug/geojson
│   │   ├── db.ts               # PostgreSQL connection pool configuration
│   │   ├── eraMetadata.ts      # Catalog of 36 historical eras with chronological metadata
│   │   └── ingest.ts           # PostGIS ingestion CLI (land clipping, centroid calculation)
│   ├── services/
│   │   └── api.ts              # Client API service with in-memory caching
│   ├── types/
│   │   └── index.ts            # Shared GeoJSON, Era, and Globe configuration interfaces
│   └── earthTextures/          # Bundled offline Earth texture images
├── server.ts                   # Express server entry point (port 3000)
├── vite.config.ts              # Vite frontend configuration with /api proxy to backend
└── knexfile.ts                 # Knex migration connection configuration
```

---

## 🧩 Component & Feature Details

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
  - **Polygon Altitude** (`0.001` - `0.030`).
  - **Fill Opacity** (`10%` - `100%`).
  - **Country Labels Toggle** (`Enabled` / `Disabled`).
  - **Label Size** (`9px` - `22px`, default `14px`).
  - **Appearance Tolerance** (`2px` - `24px`, default `10px`).

### 5. Territory Inspector Drawer (`src/components/CountryDrawer.tsx`)
- Opens on country click at top-right (`top: 80px; right: 24px; width: 320px;`).
- Displays culture sphere, parent empire (`PARTOF`), subjugation status (`SUBJECTO` striped indicator), border precision rating (Exact / Approximate / Frontier), ISO code, population, and estimated area.

---

## 🗄 PostGIS & Backend Pipeline

### Ingestion (`npm run db:ingest`)
- Reads raw GeoJSON files from `migrations/seed/`.
- Cleans and repairs geometries using PostGIS `ST_MakeValid` and `ST_CollectionExtract`.
- Precalculates true interior surface centroids using `ST_PointOnSurface(geom)` to store `label_lng` and `label_lat`.
- Enriches properties with civilization lineage, culture groups, and border precision ratings.

### Endpoints
- `GET /api/eras`: Returns list of all 36 historical eras sorted chronologically with metadata and feature counts.
- `GET /api/eras/:slug/geojson`: Returns GeoJSON `FeatureCollection` with simplified geometries and label centroids.

---

## 🧪 Verification & Development Commands

Always run tests and verify the build when making changes:

```bash
# Run Vitest test suite
npm test

# Typecheck and build production bundle
npm run build

# Start development servers (frontend + backend)
npm run dev
```

---

## 🎯 Best Practices for Agents Modifying this Codebase

1. **Decoupling**: Keep `src/features/globe/` independent from backend details; pass configuration through props.
2. **Animation Loop Safety**: When adding dynamic props to `HistoricalGlobe`, use `useRef` to sync props to the 60fps render loop without triggering full WebGL teardown/reconstruction.
3. **Responsive UI**: Preserve glassmorphic styling, responsive media queries (`max-width: 768px`), and layout offsets (`.globe-viewport`).
4. **Testing**: Add or update unit tests in `*.test.ts` whenever helper functions, geometric calculations, or layout algorithms are modified.
