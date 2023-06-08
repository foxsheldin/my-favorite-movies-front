import { GET_GENRE_LIST } from "@api/graphql/queries/getGenreList";
import {
  IGenreListQueryData,
  IGenreListQueryVariables,
} from "@api/graphql/types/genre";
import { useQuery } from "@apollo/client";
import { useTranslation } from "react-i18next";

export const useGetGenreList = () => {
  const { i18n } = useTranslation();

  const { data, ...otherOptions } = useQuery<
    IGenreListQueryData,
    IGenreListQueryVariables
  >(GET_GENRE_LIST, { variables: { language: i18n.resolvedLanguage } });

  return { genres: data?.getGenreList ?? [], ...otherOptions };
};
