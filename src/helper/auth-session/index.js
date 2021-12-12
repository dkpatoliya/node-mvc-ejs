/**
 * Authorized Session
 * @param {Object} req Express request object
 * @param {Object} rep Express response object
 * @param {Function} next Express next callback
 * @author Divyesh Patoliya <patoliyadivyesh101@gmail.com>
 */
const authorizeSession = (req, res, next) => {
    const session = req.session;
    if (session && session.login_id && session.login_id !== 0) {
        req.login_id = session.login_id;
        next();
    } else {
        res.status(401).redirect("/auth/login");
    }
};

module.exports = { authorizeSession };
