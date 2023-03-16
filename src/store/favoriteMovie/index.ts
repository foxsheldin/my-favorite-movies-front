import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { loadingStatuses } from "@constants/loadingStatuses";
import { IFavoriteMovieData } from "./types";
import { fetchFavoriteMovies, updateFavoriteMovie } from "./thunks";

const favoriteMovieEntityAdapter = createEntityAdapter<IFavoriteMovieData>();

export const favoriteMovieSlice = createSlice({
  name: "favoriteMovie",
  initialState: favoriteMovieEntityAdapter.getInitialState({
    status: loadingStatuses.idle,
  }),
  reducers: {
    updateFavoriteMovie(state, action) {
      favoriteMovieEntityAdapter.upsertOne(state, action.payload);
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchFavoriteMovies.pending, (state) => {
        state.status = loadingStatuses.inProgress;
      })
      .addCase(fetchFavoriteMovies.fulfilled, (state, action) => {
        favoriteMovieEntityAdapter.setAll(state, action.payload);
        state.status = loadingStatuses.success;
      })
      .addCase(fetchFavoriteMovies.rejected, (state, action) => {
        state.status =
          action.payload === loadingStatuses.earlyAdded
            ? loadingStatuses.success
            : loadingStatuses.failed;
      })
      .addCase(updateFavoriteMovie.pending, (state) => {
        state.status = loadingStatuses.inProgress;
      })
      .addCase(updateFavoriteMovie.fulfilled, (state, action) => {
        favoriteMovieEntityAdapter.setAll(state, action.payload);
        state.status = loadingStatuses.success;
      })
      .addCase(updateFavoriteMovie.rejected, (state, action) => {
        state.status =
          action.payload === loadingStatuses.earlyAdded
            ? loadingStatuses.success
            : loadingStatuses.failed;
      }),
});
