import { UPDATE_WATCHED_MOVIE_STATUS } from "@api/graphql/mutations/updateWatchedMovieStatus";
import {
  IUpdateWatchedMovieStatusMutationResponseData,
  IUpdateWatchedMovieStatusMutationVariables,
  IUseUpdateWatchedMovieStatusMutationResult,
} from "@api/graphql/types/movie";

import { useMutation } from "@apollo/client";

export function useUpdateWatchedMovieStatusMutation(): IUseUpdateWatchedMovieStatusMutationResult {
  const [mutation, options] = useMutation<
    IUpdateWatchedMovieStatusMutationResponseData,
    IUpdateWatchedMovieStatusMutationVariables
  >(UPDATE_WATCHED_MOVIE_STATUS);

  const updateWatchedMovieStatusMutation = async (
    movieId: number,
    status: boolean
  ) => {
    return await mutation({
      variables: {
        movieId,
        status,
        userId: localStorage.getItem("DB_user_id") ?? "",
      },
    });
  };

  return { updateWatchedMovieStatusMutation, ...options };
}
