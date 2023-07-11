import { createSlice } from "@reduxjs/toolkit";
import { IAccountPublicData, ISearchPhotos } from "../interface";

export interface ISearchState {
  searchInfo: ISearchPhotos;
  searchHistory: ISearchPhotos[]
}

const searchState: ISearchState = {
  searchInfo: {} as ISearchPhotos,
  searchHistory: [{}] as ISearchPhotos[],
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
