const serviceRouter = require("express").Router();
const serviceController = require("../controller/servicesController");

serviceRouter
  .route("/")
  .get(serviceController.getAllService)
  .post(serviceController.postService);

serviceRouter
  .route("/:id")
  .get(serviceController.getServiceById)
  .patch(serviceController.updateService)
  .delete(serviceController.deleteService);

module.exports = serviceRouter;
