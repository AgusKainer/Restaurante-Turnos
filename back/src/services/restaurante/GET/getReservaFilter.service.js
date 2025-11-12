const filterReservas = require("../../../utils/filterReservas");
const { Reserva } = require("../../../models/index.model");

const getReservaFilterService = async (filtros) => {
  const where = filterReservas(filtros);
  const reservaFilter = await Reserva.findAll({ where });
  return reservaFilter;
};

module.exports = getReservaFilterService;
