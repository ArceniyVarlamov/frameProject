import { createSlice } from "@reduxjs/toolkit";

export interface IFramesState {
	framesLoaded: number;
	framesRedirect: boolean;
}

const framesState: IFramesState = {
	// Подсчёт количества загруженных групп фреймов. Минимальное - 1
	framesLoaded: 1,
	// Подсчёт количества редиректов для обновления состояний колонок
	framesRedirect: false,
};

const framesSlice = createSlice({
	name: "frames",
	initialState: framesState,
	reducers: {
		addFramesLoaded(state) {
			state.framesLoaded += 1;
		},
		resetFramesLoaded(state) {
			state.framesLoaded = 1;
		},
		addFramesRedirect(state) {
			state.framesRedirect = true;
		},
		resetFramesRedirect(state) {
			state.framesRedirect = false;
		},
	},
});

export const { addFramesLoaded, addFramesRedirect, resetFramesLoaded, resetFramesRedirect } =
	framesSlice.actions;

export default framesSlice.reducer;
