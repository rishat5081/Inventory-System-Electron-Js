"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("SupplierSupplies", {
      supplierSupplyID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      supplierSupplyUUID: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      supplyName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null,
      },
      status: {
        type: Sequelize.STRING,
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
      supplierID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Supplier",
          key: "supplierID",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      productID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Product",
          key: "productID",
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
    await queryInterface.dropTable("SupplierSupplies");
  },
};
