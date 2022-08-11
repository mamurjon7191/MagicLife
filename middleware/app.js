const express = require("express");
const app = express();
const path = require("path");
const cookie_parser = require("cookie-parser");
const AppError = require("../utility/AppError");
const errController = require("../controller/errController");

app.use(cookie_parser());

// --- Routes-----

const userRouter = require("../router/userRouter");
const accountRouter = require("../router/accountRouter");
const transactionRouter = require("../router/transactionRouter");
const categoryRouter = require("../router/categoryRouter");
const serviceRouter = require("../router/serviceRouter");
const orderRouter = require("../router/orderRouter");
const orderStatusRouter = require("../router/orderStatusRouter");

// --- Routes-----

app.use(express.json({ limit: "10kb" })); // midleware
app.use(express.static("public"));

app.use(cookie_parser());

// --- Routes for api-----

app.use("/api/v1/users", userRouter);
app.use("/api/v1/accounts", accountRouter);
app.use("/api/v1/transactions", transactionRouter);
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/servises", serviceRouter);
app.use("/api/v1/orders", orderRouter);
app.use("/api/v1/order-status", orderStatusRouter);

// --- Routes for view-----

app.all("*", (req, res, next) => {
  return next(new AppError("This page is not defined", 404));
});

app.use(errController);

module.exports = app;
