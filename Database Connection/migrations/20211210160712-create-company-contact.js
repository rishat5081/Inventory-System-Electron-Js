"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("CompanyContacts", {
      contactUUID: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      contactName: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: null,
      },
      contactPosition: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      contactPhone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      contactEmail: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
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
    await queryInterface.dropTable("CompanyContacts");
  },
};
