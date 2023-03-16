import { IFavoriteMovieData } from "@store/favoriteMovie/types";
import { IMovieData } from "@store/movie/types";

export interface IMovieViewListProps {
  data?: (IFavoriteMovieData | undefined)[];
}
