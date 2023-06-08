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

export interface ICreateFavoriteMovieResponse {
  isFavorite: boolean;
  isWatched: boolean;
}

export interface IFavoriteMovieListQueryData {
  getFavoriteMovieList: IMoviePaginateResponse;
}

export interface IFavoriteMovieListQueryVariables {
  userId: string;
  page?: number;
  limit?: number;
  language?: string;
}

export interface ICreateFavoriteMovieMutationResponseData {
  createFavoriteMovie: IMovieData;
}

export interface ICreateFavoriteMovieMutationVariables {
  userId: string;
  movieId: number;
  language: string;
}

export interface IUseCreateFavoriteMovieMutationResult
  extends MutationResult<ICreateFavoriteMovieMutationResponseData> {
  createFavoriteMovieMutation: (
    movieId: number
  ) => Promise<FetchResult<ICreateFavoriteMovieMutationResponseData>>;
}

export interface IDeleteFavoriteMovieMutationResponseData {
  deleteFavoriteMovie: number;
}

export interface IDeleteFavoriteMovieMutationVariables {
  userId: string;
  movieId: number;
}

export interface IUseDeleteFavoriteMovieMutationResult
  extends MutationResult<IDeleteFavoriteMovieMutationResponseData> {
  deleteFavoriteMovieMutation: (
    movieId: number
  ) => Promise<FetchResult<IDeleteFavoriteMovieMutationResponseData>>;
}

export interface IUpdatedMovieViewingStatusData {
  movieId: number;
  isWatched: boolean;
}

export interface IUpdateWatchedMovieStatusMutationResponseData {
  updateWatchedMovieStatus: IUpdatedMovieViewingStatusData;
}

export interface IUpdateWatchedMovieStatusMutationVariables {
  userId: string;
  movieId: number;
  status: boolean;
}

export interface IUseUpdateWatchedMovieStatusMutationResult
  extends MutationResult<IUpdateWatchedMovieStatusMutationResponseData> {
  updateWatchedMovieStatusMutation: (
    movieId: number,
    status: boolean
  ) => Promise<FetchResult<IUpdateWatchedMovieStatusMutationResponseData>>;
}

export interface IAllAvailableMovieListQueryData {
  getAllAvailableMovieList: IMoviePaginateResponse;
}

export interface IAllAvailableMovieListQueryVariables {
  userId: string;
  language?: string;
  page?: number;
  selectedGenresIds?: number[];
  popularity: number[];
  releaseYear?: number;
}
