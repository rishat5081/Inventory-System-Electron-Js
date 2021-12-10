"use strict";
module.exports = (sequelize, { DataTypes, Model }) => {
  class InvoicePayment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.Invoice.hasMany(InvoicePayment, { foreignKey: "invoiceID" });
      InvoicePayment.belongsTo(models.Invoice, {
        targetKey: "invoiceID",
        foreignKey: "invoiceID",
      });
    }
  }
  InvoicePayment.init(
    {
      invoicePaymentID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      invoicePaymentUUID: {
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
      invoiceID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Invoice",
          key: "invoiceID",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "InvoicePayment",
    }
  );
  return InvoicePayment;
};
