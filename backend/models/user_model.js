const mongoose = require('mongoose')
const Joi = require('joi')
const passwordComplexity = require('joi-password-complexity')

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)
const validate = (user) => {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: passwordComplexity().required()
  });
  return schema.validate(user);
};

const User = mongoose.model('User', userSchema)
module.exports = { User, validate }