const express = require("express");

const logger = require("morgan");


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use("/", require("./routes/index"));
app.use(express.static("public"));



module.exports = app;
