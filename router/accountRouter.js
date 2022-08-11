const accountRouter = require("express").Router();
const accountController = require("../controller/accountController");

accountRouter
  .route("/")
  .get(accountController.getAllAccount)
  .post(accountController.postAccount);

accountRouter
  .route("/:id")
  .get(accountController.getAccountById)
  .patch(accountController.updateAccount)
  .delete(accountController.deleteAccount);

module.exports = accountRouter;
