const mongoose = require("mongoose");

const orderScheme = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.ObjectId,
    ref: "orders",
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

const OrderStatus = mongoose.model("orderStatus", orderScheme);

module.exports = OrderStatus;
