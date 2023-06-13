import { createSlice } from "@reduxjs/toolkit";

export interface IFunctionsState {
	errors: string[];
}

const functionsState: IFunctionsState = {
	errors: [],
};

const functionsSlice = createSlice({
	name: "functions",
	initialState: functionsState,
	reducers: {
		addError(state, action) {
			state.errors.push(action.payload);
		},
		removeError(state, action) {
			try {
				state.errors.splice(action.payload, action.payload + 1);
			} catch (error) {
				console.log(error);
			}
		},
	},
});

export const { addError, removeError } = functionsSlice.actions;

export default functionsSlice.reducer;
