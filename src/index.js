import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <App title={"hot module replacement is cool"} />,
  document.getElementById("root")
);
// enable hot reload in development
module.hot.accept();
