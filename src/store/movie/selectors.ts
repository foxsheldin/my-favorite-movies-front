import { EntityId } from "@reduxjs/toolkit";
import { RootState } from "@store/index";

export const selectMoviesModuleState = (state: RootState) => state.movie;

export const selectMovieIds = (state: RootState) =>
  selectMoviesModuleState(state).ids;

export const selectMovieEntities = (state: RootState) =>
  selectMoviesModuleState(state).entities;

export const selectMovieArrayEntities = (state: RootState) =>
  Object.values(selectMovieEntities(state));

export const selectMovieByMovieId = (
  state: RootState,
  { movieId }: { movieId: EntityId }
) => selectMovieArrayEntities(state).filter((movie) => movie?.id === movieId);
