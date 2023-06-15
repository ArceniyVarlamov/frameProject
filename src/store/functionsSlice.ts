import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

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
		incError(state, action) {
			console.log(action.payload, 'aaaaaa');
			
			state.errors.push(action.payload);
		},
		removeError(state, action) {
			state.errors.splice(action.payload, action.payload + 1);
		},
	},
});

export const { incError, removeError } = functionsSlice.actions;

export const addError = (dispatch: any, text: string): void => {
	
	dispatch(incError(text))
	setTimeout(() => {
		dispatch(removeError(0))
	}, 3000);
}

export default functionsSlice.reducer;

