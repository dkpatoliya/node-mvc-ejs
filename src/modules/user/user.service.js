const db = require("../../config/db");

const getUserDetails = async (id) => {
    return await db("tbl_user").select("*").where("id", id).andWhere("status", "Active").limit(1);
};

const updateProfile = async (userId, params) => {
    return await db("tbl_user").where("id", userId).select("id").update(params);
};

const checkIsEmailExist = async (loginId, email) => {
    const user = await db("tbl_user")
        .select("id")
        .where("email", email)
        .andWhere("status", "!=", "Deleted")
        .andWhere("id", "!=", loginId)
        .limit(1);

    if (user[0]) {
        return true;
    } else {
        return false;
    }
};
module.exports = { getUserDetails, updateProfile, checkIsEmailExist };
