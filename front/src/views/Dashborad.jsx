import { useState } from "react";
import LogOut from "../components/LogOut";
import Mesas from "../components/MesaList";
import Reservas from "../components/ReservaList";
import CrearMesa from "../components/MesaForm";

export default function Dashboard() {
  const [seccion, setSeccion] = useState("mesas");

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      {/* Header */}
      <header className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <LogOut />
      </header>

      {/* Navegación */}
      <nav className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        <button
          onClick={() => setSeccion("mesas")}
          className={`w-full rounded-md px-4 py-3 text-sm font-semibold shadow transition duration-200 ${
            seccion === "mesas"
              ? "bg-indigo-500 hover:bg-indigo-400"
              : "bg-white/10 hover:bg-white/20"
          }`}
        >
          Mesas
        </button>
        <button
          onClick={() => setSeccion("reservas")}
          className={`w-full rounded-md px-4 py-3 text-sm font-semibold shadow transition duration-200 ${
            seccion === "reservas"
              ? "bg-indigo-500 hover:bg-indigo-400"
              : "bg-white/10 hover:bg-white/20"
          }`}
        >
          Reservas
        </button>
        <button
          onClick={() => setSeccion("crear")}
          className={`w-full rounded-md px-4 py-3 text-sm font-semibold shadow transition duration-200 ${
            seccion === "crear"
              ? "bg-indigo-500 hover:bg-indigo-400"
              : "bg-white/10 hover:bg-white/20"
          }`}
        >
          Crear Mesas
        </button>
      </nav>

      {/* Contenido dinámico */}
      <section className="bg-white/5 rounded-xl p-6 ring-1 ring-white/10 shadow-lg">
        {seccion === "mesas" && <Mesas />}
        {seccion === "reservas" && <Reservas />}
        {seccion === "crear" && <CrearMesa />}
      </section>
    </div>
  );
}
