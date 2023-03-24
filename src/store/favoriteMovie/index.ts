import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { loadingStatuses } from "@constants/loadingStatuses";
import {
  IFavoriteMovieData,
  IFavoriteMovieAdditionalInitialState,
  IFavoriteMovieResponseData,
} from "./types";
import {
  fetchFavoriteMovieIds,
  fetchFavoriteMovies,
  updateFavoriteMovie,
} from "./thunks";

const favoriteMovieEntityAdapter = createEntityAdapter<IFavoriteMovieData>();

export const favoriteMovieSlice = createSlice({
  name: "favoriteMovie",
  initialState:
    favoriteMovieEntityAdapter.getInitialState<IFavoriteMovieAdditionalInitialState>(
      {
        status: loadingStatuses.idle,
        page: 1,
        totalPages: -1,
      }
    ),
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
      .addCase(
        fetchFavoriteMovies.fulfilled,
        (
          state,
          {
            payload: { results, page, totalPages },
          }: PayloadAction<IFavoriteMovieResponseData>
        ) => {
          favoriteMovieEntityAdapter.setAll(state, results);
          state.page = page;
          state.totalPages = totalPages;
          state.status = loadingStatuses.success;
        }
      )
      .addCase(fetchFavoriteMovies.rejected, (state, action) => {
        state.status =
          action.payload === loadingStatuses.earlyAdded
            ? loadingStatuses.success
            : loadingStatuses.failed;
      })
      .addCase(fetchFavoriteMovieIds.pending, (state) => {
        state.status = loadingStatuses.inProgress;
      })
      .addCase(fetchFavoriteMovieIds.fulfilled, (state, action) => {
        state.ids = action.payload;
        state.status = loadingStatuses.success;
      })
      .addCase(fetchFavoriteMovieIds.rejected, (state, action) => {
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
