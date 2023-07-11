import { GET_PROFILE } from "@api/graphql/queries/getProfile";
import { IGetProfileQueryData } from "@api/graphql/types/user";
import { useQuery } from "@apollo/client";

export const useGetProfile = () => {
  const { data, ...otherOptions } = useQuery<IGetProfileQueryData>(GET_PROFILE);

  return { profile: data?.getProfile, ...otherOptions };
};
