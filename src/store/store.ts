import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {giphySlice} from "./slices/giphySlice";


const rootReducer = combineReducers({
  [giphySlice.name]: giphySlice.reducer
})

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
