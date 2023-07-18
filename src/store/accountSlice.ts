import { createSlice } from "@reduxjs/toolkit";
import { IAccountPublicData } from "../interface";

export interface IAccountState {
  isRegistered: boolean;
  registeredWith: string;
  accessToken: string;
  accountData: IAccountPublicData;
}

const accountState: IAccountState = {
  isRegistered: false,
  registeredWith: "",
  accessToken: "",
  accountData: {} as IAccountPublicData,
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
    setInfo(state, action) {
      state.accountData = action.payload
    },
  },
});

export const { setIsRegistered, setRegisteredWith, setAccessToken, setInfo } = accountSlice.actions;

export default accountSlice.reducer;
