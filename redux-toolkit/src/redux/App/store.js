import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/counter/counterSlice";
import countryReducer from "../Features/country/countrySlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    country: countryReducer,
  },
});
