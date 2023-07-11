import React, { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ClearIcon from "@mui/icons-material/Clear";
import StarIcon from "@mui/icons-material/Star";
import TooltipIconButton from "@components/TooltipIconButton";
import { IMovieActionProps } from "./types";
import { useLocation } from "react-router-dom";
import { useUpdateWatchedMovieStatusMutation } from "@api/graphql/hooks/mutations/useUpdateWatchedMovieStatusMutation";
import { useUpdateFavoriteMovieMutation } from "@api/graphql/hooks/mutations/useUpdateFavoriteMovieMutation";

const MovieAction = memo(({ movie }: IMovieActionProps) => {
  const { t } = useTranslation("common", {
    keyPrefix: "movie.action",
  });
  const location = useLocation();
  const isFavoriteLocation = location.pathname === "/panel";
  const [isFavorite, setIsFavorite] = useState(
    isFavoriteLocation || movie?.isFavorite
  );
  const [isWatched, setIsWatched] = useState(movie.isWatched);

  const { updateFavoriteMovieMutation } = useUpdateFavoriteMovieMutation();
  const { updateWatchedMovieStatusMutation } =
    useUpdateWatchedMovieStatusMutation();

  const toggleFavoriteMovie = async () => {
    try {
      await updateFavoriteMovieMutation(movie.id);
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error(error);
    }
  };

  const updateWatchedFavoriteMovie = async () => {
    try {
      await updateWatchedMovieStatusMutation(movie.id);
      setIsWatched(!isWatched);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {isFavoriteLocation && isFavorite && (
        <TooltipIconButton
          title={t("watched")}
          color={isWatched ? "primary" : "default"}
          onClick={updateWatchedFavoriteMovie}
        >
          <VisibilityIcon />
        </TooltipIconButton>
      )}
      <TooltipIconButton
        title={isFavorite ? t("removeFavorite") : t("addFavorite")}
        onClick={toggleFavoriteMovie}
      >
        {isFavorite ? <ClearIcon /> : <StarIcon color="primary" />}
      </TooltipIconButton>
    </div>
  );
});

export default MovieAction;
