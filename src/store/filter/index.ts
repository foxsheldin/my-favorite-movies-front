import { ETypeView } from "@constants/typeView";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import i18next from "i18next";
import { MAX_POPULARITY_VALUE, MIN_POPULARITY_VALUE } from "./constants";
import { IFilterInitialState } from "./types";

const initialState: IFilterInitialState = {
  currentLanguage: i18next.resolvedLanguage,
  currentTypeView: ETypeView.list,
  selectedMovieGenres: [],
  popularity: [MIN_POPULARITY_VALUE, MAX_POPULARITY_VALUE],
  releaseYear: 0,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateCurrentLanguage(state, action: PayloadAction<string>) {
      state.currentLanguage = action.payload;
    },
    updateCurrentViewList(state, action: PayloadAction<ETypeView>) {
      state.currentTypeView = action.payload;
    },
    setSelectedMovieGenres(state, action: PayloadAction<number[]>) {
      state.selectedMovieGenres = action.payload;
    },
    updateSelectedMovieGenres(state, action: PayloadAction<number>) {
      if (state.selectedMovieGenres.includes(action.payload)) {
        state.selectedMovieGenres = state.selectedMovieGenres.filter(
          (item) => item !== action.payload
        );
      } else {
        state.selectedMovieGenres.push(action.payload);
      }
    },
    setPopularity(state, action: PayloadAction<number[]>) {
      state.popularity = action.payload;
    },
    setReleaseYear(state, action: PayloadAction<number>) {
      state.releaseYear = action.payload;
    },
  },
});
