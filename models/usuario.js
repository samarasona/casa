'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    
    static associate(models) {
       this.belongsTo(models.empresa,{as:"empresa"})
    }
  }
  usuario.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'usuario',
  });
  return usuario;
};