import { Knex } from "knex"

export async function up(knex: Knex): Promise<void> {
  // Ensure required extensions are active
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "postgis";')

  // 1. Eras / Datasets catalog table
  await knex.raw(`
    CREATE TABLE IF NOT EXISTS eras (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      slug VARCHAR(64) UNIQUE NOT NULL,
      name VARCHAR(128) NOT NULL,
      year_start INTEGER NOT NULL,
      year_end INTEGER,
      year_label VARCHAR(64) NOT NULL,
      description TEXT,
      feature_count INTEGER DEFAULT 0,
      created_at TIMESTAMPTZ DEFAULT NOW()
    );

    CREATE INDEX IF NOT EXISTS idx_eras_year ON eras (year_start);
  `)

  // 2. Era Features table with PostGIS geometry and precomputed centroids
  await knex.raw(`
    CREATE TABLE IF NOT EXISTS era_features (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      era_id UUID NOT NULL REFERENCES eras(id) ON DELETE CASCADE,
      name VARCHAR(255),
      formal_name VARCHAR(255),
      iso_a3 VARCHAR(10),
      properties JSONB NOT NULL DEFAULT '{}'::jsonb,
      geom GEOMETRY(Geometry, 4326) NOT NULL,
      geom_simplified GEOMETRY(Geometry, 4326),
      label_lng FLOAT,
      label_lat FLOAT,
      created_at TIMESTAMPTZ DEFAULT NOW()
    );

    CREATE INDEX IF NOT EXISTS idx_era_features_era_id ON era_features(era_id);
    CREATE INDEX IF NOT EXISTS idx_era_features_geom ON era_features USING GIST(geom);
    CREATE INDEX IF NOT EXISTS idx_era_features_simplified ON era_features USING GIST(geom_simplified);
  `)
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw(`
    DROP TABLE IF EXISTS era_features CASCADE;
    DROP TABLE IF EXISTS eras CASCADE;
  `)
}
