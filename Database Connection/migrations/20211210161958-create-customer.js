"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Customers", {
      customerID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      customerUUID: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: null,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      email: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: null,
      },
      // password: {
      //   type: Sequelize .TEXT,
      //   allowNull: true,
      // },
      contact: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: null,
      },
      address: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: null,
      },
      companyID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Company",
          key: "companyID",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
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
    await queryInterface.dropTable("Customers");
  },
};
