import Joi from "joi";

export const validateUser = (user) => {
  const schema = Joi.object({
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }).trim(),

    firstName: Joi.string().min(3).max(30).required().trim(),

    lastName: Joi.string().min(3).max(30).required().trim(),

    photo: Joi.string().trim(),

    password: Joi.string().trim(),
    // .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
  });
  return schema.validate(user);

};
