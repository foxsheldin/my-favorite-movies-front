import { FetchResult, MutationResult } from "@apollo/client";

export interface IMovieData {
  id: number;
  title: string;
  posterPath: string;
  overview: string;
  isFavorite: boolean;
  isWatched: boolean;
}

export interface IMoviePaginateResponse {
  page: number;
  results: IMovieData[];
  totalPages: number;
  totalResults: number;
}

export interface IFavoriteMovieListQueryData {
  getFavoriteMovieList: IMoviePaginateResponse;
}

export interface IFavoriteMovieListQueryVariables {
  page?: number;
  limit?: number;
  language?: string;
}

export interface IUpdateFavoriteMovieMutationResponseData {
  createFavoriteMovie: IMovieData;
}

export interface IUpdateFavoriteMovieMutationVariables {
  movieId: number;
  language: string;
}

export interface IUseUpdateFavoriteMovieMutationResult
  extends MutationResult<IUpdateFavoriteMovieMutationResponseData> {
  updateFavoriteMovieMutation: (
    movieId: number
  ) => Promise<FetchResult<IUpdateFavoriteMovieMutationResponseData>>;
}

export interface IUpdatedMovieViewingStatusData {
  movieId: number;
  isWatched: boolean;
}

export interface IUpdateWatchedMovieStatusMutationResponseData {
  updateWatchedMovieStatus: IUpdatedMovieViewingStatusData;
}

export interface IUpdateWatchedMovieStatusMutationVariables {
  movieId: number;
}

export interface IUseUpdateWatchedMovieStatusMutationResult
  extends MutationResult<IUpdateWatchedMovieStatusMutationResponseData> {
  updateWatchedMovieStatusMutation: (
    movieId: number
  ) => Promise<FetchResult<IUpdateWatchedMovieStatusMutationResponseData>>;
}

export interface IAllAvailableMovieListQueryData {
  getAllAvailableMovieList: IMoviePaginateResponse;
}

export interface IAllAvailableMovieListQueryVariables {
  language?: string;
  page?: number;
  selectedGenresIds?: number[];
  popularity: number[];
  releaseYear?: number;
}
