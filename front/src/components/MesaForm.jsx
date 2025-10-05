import { useDispatch } from "react-redux";
import useFormHook from "../customHooks/customForm";
import { fetchMesaPost } from "../redux/asyncThunk/createAsyncThunk";

const MesaForm = () => {
  const formInitial = {
    numero_mesa: 0,
    capacidad: 0,
  };
  const { form, onChange } = useFormHook(formInitial);
  const { numero_mesa, capacidad } = form;
  const distpatch = useDispatch();
  const onSubmit = async (e) => {
    e.preventDefault();
    distpatch(fetchMesaPost(form));
  };

  return (
    <div>
      MesaForm
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="numero_mesa">Numero de mesa</label>
          <input
            type="number"
            name="numero_mesa"
            id="numero_mesa"
            value={numero_mesa}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="capacidad">Capacidad</label>
          <input
            type="number"
            name="capacidad"
            id="capacidad"
            value={capacidad}
            onChange={onChange}
          />
        </div>
        <div>
          <button type="submit">Crear</button>
        </div>
      </form>
    </div>
  );
};

export default MesaForm;
