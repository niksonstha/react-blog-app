import { Box } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const AdminDashboard = () => {
  const [closeSideBar, setCloseSideBar] = useState(true);

  const handleSidebar = () => {
    setCloseSideBar(false);
  };

  return (
    <Box display={"flex"} gap={5}>
      {!closeSideBar && (
        <Box
          ml={3}
          mt={3}
          cursor={"pointer"}
          onClick={() => setCloseSideBar(true)}
        >
          <FaBars />
        </Box>
      )}
      <Box
        flex={closeSideBar ? 1.3 : 0}
        transition={"opacity 0.3s ease-in"}
        opacity={closeSideBar ? 1 : 0}
      >
        {closeSideBar && <Sidebar handleSidebar={() => handleSidebar()} />}
      </Box>
      {/* render the main content */}
      <Box flex={7}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminDashboard;
