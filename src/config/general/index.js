let { SERVER_HOST, PORT } = process.env;

SERVER_HOST = SERVER_HOST ? SERVER_HOST : "http://127.0.0.1";
PORT = PORT ? PORT : 3000;
const API_URL = SERVER_HOST + ":" + PORT;

const GENERAL = {
    API_URL,
    DEFAULT_TIMEZONE: "UTC",
    TEMP_FILE_PATH: {
        FILE_PATH: "/public/tmp/",
        FILE_SERVER_PATH: "/tmp/"
    },
    ORIGINAL_FILE_PATH: {
        IMAGE_PATH: "/public/image/",
        IMAGE_PREVIEW_PATH: "/images/",
    },
};

module.exports = GENERAL;