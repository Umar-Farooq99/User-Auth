"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      Blog.belongsTo(User,{foreignKey:'user_id'});
    }
  }
  Blog.init(
    {
      title: { type: DataTypes.STRING },
      body: { type: DataTypes.STRING, allowNull: false },
      author: { type: DataTypes.STRING, defaultValue: "unknown" },
    },
    {
      sequelize,
      modelName: "Blog",
    }
  );
  return Blog;
};
