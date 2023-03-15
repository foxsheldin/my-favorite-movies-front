import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { loadingStatuses } from "@constants/loadingStatuses";
import { IFavoriteMovieData } from "./types";
import { fetchFavoriteMovies } from "./thunks";

const movieEntityAdapter = createEntityAdapter<IFavoriteMovieData>();

export const favoriteMovieSlice = createSlice({
  name: "favoriteMovie",
  initialState: movieEntityAdapter.getInitialState({
    status: loadingStatuses.idle,
  }),
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchFavoriteMovies.pending, (state) => {
        state.status = loadingStatuses.inProgress;
      })
      .addCase(fetchFavoriteMovies.fulfilled, (state, action) => {
        movieEntityAdapter.setAll(state, action.payload);
        state.status = loadingStatuses.success;
      })
      .addCase(fetchFavoriteMovies.rejected, (state, action) => {
        state.status =
          action.payload === loadingStatuses.earlyAdded
            ? loadingStatuses.success
            : loadingStatuses.failed;
      }),
});
