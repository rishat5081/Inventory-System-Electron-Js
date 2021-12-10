"use strict";
module.exports = (sequelize, { DataTypes, Model }) => {
  class Invoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.InvoiceStatus.hasOne(Invoice, { foreignKey: "invoiceStatusID" });
      Invoice.belongsTo(models.InvoiceStatus, {
        targetKey: "invoiceStatusID",
        foreignKey: "invoiceStatusID",
      });

      models.Customer.hasMany(Invoice, {
        foreignKey: "customerID",
      });
      Invoice.belongsTo(models.Customer, {
        targetKey: "customerID",
        foreignKey: "customerID",
      });

      models.Company.hasMany(Invoice, { foreignKey: "companyID" });
      Invoice.belongsTo(models.Company, {
        targetKey: "companyID",
        foreignKey: "companyID",
      });
    }
  }
  Invoice.init(
    {
      invoiceID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      invoiceUUID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      invoiceTitle: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      invoiceDescription: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
      },
      invoiceTotal: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      invoicePaid: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      invoiceOutStanding: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      invoiceDueDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      invoiceFileTitle: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      },
      invoiceFilePath: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
      },
      invoiceNotes: {
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
      customerID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
        references: {
          model: "Customer",
          key: "customerID",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      invoiceStatusID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "InvoiceStatus",
          key: "invoiceStatusID",
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
      modelName: "Invoice",
    }
  );
  return Invoice;
};
