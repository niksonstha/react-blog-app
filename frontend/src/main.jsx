import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { theme } from "./theme/theme.js";
import { extendTheme } from "@chakra-ui/react";

const customeTheme = extendTheme(theme);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <ChakraProvider theme={customeTheme}>
      <App />
    </ChakraProvider>
  </Router>
);
