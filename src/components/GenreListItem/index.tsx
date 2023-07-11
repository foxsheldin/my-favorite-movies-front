import React, { memo } from "react";
import { Button } from "@mui/material";
import { IGenreItemProps } from "./types";

const GenreListItem = memo(
  ({ genre, onClick, isSelected }: IGenreItemProps) => {
    return (
      <Button
        variant={isSelected ? "contained" : "outlined"}
        onClick={() => onClick(genre.id)}
      >
        {genre.name}
      </Button>
    );
  }
);

export default GenreListItem;
