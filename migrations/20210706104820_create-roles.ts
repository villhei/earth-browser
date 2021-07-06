import { Knex } from "knex"

const hideTables = ["migrations", "migrations_lock", "countries_import"]

export async function up(knex: Knex): Promise<void> {
  await knex.raw("create role default_role;")

  await knex.raw("grant select on datasets to default_role;")
  await knex.raw("grant select on features to default_role;")
  await knex.raw("grant select on properties to default_role;")

  for (const table of hideTables) {
    await knex.schema.table(table, (table) => {
      table.comment("@omit")
    })
  }
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw("revoke select on datasets from default_role;")
  await knex.raw("revoke select on features from default_role;")
  await knex.raw("revoke select on properties from default_role;")
  await knex.raw("drop role default_role;")
  for (const table of hideTables) {
    await knex.schema.table(table, (table) => {
      table.comment("")
    })
  }
}
