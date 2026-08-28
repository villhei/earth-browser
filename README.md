# Earth Browser (Maailma)

3D WebGL Earth browser visualizing historical world country boundaries and geospatial datasets across different eras. Built with Three.js, React 18, Apollo Client, Leva, PostGraphile, Knex, Vite, and PostgreSQL/PostGIS.

---

## Prerequisites

- **Node.js** (v18+ LTS, tested with v22) & **npm**
- **Docker** (or local PostgreSQL with PostGIS extension enabled)

---

## Setup & Running Guide

### 1. Install Dependencies

Install project dependencies cleanly without any legacy flags:

```bash
npm install
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

To start both the PostGraphile backend server (port `3000`) and the Vite frontend development server (port `1234`) concurrently:

```bash
npm start
```
*(or `npm run dev`)*

Alternatively, you can run them separately in different terminal windows:

- **Backend (GraphQL API & GraphiQL explorer):**
  ```bash
  npm run server:dev
  ```
  - GraphQL API: `http://localhost:3000/graphql`
  - GraphiQL IDE: `http://localhost:3000/graphiql`

- **Frontend (Vite Dev Server with HMR):**
  ```bash
  npm run client:dev
  ```
  - Earth Browser Web App: `http://localhost:1234`

### 6. Run Tests

To run unit tests with Vitest:

```bash
npm test
```

### 7. Production Build & Preview

To typecheck and bundle the production assets into `dist/`:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## Architecture & Modern Tooling

- **Frontend Bundler**: [Vite](https://vitejs.dev/) with `@vitejs/plugin-react` for instant HMR and optimized production bundling.
- **UI & State**: [React 18](https://react.dev/) using `createRoot` and [Leva](https://github.com/pmndrs/leva) by Pmndrs for the 3D controls GUI.
- **3D Geospatial Engine**: [Three.js](https://threejs.org/) (ESM addons) and [three-globe](https://github.com/vasturiano/three-globe) for WebGL globe rendering, country polygons, and era-based textures.
- **Data & GraphQL**: [Apollo Client 3](https://www.apollographql.com/docs/react/) with [GraphQL Code Generator v5](https://the-guild.dev/graphql/codegen) (`codegen.ts`) generating TypeScript hooks.
- **Backend & Database**: Express server mounting [PostGraphile](https://www.graphile.org/postgraphile/) run via [tsx](https://github.com/privatenumber/tsx), connecting to PostgreSQL with PostGIS through [Knex 3](https://knexjs.org/).

