import { Knex } from "knex"

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("datasets", (table) => {
    table.dropColumn("features")
  })
  await knex.schema.alterTable("features", (table) => {
    table.dropColumn("properties")
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("datasets", (table) => {
    table.json("features")
  })
  await knex.schema.alterTable("features", (table) => {
    table.json("properties")
  })
}
