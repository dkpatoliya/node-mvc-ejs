

/**
 * Profile
 * @type function
 * @param {Object} _req express request
 * @param {Object} res  express response
 * @author Divyesh Patoliya<patoliyadivyesh101@gmail.com>
 */
const profile = (req, res) => {
    console.log(req.session);
    res.render("profile", { data: req.body, success: false, error: false });
};


/**
 * export User controller
 * @module user Controller
 */
module.exports = {
    profile
};
