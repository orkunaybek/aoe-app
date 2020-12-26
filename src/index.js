import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";
import UnitContextProvider from "./context/UnitContext.js";

ReactDOM.render(
  <UnitContextProvider>
    <App />
  </UnitContextProvider>,
  document.getElementById("root")
);
