import React from "react";
import { TableCell, TableRow, Typography } from "@mui/material";
import MovieAction from "@components/MovieAction";
import { IMovieViewListItemProps } from "./types";
import { getImagePath } from "@helpers/getPathImage";
import { ImageSizeWrapper } from "./styles";

const MovieViewListItem = ({ movie }: IMovieViewListItemProps) => {
  return (
    <TableRow>
      <TableCell>
        <Typography variant="subtitle2">{movie?.title}</Typography>
      </TableCell>
      <TableCell align="center">
        <ImageSizeWrapper
          src={`${getImagePath("w500", movie?.posterPath)}`}
          loading="lazy"
          alt={`Постер фильма ${movie?.title}`}
        />
      </TableCell>
      <TableCell>{movie?.overview}</TableCell>
      <TableCell align="right">
        <MovieAction movie={movie} />
      </TableCell>
    </TableRow>
  );
};

export default MovieViewListItem;
