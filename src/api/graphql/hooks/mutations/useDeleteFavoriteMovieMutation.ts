import { DELETE_FAVORITE_MOVIE } from "@api/graphql/mutations/deleteFavoriteMovie";
import {
  IDeleteFavoriteMovieMutationResponseData,
  IDeleteFavoriteMovieMutationVariables,
  IUseDeleteFavoriteMovieMutationResult,
} from "@api/graphql/types/movie";

import { useMutation } from "@apollo/client";

export function useDeleteFavoriteMovieMutation(): IUseDeleteFavoriteMovieMutationResult {
  const [mutation, options] = useMutation<
    IDeleteFavoriteMovieMutationResponseData,
    IDeleteFavoriteMovieMutationVariables
  >(DELETE_FAVORITE_MOVIE);

  const deleteFavoriteMovieMutation = async (movieId: number) => {
    return await mutation({
      variables: { movieId, userId: localStorage.getItem("DB_user_id") ?? "" },
    });
  };

  return { deleteFavoriteMovieMutation, ...options };
}
