const {
  getAll,
  getOne,
  add,
  update,
  deleteData,
} = require("../controller/handlerController");

const Category = require("../models/categoryModel");

const getAllCategory = (req, res, next) => {
  getAll(req, res, next, Category);
};

const postCategory = (req, res, next) => {
  add(req, res, next, Category);
};

const getCategoryById = (req, res, next) => {
  getOne(req, res, next, Category);
};

const deleteCategory = (req, res, next) => {
  deleteData(req, res, next, Category);
};

const updateCategory = (req, res, next) => {
  update(req, res, next, Category);
};

module.exports = {
  getAllCategory,
  postCategory,
  getCategoryById,
  deleteCategory,
  updateCategory,
};
