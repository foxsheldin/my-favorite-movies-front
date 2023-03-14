import React, { memo } from "react";
import { TableCell, TableRow, Typography } from "@mui/material";
import MovieAction from "@components/MovieAction";
import { useAppSelector } from "@store/hooks";
import { selectMovieByMovieId } from "@store/movie/selectors";
import { IMovieViewListItemProps } from "./types";

const MovieViewListItem = memo(({ id }: IMovieViewListItemProps) => {
  const movie = useAppSelector((state) =>
    selectMovieByMovieId(state, { movieId: id })
  )[0];

  return (
    <TableRow>
      <TableCell>
        <Typography variant="subtitle2">{movie?.title}</Typography>
      </TableCell>
      <TableCell align="center">
        <img
          src={
            (process.env.REACT_APP_MOVIE_DB_IMAGE_URL_W500 as string) +
            movie?.poster_path
          }
          width="75"
          height="112.5"
          loading="lazy"
        />
      </TableCell>
      <TableCell>{movie?.overview}</TableCell>
      <TableCell align="right">
        <MovieAction />
      </TableCell>
    </TableRow>
  );
});

export default MovieViewListItem;
