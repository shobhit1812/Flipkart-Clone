import React from "react"
import ReactDOM from "react-dom/client"
import { FilterProvider } from "./context/FilterContext"
import "./index.css"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <FilterProvider>
    <App />
  </FilterProvider>
)
