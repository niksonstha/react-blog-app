import { Box } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
const AdminDashboard = () => {
  return (
    <Box display={"flex"}>
      <Box flex={1}>
        <Sidebar />
      </Box>
      <Box flex={6}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminDashboard;
