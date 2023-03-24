import { RootState } from "..";

export const selectFilterModuleState = (state: RootState) => state.filter;

export const selectFilterCurrentLanguage = (state: RootState) =>
  selectFilterModuleState(state).currentLanguage;

export const selectFilterCurrentTypeView = (state: RootState) =>
  selectFilterModuleState(state).currentTypeView;

export const selectFilterSelectedMovieGenres = (state: RootState) =>
  selectFilterModuleState(state).selectedMovieGenres;

export const selectFilterPopularity = (state: RootState) =>
  selectFilterModuleState(state).popularity;

export const selectFilterReleaseYear = (state: RootState) =>
  selectFilterModuleState(state).releaseYear;
