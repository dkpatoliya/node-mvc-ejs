const express = require("express");

const logger = require("morgan");

const cookieParser = require("cookie-parser");

const app = express();
// session management

// parser middleWares
app.use(cookieParser());
app.use(require("./config/session"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// HTTP request middleware
app.use(logger("dev"));

// routes
app.use("/", require("./routes/index"));

// static public files
app.use(express.static("public"));



module.exports = app;
