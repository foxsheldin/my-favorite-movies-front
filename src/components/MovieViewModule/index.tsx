import React from "react";
import MovieViewModuleItem from "@components/MovieViewModuleItem";
import Message from "@components/Message";
import { selectMovieIds } from "@store/movie/selectors";
import { useAppSelector } from "@store/hooks";
import { CustomizedDiv } from "./styles";

const MovieViewModule = () => {
  const movieIds = useAppSelector(selectMovieIds);

  if (!movieIds.length) {
    return <Message text="Нет данных" />;
  }

  return (
    <CustomizedDiv>
      {movieIds?.map((id) => (
        <MovieViewModuleItem key={id} id={id} />
      ))}
    </CustomizedDiv>
  );
};

export default MovieViewModule;
