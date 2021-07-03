import React from "react"
import ReactDOM from "react-dom"
import Globe from "./globe"

const App = () => {
  return (
    <>
      <h1>Hello maps</h1>
      <Globe />
    </>
  )
}

const container = document.getElementById("app")

ReactDOM.render(<App />, container)
