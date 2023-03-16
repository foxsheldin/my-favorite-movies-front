import { IFavoriteMovieData } from "@store/favoriteMovie/types";

export interface IMovieViewModuleProps {
  data?: (IFavoriteMovieData | undefined)[];
}
