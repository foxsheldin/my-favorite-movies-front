import React from "react";
import MovieAction from "@components/MovieAction";
import {
  CustomizedImage,
  CustomizedPaper,
  CustomizedTypographyOverview,
  CustomizedTypographyTitle,
} from "./styles";
import { IMovieViewModuleItemProps } from "./types";
import { getImagePath } from "@helpers/getPathImage";

const MovieViewModuleItem = ({ movie }: IMovieViewModuleItemProps) => {
  return (
    <CustomizedPaper>
      <CustomizedImage
        src={`${getImagePath("original", movie?.posterPath)}`}
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
      <MovieAction movie={movie} />
    </CustomizedPaper>
  );
};

export default MovieViewModuleItem;
