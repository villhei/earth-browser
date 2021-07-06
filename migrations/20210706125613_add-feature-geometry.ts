import { Knex } from "knex"

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("feature_geometries", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"))
    table
      .uuid("featureID")
      .notNullable()
      .references("id")
      .inTable("features")
      .onDelete("CASCADE")
    table.enu("type", ["Polygon", "MultiPolygon"]).notNullable()
    table.json("coordinates").notNullable()
  })
  await knex("feature_geometries").insert(
    knex.raw(
      "SELECT gen_random_uuid() as id, id as featureID, geometry->>'type' as type, (geometry->>'coordinates')::json as coordinates from features;"
    )
  )
  await knex.raw("grant select on feature_geometries to default_role;")
  await knex.schema.alterTable("features", (table) => {
    table.dropColumn("geometry")
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw("revoke select on feature_geometries from default_role;")
  await knex.schema.dropTable("feature_geometries")
  await knex.schema.alterTable("features", (table) => {
    table.json("geometry")
  })
}
