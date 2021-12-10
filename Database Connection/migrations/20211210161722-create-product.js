"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Products", {
      productID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      productUUID: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      productName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      productDescription: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: null,
      },
      productUnit: {
        type: Sequelize.FLOAT,
        allowNull: true,
        defaultValue: null,
      },
      productPrice: {
        type: Sequelize.FLOAT,
        allowNull: true,
        defaultValue: null,
      },
      productSalePrice: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      productOtherDetails: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: null,
      },
      size: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      // width: {
      //   type: Sequelize .FLOAT,
      //   allowNull: false,
      // },
      // height: {
      //   type: Sequelize .FLOAT,
      //   allowNull: false,
      // },
      color: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      productMadeOf: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: null,
      },
      // userID: {
      //   type: Sequelize .INTEGER,
      //   allowNull: true,
      //   defaultValue: null,
      //   references: {
      //     model: "UserLogin",
      //     key: "userID",
      //   },
      //   onDelete: "CASCADE",
      //   onUpdate: "CASCADE",
      // },
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
    await queryInterface.dropTable("Products");
  },
};
