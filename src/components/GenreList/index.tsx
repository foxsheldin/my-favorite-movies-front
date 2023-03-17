import React from "react";
import GenreListItem from "@components/GenreListItem";
import { selectGenreIds } from "@store/genre/selectors";
import { useAppSelector } from "@store/hooks";
import { CustomizedDiv } from "./styles";

const GenreList = () => {
  const genreIds = useAppSelector(selectGenreIds);

  return (
    <CustomizedDiv>
      {genreIds.map((id) => (
        <GenreListItem key={id} id={id} />
      ))}
    </CustomizedDiv>
  );
};

export default GenreList;
