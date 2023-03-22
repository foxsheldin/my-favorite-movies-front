import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { loadingStatuses } from "@constants/loadingStatuses";
import {
  IMovieAdditionalInitialState,
  IMovieData,
  IMovieResponseData,
} from "./types";
import { fetchMovies } from "./thunks";

const movieEntityAdapter = createEntityAdapter<IMovieData>();

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
