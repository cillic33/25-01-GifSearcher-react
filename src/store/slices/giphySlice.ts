import {createSlice} from "@reduxjs/toolkit";
import {fetchRandomImage, fetchSearchResults} from "../thunks/giphyAsyncActions";

/*interface GiphyState {
  status: "idle" | "loading" | "loaded" | "error";
  randomImage: GiphyRandomData | undefined | null;
}*/

const initialState = {
  status: "idle",
  randomImage: null,
  searchResults: null,
} /*satisfies GiphyState as GiphyState*/

const giphySlice = createSlice({
  name: 'giphy',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchRandomImage.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRandomImage.fulfilled, (state, action) => {
        state.status = "loaded";
        state.randomImage = action.payload;
      })
      .addCase(fetchRandomImage.rejected, (state) => {
        state.status = "error";
      })
      .addCase(fetchSearchResults.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.searchResults = action.payload;
      })
      .addCase(fetchSearchResults.rejected, (state) => {
        state.status = 'error';
      }),
  selectors: {
    status: (state) => state.status,
    randomImage: (state) => state.randomImage,
    searchResults: (state) => state.searchResults
  }
})


const giphyActions = {fetchRandomImage, fetchSearchResults};
const giphySelectors = giphySlice.selectors;

export {giphySlice, giphyActions, giphySelectors};
