const userService = require("./user.service");
const userSchema = require("./user.validation");
const { encryptionMD5 } = require("../../helper/encryption");
const GENERAL = require("../../config/general");
/**
 * Profile
 * @type function
 * @param {Object} req express request
 * @param {Object} res  express response
 * @author Divyesh Patoliya<patoliyadivyesh101@gmail.com>
 */
const profile = async (req, res) => {
    try {
        const results = await userService.getUserDetails(req.login_id);
        if (results[0]) {
            results[0].profile_image_url =
                GENERAL.API_URL + GENERAL.TEMP_FILE_PATH.FILE_SERVER_PATH + results[0].profile_image;
            res.render("profile", { data: results[0], success: false, error: false });
        } else {
            res.render("profile", { data: req.body, success: false, error: "Something went wrong please try again" });
        }
    } catch (error) {
        res.render("profile", { data: req.body, success: false, error: "Something went wrong please try again" });
    }
};

/**
 * update Profile
 * @type function
 * @param {Object} req express request
 * @param {Object} res  express response
 * @author Divyesh Patoliya<patoliyadivyesh101@gmail.com>
 */
const updateProfile = async (req, res) => {
    try {
        const valid = userSchema.profileEditRequest(req.body);

        if (valid) {
            // check check Is Email Exist
            if (!(await userService.checkIsEmailExist(req.login_id, req.body.email))) {
                const editProfileParams = {
                    email: req.body.email,
                    f_name: req.body.f_name,
                    l_name: req.body.l_name,
                    profile_image: req.body.profile_image,
                    gender: req.body.gender,
                    birth_date: req.body.birth_date
                };
                if (req.body.password) editProfileParams.password = encryptionMD5(req.body.password);
                if (req.body.profile_image) editProfileParams.profile_image = req.body.profile_image;
                if (req.body.address) editProfileParams.address = req.body.address;


                // inset data
                await userService.updateProfile(req.login_id, editProfileParams);
                res.redirect("/profile");
            } else {
                res.render("profile", { data: req.body, success: false, error: "Email already registered" });
            }
        } else {
            res.render("profile", {
                data: req.body,
                success: false,
                error: userSchema.profileEditRequest.errors[0].message
            });
        }
    } catch (error) {
        console.log(error);
        res.render("profile", { data: req.body, success: false, error: "Something went wrong please try again" });
    }
};
/**
 * export User controller
 * @module user Controller
 */
module.exports = {
    profile,
    updateProfile
};
