const {
  getAll,
  getOne,
  add,
  update,
  deleteData,
} = require("../controller/handlerController");

const Order = require("../models/orderModel");

const options1 = {
  path: "userId",
};

const getAllOrder = (req, res, next) => {
  getAll(req, res, next, Order, options1);
};

const postOrder = (req, res, next) => {
  add(req, res, next, Order);
};

const getOrderById = (req, res, next) => {
  getOne(req, res, next, Order, options1);
};

const deleteOrder = (req, res, next) => {
  deleteData(req, res, next, Order);
};

const updateOrder = (req, res, next) => {
  update(req, res, next, Order);
};

module.exports = {
  getAllOrder,
  postOrder,
  getOrderById,
  deleteOrder,
  updateOrder,
};
