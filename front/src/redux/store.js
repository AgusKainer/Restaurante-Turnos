import { configureStore } from "@reduxjs/toolkit";
import mesaSlice from "./reducers/mesaSlice";
import reservaSlice from "./reducers/reservaSlice";
import mesaDisponibleSice from "./reducers/mesaDisponibleSice";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    mesa: mesaSlice,
    mesaDisponible: mesaDisponibleSice,
    reserva: reservaSlice,
    auth: authSlice,
  },
});

export default store;
