import * as dotenv from 'dotenv';
import { Dialect, Options } from 'sequelize';
import { IDatabaseConfig } from './database.types';

dotenv.config();

export const defaultOptions: Partial<Options> = {
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT as any,
  dialect: process.env.DB_DIALECT as Dialect,
  define: {
    timestamps: true,
    underscored: true,
  },
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
