const {
  getAll,
  getOne,
  add,
  update,
  deleteData,
} = require("../controller/handlerController");

const Account = require("../models/accountModel");

const getAllAccount = (req, res, next) => {
  getAll(req, res, next, Account);
};

const postAccount = (req, res, next) => {
  add(req, res, next, Account);
};

const getAccountById = (req, res, next) => {
  getOne(req, res, next, Account);
};

const deleteAccount = (req, res, next) => {
  deleteData(req, res, next, Account);
};

const updateAccount = (req, res, next) => {
  update(req, res, next, Account);
};

module.exports = {
  getAllAccount,
  postAccount,
  getAccountById,
  deleteAccount,
  updateAccount,
};
