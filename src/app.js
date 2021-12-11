const express = require("express");
const path = require("path");
const logger = require("morgan");


const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use("/", require("./routes/index"));



module.exports = app;
