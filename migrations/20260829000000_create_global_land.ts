import { Knex } from "knex"

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    CREATE TABLE IF NOT EXISTS global_land (
      id SERIAL PRIMARY KEY,
      geom GEOMETRY(MultiPolygon, 4326) NOT NULL
    );

    CREATE INDEX IF NOT EXISTS idx_global_land_geom ON global_land USING GIST(geom);
  `)
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw(`
    DROP TABLE IF EXISTS global_land CASCADE;
  `)
}
