const { Router } = require("express");
const { authorizeSession } = require("../../helper/auth-session");

const router = Router();

const userController = require("./user.controller");

/**
 * profile page router
 */
router.get("/profile", authorizeSession, userController.profile);

/**
 * profile page router
 */
router.post("/profile", authorizeSession, userController.updateProfile);


module.exports = router;
