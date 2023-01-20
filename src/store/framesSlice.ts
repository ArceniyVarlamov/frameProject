import { createSlice } from "@reduxjs/toolkit";

export interface IFramesState {
  frames: string[];
  id: number;
  col: number;
}

const framesState: IFramesState = {
  frames: [],
  id: 1,
  col: 1,
};

const framesSlice = createSlice({
  name: "frames",
  initialState: framesState,
  reducers: {
    addId(state) {
      state.id += 13;
    },
    addCol(state) {
      state.col += 1;
    },
  },
});

export const { addId, addCol } = framesSlice.actions;

export default framesSlice.reducer;
