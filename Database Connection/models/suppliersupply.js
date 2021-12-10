"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SupplierSupply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.Product.hasMany(SupplierSupply, { foreignKey: "productID" });
      SupplierSupply.belongsTo(models.Product, {
        targetKey: "productID",
        foreignKey: "productID",
      });

      models.Company.hasMany(SupplierSupply, { foreignKey: "companyID" });
      SupplierSupply.belongsTo(models.Company, {
        targetKey: "companyID",
        foreignKey: "companyID",
      });

      models.Supplier.hasMany(SupplierSupply, { foreignKey: "supplierID" });
      SupplierSupply.belongsTo(models.Supplier, {
        targetKey: "supplierID",
        foreignKey: "supplierID",
      });
    }
  }
  SupplierSupply.init(
    {
      supplierSupplyID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      supplierSupplyUUID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      supplyName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
      },
      status: {
        type: DataTypes.STRING,
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
      supplierID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Supplier",
          key: "supplierID",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      productID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Product",
          key: "productID",
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
      modelName: "SupplierSupply",
    }
  );
  return SupplierSupply;
};
