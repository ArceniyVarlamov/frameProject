import { createSlice } from "@reduxjs/toolkit";

export interface IAccountState {
  isRegistered: boolean;
  registeredWith: string;
  accessToken: string;
}

const accountState: IAccountState = {
  isRegistered: false,
  registeredWith: "",
  accessToken: "",
};

const accountSlice = createSlice({
  name: "account",
  initialState: accountState,
  reducers: {
    setIsRegistered(state, action) {
      state.isRegistered = action.payload
    },
    setRegisteredWith(state, action) {
      state.registeredWith = action.payload
    },
    setAccessToken(state, action) {
      state.accessToken = action.payload
    },
  },
});

export const { setIsRegistered, setRegisteredWith, setAccessToken } = accountSlice.actions;

export default accountSlice.reducer;
