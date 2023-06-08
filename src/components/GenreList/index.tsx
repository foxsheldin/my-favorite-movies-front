import React from "react";
import GenreListItem from "@components/GenreListItem";
import { Wrapper } from "./styles";
import { IGenreListProps } from "./types";

const GenreList = ({
  genres,
  selectedGenres,
  onItemClick,
}: IGenreListProps) => {
  return (
    <Wrapper>
      {genres.map((genre) => (
        <GenreListItem
          key={genre.id}
          genre={genre}
          onClick={onItemClick}
          isSelected={selectedGenres.includes(genre.id)}
        />
      ))}
    </Wrapper>
  );
};

export default GenreList;
