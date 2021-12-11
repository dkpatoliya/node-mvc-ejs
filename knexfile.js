// Update with your config settings.
require("dotenv").config();

const { DB_CLIENT, DB_DATABASE, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;


module.exports = {

    development: {
        client: DB_CLIENT,
        connection: {
            database: DB_DATABASE,
            user: DB_USERNAME,
            password: DB_PASSWORD,
            host: DB_HOST,
            port: DB_PORT,
            timezone     : "utc",
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            directory: __dirname + "/src/knex/migrations",
        },
        seeds: {
            directory: __dirname + "/src/knex/seeds"
        }
    },

    staging: {
        client: DB_CLIENT,
        connection: {
            database: DB_DATABASE,
            user: DB_USERNAME,
            password: DB_PASSWORD,
            host: DB_HOST,
            port: DB_PORT,
        },
        pool: {
            min: 2,
            max: 10
        },

        migrations: {
            directory: __dirname + "/src/knex/migrations",
        },
        seeds: {
            directory: __dirname + "/src/knex/seeds"
        }
    },

    production: {
        client: DB_CLIENT,
        connection: {
            database: DB_DATABASE,
            user: DB_USERNAME,
            password: DB_PASSWORD,
            host: DB_HOST,
            port: DB_PORT,
        },
        pool: {
            min: 2,
            max: 10
        },

        migrations: {
            directory: __dirname + "/src/knex/migrations",
        },
    }

};
