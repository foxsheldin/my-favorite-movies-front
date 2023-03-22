import i18next from "i18next";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { movieAPI } from "@api/movieAPI";
import { selectSelectedGenresArray } from "@store/genre/selectors";
import { RootState } from "..";
import { selectFilterCurrentLanguage } from "@store/filter/selectors";
import { filterSlice } from "@store/filter";

export const fetchMovies = createAsyncThunk(
  "movie/fetchMovies",
  async (page: number, thunkAPI) => {
    const state: RootState = thunkAPI.getState() as RootState;

    if (selectFilterCurrentLanguage(state) !== i18next.resolvedLanguage) {
      filterSlice.actions.updateCurrentLanguage(i18next.resolvedLanguage);
    }

    const selectedGenres: number[] = selectSelectedGenresArray(state);

    const response = await movieAPI.getMoviesList(selectedGenres, page);
    return response.data;
  }
);
