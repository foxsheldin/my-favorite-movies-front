import { EntityId } from "@reduxjs/toolkit";
import { loadingStatuses } from "@constants/loadingStatuses";
import { RootState } from "@store/index";

export const selectMovieModuleState = (state: RootState) => state.movie;

export const selectMovieCurrentPage = (state: RootState) =>
  selectMovieModuleState(state).page;

export const selectMovieTotalPages = (state: RootState) =>
  selectMovieModuleState(state).totalPages;

export const selectMovieIds = (state: RootState) =>
  selectMovieModuleState(state).ids;

export const selectMovieEntities = (state: RootState) =>
  selectMovieModuleState(state).entities;

export const selectMovieArrayEntities = (state: RootState) =>
  Object.values(selectMovieEntities(state));

export const selectMovieByMovieId = (
  state: RootState,
  { movieId }: { movieId: EntityId }
) => selectMovieArrayEntities(state).filter((movie) => movie?.id === movieId);

export const selectMovieLoadingStatus = (state: RootState) =>
  selectMovieModuleState(state).status;

export const selectMovieIsLoading = (state: RootState) =>
  [loadingStatuses.idle, loadingStatuses.inProgress].includes(
    selectMovieLoadingStatus(state)
  );
