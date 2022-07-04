import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../components/CakeSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
  },
});

export default store;
