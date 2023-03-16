import { loadingStatuses } from "@constants/loadingStatuses";
import { RootState } from "..";

export const selectFavoriteMovieModuleState = (state: RootState) =>
  state.favoriteMovie;

export const selectFavoriteMovieIds = (state: RootState) =>
  selectFavoriteMovieModuleState(state).ids;

export const selectFavoriteMovieIsIncludesId = (
  state: RootState,
  { movieId }: { movieId: number }
) => selectFavoriteMovieIds(state).includes(movieId);

export const selectFavoriteMovieEntities = (state: RootState) =>
  selectFavoriteMovieModuleState(state).entities;

export const selectFavoriteMovieArrayEntities = (state: RootState) =>
  Object.values(selectFavoriteMovieEntities(state));

export const selectFavoriteMovieById = (
  state: RootState,
  { movieId }: { movieId: number }
) => selectFavoriteMovieEntities(state)[movieId];

export const selectFavoriteMovieByIdIsWatched = (
  state: RootState,
  { movieId }: { movieId: number }
) => selectFavoriteMovieById(state, { movieId })?.user_watched;

export const selectFavoriteMovieLoadingStatus = (state: RootState) =>
  selectFavoriteMovieModuleState(state).status;

export const selectFavoriteMovieIsLoading = (state: RootState) =>
  [loadingStatuses.idle, loadingStatuses.inProgress].includes(
    selectFavoriteMovieLoadingStatus(state)
  );
