import { createSlice } from "@reduxjs/toolkit";
import { IAccountPublicData, ISearchPhotoes } from "../interface";

export interface ISearchState {
  searchInfo: ISearchPhotoes;
  searchHistory: ISearchPhotoes[]
}

const searchState: ISearchState = {
  searchInfo: {} as ISearchPhotoes,
  searchHistory: [{}] as ISearchPhotoes[],
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
