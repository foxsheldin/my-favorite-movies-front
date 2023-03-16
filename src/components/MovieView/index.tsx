import React from "react";
import Message from "@components/Message";
import MovieViewList from "@components/MovieViewList";
import MovieViewModule from "@components/MovieViewModule";
import { ETypeView } from "@constants/typeView";
import { useAppSelector } from "@store/hooks";
import { IMovieViewProps } from "./types";
import { selectFilterCurrentTypeView } from "@store/filter/selectors";

const MovieView = ({ movies }: IMovieViewProps) => {
  const movieTypeView = useAppSelector(selectFilterCurrentTypeView);

  if (!movies.length) {
    return <Message text="Нет данных" />;
  }

  return (
    <>
      {movieTypeView === ETypeView.list && <MovieViewList movies={movies} />}
      {movieTypeView === ETypeView.module && (
        <MovieViewModule movies={movies} />
      )}
    </>
  );
};

export default MovieView;
