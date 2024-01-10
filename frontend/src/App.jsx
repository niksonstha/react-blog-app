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
import AdminProtectedRoute from "./admin/private/AdminProtectedRoute";
import CustomerListScreen from "./admin/screen/CustomerListScreen";
import CategoryAddScreen from "./admin/screen/CategoryAddScreen";
import MenuAddScreen from "./admin/screen/MenuAddScreen";
import DashboardScreen from "./admin/screen/DashboardScreen";

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
        "/admin/dashboard/customers",
        "/admin/dashboard/category",
        "/admin/dashboard/menu",
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

          <Route element={<AdminProtectedRoute />}>
            <Route path="/admin/dashboard/" element={<AdminDashboard />}>
              <Route path="" element={<DashboardScreen />} />
              <Route path="customers" element={<CustomerListScreen />} />
              <Route path="category" element={<CategoryAddScreen />} />
              <Route path="menu" element={<MenuAddScreen />} />
            </Route>
          </Route>
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
