const { Mesa, Reserva } = require("../../../models/index.model");

const postReservServices = async ({
  nombre,
  fecha,
  evento,
  ubicacion,
  numero_mesa,
}) => {
  const mesa = await Mesa.findAll({ where: { numero_mesa: numero_mesa } });

  if (mesa.length !== numero_mesa.length) {
    throw new Error("Uno o mas mesas no existen");
  }
  const reserva = await Reserva.create({
    nombre,
    fecha,
    evento,
    ubicacion,
  });

  return await reserva.addMesas(mesa);
};

module.exports = postReservServices;
