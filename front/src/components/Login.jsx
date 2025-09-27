import useFormHook from "../customHooks/customForm";
import loginAdmin from "../customHooks/login";
import { useState } from "react";

const Login = () => {
  const formInitial = {
    usuario: "",
    password: "",
  };
  const { form, onChange } = useFormHook(formInitial);
  const { usuario, password } = form;

  console.log("usuarios front: ", typeof usuario);
  console.log("password front: ", typeof password);

  const [logueado, setLogueado] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const success = await loginAdmin(usuario, password);
      if (success) {
        console.log("✅ Logueado correctamente");
        setLogueado(true); // ✅ muestra pantalla en blanco
      }
    } catch (error) {
      console.error("❌ Error de login:", error.message);
    }
  };

  if (logueado) return <div style={{ background: "#fff", height: "100vh" }} />;

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
