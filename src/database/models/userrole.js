"use strict";
const { v4: uuidv4 } = require("uuid");

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserRole extends Model {
    static associate(models) {
      // define association here
    }
  }
  UserRole.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: () => uuidv4(),
      },
    },
    {
      sequelize,
      modelName: "UserRole",
    }
  );

  UserRole.beforeCreate((userRole) => {
    userRole.id = uuidv4();
  });

  return UserRole;
};
