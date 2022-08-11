const categoryRouter = require("express").Router();

const categoryController = require("../controller/categoryController");

categoryRouter
  .route("/")
  .get(categoryController.getAllCategory)
  .post(categoryController.postCategory);

categoryRouter
  .route("/:id")
  .get(categoryController.getCategoryById)
  .patch(categoryController.updateCategory)
  .delete(categoryController.deleteCategory);

module.exports = categoryRouter;
