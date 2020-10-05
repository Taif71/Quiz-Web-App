'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class quiz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  quiz.init({
    questions: DataTypes.STRING,
    opt1: DataTypes.INTEGER,
    opt2: DataTypes.INTEGER,
    opt3: DataTypes.INTEGER,
    opt4: DataTypes.INTEGER,
    solution: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'quiz',
  });
  return quiz;
};