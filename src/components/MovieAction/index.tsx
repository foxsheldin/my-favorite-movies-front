import React, { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ClearIcon from "@mui/icons-material/Clear";
import StarIcon from "@mui/icons-material/Star";
import TooltipIconButton from "@components/TooltipIconButton";
import { IMovieActionProps } from "./types";
import { useLocation } from "react-router-dom";
import { useCreateFavoriteMovieMutation } from "@api/graphql/hooks/mutations/useCreateFavoriteMovieMutation";
import { useDeleteFavoriteMovieMutation } from "@api/graphql/hooks/mutations/useDeleteFavoriteMovieMutation";
import { useUpdateWatchedMovieStatusMutation } from "@api/graphql/hooks/mutations/useUpdateWatchedMovieStatusMutation";

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

  const { createFavoriteMovieMutation } = useCreateFavoriteMovieMutation();
  const { deleteFavoriteMovieMutation } = useDeleteFavoriteMovieMutation();
  const { updateWatchedMovieStatusMutation } =
    useUpdateWatchedMovieStatusMutation();

  const updateFavoriteMovie = async () => {
    try {
      if (isFavorite) {
        await deleteFavoriteMovieMutation(movie.id);
        setIsFavorite(false);
        return;
      }

      await createFavoriteMovieMutation(movie.id);
      setIsFavorite(true);
    } catch (error) {
      console.error(error);
    }
  };

  const updateWatchedFavoriteMovie = async () => {
    try {
      await updateWatchedMovieStatusMutation(movie.id, !isWatched);
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
        onClick={updateFavoriteMovie}
      >
        {isFavorite ? <ClearIcon /> : <StarIcon color="primary" />}
      </TooltipIconButton>
    </div>
  );
});

export default MovieAction;
