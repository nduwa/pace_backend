"use strict";

const { v4: uuidv4 } = require("uuid");

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      Role.belongsToMany(models.Permission, { through: "RolePermission" });
      Role.belongsToMany(models.User, { through: "UserRole" });
    }
  }
  Role.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Role",
    }
  );

  Role.beforeCreate((role) => {
    role.id = uuidv4();
  });

  return Role;
};
