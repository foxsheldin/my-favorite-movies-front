import { selectFilterCurrentLanguage } from "./../filter/selectors";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { movieAPI } from "@api/movieAPI";
import { loadingStatuses } from "@constants/loadingStatuses";
import { selectGenreIds, selectSelectedGenresArray } from "./selectors";
import { RootState } from "..";
import { genreSlice } from ".";
import i18next from "i18next";
import { filterSlice } from "@store/filter";

export const fetchGenres = createAsyncThunk(
  "genre/fetchGenres",
  async (_, thunkAPI) => {
    const state: RootState = thunkAPI.getState() as RootState;

    if (
      selectFilterCurrentLanguage(state) === i18next.resolvedLanguage &&
      selectGenreIds(state).length > 0
    ) {
      return thunkAPI.rejectWithValue(loadingStatuses.earlyAdded);
    }
    filterSlice.actions.updateCurrentLanguage(i18next.resolvedLanguage);

    const [responseGenre, responseFavoriteGenre] = await Promise.all([
      movieAPI.getGenre(),
      movieAPI.getFavoriteGenre(),
    ]);

    thunkAPI.dispatch(
      genreSlice.actions.setSelectedGenres(responseFavoriteGenre)
    );
    thunkAPI.dispatch(
      filterSlice.actions.setSelectedMovieGenres(responseFavoriteGenre)
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
