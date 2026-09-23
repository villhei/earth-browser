# Earth Browser — Housekeeping & Refactoring Action Plan

**Target**: `earth-browser`  
**Generated**: September 2026  
**Status**: Ready for execution  
**Reference Review**: [`housekeeping_review.md`](./housekeeping_review.md)  

This action plan provides a step-by-step roadmap for housekeeping, dead code removal, performance optimization, and architectural cleanup across future development sessions.

---

## Phase Overview & Estimated Impact

| Phase | Category | Scope | Estimated Impact |
| :---: | :--- | :--- | :--- |
| **Phase 1** | Storage & Git | Purge 108 UUID JSON files & update static exporter | **-120 MB repo/build size reduction** |
| **Phase 2** | Dead Code & Hygiene | Remove unused packages, orphan files, duplicate listeners | Cleaner dependency graph, fewer wasted CPU cycles |
| **Phase 3** | Bundle Performance | Implement Vite `manualChunks` code-splitting | Eliminates 1.95 MB monolithic JS bundle warning |
| **Phase 4** | Component Architecture | Adopt `LanguageProvider`, eliminate 7 levels of prop-drilling | Cleaner React tree and simpler component interfaces |
| **Phase 5** | Backend & Script Structure | Deduplicate PostGIS query & decouple `ingest.ts` from `scripts/` | Prevents query drift; organizes `scripts/` |
| **Phase 6** | Documentation & Links | Fix `/home/ville` links, update `README.md` & `AGENTS.md` | Accurate, portable developer guides |

---

## Phase 1: Critical Storage & Git Cleanup (P1)

### 1.1 Update Static Exporter (`src/server/exportStatic.ts`)
- [x] In `exportStaticData()`:
  - Remove generation of UUID files (`path.join(erasDir, `${era.id}.json`)`). Write only `${era.slug}.json`.
  - Add pre-export cleanup of `erasDir` to delete any existing `.json` files before exporting, preventing stale or orphan files from accumulating.
- [x] Fix `"build:static"` script in `package.json`:
  - Change `"build:static": "npm run build"` (since `"build"` already runs `npm run db:export`).

### 1.2 Purge Obsolete UUID Files from Git and Disk
- [x] Remove 108 historical UUID files from git:
  ```bash
  git rm public/data/eras/*-*-*-*-*.json
  git rm docs/data/eras/*-*-*-*-*.json
  ```
- [x] Re-export static data to verify only 54 slug files are generated:
  ```bash
  npm run db:export
  ```
- [x] Verify file count:
  ```bash
  ls public/data/eras | wc -l # Must output exactly 54
  ```

---

## Phase 2: Dependency & Dead Code Pruning (P2)

### 2.1 Remove Unused Dependencies
- [x] Uninstall `country-flag-colors`:
  ```bash
  npm uninstall country-flag-colors
  ```
- [x] Remove `declare module "country-flag-colors"` from `src/types/declarations.d.ts`.
- [x] In `src/features/globe/HistoricalGlobe.tsx`:
  - Replace `return alpha(sideColor, 0.4)` (line 933) with native Three.js or standard hex/rgba alpha conversion.
  - Uninstall `color-alpha`:
    ```bash
    npm uninstall color-alpha @types/color-alpha
    ```
  - Remove `declare module "color-alpha"` from `src/types/declarations.d.ts`.

### 2.2 Event Listener & CSS Cleanup
- [x] In `src/features/globe/HistoricalGlobe.tsx`:
  - Remove redundant `mousedown`, `mousemove`, `mouseup`, and `mouseleave` event listeners (lines 469–472 and 735–738). Rely solely on modern `pointer*` events.
- [x] In `src/features/globe/polygonMaterials.ts`:
  - Remove `precision` from `cacheKey` (line 85) and `createPolygonMaterial` parameters to avoid creating 3 identical cached materials for each color/opacity combination.
- [x] In `src/app/App.css`:
  - Remove dead CSS classes `.top-controls-bar` (lines 58–73 and 126–130).
- [x] In `src/index.css`:
  - Remove redundant radial gradient on `body` (lines 16–20) that is completely covered by `.app-layout`.
- [x] In `tsconfig.json`:
  - Remove nonexistent `"codegen.ts"` from the `"include"` array.

---

## Phase 3: Production Bundle & Performance Optimization (P2)

### 3.1 Code-Splitting in `vite.config.ts`
- [x] Update `vite.config.ts` to configure Rollup manual chunks:
  ```ts
  build: {
    outDir: "docs",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-three": ["three"],
          "vendor-globe": ["three-globe"],
          "vendor-react": ["react", "react-dom"],
        },
      },
    },
  },
  ```
- [x] Build and verify chunk distribution:
  ```bash
  npx vite build
  ```
  Verified chunk isolation:
  - `vendor-react`: 140.82 kB (gzip: 45.25 kB)
  - `index` (Application code): 202.30 kB (gzip: 62.57 kB)
  - `vendor-three`: 522.15 kB (gzip: 133.43 kB)
  - `vendor-globe`: 1,071.70 kB (gzip: 322.60 kB)
  Application code is reduced from a 1.95 MB monolithic bundle to 202 kB (~62 kB gzipped), and all heavy vendor packages are cleanly isolated into distinct cacheable chunks.

### 3.2 Main-Thread Polygon Sanitization Review
- [x] Evaluated pre-filtering degenerate polygon slivers (`d3-geo.geoArea < 1e-6`) vs PostGIS ingestion/export:
  - Existing client-side `geometrySanitizer.ts` runs in <5ms per era even on the largest dataset (1492 CE with 1,946 features) and is memoized per era dataset.
  - Applying aggressive topology simplification at PostGIS ingest/export could cause boundary gaps/seams between neighboring sovereign states. Client-side sanitization remains the cleanest and safest solution.

---

## Phase 4: Component & Localization Architecture (P3)

### 4.1 Adopt `LanguageProvider` & Context
- [x] In `src/app/App.tsx`:
  - Wrap the component tree with `<LanguageProvider>` from `src/i18n/context.tsx`.
  - Remove local `language` state, `handleLanguageChange` callback, and manual prop-drilling into `ActiveEraBanner`, `CountryDrawer`, `Timeline`, `EraDetailsModal`, `ControlsOverlay`, and `Attribution`.
  - In child components, consume `useLanguage()` directly with optional prop fallback for tests.

### 4.2 Deduplicate `LanguageToggle`
- [x] In `src/components/ControlsOverlay.tsx`:
  - Replace inline language pill button JSX with `<LanguageToggle />` from `src/components/LanguageToggle.tsx`.

### 4.3 Relocate Offline Translation Catalogs
- [x] Move multi-megabyte offline files:
  - From `src/data/translations/` to `data-sources/translations/`.
- [x] Update output path in `scripts/extract-translatable-strings.ts` and test path in `src/features/globe/translations.test.ts`.

---

## Phase 5: Backend & Script Organization (P3)

### 5.1 Deduplicate PostGIS GeoJSON Query
- [ ] Create `src/server/queries.ts` exporting `buildEraGeoJsonQuery(idOrSlugParam: string)`.
- [ ] Refactor both `src/server/api.ts` (lines 50–120) and `src/server/exportStatic.ts` (lines 63–127) to import and share this query function.

### 5.2 Decouple `src/server/ingest.ts` from `scripts/`
- [ ] Move `seed_culture_metadata_batch.ts` logic into `src/server/cultureSeeder.ts`.
- [ ] Update `src/server/ingest.ts` to import `seedAllBatches` from `src/server/cultureSeeder.ts`.
- [ ] Move the 24 `scripts/build_*_batch.ts` files into `scripts/generators/` or archive them.
- [ ] Standardize `seed_culture_metadata_bc500.ts` into a standard `data-sources/batches/` JSON file.

---

## Phase 6: Documentation Refresh & Path Fixes (P3)

### 6.1 Fix Machine-Specific File Links
- [ ] Replace `file:///home/ville/src/web/earth-browser/...` with relative paths in:
  - `README.md` (line 187)
  - `CULTURES.md` (line 7)
  - `scripts/export_cultures_list.ts` (line 108)
  - `CULTURE_METADATA_EXPANSION.md` (multiple lines)

### 6.2 Update Architecture Maps & Guides
- [ ] In `README.md`:
  - Add `src/i18n/`, `src/styles/`, `src/earthTextures/`, and new UI components to the project tree.
- [ ] In `AGENTS.md`:
  - Update codebase map with current modules.
  - Update Section 3 (Timeline) and Section 4 (ControlsOverlay) to accurately describe ActiveEraBanner, Theme selector, and Language toggle.
- [ ] In `CULTURE_METADATA_EXPANSION.md`:
  - Update Section 1.1 to reflect active Finnish localization.

---

## Verification & Sanity Check Suite

After executing any phase, run the standard verification pipeline:

```bash
# 1. Vitest suite (must pass 27/27 files)
npm test

# 2. TypeScript typecheck (zero errors)
npx tsc --noEmit

# 3. Export & production build
npm run build

# 4. Check git status
git status -s
```
