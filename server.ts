import http from "http"
import { postgraphile } from "postgraphile"

const serverPort = process.env.PORT || 3000
http
  .createServer(
    postgraphile(
      process.env.DATABASE_URL ||
        "postgres://postgres:postgres@localhost:5432/world",
      "public",
      {
        watchPg: true,
        graphiql: true,
        enhanceGraphiql: true,
        pgDefaultRole: "default_role",
      }
    )
  )
  .listen(serverPort)

console.log(`Listening to ${serverPort}`)
