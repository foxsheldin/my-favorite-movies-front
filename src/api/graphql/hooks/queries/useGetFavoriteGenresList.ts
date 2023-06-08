import { GET_FAVORITE_GENRES_LIST } from "@api/graphql/queries/getFavoriteGenresList";
import {
  IFavoriteGenresListQueryData,
  IFavoriteGenresListQueryVariables,
} from "@api/graphql/types/genre";
import { useQuery } from "@apollo/client";

export const useGetFavoriteGenresList = () => {
  const { data, ...otherOptions } = useQuery<
    IFavoriteGenresListQueryData,
    IFavoriteGenresListQueryVariables
  >(GET_FAVORITE_GENRES_LIST, {
    variables: { userId: localStorage.getItem("DB_user_id") ?? "" },
  });

  return {
    favoriteGenresIds: data?.getFavoriteGenresList ?? [],
    ...otherOptions,
  };
};
