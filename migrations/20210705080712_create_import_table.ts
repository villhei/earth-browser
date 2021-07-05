import { Knex } from "knex"

import path from "path"
import fs from "fs"

export async function up(knex: Knex): Promise<void> {
  knex.raw('create extension if not exists "uuid-ossp"')

  await knex.schema.createTable("countries_import", (table) => {
    table.json("content")
  })

  const countryTable = knex("countries_import")

  const dataPath = path.join(__dirname, "migrations", "seed")
  const files = fs.readdirSync(dataPath)

  for (const name of files) {
    const filePath = path.join(dataPath, name)
    const file = fs.readFileSync(filePath)
    const content = JSON.parse(file.toString())
    await countryTable.insert({ content })
  }
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("countries_import")
}
