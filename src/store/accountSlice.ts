import { createSlice } from "@reduxjs/toolkit";
import { IAccountLinks } from "../interface";

export interface IAccountState {
  isRegistered: boolean;
  registeredWith: string;
  accessToken: string;
  links: IAccountLinks
}

const accountState: IAccountState = {
  isRegistered: false,
  registeredWith: "",
  accessToken: "",
  links: {} as IAccountLinks,
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
    setLinks(state, action) {
      state.links = action.payload
    },
  },
});

export const { setIsRegistered, setRegisteredWith, setAccessToken, setLinks } = accountSlice.actions;

export default accountSlice.reducer;
