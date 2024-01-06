import { Box, Text } from "@chakra-ui/react";
import Cookie from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const HomeScreen = () => {
  const navigate = useNavigate();
  const validateUser = () => {
    const cookie = Cookie.get("uid");

    if (!cookie) {
      navigate("/login");
    }
  };
  useEffect(() => {
    validateUser();
  }, []);
  return (
    <Box>
      <Text>Home Page</Text>
    </Box>
  );
};

export default HomeScreen;
