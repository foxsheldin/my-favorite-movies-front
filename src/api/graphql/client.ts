import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  gql,
} from "@apollo/client";
import { createFragmentRegistry } from "@apollo/client/cache";
import { setContext } from "@apollo/client/link/context";
import { COMMON_MOVIE_FIELDS } from "./fragments/movieData";

const httpLink = createHttpLink({ uri: process.env.REACT_APP_BACKEND_API_URL });

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("access_token");

  return {
    credentials: "include",
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    fragments: createFragmentRegistry(
      gql`
        ${COMMON_MOVIE_FIELDS}
      `
    ),
  }),
  credentials: "include",
});
