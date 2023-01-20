import { createSlice } from "@reduxjs/toolkit";

export interface IAccountState {
  code: string;
}

const accountState: IAccountState = {
  code: "",
};

const accountSlice = createSlice({
  name: "account",
  initialState: accountState,
  reducers: {
    setCode(state, action) {
      state.code = action.payload;
    },
  },
});

export const { setCode } = accountSlice.actions;

export default accountSlice.reducer;

