import { Knex } from "knex"

export async function up(knex: Knex): Promise<void> {
  // 1. Create culture_metadata table
  await knex.raw(`
    CREATE TABLE IF NOT EXISTS culture_metadata (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      slug VARCHAR(128) UNIQUE NOT NULL,
      name VARCHAR(255) NOT NULL,
      name_fi VARCHAR(255),
      native_name VARCHAR(255),
      alternate_names TEXT[] DEFAULT '{}',
      culture_group VARCHAR(128) NOT NULL,
      lineage_id VARCHAR(128),
      historical_period VARCHAR(128),
      year_start INTEGER,
      year_end INTEGER,
      period_label VARCHAR(128),
      period_label_fi VARCHAR(128),
      wikipedia_url_en TEXT,
      wikipedia_url_fi TEXT,
      wikidata_id VARCHAR(32),
      summary_en TEXT,
      summary_fi TEXT,
      capital VARCHAR(255),
      metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      updated_at TIMESTAMPTZ DEFAULT NOW()
    );

    CREATE INDEX IF NOT EXISTS idx_culture_metadata_slug ON culture_metadata(slug);
    CREATE INDEX IF NOT EXISTS idx_culture_metadata_culture_group ON culture_metadata(culture_group);
    CREATE INDEX IF NOT EXISTS idx_culture_metadata_year_span ON culture_metadata(year_start, year_end);
  `)

  // 2. Add foreign key culture_id to era_features
  await knex.raw(`
    ALTER TABLE era_features 
      ADD COLUMN IF NOT EXISTS culture_id UUID REFERENCES culture_metadata(id) ON DELETE SET NULL;

    CREATE INDEX IF NOT EXISTS idx_era_features_culture_id ON era_features(culture_id);
  `)
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw(`
    DROP INDEX IF EXISTS idx_era_features_culture_id;

    ALTER TABLE era_features
      DROP COLUMN IF EXISTS culture_id;

    DROP TABLE IF EXISTS culture_metadata CASCADE;
  `)
}
