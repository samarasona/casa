'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class aluno extends Model {
  
    
    static associate(models) {
      // define association here
    }
  }
  aluno.init({
    nome: DataTypes.STRING,
    data_nascimnto: DataTypes.STRING,
    idade: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'aluno',
  });
  return aluno;
};