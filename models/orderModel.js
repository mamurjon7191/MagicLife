const mongoose = require("mongoose");

const orderScheme = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "users",
  },
  serviceId: {
    type: String,
  },
  link: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

const Order = mongoose.model("orders", orderScheme);

module.exports = Order;
