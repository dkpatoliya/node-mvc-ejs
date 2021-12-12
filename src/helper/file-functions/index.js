const multer = require("multer");
const path = require("path");


/**
* @type function
* @param {string } data,{string } path, {string } file_name, {function} callback
* @description Function for write file
* @returns {undefined}
* @author Divyesh Patoliya <patoliyadivyesh101@gmail.com>
*/
const tempFileStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/tmp/");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
    }
});

const uploadTempFileMulter = multer({ storage: tempFileStorage });

module.exports = {
    uploadTempFileMulter

};