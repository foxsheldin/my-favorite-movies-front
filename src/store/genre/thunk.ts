import { createAsyncThunk } from "@reduxjs/toolkit";
import { movieAPI } from "@api/movieAPI";
import { loadingStatuses } from "@constants/loadingStatuses";
import { selectGenreIds } from "./selectors";
import { RootState } from "..";

export const fetchGenres = createAsyncThunk(
  "genre/fetchGenres",
  async (_, thunkAPI) => {
    if (selectGenreIds(thunkAPI.getState() as RootState).length > 0) {
      return thunkAPI.rejectWithValue(loadingStatuses.earlyAdded);
    }

    const response = await movieAPI.getGenre();
    return response.data.genres;
  }
);
