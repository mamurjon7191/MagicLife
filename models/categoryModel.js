const mongoose = require("mongoose");

const categoryScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

const Category = mongoose.model("ccategories", categoryScheme);

module.exports = Category;
