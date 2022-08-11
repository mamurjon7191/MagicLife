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
  password: {
    type: String,
    minlength: [8, "Eng kamida 8 ta symbol ishlata olasiz"],
    maxlengt: [16, "Eng kopida 16 ta symbol ishlata olasiz"],
    select: false,
    validate: {
      validator: function (val) {
        return validator.isStrongPassword(val);
      },
      message: "Iltimos togri password kiriting",
    },
  },
  phone_active: {
    type: Boolean,
    default: true,
  },
  email_active: {
    type: Boolean,
    default: true,
  },
  user_active: {
    type: Boolean,
    default: true,
  },
  password_change_date: {
    type: Date,
    default: null,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  role: {
    enum: ["admin", "user"],
  },
});

const User = mongoose.model("users", userScheme);

module.exports = User;
