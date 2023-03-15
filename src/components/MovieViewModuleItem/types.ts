import { IFavoriteMovieData } from "@store/favoriteMovie/types";
import { IMovieData } from "@store/movie/types";

export interface IMovieViewModuleItemProps {
  data?: IFavoriteMovieData | IMovieData;
}
