"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Invoices", {
      invoiceID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      invoiceUUID: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      invoiceTitle: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      invoiceDescription: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: null,
      },
      invoiceTotal: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      invoicePaid: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      invoiceOutStanding: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      invoiceDueDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      invoiceFileTitle: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      invoiceFilePath: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: null,
      },
      invoiceNotes: {
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
      customerID: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null,
        references: {
          model: "Customer",
          key: "customerID",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      invoiceStatusID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "InvoiceStatus",
          key: "invoiceStatusID",
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
    await queryInterface.dropTable("Invoices");
  },
};
