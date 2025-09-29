import useFormHook from "../customHooks/customForm";
import loginAdmin from "../customHooks/login";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formInitial = {
    usuario: "",
    password: "",
  };
  const { form, onChange } = useFormHook(formInitial);
  const { usuario, password } = form;

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const success = await loginAdmin(usuario, password);
      if (success) {
        console.log("✅ Logueado correctamente");
        dispatch(login());
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("❌ Error de login:", error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="usuario">Usuario</label>
          <input
            type="text"
            name="usuario"
            id="usuario"
            value={usuario}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
