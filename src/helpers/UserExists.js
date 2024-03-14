import { Op } from "sequelize";
import db from "../database/models/index";
const { User } = db;

export const userExists = async (email) => {
  const foundUser = await User.findOne({
    where: {
      [Op.or]: [{ email }],
    },
  });
  if (!foundUser) return false;

  return true;
};
