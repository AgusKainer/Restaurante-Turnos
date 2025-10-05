import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchWithToken from "./fetchWithToken";

const url = "http://localhost:1000";

// GET DEL BACK
export const fetchMesas = createAsyncThunk("mesas/fetchMesas", async () => {
  const res = await fetch(`${url}/mesa`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error("Error al obtener mesas");
  return await res.json();
});

export const fetchReserva = createAsyncThunk(
  "reserva/fetchReserva",
  async (reserva) => {
    return await fetchWithToken(`${url}/reserva`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
  }
);

// POST DEL BACK
export const fetchMesaPost = createAsyncThunk(
  "mesaPost/fetchMesaPost",
  async (mesa) => {
    return await fetchWithToken(`${url}/postmesa`, {
      method: "POST",
      body: JSON.stringify(mesa),
    });
  }
);

export const fetchReservaPost = createAsyncThunk(
  "reserva/create",
  async (data) => {
    const res = await fetch(`${url}/postreserva`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Error al crear la reserva");
    return await res.json();
  }
);
