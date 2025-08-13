const getMesaServices = require("./restaurante/GET/getMesa.service");
const getReservaServices = require("./restaurante/GET/getReserva.service");

// POST

const postMesaServices = require("./restaurante/POST/postMesa.service");

module.exports = { getMesaServices, getReservaServices, postMesaServices };
