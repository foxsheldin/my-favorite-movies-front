import { useMutation } from "@apollo/client";
import { useTranslation } from "react-i18next";
import { UPDATE_FAVORITE_MOVIE } from "@api/graphql/mutations/updateFavoriteMovie";
import {
  IUpdateFavoriteMovieMutationResponseData,
  IUpdateFavoriteMovieMutationVariables,
  IUseUpdateFavoriteMovieMutationResult,
} from "@api/graphql/types/movie";

export function useUpdateFavoriteMovieMutation(): IUseUpdateFavoriteMovieMutationResult {
  const { i18n } = useTranslation();
  const [mutation, options] = useMutation<
    IUpdateFavoriteMovieMutationResponseData,
    IUpdateFavoriteMovieMutationVariables
  >(UPDATE_FAVORITE_MOVIE);

  const updateFavoriteMovieMutation = async (movieId: number) => {
    return await mutation({
      variables: {
        movieId,
        language: i18n.resolvedLanguage,
      },
    });
  };

  return { updateFavoriteMovieMutation, ...options };
}
