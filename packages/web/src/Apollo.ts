import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const cache = new InMemoryCache();

export const client = new ApolloClient({
    link: new HttpLink({
      uri: 'http://localhost:4000/graphql',
      credentials: 'include'
    }),
  cache
});