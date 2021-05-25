require("dotenv").config();

const env = {
  DB_URI: process.env.DB_URI,
};

module.exports = env;
