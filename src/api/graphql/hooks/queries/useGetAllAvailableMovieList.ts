import { GET_ALL_AVAILABLE_MOVIE_LIST } from "@api/graphql/queries/getAllAvailableMovieList";
import {
  IAllAvailableMovieListQueryData,
  IAllAvailableMovieListQueryVariables,
} from "@api/graphql/types/movie";
import { useQuery } from "@apollo/client";
import {
  selectFilterPopularity,
  selectFilterReleaseYear,
  selectFilterSelectedMovieGenres,
} from "@store/filter/selectors";
import { useAppSelector } from "@store/hooks";
import { useTranslation } from "react-i18next";

export const useGetAllAvailableMovieList = () => {
  const { i18n } = useTranslation();
  const popularity = useAppSelector(selectFilterPopularity);
  const releaseYear = useAppSelector(selectFilterReleaseYear);
  const selectedGenresIds = useAppSelector(selectFilterSelectedMovieGenres);

  const { data, ...otherOptions } = useQuery<
    IAllAvailableMovieListQueryData,
    IAllAvailableMovieListQueryVariables
  >(GET_ALL_AVAILABLE_MOVIE_LIST, {
    variables: {
      page: 1,
      popularity,
      releaseYear,
      selectedGenresIds,
      language: i18n.resolvedLanguage,
      userId: localStorage.getItem("DB_user_id") ?? "",
    },
    fetchPolicy: "cache-and-network",
  });

  return {
    movieList: data?.getAllAvailableMovieList,
    ...otherOptions,
  };
};
