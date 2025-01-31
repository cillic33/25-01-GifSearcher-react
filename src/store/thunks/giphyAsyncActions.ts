import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_KEY} from "../../utils/constants";
import {GiphyRandomImage, GiphySearchItem, GiphyTrendsItem} from "../../types";

const fetchRandomImage = createAsyncThunk<
  GiphyRandomImage | undefined,
  undefined
>(
  "giphy/fetchRandomImage",
  async () => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
    if (response.ok) {
      const json = await response.json();
      return {
        id: json.data.id,
        url: json.data.images.fixed_height.webp,
        alt: json.data.alt_text,
        title: json.data.title
      };
    }
  }
)

const fetchSearchResults = createAsyncThunk<
  GiphySearchItem[],
  string
>(
  "giphy/fetchSearchResults",
  async (query) => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=12&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
    if (response.ok) {
      const json = await response.json();
      return json.data.map(item => ({
        id: item.id,
        url: item.images.fixed_height.webp,
        height: item.images.fixed_height.height,
        alt: item.alt_text,
        date: item.import_datetime
      }));
    }
  }
)

const fetchTrendsResults = createAsyncThunk<
  GiphyTrendsItem[],
  string
>(
  "giphy/fetchTrendsResults",
  async (query) => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=12&offset=0&rating=g&bundle=messaging_non_clips`);
    if (response.ok) {
      const json = await response.json();
      return json.data.map(item => ({
        id: item.id,
        url: item.images.fixed_height.webp,
        height: item.images.fixed_height.height,
        alt: item.alt_text,
        date: item.import_datetime
      }));
    }
  }
)

export {fetchRandomImage, fetchSearchResults, fetchTrendsResults};
