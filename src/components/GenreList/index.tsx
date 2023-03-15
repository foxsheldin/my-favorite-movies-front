import React from "react";
import GenreListItem from "@components/GenreListItem";
import {
  selectGenreIds,
  selectSelectedGenresArray,
} from "@store/genre/selectors";
import { useAppSelector } from "@store/hooks";
import { CustomizedDiv } from "./styles";

const GenreList = () => {
  const genreIds = useAppSelector(selectGenreIds);
  const selectedGenres = useAppSelector(selectSelectedGenresArray);

  return (
    <CustomizedDiv>
      {genreIds.map((id) => (
        <GenreListItem
          key={id}
          id={id}
          selected={selectedGenres.includes(id as number)}
        />
      ))}
    </CustomizedDiv>
  );
};

export default GenreList;
