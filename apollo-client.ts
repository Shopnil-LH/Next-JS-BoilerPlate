/**
 * Configuration file for apollo client.
 */

import { HttpLink, ApolloClient, InMemoryCache } from '@apollo/client';

/**
 * TODO: Modify to use appropriate graphql uri
 */
const GRAPHQL_URI = 'https://countries.trevorblades.com';

const httpLink = new HttpLink({ uri: GRAPHQL_URI });

const client = new ApolloClient({
  uri: GRAPHQL_URI,
  cache: new InMemoryCache(),
  /**
   * Additional configurations
   */
  /*  
  credentials: 'omit',
  headers: {
    authorization: localStorage.getItem('token'),
  }, */
});

export default client;
