import { createSlice } from "@reduxjs/toolkit";
import { IAccountPublicData } from "../interface";

export interface IVariablesState {
  framesMainWidth: number;
  framesCollectionsWidth: number;
  framesHeightConst: number;
}

const accountState: IVariablesState = {
  framesMainWidth: 220,
  framesCollectionsWidth: 220,
  framesHeightConst: 2,
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