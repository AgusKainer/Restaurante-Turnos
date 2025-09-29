import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./views/Home";
import Dashboard from "./views/Dashborad";

import MesaList from "./components/MesaList";
import Login from "./components/Login";
import ReservaList from "./components/ReservaList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="mesa" element={<MesaList />} />
          <Route path="reserva" element={<ReservaList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
