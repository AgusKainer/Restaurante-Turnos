import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchWithToken from "./fetchWithToken";

const url = "http://localhost:1000";

// GET DEL BACK
export const fetchMesas = createAsyncThunk("mesas/fetchMesas", async () => {
  return await fetchWithToken(`${url}/mesa`, {
    method: "GET",
  });
});

export const fetchReserva = createAsyncThunk(
  "cliente/fetchReserva",
  async () => {
    return await fetchWithToken(`${url}/reserva`, {
      method: "GET",
    });
  }
);
