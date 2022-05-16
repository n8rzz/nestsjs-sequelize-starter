import * as dotenv from 'dotenv';
import { IDatabaseConfig } from './database.types';

dotenv.config();

export const defaultOptions = {
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
};

export const databaseConfig: IDatabaseConfig = {
  development: {
    ...defaultOptions,
    database: process.env.POSTGRES_DB_DEVELOPMENT,
  },
  test: {
    ...defaultOptions,
    database: process.env.POSTGRES_DB_TEST,
  },
  production: {
    ...defaultOptions,
    database: process.env.POSTGRES_DB_PRODUCTION,
  },
};
