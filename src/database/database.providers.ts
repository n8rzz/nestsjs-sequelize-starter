import { Sequelize } from 'sequelize-typescript';
import { databaseConfig } from './database.constants';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const config =
        databaseConfig[process.env.NODE_ENV] ?? databaseConfig.development;

      const sequelize = new Sequelize(config);

      sequelize.addModels([]);

      return sequelize;
    },
  },
];
