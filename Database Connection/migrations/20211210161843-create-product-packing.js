"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ProductPackings", {
      productPackingID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      productPackingUUID: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      productPackingTitle: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      productPackingDescription: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: null,
      },
      productPackingType: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      productPackingPrice: {
        type: Sequelize.FLOAT,
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
    await queryInterface.dropTable("ProductPackings");
  },
};
