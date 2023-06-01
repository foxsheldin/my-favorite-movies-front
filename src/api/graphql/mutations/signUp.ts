import { gql } from "@apollo/client";

export const SIGN_UP = gql`
  mutation signUp($data: AuthDto!) {
    signUp(data: $data) {
      id
      email
    }
  }
`;
