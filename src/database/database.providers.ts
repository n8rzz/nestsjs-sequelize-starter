import { Sequelize } from 'sequelize-typescript';
import { Retailer } from '../domain/retailers/entities/retailer.entity';
import { databaseConfig } from './database.constants';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const config =
        databaseConfig[process.env.NODE_ENV] ?? databaseConfig.development;

      const sequelize = new Sequelize(config);

      sequelize.addModels([Retailer]);

      return sequelize;
    },
  },
];
