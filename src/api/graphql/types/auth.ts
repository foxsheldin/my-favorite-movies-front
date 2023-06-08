import { FetchResult, MutationResult } from "@apollo/client";

export interface ISignInMutationResponseData {
  signIn: string;
}

export interface ISignInMutationVariables {
  email: string;
  password: string;
}

export interface IUseSignInMutationResult
  extends MutationResult<ISignInMutationResponseData> {
  signInMutation: (
    variables: ISignInMutationVariables
  ) => Promise<FetchResult<ISignInMutationResponseData>>;
}

export interface ISignUpMutationResponse {
  id: string;
  email: string;
}

export interface ISignUpMutationData {
  signUp: ISignUpMutationResponse;
}

export interface ISignUpMutationVariables {
  email: string;
  password: string;
}
