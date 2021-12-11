const path = require("path");



const authSchema = require("./auth.validation");
// const authService = require("./auth.service");

/**
 * login page controller
 * @type function
 * @param {Object} _ express request
 * @param {Object} res  express response
 * @author Divyesh Patoliya<patoliyadivyesh101@gmail.com>
 */
const loginPage = (_, res) => {
    res.render("login");
};

/**
 * login page controller
 * @type function
 * @param {Object} _ express request
 * @param {Object} res  express response
 * @author Divyesh Patoliya<patoliyadivyesh101@gmail.com>
 */
const loginRequest = (req, res) => {



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
    res.render("register");
};
/**
 * register request controller
 * @type function
 * @param {Object} req express request
 * @param {Object} res  express response
 */
const registerRequest = (req, res) => {
    const valid = authSchema.registerRequest(req.body);
    if (valid) {
        res.render("register");
    } else {
        console.log(authSchema.registerRequest);
       
        res.render("register");
    }


};





/**
 * export auth controller
 * @module Auth Controller
 */
module.exports = {
    loginPage,
    loginRequest,
    registerPage,
    registerRequest
};
