import * as React from "react";
import * as ReactDom from "react-dom";

import { App } from "../APP.jsx";

window.addEventListener("load", () => {
  ReactDom.hydrate(<App />, document.getElementById("react_root"));
});
