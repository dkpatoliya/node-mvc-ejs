const { Router } = require("express");

const router = Router();

const userController = require("./user.controller");

/**
 * profile page router
 */
router.get("/profile", userController.profile);



module.exports = router;
