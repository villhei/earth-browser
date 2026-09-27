# Earth Browser

An interactive 3D WebGL historical Earth browser and atlas visualizing world country, culture, and empire boundaries across historical eras (from 123,000 BCE to 2010 CE).

Built with **Three.js**, **ThreeGlobe**, **React 18**, **PostGIS (PostgreSQL)**, **Express**, and **Vite**.

---

## Key Architecture & Highlights

- **Decoupled 3D Globe Visualizer (`src/features/globe`)**: Pure, props-driven React component with zero backend/GraphQL coupling. Liftable directly into any host application or separate library.
- **Vertical Scrollable Timeline**: Left-side historical scrubber spanning historical eras with epoch accordions, dot markers, clearly visible years, truncated labels, active era overview, step navigation, and automatic smooth scrolling.
- **High-Performance 2D Screen-Space Labels**: Fixed-scale canvas labels with AABB collision resolution, horizon culling, centroid calculation on largest landmasses, configurable font sizes (default 14px), and appearance spacing tolerances.
- **Curvature-Matching Precision Borders**: Custom border ribbon geometry matching sphere surface curvature, scaled according to border precision ratings.
- **Radically Simple Tooling**: Lightweight REST/GeoJSON endpoints with native `fetch` caching and fast Vite development server.
- **High-Performance PostGIS Data Pipeline**:
  - Separates DDL schema migrations from idempotent data ingestion (`npm run db:ingest`).
  - Precomputes surface centroids (`ST_PointOnSurface`) for pixel-perfect label placement inside complex geometries.
  - Multi-resolution geometry simplification (`ST_SimplifyPreserveTopology`) for smooth rendering.
  - Spatial indexing with GiST.

---

## Quickstart & Setup

### 1. Prerequisites
- **Node.js** (v18+ LTS, tested with v22)
- **Docker** (for PostGIS container)

### 2. Install Dependencies
```bash
npm install
```

### 3. Start PostGIS Database
```bash
docker compose up -d
```
*(Database running on `localhost:5432` with credentials `postgres:postgres@localhost:5432/world`. If port 5432 is already bound by a host PostgreSQL server, configure `POSTGRES_PORT=5434` and `DATABASE_URL=postgres://postgres:postgres@127.0.0.1:5434/world` in `.env`)*

### 4. Setup Schema & Ingest Historical Datasets
Run migrations, ingest GeoJSON seed files into PostGIS, and link all culture metadata batches:
```bash
npm run db:setup
```
*(or run separately: `npm run migrate` then `npm run db:ingest`)*

> **Restoring Missing Metadata**: If country summaries or culture metadata are ever missing in the live dev app (e.g. following a clean database export), re-ingest and re-build with:
> ```bash
> npm run db:ingest
> npm run build
> ```
> Then hard-refresh your browser (`Cmd + Shift + R`).

### 5. Start the Application
Start both the backend API (port `3000`) and the Vite frontend dev server (port `5173`) concurrently:
```bash
npm start
```
*(or `npm run dev`)*

Open your browser at: **`http://localhost:5173`**

### Sharing a view

Select an era and rotate, zoom or pan the globe, then copy the browser URL.
The query string updates automatically and restores the same view when opened
or refreshed, for example `?era=world-1492&camera=0,80,320&target=0,0,0`.
`era` is the dataset slug; `camera` and `target` are Three.js XYZ coordinates.
Missing or invalid values fall back to the default era (1492 CE) and camera.
View changes replace the current history entry so dragging does not fill browser history.

---

## Project Structure

```
earth-browser/
├── data-sources/               # Source datasets, batches, and offline catalogs
│   ├── batches/                # Culture metadata batch JSON files
│   ├── residue/                # Regional inventories of unmapped historical entities
│   ├── textures/               # Paleogeography source shapefiles, bathymetry & docs
│   └── translations/           # Extracted entity string catalogs for localization
├── migrations/                 # Knex DDL database schema migrations
│   └── seed/                   # Raw historical GeoJSON datasets
├── scripts/                    # Maintenance, ingestion, and generation tooling
│   ├── generators/             # Culture metadata batch generator scripts
│   ├── culture_metadata_status.ts # Culture metadata completion status reporter
│   ├── export_cultures_list.ts # Dynamic culture catalog & statistics exporter
│   ├── extract-translatable-strings.ts # Offline translation string extractor
│   ├── generate_prehistoric_textures.py # Bathymetry & ice sheet texture pipeline
│   ├── partition_residue_continents.ts # Unmapped entity partitioner CLI
│   ├── seed_culture_metadata_batch.ts # CLI batch seeder wrapper
│   └── update_geojson_datasets.ts # Upstream dataset sync and validation
├── src/
│   ├── app/                    # Application shell & layout
│   │   ├── App.tsx             # Main React application layout & state orchestration
│   │   └── App.css             # Layout styling (viewport offsets, headers)
│   ├── components/             # Reusable UI components
│   │   ├── ActiveEraBanner.tsx # Top era indicator banner & chronological pill
│   │   ├── Attribution.tsx     # Attribution button & modal dialog (Credits & Sources)
│   │   ├── ControlsOverlay.tsx # Visual appearance settings (altitude, opacity, labels, theme, lang)
│   │   ├── CountryDrawer.tsx   # Country details / culture inspector side drawer
│   │   ├── EraDetailsModal.tsx # Full-screen modal with detailed historical era context
│   │   ├── LanguageToggle.tsx  # Bilingual toggle control (EN / FI)
│   │   └── Timeline.tsx        # Vertical timeline with epoch accordions & dot markers
│   ├── earthTextures/          # Bundled offline Earth texture images & paleogeographic masks
│   ├── features/
│   │   └── globe/              # Standalone, embeddable 3D Globe package
│   │       ├── HistoricalGlobe.tsx # Pure ThreeGlobe WebGL visualizer
│   │       ├── labels.ts       # 2D Screen-space non-overlapping label projection & collision engine
│   │       ├── polygonMaterials.ts # Three.js polygon cap materials & subjugation stripes
│   │       ├── colors.ts       # Culture color palette and precision resolvers
│   │       ├── textures.ts     # Earth textures resolver (Marble, Dark, Day, Night, Prehistoric)
│   │       ├── types.ts        # Globe component props & domain types
│   │       └── index.ts        # Public export
│   ├── i18n/                   # Bilingual localization system (English & Finnish)
│   │   ├── context.tsx         # LanguageProvider & useLanguage hook
│   │   ├── translations.ts     # Static UI string dictionary
│   │   └── types.ts            # Supported languages and translation schemas
│   ├── server/                 # Backend services & spatial query engine
│   │   ├── api.ts              # Clean REST endpoints (/api/eras, /api/eras/:slug/geojson)
│   │   ├── cultureSeeder.ts    # Batch upsert & feature linkage engine
│   │   ├── db.ts               # PostgreSQL connection pool
│   │   ├── eraMetadata.ts      # Chronological historical era catalog
│   │   ├── exportStatic.ts     # Serverless static JSON exporter
│   │   ├── ingest.ts           # Idempotent GeoJSON -> PostGIS ETL CLI
│   │   └── queries.ts          # Shared PostGIS FeatureCollection SQL query builder
│   ├── services/
│   │   └── api.ts              # Frontend API client with in-memory caching
│   ├── styles/                 # Design tokens, theme palettes, and global CSS variables
│   ├── types/                  # Shared GeoJSON & Era types
│   └── index.tsx               # Client entrypoint
├── server.ts                   # Express server entry point
├── knexfile.ts                 # Database migration config
├── vite.config.ts              # Frontend bundler with code-splitting & API proxy
└── package.json
```

---

## Using the Globe in a Separate Solution

The 3D Globe visualizer is completely decoupled and accepts pure GeoJSON data:

```tsx
import { HistoricalGlobe, GlobeTexture } from './features/globe';

export function MyEmbeddedGlobe({ geoJsonData }) {
  return (
    <HistoricalGlobe
      data={geoJsonData}
      texture={GlobeTexture.EARTH_BLUE_MARBLE}
      layerAltitude={0.005}
      opacity={0.55}
      showLabels={true}
      labelSize={14}
      labelTolerance={10}
      onFeatureClick={(feature) => {
        console.log('Clicked country:', feature?.properties?.name);
      }}
    />
  );
}
```

---

## Available Scripts

- `npm run dev` / `npm start`: Runs both backend and frontend development servers.
- `npm run server:dev`: Runs the Express backend server with live reload via `tsx`.
- `npm run client:dev`: Runs Vite frontend development server on port 5173.
- `npm run data:update`: Fetches and synchronizes updated GeoJSON datasets from the upstream `historical-basemaps` repository into `migrations/seed/`.
- `npm run db:setup`: Runs migrations, ingests GeoJSON datasets into PostGIS, links all culture metadata batches, and exports static JSON.
- `npm run db:ingest`: Re-ingests GeoJSON seed files into PostGIS, repairs geometries, computes surface centroids & elevation tiers, and links culture metadata batches into `culture_metadata` and `era_features`.
- `npm run culture:status`: Checks culture metadata coverage and linkage completion status across historical eras.
- `npm run culture:residue`: Partitions residual unmapped historical entities by continent for batch drafting.
- `npm run i18n:extract`: Scans GeoJSON datasets and extracts translatable territory names and entities into `data-sources/translations/`.
- `npm run db:export`: Exports PostGIS data (including embedded `culture_metadata`) to `public/data/` for static site hosting and dev mode.
- `npm run db:reset`: Rolls back migrations and runs a fresh database setup.
- `npm run build`: Single command that exports data from PostGIS, runs type checks, and compiles production bundle to `docs/`.
- `npm test`: Runs Vitest unit test suite.

---

## Static Site & GitHub Pages Deployment

Earth Browser compiles to the `docs/` directory, making it directly deployable to GitHub Pages (or AWS S3, Cloudflare Pages, etc.) with zero backend or database requirements:

1. Build the static bundle:
   ```bash
   npm run build
   ```
2. For **GitHub Pages**:
   - In your GitHub repository settings, go to **Settings > Pages**.
   - Under **Build and deployment > Source**, select **Deploy from a branch**.
   - Choose your branch (e.g. `main`) and select the `/docs` folder.
   - Click **Save**. The site will be live at `https://<username>.github.io/<repository-name>/`.



---

## Prehistoric Earth Textures & Bathymetry Pipeline

Earth Browser features era-accurate Earth textures with realistic bathymetry-based coastline expansions (Doggerland, Sundaland, Beringia, Sahul) and reconstructed glacial ice sheets across human prehistory:

- **123,000 BCE** (*Eemian*): Flooded lowlands (+7m sea level), reduced polar margin ice.
- **10,000 BCE** (*Younger Dryas*): -55m sea level, exposed continental shelves (Doggerland, Sundaland, Beringia, Sahul), Baltic Ice Lake proglacial basin, and retreating Laurentide/Scandinavian ice sheets.
- **8,000 BCE** (*Early Neolithic*): -25m sea level, Doggerland archipelago, retreating North American ice margin.
- **5,000 BCE** (*Green Sahara*): African Humid Period, Lake Mega-Chad (~350,000 km²), Mid-Holocene ice sheet margins.
- **4,000 BCE & 3,000 BCE**: Reconstructed regional glacial ice sheet stages (NADI-1).

Includes interactive **Prehistoric Terrain Highlights** with Land Bridges and Coastlines focus modes, dynamic GLSL pulse shader animation (`✦ Pulse Highlight`), and experimental regional ice sheet overlays.

See [data-sources/textures/README.md](data-sources/textures/README.md) for data sources, algorithms, and instructions on generating and iterating on custom textures using [generate_prehistoric_textures.py](scripts/generate_prehistoric_textures.py).

---

## Data Sources & Attribution

The historical world boundary and sovereign territory datasets visualized across historical eras are sourced from the **[historical-basemaps](https://github.com/aourednik/historical-basemaps)** project.

- **Sovereign Boundaries**: [aourednik/historical-basemaps](https://github.com/aourednik/historical-basemaps/tree/master/geojson) by **André Ourednik** ([ourednik.info](https://ourednik.info/historicalmaps/)), GPL-3.0.
- **Elevation & Bathymetry**: NOAA NCEI ETOPO 2022 (Public Domain).
- **North American Ice Sheets**: Geological Survey of Canada (Dyke et al., 2004).
- **Eurasian Ice Sheets**: DATED-1 (Hughes et al., 2015, PANGAEA, CC-BY-3.0).
- **Planetary Imagery**: NASA Earth Observatory / Visible Earth (Public Domain).

We gratefully acknowledge André Ourednik and the contributors of `historical-basemaps` for their dedicated research and open-source cartographic work digitizing historical global frontiers.

