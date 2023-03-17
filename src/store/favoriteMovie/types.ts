import { IMovieData } from "@store/movie/types";

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
