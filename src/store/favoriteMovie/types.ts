import { loadingStatuses } from "@constants/loadingStatuses";
import { IMovieData } from "@store/movie/types";

export interface IFavoriteMovieAdditionalInitialState {
  status: loadingStatuses;
  page: number;
  totalPages: number;
}

export interface IFavoriteMovieResponseData {
  page: number;
  results: IFavoriteMovieData[];
  totalPages: number;
  totalResults: number;
}

export interface IFavoriteMovieData extends IMovieData {
  userWatched: boolean;
  userFavorite: boolean;
}

export interface ISelectFavoriteMovieArgsWithMovieId {
  movieId: number;
}
