import { createSlice } from "@reduxjs/toolkit";


const accountSlice = createSlice({
  name: "frames",
  initialState: {
    code: ""
  },
  reducers: {
    setCode(state, action) {
      state.code = action.payload.code;
    },
  },
});

export const { setCode } = accountSlice.actions;

export default accountSlice.reducer;

