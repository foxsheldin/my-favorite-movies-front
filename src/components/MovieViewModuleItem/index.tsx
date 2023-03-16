import React from "react";
import MovieAction from "@components/MovieAction";
import { useAppDispatch } from "@store/hooks";
import {
  updateFavoriteMovie,
  updateWatchedFavoriteMovie,
} from "@store/favoriteMovie/thunks";
import {
  CustomizedImage,
  CustomizedPaper,
  CustomizedTypographyOverview,
  CustomizedTypographyTitle,
} from "./styles";
import { IMovieViewModuleItemProps } from "./types";
import { IFavoriteMovieData } from "@store/favoriteMovie/types";
import { getPathImageOriginal } from "@helpers/getPathImage";

const MovieViewModuleItem = ({ movie }: IMovieViewModuleItemProps) => {
  const dispatch = useAppDispatch();

  return (
    <CustomizedPaper>
      <CustomizedImage
        src={`${getPathImageOriginal(movie?.poster_path as string)}`}
        loading="lazy"
        alt={`Постер фильма ${movie?.title}`}
      />
      <CustomizedTypographyTitle variant="subtitle2">
        {movie?.title}
      </CustomizedTypographyTitle>
      <CustomizedTypographyOverview
        variant="body2"
        sx={{ textOverflow: "clip" }}
      >
        {movie?.overview}
      </CustomizedTypographyOverview>
      <MovieAction
        isFavorite={movie?.user_favorite}
        isWatched={movie?.user_watched}
        onFavoriteButtonClick={() =>
          dispatch(updateFavoriteMovie(movie as IFavoriteMovieData))
        }
        onWatchButtonClick={
          movie?.user_favorite
            ? () => dispatch(updateWatchedFavoriteMovie(movie))
            : undefined
        }
      />
    </CustomizedPaper>
  );
};

export default MovieViewModuleItem;
