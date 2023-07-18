import { createSlice } from "@reduxjs/toolkit";
import { IAccountPublicData, ISearchFrames } from "../interface";

export interface ISearchState {
  searchInfo: ISearchFrames;
  searchHistory: ISearchFrames[]
}

const searchState: ISearchState = {
  searchInfo: {} as ISearchFrames,
  searchHistory: [{}] as ISearchFrames[],
};

const searchSlice = createSlice({
  name: "search",
  initialState: searchState,
  reducers: {
    addSearchItem (state, action) {
      state.searchHistory.push(action.payload)
    }
  },
});

export const { addSearchItem } = searchSlice.actions;

export default searchSlice.reducer;
