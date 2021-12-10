"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("SupplierSupplyInvoices", {
      supplyInvoiceID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      supplyInvoiceUUID: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      total: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      paid: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      outStanding: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      dueDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      fileTitle: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      filePath: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: null,
      },
      supplierSupplyID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "SupplierSupply",
          key: "supplierSupplyID",
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
    await queryInterface.dropTable("SupplierSupplyInvoices");
  },
};
