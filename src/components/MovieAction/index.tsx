import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ClearIcon from "@mui/icons-material/Clear";
import StarIcon from "@mui/icons-material/Star";
import TooltipIconButton from "@components/TooltipIconButton";
import { IMovieActionProps } from "./types";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  updateFavoriteMovie,
  updateWatchedFavoriteMovie,
} from "@store/favoriteMovie/thunks";
import { selectFavoriteMovieIds } from "@store/favoriteMovie/selectors";
import { useLocation } from "react-router-dom";

const MovieAction = memo(({ movie }: IMovieActionProps) => {
  const { t } = useTranslation("common", {
    keyPrefix: "movie.action",
  });
  const location = useLocation();
  const dispatch = useAppDispatch();

  const favoriteMovieIds = useAppSelector(selectFavoriteMovieIds);

  const isFavorite =
    movie?.userFavorite || favoriteMovieIds.includes(movie?.id);
  const isFavoriteLocation = location.pathname === "/panel";

  return (
    <div>
      {isFavoriteLocation && isFavorite && (
        <TooltipIconButton
          title={t("watched")}
          color={movie?.userWatched ? "primary" : "default"}
          onClick={() => dispatch(updateWatchedFavoriteMovie(movie))}
        >
          <VisibilityIcon />
        </TooltipIconButton>
      )}
      <TooltipIconButton
        title={isFavorite ? t("removeFavorite") : t("addFavorite")}
        onClick={() => dispatch(updateFavoriteMovie(movie))}
      >
        {isFavorite ? <ClearIcon /> : <StarIcon color="primary" />}
      </TooltipIconButton>
    </div>
  );
});

export default MovieAction;
