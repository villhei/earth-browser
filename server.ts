import express from "express"
import cors from "cors"

import { postgraphile } from "postgraphile"

const serverPort = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(
  postgraphile(
    process.env.DATABASE_URL ||
      "postgres://postgres:postgres@localhost:5432/world",
    "public",
    {
      watchPg: true,
      graphiql: true,
      dynamicJson: true,
      enhanceGraphiql: true,
      exportGqlSchemaPath: "src/graphql/schema.graphql",
      pgDefaultRole: "default_role",
      appendPlugins: [require("@graphile-contrib/pg-simplify-inflector")],
    }
  )
)

app.listen(serverPort)

console.log(`Listening to ${serverPort}`)
