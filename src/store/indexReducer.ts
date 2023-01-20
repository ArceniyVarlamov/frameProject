import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./accountSlice";
import framesReducer from "./framesSlice";

const store = configureStore({
  reducer: {
    frames: framesReducer,
    account: accountReducer,
  },
});

export default store;
