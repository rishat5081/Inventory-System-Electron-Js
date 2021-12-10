"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("InvoiceDetails", {
      invoiceDetailsID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      invoiceDetailsUUID: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      invoiceDetailsTitle: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      invoiceDetailsNotes: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: null,
      },
      unitPrice: {
        type: Sequelize.FLOAT,
        allowNull: true,
        defaultValue: null,
      },
      Size: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null,
      },
      Quantity: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null,
      },
      Discount: {
        type: Sequelize.FLOAT,
        allowNull: true,
        defaultValue: null,
      },
      ShippingCost: {
        type: Sequelize.FLOAT,
        allowNull: true,
        defaultValue: null,
      },
      DueDate: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null,
      },
      Status: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      Note: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: null,
      },
      invoiceID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Invoice",
          key: "invoiceID",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
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
    await queryInterface.dropTable("InvoiceDetails");
  },
};
