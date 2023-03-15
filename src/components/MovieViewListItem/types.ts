import { IFavoriteMovieData } from "@store/favoriteMovie/types";
import { IMovieData } from "@store/movie/types";

export interface IMovieViewListItemProps {
  data?: IFavoriteMovieData | IMovieData;
}
