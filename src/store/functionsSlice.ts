import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export interface IFunctionsState {
	errors: string[];
	updateCollectionData: number;
	updateFrameData: number;
}

const functionsState: IFunctionsState = {
	errors: [],
	updateCollectionData: 1,
	updateFrameData: 1,
};

const functionsSlice = createSlice({
	name: "functions",
	initialState: functionsState,
	reducers: {
		incError(state, action) {
			state.errors.push(action.payload);
		},
		removeError(state, action) {
			if (state.errors.length > 0) {
				state.errors.splice(action.payload, action.payload + 1);
			}
		},
		incUpdateCollectionData(state) {
			state.updateCollectionData += 1
		},
		incUpdateFrameData(state) {
			state.updateFrameData += 1
		}
	},
});

export const { incError, removeError, incUpdateCollectionData, incUpdateFrameData } = functionsSlice.actions;

export const addError = (dispatch: any, text: string): void => {
	
	dispatch(incError(text))
	setTimeout(() => {
		dispatch(removeError(0))
	}, 7000);
}

export default functionsSlice.reducer;

