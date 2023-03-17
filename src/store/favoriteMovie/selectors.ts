import { loadingStatuses } from "@constants/loadingStatuses";
import { RootState } from "..";
import { ISelectFavoriteMovieArgsWithMovieId } from "./types";

export const selectFavoriteMovieModuleState = (state: RootState) =>
  state.favoriteMovie;

export const selectFavoriteMovieIds = (state: RootState) =>
  selectFavoriteMovieModuleState(state).ids;

export const selectFavoriteMovieIsIncludesId = (
  state: RootState,
  { movieId }: ISelectFavoriteMovieArgsWithMovieId
) => selectFavoriteMovieIds(state).includes(movieId);

export const selectFavoriteMovieEntities = (state: RootState) =>
  selectFavoriteMovieModuleState(state).entities;

export const selectFavoriteMovieArrayEntities = (state: RootState) =>
  Object.values(selectFavoriteMovieEntities(state));

export const selectFavoriteMovieById = (
  state: RootState,
  { movieId }: ISelectFavoriteMovieArgsWithMovieId
) => selectFavoriteMovieEntities(state)[movieId];

export const selectFavoriteMovieByIdIsWatched = (
  state: RootState,
  { movieId }: ISelectFavoriteMovieArgsWithMovieId
) => selectFavoriteMovieById(state, { movieId })?.userWatched;

export const selectFavoriteMovieLoadingStatus = (state: RootState) =>
  selectFavoriteMovieModuleState(state).status;

export const selectFavoriteMovieIsLoading = (state: RootState) =>
  [loadingStatuses.idle, loadingStatuses.inProgress].includes(
    selectFavoriteMovieLoadingStatus(state)
  );
