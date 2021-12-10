"use strict";
module.exports = (sequelize, { DataTypes, Model }) => {
  class InvoiceDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.Invoice.hasMany(InvoiceDetails, { foreignKey: "invoiceID" });
      InvoiceDetails.belongsTo(models.Invoice, {
        targetKey: "invoiceID",
        foreignKey: "invoiceID",
      });

      models.Company.hasMany(InvoiceDetails, { foreignKey: "companyID" });
      InvoiceDetails.belongsTo(models.Company, {
        targetKey: "companyID",
        foreignKey: "companyID",
      });
    }
  }
  InvoiceDetails.init(
    {
      invoiceDetailsID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      invoiceDetailsUUID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      invoiceDetailsTitle: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      },
      invoiceDetailsNotes: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
      },
      unitPrice: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: null,
      },
      Size: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
      },
      Quantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
      },
      Discount: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: null,
      },
      ShippingCost: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: null,
      },
      DueDate: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
      },
      Status: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      },
      Note: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
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
      modelName: "InvoiceDetails",
    }
  );
  return InvoiceDetails;
};
