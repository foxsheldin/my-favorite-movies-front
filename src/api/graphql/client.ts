import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { createFragmentRegistry } from "@apollo/client/cache";
import { COMMON_MOVIE_FIELDS } from "./fragments/movieData";

export const client = new ApolloClient({
  uri: process.env.REACT_APP_BACKEND_API_URL,
  cache: new InMemoryCache({
    fragments: createFragmentRegistry(
      gql`
        ${COMMON_MOVIE_FIELDS}
      `
    ),
  }),
});
