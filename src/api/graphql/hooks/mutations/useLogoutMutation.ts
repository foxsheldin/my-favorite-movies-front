import { useMutation } from "@apollo/client";
import {
  ILogoutMutationData,
  IUseLogoutMutationResult,
} from "@api/graphql/types/auth";
import { LOG_OUT } from "@api/graphql/mutations/logout";

export function useLogoutMutation(): IUseLogoutMutationResult {
  const [mutation, options] = useMutation<ILogoutMutationData>(LOG_OUT);

  const logoutMutation = async () => {
    const response = await mutation();

    return response;
  };

  return { logoutMutation, ...options };
}
