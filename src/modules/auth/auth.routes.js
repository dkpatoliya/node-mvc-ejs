const { Router } = require("express");

const router = Router();

const authController = require("./auth.controller");

/**
 * login page router
 */
router.get("/login", authController.loginPage);

/**
 * login page router
 */
router.get("/register", authController.registerPage);


module.exports = router;
