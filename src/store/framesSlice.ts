import { createSlice } from "@reduxjs/toolkit";

export interface IFramesState {
  frames: string[];
  framesMaxHeight: number;
  framesLoaded: number;
  framesRedirect: number;
}

const framesState: IFramesState = {
  // Какие-то фреймы
  frames: [],
  // Подсчёт высоты каждого столбца. Нужно для системы разных высот столбиков в useRandomHeights
  framesMaxHeight: 0,
  // Подсчёт количества загруженных групп фреймов. Минимальное - 1
  framesLoaded: 1,
  // Подсчёт количества редиректов для обновления состояний колонок
  framesRedirect: 0,
};

const framesSlice = createSlice({
  name: "frames",
  initialState: framesState,
  reducers: {
    addFramesLoaded(state) {
      state.framesLoaded += 1;
    },
    resetFramesLoaded(state) {
      state.framesLoaded = 0;
    },
    addFramesMaxHeight(state, action) {
      if (action.payload > state.framesMaxHeight) {
        state.framesMaxHeight = action.payload
        console.log(state.framesMaxHeight);
      }
    },
    addFramesRedirect(state) {
      state.framesRedirect += 1;
    },
  },
});

export const { addFramesLoaded, addFramesMaxHeight, addFramesRedirect, resetFramesLoaded } = framesSlice.actions;

export default framesSlice.reducer;
