import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { loadingStatuses } from "@constants/loadingStatuses";
import { IGenreAdditionalInitialState, IGenreItemData } from "./types";
import { fetchGenres, updateSelectedGenres } from "./thunks";

const genreEntityAdapter = createEntityAdapter<IGenreItemData>();

export const genreSlice = createSlice({
  name: "genre",
  initialState:
    genreEntityAdapter.getInitialState<IGenreAdditionalInitialState>({
      status: loadingStatuses.idle,
      selectedGenres: [],
    }),
  reducers: {
    setSelectedGenres(state, action) {
      state.selectedGenres = action.payload;
    },
    updateSelectedGenres(state, action: PayloadAction<number>): void {
      if (state.selectedGenres.includes(action.payload)) {
        state.selectedGenres = state.selectedGenres.filter(
          (item) => item !== action.payload
        );
      } else {
        state.selectedGenres.push(action.payload);
      }
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchGenres.pending, (state) => {
        state.status = loadingStatuses.inProgress;
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        genreEntityAdapter.setAll(state, action.payload);
        state.status = loadingStatuses.success;
      })
      .addCase(fetchGenres.rejected, (state, action) => {
        state.status =
          action.payload === loadingStatuses.earlyAdded
            ? loadingStatuses.success
            : loadingStatuses.failed;
      })
      .addCase(updateSelectedGenres.rejected, (state, action) => {
        state.status =
          action.payload === loadingStatuses.earlyAdded
            ? loadingStatuses.success
            : loadingStatuses.failed;
      }),
});
