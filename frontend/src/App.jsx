import { Box } from "@chakra-ui/react";
import { Routes, Route, useLocation } from "react-router-dom";

// ? User
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

// ? Admin
import AdminRegisterScreen from "./admin/screen/AdminRegisterScreen";
import AdminLoginScreen from "./admin/screen/AdminLoginScreen";
import AdminDashboard from "./admin/screen/AdminDashboard";

function App() {
  const location = useLocation();

  return (
    <Box>
      {![
        "/login",
        "/register",
        "/admin/register",
        "/admin/login",
        "/admin/dashboard",
      ].includes(location.pathname) && <Navbar />}
      <Box>
        <Routes>
          {/* User Side Routes */}
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

          {/*  Admin Side Routes */}
          <Route path="/admin/register" element={<AdminRegisterScreen />} />
          <Route path="/admin/login" element={<AdminLoginScreen />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
