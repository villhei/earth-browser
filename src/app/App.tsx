import React, { useState } from "react"
import Globe from "~/src/globe"
import { Controls, Config, DEFAULT_CONFIG } from "~/src/controls"
import { Provider as ApolloProvider } from "~/src/graphql"
import "./App.css"

const App = () => {
  const [config, setConfig] = useState<Config>(DEFAULT_CONFIG)
  return (
    <ApolloProvider>
      <div className="header">
        <h1>Hello maps</h1>
      </div>
      <div style={{ flex: 1, display: "flex" }}>
        <Controls title="Controls" config={config} onChange={setConfig} />
        <Globe config={config} />
      </div>
    </ApolloProvider>
  )
}

export default App
