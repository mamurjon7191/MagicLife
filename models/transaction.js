const mongoose = require("mongoose");

const transactionScheme = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "users",
  },
  user_phone: {
    type: String,
  },
  state: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  create_time: {
    type: Date,
    default: Date.now(),
  },
  perform_time: {
    type: Date,
    default: null,
  },
  cancel_time: {
    type: Date,
    default: null,
  },
  reason: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

const Transaction = mongoose.model("transactions", transactionScheme);

module.exports = Transaction;
