
const { Router } = require("express");

const router = Router();

router.use("/auth", require("../modules/auth/auth.routes"));


module.exports = router;








