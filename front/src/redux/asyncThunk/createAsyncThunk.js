import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMesas = createAsyncThunk("mesas/fetchMesas", async () => {
  const token = localStorage.getItem("token");
  const res = await fetch("http://localhost:1000/mesa", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("No autorizado");
  const data = await res.json();
  return data;
});
