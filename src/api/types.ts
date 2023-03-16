import { IFavoriteMovieData } from "@store/favoriteMovie/types";

export interface IBackendData {
  favoriteMovies: IFavoriteMovieData[];
  favoriteGenres: number[];
}
