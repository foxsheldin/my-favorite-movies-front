import React from "react";
import { TableCell, TableRow, Typography } from "@mui/material";
import MovieAction from "@components/MovieAction";
import { useAppDispatch } from "@store/hooks";
import {
  updateFavoriteMovie,
  updateWatchedFavoriteMovie,
} from "@store/favoriteMovie/thunks";
import { IMovieViewListItemProps } from "./types";
import { IFavoriteMovieData } from "@store/favoriteMovie/types";
import { getPathImageW500 } from "@helpers/getPathImage";

const MovieViewListItem = ({ movie }: IMovieViewListItemProps) => {
  const dispatch = useAppDispatch();

  return (
    <TableRow>
      <TableCell>
        <Typography variant="subtitle2">{movie?.title}</Typography>
      </TableCell>
      <TableCell align="center">
        <img
          src={`${getPathImageW500(movie?.posterPath as string)}`}
          width="75"
          height="113"
          loading="lazy"
          alt={`Постер фильма ${movie?.title}`}
        />
      </TableCell>
      <TableCell>{movie?.overview}</TableCell>
      <TableCell align="right">
        <MovieAction
          isFavorite={movie?.userFavorite}
          isWatched={movie?.userWatched}
          onFavoriteButtonClick={() =>
            dispatch(updateFavoriteMovie(movie as IFavoriteMovieData))
          }
          onWatchButtonClick={
            movie?.userFavorite
              ? () => dispatch(updateWatchedFavoriteMovie(movie))
              : undefined
          }
        />
      </TableCell>
    </TableRow>
  );
};

export default MovieViewListItem;
