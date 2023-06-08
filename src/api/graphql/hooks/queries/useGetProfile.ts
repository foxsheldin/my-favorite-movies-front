import { GET_PROFILE } from "@api/graphql/queries/getProfile";
import {
  IGetProfileQueryData,
  IGetProfileQueryVariables,
} from "@api/graphql/types/user";
import { useQuery } from "@apollo/client";

export const useGetProfile = () => {
  const { data, ...otherOptions } = useQuery<
    IGetProfileQueryData,
    IGetProfileQueryVariables
  >(GET_PROFILE, {
    variables: { userId: localStorage.getItem("DB_user_id") ?? "" },
  });

  return { profile: data?.getProfile, ...otherOptions };
};
