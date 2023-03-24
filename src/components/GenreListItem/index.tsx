import React, { memo } from "react";
import { Button } from "@mui/material";
import { useAppSelector } from "@store/hooks";
import { selectGenreByGenreId } from "@store/genre/selectors";
import { IGenreItemProps } from "./types";

const GenreListItem = memo(({ id, onClick, isSelected }: IGenreItemProps) => {
  const genre = useAppSelector((state) =>
    selectGenreByGenreId(state, { genreId: id })
  );

  return (
    <Button
      variant={isSelected ? "contained" : "outlined"}
      onClick={() => onClick(id)}
    >
      {genre?.name}
    </Button>
  );
});

export default GenreListItem;
