import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ClearIcon from "@mui/icons-material/Clear";
import StarIcon from "@mui/icons-material/Star";
import TooltipIconButton from "@components/TooltipIconButton";
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
      <TooltipIconButton
        title="Просмотрено"
        color={movie.userWatched ? "primary" : "default"}
        onClick={
          movie?.userFavorite
            ? () => dispatch(updateWatchedFavoriteMovie(movie))
            : undefined
        }
      >
        <VisibilityIcon />
      </TooltipIconButton>
      <TooltipIconButton
        title={
          movie.userFavorite ? "Удалить из избранного" : "Добавить в избранное"
        }
        onClick={() => dispatch(updateFavoriteMovie(movie))}
      >
        {movie.userFavorite ? <ClearIcon /> : <StarIcon color="primary" />}
      </TooltipIconButton>
    </div>
  );
};

export default MovieAction;
