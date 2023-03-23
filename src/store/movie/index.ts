import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { loadingStatuses } from "@constants/loadingStatuses";
import { IMovieAdditionalInitialState, IMovieResponseData } from "./types";
import { fetchMovies } from "./thunks";
import { IFavoriteMovieData } from "@store/favoriteMovie/types";

const movieEntityAdapter = createEntityAdapter<IFavoriteMovieData>();

export const movieSlice = createSlice({
  name: "movie",
  initialState:
    movieEntityAdapter.getInitialState<IMovieAdditionalInitialState>({
      status: loadingStatuses.idle,
      page: 1,
      totalPages: -1,
    }),
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = loadingStatuses.inProgress;
      })
      .addCase(
        fetchMovies.fulfilled,
        (
          state,
          {
            payload: { results, page, totalPages },
          }: PayloadAction<IMovieResponseData>
        ) => {
          movieEntityAdapter.setAll(state, results);
          state.page = page;
          state.totalPages = totalPages;
          state.status = loadingStatuses.success;
        }
      )
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status =
          action.payload === loadingStatuses.earlyAdded
            ? loadingStatuses.success
            : loadingStatuses.failed;
      }),
});
