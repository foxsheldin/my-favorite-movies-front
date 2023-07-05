import { CREATE_FAVORITE_MOVIE } from "@api/graphql/mutations/createFavoriteMovie";
import {
  ICreateFavoriteMovieMutationResponseData,
  ICreateFavoriteMovieMutationVariables,
  IUseCreateFavoriteMovieMutationResult,
} from "@api/graphql/types/movie";

import { useMutation } from "@apollo/client";
import { useTranslation } from "react-i18next";

export function useCreateFavoriteMovieMutation(): IUseCreateFavoriteMovieMutationResult {
  const { i18n } = useTranslation();
  const [mutation, options] = useMutation<
    ICreateFavoriteMovieMutationResponseData,
    ICreateFavoriteMovieMutationVariables
  >(CREATE_FAVORITE_MOVIE);

  const createFavoriteMovieMutation = async (movieId: number) => {
    return await mutation({
      variables: {
        movieId,
        language: i18n.resolvedLanguage,
      },
    });
  };

  return { createFavoriteMovieMutation, ...options };
}
