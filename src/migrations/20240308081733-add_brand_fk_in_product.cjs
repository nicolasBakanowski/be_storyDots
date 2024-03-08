'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('products', 'id_brands', {
      type: Sequelize.INTEGER,
      allowNull: true, 
      references: {
        model: 'brands', 
        key: 'id',     
      },
      onUpdate: 'CASCADE', 
      onDelete: 'SET NULL',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('products', 'id_brands');
  },
};
