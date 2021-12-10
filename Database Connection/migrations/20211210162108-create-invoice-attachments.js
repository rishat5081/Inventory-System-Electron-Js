"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("InvoiceAttachments", {
      invoiceAttachID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      invoiceAttachUUID: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      invoiceAttachTitle: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      invoiceAttachPath: {
        type: Sequelize.TEXT,
        allowNull: false,
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
    await queryInterface.dropTable("InvoiceAttachments");
  },
};
