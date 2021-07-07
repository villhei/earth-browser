import { Knex } from "knex"

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("features", (table) => {
    table.specificType("bounds", "geometry")
  })

  await knex.raw(`
    update features 
    set bounds = st_envelope(fg.geometry) 
    from feature_geometries fg
    where features.id = fg."featureID" 
    `)
  await knex.schema.alterTable("features", (table) => {
    table.dropColumn("bbox")
    table.renameColumn("bounds", "bbox")
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("features", (table) => {
    table.dropColumn("bounds")
    table.json("bbox")
  })
}
