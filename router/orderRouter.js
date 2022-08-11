const orderRouter = require("express").Router();

const orderController = require("../controller/orderController");

orderRouter
  .route("/")
  .get(orderController.getAllOrder)
  .post(orderController.postOrder);

orderRouter
  .route("/:id")
  .get(orderController.getOrderById)
  .patch(orderController.updateOrder)
  .delete(orderController.deleteOrder);

module.exports = orderRouter;
