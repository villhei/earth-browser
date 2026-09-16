// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL || {
      host: "127.0.0.1",
      port: Number(process.env.POSTGRES_PORT) || 5432,
      user: "postgres",
      password: "postgres",
      database: "world",
    },
    migrations: {
      tableName: "migrations",
      extension: "ts",
    },
  },
}
