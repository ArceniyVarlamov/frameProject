import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./accountSlice";
import framesReducer from "./framesSlice";
import functionsReducer from "./functionsSlice";
import variablesReducer from "./variablesSlice";
import searchReducer from "./searchSlice";

const store = configureStore({
  reducer: {
    frames: framesReducer,
    account: accountReducer,
    functions: functionsReducer,
    variables: variablesReducer,
    search: searchReducer,
  },
});

export default store;
