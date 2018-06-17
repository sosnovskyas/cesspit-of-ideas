import * as React from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { App } from "./containers";
import "./modules/redux/redux-module";
import { store } from "./modules/redux/redux-module";
import { theme as defaultTheme } from "./themes/default";

const theme = createMuiTheme(defaultTheme);
export const root = document.querySelector("#cesspit-of-ideas");

render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  root
);
