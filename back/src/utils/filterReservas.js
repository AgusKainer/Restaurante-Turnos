const filterReservas = ({ fecha, evento, ubicacion }) => {
  const query = {};
  if (fecha) query.fecha = fecha;
  if (evento) query.evento = evento;
  if (ubicacion) query.ubicacion = ubicacion;
  return query;
};

module.exports = filterReservas;
