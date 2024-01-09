import { Box } from "@chakra-ui/react";
import { Routes, Route, useLocation } from "react-router-dom";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./private/ProtectedRoute";
import ProfileScreen from "./screens/ProfileScreen";
import ProfileInfo from "./components/ProfileInfo";
import UpdateProfile from "./components/UpdateProfile";
import ChangePassword from "./components/ChangePassword";
import ProductsScreen from "./screens/ProductsScreen";

function App() {
  const location = useLocation();

  return (
    <Box>
      {!["/login", "/register"].includes(location.pathname) && <Navbar />}
      <Box>
        <Routes>
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/login" element={<LoginScreen />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<HomeScreen />} />

            <Route path="/profile/" element={<ProfileScreen />}>
              <Route path="" element={<ProfileInfo />} />
              <Route path="updateProfile" element={<UpdateProfile />} />
              <Route path="changePassword" element={<ChangePassword />} />
            </Route>

            <Route path="products" element={<ProductsScreen />} />
          </Route>
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
