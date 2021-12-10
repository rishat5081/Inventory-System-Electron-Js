"use strict";
module.exports = (sequelize, { DataTypes, Model }) => {
  class InvoicePaymentAttachment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.Invoice.hasMany(InvoicePaymentAttachment, {
        foreignKey: "invoiceID",
      });
      InvoicePaymentAttachment.belongsTo(models.Invoice, {
        targetKey: "invoiceID",
        foreignKey: "invoiceID",
      });

      models.InvoicePayment.hasMany(InvoicePaymentAttachment, {
        foreignKey: "invoicePaymentID",
      });
      InvoicePaymentAttachment.belongsTo(models.InvoicePayment, {
        targetKey: "invoicePaymentID",
        foreignKey: "invoicePaymentID",
      });
    }
  }
  InvoicePaymentAttachment.init(
    {
      invoicePaymentAttachID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      invoicePaymentAttachUUID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      invoiceAttachTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      invoiceAttachPath: {
        type: DataTypes.TEXT,
        allowNull: false,
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
      invoicePaymentID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "InvoicePayment",
          key: "invoicePaymentID",
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
      modelName: "InvoicePaymentAttachment",
    }
  );
  return InvoicePaymentAttachment;
};
