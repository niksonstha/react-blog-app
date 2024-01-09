import { Box } from "@chakra-ui/react";
import { Routes, Route, useLocation } from "react-router-dom";
import RegisterScreen from "./user/screens/RegisterScreen";
import HomeScreen from "./user/screens/HomeScreen";
import LoginScreen from "./user/screens/LoginScreen";
import Navbar from "./user/components/Navbar";
import ProtectedRoute from "./user/private/ProtectedRoute";
import ProfileScreen from "./user/screens/ProfileScreen";
import ProfileInfo from "./user/components/ProfileInfo";
import UpdateProfile from "./user/components/UpdateProfile";
import ChangePassword from "./user/components/ChangePassword";
import ProductsScreen from "./user/screens/ProductsScreen";
import AdminHomeScreen from "./admin/screen/AdminHomeScreen";

function App() {
  const location = useLocation();

  return (
    <Box>
      {!["/login", "/register", "/admin/register"].includes(
        location.pathname
      ) && <Navbar />}
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

        <Routes>
          <Route path="/admin/register" element={<AdminHomeScreen />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
