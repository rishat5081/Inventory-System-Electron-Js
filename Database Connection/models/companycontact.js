"use strict";
module.exports = (sequelize, { DataTypes, Model }) => {
  class CompanyContact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Company.hasMany(CompanyContact, { foreignKey: "companyID" });
      CompanyContact.belongsTo(models.Company, {
        targetKey: "companyID",
        foreignKey: "companyID",
      });
    }
  }
  CompanyContact.init(
    {
      contactUUID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      contactName: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: null,
      },
      contactPosition: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      },
      contactPhone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contactEmail: {
        type: DataTypes.STRING,
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
      modelName: "CompanyContact",
    }
  );
  return CompanyContact;
};
