// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL || {
      host: "localhost",
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
