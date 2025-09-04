const getMesaServices = require("./restaurante/GET/getMesa.service");
const getReservaServices = require("./restaurante/GET/getReserva.service");

// POST

const postMesaServices = require("./restaurante/POST/postMesa.service");
const postReservServices = require("./restaurante/POST/postReserva.service");
// ADMIN
const postAdminServices = require("./restaurante/POST/postAdmin.service");
const loginAdminServices = require("./restaurante/POST/loginAdmin.service");

// SEND EMAIL
const email = require("./restaurante/POST/email.service");

// DELETE
const deleteReservaServices = require("./restaurante/DELETE/delete.service");
module.exports = {
  getMesaServices,
  getReservaServices,
  postMesaServices,
  postReservServices,
  postAdminServices,
  loginAdminServices,
  email,
  deleteReservaServices,
};
