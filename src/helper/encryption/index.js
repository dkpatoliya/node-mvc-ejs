const crypto = require("crypto");

/**
 * MD5 Encryption function
 * @type function
 * @param {string} plaintext - plan text
 * @returns {string} ncrypted text
 * @author Divyesh Patoliya <patoliyadivyesh101@gmail.com>
 */
const encryptionMD5 = (plaintext) => {
    return crypto.createHash("md5").update(plaintext).digest("hex");
};

module.exports = {
    encryptionMD5
};