'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Retailers',
      [
        {
          retailerName: 'Circuit City',
          isActive: false,
        },
        {
          retailerName: 'Best Buy',
          isActive: true,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Retailers', null, {});
  },
};
