import React from "react";
import MovieAction from "@components/MovieAction";
import {
  ImageSizeWrapper,
  WrappedPaper,
  TypographyOverviewWrapper,
  TypographyTitleWrapper,
} from "./styles";
import { IMovieViewModuleItemProps } from "./types";
import { getImagePath } from "@helpers/getPathImage";

const MovieViewModuleItem = ({ movie }: IMovieViewModuleItemProps) => {
  return (
    <WrappedPaper>
      <ImageSizeWrapper
        src={`${getImagePath("original", movie?.posterPath)}`}
        loading="lazy"
        alt={`Постер фильма ${movie?.title}`}
      />
      <TypographyTitleWrapper variant="subtitle2">
        {movie?.title}
      </TypographyTitleWrapper>
      <TypographyOverviewWrapper variant="body2" sx={{ textOverflow: "clip" }}>
        {movie?.overview}
      </TypographyOverviewWrapper>
      <MovieAction movie={movie} />
    </WrappedPaper>
  );
};

export default MovieViewModuleItem;
