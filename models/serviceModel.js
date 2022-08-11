const mongoose = require("mongoose");

const serviceScheme = new mongoose.Schema({
  serviceId: {
    type: String,
    required: true,
  },
  categoryId: {
    type: mongoose.Schema.ObjectId,
    ref: "ccategories",
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  minQuantity: {
    type: Number,
    required: true,
    min: [100, "Siz eng kamida 100 ta quantity kirita olasiz"],
  },
  maxQuantity: {
    type: Number,
    required: true,
    max: [1000, "Siz eng kopida 1000 ta quantity kirita olasiz"],
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

const Service = mongoose.model("services", serviceScheme);

module.exports = Service;
