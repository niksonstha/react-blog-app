import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { theme } from "./theme/theme.js";
import { extendTheme } from "@chakra-ui/react";
import React from "react";

const customeTheme = extendTheme(theme);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ChakraProvider theme={customeTheme}>
        <App />
      </ChakraProvider>
    </Router>
  </React.StrictMode>
);
