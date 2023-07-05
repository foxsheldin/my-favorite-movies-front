import { GET_FAVORITE_GENRES_LIST } from "@api/graphql/queries/getFavoriteGenresList";
import { IFavoriteGenresListQueryData } from "@api/graphql/types/genre";
import { useQuery } from "@apollo/client";

export const useGetFavoriteGenresList = () => {
  const { data, ...otherOptions } = useQuery<IFavoriteGenresListQueryData>(
    GET_FAVORITE_GENRES_LIST
  );

  return {
    favoriteGenresIds: data?.getFavoriteGenresList ?? [],
    ...otherOptions,
  };
};
