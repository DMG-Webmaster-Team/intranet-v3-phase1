import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./fonts/FreigDisProMed.otf";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from "./App";
import "./i18n";
import { BrowserRouter as Router } from "react-router-dom";
import { LanguageProvider } from "./containers/Language";
import { IntranetProvider } from "./context";
import { LangProvider } from "./langContext";


ReactDOM.render(
  <LanguageProvider>
    <IntranetProvider>
    <LangProvider>
      <Router>
        <App />
      </Router>
    </LangProvider>
    </IntranetProvider>
  </LanguageProvider>,
  document.getElementById("root")
);
