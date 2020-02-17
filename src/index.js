import React from "react";
import ReactDom from "react-dom";
import App from "./App";
// component
function Hello() {
  return <h1>Hello React</h1>;
}
ReactDom.render(<App />, document.getElementById("root"));
