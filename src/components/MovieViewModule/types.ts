import { IFavoriteMovieData } from "@store/favoriteMovie/types";
import { IMovieData } from "@store/movie/types";

export interface IMovieViewModuleProps {
  data?: (IMovieData | IFavoriteMovieData | undefined)[];
}
