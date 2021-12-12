const { Router } = require("express");

const router = Router();

const commonController = require("./common.controller");

const {uploadTempFileMulter} = require("../../helper/file-functions/");

/**
 * Upload tempFile
 */
router.post("/upload",uploadTempFileMulter.single("profile"), commonController.uploadFile);



module.exports = router;
