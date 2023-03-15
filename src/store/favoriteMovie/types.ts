import { IMovieData } from "@store/movie/types";

export interface IFavoriteMovieResponseData {
  page: number;
  results: IFavoriteMovieData[];
  total_pages: number;
  total_results: number;
}

export interface IFavoriteMovieData extends IMovieData {
  watched: boolean;
}
