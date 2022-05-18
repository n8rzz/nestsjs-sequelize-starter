'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'retailers',
      [
        {
          retailer_name: 'Circuit City',
          is_archived: true,
        },
        {
          retailer_name: 'Best Buy',
          is_archived: false,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('retailers', null, {});
  },
};
