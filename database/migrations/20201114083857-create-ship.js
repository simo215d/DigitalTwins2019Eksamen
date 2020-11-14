'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Ships', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      homedock: {
        type: Sequelize.STRING
      },
      callsignal: {
        type: Sequelize.STRING
      },
      mmsinr: {
        type: Sequelize.INTEGER
      },
      use: {
        type: Sequelize.STRING
      },
      brt / bt: {
        type: Sequelize.INTEGER
      },
      length: {
        type: Sequelize.DOUBLE
      },
      maxPersonnel: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Ships');
  }
};