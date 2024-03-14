"use strict";

const { v4: uuidv4 } = require("uuid");

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RolePermission extends Model {
    static associate(models) {
      // define association here
    }
  }
  RolePermission.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "RolePermission",
    }
  );

  RolePermission.beforeCreate((rolePermission) => {
    rolePermission.id = uuidv4();
  });
  return RolePermission;
};
