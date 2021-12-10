"use strict";
module.exports = (sequelize, { DataTypes, Model }) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Company.init(
    {
      companyID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      companyUUID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      companyName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      companyWeb: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      },
      companyPhone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      companyAddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      companyLogo: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
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
      modelName: "Company",
    }
  );
  return Company;
};
