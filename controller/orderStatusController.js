const {
  getAll,
  getOne,
  add,
  update,
  deleteData,
} = require("../controller/handlerController");

const OrderStatus = require("../models/orderStatusModel");

const options1 = {
  path: "orderId",
};

const getAllOrderStatus = (req, res, next) => {
  getAll(req, res, next, OrderStatus, options1);
};

const postOrderStatus = (req, res, next) => {
  add(req, res, next, OrderStatus);
};

const getOrderStatusById = (req, res, next) => {
  getOne(req, res, next, OrderStatus, options1);
};

const deleteOrderStatus = (req, res, next) => {
  deleteData(req, res, next, OrderStatus);
};

const updateOrderStatus = (req, res, next) => {
  update(req, res, next, OrderStatus);
};

module.exports = {
  getAllOrderStatus,
  postOrderStatus,
  getOrderStatusById,
  deleteOrderStatus,
  updateOrderStatus,
};
