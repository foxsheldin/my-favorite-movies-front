import React from "react";
import MovieViewModuleItem from "@components/MovieViewModuleItem";
import { selectMovieIds } from "@store/movie/selectors";
import { useAppSelector } from "@store/hooks";
import { CustomizedDiv } from "./styles";

const MovieViewModule = () => {
  const moviesIds = useAppSelector(selectMovieIds);

  return (
    <CustomizedDiv>
      {moviesIds?.map((id) => (
        <MovieViewModuleItem key={id} id={id} />
      ))}
    </CustomizedDiv>
  );
};

export default MovieViewModule;
