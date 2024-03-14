import express from "express";
import userRegisterSchema from "../validations/UserRegisterSchema";
import validation from "../validations/validation";
import { register } from "../controllers/userController";

const userRoutes = express.Router();

userRoutes.post("/register", validation(userRegisterSchema), register);

export default userRoutes;
