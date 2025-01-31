import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_KEY} from "../../utils/constants";
import {GiphyRandomData, GiphyRandomResponse, GiphySearchItem} from "../../types";

const fetchRandomImage = createAsyncThunk<
  GiphyRandomData | undefined,
  undefined
>(
  "giphy/fetchRandomImage",
  async () => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
    if (response.ok) {
      const json = (await response.json()) as GiphyRandomResponse;
      return json.data as GiphyRandomData;
    }
  }
)

const fetchSearchResults = createAsyncThunk<
  GiphySearchItem,
  string
>(
  "gyphy/fetchSearchResults",
  async (query) => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
    if (response.ok) {
      const json = await response.json();
      return json.data.map(item => ({
        id: item.id,
        image: item.images.fixed_height.webp,
        height: item.images.fixed_height.height,
        alt: item.alt_text,
        date: item.import_datetime
      }));
    }
  }
)

export {fetchRandomImage, fetchSearchResults};
