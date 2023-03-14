import React, { useEffect } from "react";
import GenreListItem from "@components/GenreListItem";
import {
  selectGenreIds,
  selectSelectedGenresArray,
} from "@store/genre/selectors";
import { fetchGenres } from "@store/genre/thunk";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { CustomizedDiv } from "./styles";

const GenreList = () => {
  const dispatch = useAppDispatch();
  const genreIds = useAppSelector(selectGenreIds);
  const selectedGenres = useAppSelector(selectSelectedGenresArray);

  useEffect(() => {
    dispatch(fetchGenres());
  }, []);

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
