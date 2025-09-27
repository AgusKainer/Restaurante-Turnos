import { configureStore } from "@reduxjs/toolkit";
import mesaSlice from "./reducers/mesaSlice";

const store = configureStore({
  reducer: {
    mesa: mesaSlice,
  },
});

export default store;
