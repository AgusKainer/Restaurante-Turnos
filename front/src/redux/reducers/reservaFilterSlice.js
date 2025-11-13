import { createSlice } from "@reduxjs/toolkit";
import {
  fetchReservasFiltradas,
  fetchReserva,
} from "../asyncThunk/createAsyncThunk";

const reservaFilter = createSlice({
  name: "reservaFilter",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    setReservaFilter: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReserva.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(fetchReservasFiltradas.fulfilled, (state, action) => {
        state.data = action.payload;
      });
  },
});

export const { setError, setLoading, setReservaFilter } = reservaFilter.actions;
export default reservaFilter.reducer;
