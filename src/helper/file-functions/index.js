const multer = require("multer");
const path = require("path");

const fs = require("fs");

/**
 * move file
 * @param {string} currentPath - file path
 * @param {string} destinationPath - new path
 * @param {function} callback
 */
const moveFile = (currentPath, destinationPath, callback) => {
    fs.rename(currentPath, destinationPath, function (err) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, null);
        }
    });
};

/**
 * @type function
 * @param {string } data,{string } path, {string } file_name, {function} callback
 * @description Function for write file
 * @returns {undefined}
 * @author Divyesh Patoliya <patoliyadivyesh101@gmail.com>
 */
const tempFileStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/images/");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
    }
});

const uploadTempFileMulter = multer({ storage: tempFileStorage });

module.exports = {
    uploadTempFileMulter,
    moveFile
};
