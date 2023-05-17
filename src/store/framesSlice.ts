import { createSlice } from "@reduxjs/toolkit";

export interface IFramesState {
  frames: string[];
  framesHeight: number[];
  col: number;
}

const framesState: IFramesState = {
  frames: [],
  framesHeight: [],
  col: 1,
};

const framesSlice = createSlice({
  name: "frames",
  initialState: framesState,
  reducers: {
    addCol(state) {
      state.col += 1;
    },
    addFramesHeight(state, action) {
      state.framesHeight.push(action.payload)
    },
    addHeight(state, action) {
      state.framesHeight[action.payload.column] += action.payload.height
    },
  },
});

export const { addCol, addFramesHeight, addHeight } = framesSlice.actions;

export default framesSlice.reducer;
