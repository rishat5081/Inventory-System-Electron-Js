"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SupplierSupplyInvoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.SupplierSupply.hasMany(SupplierSupplyInvoice, {
        foreignKey: "supplierSupplyID",
      });
      SupplierSupplyInvoice.belongsTo(models.SupplierSupply, {
        targetKey: "supplierSupplyID",
        foreignKey: "supplierSupplyID",
      });
    }
  }
  SupplierSupplyInvoice.init(
    {
      supplyInvoiceID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      supplyInvoiceUUID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      total: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      paid: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      outStanding: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      dueDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      fileTitle: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      },
      filePath: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
      },
      supplierSupplyID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "SupplierSupply",
          key: "supplierSupplyID",
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
      modelName: "SupplierSupplyInvoice",
    }
  );
  return SupplierSupplyInvoice;
};
