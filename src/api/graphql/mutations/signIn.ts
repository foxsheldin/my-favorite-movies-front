import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation signIn($data: AuthDto!) {
    signIn(data: $data)
  }
`;
