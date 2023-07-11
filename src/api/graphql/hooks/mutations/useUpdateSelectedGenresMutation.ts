import { UPDATE_SELECTED_GENRES } from "@api/graphql/mutations/updateSelectedGenres";
import {
  IUpdateSelectedGenresMutationVariables,
  IUpdateSelectedGenresResponseData,
  IUseUpdateSelectedGenresMutationResult,
} from "@api/graphql/types/genre";

import { useMutation } from "@apollo/client";

export function useUpdateSelectedGenresMutation(): IUseUpdateSelectedGenresMutationResult {
  const [mutation, options] = useMutation<
    IUpdateSelectedGenresResponseData,
    IUpdateSelectedGenresMutationVariables
  >(UPDATE_SELECTED_GENRES);

  const updateSelectedGenresMutation = async (genreId: number) => {
    await mutation({
      variables: { genreId },
    });
  };

  return { updateSelectedGenresMutation, ...options };
}
