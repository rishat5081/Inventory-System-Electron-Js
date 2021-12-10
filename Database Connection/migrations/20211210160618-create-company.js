"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Companies", {
      companyID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      companyUUID: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
      },
      companyName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      companyWeb: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      companyPhone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      companyAddress: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      companyLogo: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: null,
      },
      paused: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      deleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Companies");
  },
};
