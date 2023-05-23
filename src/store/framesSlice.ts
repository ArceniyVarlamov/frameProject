import { createSlice } from "@reduxjs/toolkit";

export interface IFramesState {
  frames: string[];
  framesHeight: {columnNum: number; heightsValue: number[]}[];
  framesLoaded: number;
}

const framesState: IFramesState = {
  // Какие-то фреймы
  frames: [],
  // Подсчёт высоты каждого столбца. Нужно для системы разных высот столбиков в useRandomHeights
  framesHeight: [],
  // Подсчёт количества загруженных групп фреймов
  framesLoaded: 1,
};

const framesSlice = createSlice({
  name: "frames",
  initialState: framesState,
  reducers: {
    addFramesLoaded(state) {
      state.framesLoaded += 1;
    },
    addFramesHeight(state, action) {
      state.framesHeight.push(action.payload)
    },
  },
});

export const { addFramesLoaded, addFramesHeight } = framesSlice.actions;

export default framesSlice.reducer;
