import useFormHook from "../customHooks/customForm.js";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchReservaPost,
  fetchMesas,
} from "../redux/asyncThunk/createAsyncThunk.js";

import { useEffect } from "react";

export default function FormReserva() {
  const dispatch = useDispatch();
  const { list: mesa, loading, error } = useSelector((state) => state.mesa);

  const { form, onChange } = useFormHook({
    nombre: "",
    fecha: "",
    evento: "",
    ubicacion: "",
    numero_mesa: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchReservaPost(form));
  };

  useEffect(() => {
    dispatch(fetchMesas());
  }, []);
  console.log(form);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white px-6 py-12 flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('/assets/images/alforno.png')",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      }}
    >
      <div className="px-6 py-12 rounded-xl shadow-lg max-w-lg w-full isolate">
        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Formulario de Reserva
        </h2>
        <p className="mt-2 text-lg text-gray-400">Haz tu reserva</p>
      </div>
      <form onSubmit={handleSubmit} className="mt-10 space-y-6">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="nombre"
              className="block text-sm font-semibold text-white tracking-wide"
            >
              Nombre
            </label>
            <div className="mt-2.5">
              <input
                id="nombre"
                name="nombre"
                type="text"
                autoComplete="given-name"
                value={form.nombre}
                onChange={onChange}
                className="w-full rounded-md bg-white/5 px-3.5 py-2 text-white placeholder:text-gray-500 ring-1 ring-white/10 focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold text-white tracking-wide"
            >
              Fecha
            </label>
            <div className="mt-2.5">
              <input
                id="fecha"
                name="fecha"
                type="date"
                autoComplete="family-name"
                value={form.fecha}
                onChange={onChange}
                className="w-full rounded-md bg-white/5 px-3.5 py-2 text-white placeholder:text-gray-500 ring-1 ring-white/10 focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="sm:col-span-1">
            <label
              htmlFor="evento"
              className="block text-sm font-semibold text-white tracking-wide"
            >
              Evento
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md bg-white/5 outline-1 -outline-offset-1 outline-white/10 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="evento"
                    name="evento"
                    autoComplete="evento"
                    aria-label="Country"
                    value={form.evento}
                    onChange={onChange}
                    className="w-full rounded-md bg-white/5 px-3.5 py-2 text-white placeholder:text-gray-500 ring-1 ring-white/10 focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Seleccionar</option>
                    <option value="almuerzo">Almuerzo</option>
                    <option value="cena">Cena</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="ubicacion"
              className="block text-sm/6 font-semibold text-white"
            >
              Ubicacion
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md bg-white/5 outline-1 -outline-offset-1 outline-white/10 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="ubicacion"
                    name="ubicacion"
                    autoComplete="ubicacion"
                    aria-label="Country"
                    value={form.ubicacion}
                    onChange={onChange}
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-transparent py-2 pr-7 pl-3.5 text-base text-gray-400 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  >
                    <option value="">Seleccionar</option>
                    <option value="interior">Interior</option>
                    <option value="exterior">Exterior</option>
                    <option value="pasillo">Pasillo</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-white tracking-wide mb-2">
            Selección de Mesa
          </h3>

          {loading && <p className="text-gray-400 text-sm">CARGANDO...</p>}
          {error && <p className="text-red-500 text-sm">ERROR: {error}</p>}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {mesa.map((m) => (
              <label
                key={m.id}
                className="flex items-center gap-3 rounded-md bg-white/5 px-4 py-2 text-white ring-1 ring-white/10 hover:ring-indigo-500 transition"
              >
                <input
                  type="checkbox"
                  name="numero_mesa"
                  value={m.numero_mesa}
                  onChange={onChange}
                  className="h-4 w-4 accent-indigo-500"
                />
                <span className="text-sm">
                  Mesa {m.numero_mesa} · Capacidad: {m.capacidad}
                </span>
              </label>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Reservar
          </button>
        </div>
      </form>
    </div>
  );
}
