import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReserva } from "../redux/asyncThunk/createAsyncThunk";
const ReservaList = () => {
  const dispatch = useDispatch();
  const {
    data: reserva,
    loading,
    error,
  } = useSelector((state) => state.reservaFilter);
  console.log("QUE VIENE DEL ESTADO: ", reserva);

  // useEffect(() => {
  //   dispatch(fetchReserva());
  // }, []);
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-white">Lista de Reservas</h2>

      {loading && <p className="text-gray-400">Cargando...</p>}
      {error && <p className="text-red-500">ERROR: {error}</p>}

      {reserva.map((r) => (
        <div
          key={r.id}
          className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10 shadow-md space-y-4"
        >
          <div className="space-y-1">
            <h3 className="text-white text-base font-semibold">
              Nombre:{" "}
              <span className="font-normal text-gray-300">{r.nombre}</span>
            </h3>
            <h3 className="text-white text-base font-semibold">
              Fecha:{" "}
              <span className="font-normal text-gray-300">{r.fecha}</span>
            </h3>
            <h3 className="text-white text-base font-semibold">
              Evento:{" "}
              <span className="font-normal text-gray-300">{r.evento}</span>
            </h3>
            <h3 className="text-white text-base font-semibold">
              Ubicación:{" "}
              <span className="font-normal text-gray-300">{r.ubicacion}</span>
            </h3>
            <h3 className="text-white text-base font-semibold">
              Reserva creada:{" "}
              <span className="font-normal text-gray-300">{r.createdAt}</span>
            </h3>
          </div>

          {r.Mesas.length > 0 ? (
            <div className="mt-4 space-y-2">
              <h4 className="text-indigo-400 font-semibold">
                Mesas Reservadas:
              </h4>
              {r.Mesas.map((mesa) => (
                <div
                  key={mesa.id}
                  className="rounded-md bg-white/10 px-4 py-2 ring-1 ring-white/10"
                >
                  <p className="text-sm text-white">
                    Número de mesa:{" "}
                    <span className="text-gray-300">{mesa.numero_mesa}</span>
                  </p>
                  <p className="text-sm text-white">
                    Capacidad:{" "}
                    <span className="text-gray-300">{mesa.capacidad}</span>
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-400">No hay mesas reservadas</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ReservaList;
