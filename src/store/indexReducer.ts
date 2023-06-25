import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./accountSlice";
import framesReducer from "./framesSlice";
import functionsReducer from "./functionsSlice";
import variablesReducer from "./variablesSlice";

const store = configureStore({
  reducer: {
    frames: framesReducer,
    account: accountReducer,
    functions: functionsReducer,
    variables: variablesReducer,
  },
});

export default store;
