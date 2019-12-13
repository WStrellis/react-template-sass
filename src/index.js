import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import foo from "./foo";

console.log(foo());

ReactDOM.render(
  <App title={"hot module replacement is cool"} />,
  document.getElementById("root")
);
// enable hot reload in development
module.hot.accept();
