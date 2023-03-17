import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ClearIcon from "@mui/icons-material/Clear";
import StarIcon from "@mui/icons-material/Star";
import { IconButton, Tooltip } from "@mui/material";
import { IMovieActionProps } from "./types";
import { useAppDispatch } from "@store/hooks";
import {
  updateFavoriteMovie,
  updateWatchedFavoriteMovie,
} from "@store/favoriteMovie/thunks";

const MovieAction = ({ movie }: IMovieActionProps) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <Tooltip title="Просмотрено">
        <IconButton
          color={movie.userWatched ? "primary" : "default"}
          onClick={
            movie?.userFavorite
              ? () => dispatch(updateWatchedFavoriteMovie(movie))
              : undefined
          }
        >
          <VisibilityIcon />
        </IconButton>
      </Tooltip>
      <Tooltip
        title={
          movie.userFavorite ? "Удалить из избранного" : "Добавить в избранное"
        }
      >
        <IconButton onClick={() => dispatch(updateFavoriteMovie(movie))}>
          {movie.userFavorite ? <ClearIcon /> : <StarIcon color="primary" />}
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default MovieAction;
