import express from "express"
import cors from "cors"
import compression from "compression"
import { apiRouter } from "./src/server/api"

const serverPort = Number(process.env.PORT) || 3000
const serverHost = process.env.HOST || "0.0.0.0"
const app = express()

app.use(compression())
app.use(cors())
app.use(express.json())

// Mount REST API
app.use("/api", apiRouter)

const server = app.listen(serverPort, serverHost, () => {
  console.log(`Earth Browser API Server running on port ${serverPort}`)
  console.log(`   - Eras: http://127.0.0.1:${serverPort}/api/eras`)
  console.log(`   - Health: http://127.0.0.1:${serverPort}/api/health`)
})

process.on("SIGTERM", () => {
  server.close(() => console.log("Server stopped"))
})
