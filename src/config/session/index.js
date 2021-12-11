const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);

const db = require("../db/index");
const crypto = require("crypto");



const sessionSetting = session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    genid: () => {
        return crypto.randomBytes(16).toString("hex") || ""; // use UUIDs for session IDs
    },
    cookie: {
        maxAge: 86400000, // One Day, for testing
    },
    store: new KnexSessionStore({
        knex: db,
        sidfieldname: "id",
        createtable: true,
        clearInterval: 86400001,
        tablename: "tbl_sessions", // optional. Defaults to 'sessions'
    })
});


module.exports = sessionSetting;