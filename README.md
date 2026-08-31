# Earth Browser

An interactive 3D WebGL historical Earth browser and atlas visualizing world country, culture, and empire boundaries across 53 historical eras (from 123,000 BCE to 2010 CE).

Built with **Three.js**, **ThreeGlobe**, **React 18**, **PostGIS (PostgreSQL)**, **Express**, and **Vite**.

---

## Key Architecture & Highlights

- **Decoupled 3D Globe Visualizer (`src/features/globe`)**: Pure, props-driven React component with zero backend/GraphQL coupling. Liftable directly into any host application or separate library.
- **Vertical Scrollable Timeline**: Left-side historical scrubber spanning 53 eras with dot markers, clearly visible years, truncated labels, active era overview, step navigation, and automatic smooth scrolling.
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
*(Database running on `localhost:5432` with credentials `postgres:postgres@localhost:5432/world`)*

### 4. Setup Schema & Ingest Historical Datasets
Run migrations and ingest all 53 GeoJSON seed files into PostGIS:
```bash
npm run db:setup
```
*(or run separately: `npm run migrate` then `npm run db:ingest`)*

### 5. Start the Application
Start both the backend API (port `3000`) and the Vite frontend dev server (port `1234`) concurrently:
```bash
npm start
```
*(or `npm run dev`)*

Open your browser at: **`http://localhost:1234`**

---

## Project Structure

```
earth-browser/
├── migrations/                 # Knex DDL database schema migrations
│   └── seed/                   # Raw historical GeoJSON datasets (53 eras)
├── src/
│   ├── app/                    # Application shell & layout
│   │   ├── App.tsx             # Main React application layout
│   │   └── App.css             # Layout styling (viewport offsets, headers)
├── components/             # Reusable UI components
│   │   ├── Timeline.tsx        # Vertical scrollable left timeline panel with dot markers
│   │   ├── Timeline.css        # Timeline panel styling
│   │   ├── CountryDrawer.tsx   # Country details / culture inspector side drawer
│   │   ├── CountryDrawer.css   # Country drawer styling
│   │   ├── ControlsOverlay.tsx # Visual appearance settings (altitude, opacity, labels)
│   │   └── ControlsOverlay.css # Visual settings overlay styling
│   ├── features/
│   │   └── globe/              # Standalone, embeddable 3D Globe package
│   │       ├── HistoricalGlobe.tsx # Pure ThreeGlobe WebGL visualizer
│   │       ├── labels.ts       # 2D Screen-space non-overlapping label projection & collision engine
│   │       ├── polygonMaterials.ts # Three.js polygon cap materials & subjugation stripes
│   │       ├── colors.ts       # Culture color palette and precision resolvers
│   │       ├── textures.ts     # Earth textures (Marble, Dark, Day, Night)
│   │       ├── types.ts        # Globe component props & domain types
│   │       └── index.ts        # Public export
│   ├── server/                 # Backend services
│   │   ├── db.ts               # PostgreSQL connection pool
│   │   ├── api.ts              # Clean REST endpoints (/api/eras, /api/eras/:slug/geojson)
│   │   ├── ingest.ts           # Idempotent GeoJSON -> PostGIS ETL CLI
│   │   └── eraMetadata.ts      # Chronological historical era catalog (53 eras)
│   ├── services/
│   │   └── api.ts              # Frontend API client with in-memory caching
│   ├── types/                  # Shared GeoJSON & Era types
│   └── index.tsx               # Client entrypoint
├── server.ts                   # Express server entry point
├── knexfile.ts                 # Database migration config
├── vite.config.ts              # Frontend bundler & API proxy
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

- `npm run dev` / `npm start`: Runs both backend and frontend development servers.
- `npm run server:dev`: Runs the Express backend server with live reload via `tsx`.
- `npm run client:dev`: Runs Vite frontend development server on port 1234.
- `npm run db:setup`: Runs migrations, ingests all GeoJSON datasets into PostGIS, and exports static JSON.
- `npm run db:ingest`: Re-ingests all GeoJSON seed files into PostGIS.
- `npm run db:export`: Exports PostGIS data to `public/data/` for static site hosting.
- `npm run build`: Typechecks and compiles production bundle to `dist/`.
- `npm run build:static`: Runs `db:export` and compiles static bundle to `dist/`.
- `npm test`: Runs Vitest unit test suite.

---

## Static Site & Bucket Deployment

Earth Browser can be deployed as a 100% static site with zero backend or database requirements (e.g. to AWS S3, Cloudflare Pages, GitHub Pages, or Google Cloud Storage):

1. Run the static data export:
   ```bash
   npm run db:export
   ```
2. Build the static site bundle:
   ```bash
   npm run build
   ```
3. Deploy the contents of the `dist/` directory to any static file hosting or bucket. The bundle is site-agnostic and supports root domains as well as arbitrary subpath deployments.


---

## Data Sources & Attribution


The historical world boundary and sovereign territory datasets visualized across all 53 eras are sourced from the **[historical-basemaps](https://github.com/aourednik/historical-basemaps)** project.

- **Data Repository**: [aourednik/historical-basemaps](https://github.com/aourednik/historical-basemaps/tree/master/geojson)
- **Author & Cartographer**: **André Ourednik** ([ourednik.info](https://ourednik.info/historicalmaps/))
- **License**: [GNU General Public License v3.0 (GPL-3.0)](https://github.com/aourednik/historical-basemaps/blob/master/LICENSE)
- **Planetary Imagery**: NASA Earth Observatory / Visible Earth (Public Domain)

We gratefully acknowledge André Ourednik and the contributors of `historical-basemaps` for their dedicated research and open-source cartographic work digitizing historical global frontiers.

