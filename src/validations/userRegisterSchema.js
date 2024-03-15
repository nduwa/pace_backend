import joi from "joi";

const userRegisterSchema = joi.object({
  firstname: joi
    .string()
    .pattern(/^[a-zA-Z0-9\s]+$/)
    .required(),
  lastname: joi
    .string()
    .pattern(/^[a-zA-Z0-9\s]+$/)
    .required(),
  email: joi.string().email().required(),
  password: joi.string(),
});

export default userRegisterSchema;
