import { Pool, QueryResultRow } from "pg"

const defaultPort = process.env.POSTGRES_PORT || "5432"
const connectionString =
  process.env.DATABASE_URL || `postgres://postgres:postgres@127.0.0.1:${defaultPort}/world`

export const pool = new Pool({
  connectionString,
})

export async function query<T extends QueryResultRow = any>(
  text: string,
  params?: any[]
) {
  return pool.query<T>(text, params)
}

export async function closePool() {
  await pool.end()
}
