import { createSlice } from "@reduxjs/toolkit"

export interface IFunctionsState {
  errors: string[]
}

const functionsState: IFunctionsState = {
  errors: []
}

const functionsSlice = createSlice({
  name: "functions",
  initialState: functionsState,
  reducers: {
    addError(state, action) {
      state.errors.push(action.payload)
    }
  }
})

export const { addError } = functionsSlice.actions

export default functionsSlice.reducer