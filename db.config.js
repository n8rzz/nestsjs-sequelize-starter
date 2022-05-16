/* eslint-disable */
'use strict';
require('dotenv').config();

/**
 * This config should only be consumed and used by the `sequelize-cli`
 *
 * *DO NOT USE WITHIN THE APP*
 */
module.exports = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    database: process.env.POSTGRES_DB_DEVELOPMENT,
  },
  test: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    database: process.env.POSTGRES_DB_TEST,
  },
  production: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    database: process.env.POSTGRES_DB_PRODUCTION,
  },
};
