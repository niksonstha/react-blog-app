/* eslint-disable react/prop-types */
import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/home" element={<HomeScreen />} />
      </Routes>
    </Box>
  );
}

export default App;
