const getMesaController = require("./restaurante/GET/getMesa.controller");
const getReservaController = require("./restaurante/GET/getReserva.controller");

//POST
const postMesaContreller = require("./restaurante/POST/postMesa.controller");
const postReservaController = require("./restaurante/POST/postReserva.controller");
// ADMIN
const postAdminController = require("./restaurante/POST/postAdmin.controller");
const loginAdminController = require("./restaurante/POST/loginAdmin.controller");

// EMAIL
const sendMailController = require("./restaurante/POST/email.controller");
module.exports = {
  getMesaController,
  getReservaController,
  postMesaContreller,
  postReservaController,
  postAdminController,
  loginAdminController,
  sendMailController,
};
