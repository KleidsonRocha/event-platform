import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient ({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oplsb80sen01z4ccr00t4l/master',
    cache: new InMemoryCache()
})