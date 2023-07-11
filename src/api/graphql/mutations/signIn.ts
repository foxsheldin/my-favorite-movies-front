import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(authDto: { email: $email, password: $password }) {
      user {
        email
        id
      }
      access_token
    }
  }
`;
