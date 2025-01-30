import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_KEY} from "../../utils/constants";
import {GiphyRandom, GiphyRandomData} from "../../types";

const fetchRandomImage = createAsyncThunk<
  GiphyRandomData | undefined,
  undefined
>(
  "giphy/fetchRandomImage",
  async () => {
    const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=' + API_KEY);
    if (response.ok) {
      const json = (await response.json()) as GiphyRandom;
      return json.data as GiphyRandomData;
    }
  }
)

export {fetchRandomImage};
