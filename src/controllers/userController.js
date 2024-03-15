import { Op } from "sequelize";
import db from "../database/models/index";
import bcrypt from "bcryptjs";
import { userExists } from "../helpers/UserExists";
import generateToken from "../middlewares/generateToken";

const { User, Role } = db;

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

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email },
      include: [
        {
          model: Role,
        },
      ],
    });

    if (!user) return res.status(400).json({ message: "user not found" });

    const userData = user.toJSON();
    const roles = user.Roles.map((role) => role.toJSON());

    if (await user.checkPassword(password)) {
      const payload = {
        id: userData.id,
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        role: roles[0].name,
      };

      const token = await generateToken(payload, "1d");

      return res.status(200).json({ token, message: "login successful" });
    } else {
      return res.status(400).json({ message: "invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "login failed" });
  }
};

export const heheSecured = async (req, res) => {
  try {
    return res.status(200).json({ message: "you are authorised!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "something went wrong" });
  }
};
