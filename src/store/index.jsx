import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./slices/carsSlice";
import { addCarReducer } from "./slices/addCarSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    car: addCarReducer,
  }
});

export { store }
