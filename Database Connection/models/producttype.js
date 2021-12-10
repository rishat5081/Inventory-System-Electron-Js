"use strict";
module.exports = (sequelize, { DataTypes, Model }) => {
  class ProductType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Product.hasMany(ProductType, { foreignKey: "productID" });
      ProductType.belongsTo(models.Product, {
        targetKey: "productID",
        foreignKey: "productID",
      });

      models.Company.hasMany(ProductType, { foreignKey: "companyID" });
      ProductType.belongsTo(models.Company, {
        targetKey: "companyID",
        foreignKey: "companyID",
      });
    }
  }
  ProductType.init(
    {
      productTypeID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      productTypeUUID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      typeTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      typeDescription: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
      },
      typeSize: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      },
      // type: {
      //   type: DataTypes.FLOAT,
      //   allowNull: true,
      //   defaultValue: null,
      // },
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
      modelName: "ProductType",
    }
  );
  return ProductType;
};
