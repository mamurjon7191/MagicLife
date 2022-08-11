const orderStatusRouter = require("express").Router();

const orderStatusController = require("../controller/orderStatusController");

orderStatusRouter
  .route("/")
  .get(orderStatusController.getAllOrderStatus)
  .post(orderStatusController.postOrderStatus);

orderStatusRouter
  .route("/:id")
  .get(orderStatusController.getOrderStatusById)
  .patch(orderStatusController.updateOrderStatus)
  .delete(orderStatusController.deleteOrderStatus);

module.exports = orderStatusRouter;
