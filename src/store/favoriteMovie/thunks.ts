import { createAsyncThunk } from "@reduxjs/toolkit";
import i18next from "i18next";
import { loadingStatuses } from "@constants/loadingStatuses";
import { movieAPI } from "@api/movieAPI";
import { selectFilterCurrentLanguage } from "@store/filter/selectors";
import { filterSlice } from "@store/filter";
import { favoriteMovieSlice } from ".";
import { RootState } from "..";
import { selectFavoriteMovieIsIncludesId } from "./selectors";
import { IFavoriteMovieData } from "./types";

export const fetchFavoriteMovies = createAsyncThunk(
  "favoriteMovie/fetchFavoriteMovies",
  async (page: number, thunkAPI) => {
    const state: RootState = thunkAPI.getState() as RootState;

    if (selectFilterCurrentLanguage(state) !== i18next.resolvedLanguage) {
      filterSlice.actions.updateCurrentLanguage(i18next.resolvedLanguage);
    }

    const response = await movieAPI.getFavoriteMovieList(page);
    return response;
  }
);

export const updateFavoriteMovie = createAsyncThunk(
  "favoriteMovie/updateFavoriteMovie",
  async (movieData: IFavoriteMovieData, thunkAPI) => {
    let response: IFavoriteMovieData[];
    if (
      selectFavoriteMovieIsIncludesId(thunkAPI.getState() as RootState, {
        movieId: movieData?.id,
      })
    ) {
      response = await movieAPI.deleteFavoriteMovie(movieData?.id);
    } else {
      response = await movieAPI.createFavoriteMovie(movieData);
    }

    return response;
  }
);

export const updateWatchedFavoriteMovie = createAsyncThunk(
  "favoriteMovie/updateWatchedFavoriteMovie",
  async (movieData: IFavoriteMovieData, thunkAPI) => {
    try {
      thunkAPI.dispatch(
        favoriteMovieSlice.actions.updateFavoriteMovie({
          ...movieData,
          userWatched: !movieData?.userWatched,
        })
      );
      const response = await movieAPI.updateWatchedMovieStatus(movieData.id);

      return response;
    } catch (error) {
      thunkAPI.dispatch(
        favoriteMovieSlice.actions.updateFavoriteMovie({
          ...movieData,
          userWatched: !movieData?.userWatched,
        })
      );
      return thunkAPI.rejectWithValue(loadingStatuses.failed);
    }
  }
);
