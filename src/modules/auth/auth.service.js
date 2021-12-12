const db = require("../../config/db/");

const checkIsEmailExist = async (email) => {
    const user = await db("tbl_user").select("id").where("email", email).andWhere("status", "!=", "Deleted").limit(1);

    if (user[0]) {
        return true;
    } else {
        return false;
    }
};

const addUser = async (registerParams) => {
    return await db("tbl_user").insert(registerParams);
};

const loginUser = async (LoginParams) => {
    return await db("tbl_user").select("*").where(LoginParams).andWhere("status", "Active").limit(1);
};

module.exports = {
    checkIsEmailExist,
    addUser,
    loginUser
};
