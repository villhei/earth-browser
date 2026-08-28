# Earth Browser 🌍

An interactive 3D WebGL historical Earth browser and atlas visualizing world country, culture, and empire boundaries across 24 historical eras (from 2000 BCE to the Modern Era).

Built with **Three.js**, **ThreeGlobe**, **React 18**, **PostGIS (PostgreSQL)**, **Express**, and **Vite**.

---

## 🌟 Key Architecture & Highlights

- **Decoupled 3D Globe Visualizer (`src/features/globe`)**: Pure, props-driven React component with zero backend/GraphQL coupling. Liftable directly into any host application or separate library.
- **Radically Simple Tooling**: Replaced heavy PostGraphile + Apollo Client + GraphQL Code Generator with lightweight REST/GeoJSON endpoints and native `fetch` caching.
- **High-Performance PostGIS Data Pipeline**:
  - Separates DDL schema migrations from idempotent data ingestion (`npm run db:ingest`).
  - Precomputes surface centroids (`ST_PointOnSurface`) for pixel-perfect label placement inside complex geometries.
  - Multi-resolution geometry simplification (`ST_SimplifyPreserveTopology`) for smooth rendering.
  - Spatial indexing with GiST.
- **Interactive Historical Timeline**: Chronological scrubber across 24 historical periods with territory counts, descriptions, quick selectors, and country inspector drawer.

---

## 🚀 Quickstart & Setup

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
Run migrations and ingest all 24 GeoJSON seed files into PostGIS:
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

## 📁 Project Structure

```
earth-browser/
├── migrations/                 # Knex DDL database schema migrations
│   └── seed/                   # Raw historical GeoJSON datasets (24 eras)
├── src/
│   ├── app/                    # Application shell & layout
│   ├── components/             # Reusable UI components
│   │   ├── Timeline.tsx        # Interactive historical era timeline scrubber
│   │   ├── CountryDrawer.tsx   # Country details / inspector side drawer
│   │   └── ControlsOverlay.tsx # Visual appearance settings (texture, altitude, opacity)
│   ├── features/
│   │   └── globe/              # Standalone, embeddable 3D Globe package
│   │       ├── HistoricalGlobe.tsx # Pure ThreeGlobe WebGL visualizer
│   │       ├── textures.ts     # Earth textures (Marble, Dark, Day, Night)
│   │       ├── colors.ts       # Flag & historical culture color resolvers
│   │       ├── types.ts        # Globe component props & domain types
│   │       └── index.ts        # Public export
│   ├── server/                 # Backend services
│   │   ├── db.ts               # PostgreSQL connection pool
│   │   ├── api.ts              # Clean REST endpoints (/api/eras, /api/eras/:slug/geojson)
│   │   ├── ingest.ts           # Idempotent GeoJSON -> PostGIS ETL CLI
│   │   └── eraMetadata.ts      # Chronological historical era catalog
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

## 🔌 Using the Globe in a Separate Solution

The 3D Globe visualizer is completely decoupled and accepts pure GeoJSON data:

```tsx
import { HistoricalGlobe, GlobeTexture } from './features/globe';

export function MyEmbeddedGlobe({ geoJsonData }) {
  return (
    <HistoricalGlobe
      data={geoJsonData}
      texture={GlobeTexture.EARTH_BLUE_MARBLE}
      layerAltitude={0.006}
      opacity={0.6}
      onFeatureClick={(feature) => {
        console.log('Clicked country:', feature?.properties?.name);
      }}
    />
  );
}
```

---

## 🛠 Available Scripts

- `npm run dev` / `npm start`: Runs both backend and frontend development servers.
- `npm run server:dev`: Runs the Express backend server with live reload via `tsx`.
- `npm run client:dev`: Runs Vite frontend development server on port 1234.
- `npm run db:setup`: Runs migrations and ingests all GeoJSON datasets.
- `npm run db:ingest`: Re-ingests all GeoJSON seed files into PostGIS.
- `npm run migrate`: Runs pending database migrations.
- `npm run build`: Typechecks and compiles production bundle to `dist/`.
- `npm test`: Runs Vitest unit test suite.
