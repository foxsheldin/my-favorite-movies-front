import { IFavoriteMovieData } from "@store/favoriteMovie/types";

export interface IMovieViewProps {
  movies: (IFavoriteMovieData | undefined)[];
}
