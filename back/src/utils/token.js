const jwt = require("jsonwebtoken");
const { SECRET } = require("./config");

const generateToken = (params) => {
  return jwt.sign(params, SECRET);
};

const verifyToken = (token) => {
  return jwt.verify(token, SECRET);
};

module.exports = { generateToken, verifyToken };
