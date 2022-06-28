import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4x2po3l03mo01uh26dm9fd2/master',
    cache: new InMemoryCache()
})