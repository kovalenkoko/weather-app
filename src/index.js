import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";
import store from "store";

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <App />
  </Provider>,
  document.getElementById("root")
);
