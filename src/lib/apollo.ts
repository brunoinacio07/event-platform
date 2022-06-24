import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oqg27l0unx01z47yjt6uks/master',
  cache: new InMemoryCache()
})