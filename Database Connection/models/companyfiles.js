"use strict";
module.exports = (sequelize, { DataTypes, Model }) => {
  class CompanyFiles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Company.hasMany(CompanyFiles, { foreignKey: "companyID" });
      CompanyFiles.belongsTo(models.Company, {
        targetKey: "companyID",
        foreignKey: "companyID",
      });
    }
  }
  CompanyFiles.init(
    {
      fileID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      fileUUID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      fileTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      filePath: {
        type: DataTypes.TEXT,
        allowNull: false,
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
    },
    {
      sequelize,
      modelName: "CompanyFiles",
    }
  );
  return CompanyFiles;
};
