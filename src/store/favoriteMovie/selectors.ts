import { loadingStatuses } from "@constants/loadingStatuses";
import { RootState } from "..";

export const selectFavoriteMovieModuleState = (state: RootState) =>
  state.favoriteMovie;

export const selectFavoriteMovieEntities = (state: RootState) =>
  selectFavoriteMovieModuleState(state).entities;

export const selectFavoriteMovieArrayEntities = (state: RootState) =>
  Object.values(selectFavoriteMovieEntities(state));

export const selectFavoriteMovieLoadingStatus = (state: RootState) =>
  selectFavoriteMovieModuleState(state).status;

export const selectFavoriteMovieIsLoading = (state: RootState) =>
  [loadingStatuses.idle, loadingStatuses.inProgress].includes(
    selectFavoriteMovieLoadingStatus(state)
  );
