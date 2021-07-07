import { Knex } from "knex"

export async function up(knex: Knex): Promise<void> {
  knex.raw('create extension if not exists "postgis')

  await knex.schema.alterTable("feature_geometries", (table) => {
    table.specificType("geometry", "geometry")
  })
  await knex.raw(`
    update feature_geometries set
    geometry = ST_GeomFromGeoJSON(json_build_object('type', type, 'coordinates', coordinates));`)
  await knex.schema.alterTable("feature_geometries", (table) => {
    table.dropColumns("type", "coordinates")
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("feature_geometries", (table) => {
    table.dropColumn("geometry")
    table.enu("type", ["Polygon", "MultiPolygon"])
    table.json("coordinates")
  })
}
