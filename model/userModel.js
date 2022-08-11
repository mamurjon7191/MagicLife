const mongoose = require("mongoose");
const validator = require("validator");

const userScheme = new mongoose.Schema({
  accountId: {
    type: mongoose.Schema.ObjectId,
    ref: "accounts",
  },
  full_name: {
    type: String,
    required: true,
    trim: true,
  },
  birth_date: {
    type: Date,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    toLowercase: true,
    validate: {
      validator: function (val) {
        return validator.isEmail(val);
      },
      message: "Iltimos togri email kiriting",
    },
  },
});

const User = mongoose.model("users", userScheme);

module.exports = User;
