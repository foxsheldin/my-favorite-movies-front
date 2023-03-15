import { movieAPI } from "@api/movieAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFavoriteMovies = createAsyncThunk(
  "favoriteMovie/fetchFavoriteMovies",
  async (_, thunkAPI) => {
    const response = await movieAPI.getFavoriteMovieList();
    return response.results;
  }
);
