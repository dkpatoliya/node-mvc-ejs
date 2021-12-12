

const GENERAL = require("../../config/general");



/**
 * Upload File
 * @type function
 * @param {Object} _ express request
 * @param {Object} res  express response
 * @author Divyesh Patoliya<patoliyadivyesh101@gmail.com>
 */
const uploadFile = (req, res) => {
    const response = {
        file_name: req.file.filename,
        temp_path: GENERAL.API_URL + GENERAL.TEMP_FILE_PATH.FILE_SERVER_PATH + req.file.filename,
    };
    res.status(200).json(response);

};



/**
 * export auth controller
 * @module Auth Controller
 */
module.exports = {
    uploadFile

};
