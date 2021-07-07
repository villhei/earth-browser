import React from "react"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client"

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
})

export const Provider: React.FC = ({ children }) => {
  console.log("apollo")
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
