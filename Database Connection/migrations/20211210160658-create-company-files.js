"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("CompanyFiles", {
      fileID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      fileUUID: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      fileTitle: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      filePath: {
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
    await queryInterface.dropTable("CompanyFiles");
  },
};
