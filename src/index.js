import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./views/shared/global/index";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles>
      <ThemeProvider theme>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </GlobalStyles>
  </React.StrictMode>,
  document.getElementById("root")
);
