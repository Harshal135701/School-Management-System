'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Students", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      admissionNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },

      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },

      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },

      class: {
        type: Sequelize.STRING,
        allowNull: false
      },

      section: {
        type: Sequelize.STRING,
        allowNull: false
      },

      parentName: {
        type: Sequelize.STRING,
        allowNull: false
      },

      parentMobile: {
        type: Sequelize.STRING,
        allowNull: false
      },

      address: {
        type: Sequelize.TEXT,
        allowNull: false
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

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Students");
  }

};