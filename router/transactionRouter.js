const transactionRouter = require("express").Router();
const transactionController = require("../controller/transactionsController");

transactionRouter
  .route("/")
  .get(transactionController.getAllTransaction)
  .post(transactionController.postTransaction);

transactionRouter
  .route("/:id")
  .get(transactionController.getTransactionById)
  .patch(transactionController.updateTransaction)
  .delete(transactionController.deleteTransaction);

module.exports = transactionRouter;
