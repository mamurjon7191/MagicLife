const mongoose = require("mongoose");

const accountScheme = new mongoose.Schema({
  balance: {
    type: Number,
  },
});

const Account = mongoose.model("accounts", accountScheme);

module.exports = Account;
