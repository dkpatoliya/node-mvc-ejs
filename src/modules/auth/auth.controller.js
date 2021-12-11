const path = require("path");

/**
 * login page controller
 * @type function
 * @param {Object} _ express request
 * @param {Object} res  express response
 * @author Divyesh Patoliya<patoliyadivyesh101@gmail.com>
 */
const loginPage = (_, res) => {
    res.sendFile("html/auth/login.html", {
        root: path.join(__dirname, "../../../public")
    });
};

/**
 * register page controller
 * @type function
 * @param {Object} _ express request
 * @param {Object} res  express response
 */
const registerPage = (_, res) => {
    res.sendFile("html/auth/register.html", {
        root: path.join(__dirname, "../../../public")
    });
};



/**
 * export auth controller
 * @module Auth Controller
 */
module.exports = {
    loginPage,
    registerPage
};
