'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('brands', [
      {
        name: 'Marca 1',
        logo_url: 'https://source.unsplash.com/random/280x420',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Marca 2',
        logo_url: 'https://source.unsplash.com/random/280x420',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Marca 3',
        logo_url: 'https://source.unsplash.com/random/280x420',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('brands', null, {});
  },
};
