import joi from "joi";

const userLoginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string(),
});

export default userLoginSchema;
