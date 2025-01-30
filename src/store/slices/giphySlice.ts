import {createSlice} from "@reduxjs/toolkit";
import {fetchRandomImage} from "../thunks/giphyAsyncActions";
import {GiphyRandomData} from "../../types";

interface GiphyState {
  status: "idle" | "loading" | "loaded" | "error";
  randomImage: GiphyRandomData | undefined | null;
}

const initialState = {
  status: "idle",
  randomImage: null
} satisfies GiphyState as GiphyState

const giphySlice = createSlice({
  name: 'giphy',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
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
      }),
  selectors: {
    status: (state: GiphyState) => state.status,
    randomImage: (state: GiphyState) => state.randomImage,
  },
})


const giphyActions = {fetchRandomImage};
const giphySelectors = giphySlice.selectors;

export {giphySlice, giphyActions, giphySelectors};
