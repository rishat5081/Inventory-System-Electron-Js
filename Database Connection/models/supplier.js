"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Supplier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.Company.hasMany(Supplier, { foreignKey: "companyID" });
      Supplier.belongsTo(models.Company, {
        targetKey: "companyID",
        foreignKey: "companyID",
      });
    }
  }
  Supplier.init(
    {
      supplierID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      supplierUUID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      supplierName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      supplierWeb: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
      },
      supplierPhone: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      },
      supplierPosition: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      },
      supplierEmail: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      },
      supplierMobile: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      supplierAddress: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
      },
      supplierLogo: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
      },
      supplierNote: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
      },
      companyID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Company",
          key: "companyID",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      paused: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "Supplier",
    }
  );
  return Supplier;
};
