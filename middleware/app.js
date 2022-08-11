const express = require("express");
const app = express();
const path = require("path");
const cookie_parser = require("cookie-parser");
const AppError = require("../utility/AppError");
const errController = require("../controller/errController");

app.use(cookie_parser());

// --- Routes-----

// --- Routes-----

app.use(express.json({ limit: "10kb" })); // midleware
app.use(express.static("public"));

app.use(cookie_parser());

// --- Routes for api-----

// --- Routes for view-----

app.all("*", (req, res, next) => {
  return next(new AppError("This page is not defined", 404));
});

app.use(errController);

module.exports = app;
