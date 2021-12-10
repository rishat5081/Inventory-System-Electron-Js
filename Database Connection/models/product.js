"use strict";
module.exports = (sequelize, { DataTypes, Model }) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.Company.hasMany(Product, { foreignKey: "companyID" });
      Product.belongsTo(models.Company, {
        targetKey: "companyID",
        foreignKey: "companyID",
      });
    }
  }
  Product.init(
    {
      productID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      productUUID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      productName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      productDescription: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
      },
      productUnit: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: null,
      },
      productPrice: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: null,
      },
      productSalePrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      productOtherDetails: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
      },
      size: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      // width: {
      //   type: DataTypes.FLOAT,
      //   allowNull: false,
      // },
      // height: {
      //   type: DataTypes.FLOAT,
      //   allowNull: false,
      // },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      productMadeOf: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
      },
      // userID: {
      //   type: DataTypes.INTEGER,
      //   allowNull: true,
      //   defaultValue: null,
      //   references: {
      //     model: "UserLogin",
      //     key: "userID",
      //   },
      //   onDelete: "CASCADE",
      //   onUpdate: "CASCADE",
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
      modelName: "Product",
    }
  );
  return Product;
};
