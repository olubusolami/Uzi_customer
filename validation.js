//validation
const Joi = require("@hapi/joi");

//register validation
const registerValidation = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().min(6).required(),
    lastName: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(8).required(),
    company: Joi.string().required(),
    phoneNumber: Joi.string().min(10).max(15).required(),
  });
  return schema.validate(data);
};

// //loginValidation
// const loginValidation = (data) => {
//   const schema = Joi.object({
//     email: Joi.string().min(6).required().email(),
//     password: Joi.string().min(8).required(),
//   });
//   return schema.validate(data);
// };

module.exports = {
  registerValidation,
};
