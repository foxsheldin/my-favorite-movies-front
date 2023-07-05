import { FetchResult, MutationResult } from "@apollo/client";

export interface PartialTypeUser {
  id: string;
  email: string;
}

export interface ISignInResponseData {
  user: PartialTypeUser;
  access_token: string;
}

export interface ISignInMutationData {
  signIn: ISignInResponseData;
}

export interface ISignInMutationVariables {
  email: string;
  password: string;
}

export interface IUseSignInMutationResult
  extends MutationResult<ISignInMutationData> {
  signInMutation: (
    variables: ISignInMutationVariables
  ) => Promise<FetchResult<ISignInMutationData>>;
}

export interface ISignUpMutationData {
  signUp: PartialTypeUser;
}

export interface ISignUpMutationVariables {
  email: string;
  password: string;
}

export interface ILogoutMutationData {
  logout: boolean;
}

export interface IUseLogoutMutationResult
  extends MutationResult<ILogoutMutationData> {
  logoutMutation: () => Promise<FetchResult<ILogoutMutationData>>;
}
