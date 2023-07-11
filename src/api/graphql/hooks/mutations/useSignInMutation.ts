import { useMutation } from "@apollo/client";
import { SIGN_IN } from "@api/graphql/mutations/signIn";
import {
  ISignInMutationData,
  ISignInMutationVariables,
  IUseSignInMutationResult,
} from "@api/graphql/types/auth";

export function useSignInMutation(): IUseSignInMutationResult {
  const [mutation, options] = useMutation<
    ISignInMutationData,
    ISignInMutationVariables
  >(SIGN_IN);

  const signInMutation = async (variables: ISignInMutationVariables) => {
    return await mutation({ variables });
  };

  return { signInMutation, ...options };
}
