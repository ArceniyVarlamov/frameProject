import { createSlice } from "@reduxjs/toolkit";

const framesSlice = createSlice({
  name: "frames",
  initialState: {
    rames: [],
    id: 1,
    col: 1,
  },
  reducers: {
    addId(state) {
      state.id += 12;
    },
    addCol(state) {
      state.col += 1;
    },
  },
});

export const { addId, addCol } = framesSlice.actions;

export default framesSlice.reducer;
