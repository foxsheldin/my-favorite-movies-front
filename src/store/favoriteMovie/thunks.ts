import { loadingStatuses } from "@constants/loadingStatuses";
import { movieAPI } from "@api/movieAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IMovieData } from "@store/movie/types";
import { favoriteMovieSlice } from ".";
import { RootState } from "..";
import { selectFavoriteMovieIsIncludesId } from "./selectors";
import { IFavoriteMovieData } from "./types";

export const fetchFavoriteMovies = createAsyncThunk(
  "favoriteMovie/fetchFavoriteMovies",
  async (_, thunkAPI) => {
    const response = await movieAPI.getFavoriteMovieList();
    return response.results;
  }
);

export const updateFavoriteMovie = createAsyncThunk(
  "favoriteMovie/updateFavoriteMovie",
  async (movieData: IFavoriteMovieData | undefined, thunkAPI) => {
    let response: IFavoriteMovieData[];
    if (
      selectFavoriteMovieIsIncludesId(thunkAPI.getState() as RootState, {
        movieId: movieData?.id as number,
      })
    ) {
      response = await movieAPI.deleteFavoriteMovie(movieData?.id as number);
    } else {
      response = await movieAPI.createFavoriteMovie(movieData as IMovieData);
    }

    return response;
  }
);

export const updateWatchedFavoriteMovie = createAsyncThunk(
  "favoriteMovie/updateWatchedFavoriteMovie",
  async (movieData: IFavoriteMovieData | undefined, thunkAPI) => {
    try {
      thunkAPI.dispatch(
        favoriteMovieSlice.actions.updateFavoriteMovie({
          ...movieData,
          user_watched: !movieData?.user_watched,
        })
      );
      const response = await movieAPI.updateWatchedMovieStatus(
        movieData?.id as number
      );

      return response;
    } catch (error) {
      thunkAPI.dispatch(
        favoriteMovieSlice.actions.updateFavoriteMovie({
          ...movieData,
          user_watched: !movieData?.user_watched,
        })
      );
      return thunkAPI.rejectWithValue(loadingStatuses.failed);
    }
  }
);
