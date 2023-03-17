import { createAsyncThunk } from "@reduxjs/toolkit";
import { movieAPI } from "@api/movieAPI";
import { selectSelectedGenresArray } from "@store/genre/selectors";
import { RootState } from "..";

export const fetchMovies = createAsyncThunk(
  "movie/fetchMovies",
  async (_, thunkAPI) => {
    const selectedGenres: number[] = selectSelectedGenresArray(
      thunkAPI.getState() as RootState
    );

    const response = await movieAPI.getMoviesList(selectedGenres);
    return response.data.results;
  }
);
