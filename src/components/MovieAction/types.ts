export interface IMovieActionProps {
  isWatched?: boolean;
  isFavorite?: boolean;
  onFavoriteButtonClick?: () => void;
  onWatchButtonClick?: () => void;
}
