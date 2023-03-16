import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ClearIcon from "@mui/icons-material/Clear";
import StarIcon from "@mui/icons-material/Star";
import { IconButton, Tooltip } from "@mui/material";
import { IMovieActionProps } from "./types";

const MovieAction = ({
  isFavorite,
  isWatched,
  onFavoriteButtonClick,
  onWatchButtonClick,
}: IMovieActionProps) => {
  return (
    <div>
      {onWatchButtonClick && (
        <Tooltip title="Просмотрено">
          <IconButton
            color={isWatched ? "primary" : "default"}
            onClick={onWatchButtonClick}
          >
            <VisibilityIcon />
          </IconButton>
        </Tooltip>
      )}
      {onFavoriteButtonClick && (
        <Tooltip
          title={isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
        >
          <IconButton onClick={onFavoriteButtonClick}>
            {isFavorite ? <ClearIcon /> : <StarIcon color="primary" />}
          </IconButton>
        </Tooltip>
      )}
    </div>
  );
};

export default MovieAction;
