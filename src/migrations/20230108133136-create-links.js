'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('links', { 
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title:{ type: Sequelize.TEXT },
      url:{ 
          type: Sequelize.TEXT,
          allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('links');
  }
};
