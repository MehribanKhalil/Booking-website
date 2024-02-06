import Joi from "joi";

export const validateUser = (user) => {
  const schema = Joi.object({
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),

    firstName: Joi.string().min(3).max(30).required(),

    lastName: Joi.string().min(3).max(30).required(),

    photo: Joi.string(),

    password: Joi.string(),
    // .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))

    passwordConfirm: Joi.ref("password"),
  });
  return schema.validate(user);

};
