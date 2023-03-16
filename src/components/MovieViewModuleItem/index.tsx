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

const MovieViewModuleItem = ({ data }: IMovieViewModuleItemProps) => {
  const dispatch = useAppDispatch();

  return (
    <CustomizedPaper>
      <CustomizedImage
        src={
          (process.env.REACT_APP_MOVIE_DB_IMAGE_URL_ORIGINAL as string) +
          data?.poster_path
        }
        loading="lazy"
      />
      <CustomizedTypographyTitle variant="subtitle2">
        {data?.title}
      </CustomizedTypographyTitle>
      <CustomizedTypographyOverview
        variant="body2"
        sx={{ textOverflow: "clip" }}
      >
        {data?.overview}
      </CustomizedTypographyOverview>
      <MovieAction
        isFavorite={data?.user_favorite}
        isWatched={data?.user_watched}
        onFavoriteButtonClick={() => dispatch(updateFavoriteMovie(data))}
        onWatchButtonClick={
          data?.user_favorite
            ? () => dispatch(updateWatchedFavoriteMovie(data))
            : undefined
        }
      />
    </CustomizedPaper>
  );
};

export default MovieViewModuleItem;
