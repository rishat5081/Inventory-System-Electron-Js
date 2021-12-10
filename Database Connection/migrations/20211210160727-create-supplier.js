"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Suppliers", {
      supplierID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      supplierUUID: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      supplierName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      supplierWeb: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: null,
      },
      supplierPhone: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      supplierPosition: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      supplierEmail: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      supplierMobile: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      supplierAddress: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: null,
      },
      supplierLogo: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: null,
      },
      supplierNote: {
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
    await queryInterface.dropTable("Suppliers");
  },
};
