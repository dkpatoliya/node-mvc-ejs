const { Router } = require("express");

const router = Router();

// auth module
router.use("/auth", require("../modules/auth/auth.routes"));

// user module
router.use("/", require("../modules/user/user.routes"));
router.use("/", require("../modules/common/common.routes"));
router.use("**", (_req, res) => {
    res.redirect("/auth/login");
});

module.exports = router;
