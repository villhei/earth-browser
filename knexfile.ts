// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
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
