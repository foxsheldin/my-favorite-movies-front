import React, { memo } from "react";
import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  selectGenreByGenreId,
  selectSelectedGenresArray,
} from "@store/genre/selectors";
import { updateSelectedGenres } from "@store/genre/thunks";
import { IGenreItemProps } from "./types";

const GenreListItem = memo(({ id }: IGenreItemProps) => {
  const dispatch = useAppDispatch();
  const genre = useAppSelector((state) =>
    selectGenreByGenreId(state, { genreId: id })
  );
  const selectedGenres = useAppSelector(selectSelectedGenresArray);

  return (
    <Button
      variant={selectedGenres.includes(id) ? "contained" : "outlined"}
      onClick={() => dispatch(updateSelectedGenres(id))}
    >
      {genre?.name}
    </Button>
  );
});

export default GenreListItem;
