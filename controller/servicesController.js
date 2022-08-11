const {
  getAll,
  getOne,
  add,
  update,
  deleteData,
} = require("../controller/handlerController");

const Service = require("../models/serviceModel");

const options1 = {
  path: "categoryId",
};

const getAllService = (req, res, next) => {
  getAll(req, res, next, Service, options1);
};

const postService = (req, res, next) => {
  add(req, res, next, Service);
};

const getServiceById = (req, res, next) => {
  getOne(req, res, next, Service, options1);
};

const deleteService = (req, res, next) => {
  deleteData(req, res, next, Service);
};

const updateService = (req, res, next) => {
  update(req, res, next, Service);
};

module.exports = {
  getAllService,
  postService,
  getServiceById,
  deleteService,
  updateService,
};
