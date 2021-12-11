const { Router } = require("express");

const router = Router();

// auth module
router.use("/auth", require("../modules/auth/auth.routes"));

// user module
router.use("/", require("../modules/user/user.routes"));

module.exports = router;
