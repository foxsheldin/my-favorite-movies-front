import { GET_FAVORITE_MOVIE_LIST } from "@api/graphql/queries/getFavoriteMovieList";
import {
  IFavoriteMovieListQueryData,
  IFavoriteMovieListQueryVariables,
} from "@api/graphql/types/movie";
import { useQuery } from "@apollo/client";
import { useTranslation } from "react-i18next";

const PAGE_LIMIT = 10;

export const useGetFavoriteMovieList = () => {
  const { i18n } = useTranslation();
  const { data, ...otherOptions } = useQuery<
    IFavoriteMovieListQueryData,
    IFavoriteMovieListQueryVariables
  >(GET_FAVORITE_MOVIE_LIST, {
    variables: {
      page: 1,
      limit: PAGE_LIMIT,
      language: i18n.resolvedLanguage,
      userId: localStorage.getItem("DB_user_id") ?? "",
    },
    fetchPolicy: "cache-and-network",
  });

  return {
    favoriteMovieList: data?.getFavoriteMovieList,
    ...otherOptions,
  };
};
