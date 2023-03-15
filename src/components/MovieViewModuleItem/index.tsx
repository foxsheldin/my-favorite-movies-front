import React from "react";
import MovieAction from "@components/MovieAction";
import {
  CustomizedImage,
  CustomizedPaper,
  CustomizedTypographyOverview,
  CustomizedTypographyTitle,
} from "./styles";
import { IMovieViewModuleItemProps } from "./types";

const MovieViewModuleItem = ({ data }: IMovieViewModuleItemProps) => {
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
      <MovieAction />
    </CustomizedPaper>
  );
};

export default MovieViewModuleItem;
