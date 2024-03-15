import express from "express";
import userRegisterSchema from "../validations/UserRegisterSchema";
import validation from "../validations/validation";
import { heheSecured, login, register } from "../controllers/userController";
import verifyRole from "../middlewares/verifyRole";
import userLoginSchema from "../validations/userLoginSchema";

const userRoutes = express.Router();

userRoutes.post("/register", validation(userRegisterSchema), register);
userRoutes.post("/login", validation(userLoginSchema), login);
userRoutes.get("/hehe", verifyRole("doctor"), heheSecured); // test purposes

export default userRoutes;
