import React, { memo } from "react";
import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { selectGenreByGenreId } from "@store/genre/selectors";
import { genreSlice } from "@store/genre";
import { IGenreItemProps } from "./types";

const GenreListItem = memo(({ id, selected }: IGenreItemProps) => {
  const dispatch = useAppDispatch();
  const genre = useAppSelector((state) =>
    selectGenreByGenreId(state, { genreId: id })
  )[0];

  return (
    <Button
      variant={selected ? "contained" : "outlined"}
      onClick={() =>
        dispatch(genreSlice.actions.updateSelectedGenres(id as number))
      }
    >
      {genre?.name}
    </Button>
  );
});

export default GenreListItem;
