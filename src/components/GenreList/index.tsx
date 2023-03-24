import React from "react";
import GenreListItem from "@components/GenreListItem";
import { selectGenreIds } from "@store/genre/selectors";
import { useAppSelector } from "@store/hooks";
import { Wrapper } from "./styles";
import { IGenreListProps } from "./types";

const GenreList = ({ selectedGenres, onItemClick }: IGenreListProps) => {
  const genreIds = useAppSelector(selectGenreIds);

  return (
    <Wrapper>
      {genreIds.map((id) => (
        <GenreListItem
          key={id}
          id={id}
          onClick={onItemClick}
          isSelected={selectedGenres.includes(id)}
        />
      ))}
    </Wrapper>
  );
};

export default GenreList;
