import Knex from "knex"
import path from "path"
import fs from "fs"

const knex = Knex({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "postgres",
    database: "world",
  },
  migrations: {
    tableName: "migrations",
  },
})

async function run() {
  const countryTable = knex("countries_import")

  const dataPath = path.join(__dirname, "db", "seed")
  const files = fs.readdirSync(dataPath)
  console.log("files", files)

  for (const name of files) {
    const filePath = path.join(dataPath, name)
    const file = fs.readFileSync(filePath)
    try {
      const content = JSON.parse(file.toString())
      await countryTable.insert({ content })
    } catch (e) {
      console.log(filePath, e)
      throw e
    }
  }
}

run()
