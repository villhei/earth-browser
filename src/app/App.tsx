import React from "react"
import { Provider as ApolloProvider } from "~/src/graphql"
import { MainScreen } from "~/src/mainscreen/"

const App = () => {
  return (
    <ApolloProvider>
      <MainScreen />
    </ApolloProvider>
  )
}

export default App
