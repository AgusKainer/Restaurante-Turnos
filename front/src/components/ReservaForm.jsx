import useFormHook from "../customHooks/customForm.js";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchReservaPost,
  fetchMesas,
} from "../redux/asyncThunk/createAsyncThunk.js";

import { useEffect } from "react";

const FormReserva = () => {
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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="email"
          name="nombre"
          id="nombre"
          value={form.nombre}
          onChange={onChange}
          required
        />
      </div>

      <div>
        <label htmlFor="fecha">Fecha</label>
        <input
          type="date"
          name="fecha"
          id="fecha"
          value={form.fecha}
          onChange={onChange}
          required
        />
      </div>

      <div>
        <label htmlFor="evento">Evento</label>
        <select
          name="evento"
          id="evento"
          value={form.evento}
          onChange={onChange}
          required
        >
          <option value="">Seleccionar</option>
          <option value="almuerzo">Almuerzo</option>
          <option value="cena">Cena</option>
        </select>
      </div>

      <div>
        <label htmlFor="ubicacion">Ubicación</label>
        <select
          name="ubicacion"
          id="ubicacion"
          value={form.ubicacion}
          onChange={onChange}
          required
        >
          <option value="">Seleccionar</option>
          <option value="interior">Interior</option>
          <option value="exterior">Exterior</option>
        </select>
      </div>

      <div>
        {loading && <p>CARGANDO....</p>}
        {error && <p>ERROR: {error}</p>}
        {console.log(mesa)}
        {mesa.map((m) => (
          <div key={m.id}>
            <label>
              <input
                type="checkbox"
                name="numero_mesa"
                value={m.numero_mesa}
                onChange={onChange}
              />
              Mesa {m.numero_mesa} - Capacidad: {m.capacidad}
            </label>
          </div>
        ))}
      </div>

      <button type="submit">Reservar</button>
    </form>
  );
};

export default FormReserva;
