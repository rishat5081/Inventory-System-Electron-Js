"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SupplierSupplyPayment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.SupplierSupplyInvoice.hasMany(SupplierSupplyPayment, {
        foreignKey: "supplyInvoiceID",
      });
      SupplierSupplyPayment.belongsTo(models.SupplierSupplyInvoice, {
        targetKey: "supplyInvoiceID",
        foreignKey: "supplyInvoiceID",
      });
    }
  }
  SupplierSupplyPayment.init(
    {
      supplyPaymentID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      supplyPaymentUUID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      paymentTitle: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      },
      paymentDescription: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
      },
      total: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      paidAmount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      creditAmount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      paymentStatus: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      },
      paymentFile: {
        type: DataTypes.TEXT,
        allowNull: false,
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
      supplyInvoiceID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "SupplierSupplyInvoice",
          key: "supplyInvoiceID",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "SupplierSupplyPayment",
    }
  );
  return SupplierSupplyPayment;
};
