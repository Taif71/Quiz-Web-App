'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  users.init({
    userName: DataTypes.STRING,
    ans1: DataTypes.INTEGER,
    ans2: DataTypes.INTEGER,
    ans3: DataTypes.INTEGER,
    ans4: DataTypes.INTEGER,
    ans5: DataTypes.INTEGER,
    ans6: DataTypes.INTEGER,
    ans7: DataTypes.INTEGER,
    ans8: DataTypes.INTEGER,
    ans9: DataTypes.INTEGER,
    ans10: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    time: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user',
  });
  return users;
};