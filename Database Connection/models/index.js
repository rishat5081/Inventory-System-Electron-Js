"use strict";
const fs = require("fs"),
  path = require("path"),
  Sequelize = require("sequelize"),
  basename = path.basename(__filename),
  env = process.env.NODE_ENV || "development",
  config = require(__dirname + "/../config/config.json")[env],
  DataBase_Models = {};

let sequelize;
sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "inventory_system.sqlite",
});
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize);
    DataBase_Models[model.name] = model;
  });

Object.keys(DataBase_Models).forEach((modelName) => {
  if (DataBase_Models[modelName].associate) {
    DataBase_Models[modelName].associate(DataBase_Models);
  }
});

DataBase_Models.sequelize = sequelize;
DataBase_Models.Sequelize = Sequelize;

module.exports = DataBase_Models;
