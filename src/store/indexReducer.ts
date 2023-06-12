import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./accountSlice";
import framesReducer from "./framesSlice";
import functionsReducer from "./functionsSlice";

const store = configureStore({
  reducer: {
    frames: framesReducer,
    account: accountReducer,
    functions: functionsReducer,
  },
});

export default store;
