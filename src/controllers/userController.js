import { Op } from "sequelize";
import db from "../database/models/index";
import bcrypt from "bcryptjs";
import { userExists } from "../helpers/UserExists";

const { User, UserRole, Role } = db;

export const register = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    if (await userExists(email)) {
      return res.status(400).json({ message: "user already exist" });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const user = await User.create({
      firstname,
      lastname,
      password: passwordHash,
      email,
    });

    if (user) {
      const patientRole = await Role.findOne({
        where: {
          [Op.or]: [{ name: "patient" }],
        },
      });

      await user.addRole(patientRole);
    }

    return res.status(201).json({ message: "user registered" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "registration failed" });
  }
};
