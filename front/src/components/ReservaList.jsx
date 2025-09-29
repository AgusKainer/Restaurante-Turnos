import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReserva } from "../redux/asyncThunk/createAsyncThunk";
const ReservaList = () => {
  const dispatch = useDispatch();
  const {
    list: reserva,
    loading,
    error,
  } = useSelector((state) => state.reserva);

  useEffect(() => {
    dispatch(fetchReserva());
  }, []);
  return (
    <div>
      ReservaList
      {loading && <p>Cargando....</p>}
      {error && <p>ERROR: ${error}</p>}
      {reserva.map((r) => (
        <div key={r.id}>
          <h3>Nombre: {r.nombre}</h3>
          <h3>Fecha: {r.fecha}</h3>
          <h3>Evento: {r.evento}</h3>
          <h3>Ubicacion: {r.ubicacion}</h3>
          <h3>Reserva creada: {r.createdAt}</h3>
          {r.Mesas.length > 0 ? (
            <div>
              <h2>Mesas Reservas:</h2>
              {r.Mesas.map((mesa) => (
                <div key={mesa.id}>
                  <h3>Numero de mesa: {mesa.numero_mesa}</h3>
                  <h3>Capacidad: {mesa.capacidad}</h3>
                </div>
              ))}
            </div>
          ) : (
            <p>No hay mesas reservadas</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ReservaList;
