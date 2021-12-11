const { Router } = require("express");

const router = Router();

const authController = require("./auth.controller");

/**
 * login page router
 */
router.get("/login", authController.loginPage);

/**
 * login Post request
 */
router.post("/login", authController.loginRequest);

/**
 * login page router
 */
router.get("/register", authController.registerPage);

/**
 * register page router
 */
router.post("/register", authController.registerRequest);


module.exports = router;
