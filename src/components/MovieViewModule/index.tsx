import React from "react";
import MovieViewModuleItem from "@components/MovieViewModuleItem";
import { CustomizedDiv } from "./styles";
import { IMovieViewModuleProps } from "./types";

const MovieViewModule = ({ movies }: IMovieViewModuleProps) => {
  return (
    <CustomizedDiv>
      {movies?.map((movie) => (
        <MovieViewModuleItem key={movie?.id} movie={movie} />
      ))}
    </CustomizedDiv>
  );
};

export default MovieViewModule;
