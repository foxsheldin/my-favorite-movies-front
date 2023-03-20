import React from "react";
import MovieViewModuleItem from "@components/MovieViewModuleItem";
import { Wrapper } from "./styles";
import { IMovieViewModuleProps } from "./types";

const MovieViewModule = ({ movies }: IMovieViewModuleProps) => {
  return (
    <Wrapper>
      {movies?.map((movie) => (
        <MovieViewModuleItem key={movie?.id} movie={movie} />
      ))}
    </Wrapper>
  );
};

export default MovieViewModule;
