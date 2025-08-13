const getMesaController = require("./restaurante/GET/getMesa.controller");
const getReservaController = require("./restaurante/GET/getReserva.controller");

//POST
const postMesaContreller = require("./restaurante/POST/postMesa.controller");

module.exports = {
  getMesaController,
  getReservaController,
  postMesaContreller,
};
