import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchWithToken from "./fetchWithToken";

const url = "http://localhost:1000";

// GET DEL BACK
export const fetchMesasDisponibles = createAsyncThunk(
  "mesa/fetchDisponibles",
  async ({ fecha, evento, ubicacion }, { rejectWithValue }) => {
    try {
      const query = new URLSearchParams({
        fecha,
        evento,
        ubicacion,
      }).toString();

      const res = await fetch(`${url}/mesaDisponible?${query}`);

      if (!res.ok) {
        throw new Error("Error al obtener mesas disponibles");
      }

      const data = await res.json();
      return data; // array de mesas disponibles
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

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

export const fetchEmail = createAsyncThunk("email/send", async ({ id }) => {
  console.log("log de redux: ", id);

  const res = await fetch(`${url}/email/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error("ERROR AL ENVIAR EL EMAIL DE RESERVA");
  return await res.json();
});
