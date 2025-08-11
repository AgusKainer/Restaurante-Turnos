const { Mesa } = require("../../../models/index.model");

const getMesaServices = async () => {
  return Mesa.findAll();
};

module.exports = getMesaServices;
