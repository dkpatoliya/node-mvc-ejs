const path = require("path");

/**
 * Profile
 * @type function
 * @param {Object} _req express request
 * @param {Object} res  express response
 * @author Divyesh Patoliya<patoliyadivyesh101@gmail.com>
 */
const profile = (_req, res) => {
    res.sendFile("html/user/profile.html", {
        root: path.join(__dirname, "../../../public")
    });
};


/**
 * export User controller
 * @module user Controller
 */
module.exports = {
    profile
};
