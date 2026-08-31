import { Knex } from "knex"

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    ALTER TABLE era_features
      ADD COLUMN IF NOT EXISTS border_precision SMALLINT,
      ADD COLUMN IF NOT EXISTS part_of VARCHAR(255),
      ADD COLUMN IF NOT EXISTS subject_to VARCHAR(255);

    CREATE INDEX IF NOT EXISTS idx_era_features_border_precision ON era_features(border_precision);
    CREATE INDEX IF NOT EXISTS idx_era_features_part_of ON era_features(part_of);
    CREATE INDEX IF NOT EXISTS idx_era_features_subject_to ON era_features(subject_to);
  `)
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw(`
    DROP INDEX IF EXISTS idx_era_features_subject_to;
    DROP INDEX IF EXISTS idx_era_features_part_of;
    DROP INDEX IF EXISTS idx_era_features_border_precision;

    ALTER TABLE era_features
      DROP COLUMN IF EXISTS subject_to,
      DROP COLUMN IF EXISTS part_of,
      DROP COLUMN IF EXISTS border_precision;
  `)
}
