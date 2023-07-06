"use strict";
const dotenv = require("dotenv").config(); //change manually
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const { development } = require("../config/config.js");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV; //change here
const config = require(__dirname + "/../config/config.js")[env];
const db = {};
//console.log(config, "this is config");
//console.log(process.env.DATABASE, "this is database");
let sequelize;
sequelize = new Sequelize(config.database, config.username, config.password, {
  // username pass host this is from config file
  host: config.host,
  dialect: config.dialect,
});

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
