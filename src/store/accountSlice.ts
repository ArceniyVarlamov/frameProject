import { createSlice } from "@reduxjs/toolkit";

export interface IAccountState {
  isRegistered: boolean;
  accessToken: string;
}

const accountState: IAccountState = {
  isRegistered: false,
  accessToken: "",
};

const accountSlice = createSlice({
  name: "account",
  initialState: accountState,
  reducers: {
    setIsRegistered(state, action) {
      state.isRegistered = action.payload
    },
    setAccessToken(state, action) {
      state.accessToken = action.payload
    },
  },
});

export const { setIsRegistered, setAccessToken } = accountSlice.actions;

export default accountSlice.reducer;
