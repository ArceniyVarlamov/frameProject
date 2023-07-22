import { createSlice } from "@reduxjs/toolkit";
import { IAccountPublicData } from "../interface";

export interface IVariablesState {
  framesMainWidth: number;
  framesCollectionsWidth: number;
  framesHeightConst: number;
  searchPerSearch: number;
}

const accountState: IVariablesState = {
  framesMainWidth: 290,
  framesCollectionsWidth: 200,
  framesHeightConst: 1.5,
  searchPerSearch: 5,
};

const variablesSlice = createSlice({
  name: "variables",
  initialState: accountState,
  reducers: {
    setFramesMainWidth(state, action) {
      state.framesMainWidth = action.payload
    },
    setFramesCollectionsWidth(state, action) {
      state.framesCollectionsWidth = action.payload
    },
    setFramesHeightConst(state, action) {
      state.framesHeightConst = action.payload
    },
  },
});

export const { setFramesMainWidth, setFramesCollectionsWidth, setFramesHeightConst } = variablesSlice.actions;

export default variablesSlice.reducer;