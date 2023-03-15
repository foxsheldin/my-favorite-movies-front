import { createAsyncThunk } from "@reduxjs/toolkit";
import { movieAPI } from "@api/movieAPI";
import { loadingStatuses } from "@constants/loadingStatuses";
import { selectGenreIds, selectSelectedGenresArray } from "./selectors";
import { RootState } from "..";
import { genreSlice } from ".";

export const fetchGenres = createAsyncThunk(
  "genre/fetchGenres",
  async (_, thunkAPI) => {
    if (selectGenreIds(thunkAPI.getState() as RootState).length > 0) {
      return thunkAPI.rejectWithValue(loadingStatuses.earlyAdded);
    }

    const [responseGenre, responseFavoriteGenre] = await Promise.all([
      movieAPI.getGenre(),
      movieAPI.getFavoriteGenre(),
    ]);

    thunkAPI.dispatch(
      genreSlice.actions.setSelectedGenres(responseFavoriteGenre)
    );

    return responseGenre.data.genres;
  }
);

export const updateSelectedGenres = createAsyncThunk(
  "genre/pushSelectedGenres",
  async (genreId: number, thunkAPI) => {
    try {
      thunkAPI.dispatch(genreSlice.actions.updateSelectedGenres(genreId));

      const selectedGenres: number[] = selectSelectedGenresArray(
        thunkAPI.getState() as RootState
      );

      const response = await movieAPI.updateSelectedGenres(selectedGenres);

      return response;
    } catch (error) {
      thunkAPI.dispatch(genreSlice.actions.updateSelectedGenres(genreId));
      return thunkAPI.rejectWithValue(loadingStatuses.failed);
    }
  }
);
