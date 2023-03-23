import { loadingStatuses } from "@constants/loadingStatuses";
import { IFavoriteMovieData } from "@store/favoriteMovie/types";

export interface IMovieAdditionalInitialState {
  status: loadingStatuses;
  page: number;
  totalPages: number;
}

export interface IMovieResponseData {
  page: number;
  results: IFavoriteMovieData[];
  totalPages: number;
  totalResults: number;
}

export interface IMovieData {
  adult: boolean;
  backdropPath: string;
  genreIds: number[] | string[];
  id: number;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string;
  releaseDate: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
}
