import {createSlice} from "@reduxjs/toolkit";
import {fetchRandomImage, fetchSearchResults, fetchTrendsResults} from "../thunks/giphyAsyncActions";
import {GiphyRandomImage, GiphySearchItem, GiphyTrendsItem} from "../../types";

interface GiphyState {
  status: "idle" | "loading" | "loaded" | "error";
  randomImage: GiphyRandomImage | null;
  searchResults: GiphySearchItem[] | null;
  trendsResults: GiphyTrendsItem[] | null;
}

const initialState = {
  status: "idle",
  randomImage: null,
  searchResults: null,
  trendsResults: null
} satisfies GiphyState as GiphyState

const giphySlice = createSlice({
  name: 'giphy',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchRandomImage.pending, (state: GiphyState) => {
        state.status = "loading";
      })
      .addCase(fetchRandomImage.fulfilled, (state: GiphyState, action) => {
        state.status = "loaded";
        state.randomImage = action.payload;
      })
      .addCase(fetchRandomImage.rejected, (state: GiphyState) => {
        state.status = "error";
      })
      .addCase(fetchSearchResults.pending, (state: GiphyState) => {
        state.status = 'loading';
      })
      .addCase(fetchSearchResults.fulfilled, (state: GiphyState, action) => {
        state.status = 'loaded';
        state.searchResults = action.payload;
      })
      .addCase(fetchSearchResults.rejected, (state: GiphyState) => {
        state.status = 'error';
      })
      .addCase(fetchTrendsResults.pending, (state: GiphyState) => {
        state.status = 'loading';
      })
      .addCase(fetchTrendsResults.fulfilled, (state: GiphyState, action) => {
        state.status = 'loaded';
        state.trendsResults = action.payload;
      })
      .addCase(fetchTrendsResults.rejected, (state: GiphyState) => {
        state.status = 'error';
      }),
  selectors: {
    status: (state: GiphyState) => state.status,
    randomImage: (state: GiphyState) => state.randomImage,
    searchResults: (state: GiphyState) => state.searchResults,
    trendsResults: (state: GiphyState) => state.trendsResults
  }
})


const giphyActions = {fetchRandomImage, fetchSearchResults, fetchTrendsResults};
const giphySelectors = giphySlice.selectors;

export {giphySlice, giphyActions, giphySelectors};
