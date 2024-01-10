import { Box } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
const AdminDashboard = () => {
  return (
    <Box display={"flex"}>
      <Box flex={1}>
        <Sidebar />
      </Box>
      <Box flex={6}>Dashboard</Box>
    </Box>
  );
};

export default AdminDashboard;
