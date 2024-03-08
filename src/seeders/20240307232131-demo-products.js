'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products', [
      {
        name: 'Producto 1',
        description: 'Descripción del Producto 1',
        image_url: 'https://source.unsplash.com/random/800x600',
        price: 19.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Producto 2',
        description: 'Descripción del Producto 2',
        image_url: 'https://source.unsplash.com/random/800x600',
        price: 29.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Producto 3',
        description: 'Descripción del Producto 3',
        image_url: 'https://source.unsplash.com/random/800x600',
        price: 29.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {})
  },
}
