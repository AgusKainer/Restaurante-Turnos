import { configureStore } from "@reduxjs/toolkit";
import mesaSlice from "./reducers/mesaSlice";
import reservaSlice from "./reducers/reservaSlice";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    mesa: mesaSlice,
    reserva: reservaSlice,
    auth: authSlice,
  },
});

export default store;
