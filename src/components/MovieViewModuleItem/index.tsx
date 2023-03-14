import React from "react";
import MovieAction from "@components/MovieAction";
import {
  CustomizedImage,
  CustomizedPaper,
  CustomizedTypographyOverview,
  CustomizedTypographyTitle,
} from "./styles";
import { useAppSelector } from "@store/hooks";
import { selectMovieByMovieId } from "@store/movie/selectors";
import { IMovieViewModuleItemProps } from "./types";

const MovieViewModuleItem = ({ id }: IMovieViewModuleItemProps) => {
  const movie = useAppSelector((state) =>
    selectMovieByMovieId(state, { movieId: id })
  )[0];

  return (
    <CustomizedPaper>
      <CustomizedImage
        src={
          (process.env.REACT_APP_MOVIE_DB_IMAGE_URL_ORIGINAL as string) +
          movie?.poster_path
        }
        loading="lazy"
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
      <MovieAction />
    </CustomizedPaper>
  );
};

export default MovieViewModuleItem;
