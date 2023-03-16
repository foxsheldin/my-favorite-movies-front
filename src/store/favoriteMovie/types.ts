import { IMovieData } from "@store/movie/types";

export interface IFavoriteMovieResponseData {
  page: number;
  results: IFavoriteMovieData[];
  total_pages: number;
  total_results: number;
}

export interface IFavoriteMovieData extends IMovieData {
  user_watched: boolean;
  user_favorite: boolean;
}
