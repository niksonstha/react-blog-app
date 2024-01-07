/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Text, Button } from "@chakra-ui/react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const HomeScreen = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    Cookies.remove("uid");
    navigate("/login");
  };

  return (
    <Box>
      {/* <Text>Home Page</Text>
      <Button onClick={logoutHandler}>Logout</Button> */}
    </Box>
  );
};

export default HomeScreen;
