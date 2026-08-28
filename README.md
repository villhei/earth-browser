# Earth Browser (Maailma)

3D WebGL Earth browser visualizing historical world country boundaries and geospatial datasets across different eras. Built with Three.js, React, Apollo Client, PostGraphile, Knex, and PostgreSQL/PostGIS.

---

## Prerequisites

- **Node.js** (v16+ recommended, tested with v22) & **npm**
- **Docker** (or local PostgreSQL with PostGIS extension enabled)

---

## Setup & Running Guide

### 1. Install Dependencies

Because `react-control-panel` and older Apollo CLI dependencies have legacy peer dependency requirements against React 17/GraphQL 15, install dependencies using `--legacy-peer-deps`:

```bash
npm install --legacy-peer-deps
```

### 2. Start PostgreSQL with PostGIS

Start the PostGIS database container:

```bash
docker compose up -d
```

*(Database credentials: `postgres:postgres@localhost:5432/world`)*

### 3. Run Database Migrations

Run Knex migrations to import the historical GeoJSON seed files and create the PostGIS views:

```bash
npm run migrate
```

### 4. (Optional) Run GraphQL Code Generation

To regenerate TypeScript types and Apollo hooks from the GraphQL schema:

```bash
npm run codegen
```

### 5. Start the Application

To start both the PostGraphile backend server (port `3000`) and the Parcel frontend development server (port `1234`):

```bash
npm start
```

Alternatively, you can run them separately in different terminal windows:

- **Backend (GraphQL API & GraphiQL explorer):**
  ```bash
  npm run server
  ```
  - GraphQL API: `http://localhost:3000/graphql`
  - GraphiQL IDE: `http://localhost:3000/graphiql`

- **Frontend (Parcel Dev Server):**
  ```bash
  npx parcel src/index.html
  ```
  - Earth Browser Web App: `http://localhost:1234`

### 6. Production Build

To produce a production bundle in the `dist/` directory:

```bash
npm run build
```

---

## Architecture & Configuration Details

- **Backend (`server.ts`)**: Express server mounting [PostGraphile](https://www.graphile.org/postgraphile/) with `@graphile-contrib/pg-simplify-inflector`. Connects using `DATABASE_URL` (or default `postgres://postgres:postgres@localhost:5432/world`).
- **Database Migrations (`migrations/`)**: 8 Knex migration steps that load 24 historical GeoJSON datasets from `migrations/seed/`, convert geometries into PostGIS geometries, compute bounding boxes, and expose `geojson_datasets` and `geojson_features` views for GraphQL queries.
- **Frontend (`src/`)**:
  - `src/index.tsx` & `src/index.html`: Entry point rendering the React root.
  - `src/app/`: Sets up the Apollo Client provider connecting to `http://localhost:3000/graphql`.
  - `src/mainscreen/`: Loads available dataset descriptions and coordinates control state with the 3D globe.
  - `src/globe/`: Uses `three-globe` and `three` to render the interactive 3D globe with textures, country boundaries, polygon extrusions, and labels.
  - `src/controls/`: Side panel controls to change layers, altitude, opacity, textures (Day, Night, Blue Marble, Dark), and historical eras.
