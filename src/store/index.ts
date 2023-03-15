import { configureStore } from "@reduxjs/toolkit";
import { favoriteMovieSlice } from "./favoriteMovie";
import { genreSlice } from "./genre/index";
import { movieSlice } from "./movie";

const store = configureStore({
  reducer: {
    genre: genreSlice.reducer,
    movie: movieSlice.reducer,
    favoriteMovie: favoriteMovieSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
