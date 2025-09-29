import { configureStore } from "@reduxjs/toolkit";
import mesaSlice from "./reducers/mesaSlice";
import reservaSlice from "./reducers/reservaSlice";

const store = configureStore({
  reducer: {
    mesa: mesaSlice,
    reserva: reservaSlice,
  },
});

export default store;
