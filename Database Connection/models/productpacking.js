"use strict";
module.exports = (sequelize, { DataTypes, Model }) => {
  class ProductPacking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Product.hasMany(ProductPacking, { foreignKey: "productID" });
      ProductPacking.belongsTo(models.Product, {
        targetKey: "productID",
        foreignKey: "productID",
      });

      models.Company.hasMany(ProductPacking, { foreignKey: "companyID" });
      ProductPacking.belongsTo(models.Company, {
        targetKey: "companyID",
        foreignKey: "companyID",
      });
    }
  }
  ProductPacking.init(
    {
      productPackingID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      productPackingUUID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      productPackingTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      productPackingDescription: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
      },
      productPackingType: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      },
      productPackingPrice: {
        type: DataTypes.FLOAT,
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
      modelName: "ProductPacking",
    }
  );
  return ProductPacking;
};
