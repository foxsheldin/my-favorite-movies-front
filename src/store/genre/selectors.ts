import { loadingStatuses } from "@constants/loadingStatuses";
import { EntityId } from "@reduxjs/toolkit";
import { RootState } from "..";

export const selectGenreModuleState = (state: RootState) => state.genre;

export const selectGenreIds = (state: RootState) =>
  selectGenreModuleState(state).ids as number[];

export const selectGenreEntities = (state: RootState) =>
  selectGenreModuleState(state).entities;

export const selectGenreArrayEntities = (state: RootState) =>
  Object.values(selectGenreEntities(state));

export const selectGenreByGenreId = (
  state: RootState,
  { genreId }: { genreId: EntityId }
) => selectGenreArrayEntities(state).find((genre) => genre?.id === genreId);

export const selectSelectedGenresArray = (state: RootState): number[] =>
  selectGenreModuleState(state).selectedGenres;

export const selectIsSelectedGenreByGenreId = (
  state: RootState,
  { genreId }: { genreId: number }
) => selectSelectedGenresArray(state).includes(genreId);

export const selectGenreLoadingStatus = (state: RootState) =>
  selectGenreModuleState(state).status;

export const selectGenreIsLoading = (state: RootState) =>
  [loadingStatuses.idle, loadingStatuses.inProgress].includes(
    selectGenreLoadingStatus(state)
  );
