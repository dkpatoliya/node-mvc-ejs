const authService = require("./auth.service");

const authSchema = require("./auth.validation");
const { encryptionMD5 } = require("../../helper/encryption");
// const authService = require("./auth.service");

/**
 * login page controller
 * @type function
 * @param {Object} _ express request
 * @param {Object} res  express response
 * @author Divyesh Patoliya<patoliyadivyesh101@gmail.com>
 */
const loginPage = (_, res) => {
    res.render("login", { success: false, error: false });
};

/**
 * login page controller
 * @type function
 * @param {Object} _ express request
 * @param {Object} res  express response
 * @author Divyesh Patoliya<patoliyadivyesh101@gmail.com>
 */
const loginRequest = async (req, res) => {
    try {
        const valid = authSchema.loginRequest(req.body);

        if (valid) {
            // check check Is Email Exist

            const loginParams = {
                email: req.body.email,
                password: encryptionMD5(req.body.password)
            };
            // inset data
            const user = await authService.loginUser(loginParams);
            if (user[0]) {
                // will have a new session here
                let session = req.session;
                session.login_id = user[0].id;
               
                res.redirect("/profile");
            } else {
                res.render("login", { data: req.body, success: false, error: "Invalid Email or password" });
            }
        } else {
            res.render("login", { data: req.body, success: false, error: authSchema.loginRequest[0].message });
        }
    } catch (error) {
        console.log(error);
        res.render("login", { data: req.body, success: false, error: "Something went wrong please try again" });
    }
};

/**
 * register page controller
 * @type function
 * @param {Object} _ express request
 * @param {Object} res  express response
 */
const registerPage = (_, res) => {
    res.render("register", { data: {}, success: false, error: false });
};
/**
 * register request controller
 * @type function
 * @param {Object} req express request
 * @param {Object} res  express response
 */
const registerRequest = async (req, res) => {
    try {
        const valid = authSchema.registerRequest(req.body);

        if (valid) {
            // check check Is Email Exist
            if (!(await authService.checkIsEmailExist(req.body.email))) {
                const registerParams = {
                    email: req.body.email,
                    f_name: req.body.f_name,
                    l_name: req.body.l_name,
                    profile_image: req.body.profile_image,
                    gender: req.body.gender,
                    password: encryptionMD5(req.body.password),
                    birth_date: req.body.birth_date
                };
                // inset data
                await authService.addUser(registerParams);
                res.redirect("/auth/login");
            } else {
                res.render("register", { data: req.body, success: false, error: "Email already registered" });
            }
        } else {
            res.render("register", {
                data: req.body,
                success: false,
                error: authSchema.registerRequest.errors[0].message
            });
        }
    } catch (error) {
        res.render("register", { data: req.body, success: false, error: "Something went wrong please try again" });
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
