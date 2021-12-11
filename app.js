const express = require("express");

const logger = require("morgan");

const cookieParser = require("cookie-parser");

const path = require("path");

const app = express();
// session management


// parser middleWares
app.use(cookieParser());
app.use(require("./src/config/session"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// static file
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "/src/views"));
app.set("view engine", "ejs");



// HTTP request middleware
app.use(logger("dev"));

// routes
app.use("/", require("./src/routes/index"));

// static public files
app.use(express.static("public"));



module.exports = app;
