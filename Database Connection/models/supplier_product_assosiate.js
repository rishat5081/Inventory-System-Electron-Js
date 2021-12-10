"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Supplier_Product_Assosiate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //many to many relationship
      models.Supplier.belongsToMany(models.Product, {
        through: Supplier_Product_Assosiate,
        foreignKey: "supplierID",
      });
      //many to many relationship
      models.Product.belongsToMany(models.Supplier, {
        through: Supplier_Product_Assosiate,
        foreignKey: "productID",
      });
    }
  }
  Supplier_Product_Assosiate.init(
    {
      supplier_productID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      supplier_productUUID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
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
    },
    {
      sequelize,
      modelName: "Supplier_Product_Assosiate",
    }
  );
  return Supplier_Product_Assosiate;
};
