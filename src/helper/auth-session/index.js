
/**
 * Authorized Session
 * @param {Object} req Express request object
 * @param {Object} rep Express response object
 * @param {Function} next Express next callback
 * @author Divyesh Patoliya <patoliyadivyesh101@gmail.com>
 */
const authorizeSession = (_req, _rep, next) => {

    next();


};

module.exports = { authorizeSession };