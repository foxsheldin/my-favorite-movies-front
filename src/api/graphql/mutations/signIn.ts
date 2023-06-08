import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(data: { email: $email, password: $password })
  }
`;
