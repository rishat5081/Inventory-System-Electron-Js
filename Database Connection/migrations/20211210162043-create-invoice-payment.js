"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("InvoicePayments", {
      invoicePaymentID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      invoicePaymentUUID: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      paymentTitle: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      paymentDescription: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: null,
      },
      total: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      paidAmount: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      creditAmount: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      paymentStatus: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      paymentFile: {
        type: Sequelize.TEXT,
        allowNull: false,
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
    await queryInterface.dropTable("InvoicePayments");
  },
};
