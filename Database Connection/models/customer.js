"use strict";
module.exports = (sequelize, { DataTypes, Model }) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.Company.hasMany(Customer, { foreignKey: "companyID" });
      Customer.belongsTo(models.Company, {
        targetKey: "companyID",
        foreignKey: "companyID",
      });
    }
  }
  Customer.init(
    {
      customerID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      customerUUID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: null,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: null,
      },
      // password: {
      //   type: DataTypes.TEXT,
      //   allowNull: true,
      // },
      contact: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: null,
      },
      address: {
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
      modelName: "Customer",
    }
  );
  return Customer;
};
