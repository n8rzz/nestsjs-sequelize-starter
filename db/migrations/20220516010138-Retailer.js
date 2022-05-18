'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'retailers',
      {
        id: {
          type: Sequelize.UUID,
          allowNull: false,
          autoIncrement: false,
          defaultValue: Sequelize.literal('gen_random_uuid()'),
          unique: true,
          primaryKey: true,
        },
        retailer_name: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        is_archived: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true,
        },
        created_at: {
          type: 'TIMESTAMP',
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
          allowNull: false,
        },
        updated_at: {
          type: 'TIMESTAMP',
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
          allowNull: false,
        },
      },
      {
        freezeTableName: true,
      },
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('retailers');
  },
};
