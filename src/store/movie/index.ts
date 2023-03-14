import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { loadingStatuses } from "@constants/loadingStatuses";
import { IMovieData } from "./types";
import { fetchMovies } from "./thunk";

const movieEntityAdapter = createEntityAdapter<IMovieData>();

export const movieSlice = createSlice({
  name: "movie",
  initialState: movieEntityAdapter.getInitialState({
    status: loadingStatuses.idle,
  }),
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = loadingStatuses.inProgress;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        movieEntityAdapter.setAll(state, action.payload);
        state.status = loadingStatuses.success;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status =
          action.payload === loadingStatuses.earlyAdded
            ? loadingStatuses.success
            : loadingStatuses.failed;
      }),
});
