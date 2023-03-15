import React from "react";
import { TableCell, TableRow, Typography } from "@mui/material";
import MovieAction from "@components/MovieAction";
import { IMovieViewListItemProps } from "./types";

const MovieViewListItem = ({ data }: IMovieViewListItemProps) => {
  return (
    <TableRow>
      <TableCell>
        <Typography variant="subtitle2">{data?.title}</Typography>
      </TableCell>
      <TableCell align="center">
        <img
          src={
            (process.env.REACT_APP_MOVIE_DB_IMAGE_URL_W500 as string) +
            data?.poster_path
          }
          width="75"
          height="112.5"
          loading="lazy"
        />
      </TableCell>
      <TableCell>{data?.overview}</TableCell>
      <TableCell align="right">
        <MovieAction />
      </TableCell>
    </TableRow>
  );
};

export default MovieViewListItem;
