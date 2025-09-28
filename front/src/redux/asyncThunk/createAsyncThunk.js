import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchWithToken from "./fetchWithToken";

const url = "http://localhost:1000";

export const fetchMesas = createAsyncThunk("mesas/fetchMesas", async () => {
  return await fetchWithToken(`${url}/mesa`, {
    method: "GET",
  });
});
