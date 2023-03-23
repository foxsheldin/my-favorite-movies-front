import i18next from "i18next";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { movieAPI } from "@api/movieAPI";
import { RootState } from "..";
import {
  selectFilterCurrentLanguage,
  selectFilterPopularity,
  selectFilterSelectedMovieGenres,
  selectFilterReleaseYear,
} from "@store/filter/selectors";
import { filterSlice } from "@store/filter";

export const fetchMovies = createAsyncThunk(
  "movie/fetchMovies",
  async ({ page }: { page: number }, thunkAPI) => {
    const state: RootState = thunkAPI.getState() as RootState;

    if (selectFilterCurrentLanguage(state) !== i18next.resolvedLanguage) {
      filterSlice.actions.updateCurrentLanguage(i18next.resolvedLanguage);
    }

    const selectedGenres: number[] = selectFilterSelectedMovieGenres(state);
    const popalarity: number[] = selectFilterPopularity(state);
    const releaseYear: number = selectFilterReleaseYear(state);

    console.log(selectedGenres, popalarity, releaseYear);

    const response = await movieAPI.getMoviesList({
      selectedGenres,
      page,
      popalarity,
      releaseYear: releaseYear ? releaseYear : undefined,
    });
    return response.data;
  }
);
