'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName: {
        type: Sequelize.STRING
      },
      ans1: {
        type: Sequelize.INTEGER
      },
      ans2: {
        type: Sequelize.INTEGER
      },
      ans3: {
        type: Sequelize.INTEGER
      },
      ans4: {
        type: Sequelize.INTEGER
      },
      ans5: {
        type: Sequelize.INTEGER
      },
      ans6: {
        type: Sequelize.INTEGER
      },
      ans7: {
        type: Sequelize.INTEGER
      },
      ans8: {
        type: Sequelize.INTEGER
      },
      ans9: {
        type: Sequelize.INTEGER
      },
      ans10: {
        type: Sequelize.INTEGER
      },
      score: {
        type: Sequelize.INTEGER
      },
      time: {
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
    await queryInterface.dropTable('users');
  }
};