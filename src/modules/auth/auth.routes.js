const {Router} =  require("express");

const router = Router();

const controller = require("./auth.controller");

router.get("/login", controller.loginPage);


module.exports = router;
