import React from "react";
import GenreListItem from "@components/GenreListItem";
import { selectGenreIds } from "@store/genre/selectors";
import { useAppSelector } from "@store/hooks";
import { Wrapper } from "./styles";

const GenreList = () => {
  const genreIds = useAppSelector(selectGenreIds);

  return (
    <Wrapper>
      {genreIds.map((id) => (
        <GenreListItem key={id} id={id} />
      ))}
    </Wrapper>
  );
};

export default GenreList;
