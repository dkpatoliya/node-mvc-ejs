const ajv = require("../../helper/validator");

const profileEditRequest = ajv.compile({
    type: "object",
    properties: {
        f_name: { type: "string", maxLength: 50 },
        l_name: { type: "string", maxLength: 50 },
        email: { type: "string", format: "email", maxLength: 254 },
        password: { type: "string", maxLength: 128 },
        gender: { enum: ["M", "F", "O"] },
        profile_image: { type: "string" },
        birth_date: { type: "string", format: "date" },
        address: { type: "string" }
    },
    required: ["f_name", "l_name", "email", "gender", "birth_date"]
});

module.exports = { profileEditRequest };
