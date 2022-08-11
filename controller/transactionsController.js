const {
  getAll,
  getOne,
  add,
  update,
  deleteData,
} = require("../controller/handlerController");

const options1 = {
  path: "userId",
};

const Transaction = require("../models/transaction");

const getAllTransaction = (req, res, next) => {
  getAll(req, res, next, Transaction, options1);
};

const postTransaction = (req, res, next) => {
  add(req, res, next, Transaction);
};

const getTransactionById = (req, res, next) => {
  getOne(req, res, next, Transaction, options1);
};

const deleteTransaction = (req, res, next) => {
  deleteData(req, res, next, Transaction);
};

const updateTransaction = (req, res, next) => {
  update(req, res, next, Transaction);
};

module.exports = {
  getAllTransaction,
  postTransaction,
  getTransactionById,
  deleteTransaction,
  updateTransaction,
};
